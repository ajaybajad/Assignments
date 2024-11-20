// let n = 5;
// for (i = 1; i <= 10; ++i) {
//     console.log(n * i);
// }

// function TableOf5 (num, max) {
//     for (let i=1; i >= 10; ++i) {
//         console.log(num * i);
//     }
// }

// TableOf5(5, 12);

// function TableOf5(num, max) {
//     for (let i = 1; i <= max; i++) {
//       console.log(`${num} * ${i} = ${num * i}`);
//     }
//   }
  
//   TableOf5(39, 10);

//   let i = 1;
//   while (i <= 10) {
//     console.log(i * 5);
//     i++;
//   }

// Q2. Write a program that grades st9dents based on their marks^
// 8 If grFatFr than 90 thFn A GradE
// 8 If bFtwFFn 70 and 90 thFn a B gradE
// 8 If bFtwFFn 50 and 70 thFn a C gradE
// 8 BFlow 50 thFn an F gradF

// let Marks = 48;
// if (Marks > 90) {
//     console.log("A Grade");
// }
// else if (Marks > 70 && Marks <= 90) {
//     console.log("B Grade");
// }
// else if (Marks > 50 && Marks <= 70) {
//     console.log("C Grade");
// }
// else if (Marks < 50) {
//     console.log("F Grade")
// }

// let num1 = 10;
// let num2 = 25;

// for (let i = num1 + 1; i <= num2; i++){
//     console.log(i);
// }


// let i = 1;
// while (i <= 25) {
//     console.log(i);
//     i++;
// }
// console.log("-------------------------")

// let j = 25;
// while (j >= 1) {
//     console.log(j);
//     j--;
// }

// function AddTwoNum (input){

//     return function (sum){
//         return sum + input;
//         // console.log(`The Sum Of ${x} & ${y} is ${z}`);
//     };
// }

// const addNum = AddTwoNum(5); 
// console.log()

// const numbers = [2,3,4,5,6,7,8,9,10];

// const OddNum = numbers.filter((num) => num  ); 


// map 
// const pricesInUSD = [100, 200, 300];
// const conversionRate = 0.85; // USD to EUR

// const pricesInEUR = pricesInUSD.map(price => price * conversionRate);

// console.log(pricesInEUR); // [85, 170, 255]


// filter
// const users = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 16 },
//     { name: 'David', age: 19 }
// ];

// const adults = users.filter(user => user.age >= 18);

// console.log(adults); 
// [{ name: 'Bob', age: 22 }, { name: 'David', age: 19 }]


//reduce
// const transactions = [
//     { id: 1, amount: 50 },
//     { id: 2, amount: 120 },
//     { id: 3, amount: 300 }
// ];

// const totalSales = transactions.reduce((total, transaction) => total + transaction.amount, 0);

// console.log(totalSales); // 470

// const orders = [
//     { id: 1, amount: 90, type: 'in-store' },
//     { id: 2, amount: 120, type: 'online' },
//     { id: 3, amount: 150, type: 'online' },
//     { id: 4, amount: 70, type: 'in-store' }
// ];

// // 1. Filter only online sales.
// const onlineOrders = orders.filter(order => order.type === 'online');

// // 2. Extract only the amounts from the filtered online orders.
// const orderAmounts = onlineOrders.map(order => order.amount);

// // 3. Sum the order amounts over $100.
// const totalRevenue = orderAmounts
//     .filter(amount => amount > 100)
//     .reduce((total, amount) => total + amount, 0);

// console.log(totalRevenue); // 270


