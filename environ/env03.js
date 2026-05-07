
let count = 0;
 
let buttonCreature = {
    name: "Butter",
    favoriteFood: "Cookie",


}
let environmentTitle = "Bakery";

let environmentElements = ["Sugar Cookie", "Apple Pie", "Banana Bread", "Tiramisu"];

$("cute-button").click(function()) {
    count = count + 1;

    let arrayPosition = count - 1;
    let environmentElements = buttonCreature.environmentElements[arrayPosition];

    console.log(count);
    console.log(arrayPosition);
    console.log(environmentElements);

};