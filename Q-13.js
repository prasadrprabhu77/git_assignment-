let scores = [39,41,98,27,19,8,73,84,49,85]
n = scores.length;
for(i=0; i<n; i++){
    if(scores[i] < 40){
        scores[i] += 20;
    }else if(scores[i] > 90){
        scores[i] = 90;
    }
} console.log("Final adjusted score Board: ",scores)
let count = 0;
for(i=0; i<n; i++){
    if(scores[i] >= 50){
        count++
    }
} console.log("Students Passed: ",count)