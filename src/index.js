// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task1(str1, str2) {
//     const firstLetter = str1[0];
//     const lastLetter = str2[str2.length - 1];

//     return firstLetter === lastLetter;
// }

// const result = task1("Ukraine", "DeutchlandU")
// console.log(result);
// document.body.innerHTML = result;

// ```
// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.
// ```
// function task2(str1, str2) {
//     const firstLetter1 = str1[0];
//     const firstLetter2 = str2[0];

//     return firstLetter1 === firstLetter2;
// }

// console.log(task2("Mango", "Monster"))

// ```
// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task3(str1, str2) {
//     const lengthString1 = str1.length;
//     const lengthString2 = str2.length;

//     return lengthString1 === lengthString2;
// }

// console.log(task3("Mango", "Monster"))

// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance.
// Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100.
// В іншому випадку функцію повинна повернути рядок "Goodbye".
// ```

// function task4(age, balance) {
//     if (age >= 18 && balance > 100) {
//         return "Welcome";
//     } return "Goodbye";
// }

// console.log(task4(20, 150))
// console.log(task4(17, 150))

// function markup(x,y) {

//     document.body.innerHTML += task4(x, y);
// }

// markup(20, 150);
// markup(17, 300);
// markup(19, 50);

// ```
// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price).
// Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок
// "Це занадто дорого".
// ```

// function task5(amount, price) {
//     const totalPrice = amount * price;

//     if (totalPrice <= 1000) {
//         return "Ми це купуємо";
//     } return "Це занадто дорого";
// }

// console.log(task5(5, 40))
// console.log(task5(100, 200))

// ```
// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія.
// Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".
// ```

// function task6(temp) {
//     if (temp < 0) {
//         return "Замерзає";
//     } else if(temp >0 && temp < 25){
//         return "Нормальна температура";
//     } else {
//         return "Спекотно";
//     }
// }

// document.body.innerHTML += task6(10);

// ```
// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".
// ```;

// function task4(number, divisor) {
//   if (number % divisor === 0) {
//     console.log('OK');
//   } else {
//     console.log('NOT OK');
//   }
// }

// task4(4, 2);
// task4(20, 14);

// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".

// function task5(isRaining, hasUmbrella) {
//   if (isRaining && hasUmbrella) {
//     console.log('Не Змокнеш');
//   } else if (isRaining && !hasUmbrella) {
//     console.log('Змокнеш');
//   } else {
//     console.log('Без дощу');
//   }
// }

// task5(false, false);
// task5(true, true);
// task5(false, true);
// task5(true, false);

// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".

// function task6(grade) {
//   if (typeof grade !== 'number' || isNaN(grade)) {
//     console.log('Некоректне значення');
//   }

//   if (grade < 0 || grade > 100) {
//     console.log('Недійсна оцінка');
//   }

//   if (grade >= 0 && grade <= 50) {
//     console.log('Незадовільно');
//   } else if (grade <= 74) {
//     console.log('Задовільно');
//   } else if (grade <= 89) {
//     console.log('Добре');
//   } else if (grade <= 100) {
//     console.log('Відмінно');
//   }
// }

// task6(25);
// task6(50);
// task6(55);
// task6(75);
// task6(89);
// task6(95);
// task6(110);
// task6();

// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", в іншому випадку поверніть "Робочий день".

// function task7(dayOfWeek, isHoliday) {
//   if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday' || isHoliday) {
//     console.log('Вихідний');
//   } else {
//     console.log('Робочий день');
//   }
// }

// task7('Monday', false);
// task7('', true);
// task7('Saturday');
// task7('Friday');
// task7('Sunday');

// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік".

// function task8(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log('Високосний рік');
//   } else {
//     console.log('Звичайний рік');
//   }
// }

// task8(2024);
// task8(2025);
// task8(2027);
// task8(2028);

// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".

// function task11(isLoggedIn, hasAdminRights) {
//   if (!isLoggedIn) {
//     return 'Гість';
//   } else if (hasAdminRights) {
//     return 'Адмін-сторінка';
//   } else {
//     return 'Користувач';
//   }
// }

