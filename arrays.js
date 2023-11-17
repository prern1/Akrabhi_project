function processArray(arr){
    //print the original array
    console.log("Original Array:", arr);

    //sort the array 
    arr.sort(function(a,b){
        return a-b;
    })

    // print the sorted array
    console.log("Sorted Array:",arr);

    //Slice the array
    var slicedArray = arr.slice(0,5);

    //print the sliced array
    console.log("Sliced Array:",slicedArray);

}

var array = [0,1,11,22,23,3,5,7,82,13,21,34,6,55];
processArray(array);