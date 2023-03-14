// type alias(별칭) 만드는 법
let animalVar;
let animal = 'Dog';
let person4 = {
    name: 'Kim',
    age: 25
};
let person5 = {
    name: 'Alice'
};
let friend = {
    name: "Peter"
};
let position = { x: 10, y: 20 };
// Litteral type으로 더 엄격한 타입 지정하기
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동완성 기능이 동작함
// 특정 문자만 들어올 수 있도록 지정
let hisName;
hisName = "Kim";
// 함수에서 Litteral type 사용하기
const testFunc = (params) => 1;
testFunc('hello');
const RSP = (params) => ['가위', '보'];
