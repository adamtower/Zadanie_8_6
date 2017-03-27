function getTriangleArea(a, h) {
    if (a <= 0) {
       console.log('Nieprawidłowe dane');
    } else if (h <= 0) {
       console.log('Nieprawidłowe dane');
    } else {
       console.log('Pole trójkąta to: ' + (a * h) / 2 );
    }
}

var triangle1Area = getTriangleArea(9, 16);
var triangle2Area = getTriangleArea(1, 2);
var triangle3Area = getTriangleArea(0, 6);
//getTriangleArea(1, 6);