let arr = [
    [1,2],
    [2,3],
    [4,5]
]
for(i=0; i<arr.length; i++){
    result = ""
    for(j=0; j<arr[i].length; j++){
        result += `${i + j} `
    }console.log(result)
}