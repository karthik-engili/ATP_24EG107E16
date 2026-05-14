# E-Commerce System Management

## Overview

This folder contains a simple JavaScript-based e-commerce system built with modular code. It demonstrates product management, cart handling, discount application, and payment processing using ES module exports.

## Project Structure

- `product.js` - product catalog functions:
  - `getAllProducts()`
  - `getProductById(id)`
  - `getProductsByCategory(category)`
  - `searchProducts(query)`
  - `checkStock(productId, quantity)`
  - `reduceStock(productId, quantity)`
- `cart.js` - cart management:
  - `addToCart(productId, quantity)`
  - `removeFromCart(productId)`
  - `updateQuantity(productId, newQuantity)`
  - `getCartItems()`
  - `getCartTotal()`
  - `clearCart()`
- `discount.js` - discount and coupon support:
  - `applyDiscount(cartTotal, couponCode)`
- `payment.js` - payment processing and order completion:
  - `processPayment(method, couponCode)`
- `app.js` - sample entry point importing the main modules for integration and testing.

## Features

- Product listing and search
- Category-based product filtering
- Cart add, remove, and update quantity
- Stock availability validation
- Discount coupon support
- Payment processing with cart clearing and stock reduction

## Coupon Codes

- `WELCOME10` - 10% off for orders with a minimum amount of `1000`
- `FLAT500` - ₹500 off for orders with a minimum amount of `5000`

## Usage

This module set can be used with a modern JavaScript environment that supports ES modules.

Example:

```js
import { addToCart, getCartItems, getCartTotal } from './cart.js';
import { processPayment } from './payment.js';

addToCart(1, 2);
addToCart(3, 1);
console.log(getCartItems());
console.log('Subtotal:', getCartTotal());

const result = processPayment('card', 'WELCOME10');
console.log(result);
```

## Notes

- There is no UI included; this is a logic-only implementation.
- Data is stored in memory and resets when the page or Node process reloads.
- `app.js` currently includes placeholder imports and a sample console log.
