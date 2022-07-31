$(function () {
    $('#button1').click(function() {
        $('#ken1').animate({
            marginTop: '-=400px'
        }, 800).animate({
            marginTop: '+=200px'
        }, 800);
    });
});

$(function () {
    $('#button2').click(function() {
        $('#ken1').animate({
            marginTop: '+=200px'
        }, 800);
    });
});




