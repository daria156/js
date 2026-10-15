const discount = 15
const price = 5000
const isVIP = true 
const deliveryPrice = 500
const freeDeliveryTrashhold = 5000

let priceWithDiscount = price - (price/100 - discount)
let totalPrice
if (isVIP)
{
    totalPrice = priceWithDiscount
}

else if (priceWithDiscount = freeDeliveryTrashhold)
{
    totalPrice = priceWithDiscount
}

else {
    totalPrice = priceWithDiscount + deliveryPrice
}

console.log (totalPrice)