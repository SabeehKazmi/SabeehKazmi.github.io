const body = document.body;
const themeButton = document.getElementById('theme-button'); // Assuming you have a button with this ID

themeButton.addEventListener('click', () => {
  if (body.dataset.theme === 'dark') {
    body.dataset.theme = 'light';
  } else {
    body.dataset.theme = 'dark';
  }
});
