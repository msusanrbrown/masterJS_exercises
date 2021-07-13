
var obj = {key: [1,2,3,4,5]};

function getAverageOfElementsAtProperty(obj, key){

    let array = obj[key];
    if (Array.isArray(array) !== true){
        return 0;
    }else if (obj[key] === undefined){
        return 0;
    }
    else {
        let sum = 0;
        if (array.length  === 0){
            return 0;
        }else {
            array.forEach(elem => {
                sum = sum + elem;
            });  
            let average = sum/array.length;
            return average; 
        }
    
    }
}


console.log(getAverageOfElementsAtProperty(obj, "key"));
// Write your function here
