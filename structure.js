/* 자바스크립트 배열
1. 0개 이상의 데이터 묶고 동일 타입일 필요 없음
2. 숫자로 되어있는 키의 경우 인덱스로 분류되어 사용가능
3. 길이는 유동적이며 외부에서 변화가능

데이터를 변수 -> 1개씩 -> 비슷한 역할 하는 데이터들을 묶어서
1. 순서가 있는 경우 2. 순서가 없는 경우
*/
// 배열 -> const 배열 자체는 재할당 x 내부에 요소들을 다시 변경 -> const
/* C.R.U.D
Create
Read
Update
Delete
*/
let a = [1, 2];

let b = [a];

console.log(a, b);

a = [2, 3]; //재할당시 안 바뀜, a[0] = 2, 이런식으로 바꿔야함

console.log(a, b);
b = [a];
a[0] = 4;
a[1] = 5;

console.log(a, b);
//배열.shift는 맨 앞 삭제 unshift는 맨 앞 추가

const arr2 = [1, 2, 3, 4, 5];
arr2.length = 1; //강제로 만들면
console.log(arr2);
arr2.length = 4; //원상복구하면
console.log(arr2);
