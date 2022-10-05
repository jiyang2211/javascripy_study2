

let kotoday = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul'
}) ;

let today = new Date();

console.log('연도: ', today.getFullYear()); // 연도
console.log('월: ', today.getMonth() + 1); // 월
console.log('요일: ', today.getDay()); // 요일
console.log('일: ', today.getDate()); //일
console.log('시간: ', today.getHours()); // 시간
console.log('분: ', today.getMinutes()); // 분
console.log('초: ', today.getSeconds()); // 초