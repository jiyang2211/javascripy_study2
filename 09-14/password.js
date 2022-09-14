var id = 'easy1004';
var pw = '1234567';

var user_id = 'easy1004';
var user_pw = '12345678';

if (user_id === id && user_pw === pw){
    console.log("모두 일치합니다.");
} else if(user_id != id) {
    console.log("아이디가 일치하지않습니다.");
} else if(user_pw != pw) {
    console.log("비밀번호가 일치하지않습니다.");
} 

if (user_id == id) {
    if (user_pw == pw) {
        console.log('모두 일치!!')
    } else {
        console.log('비밀번호가 틀림')
    }
} else {
    console.log('아이디가 일치하지 않습니다.')
}