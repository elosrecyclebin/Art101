
let count=0;
let colors=["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click( function(){

    
    $("#needy-button").html("I was clicked " + count + " Color Today is: " + colors[count] );
    
    $("#needy-button").css( "background-color", colors[count]);
    
    $("html").css( "background-color", colors[count]);
    count= count +1;

});