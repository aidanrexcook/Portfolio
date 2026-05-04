const cards = Array.from(document.querySelectorAll(".headshot-card"));
const featured = document.querySelector("#featured-headshot");
const caption = document.querySelector("#featured-caption");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");

    const image = card.dataset.image;
    const label = card.dataset.label;

    if (image && featured) {
      featured.src = image;
    }

    if (label && caption) {
      featured.alt = label;
      caption.textContent = label;
    }
  });
});
