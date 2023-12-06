const headerSection = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > headerSection.offsetHeight + 150) {
    headerSection.classList.add("active");
  } else {
    headerSection.classList.remove("active");
  }
});
