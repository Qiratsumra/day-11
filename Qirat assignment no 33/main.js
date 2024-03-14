var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var ordinalEnding = "th";
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else if (number === 4) {
        ordinalEnding = "th";
    }
    else if (number === 5) {
        ordinalEnding = "th";
    }
    else if (number === 6) {
        ordinalEnding = "th";
    }
    else if (number === 7) {
        ordinalEnding = "th";
    }
    else if (number === 8) {
        ordinalEnding = "th";
    }
    else if (number === 9) {
        ordinalEnding = "th";
    }
    console.log("".concat(number, " ").concat(ordinalEnding));
});
