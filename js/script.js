$(function() {
    var BV = new $.BigVideo({container: $('#page')});
    BV.init();
    BV.show('video/alertt.mp4',{ambient:true});

    $('#next-btn').on('click', function(e) {
        $('#page').addClass('animated slideOutUp');
        $('#next-btn').css('display','none');
    });

    setInterval(function(){
        $('#next-btn').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated bounce');
        });
    },5000);

});