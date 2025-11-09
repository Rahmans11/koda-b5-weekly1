let decimalNumber = 12.34567// decimalNumber digunakan untuk menampung input
let fixedDecimal = decimalNumber.toFixed(2);// parameter yg ada pada method toFixed() sebagai format
console.log(fixedDecimal); // variabel fixedDecimal digunakan untuk menampung output
// method toFixed yg digunakan pada variabel yg memiliki value number decimal,
// berguna untuk memformatkan berapa banyak angka (yg ada pada setelah ".") yg diinginkan 
// secara spesifik, pada contoh ini kita menginginkan format number decimal yg memiliki 
// 2 angka saja yg berada di setelah "." dengan cara memberikan angka 2 
// pada parameter method toFixed
console.log(`
    =======================
    `);

let num = 123// num digunakan untuk menampung input
let stringForm = num.toString();
if(typeof stringForm === "string"){
    console.log(`${stringForm} ini sudah diubah menjadi string`);
}else{
    console.log(`${stringForm} ini belum menjadi string`);}
    // stringForm digunakan untuk menampung output
// method toString yg digunakan untuk mengubah suatu tipe data pada sebuah variabel menjadi 
// bentuk / tipe data String
console.log(`
    =======================
    `);

let decimalNum = 12.34567// decimalNum digunakan untuk menampung input
let precisionDecimal = decimalNum.toPrecision(5);// parameter yg ada pada method toPrecision() sebagai format
console.log(precisionDecimal); // variabel precisionDecimal digunakan untuk menampung output
// method toPrecision yg digunakan pada variabel yg memiliki value number decimal, berguna untuk
// memformatkan berapa banyak total digit angka secara keseluruhan pada variabel tersebut, 
// mau itu digit angka yg ada pada sebelum "." maupun setelahnya, pada contoh ini kita menginginkan 
// format number decimal yg memiliki jumlah digit angkanya sebanyak 5 buah dengan cara memberikan 
// angka 5 pada parameter method toPrecision
console.log(`
    =======================
    `);

let stringVar = "Budiono"// stringVar digunakan untuk menampung input
let stringArray = stringVar.split('');
if(Array.isArray(stringArray)){
    console.log(`${stringArray} ini sudah diubah menjadi Array`);
}else{
    console.log(`${stringArray} ini belum menjadi Array`);}
    // stringArray digunakan untuk menampung output
// method split digunakan untuk mengubah tipe data string pada sebuah variabel menjadi array,
// method ini memecah value yg bertipe data string dan memasukan setiap karakter pada value tersebut
// kedalam index array secara satu persatu
console.log(`
    =======================
    `);

let arrayForm = ["S","i","r","e","g","a","r"]// arrayForm digunakan untuk menampung input
let stringFromArray = arrayForm.join('');
if(typeof stringFromArray === "string"){
    console.log(`${stringFromArray} ini sudah diubah menjadi string`);
}else{
    console.log(`${stringFromArray} ini belum menjadi string`);}
    // stringFromArray digunakan untuk menampung output
// method join yg digunakan pada contoh ini berfungsi untuk mengubah tipe data array pada 
// variabel arrayForm menjadi string, method ini menggabungkan semua elemen array yg ditampung 
// pada variabel tersebut menjadi satu value yg value tersebut bertipe data string