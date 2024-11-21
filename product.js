function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: 'ring', price: 60.0 },
    { name: 'necklace', price: 100.0 },
    { name: 'ear ring', price: 25.0 },
];
console.log('Total Price:', calculateTotalPrice(products));
// Task 5
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(isValidEmail('batool@gmail.com'));
console.log(isValidEmail('invalid-email'));
