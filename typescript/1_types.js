// 자바스크립트에 타입 문법이 추가된 덧
// 코드를 짤 때 타입을 엄격하게 지정(정적 타입)
// 잘못된 타입의 데이터가 들어가는 것을 막아 타입 관련 버그들을 미연에 방지
// 변수에 타입 지정 가능
// 변수명: 타입명
// TS에서 지원하는 기본 자료형
// boolean, number, string, array, object, 튜플(tuple), enum, any, void, null과 undefined, never 등이 있다.
// 1. boolean
// true, false값을 저장하는 타입
let active = true;
// 이 변수에는 boolean 타입만 들어올 수 있음
// active = 1; // 타입이 실수로 변경될 때 에러 발생
// 2. number
// 숫자 데이터를 저장하는 타입
// 10진, 16진, 2진, 8진수 리터럴 지원
let decimal = 10;
let hex = 0xa;
let binary = 0b1010;
let octal = 0o12;
// 이 변수에는 number 타입만 들어올 수 있음
console.log(decimal, hex, binary, octal);
// 3. string
// 문자열 데이터를 저장하는 타입
let message = "Welcome";
// 이 변수에는 string 타입만 들어올 수 있음
// 4. array
// 배열의 타입을 정의하는 방법에는 두 가지가 존재
// 1) type[]
let firstArray = [1, 2, 3]; // 숫자만 담긴 배열만 가능
// 2) 제네릭: Array<type>
let secondArray = [1, 2, 3];
// 타입을 파라미터로 입력하는 문법
// 5. object
let person = { a: 11, b: 'bb', c: true };
// 원시 자료형이 아닌 모든 자료형 값이 들어올 수 있음(예: 배열, 객체, 함수 등)
let person2 = { name: "Kim", age: 35 };
// 이 변수에는 객체만 들어올 수 있는데 name은 string, age는 number 타입만 가능
let person3 = { name: 'Kim', age: 29 };
// ? 사용 시 job 속성은 옵셔널 한 값
// 어떤 함수의 매개 변수가 객체 자료형을 받는다고 가정
function greetUser(user) {
    console.log(`hello ${user.name}`);
}
;
greetUser({ name: 'Goni', age: 35 });
// 객체의 모든 속성을 명시적으로 지정한 덕분에 코드를 보는 모든 사람이
// 해당 객체로 무엇을 할 수 있고, 할 수 없는지 쉽게 알 수 있음
// Q1
let job = 'student';
let dailyStudyTime = 5;
// Q2
let favoriteMusic = { artist: "NewJeans", song: 'Ditto' };
// Q3
let project = {
    member: ['Kim', 'Park'],
    days: 30,
    started: true
};
// 6. 튜플(tuple)
// 튜플을 사용하면 배열의 요소에 자료형을 정의할 수 있다.
let myTuple = ['hi', 5, 'hello'];
// TS는 튜플에 정의된 인덱스의 자료형은 알고 있지만, 배열에 새롭게 추가되는 요소의 자료형을 알 수는 없다.
// 예를 들어
myTuple.push(3);
console.log(myTuple);
// 7. enum(enumerated type)
var Status;
(function (Status) {
    Status[Status["deleted"] = 0] = "deleted";
    Status[Status["pending"] = 1] = "pending";
    Status[Status["active"] = 2] = "active"; // 2
})(Status || (Status = {}));
const blogPostStatus = Status.active;
console.log(blogPostStatus);
// 열거형 내부의 값은 0부터 시작
// 블로그 게시물의 상태를 표현할 때 2가 아닌 active라고 하는 것이 가독성이 좋음
// 다음과 같이 시작값을 지정하여 열거형의 숫자를 원하는 값부터 할당할 수도 있음
var Week;
(function (Week) {
    Week[Week["MON"] = 1] = "MON";
    Week[Week["TUE"] = 2] = "TUE";
    Week[Week["WED"] = 3] = "WED";
    Week[Week["THU"] = 4] = "THU";
    Week[Week["FRI"] = 5] = "FRI";
    Week[Week["SAT"] = 6] = "SAT";
    Week[Week["SUN"] = 7] = "SUN";
})(Week || (Week = {}));
const todayWeek = Week.MON;
console.log(todayWeek);
// 반대로 숫자를 이용하여 열거형 값에 접근 가능
console.log(Week[5]);
// 8. any
// 모든 자료형이 다 들어올 수 있음
let anyValue = 123;
anyValue = 'any';
anyValue = false;
anyValue = [1, 'a'];
// 자바스크립트에서 기존 코드들을 활용하면서 부분적으로 타입스크립트 적용할 때 사용
// 9. void
// 자료형이 없음을 의미
// 함수의 리턴이 없을 때
// 함수의 리턴 타입으로 자주 사용됨
function storeValueInDatabase(objectToStore) {
    // 데이터베이스에 값을 저장
}
;
// 이 함수는 객체를 받아서 데이터베이스에 저장하지만 아무것도 반환하지 않기 때문에 리턴값을 void로 지정
// 10. null과 undefined
// null 또는 undefined 자료형의 변수를 만드는 것은 유용하지 않음
// => null 및 undefined 값만 할당할 수 있기 때문
// 주로 유니언 자료형 만들때 사용(예: string | undifined)
// 11. never
// never는 절대 발생하지 않는 값
// 예를 들어 반환을 아예 하지 않거나 항상 오류를 발생시키는 함수에 사용할 수 있다.
function throwError(error) {
    throw new Error(error);
}
;
// 12. union type(타입을 2개 이상 합친 새로운 타입)
let unionValue = 'hi'; // 문자 또는 숫자가 들어올 수 있음
unionValue = 123;
// 문자 또는 숫자가 담길 수 있는 배열 타입 지정?
let unionArray = [1, '2', 3];
let unionArrayTwo = [1, '2', 3];
// 문자 또는 숫자가 가능한 객체 타입 지정?
let unionObject = { name: 'Kim' };
// (참고)
// 변수를 선언만 하면 자동으로 any 타입
// 확인법: 변수에 마우스 커서 올려두면 알려줌
// 값을 할당하면 그 때 타입이 정해짐(동적 타입)
// 선언과 동시에 초기화 시 타입 지정은 자동으로 됨
let value = 123;
// value = '123'; // error
