console.log('start');

let x = 2;
let y = 8;
let z = x + y
console.log(z);

console.log(typeof z);
console.log(z++);
console.log(x++);
console.log(x);
console.log(x);
console.log(z)
console.log(z++)
console.log(z)




let pH = 3;

if (pH > 7) {
    console.log('alkali');
}
else if (pH = 7) {
    console.log('neutral');
}
else if (pH < 7) {
    console.log('acid'); 
}




for (let i = 1; i <=12; i++) {
    if (i % 2 === 0) {continue};
    if (i % 10 === 0) {break}; 
    let answer = i ** 2
    console.log(i);
    console.log(answer)
}



let length = 2;
let width = 2;
let height = 3;
let baseArea = length * width;
let pyramidVolume = 1/3 * baseArea * height
console.log(pyramidVolume)


function getPyramidArea() {
    let length = 1;
    let width = 100;
    let height = 3;
    let baseArea = length * width;
    let pyramidVolume = 1/3 * baseArea * height
    return pyramidVolume
}
getPyramidArea()

function getPyramidVolume(length, width, height) {
    let pyramidVolume = 1/3 * length * width * height
    console.log(pyramidVolume)
}
getPyramidVolume(2, 2, 3)