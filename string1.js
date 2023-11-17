function isAnagram(str1,str2){
    if(str1.length!= str2.length)
    return false;


    str1=str1.split('').sort().join('');
    str2=str2.split('').sort().join('');

    if (str1==str2)
     return true;
    

    return false;

}
const str1="CAPITAL";
const str2= "LAPTACI";

const result = isAnagram(str1,str2);
console.log(result);