// console.log(task11(true));
// console.log(task11(false));
// console.log(task11(false, true));
// console.log(task11(true, false));

// ```
// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".
// ```;

// function task12(speed) {
//   if (speed > 100) {
//     return 'Небезпечно';
//   } else if (speed >= 60) {
//     return 'Увага';
//   } else {
//     return 'Безпечно';
//   }
// }

// console.log(task12(50));
// console.log(task12(60));
// console.log(task12(80));
// console.log(task12(100));
// console.log(task12(120));

// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".
// ```

// function task13(time, isWeekend) {
//   if (time < 12 && !isWeekend) {
//     return 'Ранок буднього дня';
//   } else if (time >= 12 && time < 18 && isWeekend) {
//     return 'День вихідного дня';
//   } else {
//     return 'Вечір';
//   }
// }

// console.log(task13(10, false));
// console.log(task13(14, true));
// console.log(task13(14, false));
// console.log(task13(19, true));
// console.log(task13(11, true));
// console.log(task13(12, true));
// console.log(task13(18, true));
// console.log(task13(18, false));

//===============================MODULE-2-2============================================

// 1. Напиши цикл, який виведе на консоль числа від 1 до 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 1. Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 1. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.
// let total = 0;

// for (let i = 1; i <= 100; i++) {
//   total += i;
// }

// console.log(total);

// 1. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10).

// function taskM22T1(value) {
//   let result = 0;

//   for (let i = 1; i <= 10; i++) {
//     result = i * value;
//     console.log(result);
//   }
// }

// taskM22T1(7);

// 1. Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал `!5 = 5 * 4 * 3 * 2 * 1`).

// function taskM22T2(value) {
//   let result = 1;
//   for (let i = 1; i <= value; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(taskM22T2(5));

// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"

// function taskM22T3(str) {
//   let result = '';
//   for (let i = 1; i < str.length; i += 2) {
//     result += str[i];
//   }
//   return result;
// }

// console.log(taskM22T3('Hello world'));

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому порядку.
// function taskM22T4(str) {
//   let reverseString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseString += str[i];
//   }
//   return reverseString;
// }

// console.log(taskM22T4('Hello World'));

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне пробіл.

// function taskM22T5(str) {
//   let shortString = '';
//   const spaceIndex = str.indexOf(' ');

//   if (spaceIndex !== -1) {
//     for (let i = 0; i <= spaceIndex - 1; i++) {
//       shortString += str[i];
//     }
//   } else {
//     return str;
//   }
//   return shortString;
// }

// console.log(taskM22T5('Hello world'));
// console.log(taskM22T5('stringWithoutSpaces'));
// console.log(taskM22T5('My function is completed'));

// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// function taskM22T6(str) {
//   let newString = '';

//   for (let i = 1; i < str.length; i += 2) {
//     newString += str[i];
//   }
//   return newString;
// }

// console.log(taskM22T6('JavaScript'));
// console.log(taskM22T6('Kherson'));

// 1. Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у верхньому регістрі

// function taskM22T7(str) {
//   let newString = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 != 0) {
//       newString += str[i].toUpperCase();
//     } else {
//       newString += str[i];
//     }
//   }
//   return newString;
// }

// console.log(taskM22T7('javascript'));

// 1. Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до рядочка str1 стільки разів скільки вказали у параметрі count.

// function getString(str1, str2, count) {
//   let newString = str1 + str2.repeat(count);
//   return newString;
// }

// console.log(getString('STR1', '=!!=', 5));

//===============================MODULE-3-1============================================

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
// function taskM31T1(array) {
//   for (let element of array) {
//     console.log(element);
//   }
// }

// taskM31T1(['arr1', 'arr2', 'arr3', 'arr4', 'arr5']);

// 1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.

// function taskM31T2(array) {
//   for (let element of array) {
//     if (array.indexOf(element) % 2 !== 0) {
//       console.log(element);
//     }
//   }
// }

// taskM31T2(['arr1', 'arr2', 'arr3', 'arr4', 'arr5']);

// 1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.

