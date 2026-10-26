document.addEventListener("DOMContentLoaded", function () {
  const actions = document.querySelectorAll(".sidebar nav a");
  actions.forEach(item => {
    item.addEventListener("click", function () {
      actions.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});