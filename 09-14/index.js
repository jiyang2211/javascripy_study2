var a = 6;
var b = 7;
var c = 5; 

if (a>b && b>c) {
    console.log("최소값은 c고 최대값은 a입니다");
} else if(a>c && c>b){
    console.log("최소값은 b고 최대값은 a입니다");
} else if(b>a && a>c){
    console.log("최소값은 c고 최대값은 b입니다");
} else if(b>c && c>a){
    console.log("최소값은 a고 최대값은 b입니다");
} else if(c>a && a>b){
    // a > c && a < b
    console.log("최소값은 b고 최대값은 c입니다");
} else if(c>b && b>a){
    console.log("최소값은 a고 최대값은 c입니다");
}  else {
    console.log('뭐가 나올까?')
}

// a<b<c , a<c<b. b<a<c, b<c<a, c<a<b, c<b<a