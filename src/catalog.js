import './styles/catalog.less';

(function(){
  let menuButton = document.getElementById('menu-button'),
      navNode = document.getElementsByClassName('main-nav--header')[0];
  
  menuButton.addEventListener('change', function(){
    navNode.classList.toggle('main-nav--header--opened');
  });
})();