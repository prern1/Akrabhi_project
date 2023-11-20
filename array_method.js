function methods(){
    const arr=[1,11,111,23,2001,7,6,2000];
    const arrslice = arr.slice(2,5);
    // console.log(arr,arr.length,arr.sort,arr.slice(2,5));
    for(var i = 0; i< arr.length; i++){
        document.write(arr[i]+" ");
    }
   
   document.write(arrslice+",");
}