//Remove duplicates from an array

function removeDuplicates(arr){
    const newArr =[];
    const set = new Set(arr);
    for(const value of set){
        newArr.push(value)
    }
    return newArr;
}

const arr=[1,7,23,6,11,20,25,6,26,19,6,7];
const newArr=removeDuplicates(arr);
console.log(newArr);

// Flat the array


const arr1=[2,[3,4],10,[5,6,[6,7,8],[2,34,35,[18,19]]]]
const newArr1 = [];
function flatArray(arr1){
    for(let i=0;i<arr1.length;i++){
        if(Array.isArray(arr1[i])){
            flatArray(arr1[i]);
        }

        else{
            newArr1.push(arr1[i]);
        }
    }
}
flatArray(arr1);
console.log(newArr1);