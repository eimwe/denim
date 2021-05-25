import './styles/product.less';


//change behavior of header navigation menu on product page in case of samartphones
(function(){
  const MEDIA_QUERY = window.matchMedia("(max-width: 600px)");
  let menuButton = document.getElementById('menu-button'),
      navNode = document.getElementsByClassName('main-nav--header')[0];

  if (MEDIA_QUERY.matches) {
    menuButton.addEventListener('change', function(){
      navNode.classList.toggle('main-nav--header--opened');
    });
  } else {
    menuButton.removeEventListener('change', function(){});
  }
})();
//