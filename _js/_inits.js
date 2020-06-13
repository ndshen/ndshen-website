// ----------------------------------------------
// Imports
// ----------------------------------------------
// import $ from 'jquery';
import './progressive-image.js'
import AOS from 'aos';
import Formcarry from './components/formcarry.js';
import InfiniteScroll from './components/infiniteScroll.js';
import PageTransition from './components/pageTransition.js';
import Popup from './components/popup.js';

import './mediumish/ie10-viewport-bug-workaround.js';
import './mediumish/mediumish.js';




// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  // Inits
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true
  });

  PageTransition.init();

  if ($('.posts').length && $('.posts__next').length) {
    InfiniteScroll.init();
  }

  if ($('#form').length) {
    Formcarry.init();
    Popup.init();
  }

});
