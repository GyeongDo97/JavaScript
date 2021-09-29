/* 
let ar = [
    {
        n:'호랑이',
        a:10
    },
    {
        n:'코끼리',
        a:20
    },
    {
        n:'독수리',
        a:30
    }
];console.log(ar);

for(const key in ar){
    console.log(key);
    let e = ar[key];
    console.log(e);
    console.log(e.n, e.a);
    console.log(e['n'],e['a']);
}console.log('');

let sum = 0;
for (const v of ar) {
    sum += v.a;
}
console.log(sum);

let br = ar.map(
    (v, k)=> v.n + v.a
)
console.log(br);
 */






/*
let ar = [10,20,30];
console.log();
//forin
for (const index in ar) {
    console.log(index, ar[index]);       
}console.log('');
//forof
for (const value of ar) {
    console.log(value);
}console.log('');
//foreach - 배열은 내부적으로 들고있는 .forEach를 사용해야한다.
ar.forEach(
    function(v, i){
        console.log(v,i);
    }
);console.log('');

ar.forEach((v, i)=>{
    console.log(v,i);
});console.log('');
*/






/*
//map이나오면 기존데이터를 가공해서 새로운 데이터를 만든다고 생각하자
//원래 데이터는 건들지않고 값만 가져와서 사용한다.
ar.map(
    (num)=>{
        return num * 10;
    }
)
console.log(ar);
br = ar.map(
    (num)=>{
        return num * 10;
    }
)
console.log(br);

//위의 코드와 동일
br = ar.map(num=> num * 100)
console.log(br);

let cr = [0,1,2,3];
let dr = cr.map(
    // num => {
    //     if(num % 2)
    //         return 'odd'
    //     else
    //         return 'even'
    // }
    num => (num % 2) ? 'odd' : 'even'
);
console.log(dr);
*/





/* 
//배열 생성 방법
//1)
let ar = [10,20,30];
console.log(ar);
console.log(ar.length);
console.log(typeof(ar));
console.log(Array.isArray(ar));//배열인지 확인하는 함수
//2)
let br = Array(); // [] 빈 배열
console.log(br);
console.log(br.length);
//3)
let cr = Array(5); // Array 안에 숫자 한개만 쓸 경우 배열의 갯수를 지정해준다.
console.log(cr);
console.log(cr.length);
//4)
let dr = Array(10, 20, 30);
console.log(dr);
console.log(dr.length);
 */






/* 
//object 병합방법
let obj01 = {
    a:10,
    b:20
}
let obj02 = {
    a:30,
    c:40,
    d:50
}
//1)
let obj03 = Object.assign(obj01, obj02)
console.log(obj03);
//2-1)
let obj04 = {...obj01, ...obj02}
console.log(obj04);
//2-2)
let f1 = (o)=>{
    console.log(o.d);
}
f1({...obj01, ...obj02})
*/




/* 
let obj = {
    a:10,
    b:20
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
 */




/* 
let c = 'tiger';
let obj={
    a:10,
}
obj.b = 20;
console.log(obj);

obj['c'] = 30;
console.log(obj);

for (let i = 0; i < 4; i++) {
    obj['tiger'+i] = i*100;
}
console.log(obj);
 */



/* 
//외부변수를 키값으로 사용
let c = 'tiger';
let obj={
    a:10,
    b:20,
    [c]:30
}
console.log(obj.a, obj.b, obj.tiger);
 */





/* 
let obj = {
    a:10,
    b:20,
    f1:function(){
        console.log('f1', this.a, this.b);
    },
    // f2:()=>{
    //     console.log('f2', this.a, this.b);
    // }, // 다음 속성을 위해 마지막 속성 다음에 콤마를 붙임, 문법 에러가 아님

    f2:function(){
        for (const key in this) { // this 이 객체에 대한 키값
            console.log(key, this[key]);
        }
    }
}
obj.f1();
console.log("-------------");
obj.f2(); // this를 사용할 때는 람다함수로 접근 불가 => x
 */





/* 
//배열          객체
//[]            {}
//인덱스 생성   속성 생성
//forEach 사용  forEach 불가
//length 사용   length 불가
let t = {
    name:'호랑이',
    age:100,
    bl:true
}
console.log(t);
console.log(t.name, t.age, t.bl);
console.log(t['name'], t['age'], t['bl']);

for (const key in t) {
    console.log(key);
    console.log(t[key]);
}

//witth를 사용하여 t를 한번만 부르고 값을 호출 가능
with(t){
    console.log(name, age);
}

let obj = {
    a:10,
    b:20,
    f1:()=>{console.log('f1');
    }
}
console.log(obj);
obj.b = 99;
obj.c = 30;
console.log(obj);

//속성 제거
delete(obj.b)
console.log(obj);

obj.f2 = ()=>{console.log('test');}
obj.f2();
console.log(obj);
delete(obj.f1);
console.log(obj); 
*/






