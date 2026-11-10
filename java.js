// 1
// let students = ["Ali", "Vali", "Hasan", "Husan"];
// console.log(students);
// let savol = confirm("Yangi o`quvchini qoshishni hohlaysizmi?")
// if (savol === true) {
//     let oxiriga = prompt("Yangi o`quvchini qoshing(oxiriga)")
//     students.push(oxiriga)
// }

// let savol2 = confirm("Ikkinchi o`quvchini qoshishni hohlaysizmi?")
// if (savol2 === true) {
//     let boshiga = prompt("Yangi o`quvchini qoshing(boshiga)")
//     students.unshift(boshiga)
// }

// let savol3 = confirm("Birinchi o`quvchini ochirmohchimisiz?")
// if (savol3 === true) {
//     students.shift()
// }

// let savol4 = confirm("Ohirgi o`quvchini ochirmohchimisiz?")
// if (savol4 === true) {
//     students.pop()
// }
// console.log(students)

// let son1 = Math.floor(Math.random() * 100)
// let son2 = Math.floor(Math.random() * 100)
// let son3 = Math.floor(Math.random() * 100)
// let son4 = Math.floor(Math.random() * 100)
// let son5 = Math.floor(Math.random() * 100)
// let son6 = Math.floor(Math.random() * 100)

// if (students[0] === undefined) {
//     students[0] = "O`quvchi yoq"
// }
// if (students[1] === undefined) {
//     students[1] = "O`quvchi yoq"
// }
// if (students[2] === undefined) {
//     students[2] = "O`quvchi yoq"
// }
// if (students[3] === undefined) {
//     students[3] = "O`quvchi yoq"
// }
// if (students[4] === undefined) {
//     students[4] = "O`quvchi yoq"
// }
// if (students[5] === undefined) {
//     students[5] = "O`quvchi yoq"
// }

// let title1 = document.getElementById("li1");
// let title2 = document.getElementById("li2");
// let title3 = document.getElementById("li3");
// let title4 = document.getElementById("li4");
// let title5 = document.getElementById("li5");
// let title6 = document.getElementById("li6");

// title1.textContent = "O`quvchi: " + students[0] + " ID: " + son1;
// title2.textContent = "O`quvchi: " + students[1] + " ID: " + son2;
// title3.textContent = "O`quvchi: " + students[2] + " ID: " + son3;
// title4.textContent = "O`quvchi: " + students[3] + " ID: " + son4;
// title5.textContent = "O`quvchi: " + students[4] + " ID: " + son5;
// title6.textContent = "O`quvchi: " + students[5] + " ID: " + son6;

//2
// let transactions = [];
// let balance = 1000000;

// let oxirgiSumma = 0;
// let oxirgiAmal = "";

// const transactionSum = function (summa) {
//     if (summa <= 0 || isNaN(summa)) {
//         alert("Noto'g'ri summa kiritildi!");
//     } else {
//         balance += summa;
//         transactions.push(`Kiritildi: +${summa}`);

//         oxirgiSumma = summa;
//         oxirgiAmal = "transactionSum";
//     }
// };

// const transactionMinus = (summa) => {
//     if (summa <= 0 || isNaN(summa)) {
//         alert("Noto'g'ri summa kiritildi!");
//     } else if (summa > balance) {
//         alert("Balansda yetarli mablag' yo'q!");
//     } else {
//         balance -= summa;
//         transactions.push(`Yechildi: -${summa}`);

//         oxirgiSumma = summa;
//         oxirgiAmal = "transactionMinus";
//     }
// };


// let savol = confirm("Pul yechmoqchimisiz/solmoqchimisiz?")

// if (savol === true) {
//     let savol2 = confirm("Siz pul yechmoqchimisiz?");

//     if (savol2 === true) {
//         let savol3 = +prompt("Nechpul yechmoqchisiz?");
//         transactionMinus(savol3);

//     } else {
//         let savol4 = confirm("Siz pul solmoqchimisiz?");
//         if (savol4 === true) {
//             let savol5 = +prompt("Nechpul solmoqchisiz?");
//             transactionSum(savol5);
//         }
//     }
// }

