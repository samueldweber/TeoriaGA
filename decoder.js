const fs = require('fs');
let encoder = require('./encoder')
 
//TODO: DEVERIA UTILIZAR O ARQUIVO OS INVES DE encoder.lzw_compressed DO ENCODER

var file = fs.readFileSync('./compressed_input.txt').toString();
  let lzw_decompressed = encoder.lzw.decompress(file)
  fs.writeFile("./lzw_decompressed.txt", lzw_decompressed, (err) => {
    if (err) throw err;

    console.log("The Decompressed file was saved!");
}); 
  let huff_decoded = encoder.huff.decode(lzw_decompressed);
  fs.writeFile("./decompressed_input.txt", huff_decoded, (err) => {
    if (err) throw err;

      console.log("The Decompressed file was saved!");
  }); 

  console.log("is decoded string same as original? " + (encoder.file == huff_decoded));
