$(document).ready(function() {
    var padone = new Audio ('sounds/ғʟs.mp3');
    $('.pad-1').mousedown(function() {
        padone.load()
        padone.play();
    });
    $(window).keydown(function(e) {
        var code = e.keyCode;
        var kc = String.fromCharCode(e.keyCode);
        $("div[data-code='"+code+"']").addClass("active")
        console.log(code);

        switch(kc) {
            case "alt":
                padone.load();
                padone.play();
                break;
        }
    });
    $(window).keyup(function(e) {
        var code = e.keyCode;
        $("div[data-code='"+code+"']").removeClass("active");
    });
});