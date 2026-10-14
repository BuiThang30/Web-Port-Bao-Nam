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
        ],
        linksTitle: "Related Project",
        links: [
            ["Urban Trash Can", "robotics.html#robo-5"]
        ]
    },
    ican: {
        title: "International Invention Innovation Competition in Canada (iCAN)",
        count: 6,
        meta: ["Host & Date", "Toronto International Society of Innovation & Advanced Skills (TISIAS) | August 2026 (Toronto, Canada)"],
        overview: "iCAN serves as a premier global platform for creative inventions and technological innovations. This project earned top-tier international honors, including dual special awards for creativity and innovation.",
        listTitle: "Key Highlights:",
        items: [
            ["Global Innovation Defense", "Successfully articulated complex technical architectures, intellectual property potential, and real-world impact to an international panel of judges."],
            ["Product Viability & Usability", "Refined the product design framework to balance technical complexity with user accessibility and practical deployment readiness."],
            ["Cross-Border Technical Communication", "Expanded professional perspectives by engaging with leading international engineers, patent specialists, and tech innovators."],
            "Awarded the **Gold Award** for exceptional technical innovation and product viability.",
            "Received the **Korea Innovation Academy (KiA) Special Award** and the **OCIIP African Award** for creative excellence and design impact."
        ],
        linksTitle: "Related Project",
        links: [
            ["ZenSleep: AI-Powered Modular Sleep-Tracking System", "robotics.html#robo-6"]
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
        ],
        linksTitle: "Related Project",
        links: [
            ["Autonomous Indoor Air Quality Monitoring & Purification Robot", "robotics.html#robo-4"]
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
        linksTitle: "Related Project",
        links: [
            ["VEX IQ Competitive Robot (Team 25812M)", "robotics.html#robo-2"]
        ]
    },
    vsar: {
        title: "Vietnam STEM AI Robotics (VSAR)",
        count: 3,
        meta: ["Event Date", "December 2024"],
        overview: "The Vietnam STEM AI Robotics competition brings together top-tier student engineers to test mechanical precision, autonomous programming, and real-time operational reliability under strict competitive constraints.",
        listTitle: "Key Highlights:",
        items: [
            "**Successfully navigated** the high-stakes learning curve of a debut national competition, turning first-time tournament nerves into sharp, strategic execution.",
            "**Stepped up as the primary system controller**, taking full ownership of real-time machine operation and maneuver precision during live matches.",
            "**Proved rapid adaptability** under tight operational time constraints, laying the foundational engineering grit required for subsequent international achievements."
        ],
        linksTitle: "Related Project",
        links: [
            ["Teleoperated Seed-Planting Assistive Robot", "robotics.html#robo-1"]
        ]
    },
    tekmonk: {
        title: "TekMonk Coding Olympiad",
        count: 3,
        meta: ["Event Date", "March 2026"],
        overview: "A competitive coding and application development arena testing software engineering capabilities from the preliminary rounds through national evaluation.",
        listTitle: "Key Highlights:",
        items: [
            "**Algorithmic Optimization:** Mastered time-complexity reduction and dynamic programming techniques to pass strict automated test-case evaluation limits.",
            "**Performance Under Pressure:** Developed speed, focus, and rapid debugging skills during timed competitive rounds.",
            "Achieved **Second Prize** during the rigorous preliminary coding round.",
            "Recognized as a **Potential Winner** in the national round for developing a multi-functional travel application with robust data architecture."
        ],
        linksTitle: "Related Project",
        links: [
            ["Vietnam Explorer (Travel App)", "robotics.html#robo-3"]
        ]
    },
    opendata: {
        title: "Open Data Exploration Summer Camp",
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
        meta: ["Event Date", "June 2026"],
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
        meta: ["Event Date", "August 2025"],
        overview: "One of the largest international school-aged mathematics competitions, testing logical reasoning, pattern recognition, and creative problem-solving rather than standard formulas.",
        listTitle: "Key Highlights:",
        items: [
            "Awarded a formal **Distinction** for placing among the top-performing tier of participants worldwide in the Intermediate Division.",
            ["Analytical Rigor & Speed", "Sharpened rapid mathematical logic, pattern recognition, and non-routine problem-solving strategies under intense time pressure."],
            ["Algorithmic Foundations", "Built a strong theoretical base in number theory, combinatorics, and discrete math—direct prerequisites for advanced computer science and algorithm design."]
        ]
    },
    salt: {
        title: "Saltlux Technology JSC",
        count: 5,
        meta: ["Timeline & Role", "Data Curation & Labeling Intern | Jun-Jul 2026"],
        overview: "An internship at Saltlux Technology JSC centered on AI model optimization, preparing reliable data for machine learning pipelines within a professional corporate environment.",
        listTitle: "Key Highlights:",
        items: [
            "**Curated, cleaned, and labeled high-quality datasets** to enhance system accuracy, demonstrating rigor in the data foundations of AI.",
            "**Handled large-scale data collection** and preprocessing alongside engineering teams, gaining hands-on insight into the complete AI development lifecycle.",
        ]
    },
    nadat: {
        title: "Vietnam National Data Application Joint Stock Company (NADAT)",
        count: 4,
        meta: ["Timeline & Role", "Mechanical Tech Data Engineering Intern | Jul-Dec 2025"],
        overview: "At Vietnam National Data Application Joint Stock Company (NADAT), contributed as a Data Analysis Intern to the National Information System on Science, Technology, and Innovation (Platform #49), building a dependable technical taxonomy for the platform.",
        listTitle: "Key Highlights:",
        items: [
            "**Classified and standardized** thousands of complex science and technology product records by their core engineering nature, establishing a dependable technical taxonomy.",
            "**Resolved** dataset discrepancies and **adapted** rapidly to technical data conventions, reducing downstream rework and supporting on-time delivery of critical platform milestones.",
        ]
    },
    re1: {
        title: "Research: Tamm Plasmon Photonic Sensor Based On Porous Silicon",
        count: 8,
        meta: ["Timeline & Role", "Research Assistant | Jan-Apr 2026"],
        overview: "As a Research Assistant on the Tamm Plasmon Photonic Sensor project, contributed to advancing high-sensitivity optical sensing technologies through quantitative data analysis and theoretical modeling.",
        listTitle: "Key Highlights:",
        items: [
            "Conducted systematic literature reviews and processed complex datasets to evaluate sensor performance metrics, demonstrating strong analytical rigor.",
            "Assisted in manuscript preparation by refining data visualizations and technical arguments to academic publication standards, gaining deep insight into nanophotonics research.",
        ]
    },
    re2: {
        title: "Research: Highly Sensitive SERS Sensors Using Silver-Decorated Silicon Pyramid Structures",
        count: 8,
        meta: ["Timeline & Role", "Co-Author | Jun-Oct 2026"],
        overview: "Co-authored a research paper on the fabrication and optimization of Surface-Enhanced Raman Scattering (SERS) sensors based on single-crystalline silicon pyramid substrates decorated with silver nanoparticles via chemical deposition.",
        listTitle: "Key Highlights:",
        items: [
            "Explored the relationship between anisotropic wet-etching parameters and light-trapping geometries to maximize surface area and optical absorption.",
            "Examined FE-SEM microscopy and XRD diffraction patterns to map nanoparticle growth stages and pinpoint the ideal window for stable plasmonic hot spots.",
            " Conducted sensitivity trials using Rhodamine 6G dye, demonstrating that the developed sensor can detect minute concentrations down to $10^{-12}$ M with a massive enhancement factor of $10^{11}$"
        ]
    },
    pyha: {
        title: "Physics Youth of Hanoi Amsterdam (PYHA)",
        count: 6,
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
        count: 3,
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
    },
    fino: {
        title: "Future Innovation Camp 2025",
        count: 3,
        meta: ["Timeline & Role", "Participant | July 2025"],
        overview: "Participated in an intensive innovation workshop, collaborating with peers to conceptualize viable startup models, analyze market scalability, and pitch solutions to an expert panel.",
        listTitle: "Key Contributions:",
        items: [
            ["Startup Conceptualization & Strategy", "Collaborated within an intensive workshop environment to brainstorm, structure, and develop scalable startup concepts targeting real-world market gaps."],
            ["Market Research & Feasibility Analysis", "Conducted rigorous market research and economic feasibility assessments to refine project frameworks and strengthen business models."],
            ["Professional Pitching & Communication", "Delivered a high-impact, professional business pitch in English under tight time constraints, clearly conveying complex value propositions to a panel of judges."]
        ]
    },
    odec: {
        title: "Open Data Exploration Camp",
        count: 4,
        meta: ["Timeline & Role", "Participant & First Place Winner | July 2026"],
        overview: "Competed at the Open Data Exploration Camp hosted at the U.S. Embassy Annex, leveraging open-source space data and geospatial satellite datasets to engineer innovative, data-driven frameworks for global challenges.",
        listTitle: "Key Contributions:",
        items: [
            ["Geospatial Data Processing", "Mastered open-source space data platforms and complex satellite datasets to extract actionable insights and drive technical problem-solving."],
            ["Multidisciplinary Team Collaboration", "Co-created a cohesive, data-driven framework within a multidisciplinary team, uniting technical execution with strategic social impact."],
            ["Award-Winning Presentation & Pitch", "Secured **First Place** among all competing teams by delivering a top-rated pitch to expert mentors, highlighting robust technical implementation and real-world applicability."]
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
            // XÓA target="_blank" ở đây để mở chung một tab:
            + d.links.map(l => `<a href="${l[1]}">${esc(l[0])}</a>`).join(" &middot; ")
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
    // ---> CHÈN THÊM ĐOẠN NÀY ĐỂ TỰ ĐỘNG BẬT POPUP <---
    const urlParams = new URLSearchParams(window.location.search);
    const popupId = urlParams.get('popup');
    if (popupId && POPUPS[popupId]) {
        setTimeout(() => {
            openPopup(popupId);
        }, 150); 
    }

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