/* 
//비동기 함수를 동기 함수처럼 사용하기(동기화)
for (let i = 0; i < 3; i++) {
(function(x){
    setTimeout(
        ()=>{console.log(x);},
        i*1000
        )
    })(i)
}
*/




/* 
//문자를 코드로 변환하여 실행하기
let str = '';
str += 'let a = 10;'
str += 'console.log(a);'
console.log(str);
eval(str);
 */



/*
//비동기 관련 함수(실행 순서를 지키지 않는 함수)
console.log('1');
let num = 0;
//setInterval - 지정한 시간마다 인수로 받은 함수를 호출(비동기 함수)
let id = setInterval(()=>{
    console.log(num++);
    }, 2000)

//setTimeout - 지정한 시간뒤에 인수로 받은 함수를 호출(비동기 함수)
setTimeout(
    ()=>{
        clearInterval(id);
        console.log('exit');
    },
    13000
)
console.log('2');
*/




/* 
//1
let t = () => () => 100;

//2
t = () => () => {
    return 100;
}

//3
t= () => {
    return () => {
        return 100;
    }
}

console.log(t()());

//4
t = (a) => {
    return () => {
        return 100 + a;
    }
}
console.log(t(10)());

//5
t = (a) => {
    return (b) => {
        return a + b;
    }
}
console.log(t(10)(20));

//6
t = (a) => {
    return(b) => b+1;
}

//7
//인수전달이 한개일 경우 괄호를 생략 할 수 있다
t= (a) => (b) => a + b;    
t= a => b => a + b;


//8
t= (a,c) => (b,d) => a * b + c * d;
 */




/* 
let f1 = () =>{
    return 100;
}
let f2 = ()=>100;

let f3 = ()=>{
    return console.log('1');
}
let f4 = ()=>console.log('1'); 
*/







/* 
let f1 = function(a){
    console.log(a);
}
f1(1);

// (a)=>{}
f1 = (a) =>{
    console.log(a);
}
f1(2);

// (a) => {(b)=>{}}
let f2 = (a) =>{
    console.log(a);
    let f2 = (b) =>{
        console.log(b);
    }
    f2(a+1);
}
f2(3);

// ((a) => {(b)=>{}})(); 
((a) =>{
    console.log(a);
    let f3 = (b) => {
        console.log(b);
    }
    f3(a+1);
})(5);

// f1 = function하면 f1이 함수로 취급
// function(fc)를 사용하여 fc라는 함수를 f1의 인수로 받아준다
// fc(10)을 사용하여 인수로 받은 함수에 10을 대입
// ((a)=>{((b)=>{}()})();
let f1 = function(fc){
    fc(10);
}
f1((a) =>{
    ((b) => {
        console.log(a + b);
    })(20);
}); 
*/
 



/* 
//close 함수 - 지역변수가 사라지지않고 계속 사용할수 있게 만들어 두는 것
let f1 = function(){
    let a = 100;
    return function(){
        console.log(a);
    }
}
f1()();
 */





/* 
(function(){
    console.log('1');
    return function(){
        console.log('2');
    }
})()();
 */





/* 
let f1 = function(fc){
    console.log('1');
    let f2 = function(fc){
        console.log('2');
    }
    return f2;//함수 자체를 콜 
    //return f2();  함수의 값을 받아서 콜
}
f1()();

let f3= function(fc){
    console.log('3');
    
    return function(fc){
        console.log('4');
    };
}
f3()();
*/





/*
let f1 = function(fc){
    console.log('1');
    fc();
}
let f2 = function(){
    console.log('2');
}
//방법1
f1(f2);
//방법2
f1(function(){
    console.log('3');
});
//방법3
f1(()=>{
    console.log('4');
});
*/





/*
const f1 = function(){//const를 사용할 경우 f1을 다시 정의하여 사용할 수 없다.
    console.log('1');

    let f2 = function(){
        console.log('2');
    }
    f2();
}
f1();

f1 = function(){
    console.log('3');

    let f2 = function(){
        console.log('4');
    }
    f2();
}
f1();
*/