// if (transactions.length > 0) {
//     let transactionsSavol = confirm("Siz oxirgi tranzaksiyani bekor qilmoqchimisiz?");

//     if (transactionsSavol === true) {
//         let tastiq = confirm("Tranzaksiyani bekor qilishni tasdiqlaysizmi?");

//         if (tastiq === true) {
//             transactions.pop();

//             if (oxirgiAmal === "transactionMinus") {
//                 balance += oxirgiSumma;
//             } else if (oxirgiAmal === "transactionSum") {
//                 balance -= oxirgiSumma;
//             }

//             alert("Tranzaksiya muvaffaqiyatli bekor qilindi!");
//         }
//     }
// }


// let title7 = document.getElementById("li7");
// title7.textContent = "Balansingiz: " + balance + " Trenzacsiyalar: " + transactions

// console.log("Yakuniy balans:", balance);
// console.log("Tranzaksiyalar tarixi:", transactions);

// 3
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// let savol = +prompt("Qaysi harakat qilmoqchisiz: 1.Yangi mahsulot qo'shish.2.Oxirgi mahsulotni o'chirish.3.Birinchi mahsulotni sotuvdan chiqarish.4.Yangi mahsulotni birinchi o'ringa joylashtirish.5.Mahsulotlarni qidirish.")

// const productSumEnd = function (product) {
//     if (product === " " || product === " " || product === null) {
//         alert("Noto'g'ri product kiritildi!");
//     } else {
//         products.push(javob1)
//     }
// };

// const productSumStart = (product) => {
//     if (product === " " || product === " " || product === null) {
//         alert("Noto'g'ri product kiritildi!");
//     } else {
//         products.unshift(javob3)
//     }
// };

// if (savol == "1") {
//     var javob1 = prompt("Qaysi produkt qoshmiqchisiz(oxiriga):")
//     productSumEnd()
// } else if (savol == "2") {
//     var javob2 = confirm("Oxirgi produktni ochirmoqchimisiz?")
//     if (javob2 === true) {
//         products.pop();
//     }
// } else if (savol == "3") {
//     var javob3 = prompt("Qaysi produkt qoshmiqchisiz(boshiga):")
//     productSumStart()
// } else if (savol == "4") {
//     var javob4 = confirm("Birinchi produktni ochirmoqchimisiz?")
//     if (javob4 === true) {
//         products.shift();
//     }
// } else if (savol == "5") {
//     var javob5 = prompt("Qaysi product topmiqchisiz")
//     let topildi = products.includes(javob5)
//     if (topildi === true) {
//         confirm("Product topildi")
//     } else {
//         confirm("Produckt topilmadi")
//     }
// }

// let title7 = document.getElementById("li7");
// title7.textContent = products

// console.log(products);
// includes

// 4
// let tasks = ["JavaScript o'rganish", "Kitob o'qish", "Sport bilan shug'ullanish"];

// let savol = +prompt(
//     "Qaysi harakat qilmoqchisiz:\n" +
//     "1. Yangi vazifa qo'shish (oxiriga)\n" +
//     "2. Oxirgi vazifani o'chirish\n" +
//     "3. Birinchi vazifani o'chirish\n" +
//     "4. Muhim vazifani birinchi o'ringa chiqarish"
// );

// const tasksSumEnd = function (task) {
//     if (!task || task.trim() === "") {
//         alert("Noto'g'ri vazifa kiritildi!");
//     } else {
//         tasks.push(task);
//     }
// };

// const tasksSumStart = (task) => {
//     if (!task || task.trim() === "") {
//         alert("Noto'g'ri vazifa kiritildi!");
//     } else {
//         tasks.unshift(task);
//     }
// };

