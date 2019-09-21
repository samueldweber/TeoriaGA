module.exports = function(depth)
{
        var compressDict = {};
        var decompressArray = [];
       
        for (var i = 0; i < (1 << depth); i++)
        {
                var value = String.fromCharCode(i);
                compressDict[value] = i;
                decompressArray.push(value);
        }
       
        function copyCompressDict()
        {
                var dict = {};
                for (var key in compressDict) dict[key] = compressDict[key];
                return dict;
        }
       
        function copyDecompressArray()
        {
                var arr = [];
                for (var i = 0; i < decompressArray.length; i++)
                        arr.push(decompressArray[i]);
                return arr;
        }
       
        this.compress = function(str)
        {
                var dict = copyCompressDict();
                var nextDictValue = 1 << depth;
               
                var key = '';
                var output = [];
                for (var i = 0; i < str.length; i++)
                {
                        var currentChar = str[i];
                        if (dict[key + currentChar] !== undefined)
                        {
                                key += currentChar;
                        }
                        else
                        {
                                dict[key + currentChar] = nextDictValue;
                                output.push(dict[key]);
                                nextDictValue++;
                                key = currentChar;
                        }
                }
               
                output.push(dict[key]);
                return output;
        }
       
        this.decompress = function(compressed)
        {
                var dict = copyDecompressArray();
               
                var key = compressed[0];
                var output = dict[key];
                var w = output;
                var entry = '';
               
                for (var i = 1; i < compressed.length; i++)
                {
                        key = compressed[i];
                        if (key < dict.length)
                                entry = dict[key];
                        else
                                entry = w + w.charAt(0);
                       
                        output += entry;
                        dict.push(w + entry.charAt(0));
                        w = entry;
                }
               
                return output;
        }
}