import './index.css';

// Animation functions
export function initializeAnimations() {
  const lettersAfterT = document.querySelectorAll("#animated-name .letters-after-t span");
  const lettersAfterB = document.querySelectorAll("#animated-name .letters-after-b span");
  const fullNameWrapper = document.getElementById("full-name-wrapper");

  if (!lettersAfterT.length || !lettersAfterB.length || !fullNameWrapper) {
    console.warn('Animation elements not found, skipping animations');
    return;
  }

  function revealSequentially(letters, delay = 200) {
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("visible");
      }, delay * index);
    });
  }

  // Reveal letters after T
  revealSequentially(lettersAfterT, 200);

  // Reveal letters after B after T finishes
  const totalTTime = lettersAfterT.length * 200 + 200;
  setTimeout(() => {
    revealSequentially(lettersAfterB, 200);

    // Calculate total time for lettersAfterB animation
    const totalBTime = lettersAfterB.length * 200 + 200;

    // Trigger wave animation on the full name after all letters revealed
    setTimeout(() => {
      fullNameWrapper.classList.add("wave");
    }, totalBTime);
  }, totalTTime);
}

// Dropdown animation
export function initializeDropdowns() {
  const dropdown = document.getElementById("lang-dropdown");
  if (!dropdown) return;

  const menu = dropdown.querySelector("ul");
  const chevron = dropdown.querySelector("i");

  if (!menu || !chevron) return;

  dropdown.addEventListener("mouseenter", () => {
    menu.classList.remove("opacity-0", "pointer-events-none", "-translate-y-2");
    menu.classList.add("opacity-100", "translate-y-0");
    chevron.classList.add("rotate-180");
  });

  dropdown.addEventListener("mouseleave", () => {
    menu.classList.add("opacity-0", "pointer-events-none", "-translate-y-2");
    menu.classList.remove("opacity-100", "translate-y-0");
    chevron.classList.remove("rotate-180");
  });
}

// Mobile menu
export function initializeMobileMenu() {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuButton || !mobileMenu) return;

  const menuIcon = menuButton.querySelector("i");
  if (!menuIcon) return;

  let isOpen = false;

  menuButton.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      // Open menu
      mobileMenu.classList.remove("opacity-0", "-translate-y-full", "scale-95", "pointer-events-none");
      mobileMenu.classList.add("opacity-100", "translate-y-0", "scale-100", "pointer-events-auto");
      menuIcon.classList.add("rotate-90");
    } else {
      // Close menu
      mobileMenu.classList.add("opacity-0", "-translate-y-full", "scale-95", "pointer-events-none");
      mobileMenu.classList.remove("opacity-100", "translate-y-0", "scale-100", "pointer-events-auto");
      menuIcon.classList.remove("rotate-90");
    }
  });

  // Optional: Close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      isOpen = false;
      mobileMenu.classList.add("opacity-0", "-translate-y-full", "scale-95", "pointer-events-none");
      mobileMenu.classList.remove("opacity-100", "translate-y-0", "scale-100", "pointer-events-auto");
      menuIcon.classList.remove("rotate-90");
    });
  });

  
}