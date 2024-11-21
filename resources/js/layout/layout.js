import '/resources/js/_jquery';

import '/resources/js/custom/bpopup/index.js';

import "/resources/scss/app.scss";
import "/resources/scss/layout/layout.scss";

import "/resources/js/custom/search/index.js";
import '/resources/js/custom/select2/index.js';
import "./header.js";

import "./burger_menu.js";

$("body").scroll(function () {
    var header = $(".header_wrapper");
    if ($("body").scrollTop() >= $(".header_two").height()) {
        header.addClass("header__fix");
    } else {
        header.removeClass("header__fix");
    }
});