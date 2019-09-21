const fs = require('fs');
const LZW = require('./lzw');
const huffman = require('./huffman');

var lzw = new LZW(8);
var huff = new huffman();
var input = "TOBEORNOTTOBEORTOBEORNOT#";
var compressed = lzw.compress(input);
console.log(input);
console.log(compressed);
console.log(lzw.decompress(compressed));

var file = fs.readFileSync('./alice29.txt').toString();

var compfile = lzw.compress(file);
var compstr = compfile.join(',');

fs.writeFile("./outputalice.txt", compstr, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

//var tocode = 'abracadabra';

//var cipher = huff.getCodesFromText(tocode);
//var encodedarr = huff.encode(tocode, cipher);

//var codedtext = encodedarr.join(',');

//var doubled = lzw.compress(codedtext);

//var decoded = huff.decode(encodedarr, cipher);

//console.warn(codedtext);
//console.warn(doubled);