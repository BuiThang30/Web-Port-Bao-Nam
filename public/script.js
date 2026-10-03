document.addEventListener("DOMContentLoaded", () => {
    // 1. Tải HTML của Nav
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;

            // Xử lý menu toggle trên thiết bị di động
            const hamburgerBtn = document.getElementById("hamburger-btn");
            const navLinks = document.getElementById("nav-links");

            if (hamburgerBtn && navLinks) {
                hamburgerBtn.addEventListener("click", () => {
                    navLinks.classList.toggle("active-menu");
                });
            }

            // Xử lý active trạng thái cho Menu tùy theo URL hiện tại
            const currentPath = window.location.pathname.toLowerCase();

            // Xóa class active ở tất cả các thẻ li trước (để an toàn)
            document.querySelectorAll('#nav-links li').forEach(li => li.classList.remove('active'));

            // Kiểm tra từng đường dẫn để active thẻ tương ứng
            if (currentPath.includes("/about")) {
                const link = document.getElementById("link-about");
                if (link) link.parentElement.classList.add("active");
            }
            else if (currentPath.includes("/stem")) {
                const link = document.getElementById("link-stem");
                if (link) link.parentElement.classList.add("active");
            }
            else if (currentPath.includes("/robotics")) {
                const link = document.getElementById("link-robotics");
                if (link) link.parentElement.classList.add("active");
            }
            else if (currentPath.includes("/community")) {
                const link = document.getElementById("link-community");
                if (link) link.parentElement.classList.add("active");
            }
            else {
                // Mặc định bôi đen Homepage nếu là "/" hoặc "/home" hoặc chưa nhận diện được
                const link = document.getElementById("link-home");
                if (link) link.parentElement.classList.add("active");
            }
        })
        .catch(error => console.error(error));

    // 2. Tải hiệu ứng ảnh Slideshow (chỉ áp dụng nếu có slider-img ở trang Home)
    const sliderImg = document.getElementById("slider-img");

    if (sliderImg) {
        const images = [
            "image/home-1.png",
            "image/home-2.png",
            "image/home-3.png"
        ];
        let currentIndex = 0;

        function changeImage() {
            currentIndex = (currentIndex + 1) % images.length;
            sliderImg.src = images[currentIndex];
        }

        setInterval(changeImage, 1500);
    }

    // 3. Trang STEM: Accordion + Carousel
    initStemPage();

    // 4. Trang Robotics: chuyển tab  <-- DÒNG BỊ THIẾU
    initRoboticsPage();
});

/* =====================================================
   TRANG STEM (chỉ chạy khi trang có các phần tử này)
   ===================================================== */
function initStemPage() {

    /* ---------- Accordion ---------- */
    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", () => {
            header.parentElement.classList.toggle("active");
        });
    });

    /* ---------- Carousel ---------- */
    const track = document.querySelector(".carousel-track");
    const dotsBox = document.querySelector(".carousel-dots");
    if (!track || !dotsBox) return; // không có carousel thì bỏ qua

    const slides = track.children;
    let current = 0;

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("button");
        dot.className = "dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Trang " + (i + 1));
        dot.addEventListener("click", () => goTo(i));
        dotsBox.appendChild(dot);
    }

    function goTo(index) {
        current = Math.max(0, Math.min(index, slides.length - 1));
        track.style.transform = `translateX(-${current * 100}%)`;
        dotsBox.querySelectorAll(".dot").forEach((d, i) =>
            d.classList.toggle("active", i === current));
    }

    // Vuốt trên điện thoại
    let startX = 0;
    track.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", e => {
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 50) goTo(diff < 0 ? current + 1 : current - 1);
    });
}

/* =====================================================
   TRANG ROBOTICS (chỉ chạy khi trang có tab)
   ===================================================== */
function initRoboticsPage() {
    const tabs = document.querySelectorAll(".robo-tab");
    const panels = document.querySelectorAll(".robo-panel");
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");
            const target = document.getElementById(tab.dataset.target);
            if (target) target.classList.add("active");
        });
    });
}