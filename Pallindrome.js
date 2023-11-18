var num=prompt("Enter a number:");
var temp=num;
var rev=0,rem;

while(num>0){
    rem=num%10;
    
    rev=rev*10+rem;
    num=parseInt(num/10);
    
}
if(rev==temp){
    console.log(num,"is Pallindrome Number")
}
else{
    console.log(num,"is not Pallindrome Number")
}