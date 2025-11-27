/**
 * Template Name: Bootslander
 * Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
    "use strict";
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
        const selectBody = document.querySelector("body");
        const selectHeader = document.querySelector("#header");
        if (!selectBody || !selectHeader)
            return;
        if (!selectHeader.classList.contains("scroll-up-sticky") &&
            !selectHeader.classList.contains("sticky-top") &&
            !selectHeader.classList.contains("fixed-top")) {
            return;
        }
        if (window.scrollY > 100) {
            selectBody.classList.add("scrolled");
        }
        else {
            selectBody.classList.remove("scrolled");
        }
    }
    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    function mobileNavToggle() {
        const body = document.querySelector("body");
        if (!body || !mobileNavToggleBtn)
            return;
        body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
    }
    if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
    }
    /**
     * Hide mobile nav on same-page/hash links
     */
    const navmenuLinks = document.querySelectorAll("#navmenu a");
    navmenuLinks.forEach((navmenu) => {
        navmenu.addEventListener("click", () => {
            const body = document.querySelector("body");
            if (body?.classList.contains("mobile-nav-active")) {
                mobileNavToggle();
            }
        });
    });
    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.remove();
        });
    }
    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");
    function toggleScrollTop() {
        if (!scrollTop)
            return;
        if (window.scrollY > 100) {
            scrollTop.classList.add("active");
        }
        else {
            scrollTop.classList.remove("active");
        }
    }
    if (scrollTop) {
        scrollTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
        if (typeof AOS !== "undefined") {
            AOS.init({
                duration: 600,
                easing: "ease-in-out",
                once: true,
                mirror: false,
            });
        }
    }
    window.addEventListener("load", aosInit);
    /**
     * Initiate glightbox
     */
    if (typeof GLightbox !== "undefined") {
        GLightbox({
            selector: ".glightbox",
        });
    }
    /**
     * Initiate Pure Counter
     */
    if (typeof PureCounter !== "undefined") {
        new PureCounter();
    }
    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener("load", function () {
        if (window.location.hash) {
            const section = document.querySelector(window.location.hash);
            if (section) {
                setTimeout(() => {
                    const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                    window.scrollTo({
                        top: section.offsetTop - parseInt(scrollMarginTop, 10),
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    });
    /**
     * Navmenu Scrollspy
     */
    const navmenuLinksForScrollspy = document.querySelectorAll(".navmenu a");
    function navmenuScrollspy() {
        const scrollPosition = window.scrollY + 200;
        navmenuLinksForScrollspy.forEach((navmenulink) => {
            if (!navmenulink.hash)
                return;
            const section = document.querySelector(navmenulink.hash);
            if (!section)
                return;
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                // Remove active from all links
                document
                    .querySelectorAll(".navmenu a.active")
                    .forEach((link) => link.classList.remove("active"));
                navmenulink.classList.add("active");
            }
            else {
                navmenulink.classList.remove("active");
            }
        });
    }
    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);
})();
