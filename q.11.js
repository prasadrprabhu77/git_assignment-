let arr = [
    [1,2],
    [3,4],
    [5,6]
]
for(i=0; i<arr.length; i++){
    str = ""
    for(j=0; j<arr[i].length; j++){
        str += arr[i][j]
    }console.log(str)
}