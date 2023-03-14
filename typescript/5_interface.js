let rect = {
    color: "lavender",
    width: 150
};
;
let rect2 = {
    color: 'blueviolet',
    width: 200
};
;
let people = { name: 'Alice' };
let teacher = { name: 'Peter', age: 30 };
let product = {
    brand: 'Samsung',
    serialNumber: 12345,
    model: ['TV', 'phone']
};
let cartList = [
    { product: '냉장고', price: 2000000 },
    { product: '모니터', price: 800000 },
    { product: '마우스', price: 150000 }
];
// 갑자기 서비스가 업데이트 되어서 일부 상품은 soldout 속성이 들어가야합니다. 
let item = { product: '청소기', price: 700000, soldout: true };
// 위에서 만든 interface를 확장해서 타입을 만들어보세요.
