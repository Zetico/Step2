const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const originalColor1 = window.getComputedStyle(one).backgroundColor;
const originalColor2 = window.getComputedStyle(two).backgroundColor;
const originalColor3 = window.getComputedStyle(three).backgroundColor;
const originalColor4 = window.getComputedStyle(four).backgroundColor;

one.addEventListener("mouseenter", function() {
    one.style.backgroundColor = lightenColor(rgbToHex(originalColor1), 50);
});
two.addEventListener("mouseenter", function() {
    two.style.backgroundColor = lightenColor(rgbToHex(originalColor2), 50);
});
three.addEventListener("mouseenter", function() {
    three.style.backgroundColor = lightenColor(rgbToHex(originalColor3), 50);
});
four.addEventListener("mouseenter", function() {
    four.style.backgroundColor = lightenColor(rgbToHex(originalColor4), 50);
});

one.addEventListener("mouseleave", function() {
    one.style.backgroundColor = rgbToHex(originalColor1);
});
two.addEventListener("mouseleave", function() {
    two.style.backgroundColor = rgbToHex(originalColor2);
})
three.addEventListener("mouseleave", function() {
    three.style.backgroundColor = rgbToHex(originalColor3);
});
four.addEventListener("mouseleave", function() {
    four.style.backgroundColor = rgbToHex(originalColor4);
});

function lightenColor(color, amount) {
    let colorValue = color.replace("#", "");

    let r = parseInt(colorValue.substr(0, 2), 16);
    let g = parseInt(colorValue.substr(2, 2), 16);
    let b = parseInt(colorValue.substr(4, 2), 16);

    r = Math.min(255, r + amount);
    g = Math.min(255, g + amount);
    b = Math.min(255, b + amount);

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
function rgbToHex(rgb) {
    let colors = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    let r = parseInt(colors[1]);
    let g = parseInt(colors[2]);
    let b = parseInt(colors[3]);

    let hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + "0".repeat(6 - hex.length) + hex;
}



const modal = document.getElementById("myModal");
one.addEventListener("click", function() {
    modal.style.display = "block";
});
two.addEventListener("click", function() {
    modal.style.display = "block";
});
three.addEventListener("click", function() {
    modal.style.display = "block";
});
four.addEventListener("click", function() {
    modal.style.display = "block";
});


function closeModal() {
    modal.style.display = "none";
}