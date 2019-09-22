const fs = require('fs');
let encoder = require('./encoder')
 
//TODO: DEVERIA UTILIZAR O ARQUIVO OS INVES DE encoder.lzw_compressed DO ENCODER
  let lzw_decompressed = encoder.lzw.decompress(encoder.lzw_compressed)
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
