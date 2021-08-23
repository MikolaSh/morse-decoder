const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    var outputl;
    expr = expr.match(/.{1,10}/g);
    for(var i=0;i<expr.length;i++){
        if(expr[i]==="**********"){expr[i]="  "}
        var word = expr[i];
        word = word.match(/.{1,2}/g);
        for(var j=0;j<word.length;j++){
            switch(word[j]){
                case "00":
                    word[j]="";
                    break;
                case "10":
                    word[j]=".";
                    break;
                case "11":
                    word[j]="-";
                    break;
                case "  ":
                    word[j]=" " 
            }

        }
        word = word.join("");
        expr[i] = word;
        expr[i]=MORSE_TABLE[expr[i]];
    }
    return expr.join("");
}

module.exports = {
    decode
}