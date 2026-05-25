
function asknNumber( whatNumber) {
let userNumber = prompt("Guess 1-10?");

if (userNumber == whatNumber) {
    $("#output").html("You got it!");
}
else {
    $("#output").html("Nooooooope");
}
}

$("#good-button").click(function (){
    asknNumber(6);


});
