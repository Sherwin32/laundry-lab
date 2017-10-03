var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

/* YOUR CODE HERE */
function clean(clothing_item){
    // return clean_clothing_item;
    var clean_clothing_item = clothing_item.map(function(item){
    	return item.replace("*", "");
    })
    return clean_clothing_item;
}


/* PRINT RESULT */
console.log("--> Finished running clean.js");
console.log(clean(dirty_clothes));