// if (savol === 1) {
//     let javob1 = prompt("Qaysi vazifani qo'shmoqchisiz (oxiriga):");
//     tasksSumEnd(javob1);
// } else if (savol === 2) {
//     let javob2 = confirm("Oxirgi vazifani o'chirmoqchimisiz?");
//     if (javob2) {
//         let javob6 = confirm("Siz tochno oxirgi vazifani o'chirmoqchimisiz?");
//         if (javob6) {
//             tasks.pop();
//         }
//     }
// } else if (savol === 3) {
//     let javob3 = confirm("Birinchi vazifani o'chirmoqchimisiz?");
//     if (javob3) {
//         let javob7 = confirm("Siz tochno birinchi vazifani o'chirmoqchimisiz?");
//         if (javob7) {
//             tasks.shift();
//         }
//     }
// } else if (savol === 4) {
//     let javob4 = prompt("Qaysi muhim vazifani birinchi o'ringa chiqarmoqchisiz (boshiga):");
//     tasksSumStart(javob4);
// }

// let title7 = document.getElementById("li7");
// title7.textContent = tasks.join(", ");

// let podchot = tasks.length;
// let title8 = document.getElementById("li8");
// title8.textContent = podchot;


// console.log(tasks);

//5
let students = [
    { name: "Anvar", score: 85 },
    { name: "Dilnoza", score: 65 },
    { name: "Jasur", score: 92 }
];

let savol = +prompt(
    "Qaysi harakatni tanlaysiz:\n" +
    "1. Yangi o'quvchini oxiriga qo'shish (push)\n" +
    "2. Oxirgi o'quvchini o'chirish (pop)\n" +
    "3. Birinchi o'quvchini o'chirish (shift)\n" +
    "4. Yangi o'quvchini boshiga qo'shish (unshift)\n" +
    "5. 70 dan yuqori ball olganlarni chiqarish\n" +
    "6. Eng yuqori ballni topish\n" +
    "7. O'rtacha ballni hisoblash"
);

function addStudentEnd(name, score) {
    if (!name || name.trim() === "" || isNaN(score) || score < 0) {
        alert("Noto'g'ri ma'lumot kiritildi!");
    } else {
        students.push({ name: name, score: score });
    }
}

function addStudentStart(name, score) {
    if (!name || name.trim() === "" || isNaN(score) || score < 0) {
        alert("Noto'g'ri ma'lumot kiritildi!");
    } else {
        students.unshift({ name: name, score: score });
    }
}

function updateDOM() {
    let listElement = document.getElementById("li7");
    if (listElement) {
        listElement.textContent = students.map(s => `${s.name} (${s.score} ball)`).join(", ");
    }
    
    let countElement = document.getElementById("li8");
    if (countElement) {
        countElement.textContent = students.length;
    }
}

const removeStudentEnd = function() {
    let confirmDelete = confirm("Oxirgi o'quvchini o'chirmoqchimisiz?");
    if (confirmDelete) {
        students.pop();
    }
};

const removeStudentStart = function() {
    let confirmDelete = confirm("Birinchi o'quvchini o'chirmoqchimisiz?");
    if (confirmDelete) {
        students.shift();
    }
};

const showHighAchievers = () => {
    let highAchievers = students.filter(s => s.score >= 70);
    let names = highAchievers.map(s => s.name).join(", ");
    alert(`70 va undan yuqori ball olgan o'quvchilar: ${names || "yo'q"}`);
};

const findMaxScore = () => {
    if (students.length === 0) return alert("Ro'yxat bo'sh!");
    let max = Math.max(...students.map(s => s.score));
    alert(`Eng yuqori ball: ${max}`);
};

const calculateAverage = () => {
    if (students.length === 0) return alert("O'rtacha ball: 0");
    let sum = students.reduce((total, s) => total + s.score, 0);
    let avg = (sum / students.length).toFixed(1);
    alert(`O'quvchilarning o'rtacha balli: ${avg}`);
};

if (savol === 1) {
    let name = prompt("O'quvchi ismini kiriting:");
    let score = +prompt("O'quvchi ballini kiriting:");
    addStudentEnd(name, score);
} else if (savol === 2) {
    removeStudentEnd();
} else if (savol === 3) {
    removeStudentStart();
} else if (savol === 4) {
    let name = prompt("O'quvchi ismini kiriting:");
    let score = +prompt("O'quvchi ballini kiriting:");
    addStudentStart(name, score);
} else if (savol === 5) {
    showHighAchievers();
} else if (savol === 6) {
    findMaxScore();
} else if (savol === 7) {
    calculateAverage();
}

updateDOM();
console.log(students);
