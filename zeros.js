function moveZeroesAtEnd(arr){
    let j=0;

    for(let i=0;i<arr.length;i++){

        if(arr[i]!=0){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            j++;
        }
    }

    return arr;
}

let arr=[0,0,8,70,9,8,2,0,0,1,2,23,0];
arr=moveZeroesAtEnd(arr);
console.log(arr);