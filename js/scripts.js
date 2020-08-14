function copyFn() {
    if (document.getElementById('code') == null)
        return false;
    else {
        var range = document.createRange();
        range.selectNode(document.getElementById("code"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges(); // to deselect
        alert('copied!');
    }
}
var r, g, b, clr;

function changeClr() {
    r = $('#redClr').val();
    g = $('#greenClr').val();
    b = $('#blueClr').val();
    if (r < 127 && g < 127 || g < 127 && b < 127 || r < 127 && b < 127) {
        $('body').css('color', 'white');
    } else {
        $('body').css('color', 'black');

    }
    $('#redClrData').html(r);
    $('#greenClrData').html(g);
    $('#blueClrData').html(b);
    clrRGB = 'rgb(' + r + ',' + g + ',' + b + ')';
    $('body').css('background-color', clrRGB);
    $('#clrCodeSpanRGB').html(clrRGB);
    r = parseInt(r);
    g = parseInt(g);
    b = parseInt(b);
    rh = r < 16 ? '0' + r.toString(16) : r.toString(16);
    gh = g < 16 ? '0' + g.toString(16) : g.toString(16);
    bh = b < 16 ? '0' + b.toString(16) : b.toString(16);

    clrHEX = '#' + rh + gh + bh;
    $('#clrCodeSpanHEX').html(clrHEX);

}