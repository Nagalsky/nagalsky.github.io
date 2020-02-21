$(document).ready(function () {
  //Theme action
  $('body').addClass('theme-normal');
  $('.switch-toggle').on('click', function (e) {
    e.preventDefault();
    if ($('body').hasClass('theme-normal')) {
      $('body').removeClass('theme-normal').addClass('theme-contrast');
    } else {
      $('body').removeClass('theme-contrast').addClass('theme-normal');
    }
  })

  //Typeahead initial
  // var cars = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];
  //
  // function initTypeaheadSearch(element) {
  //   if ($(element).length == 0) {
  //     return;
  //   }
  //
  //   var headerSearch = new Bloodhound({
  //     datumTokenizer: function (d) {
  //       return Bloodhound.tokenizers.whitespace(d.title);
  //     },
  //     queryTokenizer: Bloodhound.tokenizers.whitespace,
  //     limit: 6,
  //     local: cars
  //   });
  //
  //   headerSearch.initialize();
  //
  //   $(element).typeahead(null, {
  //     name: 'search',
  //     displayKey: 'title',
  //     source: headerSearch.ttAdapter(),
  //     templates: {
  //       empty: [
  //         '<div class="empty-message">',
  //         'No data',
  //         '</div>'
  //       ].join('\n'),
  //       footer: [
  //         '<div class="tt-footer"><input type="submit" class="title orange" value="Bekijk alle resultaten voor \'{{query}}\'" /></div>'
  //       ],
  //       suggestion: function (data) {
  //         return '<p><strong>' + data.itemName + '</strong> - <img height:"50px" width:"50px" src=' + data.imageUrl + '></p>';
  //       }
  //     },
  //     // templates: {
  //     //   footer: Handlebars.compile(
  //     //     '<div class="tt-footer"><input type="submit" class="title orange" value="Bekijk alle resultaten voor \'{{query}}\'" /></div>'
  //     //   ),
  //     //   suggestion: Handlebars.compile(
  //     //     '{{#if group}}<div class="ta-group">{{group}}</div>{{/if}}' +
  //     //     '<div class="ta-image {{#if img}}profile-img{{/if}}" role="presentation">' +
  //     //     '{{#if img}}<img class="img-responsive" src="{{img}}" alt="{{ title }}">{{else}}<i class="fontello-{{icon}}"></i>{{/if}}' +
  //     //     '</div>' +
  //     //     '<div class="ta-title {{#if img}}profile-img{{/if}}" id="suggestion-{{type_id}}" role="option">' +
  //     //     '<a href="{{url}}">' +
  //     //     '<strong>{{title}}</strong><br />' +
  //     //     '{{#compare type_name "==" "person"}}' +
  //     //     '{{#each type}}{{#compare @index "<" 2}}<div class="ta-row" role="presentation">{{this}}</div>{{/compare}}{{/each}}' +
  //     //     '{{else}}' +
  //     //     '{{type}}' +
  //     //     '{{/compare}}' +
  //     //     '</a>' +
  //     //     '</div>'
  //     //   )
  //     // }
  //   }).on('typeahead:selected', function (event, data, dataset) {
  //     // goto url
  //     window.location.href = data.url;
  //   }).on('typeahead:cursorchanged', function (event, suggestion, dataset) {
  //     $(element).attr('aria-activedescendant', 'type-' + suggestion.type_id);
  //   }).on('typeahead:closed', function () {
  //     $(element).removeAttr('aria-activedescendant');
  //   }).on('focus', function () {
  //     var val = $(element).typeahead('val');
  //
  //     $(element).typeahead('val', '');
  //     $(element).typeahead('val', val);
  //   });
  //
  //   var $dropdownHolder = $(element).nextAll('.tt-dropdown-menu');
  //
  //   $dropdownHolder.attr({
  //     role: 'listbox',
  //     'aria-expanded': false
  //   });
  //
  //   $('.tt-hint').attr('aria-hidden', true);
  //
  //   // There is no other way to check (via an event).
  //   var ariaExpanded = false;
  //   setInterval(function () {
  //     var isDisplayed = $dropdownHolder.find('.tt-dropdown-menu').css('display') !== 'none';
  //     if (isDisplayed !== ariaExpanded) {
  //       ariaExpanded = !ariaExpanded;
  //       $dropdownHolder.add($(element)).attr('aria-expanded', ariaExpanded);
  //     }
  //   }, 500);
  // }
  //
  //
  // (function ($) {
  //
  //   initTypeaheadSearch('.typeahead');
  // })();

});