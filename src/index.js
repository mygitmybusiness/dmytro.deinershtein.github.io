import './styles/main.less';
import Layout from './components/Layout.js';

// your page‐specific content:
const page = document.createElement('main');
page.innerHTML = `<p>Hello, world!</p>`;

// wrap it:
const app = Layout(page);

// mount:
document.getElementById('app').appendChild(app);