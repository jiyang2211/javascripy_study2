// 반복문에 입력된 숫자만큼 공백을 넣고 앞으로 공백의 개수는 감소, 별의 개수는 증가 

var c = ""

for(var a = 1 ; a < 5 ; a++){
    for(var b = 0; b<a ; b++){
        c += '*';
    }
    c += "\n";
    
}
console.log(c);