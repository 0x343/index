const toggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    function setTheme(theme) {
      if (theme === 'dark') {
        body.classList.remove('light');
        body.classList.add('dark');
        toggle.checked = true;
        themeIcon.src = 'img/moon.svg';
        themeIcon.alt = 'Dark Mode';
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
        toggle.checked = false;
        themeIcon.src = 'img/sun.svg';
        themeIcon.alt = 'Light Mode';
      }
      localStorage.setItem('theme', theme);
    }

    toggle.addEventListener('change', () => {
      setTheme(toggle.checked ? 'dark' : 'light');
    });

    window.onload = () => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
    };
