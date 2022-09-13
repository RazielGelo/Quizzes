// This function gets the 2 x 2
function splitMatrix(Matrix:number[][], first:number, second:number):number[][] {{
    let length = Matrix.length
    let matrix:number[][] = [[]];
    for(let i = 0; i < length/2; i++) {
        matrix[i] = Matrix[first ? (length / 2) + i : i].slice(second ? length / 2 : 0, second ? length : length / 2 );
    }
    return matrix;
}}

// This function subtract 2 Matrixes
function subMatrix(A:number[][], B:number[][]) : number[][]{
    let tempMatrix: number[][] = [[]];
    for(let i = 0; i < A.length; i++) {
        tempMatrix.push([]);
        for(let j = 0; j <A[i].length; j++) {
            tempMatrix[i][j] = (A[i][j] - B[i][j]);
        }
    }
    return tempMatrix
}

// This function add 2 Matrixes
function addMatrix(A:number[][], B:number[][]) : number[][]{
    let tempMatrix: number[][] = [[]];
    for(let i = 0; i < A.length; i++) {
        tempMatrix.push([]);
        for(let j = 0; j <A[i].length; j++) {
            tempMatrix[i][j] = (A[i][j] + B[i][j]);
        }
    }
    return tempMatrix
}