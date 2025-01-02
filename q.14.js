let arr = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5]
]
for(i=0; i<arr.length; i++){
    str =""
    if(i== 0|| i == arr.length-1){
        for(j=0; j<arr[i].length; j++){
            str += "*" + " "
        }
    }else{
        str += "*" + " "
    }console.log(str)
}