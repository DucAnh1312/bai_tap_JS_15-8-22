// trả về 1 mảng gồm các phần tử giống nhau trong 2 mảng
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 8, 9, 12];

const common = arr1.filter((x) => arr2.indexOf(x) !== -1);
console.log(common);

// tìm 2 phần tử có tổng lớn nhất trong 1 mảng
function largestPairSum(numbers) {
    numbers.sort((a, b) => b - a);
    console.log(numbers[0] + " " + numbers[1]);
  }
  
  largestPairSum([1, 7, 9, 2, 5, 3, 8]);

// tìm các cặp phần tử có tổng  bằng 1 số cho trước
function twoSum(arr, S) {
    const sum = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (S == arr[i] + arr[j]) sum.push([arr[i], arr[j]]);
      }
    }
    return sum;
  }
  
  console.log(twoSum([1, 7, 9, 2, 5, 3, 8], 10));
  
  // lấy ra 1 mảng mới từ mảng cho trước sao cho các phần tử chỉ xuất hiện 1 lần (sử dụng set)
// sử dụng spread and set
const a = [1,2,3,1,2,3,4,5,6,4];
const b = [... new Set(a)];

console.log(b);

//Lấy ra 1 mảng mới gồm các phần tử trùng nhau trong 2 mảng, mỗi phần tử xuất hiện đúng 1 lần ở mảng mới
const array1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const array2 = [3, 5, 9, 10, 88];

const c = [...new Set(array1)];
const d = [...new Set(array2)];

const common1 = array1.filter((x) => array2.indexOf(x) !== -1);
console.log(common1);

// từ array trả về một object

const counts = {};
const sampleArray = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)

// bai7

const list = [
    { make: "audi", model: "r8", year: "2012" },
    { make: "audi", model: "rs5", year: "2013" },
    { make: "ford", model: "mustang", year: "2012" },
    { make: "ford", model: "fusion", year: "2015" },
    { make: "kia", model: "optima", year: "2012" },
  ];
  
  const audiCheck = list.filter(function(properties) {
    return properties.make === "audi";
  });
  
  const fordCheck = list.filter(function(properties) {
    return properties.make === "ford";
  });
  
  const kiaCheck = list.filter(function(properties) {
    return properties.make === "kia";
  });

  const afterCheck = {audi: audiCheck, ford: fordCheck, kia: kiaCheck};
  console.log(afterCheck);



  // bai 8
  const order = {
    cart: [
      { id: 1, name: "ao dai", amount: 5, price: 100000 },
      { id: 2, name: "ao coc", amount: 2, price: 200000 },
      { id: 3, name: "quan dai", amount: 3, price: 150000 },
      { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    total_money: 0,
    total_amount: 0,
  };
  const product = order.cart;
  const totalMoney = order.total_money;
  const totalAmount = order.total_amount;
  const initualValue = {amount: totalAmount, price: totalMoney};
  console.log(order.cart);

  const total = product.reduce((sum, initualValue) => {
    return {
      amount:sum.amount + initualValue.amount,
      price: sum.price + initualValue.price * initualValue.amount,
    }
  }, initualValue);
  console.log(total);