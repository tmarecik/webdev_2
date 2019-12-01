let numberArray = [1,2,3];
let tekstArray = ['tak', 'nie'];
let  booleanArray = [true, false, true, false];

console.log(numberArray[1]);
console.log(tekstArray[0]);
console.log(booleanArray);

numberArray[0] = 4;
console.log(numberArray[0]);

booleanArray.push(false);    /*push dodanie elementu do tablicy*/
console.log(booleanArray);

console.log(tekstArray.includes('nie'));     /*sprawdza czy element jest zawarty w tablicy*/
console.log(booleanArray.length);   /*nie jest to funkcja tylko wartość tablicy*/