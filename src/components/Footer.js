export default function Footer() {
    const el = document.createElement('footer');
    el.classList.add('site-footer');
    el.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} Me</p>
    `;
    return el;
  }