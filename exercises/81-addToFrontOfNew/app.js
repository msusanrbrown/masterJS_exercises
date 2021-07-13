
let myarray = [3,4,5,6,7];



function addToFrontOfNew(array, element){
    let newArray = array.slice()

    newArray.unshift(element);
    return newArray;



}

console.log (addToFrontOfNew(myarray,2));