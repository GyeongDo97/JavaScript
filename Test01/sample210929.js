/* 
let obj = { //obj는 객체
    n:10,
    obj2:{
        f1:() => {
            console.log(this);
            console.log(this.n);
        }
    }
}
obj.obj2.f1();
 */



/* 
//생성자함수(클래스) >> new

function Func(){
    this.num = 100;
    this.obj = {
        num : 200,
        f1:()=>{
            console.log(this.num);
            //자기자신을 감싸고있는 num을 사용한다.            
        },
        f2:function(){
            console.log(this.num);
            //자기자신 안에 있는 num을 사용한다. 
        }
    }
}
let ins = new Func();
// 자바에서는 ins를 객체라고 했었지만 JS에는 인스턴스라고 한다.
ins.obj.f1();
ins.obj.f2();
console.log('');
*/




/* 
// 객체안에서 에로우함수를 사용할때
// this를 주의(사용하지 말자) 하자.
let obj = {
    num : 100,
    func01:()=>{//람다함수에서 this를 사용하면 빈 객체를 가르킨다.
        console.log(this);
        console.log(this.num);
    },
    func02:function(){
        console.log(this);
        console.log(this.num);
    },
    func03(){
        console.log(this);
        console.log(this.num);
    }
    //this쓸일이 있으면 에로우함수를 쓰지말고 function을 쓰자
    //2번형식을 쓰면 되지만 1번형식을 쓸 일이 있으면 3번을 쓰자
    //1번과 3번 동일 코드
}
obj.func01();
obj.func02();
obj.func03();
 */





/* 
//          문자열      배열        객체
//length    o           o           x
//forEach   x           o           x
//forIn     o           o           o
//forof     o           o           x
//map       x           o           x

//문자열
let a = "문자열";

console.log(a.length);

// a.forEach((v,i) => {
//     console.log(v,i);
// });

for (const v in a) {
    console.log(v, a[v]);
}

for (const v of a) {
    console.log(v);
}

// a1 = a.map(
//     v => (v.length > 0) ? 10:20
// )
// console.log(a1);

console.log("===========================");

//배열
let b = ['배', '열'] ;

console.log(b.length);

b.forEach((v,i) => {
    console.log(v,i);
});

for (const v in b) {
    console.log(v, b[v]);
}

for (const v of b) {
    console.log(v);
}

b1 = b.map(
    v => (v.length > 0) ? 10:20
)
console.log(b1);

console.log("============================");

//객체
let c = {객체:1};

console.log(c.length);

// c.forEach((v,i) => {
//     console.log(v,i);
// });

for (const v in c) {
    console.log(v, c[v]);
}

// for (const v of c) {
//     console.log(v);
// }

// c1 = c.map(
//     v => (v.length > 0) ? 10:20
// )
// console.log(b1);
 */





/* 
// 배열 관련 함수 14 - reduce()
// reduce((누적값, 현잿값, 인덱스, 요소) => {result 결과}, 초깃값);
let tt = 'tt';
let allNames = {tt : 80};

if (tt in allNames) {
    console.log(1);
}else{
    console.log(2);
}

let ar = [ { name : 'tiger', x:22}, {name : 'lion', x: 42 }, {name : 'dog', x: 32 } ];

let max = ar.reduce( function(a, b){
    console.log(b.x);
    return a > b.x? b.x: a;
}, ar[0].x);

console.log(max);
 */



/* 
// 배열 관련 함수 13 - length()
// 길이를 알고 싶을 때
let ar = [1, 6, 11, 39, 21];
console.log(ar.length);

let st = 'tiger'
console.log(st.length);

let cr = ['tiger','cat','dog','lion','ai'];
let dr = cr.filter(v => v.length <= 3);
console.log(dr);
 
 */



/* 
// 배열 관련 함수 12 - filter() 
// 원하는 조건의 데이터들로 데이터 저장
let br = [1,2,10,39,20];
let dr = br.filter(v => v < 15);
console.log(dr);
 */




/* 
// 배열 관련 함수 12 - some()
// 배열안의 값이 지정함수의 조건을 하나라도 만족하면 true
let ar = [1, 2, 10, 39, 20];
console.log(ar.some( v => v % 2 == 0));
 */




/* 
// 배열 관련 함수 11 - every()
// 배열의 값이 지정 함수의 조건을 만족하는지 확인할떄 사용
let ar = [1,2,10,39,20];
let br = [1,2,10,50,20];
function func(value){
    return value < 40;
}
console.log(ar.every(func));
console.log(br.every(func));
//람다를 이용하여 위의 코드와 동일 코드
console.log(br.every( v => v < 40 ));
console.log(br.every(
    (v) => {return v < 40 }   
));
 */




