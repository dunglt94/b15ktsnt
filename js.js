let number = +prompt('Nhập số cần kiểm tra:');
function isPrime(number) {
    let count = 0;
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
if (isPrime(number)) {
    alert(`${number} là số nguyên tố.`);
} else {
    alert(`${number} không phải số nguyên tố.`);
}
// isPrime(number);
// function isPrime(number) {
//     isPrime = false;
//     let count = 0;
//     if (number < 2) {
//         alert(`${number} không phải số nguyên tố.`);
//     } else {
//         for (let i = 1; i <= number; i++) {
//             if (number % i == 0) {
//                 count++;
//             }
//         }
//         if (count == 2) {
//             isPrime = true;
//         }
//
//         if (isPrime) {
//             alert(`${number} là số nguyên tố.`);
//         } else {
//             alert(`${number} không phải số nguyên tố.`);
//         }
//     }
// }
