document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('darkMode');
    const body = document.body;

    darkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
      });
});