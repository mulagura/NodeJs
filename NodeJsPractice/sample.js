/*'use strict';
let arrayOfFunctions = [];
for (let i = 0; i < 5; i++) {
    arrayOfFunctions.push(function () {
        return i;
    });
}
console.log(arrayOfFunctions[4]());*/

 

/*function add() {
	var counter = 0;
	function plus() 
	{
		counter += 1;
	}
    plus();
    return counter;
}
console.log(add());
console.log(add());
console.log(add());
*/

/*'use strict';
let arrayOfFunctions = [];
for (var i = 0; i < 5; i++) {
    arrayOfFunctions.push(function () {
        return i;
    });
}
console.log(arrayOfFunctions[0]());
*/


'use strict';
const TAXES = 'Too High';
if (TAXES == 'Too High') {
    const TAXES = 'Way Too High';
    console.log(TAXES);
}
 
console.log(TAXES);