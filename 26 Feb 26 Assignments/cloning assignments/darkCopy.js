// Hands-On 2: Deep Copy (Isolation & Safety Use Case)

const order = {
    orderId: "ORD1001",
    customer: {
         name: "Anita",
         address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [{ product: "Laptop", price: 70000 }]
};

// 1. Create a deep copy of order
let orderCopy=structuredClone(order);


// 2. Modify in copied object:
//    i. customer.address.city
//    ii. items[0].price
//    iii. Verify original object remains unchanged

orderCopy.customer.address.city="Manthani";
orderCopy.items[0].price=10000;

console.log(order);
console.log(orderCopy);