var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];

/* TODO: copy `clean` function here */
function clean(clothing_item){
    // return clean_clothing_item;
    var clean_clothing_item = clothing_item.map(function(item){
    	return item.replace("*", "");
    })
    return clean_clothing_item;
}
/* TODO: copy `mend` function here */
function mend(clothing_item){
    // return mended_clothing_item;
    function holeFilter(letter){
    		var result = letter.indexOf("/") < 0;
    		return result;
    	}

    var mended_clothing_item = clothing_item.map(function(item){
    	item = item.split("");
    	var mended_string = (item.filter(holeFilter)).join("");
    	return mended_string;
    });
    return mended_clothing_item;
}
/* TODO: copy `iron` function here */
function iron(clothing_item){
    // return ironed_clothing_item;
    var ironed_clothes = clothing_item.map(function(item){
    	return item.toLowerCase();
    })
    return ironed_clothes;
}

/* YOUR CODE HERE */
function doBatch(clothes){
    // your code here
    var returnBatch = clothes.map(function(batch){
    	var result = mend(batch);
    	result = clean(result);
    	result = iron(result);
    	return result;
    });
    return returnBatch;
}


/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
console.log(doBatch(batch_input));
