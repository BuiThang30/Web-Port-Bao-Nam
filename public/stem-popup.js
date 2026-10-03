const POPUP_MODE = "slider";
const SLIDE_MS = 3000;
const IMG_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

const POPUPS = {
    wico: {
        title: "15th World Invention Creativity Olympics (WICO)",
        count: 4,
        meta: ["Host & Date", "Organized by Korea University Invention Association (KUIA) & WIIPA | July 2026 (Seoul, South Korea)"],
        overview: "The World Invention Creativity Olympics brings together top global innovators to showcase breakthrough technological and mechanical solutions. Competing among nearly 400 global projects, this entry demonstrated high-level technical execution and market utility.",
        listTitle: "Key Highlights:",
        items: [
            ["Global Technical Defense", "Successfully presented technical methodologies and defended system viability directly before an international jury of patent and engineering experts."],
            ["Commercial & Patent Mindset", "Developed a deeper focus on real-world feasibility, patentability, and scalable engineering design."],
            ["International Collaboration", "Exchanged research insights and innovation practices with top youth researchers and engineers worldwide."],
            "Secured the prestigious **Gold Award** against an international pool of nearly 400 competing projects."
        ]
    },
    ican: {
        title: "International Invention Innovation Competition in Canada (iCAN)",
        count: 1,
        meta: ["Host & Date", "Toronto International Society of Innovation & Advanced Skills (TISIAS) | August 2026 (Toronto, Canada)"],
        overview: "iCAN serves as a premier global platform for creative inventions and technological innovations. This project earned top-tier international honors, including dual special awards for creativity and innovation.",
        listTitle: "Key Highlights:",
        items: [
            ["Global Innovation Defense", "Successfully articulated complex technical architectures, intellectual property potential, and real-world impact to an international panel of judges."],
            ["Product Viability & Usability", "Refined the product design framework to balance technical complexity with user accessibility and practical deployment readiness."],
            ["Cross-Border Technical Communication", "Expanded professional perspectives by engaging with leading international engineers, patent specialists, and tech innovators."],
            "Awarded the **Gold Award** for exceptional technical innovation and product viability.",
            "Received the **Korea Innovation Academy (KiA) Special Award** and the **OCIIP African Award** for creative excellence and design impact."
        ]
    },
    vsic: {
        title: "Vinschool Science Innovation Challenge (VSIC)",
        count: 4,
        meta: ["Host & Date", "Vinschool Education System | March 2026"],
        overview: "A competitive showcase featuring over 50 prominent prototype projects aimed at tackling environmental and urban infrastructure challenges.",
        listTitle: "Key Highlights:",
        items: [
            ["Sustainable Engineering & Design Thinking", "Applied eco-conscious design principles and iterative rapid prototyping to create energy-efficient hardware."],
            ["Academic Defense & Presentation", "Defended technical methodologies, system architecture, and real-world viability before a judging panel of university professors and industry experts."],
            ["Iterative Prototyping", "Refined physical/digital models through continuous field testing and data validation under contest deadlines."],
            "Earned the **Merit Award** for excellence in sustainable design, environmental hardware integration, and prototype innovation."
        ]
    },
    vex: {
        title: "VEX IQ Robotics World Championship",
        count: 6,
        meta: ["Host & Date", "REC Foundation | May 2025 (Dallas, Texas, USA)"],
        overview: "Competing in Dallas, TX, among over 400 international teams, this event tested advanced robot building, mechanical reliability, and real-time strategic execution on the global stage.",
        listTitle: "Key Highlights:",
        items: [
            ["Algorithmic & Software Excellence", "Honed advanced autonomous programming strategies, earning the prestigious Think Award for outstanding code logic, sensor integration, and execution consistency."],
            ["Global Collaboration & Communication", "Partnered with international alliance teams under high pressure, effectively communicating match strategies across language and cultural barriers."],
            ["Technical Documentation", "Mastered the engineering design process by maintaining an elite engineering notebook and defending design decisions during formal judge interviews."],
            "Won the prestigious **Think Award** for exceptional programming logic, algorithmic structure, and autonomous routine execution.",
            "Advanced as a **Third League (League Finalist)**, managing mechanical assemblies and match strategy under intense competition conditions."
        ],
        linksTitle: "Press",
        links: [
            ["CafeF", "https://cafef.vn/doi-tuyen-hoc-sinh-viet-nam-xuat-sac-gianh-2-giai-tai-giai-robotics-lon-nhat-the-gioi-lot-top-4-419-doi-thi-la-co-do-tung-bay-tren-ban-do-tri-thuc-188250609191143036.chn"],
            ["Kenh14", "https://kenh14.vn/doi-tuyen-hoc-sinh-viet-nam-xuat-sac-gianh-2-giai-tai-giai-robotics-lon-nhat-the-gioi-lot-top-4-419-doi-thi-la-co-do-tung-bay-tren-ban-do-tri-thuc-215250609144115861.chn"],
            ["Doi song & Phap luat", "https://doisongphapluat.nguoiduatin.vn/doi-tuyen-hoc-sinh-viet-nam-xuat-sac-gianh-2-giai-tai-giai-robotics-lon-nhat-the-gioi-lot-top-4419-doi-thi-la-co-do-tung-bay-tren-ban-do-tri-thuc-a541773.html"]
        ]
    },
    vsar: {
        title: "Vietnam STEM AI Robotics (VSAR)",
        count: 3,
        meta: ["Host & Date", "Organized for K-12 STEM Leaders | December 2024 (Hanoi, Vietnam)"],
        overview: "The Vietnam STEM AI Robotics competition brings together top-tier student engineers to test mechanical precision, autonomous programming, and real-time operational reliability under strict competitive constraints.",
        listTitle: "Key Highlights:",
        items: [
            "**Successfully navigated** the high-stakes learning curve of a debut national competition, turning first-time tournament nerves into sharp, strategic execution.",
            "**Stepped up as the primary system controller**, taking full ownership of real-time machine operation and maneuver precision during live matches.",
            "**Proved rapid adaptability** under tight operational time constraints, laying the foundational engineering grit required for subsequent international achievements."
        ]
    },
    opendata: {
        title: "Open Data Exploration Camp",
        count: 4,
        meta: ["Event Date", "July 2026"],
        overview: "Hosted at the U.S. Embassy Annex, this intensive data-driven innovation challenge required teams to leverage open-source space and geospatial data to build scalable solutions.",
        listTitle: "Key Highlights:",
        items: [
            "Captured **First Place** for innovative problem-solving and rapid technical execution within a multidisciplinary team.",
            "Analyzed complex satellite datasets to conceptualize and pitch a data-driven global challenge solution."
        ]
    },
    siam: {
        title: "Siam International Math & Science Olympiads",
        count: 2,
        meta: ["Event Date", "2026"],
        overview: "A highly competitive regional olympiad testing high-level analytical problem-solving in mathematics and empirical science under strict testing constraints.",
        listTitle: "Key Highlights:",
        items: [
            "Earned the **Gold Medal in Mathematics** through advanced calculation and complex logical problem-solving.",
            "Secured the **Bronze Medal in Science** by demonstrating deep conceptual mastery across scientific disciplines."
        ]
    },
    amc12: {
        title: "American Mathematics Competitions (AMC 12)",
        count: 1,
        meta: ["Event Date", "November 2025"],
        overview: "The American Mathematics Competitions (AMC 12) is a premier global assessment challenging students worldwide with complex, non-routine mathematical reasoning problems that test deep analytical speed and conceptual mastery.",
        listTitle: "Key Highlights:",
        items: [
            "Achieved a score placing in the **top 25% worldwide**, demonstrating advanced proficiency in high school mathematics on an international scale.",
            "Navigated rigorous multi-step problem-solving constraints under strict time limits, showcasing high-level mathematical stamina."
        ]
    },
    amcau: {
        title: "Australian Mathematics Competition (AMC) - Intermediate Division",
        count: 2,
        meta: ["Event Date", "2025"],
        overview: "One of the largest international school-aged mathematics competitions, testing logical reasoning, pattern recognition, and creative problem-solving rather than standard formulas.",
        listTitle: "Key Highlights:",
        items: [
            "Awarded a formal **Distinction** for placing among the top-performing tier of participants worldwide in the Intermediate Division.",
            ["Analytical Rigor & Speed", "Sharpened rapid mathematical logic, pattern recognition, and non-routine problem-solving strategies under intense time pressure."],
            ["Algorithmic Foundations", "Built a strong theoretical base in number theory, combinatorics, and discrete math—direct prerequisites for advanced computer science and algorithm design."]
        ]
    },
    pyha: {
        title: "Physics Youth of Hanoi Amsterdam (PYHA)",
        count: 0,
        meta: ["Timeline & Role", "Head of Expertise & Content (Nov 2025 – Present) | Member of Expertise (Nov 2024 – Nov 2025)"],
        overview: "Led the technical strategy and academic content creation for the premier physics club at Hanoi-Amsterdam High School, spearheading flagship annual exhibitions, summer outreach programs, and interactive scientific demonstrations.",
        listTitle: "Key Contributions:",
        items: [
            ["Strategic Event Curation", "Architected and directed all technical content for Fairsics: \"Novaslink\", ensuring rigorous scientific accuracy while delivering engaging experiences for hundreds of attendees."],
            ["Team Management & Mentorship", "Guided the expertise division in designing complex, high-impact physics demonstrations and educational curriculum, mentoring junior members in experiment design."],
            ["Interactive Module Engineering", "Designed hands-on physics apparatuses for Fairsics: \"Vien\", translating abstract theoretical physics into accessible, real-world visual experiments."],
            ["Outreach & Logistics", "Managed technical operations for the Fisico: \"Florovale\" summer program, developing interactive physics workshops tailored to foster interest among secondary school students."]
        ]
    },
    gart: {
        title: "GreenAms Robotics Team",
        count: 0,
        meta: ["Timeline & Role", "Lead Camp Mentor & Member of Mechanics | July 2025"],
        overview: "Served as Member of Mechanics and Lead Technical Mentor for the GART Robotics Camp, a high-impact 5-day technical program hosted at the U.S. Embassy Annex to train nearly 60 aspiring student innovators in mechanical design, structural assembly, and robotics programming.",
        listTitle: "Key Contributions:",
        items: [
            ["Curriculum Engineering & Pedagogy", "Authored and delivered hands-on instructional modules, translating complex mechanical transmission, structural integrity, and logic control concepts into accessible, practical lessons."],
            ["End-to-End Technical Guidance", "Mentored 60 participants through the complete engineering design lifecycle—from initial conceptual sketching and physical prototyping to embedded logic debugging."],
            ["Program Management & Showcase", "Coordinated workshop operations at the U.S. Embassy Annex, culminating in successful live robot arena demonstrations and performance testing."]
        ],
        linksTitle: "Press",
        links: [
            ["Bao Tuyen Quang", "https://baotuyenquang.com.vn/khoa-hoc-cong-nghe/202507/gart-robotics-camp-2025-truyen-cam-hung-lam-chu-stem-dd604f3/"]
        ]
    }
};

