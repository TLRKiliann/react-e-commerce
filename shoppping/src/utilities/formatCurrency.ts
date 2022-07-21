const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style: "currency"
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
};

/*
JavaScript has a number formatter (part of the Internationalization API).
// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
*/