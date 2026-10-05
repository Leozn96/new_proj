document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.route-button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.dataset.page;
      if (page) {
        window.location.href = page;
      }
    });
  });
});
