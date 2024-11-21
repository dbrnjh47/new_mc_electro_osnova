// Select2 CSS va JS
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min.js';
import './select2.scss'
import './select2-searchInputPlaceholder.js';


$.fn.select2.defaults.set("minimumResultsForSearch", "Infinity");
$.fn.select2.defaults.set("width", "element");

$(document).ready(function () {
  $('.select2_custom').select2({
    searchInputPlaceholder: ($(this).data('search-input-placeholder') ? $(this).data('search-input-placeholder') : "Find..."),
    language: {
      //https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/i18n/en.js
      noResults: function (query) {
        return 'Nothing found.';
      },
      searching: function () {
        return "Search...";
      },
    }
  });
});
