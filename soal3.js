const input = ['xc', 'dz', 'bbb', 'dz']
const query = ['bbb', 'ac', 'dz']

function findMatch(input, query) {
    let output = []

    for (i=0; i<query.length; i++) {
        let matchTotal = 0
        for (j=0; j<input.length; j++) {
            if (input[j] == query[i]) {
                matchTotal += 1
            }
        }
        output.push(matchTotal)
    }
    
    return output
}

findMatch(input,query)

console.log(findMatch(input,query))