const word = "NEGIE1"

function reverseWord (word) {
    let wordArr = word.match(/[a-z]/ig)
    let wordRegex = ''
    let wordReverseOrder = ''

    for (i=wordArr.length; i>=1; i--) {
        wordRegex += '([a-z])'
        wordReverseOrder += '$'+i
    }
    
    let regex = new RegExp(wordRegex, 'i') 

    return word.replace(regex, wordReverseOrder)
}

reverseWord(word)

console.log(reverseWord(word))