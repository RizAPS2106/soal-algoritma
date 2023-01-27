const matrix = [[1, 2, 0], 
                [4, 5, 6],
                [7, 8, 9,]] 

function matrixNXN(matrix) {
    let diagonal1 = 0
    let diagonal2 = 0
    
    for (i=0; i<matrix.length; i++) { 
        if (matrix.length != matrix[i].length || (i > 0 && matrix[i].length != matrix[i-1].length)) {
            return 'array not compatible'
        }

        let j = matrix.length-1-i
        diagonal1 += matrix[i][i]
        diagonal2 += matrix[i][j]
    }

    return diagonal1 - diagonal2
}

matrixNXN(matrix)

console.log(matrixNXN(matrix))