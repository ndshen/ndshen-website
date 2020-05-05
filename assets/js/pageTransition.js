
window.$ = window.jQuery = jQuery;

// ----------------------------------------------
// Transition
// ----------------------------------------------
+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);





// ----------------------------------------------
// Page Transition
// ----------------------------------------------
const PageTransition = (() => {
    let s;
    const noTransition = 'no-transition';
  
    return {
      settings() {
        return {
          transitionLinks: $(`a[href^="http://${top.location.host.toString()}"], a[href^="/"], a[href^="./"], a[href^="../"]`).not(`.${noTransition}`),
          body: $('body'),
          window: $(window),
          exit: 400,
          entrance: 200
        };
      },
  
      init() {
        if (window === window.top) {
          s = this.settings();
          this.bindEvents();
        } else {
          setTimeout(() => {
            $('body').addClass('js-page-loaded');
          }, 600);
        }
      },
  
      bindEvents() {
        this.loadingClasses();
        this.transitionPage();
        this.firefox();
        this.safari();
      },
  
      loadingClasses() {
        setTimeout(() => {
          s.body.addClass('js-page-loaded');
        }, s.entrance);
      },
  
      transitionPage() {
        s.transitionLinks.on('click', e => {
          if (s.body.hasClass(noTransition) || e.metaKey || e.ctrlKey || e.shiftKey) {
            return;
          }
          e.preventDefault();
  
          const linkLocation = $(e.currentTarget).attr('href');
  
          s.body.addClass('js-page-exiting');
  
          setTimeout(() => {
            window.location = linkLocation;
          }, s.exit);
        });
      },
  
      firefox() {
        s.window.on('unload', () => {
          s.window.unbind('unload');
        });
      },
  
      safari() {
        s.window.bind('pageshow', e => {
          if (e.originalEvent.persisted) {
            window.location.reload();
          }
        });
      }
    };
  })();

  PageTransition.init();