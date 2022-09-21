//반복문으로 별 개수 늘리기 
var c = ""

for(var a = 1 ; a < 5 ; a++){
    for(var b = 0; b<a ; b++){
        c += '*';
    }
    c += "\n";
    
}
console.log(c);

// var a = "";
// a += "aa";
// a += "\n";
// a += "aaa"
// a += "\n";
// a += "aaa";
// console.log(a);