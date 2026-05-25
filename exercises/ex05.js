let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click(function () {


   $("#needy-button").html("I was clicked " + count + " Color Today is: " + colors[count]);

   $("#needy-button").css("background-color", colors[count]);

   $("html").css("background-color", colors[count]);

   count = count + 1;

   if (count == 4) {
      count = 0;
      console.log("it happened");
   }

   if (colors[count] == "HotPink") {
      $("#needy-button").after(" LiveLoveLaugh ");
   }

   else if (colors[count] == "Orchid") {
      $("#needy-button").after(" Mwah ");
   }

   else {
      $("#needy-button").after(" LLL ");
   }

   if (count < 5) {mood="fresh and happy"; }

   console.log(mood);

});