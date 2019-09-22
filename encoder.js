const fs = require('fs');
const LZW = require('./lzw');
let HuffmanEncoding = require('./huff.js');

let file = fs.readFileSync('./alice29.txt').toString();

const lzw = new LZW(8);
const huff = new HuffmanEncoding(file);

console.log("INITIAL FILE " + file);

fs.writeFile("./original_input.txt", file, (err) => {
    if (err) throw err;
    console.log("The INITIAL file was saved!");
}); 

huff.inspect_encoding();
let huff_encoded = huff.encoded_string;
fs.writeFile("./huff_encoded.txt", huff_encoded, (err) => {
    if (err) throw err;
    console.log("The huff_encoded file was saved!");
}); 

let lzw_compressed = lzw.compress(huff_encoded)
fs.writeFile("./compressed_input.txt", lzw_compressed, (err) => {
    if (err) throw err;
    console.log("The Compressed file was saved!");
}); 

module.exports = {file, lzw, huff, lzw_compressed}