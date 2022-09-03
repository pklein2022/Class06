function product(a) {
    let product1 = a[0][0] * a[0][1];
    let product2 = a[1][0] * a[1][1];
    let product3 = a[2][0] * a[2][1];
    return product1 + product2 + product3;

}
product([[1, 2], [1, 1], [2, 3]])