const listening = {
  toggleMenu: () => {
    const button = document.querySelector(".hamburger");
    const menu = document.querySelector(".hamburger-links");

    button.addEventListener("click", () => {
      const ariaExpanded = button.getAttribute("aria-expanded");
      menu.classList.toggle("open");
      button.classList.toggle("open");
      menu.classList.toggle("close");
      button.classList.toggle("close");
      console.log(ariaExpanded);
      if (ariaExpanded === "false") {
        button.setAttribute("aria-expanded", "true");
      } else {
        button.setAttribute("aria-expanded", "false");
      }
    });
  },

  events: () => {
    listening.toggleMenu();
  },
};

listening.events();
