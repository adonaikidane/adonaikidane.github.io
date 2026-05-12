/* nav.js — injects nav and footer into every page */

const NAV_HTML = `
<div id="cursor"></div>
<div id="cursor-ring"></div>
<nav>
  <a class="nav-logo" href="../index.html">A<span>.</span>K</a>
  <ul class="nav-links">
    <li><a href="../pages/work.html">Work</a></li>
    <li><a href="../pages/thoughts.html">Thoughts</a></li>
    <li><a href="../pages/about.html">About</a></li>
    <li><a href="../pages/contact.html">Contact</a></li>
  </ul>
  <a class="nav-cta" href="../pages/contact.html">Let's talk →</a>
</nav>
`;

const NAV_HTML_ROOT = `
<div id="cursor"></div>
<div id="cursor-ring"></div>
<nav>
  <a class="nav-logo" href="index.html">A<span>.</span>K</a>
  <ul class="nav-links">
    <li><a href="pages/work.html">Work</a></li>
    <li><a href="pages/thoughts.html">Thoughts</a></li>
    <li><a href="pages/about.html">About</a></li>
    <li><a href="pages/contact.html">Contact</a></li>
  </ul>
  <a class="nav-cta" href="pages/contact.html">Let's talk →</a>
</nav>
`;

const FOOTER_HTML = (prefix) => `
<footer>
  <a class="footer-logo" href="${prefix}index.html">A<span>.</span>K</a>
  <ul class="footer-links">
    <li><a href="${prefix}pages/work.html">Work</a></li>
    <li><a href="${prefix}pages/thoughts.html">Thoughts</a></li>
    <li><a href="${prefix}pages/about.html">About</a></li>
    <li><a href="${prefix}pages/contact.html">Contact</a></li>
  </ul>
  <span class="footer-copy">© 2026 Adonai Kidane</span>
</footer>
`;
