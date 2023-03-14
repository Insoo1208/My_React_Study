// 타입 확정하기 방식(여러가지 존재)
// 언제 타입을 확정해야 할까?
// 예를들어
// 함수의 파라미터에 union type을 사용하면 엄격한 TS가 에러를 발생시킬 수 있음
// const plus = (param: number | string) => param + 1; // error
// JS에서는 문자나 숫자 모두 +1 연산이 가능하지만
// TS에서는 변수의 타입이 number | string과 같은 union type인 경우
// 아직 이 파라미터의 타입이 확실하지 않으니까 자료 조작을 막음
// 비슷한 예로
// const multiflyTwo = (x?: number) => x * 2; // error
// 이럴 때 타입 확정하기 사용
// 대표적인 2가지 방법
// 1. Narrowing
const myFunc = (x) => {
    // 타입이 하나로 확정되지 않았을 경우 Narrowing 사용
    // typeof 연산자 사용
    if (typeof x === 'string')
        return x + '1';
    else
        return x + 1;
};
console.log(myFunc(1));
console.log(myFunc('1'));
const myFunc2 = (x) => {
    let array = [];
    // array[0] = x; // error
    if (typeof x === 'number')
        array[0] = x;
};
// 2. Assertion
// 변수의 타입을 특정 타입으로 생각해라
// 즉, TS가 인식을 할 수 있게 해주는 것이고, 실제로 바뀌는 것은 아님
const myFunc3 = (x) => {
    let array = [];
    array[0] = x; // 변수 x의 타입을 number로 인식해라
    console.log(array);
};
myFunc3('1');
// Assertion 문법의 용도
// 1. union type을 하나의 타입으로 확정할 때 사용
// 특정 타입을 다른 타입으로 바꿔쓰는건 안됨
// 2. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러 해결용으로 사용
// 혹은 무슨 타입이 들어올지 정확하게 알고있는데 타입 에러가 나 코드 실행을 방해할 때
// 단점: 위 예제에서 string을 넘겨도 타입 에러가 발생하지 않기 때문에 as 문법을 쓰면 TS 쓰는 이유가 없어짐
