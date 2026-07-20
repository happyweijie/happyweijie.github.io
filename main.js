// Progressive enhancement only — the page is fully readable without this file.
(function () {
  "use strict";

  // Both navs (wide-screen sidebar, narrow-screen status line) highlight
  // whichever section is in view. A plain scroll handler (not
  // IntersectionObserver) so the last section still wins when the page
  // bottoms out before it can reach the top of the viewport.
  var links = document.querySelectorAll(".side-nav a, .status-nav a");
  if (links.length) {
    var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
    var ticking = false;

    var highlight = function () {
      ticking = false;
      if (!sections.length) return;
      var threshold = window.innerHeight * 0.3;
      var atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      var current = sections[0].id;
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      });
      if (atBottom) current = sections[sections.length - 1].id;
      links.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + current);
      });
    };

    var onScroll = function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(highlight);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    highlight();
  }
})();
