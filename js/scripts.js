//Attempting to use as little JS as possible - both for browser support and page load times.

/**
 * charCode [48,57] 	Numbers 0 to 9
 * keyCode 46  			"delete"
 * keyCode 9  			"tab"
 * keyCode 13  			"enter"
 * keyCode 116 			"F5"
 * keyCode 8  			"backscape"
 * keyCode 37,38,39,40	Arrows
 * keyCode 10			(LF)
 */

var stripe = Stripe('pk_test_51H7ps1KmV0hnkyd1uoNY36oEjfDL4v88kW2kzSJeWuYcKdTluUxfSmvQFKtBN1dxvsayYaIg40GHXoC2m7IbbWeu00nwcuFZTb');

function cTest() {
stripe.redirectToCheckout({
  lineItems: [
  {
    price: 'price_1HUfbaKmV0hnkyd1NFDdDYwV', // Replace with the ID of your price
    quantity: 1,
  },
  {
    price: 'price_1HW6EFKmV0hnkyd1ybbgRQvu',
    quantity: 1,
  },
  {
    price: 'price_1HUf4kKmV0hnkyd1TNssPatZ',
    quantity: 1,
  }
  ],
  mode: 'payment',
  successUrl: 'https://imsam.ca',
  cancelUrl: 'https://imsam.ca',
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
});
}