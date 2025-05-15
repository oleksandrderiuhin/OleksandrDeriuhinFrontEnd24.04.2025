// function removeElement(array, item) {
//     let writeIndex = 0;
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== item) {
//             array[writeIndex] = array[i];
//             writeIndex++;
//         }
//     }
//
//     array.length = writeIndex;
// }
//
// const array = [1, "text", { key: "value" }, true, "text", null, 42];
// removeElement(array, array[3]);
// removeElement(array, true);
// removeElement(array, 42);
//
// console.log(array);

/////////////////////////////////////////////////////////////////////////////

function removeElement(array, item) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
    return array;
}


const array = [1, 2, 3, 2, 4, 2, 5];
console.log(removeElement(array, 1));