/* ---------------- Helpers ---------------- */
function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fmt(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
function buildText(d) {
    let h = `<p><strong>${esc(d.meta[0])}:</strong> ${fmt(d.meta[1])}</p>`;
    h += `<p><strong>Overview:</strong> ${fmt(d.overview)}</p>`;
    h += `<p><strong>${esc(d.listTitle)}</strong></p><ul>`;
    d.items.forEach(it => {
        h += "<li>" + (Array.isArray(it)
            ? `<strong>${esc(it[0])}:</strong> ${fmt(it[1])}`
            : fmt(it)) + "</li>";
    });
    h += "</ul>";
    if (d.links) {
        h += `<p class="popup-links"><strong>${esc(d.linksTitle || "Links")}:</strong> `
            + d.links.map(l => `<a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])}</a>`).join(" &middot; ")
            + "</p>";
    }
    return h;
}
function imgBox(base, alt, onDone) {
    const wrap = document.createElement("div");
    wrap.className = "pg-img";
    const im = new Image();
    let n = 0;
    im.alt = alt;
    im.onload = () => { if (onDone) onDone(); };
    im.onerror = () => {
        n++;
        if (n < IMG_EXTS.length) {
            im.src = base + IMG_EXTS[n];
        } else {
            im.remove();
            wrap.classList.add("empty");
            if (onDone) onDone();
        }
    };
    im.src = base + IMG_EXTS[0];
    wrap.appendChild(im);
    return wrap;
}

/* ---------------- Popup ---------------- */
document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector("[data-popup]")) return;

    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    overlay.innerHTML = `
        <div class="popup-box mode-${POPUP_MODE}" role="dialog" aria-modal="true">
            <button class="popup-close" aria-label="Đóng">&times;</button>
            <div class="popup-scroll">
                <h3 class="popup-title"></h3>
                <div class="popup-gallery"></div>
                <div class="popup-text"></div>
            </div>
        </div>`;
    document.body.appendChild(overlay);

    const box = overlay.querySelector(".popup-scroll");
    const titleEl = overlay.querySelector(".popup-title");
    const gallery = overlay.querySelector(".popup-gallery");
    const textEl = overlay.querySelector(".popup-text");

    let currentId = null, timer = null, idx = 0;

    function stopTimer() { clearInterval(timer); timer = null; }

    /* ---------- Chế độ SCROLL: 2 cột so le, ảnh giữ tỉ lệ gốc ---------- */
    function renderMasonry(d) {
        const cols = (d.count === 1 || window.innerWidth <= 700) ? 1 : 2;
        const wrap = document.createElement("div");
        wrap.className = "pg-masonry" + (d.count === 1 ? " single" : "");
        const colEls = [];
        for (let c = 0; c < cols; c++) {
            const col = document.createElement("div");
            col.className = "pg-col";
            colEls.push(col);
            wrap.appendChild(col);
        }
        for (let i = 1; i <= d.count; i++) {
            colEls[(i - 1) % cols].appendChild(
                imgBox(`image/popup-${currentId}-${i}`, `${d.title} ${i}`)
            );
        }
        gallery.appendChild(wrap);
    }

    /* ---------- Chế độ SLIDER: cùng chiều cao, rộng theo từng ảnh ---------- */
    function renderSlider(d) {
        const viewport = document.createElement("div");
        viewport.className = "pg-viewport";
        const track = document.createElement("div");
        track.className = "pg-track";
        viewport.appendChild(track);
        const dotsBox = document.createElement("div");
        dotsBox.className = "pg-dots";
        gallery.appendChild(viewport);
        gallery.appendChild(dotsBox);

        let stops = [0];
        idx = 0;

        function goTo(i) {
            idx = i >= stops.length ? 0 : (i < 0 ? stops.length - 1 : i);
            track.style.transform = `translateX(-${stops[idx]}px)`;
            dotsBox.querySelectorAll(".pg-dot").forEach((dot, n) =>
                dot.classList.toggle("active", n === idx));
        }
        function startTimer() {
            stopTimer();
            if (stops.length > 1) timer = setInterval(() => goTo(idx + 1), SLIDE_MS);
        }

        // Tính lại các điểm dừng mỗi khi có ảnh load xong / đổi kích thước
        function layout() {
            const kids = Array.from(track.children);
            const last = kids[kids.length - 1];
            const maxOff = Math.max(0, last.offsetLeft + last.offsetWidth - viewport.clientWidth);
            stops = [];
            kids.forEach(k => {
                const off = Math.min(k.offsetLeft, maxOff);
                if (!stops.length || off > stops[stops.length - 1]) stops.push(off);
            });
            if (!stops.length) stops = [0];

            dotsBox.innerHTML = "";
            if (stops.length > 1) {
                stops.forEach((_, n) => {
                    const dot = document.createElement("button");
                    dot.className = "pg-dot";
                    dot.setAttribute("aria-label", "Ảnh " + (n + 1));
                    dot.addEventListener("click", () => { goTo(n); startTimer(); });
                    dotsBox.appendChild(dot);
                });
            }
            goTo(Math.min(idx, stops.length - 1));
            if (!timer) startTimer();
            if (stops.length <= 1) stopTimer();
        }

        for (let i = 1; i <= d.count; i++) {
            track.appendChild(imgBox(`image/popup-${currentId}-${i}`, `${d.title} ${i}`, layout));
        }
        layout();

        viewport.addEventListener("mouseenter", stopTimer);
        viewport.addEventListener("mouseleave", startTimer);
    }

    function renderGallery(d) {
        stopTimer();
        gallery.innerHTML = "";
        // 1 ảnh luôn hiện lớn ở giữa (kiểu scroll) cho đẹp
        if (POPUP_MODE === "slider" && d.count > 1) renderSlider(d);
        else renderMasonry(d);
    }

    function openPopup(id) {
        const d = POPUPS[id];
        if (!d) return;
        currentId = id;
        titleEl.textContent = d.title;
        textEl.innerHTML = buildText(d);
        renderGallery(d);
        box.scrollTop = 0;
        overlay.classList.add("open");
        document.body.classList.add("popup-lock");
    }

    function closePopup() {
        stopTimer();
        overlay.classList.remove("open");
        document.body.classList.remove("popup-lock");
        currentId = null;
    }

    // Bấm vào card
    document.addEventListener("click", e => {
        const card = e.target.closest("[data-popup]");
        if (card) openPopup(card.dataset.popup);
    });

    // Đóng: nút X, bấm nền tối, phím Esc
    overlay.querySelector(".popup-close").addEventListener("click", closePopup);
    overlay.addEventListener("click", e => { if (e.target === overlay) closePopup(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closePopup(); });

    // Đổi kích thước cửa sổ: dựng lại gallery
    window.addEventListener("resize", () => {
        if (currentId) renderGallery(POPUPS[currentId]);
    });
});