import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Let's start mixing", "Add a cocktail!"],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };
