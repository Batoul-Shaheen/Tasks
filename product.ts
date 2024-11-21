// Task 4
interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
    { name: 'ring', price: 60.0},
    { name: 'necklace', price: 100.0 },
    { name: 'ear ring', price: 25.0 },
];

console.log('Total Price:', calculateTotalPrice(products));


// Task 5
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log(isValidEmail('batool@gmail.com')); 
console.log(isValidEmail('invalid-email'));   
