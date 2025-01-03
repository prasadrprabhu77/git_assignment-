let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let result = []
let n = arr.length
for(i = n-1; i > 0; i--){
    result.push(arr[i][0])
}
for(i=0; i<n; i++){
    result.push(arr[0][i])
}
for(i=1; i<n; i++){
    result.push(arr[i][2])
}
for(i=n-2; i>=1; i--){
    result.push(arr[2][i])
} 
console.log(result)