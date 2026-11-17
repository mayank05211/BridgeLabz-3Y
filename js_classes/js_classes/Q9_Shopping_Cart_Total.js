// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity <= 0) {
            throw new Error("Price must be non-negative and quantity must be positive.");
        }

        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(couponCode) {
        // Accept coupon codes such as SAVE20 or DISC10.
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/i;
        const match = couponCode.trim().match(couponPattern);

        if (!match) {
            return {
                valid: false,
                message: "Invalid coupon. Use a code like SAVE20 or DISC10."
            };
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {
            return {
                valid: false,
                message: "Coupon discount must be between 1% and 100%."
            };
        }

        const originalTotal = this.getTotal();
        const discountAmount = originalTotal * (discountPercent / 100);

        return {
            valid: true,
            discountPercent,
            originalTotal,
            discountAmount,
            finalTotal: originalTotal - discountAmount
        };
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1200, 1);
cart.addItem("Mouse", 600, 2);
cart.addItem("USB Cable", 250, 3);

console.log("Cart items:");
console.table(cart.items);
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);

// Change this code to test another coupon.
const couponCode = "SAVE20";
const couponResult = cart.applyCoupon(couponCode);

if (couponResult.valid) {
    console.log(`Coupon applied: ${couponResult.discountPercent}% off`);
    console.log(`Discount amount: ₹${couponResult.discountAmount.toFixed(2)}`);
    console.log(`Final total: ₹${couponResult.finalTotal.toFixed(2)}`);
} else {
    console.log(couponResult.message);
}
