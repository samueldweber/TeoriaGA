const fs = require('fs');
const LZW = require('./lzw');
const HuffmanTree = require('./huffman-tree');
const lzw = new LZW(8);

let file = fs.readFileSync('./alice29.txt').toString();
fs.writeFile("./original_input.txt", file, (err) => {
    if (err) throw err;
    console.log("The INITIAL file was saved!");
}); 
//HUFFMAN
let huff = new HuffmanTree(file);
let tree = huff.toString()
fs.writeFile("./generated_tree.txt", tree, (err) => {
  if (err) throw err;
  console.log("The generated_tree file was saved!");
}); 
let huff_encoded = huff.encode(file);
fs.writeFile("./huff_encoded.txt", huff_encoded, (err) => {
    if (err) throw err;
    console.log("The huff_encoded file was saved!");
}); 
//LZW

let lzw_compressed = lzw.compress(huff_encoded)
fs.writeFile("./compressed_input.txt", lzw_compressed, (err) => {
    if (err) throw err;
    console.log("The Compressed file was saved!");
}); 
