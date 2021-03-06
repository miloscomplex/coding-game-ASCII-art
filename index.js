/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 // readline() is equivalent to print()

const L = parseInt(readline());
// width of letter
const H = parseInt(readline());
// height of letter
const T = readline().toUpperCase();
// line of text
let strRow = ''

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'
let str = ''

for (let i = 0; i < H; i++) {
    const ROW = readline();
    let j = 0

    while (j < T.length ) {
        if (ROW) {
            let start = L * alpha.indexOf(T[j])
            let end = L
            strRow += ROW.substr(start, end)
            if (j === T.length - 1) {
                console.log(strRow)
                strRow = ''
            }
        }
        j++
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// console.log(textArray.join(''));
