const input = document.getElementsByTagName('input')[0];

input.onkeyup = function(e) {
    if (e.keyCode === 13) {
        const value = input.value;
        document.body.style.backgroundColor = invertHexCode(value);
        input.style.color = invertHexCode(value);
        input.style.backgroundColor = value;
        input.value = '';
        input.placeholder = 'Enter a color (original color shown)';
    }
}

function invertHexCode(color) {
    const hexCode = color.slice(1);
    const red = parseInt(hexCode.substring(0, 2), 16);
    const green = parseInt(hexCode.substring(2, 4), 16);
    const blue = parseInt(hexCode.substring(4, 6), 16);

    return `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;
}