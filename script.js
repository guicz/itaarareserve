document.documentElement.classList.add("has-js");

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuPanel = document.querySelector("[data-menu-panel]");
const form = document.querySelector("[data-lead-form]");
const hero = document.querySelector(".hero");
const heroVideo = document.querySelector("[data-hero-video]");
const leisureCards = document.querySelectorAll(".leisure-card");
const whatsappNumber = "555599953002";

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (header && menuToggle && menuPanel) {
  const setMenuOpen = (isOpen) => {
    header.classList.toggle("is-menu-open", isOpen);
    menuPanel.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!header.classList.contains("is-menu-open"));
  });

  menuPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

if (hero && heroVideo && !document.documentElement.classList.contains("is-file-preview")) {
  const markVideoReady = () => hero.classList.add("is-video-ready");

  const setupYouTubePlayer = () => {
    if (!window.YT || !window.YT.Player) return;

    new window.YT.Player(heroVideo, {
      events: {
        onStateChange(event) {
          if (event.data === window.YT.PlayerState.PLAYING) {
            markVideoReady();
          }
        }
      }
    });
  };

  if (window.YT && window.YT.Player) {
    setupYouTubePlayer();
  } else {
    window.onYouTubeIframeAPIReady = setupYouTubePlayer;

    const apiScript = document.createElement("script");
    apiScript.src = "https://www.youtube.com/iframe_api";
    apiScript.async = true;
    document.head.appendChild(apiScript);
  }
}

if (leisureCards.length) {
  if ("IntersectionObserver" in window) {
    const leisureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          leisureObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.24 }
    );

    leisureCards.forEach((card) => leisureObserver.observe(card));
  } else {
    leisureCards.forEach((card) => card.classList.add("is-visible"));
  }
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    const message = [
      "Olá, quero receber informações dos últimos terrenos do Itaara Reserve.",
      "",
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone: ${phone}`
    ].join("\n");

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
