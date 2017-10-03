var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */
function mend(clothing_item){
    // return mended_clothing_item;
    function holeFilter(letter){
    		var result = letter.indexOf("/") < 0;
    		return result;
    	}

    var mended_clothing_item = clothing_item.map(function(item){
    	item = item.split("");
    	console.log(item);
    	var mended_string = (item.filter(holeFilter)).join("");
    	console.log(mended_string);
    	return mended_string;
    });
    return mended_clothing_item;
}


/* PRINT RESULT */
console.log("--> Finished running mend.js");
console.log(mend(torn_clothes));