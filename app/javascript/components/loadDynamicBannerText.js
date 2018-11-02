import Typed from 'typed.js';

function loadDynamicBannerText() {
  const x = document.getElementById("banner-typed-text")
  if (!x){
    return;
  }
  new Typed('#banner-typed-text', {
    strings: ["Let's start mixing", "Add a cocktail!"],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };
