$(document).ready(function () {

    let changeContrastBtn = $('.changeContrastBtn');
    let body = $('body');
    let clicked;
    function changeContrast() {
        if (clicked) {
            body.css({ 'background-color': 'white', 'color': 'black'});
            changeContrastBtn.text('high contrast')

        } else {
            body.css({ 'background-color': 'black', 'color': 'orange'});
            changeContrastBtn.text('normal contrast')
        }
        clicked = !clicked;
    }
    changeContrastBtn.on('click', changeContrast);

    // font-size

    function enlargeFont() {
        var fontSize = parseInt($("body").css("font-size"));
        fontSize = fontSize + 1 + "px";
        console.log(parseInt(fontSize));
        if(parseInt(fontSize) < 22) {
            $("body").css({ 'font-size': fontSize });
        } else  $("body").css({ 'font-size': "22px" });
    }
    $('.enlarge').on('click', enlargeFont);

    function zoomOutFont() {
        var fontSize = parseInt($("body").css("font-size"));
        fontSize = fontSize - 1 + "px";
        console.log(parseInt(fontSize));
        if(parseInt(fontSize) > 12) {
            $("body").css({ 'font-size': fontSize });
        } else  $("body").css({ 'font-size': "12px" });
    }
    $('.zoomOut').on('click', zoomOutFont);

    // reset

});
