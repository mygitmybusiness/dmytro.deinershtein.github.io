// src/components/Header.js
import { html } from '../utils/html.js';

export default function Header() {
  const el = document.createElement('header');
  el.classList.add('site-header');

  const title = 'Dmytro Deinershtein';
  const menu = [
    { label: 'Home',  href: '/'      },
    { label: 'About', href: '/about' }
  ];

  el.innerHTML = html`
    <h1>${title} <button class="oval-lg">Button</button></h1>
    <nav>
      ${menu.map(item => html`
        <a href="${item.href}">${item.label}</a>
      `).join('')}
    </nav>
  `;

  return el;
}
