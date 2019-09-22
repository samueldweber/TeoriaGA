const fs = require('fs');
const LZW = require('./lzw');
let HuffmanDecoding = require('./huff_decoder.js');
const lzw = new LZW(8);

var data = fs.readFileSync('./compressed_input.txt');

let lzw_decompressed = lzw.decompress(data)
fs.writeFile("./lzw_decompressed.txt", lzw_decompressed, (err) => {
    if (err) throw err;

    console.log("The Decompressed file was saved!");
}); 


var tree = fs.readFileSync('./huffman_tree.txt');

const huff_decoded = HuffmanDecoding(lzw_decompressed, tree)
fs.writeFile("./decompressed_input.txt", huff_decoded, (err) => {
    if (err) throw err;

    console.log("The Decompressed file was saved!");
}); 

