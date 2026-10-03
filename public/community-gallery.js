/* =====================================================
   TRANG COMMUNITY: nạp ảnh cho mỗi ô, cuộn / bấm chấm để chuyển ảnh
   Ảnh: image/community-<số ô>-1, -2, -3 ... (tự dò đến khi hết)
   ===================================================== */
const COMM_EXTS = [".jpg", ".jpeg", ".png", ".webp"];
const COMM_MAX_IMAGES = 15;   // tối đa số ảnh dò cho mỗi ô

/* Thử lần lượt các đuôi file, trả về <img> hoặc null nếu không có */
function commLoadImg(base, alt) {
    return new Promise(resolve => {
        const im = new Image();
        let n = 0;
        im.alt = alt;
        im.onload = () => resolve(im);
        im.onerror = () => {
            n++;
            if (n < COMM_EXTS.length) im.src = base + COMM_EXTS[n];
            else resolve(null);
        };
        im.src = base + COMM_EXTS[0];
    });
}

/* Vùng chứa chấm nằm cùng .community-gallery với ô ảnh */
function commDotsOf(box) {
    const g = box.closest(".community-gallery");
    return g ? g.querySelector(".community-dots") : null;
}

/* Cập nhật chấm đang sáng theo vị trí cuộn */
function commUpdateDots(box) {
    const dots = commDotsOf(box);
    if (!dots) return;
    const h = box.clientHeight || 1;
    const idx = Math.round(box.scrollTop / h);
    dots.querySelectorAll(".community-dot").forEach((d, i) =>
        d.classList.toggle("active", i === idx));
}

/* Sinh chấm (chỉ hiện khi có từ 2 ảnh trở lên) */
function commBuildDots(box, count) {
    const dots = commDotsOf(box);
    if (!dots) return;
    dots.innerHTML = "";
    if (count < 2) return;

    for (let i = 0; i < count; i++) {
        const dot = document.createElement("button");
        dot.className = "community-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Ảnh " + (i + 1));
        dot.addEventListener("click", () => {
            box.scrollTo({ top: i * box.clientHeight, behavior: "smooth" });
        });
        dots.appendChild(dot);
    }
}

async function commFillGallery(box) {
    const id = box.dataset.gallery;
    let count = 0;

    // community-<id>-1, community-<id>-2, ... dừng khi hết ảnh
    for (let i = 1; i <= COMM_MAX_IMAGES; i++) {
        const im = await commLoadImg(`image/community-${id}-${i}`, `Community ${id} - ${i}`);
        if (!im) break;
        box.appendChild(im);
        count++;
    }

    // Không có ảnh dạng -1, -2 thì thử ảnh cũ community-<id>
    if (count === 0) {
        const im = await commLoadImg(`image/community-${id}`, `Community ${id}`);
        if (im) {
            box.appendChild(im);
            count = 1;
        }
    }

    commBuildDots(box, count);
}

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".community-scroll[data-gallery]");
    if (!boxes.length) return;

    boxes.forEach(box => {
        // Cuộn chuột / vuốt thì chấm đổi theo
        let ticking = false;
        box.addEventListener("scroll", () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                commUpdateDots(box);
                ticking = false;
            });
        }, { passive: true });

        commFillGallery(box);
    });

    // Đổi kích thước cửa sổ: canh lại chấm cho khớp
    window.addEventListener("resize", () => {
        boxes.forEach(box => commUpdateDots(box));
    });
});