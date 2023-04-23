//(a+1)/2 + (a+3)/4 + (a+5)/6 ... (a+19)/20
a=2
sum=0
for(i=1;i<=19;i=i+2){
    sum=sum+(a+i)/(i+1)
}
console.log(sum)