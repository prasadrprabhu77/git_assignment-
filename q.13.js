let arr = [
    [1,2,3,4,5],
    [6,7,8,9,1],
    [2,3,4,5,6],
    [7,8,9,1,2]
]
n = arr.length
str = ""
for(i=0; i<n; i++){
    if(i % 2 == 0){
        for(j =arr[i].length-1; j>=0; j--){
            str += arr[i][j] + " "
        }
    } else {
        for(k=0; k<arr[i].length; k++){
            str += arr[i][k] + " "
        }
    }
    
} console.log(str)