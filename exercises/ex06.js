let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];
let colorCount = 0;
let mood = "neutral";

function makeImage(colorToMatch) {
    if (colors[colorCount] == colorToMatch) {
        $("body").append("<img width=100 src='" + colorToMatch + ".png'>");
    }
}

function paintPage( colorToPaint) {
    $("body").css("background-color", colorToPaint);
}

$("#needy-button").click(function () {


    $("#needy-button").html("I was clicked " + count + " Color Today is: " + colors[count]);


    $("html").css("background-color", colors[count]);

    count = count + 1;
    colorCount = count - 1;

    if (count == 4) {
        count = 0;
        console.log("it happened");
    }

paintPage( colors[colorCount] );

    if (colors[count] == "HotPink") {
        $("#needy-button").after(" LiveLoveLaugh ");
    }

    else if (colors[count] == "Orchid") {
        $("#needy-button").after(" Mwah ");
    }

    else {
        $("#needy-button").after(" LLL ");
    }

    if (count < 5) { mood = "fresh and happy"; }
    else if (count >= 5 && count < 10) { mood = "keep pushing"; }
    else { mood = "so tired"; }

    

    makeImage("Orchid");
    makeImage("Plum");
    makeImage("Coral")

    console.log(mood);

});