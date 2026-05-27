const cursorGlow = document.getElementById("cursorGlow");

// ======================================================
// CURSOR GLOW EFFECT
// ======================================================

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

// CLICK ANIMATION

document.addEventListener("click", () => {
  cursorGlow.style.transform = "translate(-50%, -50%) scale(1.8)";

  setTimeout(() => {
    cursorGlow.style.transform = "translate(-50%, -50%) scale(1)";
  }, 150);
});

// ======================================================
// LOADER
// ======================================================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 2000);
});

// ======================================================
// MENU TOGGLE
// ======================================================

function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// ======================================================
// CLOSE MENU AFTER LINK CLICK
// ======================================================

document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("dropdownMenu").style.display = "none";
  });
});

// ======================================================
// CLOSE MENU WHEN CLICK OUTSIDE
// ======================================================

document.addEventListener("click", function (event) {
  const menu = document.getElementById("dropdownMenu");
  const menuBtn = document.querySelector(".menu-btn");

  if (menu && !menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.style.display = "none";
  }
});

// ======================================================
// SHOW MORE / LESS EXPENSES
// ======================================================

function showMoreExpenses(btn) {
  const hiddenRows = document.querySelectorAll(".hidden-expense");

  if (btn.innerText.includes("Many More")) {
    hiddenRows.forEach((row) => {
      row.style.display = "table-row";
    });

    btn.innerText = "⬆️ Show Less ⬆️";
  } else {
    hiddenRows.forEach((row) => {
      row.style.display = "none";
    });

    btn.innerText = "⬇️ Many More ⬇️";
  }
}

// ======================================================
// SHOW MORE / LESS DONATIONS
// ======================================================

function showMoreDonations(btn) {
  const hiddenRows = document.querySelectorAll(".hidden-donation");

  if (btn.innerText.includes("Many More")) {
    hiddenRows.forEach((row) => {
      row.style.display = "table-row";
    });

    btn.innerText = "⬆️ Show Less ⬆️";
  } else {
    hiddenRows.forEach((row) => {
      row.style.display = "none";
    });

    btn.innerText = "⬇️ Many More ⬇️";
  }
}

// ======================================================
// SEARCH DONATION TABLE
// ======================================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();

    const table = document.getElementById("donationTable");

    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[1];

      if (td) {
        const txtValue = td.textContent || td.innerText;

        if (txtValue.toLowerCase().includes(filter)) {
          tr[i].style.display = "table-row";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });
}

// ======================================================
// FLOWER ANIMATION
// ======================================================

function createFlower() {
  const flower = document.createElement("div");

  flower.classList.add("flower");

  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * window.innerWidth + "px";

  flower.style.animationDuration = 5 + Math.random() * 5 + "s";

  flower.style.fontSize = 20 + Math.random() * 20 + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

// FIRST FLOWERS

for (let i = 0; i < 20; i++) {
  setTimeout(createFlower, i * 200);
}

// REPEAT FLOWERS

setInterval(() => {
  for (let i = 0; i < 20; i++) {
    setTimeout(createFlower, i * 200);
  }
}, 30000);

// ======================================================
// WELCOME SOUND
// ======================================================

window.addEventListener("load", () => {
  setTimeout(() => {
    const sound = document.getElementById("welcomeSound");

    if (sound) {
      sound.volume = 1;

      const playPromise = sound.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          document.body.addEventListener(
            "click",
            () => {
              sound.play();
            },
            { once: true },
          );
        });
      }
    }
  }, 1500);
});

// ======================================================
// BUTTON HOVER EFFECT
// ======================================================

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// ======================================================
// SMOOTH SCROLL EFFECT
// ======================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ======================================================
// HERO BUTTON EFFECT
// ======================================================

const heroBtn = document.querySelector(".btn");

if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    alert("🙏 गणपती बाप्पा मोरया 🙏");
  });
}