/*
// Hoisting 가능(호출문이 먼저 나와도 실행이 가능하다)
function f1(){//함수라서 호출해주지않으면 출력값이 나오지 않는다.
    console.log('1');
}
f1();

//Hoistin 불가(변수로 받아서 사용하기 떄문에 변수의 선언이 없으면 사용이 불가하다.)
let f2 = function(){
    console.log('2');
}
f2();

//람다식으로 변경했을떄의 모습
let f3 = ()=>{
    console.log('3');
}
f3();

//즉시 실행 함수 (IIFE)
//즉시 실행 함수 앞에 있는 코드는 반드시 ;를 사용해야한다.
(function(){ 
    console.log('4');
})();

//즉시 실행 함수 (IIFE)
(()=>{ 
    console.log('5');
})();

function f4(num){
    console.log(num);
}
f4(100);

(function(num){
    console.log(num);
})(200);

(function(dt){
    let start = new Date().getTime();
    while(new Date().getTime() < start + dt);//1초의 시간 딜레이
})(2000);
console.log('test');

//생성자 합수 : 클래스와 동격이다.
function Fff555(){//함수의 첫 번쨰 글자가 대문자로 하게되면 class로 취급
    this.num1 = 10;//멤버변수 선언
    this.num2 = 20;
    
    this.m1 = function(){//멤버변수 선언
        console.log(this.num1);
    }
    
    this.m2 = () => {
        console.log(this.num2);
    }
}

let ins = new Fff555();//객체 생성
ins.m1();
ins.m2();
new Fff555().m1();

function t1(){
    console.log('1');
}

function t2(n, s){
    console.log('2');
}

function t3(){
    console.log('3');
    return 888;
}

function t4(n){
    console.log('4');
    return n*2;
}

t1();
t2(10,'호랑이');
console.log(t3());
console.log(t4(4));

function t5(){
    console.log(typeof(arguments));//전달받은 인수의 타입 확인
    console.log(arguments.length);//전달받은 인수의 길이 확인
    let sum = 0;
    for (let key of arguments) {
        sum += key;
    }
    console.log(sum);
}
t5(10, 20, 30);
*/


/*
let a = 10;
if(a > 3){
    console.log('test1');
}

a > 3 && console.log('test2');

if(!false){
    console.log('test3');
}

false || console.log('test4');
*/




/*
//== ===의 차이
console.log(100==100);
console.log(100=='100');
console.log(100==='100');
*/



/*
let start = new Date().getTime();

while(new Date().getTime() < start + 2000)
//2초정도 후에 출력
console.log("호랑이");
*/



/*
let start = new Date().getTime();
console.log(start);

for(var i = 0; new Date().getTime() < start + 1000; i++){
//1초동안 for문이 돌아간 횟수가 i에 들어간다.
}
console.log(i);
*/




/*
//Date()
let n = new Date();
console.log(n.getFullYear(), '년');
// 0월 + 1
console.log(n.getMonth(), '월');
console.log(n.getDate(), '일');
//0(일) 1(월) 2(화)
console.log(n.getDay(), '요일');
console.log(n.getHours(), '시');
console.log(n.getMinutes(), '분');
console.log(n.getSeconds(), '초');

console.log(typeof(n));
console.log(typeof(Date));
console.log(typeof n);
console.log(typeof Date);
*/




/*
//산술연산, 비교연산, 논리연산
//증가연산(++), 감소연산(--)
//복합대입연산자(+=)
//제어문, 삼항연산
//true, false 
//자바와 순서 동일

console.log(3**2**4);
// 별 2개를 이용하면 제곱승 구할 수 있음
// 연속으로 사용할 경우 뒤에 먼저 계산 된다.
console.log(Math.pow(2,4));
*/


/*
let s = '1000';
let n = 1000;
console.log(typeof(s), typeof(n));

console.log(Number(s)+10);
console.log(parseInt(s)+10);
console.log(String(n)+10);
let r1 = s;
let r2 = +s;//슈가코드
let r3 = +'2000';
console.log(typeof(r1),typeof(r2),typeof(r3));
*/




/*
let str = "호랑이";
str += '독수리';
console.log(str);
*/



/*
const a = 10;
a = 20;
*/



/*
//var와 let의 차이점
//지역성을 유지하는가?
var a = 10;
if(true){
    var a = 20;
    console.log(a); // 20
}
console.log(a); // 20

let b = 10;
if(true){
    let b = 20;
    console.log(b); // 20
}//let의 경우 스코프 안에서만 허용하겠다.
console.log(b); // 10 
*/



/*
let a = 10;
console.log(typeof(a));

a = '호랑이';
console.log(typeof(a)); //새로운 값을 넣었을떄 원래 값이 사라지고 들어간다고 이해하기
*/




/*
let obj = {
    a:{
        c:{
            d:10
        }
    }
}
console.log(obj.a.c.d);
/*




/*
let tiger = {
    a : 10,
    b : '호랑이',
    c : true,
    d : [],
    e : {},
    f : function(){},
    g : undefined
};

console.log(tiger, typeof(tiger));
console.log(tiger.a, typeof(tiger.a));
/*




/*
//변수의 타입
let a = 10;
let b = '호랑이';
let c = true;
let d = [];
let e = {};
let f = function(){}; //f는 function 타입이다.
let g = undefined; //정의되지않은 타입이다.

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(3.14)); //float타입이 없이 num타입이다.
*/




/*
//기본 출력 방법
// console.log("호랑이");
var a = 10;
let b = 20;
// var에서 let 사용하는 것을 바뀜 - 자동으로 타입을 지정해준다.
const c = 30;
console.log(a, b, c);
*/