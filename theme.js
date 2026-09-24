(() => {
  const storageKey = 'portfolio-theme';
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let selected = null;
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') selected = stored;
  } catch { /* Storage may be unavailable in private or restricted contexts. */ }

  let button;
  const apply = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#07111f' : '#fafbf9';
    if (button) {
      const nextLabel = theme === 'dark' ? 'ライト' : 'ダーク';
      button.querySelector('.theme-label').textContent = nextLabel;
      button.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀' : '☾';
      button.setAttribute('aria-label', `${nextLabel}モードに切り替える`);
      button.title = `${nextLabel}モードに切り替える`;
    }
  };
  const systemTheme = () => preference.matches ? 'dark' : 'light';
  apply(selected || systemTheme());
  preference.addEventListener('change', () => {
    if (!selected) apply(systemTheme());
  });
  document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector('.theme-toggle');
    if (!button) return;
    apply(document.documentElement.dataset.theme);
    button.hidden = false;
    button.addEventListener('click', () => {
      selected = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(selected);
      try { localStorage.setItem(storageKey, selected); } catch { /* Keep switching without persistence. */ }
    });
  });
})();
