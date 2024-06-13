
// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. 
// В іншому випадку функція повинна повернути булеве значення false.
// ```

function task1(str1, str2) {
    const firstLetter = str1[0];
    const lastLetter = str2[str2.length - 1];

    return firstLetter === lastLetter;
}

const result = task1("Ukraine", "DeutchlandU")
console.log(result);
document.body.innerHTML = result;



// ```
// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.
// ```
function task2(str1, str2) {
    const firstLetter1 = str1[0];
    const firstLetter2 = str2[0];

    return firstLetter1 === firstLetter2;
}

console.log(task2("Mango", "Monster"))

// ```
// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false.
// ```

function task3(str1, str2) {
    const lengthString1 = str1.length;
    const lengthString2 = str2.length;

    return lengthString1 === lengthString2;
}

console.log(task3("Mango", "Monster"))



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

function task5(amount, price) {
    const totalPrice = amount * price;

    if (totalPrice <= 1000) {
        return "Ми це купуємо";
    } return "Це занадто дорого";
}

console.log(task5(5, 40))
console.log(task5(100, 200))




// ```
// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. 
// Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".
// ```

function task6(temp) {
    if (temp < 0) {
        return "Замерзає";
    } else if(temp >0 && temp < 25){
        return "Нормальна температура";
    } else {
        return "Спекотно";
    }
}

document.body.innerHTML += task6(10);

1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.
1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.