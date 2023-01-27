const sentence = "Saya sangat senang mengerjakan soal algoritma"

function longest(sentence) {
    let sentenceArr = sentence.match(/\w+/ig)
    let sentenceLongest = '' 
    let sentenceLongestText = '' 

    for (i=0; i<sentenceArr.length; i++) {
        if (sentenceLongest <= sentenceArr[i].length) {
            sentenceLongest = sentenceArr[i].length
            sentenceLongestText = sentenceArr[i]
        }
    }

    return sentenceLongestText+': '+sentenceLongest
}

longest(sentence)

console.log(longest(sentence))