/* 
// 배열 관련 함수 10 - indexOf()
// 찾으려는 값의 자리를 찾는다
let ar = ['tiger','cat','lion','tiger','apple']
console.log(ar.indexOf('lion')); 
// 2번쨰 자리에 있음

console.log(ar.indexOf('dog')); 
// 배열안에 없어서 -1

console.log(ar.indexOf('lion',3)); 
// 3번째 자리에서 부터 '값'을 찾는다 lion은 2번째 자리기때문에 -1

console.log(ar.indexOf('tiger'));
console.log(ar.lastIndexOf('tiger'));
// 저장은 배열의 순서대로 저장하지만 뒤에서부터찾을떄는 lastIndexOf를 사용
 */






/* 
// 배열 관련 함수 9 - splice()
// [시작위치, 삭제항목수, 추가항목,,,]
let ar = [1,2,3];
// 배열 1번자리에서 삭제는 하지말고 10,20,30을 추가해라
ar.splice(1,0,10,20,30);
console.log(ar);
// 배열 1번자리부터 2자리를 삭제하고 88,99를 추가해라
ar.splice(1,2,88,99);
console.log(ar);
let br = [66, 55,44,33];
// 배열 0번자리부터 삭제는 하지말고 배열br을 넣어라
ar.splice(0,0,br);
console.log(ar);
 */



/* 
// 배열 관련 함수 8 - slice()
// (a,b) a부터 b앞까지
let ar = [10, 20, 30, 40, 50, 60];
let br = ar.slice(2,4);
console.log(br);
 */




/* 
// 배열 관련 함수 7 - sort()*
// 배열안에 있는 값을 숫자로 보는 것이 아니라 문자열로 보아서 앞에 값 한개씩 비교하여 정렬한다.
let ar = [52, 273, 103, 32];
ar.sort();
console.log(ar);

//인터페이스처럼 되어있어서 인수를 반드시 2개 이상 넣어주어야한다.
function func(a, b){
    //if(a>b){
    //    return +1;
    //}else{
    //    return -1;
    //}

    //return (a>b)?+1:-1;
    
    return (a-b);
}
// 규칙 설정 - short안에 함수를 넣어서 지정한 함수의 규칙대로 정렬해준다.
ar.sort(func);
console.log(ar);

let br = [52, 73, 43, 32];
function func2(a,b){
    let c = a/10 + a%10;
    let d = b/10 + b%10;
    return c-d;
}
br.sort(func2);
console.log(br);

let cr = [-52, -73, -43, -32];
function func3(a,b){
    let c = Math.abs(a);
    let d = Math.abs(b);
    return c-d;
}
cr.sort(func3);
console.log(cr);

let dr = [
    {n:30, s:'삼성'},
    {n:20, s:'롯데'},
    {n:10, s:'현대'}
];
function func4(a,b){
    return a.n - b.n;
}
dr.sort(func4);
console.log(dr);
console.log('test');
 */




/* 
// 배열 관련 함수 6 - shift()*
// 배열의 처음부분에 추가 및 삭제
let ar = [10,20,30];
console.log(ar.shift());
console.log(ar);
console.log(ar.unshift(40));
console.log(ar);
console.log(ar.unshift(50,60,70));
console.log(ar);
 */



/* 
// 배열 관련 함수 5 - reverse()* 
// 배열의 값들의 순서를 뒤집는다.
let ar = ['tiger', 'lion', 'cat'];
console.log(ar);
console.log(ar.reverse());
console.log(ar);
 */




/* 
// 배열 관련 함수 4 - join() 
// 배열의 값들을 연결해서 결과값을 보여준다
let ar = ['tiger', 'lion', 'cat'];
console.log(ar.join());
console.log(ar.join(''));
console.log(ar.join('-'));
 */




/* 
// 배열 관련 함수 3 - concat()
let ar = [10, 20, 30];
let br = ar.concat(40);
console.log(ar);
console.log(br);

let cr = [40, 50, 60];
let dr = ar.concat(cr);
console.log(dr);
//concat을 했을 경우 데이터를 합치는 것이기 떄문에 아래와 같은 결과가 나온다
//[10,20,30,40,50,60]

ar.push(cr);
console.log(ar);
//데이터의 값을 배열의 형태로 넣고 싶으면 push를 사용하여 넣으면 된다.
//[10,20,30,[40,50,60]]
 */




/* 
//배열 관련 함수 2 - Stact 구조
let ar = [80, 20, 10, 15];
// 아래와 같이 주석을 달게되면 원본 데이터가 손상된다는 뜻이다.
// pop()*
let num1 = ar.pop();
console.log(ar, num1); // pop은 빠지는 값을 리턴해주고있다.
// push()*
let num2 = ar.push(20); 
console.log(ar, num2); // push는 배열의 길이를 리턴해주고있다.
 */





/* 
//배열 관련 함수 1 -변수에 배열의 형태를 넣었을때 출력되는 형태, 타입 
let ar = [80, 20, 10, 15];
console.log(ar, typeof(ar));

let br = ar.toString();
console.log(br, typeof(br));

let st01 = '80,20,10,15';
console.log(st01, typeof(st01));

//Date의 다양한 형태
let date = new Date();
console.log(date);
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());//함수 중에 보는 방식이 다른 다양한 함수들이 있다.
 */