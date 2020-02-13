$(document).ready(function () {
  //Autocomplite initial
  var words = ['boat', 'bear', 'dog', 'drink', 'elephant', 'fruit'];

  $('#autocomplite').autocomplete({
    hints: words,
    placeholder: 'Where Would You Like to Go?',
  });

  //Intial bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip()
})