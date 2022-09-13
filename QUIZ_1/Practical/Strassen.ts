// This function that splits the matrix
function splitMatrix(Matrix:number[][], first:number, second:number):number[][] {{
    let length = Matrix.length
    let matrix:number[][] = [[]];
	// This for loop is responsible in slicing the matrix depending in their start and end
    for(let i = 0; i < length/2; i++) {
        matrix[i] = Matrix[first ? (length / 2) + i : i].slice(second ? length / 2 : 0, second ? length : length / 2 );
    }
    return matrix;
}}

// This function subtract 2 Matrixes
function subMatrix(A:number[][], B:number[][]) : number[][]{
    let tempMatrix: number[][] = [[]];
	// this is responsible in accessing the index of a multidimensional array and subtracting them
    for(let i = 0; i < A.length; i++) {
		// we just added this because we are encountering an error if we remove this code
        tempMatrix.push([]);
        for(let j = 0; j <A[i].length; j++) {
            tempMatrix[i][j] = (A[i][j] - B[i][j]);
        }
    }
	// we used pop because there is an error when we are doing the push
	tempMatrix.pop();

    return tempMatrix
}

// This function add 2 Matrixes
function addMatrix(A:number[][], B:number[][]) : number[][]{
    let tempMatrix: number[][] = [[]];
		// this is responsible in accessing the index of a multidimensional array and subtracting them
    for(let i = 0; i < A.length; i++) {
		// we just added this because we are encountering an error if we remove this code
        tempMatrix.push([]);
        for(let j = 0; j <A[i].length; j++) {
            tempMatrix[i][j] = (A[i][j] + B[i][j]);
        }
    }
	// we used pop because there is an error when we are doing the push
	tempMatrix.pop();

    return tempMatrix
}

function strassen2(A:number[][], B:number[][]):number[][] {
	// stores the length of the first Matrix
    let n = A.length
	// declare a multidimensional array
    let C:number[][] = [[]];

	// This will be responsble when the length of the matrix is 1 and can do the multiplication
    if(n === 1) {
        C[0][0] = A[0][0] * B[0][0];
    }
	// this will check if the length of the first Matrix is a power of 2 or log of 2
    else if(Math.log2(n) % 1 === 0) {
		
        let a = splitMatrix(A, 0, 0)
        let b = splitMatrix(A, 0, 1)
        let c = splitMatrix(A, 1, 0)
        let d = splitMatrix(A, 1, 1)

        let e = splitMatrix(B, 0, 0)
        let f = splitMatrix(B, 0, 1)
        let g = splitMatrix(B, 1, 0)
        let h = splitMatrix(B, 1, 1)
        
        let p1 = strassen2(addMatrix(a, d), addMatrix(e, h));
        let p2 = strassen2(d, subMatrix(g, e));
        let p3 = strassen2(addMatrix(a, b), h);
        let p4 = strassen2(subMatrix(b, d), addMatrix(g, h));
        let p5 = strassen2(a, subMatrix(f, h));
        let p6 = strassen2(addMatrix(c, d), e);
        let p7 = strassen2(subMatrix(a, c), addMatrix(e, f));

        let c11 = addMatrix(subMatrix(addMatrix(p1, p2), p3), p4);
        let c12 = addMatrix(p5, p3);
        let c21 = addMatrix(p6, p2);
        let c22 = subMatrix(subMatrix(addMatrix(p6, p1), p6), p7);

        C = c11;
        C = c12;
        C = c21;
        C = c22;
    }
    return C
}



let a = [
    [1, 2, 3, 1],
    [4, 5, 6, 1],
    [7, 8, 9, 1],
    [1, 1, 1, 1],
 ];

 let b = [
    [1, 2, 3, 1],
    [4, 5, 6, 1],
    [7, 8, 9, 1],
    [1, 1, 1, 1]
 ];

 //let temmp:number[] = a[0].slice(0,2);


 let x = (splitMatrix(b, 0, 0))
 let y = (splitMatrix(b, 0, 1))

//  console.log(temmp)
console.log(addMatrix(x,y))
console.log(subMatrix(x,y))

//console.log(strassen2(a, b))
 
 console.log(splitMatrix(a, 0, 0))
 console.log(splitMatrix(a, 0, 1))
 console.log(splitMatrix(a, 1, 0))
 console.log(splitMatrix(a, 1, 1))

//  console.log(a.length)
//  console.log(a[0].length)