let arr = [0,1,2,3,4,5,6,7,8,9,]
let even = []
let odd = []
for(i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        even.push(arr[i])
    }
    else {
        odd.push(arr[i])
    }
}console.log("even numbers are: ",even)
console.log("odd numbers are: ",odd)