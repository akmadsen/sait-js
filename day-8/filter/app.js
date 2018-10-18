// Sample Code 
const users = [{
        username: 'ryan10',
        active: true
    },
    {
        username: 'morgan',
        active: false
    }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

// Exercise Code
// Create an array of groceries
const groceries = [{
        name: 'bananas',
        aisle: 'produce',
        price: 2
    },
    {
        name: 'flour',
        aisle: 'baking',
        price: 5
    },
    {
        name: 'avocados',
        aisle: 'produce',
        price: 4
    },
    {
        name: 'lettuce',
        aisle: 'produce',
        price: 5
    },
    {
        name: 'olive oil',
        aisle: 'baking',
        price: 10
    },
    {
        name: 'shampoo',
        aisle: 'beauty',
        price: 12
    }
];

const produceLessThan5 = groceries.filter(grocery => (grocery.aisle === 'produce') && (grocery.price < 5));  // your code here
// Output the produce
console.log(produceLessThan5);