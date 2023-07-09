// Define an array of objects with prices
const items = [
    { name: 'item1', price: 10.50 },
    { name: 'item2', price: 20.75 },
    { name: 'item3', price: 15.25 },
    { name: 'item4', price: 8.50 },
    { name: 'item5', price: 12.00 }
  ];
  
  // Calculate the total price
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);
  
  // Output the total price
  console.log(`The total price is: ${totalPrice}`);