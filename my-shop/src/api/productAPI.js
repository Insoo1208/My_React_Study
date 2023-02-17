import axios from "axios";

// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용 가능
export const getProducts = async () => {
  try {
    // const response = await axios.get('http://localhost:4000/products');
    const response = await axios.get('https://my-json-server.typicode.com/ChaJaeKyoung/db-store/products');
    // status가 200(OK)일 때만 리턴
    if (response.status === 200) return response.data;
    else throw new Error(`api error: ${response.status} ${response.statusText}`);
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때
    console.error(error);
    throw error;
  };
};

// 특정 상품 조회
// export const getProductById = async id => {
//   try {
//     const response = await axios.get(`http://localhost:4000/products/${id}`);
//     if (response.status === 200) return response.data;
//     else throw new Error(`api error: ${response.status} ${response.statusText}`);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   };
// };

// 상품 등록
// export const addProduct = async product => {
//   try {
//     const response = await axios.post(`http://localhost:4000/product-add`, { product });
//     if (response.status === 200) return response.data;
//     else throw new Error(`api error: ${response.status} ${response.statusText}`);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   };
// };
// request.body.product

// 상품 주문
// export const orderProduct = async ({ productId, orderCount }) => {
//   try {
//     const response = await axios.post(`http://localhost:4000/product-order`, { productId, orderCount });
//     if (response.status === 200) return response.data;
//     else throw new Error(`api error: ${response.status} ${response.statusText}`);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   };
// };
// request.body.productId
// request.body.orderCount