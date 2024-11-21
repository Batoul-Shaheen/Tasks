# how the TypeScript code works & how to run it

**Task 4: Calculate Total Price**

**interface Product:** Defines the structure for a Product object, with two properties:

**name (a string)**: Represents the name of the product.

**price (a number):** Represents the product’s price.

**Function: calculateTotalPrice:**

- Accepts an array of Product objects.
- Uses the reduce method to sum up the price of all products in the array.
- Returns the total price as a number.


**Task 5: Validate Email Address**

**Function: isValidEmail:**

- Accepts a string (email) and checks if it matches the email format using a regular expression (emailRegex).
- Returns true if the email is valid, otherwise false.

## How to Run 
1. Install TypeScript

   `
   npm install -g typescript
`

2. Compile TypeScript to JavaScript

   `
   tsc product.ts
`
This will generate a file named product.js in the same directory.

3. Run the Compiled JavaScript

   `
     node product.js
`
