$(document).ready(function () {
    "use strict"
    $('#search-select').dropdown();
    $('#search-select-rwd').dropdown();
    $('#開啟導覽').hide();

    $('#關閉導覽').on('click', function () {
        $('#導覽列').transition('fade down')
        $('#開啟導覽').show()
    })
    $('#開啟導覽').on('click', function () {
        $('#導覽列').transition('fade up');
        $('#開啟導覽').css('display', 'none');
    })
    $('.ui.sidebar').sidebar({
        context: $('.ui.pushable.segment'),
        transition: 'overlay',
    }).sidebar('attach events', '#mobile_item');
})


