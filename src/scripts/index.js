import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import './utils/drawer-initiator';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('showNav'),
  drawer: document.getElementById('navItem'),
  content: document.getElementById('menu'),
  global: window,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
