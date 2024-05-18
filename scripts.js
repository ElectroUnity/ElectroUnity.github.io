document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
});
