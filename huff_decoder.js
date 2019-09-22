function HuffmanDecoding(encoded, treeDecoder) {
       const tree = JSON.parse(treeDecoder.toString())
       console.log(tree)
        var rev_enc = {};
        for (var ch in  tree)
          rev_enc[tree[ch]] = ch;

        var decoded = "";
        var pos = 0;
        while (pos < encoded.length) {
          var key = ""
          while (!(key in rev_enc)) {
            key += encoded[pos];
            pos++;
          }
          decoded += rev_enc[key];
          console.log(decoded)
        }
        return decoded;
      }


  module.exports = HuffmanDecoding
  