// function taskM31T3(array) {
//   for (let element of array) {
//     if (element % 2 === 0) {
//       console.log(element);
//     }
//   }
// }

// taskM31T3([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 1. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// function taskM31T4(numbers, max) {
//   for (const number of numbers) {
//     if (number > max) {
//       console.log(number);
//     }
//   }
// }

// taskM31T4([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// 1. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// function taskM31T5(numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(total);
// }

// taskM31T5([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.

// function taskM31T6(numbers, searchElem) {
//   let sumElems = 0;

//   for (const number of numbers) {
//     if (number === searchElem) {
//       sumElems += 1;
//     }
//   }
//   console.log(sumElems);
// }

// taskM31T6([1, 2, 3, 4, 6, 7, 8, 9, 1, 2, 3, 6, 7, 8, 9, 1, 2, 3, 6, 7, 8], 9);

// 1. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

// function taskM31T7(numbers) {
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > 0) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }

// console.log(taskM31T7([1, 2, -2, -3, 3, 4, -5, 5, 6, 7, 8, -8, 9, -9]));
// 1. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.

// function taskM31T8(array) {
//   const newArray = [];
//   for (const element of array) {
//     if (element.length <= 6) {
//       newArray.push(element.toLowerCase());
//     } else {
//       newArray.push(element.toUpperCase());
//     }
//   }
//   return newArray;
// }

// console.log(
//   taskM31T8(['ukraine', 'usa', 'favorite', 'ajax', 'congratulations']),
// );

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.

// function taskM31T9(arr) {
//   const newArray = [];
//   for (const element of arr) {
//     if (element % 2 != 0) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(taskM31T9([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.

// function taskM31T10(arr) {
//   const newArray = [];
//   for (const number of arr) {
//     newArray.push(number * arr.indexOf(number));
//   }
//   return newArray;
// }

// console.log(
//   taskM31T10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
// );

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.

// function taskM31T11(arr) {
//   const newArray = [];
//   for (const number of arr) {
//     if (number % 3 === 0) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }

// console.log(
//   taskM31T11([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
// );

// ## Середні задачі

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// function taskM31T12(arr1, arr2) {
//   const newArray = [];
//   for (const element of arr1) {
//     if (arr2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(
//   taskM31T12(
//     ['BMW', 'Mercedes-Benz', 'Audi', 'VW'],
//     ['Toyota', 'Mercedes-Benz', 'Tesla', 'Audi', 'Mitsubishi', 'VW'],
//   ),
// );

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function taskM31T13(arr1, arr2) {
//   const newArray = [];
//   for (const element of arr1) {
//     if (!arr2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(
//   taskM31T13(
//     ['BMW', 'Mercedes-Benz', 'Audi', 'VW'],
//     ['Toyota', 'Mercedes-Benz', 'Tesla', 'Audi', 'Mitsubishi', 'VW'],
//   ),
// );

// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// function taskM31T14(arr) {
//   let minValue = arr[0];
//   for (const number of arr) {
//     if (minValue > number) {
//       minValue = number;
//     }
//   }
//   return minValue;
// }

// console.log(taskM31T14([12, 15, 18, 21, 13, 8, 34, 6, 9, 11, 4, 20]));

// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.

// function taskM31T14(arr) {
//   let maxValue = arr[0];
//   for (const number of arr) {
//     if (maxValue < number) {
//       maxValue = number;
//     }
//   }
//   return maxValue;
// }

// console.log(
//   taskM31T14([12, 15, 18, 21, 13, 8, 34, 6, 9, 11, 4, 20, 99, 150, 23]),
// );

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.

function taskM31T15(arr) {
  let totalSum = 0;
  const newArray = [];

  for (const number of arr) {
    totalSum += number;
  }
}

const arrLength = arr.length;
const averageValue = totalSum / arrLength;

if (number > averageValue) {
  newArray.push(number);

  return newArray;
}

console.log(
  taskM31T15([12, 15, 18, 21, 13, 8, 34, 6, 9, 11, 4, 20, 99, 150, 23, 22]),
);

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.
// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний елемент та видалити його з масиву.
// 1. Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону але лише ті у яких не має цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.
