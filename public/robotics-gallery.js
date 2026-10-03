/* =====================================================
   TRANG ROBOTICS: nạp ảnh cho mỗi tab, cuộn / bấm chấm để chuyển ảnh
   Ảnh: image/robotics-<số tab>-1, -2, -3 ... (tự dò đến khi hết)
   Khung .robo-gallery, .robo-image, .robo-dots đã có sẵn trong HTML
   ===================================================== */
const ROBO_EXTS = [".jpg", ".jpeg", ".png", ".webp"];
const ROBO_MAX_IMAGES = 15;

/* Thử lần lượt các đuôi file, trả về <img> hoặc null nếu không có */
function roboLoadImg(base, alt) {
    return new Promise(resolve => {
        const im = new Image();
        let n = 0;
        im.alt = alt;
        im.onload = () => resolve(im);
        im.onerror = () => {
            n++;
            if (n < ROBO_EXTS.length) im.src = base + ROBO_EXTS[n];
            else resolve(null);
        };
        im.src = base + ROBO_EXTS[0];
    });
}

/* Lấy vùng chứa chấm nằm cạnh ô ảnh */
function roboDotsOf(box) {
    return box.parentElement.querySelector(".robo-dots");
}

/* Cập nhật chấm đang sáng theo vị trí cuộn */
function roboUpdateDots(box) {
    const dots = roboDotsOf(box);
    if (!dots) return;
    const h = box.clientHeight || 1;
    const idx = Math.round(box.scrollTop / h);
    dots.querySelectorAll(".robo-dot").forEach((d, i) =>
        d.classList.toggle("active", i === idx));
}

/* Sinh chấm vào .robo-dots (chỉ hiện khi có từ 2 ảnh trở lên) */
function roboBuildDots(box, count) {
    const dots = roboDotsOf(box);
    if (!dots) return;
    dots.innerHTML = "";
    if (count < 2) return;

    for (let i = 0; i < count; i++) {
        const dot = document.createElement("button");
        dot.className = "robo-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Ảnh " + (i + 1));
        dot.addEventListener("click", () => {
            box.scrollTo({ top: i * box.clientHeight, behavior: "smooth" });
        });
        dots.appendChild(dot);
    }
}

async function roboFillGallery(box) {
    if (box.dataset.loaded) return;
    box.dataset.loaded = "1";

    const id = box.dataset.gallery;
    let count = 0;

    for (let i = 1; i <= ROBO_MAX_IMAGES; i++) {
        const im = await roboLoadImg(`image/robotics-${id}-${i}`, `Robotics ${id} - ${i}`);
        if (!im) break;
        box.appendChild(im);
        count++;
    }

    if (count === 0) {
        const im = await roboLoadImg(`image/robotics-${id}`, `Robotics ${id}`);
        if (im) {
            box.appendChild(im);
            count = 1;
        }
    }

    roboBuildDots(box, count);
}

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".robo-image[data-gallery]");
    if (!boxes.length) return;

    // Cuộn chuột / vuốt thì chấm đổi theo
    boxes.forEach(box => {
        let ticking = false;
        box.addEventListener("scroll", () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                roboUpdateDots(box);
                ticking = false;
            });
        }, { passive: true });
    });

    // Tab đang mở sẵn: nạp ngay
    const activeBox = document.querySelector(".robo-panel.active .robo-image[data-gallery]");
    if (activeBox) roboFillGallery(activeBox);

    // Bấm tab nào thì nạp ảnh tab đó (nếu chưa nạp) và đưa về ảnh đầu
    document.querySelectorAll(".robo-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            const panel = document.getElementById(tab.dataset.target);
            const box = panel && panel.querySelector(".robo-image[data-gallery]");
            if (!box) return;
            roboFillGallery(box);
            box.scrollTop = 0;
            roboUpdateDots(box);
        });
    });

    // Đổi kích thước cửa sổ: canh lại chấm cho khớp
    window.addEventListener("resize", () => {
        boxes.forEach(box => roboUpdateDots(box));
    });
});