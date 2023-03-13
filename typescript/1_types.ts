// 자바스크립트에 타입 문법이 추가된 덧
// 코드를 짤 때 타입을 엄격하게 지정(정적 타입)
// 잘못된 타입의 데이터가 들어가는 것을 막아 타입 관련 버그들을 미연에 방지

// 변수에 타입 지정 가능
// 변수명: 타입명

// TS에서 지원하는 기본 자료형
// boolean, number, string, array, object, 튜플(tuple), enum, any, void, null과 undefined, never 등이 있다.

// 1. boolean
// true, false값을 저장하는 타입
let active: boolean = true;
// 이 변수에는 boolean 타입만 들어올 수 있음
// active = 1; // 타입이 실수로 변경될 때 에러 발생

// 2. number
// 숫자 데이터를 저장하는 타입
// 10진, 16진, 2진, 8진수 리터럴 지원
let decimal: number = 10;
let hex: number = 0xa;
let binary: number = 0b1010;
let octal: number = 0o12;
// 이 변수에는 number 타입만 들어올 수 있음
console.log(decimal, hex, binary, octal);

// 3. string
// 문자열 데이터를 저장하는 타입
let message: string = "Welcome";
// 이 변수에는 string 타입만 들어올 수 있음