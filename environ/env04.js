
let count = 0;
let foods = ["Tiramisu", "Apple Pie", "Chocolate Chip Cookie", "Banana Bread"];
let foodCount = 0;

function makeImage(foodToMatch) {
    if (foods[foodCount] === foodToMatch) {
        $("#body").append("<img width=150 src='" + foodToMatch + ".png");
            
}
}

$("#cute-button").click(function () {
    $("#cute-button").html("Yay!! " + " Your sweet treat of the day: " + foods[count] + " " + count);

    count = count + 1;
    foodCount = count - 1;

});

$("#adorable-button").click(function () {
    $("#adorable-button").html("Yummy! " + count + " Your sweet treat of the day: " + foods[count]);

    count = count + 1;
    foodCount = count - 1;

});

$("#pretty-button").click(function () {
    $("#pretty-button").html("Delicious! " + count + " Your sweet treat of the day: " + foods[count]);

    count = count + 1;
    foodCount = count - 1;

});

$("#sweet-button").click(function () {
    $("#sweet-button").html("Nom nom  " + count + " Your sweet treat of the day: " + foods[count]);

    count = count + 1;
    foodCount = count - 1;

});




