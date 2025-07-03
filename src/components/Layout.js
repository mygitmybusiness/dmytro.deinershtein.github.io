import Header from './Header.js';
import Footer from './Footer.js';

export default function Layout(contentEl) {
  const container = document.createElement('div');
  container.appendChild(Header());
  container.appendChild(contentEl);
  container.appendChild(Footer());
  return container;
}
