// Initial total price, set to 0
let total = 0;

// Function to update the total price displayed in the HTML
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = total.toFixed(2) + ' PKR';
}

document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // Get the item name and price from the button's parent element
        const menuItem = button.parentElement;
        const itemPrice = parseFloat(button.getAttribute('data-price').replace('PKR', ''));

        // Update the total price
        total += itemPrice;

        // Update the displayed total price
        updateTotalPrice();

        // ... rest of your code for adding items to the cart
    });
});

// Initialize the displayed total price
updateTotalPrice();
