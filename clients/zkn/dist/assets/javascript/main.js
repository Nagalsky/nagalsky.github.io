const $ = require('jquery');
global.$ = global.jQuery = $;

import Cookies from 'js-cookie';
import Handlebars from 'handlebars';

import 'popper.js';
import 'bootstrap';
import 'jquery-cookiebar';
import './cookie';
import 'typeahead';



$.cookieBar = function (options) {
  if (options.link === undefined) {
    $('body').prepend('<div id="cookieBar"><p>Deze website gebruikt cookies om de website te verbeteren.</p></div>');
  } else {
    $('body').prepend('<div id="cookieBar"><p>Deze website gebruikt cookies om de website te verbeteren. Als u geen cookies wilt accepteren kunt u <a href="' + options.link + '" class="readmore">hier</a> klikken voor meer informatie.<a href="#" class="cookiebar-close">sluiten</a></p></div>');
  }

  $('#cookieBar').cookieBar(options);
};

(function (a) {
  jQuery.browser = {};
  jQuery.browser.iDevice = /ip(hone|od|ad)/i.test(a);
  jQuery.browser.ie = /Trident.*rv\:11\./i.test(a);
})(navigator.userAgent || navigator.vendor || window.opera);

(function ($) {
  initBrowserHacks();
  initStylesheets();
  initTextResizer();
  initMenuToggle();
  initTypeaheadSearch('#search');

  Handlebars.registerHelper('compare', function (v1, operator, v2, options) {
    switch (operator) {
    case '==':
      return (v1 == v2) ? options.fn(this) : options.inverse(this);
    case '===':
      return (v1 === v2) ? options.fn(this) : options.inverse(this);
    case '<':
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
    case '<=':
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);
    case '>':
      return (v1 > v2) ? options.fn(this) : options.inverse(this);
    case '>=':
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);
    case '&&':
      return (v1 && v2) ? options.fn(this) : options.inverse(this);
    case '||':
      return (v1 || v2) ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
    }
  });
})(jQuery);

$(window).resize(function () {
  searchFieldReplacing();
});

function initTextResizer() {
  let textSize = '16px';

  $(".increase").click(function (e) {
    textSize = textSize === '16px' || textSize === '18px' ? '18px' : '16px';

    var root = document.querySelector(":root");
    root.style.fontSize = textSize;
    var body = document.querySelector("body");
    body.style.fontSize = textSize;
  });

  $(".decrease").click(function (e) {
    textSize = textSize === '16px' || textSize === '14px' ? '14px' : '16px';

    var root = document.querySelector(":root");
    root.style.fontSize = textSize;
    var body = document.querySelector("body");
    body.style.fontSize = textSize;
  });
}

function initStylesheets() {
  let highContrast = !!Cookies.get('high_contrast');

  $('.switch-stylesheet').click(function (e) {
    e.preventDefault();

    if (highContrast) {
      Cookies.remove('high_contrast', {
        path: '/'
      });
    } else {
      Cookies.set('high_contrast', 1, {
        path: '/',
        domain: '',
        secure: false,
        expires: 300,
      });
    }

    window.location.reload(true);
  });
}

function initMenuToggle() {
  let menuToggle = false;

  document.getElementById("menu-collapse").onclick = function () {
    if (!menuToggle) {
      menuToggle = true;
      document.getElementById("main-nav").className += " active";
    } else {
      menuToggle = false;
      document.getElementById("main-nav").classList.remove("active");
    }
  }
}

function initBrowserHacks() {
  function isIE() {
    let userAgent = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    let microsoftInternetExplorer = userAgent.indexOf('MSIE '); // IE 10 or older
    let tridentVersion = userAgent.indexOf('Trident/'); //IE 11

    return (microsoftInternetExplorer > 0 || tridentVersion > 0);
  }

  if (isIE()) {
    document.documentElement.className += ' ie11';
  }
}

function initTypeaheadSearch(element) {
  if ($(element).length == 0) {
    return;
  }

  var headerSearch = new Bloodhound({
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.title);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 6,
    remote: Routing.generate('zkn_content_taxonomy_search', {
      'type': 'company|person'
    }) + '&zoekterm=%QUERY'
  });

  headerSearch.initialize();

  $(element).typeahead(null, {
    name: 'search',
    displayKey: 'title',
    source: headerSearch.ttAdapter(),
    templates: {
      footer: Handlebars.compile(
        '<div class="tt-footer"><input type="submit" class="title orange" value="Bekijk alle resultaten voor \'{{query}}\'" /></div>'
      ),
      suggestion: Handlebars.compile(
        '{{#if group}}<div class="ta-group">{{group}}</div>{{/if}}' +
        '<div class="ta-image {{#if img}}profile-img{{/if}}" role="presentation">' +
        '{{#if img}}<img class="img-responsive" src="{{img}}" alt="{{ title }}">{{else}}<i class="fontello-{{icon}}"></i>{{/if}}' +
        '</div>' +
        '<div class="ta-title {{#if img}}profile-img{{/if}}" id="suggestion-{{type_id}}" role="option">' +
        '<a href="{{url}}">' +
        '<strong>{{title}}</strong><br />' +
        '{{#compare type_name "==" "person"}}' +
        '{{#each type}}{{#compare @index "<" 2}}<div class="ta-row" role="presentation">{{this}}</div>{{/compare}}{{/each}}' +
        '{{else}}' +
        '{{type}}' +
        '{{/compare}}' +
        '</a>' +
        '</div>'
      )
    }
  }).on('typeahead:selected', function (event, data, dataset) {
    // goto url
    window.location.href = data.url;
  }).on('typeahead:cursorchanged', function (event, suggestion, dataset) {
    $(element).attr('aria-activedescendant', 'type-' + suggestion.type_id);
  }).on('typeahead:closed', function () {
    $(element).removeAttr('aria-activedescendant');
  }).on('focus', function () {
    var val = $(element).typeahead('val');

    $(element).typeahead('val', '');
    $(element).typeahead('val', val);
  });

  var $dropdownHolder = $(element).nextAll('.tt-dropdown-menu');

  $dropdownHolder.attr({
    role: 'listbox',
    'aria-expanded': false
  });

  $('.tt-hint').attr('aria-hidden', true);

  // There is no other way to check (via an event).
  var ariaExpanded = false;
  setInterval(function () {
    var isDisplayed = $dropdownHolder.find('.tt-dropdown-menu').css('display') !== 'none';
    if (isDisplayed !== ariaExpanded) {
      ariaExpanded = !ariaExpanded;
      $dropdownHolder.add($(element)).attr('aria-expanded', ariaExpanded);
    }
  }, 500);
}