let obj = {
    a:10,
    b:'호랑이'
}
// 객체 >> JSON
let str = JSON.stringify(obj);
console.log(str, typeof(str));

//>>> 전송...
let obj2 = JSON.parse(str);
console.log(obj2, typeof(obj2));




/* 
//Math.PI
console.log(Math.PI);

//Math.sqrt()
console.log(1.7*1.7);
console.log(Math.sqrt(3));

//Math.random()
//0.0 ~ 1.0
console.log(Math.random());
//10 이하의 정수 뽑고싶을때
console.log(Math.floor(Math.random()*10));

//Math.sin()
//인수 값으로 들어가는 것이 각도가 아니라 라디안으로 들어간다.
//각도로 계산하고 싶은면 Math.PI* 각도/180.0을 쓰면 근사값을 구할 수 있다.
let r = Math.PI*30.0 / 180.0
console.log(Math.sin(r));

//abs, ceil, floor, round
//min, max, log, pow
 */






/* 
function Apple(){
    this.query = {
        name:'홍길동',
        age:10
    }
}
function Orange(){
    this.request ={
        x:10,
        y:20
    }
}

//아래 2줄의 코드를 사용해서 부자관계 상속을 만든다
Orange.prototype = new Apple();
Orange.prototype.constructor = Orange;

let ctx = new Orange();
console.log(ctx);
console.log(ctx.query);
console.log(ctx.request);
//ctx를 출력했을떄 query는 안 보이지만 출력을 하게되면 값이나온다
//이럴경우 상속을 받았다고 생각하자
 */







/* 
function Apple(){
    this.a = 10;
}
function Orange(){
    this.b =10;
}

//아래 2줄의 코드를 사용해서 부자관계 상속을 만든다
Orange.prototype = new Apple();
Orange.prototype.constructor = Orange;

let obj = new Orange();
console.log(obj.a, obj.b);
 */



/* 
function MakeInfo(name,n1,n2){
    this.name = name
    this.n1 = n1
    this.n2 = n2
}

let ar = [];
ar.push(new MakeInfo('호랑이0',10,60));
ar.push(new MakeInfo('호랑이1',20,70));
ar.push(new MakeInfo('호랑이2',30,80));
ar.push(new MakeInfo('호랑이3',40,90));
ar.push(new MakeInfo('호랑이4',50,10));

ar.forEach((v,i)=>{
    ar[i].sum = v.n1 + v.n2;
});

MakeInfo.prototype.output = function(){
    console.log(this.name, this.n1, this.n2, this.sum);
}

for(let index in ar){
    ar[index].output();
} 
*/






/* 
function MakeInfo(name,n1,n2){
    this.name = name
    this.n1 = n1
    this.n2 = n2
}

let ar = [];
ar.push(new MakeInfo('호랑이0',10,60));
ar.push(new MakeInfo('호랑이1',20,70));
ar.push(new MakeInfo('호랑이2',30,80));
ar.push(new MakeInfo('호랑이3',40,90));
ar.push(new MakeInfo('호랑이4',50,10));

ar.forEach((v,i)=>{
    ar[i].sum = v.n1 + v.n2;
});

ar.forEach((v, i) => {
    console.log(v.name, v.n1, v.n2, v.sum);
});
 */





/* 
function MakeInfo(name,n1,n2){
    this.name = name
    this.n1 = n1
    this.n2 = n2
}

let ar = [];
ar.push(new MakeInfo('호랑이0',10,60));
ar.push(new MakeInfo('호랑이1',20,70));
ar.push(new MakeInfo('호랑이2',30,80));
ar.push(new MakeInfo('호랑이3',40,90));
ar.push(new MakeInfo('호랑이4',50,10));

ar.forEach((v, i) => {
    console.log(v.name, v.n1, v.n2);
});
 */






/* 
function makeInfo(name,n1,n2){
    let obj = {
        name:name,
        n1:n1,
        n2:n2
    }
    return obj;
}



let ar = [];
ar.push(makeInfo('호랑이0',10,60));
ar.push(makeInfo('호랑이1',20,70));
ar.push(makeInfo('호랑이2',30,80));
ar.push(makeInfo('호랑이3',40,90));
ar.push(makeInfo('호랑이4',50,10));

ar.forEach((v, i) => {
    console.log(v.name, v.n1, v.n2);
});
 */





/* 
let ar = [];
ar.push({name:'호랑이0',n1:10,n2:60});
ar.push({name:'호랑이1',n1:20,n2:70});
ar.push({name:'호랑이2',n1:30,n2:80});
ar.push({name:'호랑이3',n1:40,n2:90});
ar.push({name:'호랑이4',n1:50,n2:10});

ar.forEach((v, i) => {
    console.log(v.name, v.n1, v.n2);
});
 */






/* 
let obj0 = {name:'호랑이0',n1:10,n2:60}
let obj1 = {name:'호랑이1',n1:20,n2:70}
let obj2 = {name:'호랑이2',n1:30,n2:80}
let obj3 = {name:'호랑이3',n1:40,n2:90}
let obj4 = {name:'호랑이4',n1:50,n2:10}

let ar = [];
ar.push(obj0);
ar.push(obj1);
ar.push(obj2);
ar.push(obj3);
ar.push(obj4);
console.log(ar);

ar.forEach((v, i) => {
    console.log(v, i);
    console.log(v.name, v.n1, v.n2);
});
*/






/*
// 객체 밖에서 생성하기 
let obj = {
}
obj.f1 = function(){
    console.log('1');
}
obj.f1();

function F1(){
}
F1.prototype.f1 = function(){
    console.log('2');
}
let ins = new F1();
ins.f1();
 */




/* 
//함수에서 return해서 값을 불러왔을때 받는 함수가 다르다.
function f1(){
    return{
        a:10,
        f:function(){}
    }
}
let obj1 = f1();
let obj2 = f1();
console.log(obj1.f === obj2.f); // false

//사용자 함수에서도 받는 함수가 다르다.
function F1(){
    this.a = 10;
    this.f = function(){}
}
let ins1 = new F1();
let ins2 = new F1();
console.log(ins1.f === ins2.f); // false

function F2(){
    this.a = 10;
}
F2.prototype.f = function(){}; // prototype을 사용하게되면 같은 함수로 볼 수 있게된다.
let ins3 = new F2();
let ins4 = new F2();
console.log(ins3.f === ins4.f); // true 
*/