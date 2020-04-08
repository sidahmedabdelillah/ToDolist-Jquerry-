$('ul').on('click', 'li', function() {
    $(this).toggleClass("done");
});

$("ul").on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input").keypress(function(e) {

    if (e.which === 13) {
        var text = $(this).val();
        $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${text}</li>`);
        $(this).val('');
    }
});
$('.fa-plus').click(() => {
    $("input").fadeToggle();
});