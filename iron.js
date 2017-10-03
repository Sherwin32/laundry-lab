var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];

/* YOUR CODE HERE */
function iron(clothing_item){
    // return ironed_clothing_item;
    var ironed_clothes = clothing_item.map(function(item){
    	return item.toLowerCase();
    })
    return ironed_clothes;
}


/* PRINT RESULT */
console.log("--> Finished running iron.js");
console.log(iron(wrinkled_clothes));