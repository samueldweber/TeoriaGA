const fs = require('fs');
const LZW = require('./lzw');
const HuffmanTree = require('./huffman-tree');
const lzw = new LZW(8);

var data = fs.readFileSync('./compressed_input.txt');

//LZW
let lzw_decompressed = lzw.decompress(data)
fs.writeFile("./lzw_decompressed.txt", lzw_decompressed, (err) => {
    if (err) throw err;

    console.log("The Decompressed file was saved!");
}); 
//HUFFMAN
let tree = fs.readFileSync('./generated_tree.txt').toString();
let huff = new HuffmanTree;
console.log(JSON.parse(tree))
let decoded = huff.decode(lzw_decompressed, JSON.parse(tree));
fs.writeFile("./decompressed_input.txt", decoded, (err) => {
  if (err) throw err;
  console.log("The Compressed file was saved!");
}); 


