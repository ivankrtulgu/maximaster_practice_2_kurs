//Order Now button

shoppingBagButtonOrderNow = document.getElementById('shoppingBagButtonOrderNow')

shoppingBagFooterEl = document.querySelector('.shopping-bag__footer')
dividerEls = document.querySelectorAll('.divider')
shippingAddressEl = document.querySelector('.shipping-address')
paymentOptionsEl = document.querySelector('.payment-options')

shoppingBagButtonOrderNow.addEventListener('click', () => {
    for (dividerEl of dividerEls) {
        dividerEl.classList.remove('visually-hidden')
    }
    shippingAddressEl.classList.remove('visually-hidden')
    paymentOptionsEl.classList.remove('visually-hidden')
    shoppingBagFooterEl.classList.add('visually-hidden')
})

// Delete product button

const shoppingBagTbodyTrows = document.querySelectorAll(".shopping-bag__tbody tr")

if (shoppingBagTbodyTrows) {
    shoppingBagTbodyTrows.forEach(shoppingBagTbodyTrow => {
        shoppingBagButtonDeleteEl = shoppingBagTbodyTrow.lastElementChild.firstElementChild
        shoppingBagButtonDeleteEl.addEventListener('click', (event) => {
            shoppingBagTbodyTrow.classList.toggle('shopping-bag__row--deleted')
        })
    })
}

