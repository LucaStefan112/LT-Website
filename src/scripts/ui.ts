/* =========================================================================
   LT Strategy Partners — client interactivity
   -------------------------------------------------------------------------
   One small, dependency-free module. Handles:
     • scroll-aware sticky header
     • scroll reveals (IntersectionObserver, reduced-motion aware)
     • active nav-link highlighting (IntersectionObserver)
     • accessible mobile menu (focus trap, aria-expanded, Escape, scroll lock)
   Content stays visible if this never runs (progressive enhancement).
   ========================================================================= */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* ------------------------------------------------------ scroll-aware header */
function initHeader(): void {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;

  let ticking = false;
  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    ticking = false;
  };
  update();
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}

/* --------------------------------------------------------- scroll reveals */
function initReveals(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  if (els.length === 0) return;

  // Reduced motion or no IO support → just show everything.
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------- active nav highlight */
function initActiveNav(): void {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main section[id]")
  );
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")
  );
  if (sections.length === 0 || links.length === 0) return;
  if (!("IntersectionObserver" in window)) return;

  const linkFor = (id: string) =>
    links.find((l) => (l.getAttribute("href") || "").endsWith(`#${id}`));

  const setActive = (id: string | null) => {
    links.forEach((l) => {
      const on = !!id && (l.getAttribute("href") || "").endsWith(`#${id}`);
      l.classList.toggle("is-active", on);
      if (on) l.setAttribute("aria-current", "true");
      else l.removeAttribute("aria-current");
    });
  };

  const visible = new Map<string, number>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = entry.target.id;
        if (entry.isIntersecting) visible.set(id, entry.intersectionRatio);
        else visible.delete(id);
      }
      let bestId: string | null = null;
      let bestRatio = 0;
      for (const [id, ratio] of visible) {
        if (linkFor(id) && ratio >= bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }
      if (bestId) setActive(bestId);
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
  );

  sections.forEach((s) => io.observe(s));
}

/* ------------------------------------------------------- accessible menu */
function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-menu-panel]");
  if (!toggle || !panel) return;

  const focusableSelector =
    'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

  let open = false;

  const focusables = () =>
    Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)).filter(
      (el) => el.offsetParent !== null
    );

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      close();
      toggle.focus();
      return;
    }
    if (e.key !== "Tab") return;
    const items = focusables();
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const onClickOutside = (e: MouseEvent) => {
    if (!open) return;
    const t = e.target as Node;
    if (!panel.contains(t) && !toggle.contains(t)) close();
  };

  function openMenu(): void {
    open = true;
    panel.hidden = false;
    // next frame so the transition runs
    requestAnimationFrame(() => panel.classList.add("is-open"));
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.documentElement.classList.add("menu-open");
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("click", onClickOutside);
    const items = focusables();
    if (items.length) items[0].focus();
  }

  function close(): void {
    if (!open) return;
    open = false;
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.documentElement.classList.remove("menu-open");
    document.removeEventListener("keydown", onKeydown);
    document.removeEventListener("click", onClickOutside);
    const done = () => {
      if (!open) panel.hidden = true;
      panel.removeEventListener("transitionend", done);
    };
    if (prefersReducedMotion) panel.hidden = true;
    else panel.addEventListener("transitionend", done);
  }

  toggle.addEventListener("click", () => (open ? close() : openMenu()));

  // Close after navigating to an in-page anchor / route from the panel.
  panel.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => close())
  );

  // Reset if resized up to desktop. Threshold matches the CSS nav breakpoint
  // (900px) in Header.astro so the menu only auto-closes once the desktop nav
  // actually takes over.
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900 && open) close();
  });
}

/* ---------------------------------------------------------------- bootstrap */
function init(): void {
  initHeader();
  initReveals();
  initActiveNav();
  initMobileMenu();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
