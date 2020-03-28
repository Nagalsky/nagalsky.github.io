import 'select2/dist/js/select2.full';
import 'select2/dist/js/i18n/nl';
import 'jquery-ui-dist/jquery-ui';
import './jquery.fancybox.pack'

(function ($) {
  initSliders();
  initVideo();
  initDisease();
  initNotApplicable();
  initAverage();
  initFancybox();
  initComment();
  initChoiceWithOther();
})(jQuery);

function initVideo() {
  $('[data-fancybox-video]').click(function (ev) {
    ev.preventDefault();
    $.fancybox({
      href: $(this).data('fancybox-video'),
      type: 'iframe'
    });
  })
}

function initChoiceWithOther() {
  $('.choice-with-other').each(function () {
    let other = $(this).find('.other');

    $(this).find('select').change(function () {
      if ($(this).find('option:selected').text() === 'Anders, namelijk:') {
        other.show();
      } else {
        other.hide();
      }
    }).trigger('change');
  });
}

function initSliders() {
  $('.slider-range').each(function (index, elm) {
    let currentPage = $(this);

    currentPage.slider({
      range: "min",
      value: currentPage.prev().val(),
      step: 1,
      min: 1,
      max: 10,
      slide: function (event, ui) {
        let eq = parseInt(ui.value) - 1;

        currentPage.prev().attr('value', ui.value);
        currentPage.next().find('li').removeAttr('class');
        currentPage.next().find('li:eq(' + eq + ')').addClass('active');
        currentPage.parent().parent().parent().find('.slider-checkbox input').prop('checked', false);
      },
      change: function () {
        initAverage();
      }
    });

    currentPage.next().click(function (el) {
      let eq = parseInt(el.target.innerText) - 1;

      currentPage.prev().attr('value', el.target.innerText);
      currentPage.slider('value', el.target.innerText);
      currentPage.next().find('li').removeAttr('class');
      currentPage.next().find('li:eq(' + eq + ')').addClass('active');
      currentPage.parent().parent().parent().find('.slider-checkbox input').prop('checked', false);
    });

    currentPage.find('.ui-slider-handle').attr('tabindex', currentPage.prev().attr('tabindex'));
  });
}

function initDisease() {
  $('#rating_disease').each(function (index, elm) {
    let inp = $(elm);
    inp.select2({
      language: 'nl',
      containerCssClass: "custom custom-select",
      dropdownCssClass: 'custom input',
      searchInputPlaceholder: 'Zoeken..',
      placeholder: inp.data('placeholder'),
      multiple: inp.data('multiple'),
      theme: 'bootstrap4',
      allowClear: true,
      minimumInputLength: 2,
      width: '100%',
      ajax: {
        url: inp.data('search-url'),
        dataType: 'json',
        data: function (params) {
          return {
            query: params.term,
            limit: 100,
            type: $(this).data('search-type')
          };
        },
        processResults: function (data) {
          let results = [];
          for (var i = 0; i < data.items.length; i++) {
            var item = data.items[i];
            results.push({
              id: item.id,
              text: item.title,
              synonyms: item.synonyms
            });
          }

          return {
            results: results
          };
        }
      },
      templateResult: function (item) {
        if (!item.id) {
          return item.text;
        }

        let $item = $('<div><span class="main">' + item.text + '</span></div>');
        if (item.synonyms.length) {
          $item.append('<span class="sub">Synoniemen: ' + item.synonyms.join(', ') + '</span>')
        }

        return $item;
      }
    }).on("select2:open", function () {
      $(".select2-search--dropdown .select2-search__field").attr('placeholder', 'Zoeken..').addClass('form-control');
    });

    if (inp.val()) {
      $.ajax({
        dataType: 'json',
        url: inp.data('search-url'),
        data: {
          type: inp.data('search-type'),
          id: inp.val()
        }
      }).done(function (data) {
        for (var i = 0; i < data.items.length; i++) {
          var item = data.items[i];
          inp.append(new Option(item.title, item.id, true, true)).trigger('change');
        }
      });
    }


  });
}

function initAverage() {
  let sum = 0,
    amount = 0;

  $('input[type="range"]').each(function (index, elm) {
    let val = parseInt($(elm).val());
    if (val) {
      sum += val;
      amount++;
    }
  });

  if (sum && amount) {
    $('.score').html((sum / amount).toFixed(1).replace(/^([0-9]{1,2})\.([0-9]{1})$/, function (match, p1, p2) {
      return p1 + '<span class="decimal">.' + p2 + '</span>';
    }));
  } else {
    $('.score').text('-');
  }
}

function initNotApplicable() {
  $('.slider-checkbox input').change(function () {
    if ($(this).is(':checked')) {
      let cnt = $(this).parent().parent().parent().find('.slider');

      cnt.find('input[type="range"]').attr('value', 0);
      cnt.find('.slider-range').slider('value', 1);
      cnt.find('.slider-steps > li').removeClass('active');
    }
  });
}

function initFancybox() {
  $('.fancybox').fancybox();
}

function initComment() {
  let $comment = $('#rating_comment');
  let $counter = $('#rating_comment_counter_holder');

  var max = Math.max($comment.attr('maxlength'), 0);
  var threshold = (20 / 100) * max;

  $comment.on('input', function (e) {
    var remaining = max - $(this).val().length;

    if (remaining <= 0) {
      $counter.html('U heeft ' + max.toLocaleString() + ' tekens gebruikt. U kunt niet meer verder typen.');
    } else if (remaining <= threshold) {
      $counter.html('Let op: u heeft bijna ' + max.toLocaleString() + ' tekens gebruikt. Er zijn nog <strong>' + remaining.toLocaleString() + '</strong> tekens over.');
    } else {
      $counter.html('Beschrijf uw ervaring in niet meer dan ' + max.toLocaleString() + ' tekens. Er zijn nog <strong>' + remaining.toLocaleString() + '</strong> tekens over.');
    }
  }).trigger('input');
}