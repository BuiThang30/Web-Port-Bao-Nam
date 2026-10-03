/* =====================================================
   RESEARCH & INTERNSHIP: nạp ảnh cho mỗi ô, cuộn / bấm chấm để chuyển ảnh
   Ảnh: image/research-<số ô>-1, -2, -3 ... (tự dò đến khi hết)
   ===================================================== */
const RES_EXTS = [".jpg", ".jpeg", ".png", ".webp"];
const RES_MAX_IMAGES = 15;   // tối đa số ảnh dò cho mỗi ô

/* Thử lần lượt các đuôi file, trả về <img> hoặc null nếu không có */
function resLoadImg(base, alt) {
    return new Promise(resolve => {
        const im = new Image();
        let n = 0;
        im.alt = alt;
        im.onload = () => resolve(im);
        im.onerror = () => {
            n++;
            if (n < RES_EXTS.length) im.src = base + RES_EXTS[n];
            else resolve(null);
        };
        im.src = base + RES_EXTS[0];
    });
}

/* Vùng chứa chấm nằm cùng .research-gallery với ô ảnh */
function resDotsOf(box) {
    const g = box.closest(".research-gallery");
    return g ? g.querySelector(".research-dots") : null;
}

/* Cập nhật chấm đang sáng theo vị trí cuộn */
function resUpdateDots(box) {
    const dots = resDotsOf(box);
    if (!dots) return;
    const h = box.clientHeight || 1;
    const idx = Math.round(box.scrollTop / h);
    dots.querySelectorAll(".research-dot").forEach((d, i) =>
        d.classList.toggle("active", i === idx));
}

/* Sinh chấm (chỉ hiện khi có từ 2 ảnh trở lên) */
function resBuildDots(box, count) {
    const dots = resDotsOf(box);
    if (!dots) return;
    dots.innerHTML = "";
    if (count < 2) return;

    for (let i = 0; i < count; i++) {
        const dot = document.createElement("button");
        dot.className = "research-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Ảnh " + (i + 1));
        dot.addEventListener("click", () => {
            box.scrollTo({ top: i * box.clientHeight, behavior: "smooth" });
        });
        dots.appendChild(dot);
    }
}

async function resFillGallery(box) {
    const id = box.dataset.gallery;
    let count = 0;

    // research-<id>-1, research-<id>-2, ... dừng khi hết ảnh
    for (let i = 1; i <= RES_MAX_IMAGES; i++) {
        const im = await resLoadImg(`image/research-${id}-${i}`, `Research ${id} - ${i}`);
        if (!im) break;
        box.appendChild(im);
        count++;
    }

    // Không có ảnh dạng -1, -2 thì thử ảnh cũ research-<id>
    if (count === 0) {
        const im = await resLoadImg(`image/research-${id}`, `Research ${id}`);
        if (im) {
            box.appendChild(im);
            count = 1;
        }
    }

    resBuildDots(box, count);
}

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".research-scroll[data-gallery]");
    if (!boxes.length) return;

    boxes.forEach(box => {
        // Cuộn chuột / vuốt thì chấm đổi theo
        let ticking = false;
        box.addEventListener("scroll", () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                resUpdateDots(box);
                ticking = false;
            });
        }, { passive: true });

        resFillGallery(box);
    });

    // Đổi kích thước cửa sổ: canh lại chấm cho khớp
    window.addEventListener("resize", () => {
        boxes.forEach(box => resUpdateDots(box));
    });
});