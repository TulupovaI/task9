//№1 Створити масив, довжину та елементи якого задає користувач.  

let el = prompt('Введіть елементи масиву через кому', '1, 3, 7, 2, 8, 4, 12, 5');
let myArr = el.split(', ');
console.log(myArr);

//Потім відсортувати масив за зростанням.
let myArr1 = myArr.sort((a, b) => a - b);
console.log(myArr1);

//Потім видалити елементи з масиву з 2 по 4 (включно)

let myArr2 = myArr1.slice(1, 4);
console.log(myArr2);



//№2 Знайти суму та кількість позитивних елементів.
let myArr3 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sum = 0;
for(i = 0; i < myArr3.length; i++){
    if(myArr3[i] > 0){
      sum += myArr3[i];
    }
} 
console.log(sum);

let count = 0;
for(i = 0; i < myArr3.length; i++){
   if( myArr3[i] > 0){
    count = count + 1;
   }
  }
console.log(count);  

//№3 Знайти мінімальний елемент масиву та його порядковий номер
console.log("Min:", Math.min(...myArr3));
console.log(myArr3.indexOf(-63))


//№4 Знайти максимальний елемент масиву та його порядковий номер.

console.log("Max:", Math.max(...myArr3));
console.log(myArr3.indexOf(76));

//№5  Визначити кількість негативних елементів.

let count2 = 0;
for(j = 0; j < myArr3.length; j++){
   if(myArr3[j] < 0){
    count2 = count2 + 1;
   }
  }
console.log(count2); 

//№6 Знайти кількість непарних позитивних елементів.

let count3 = 0;
for(i = 0; i < myArr3.length; i++){
   if(myArr3[i] > 0 && myArr3[i] % 2 !== 0 ){
    count3 = count3 + 1;
   }
};
console.log(count3);

//№7 Визначити кількість парних позитивних елементів.

let count4 = 0;
for(i = 0; i < myArr3.length; i++){
   if(myArr3[i] > 0 && myArr3[i] % 2 == 0 ){
    count4 = count4 + 1;
   }
};
console.log(count4);

//№8 Знайти суму парних позитивних елементів.

let sum2 = 0;
for(i = 0; i < myArr3.length; i++){
    if(myArr3[i] > 0 && myArr[i] % 2 == 0){
      sum2 += myArr3[i];
    }
} 
console.log(sum2);

//№9 Знайти суму непарних позитивних елементів. &&&&&

let sum3 = 0;
for(i = 0; i < myArr3.length; i++){
    if(myArr3[i] % 2 != 0 && myArr3[i] > 0){
      sum3 += myArr3[i];
    }
} 
console.log(sum3);

//№10 Знайти добуток позитивних елементів.
let mult = 1;
for(i = 0; i < myArr3.length; i++){
    if(myArr3[i] > 0){
      mult *= myArr3[i];
    }
} 
console.log(mult);

//№11 Знайти найбільший серед елементів масиву, решту занулити.
console.log("Max:", Math.max(...myArr3));
console.log(myArr3.indexOf(76));


let maxValue = Math.max(...myArr3);

for(i = 0; i < myArr3.length; i++){
  if (myArr3[i]!= maxValue){
    myArr3[i] = Math.abs(myArr3[i]) * 0;       
  }
  
}
console.log(myArr3);






