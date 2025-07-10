productDetailsThumbnailButton1 = document.querySelector('.product-details__thumbnail-button--bg1');
productDetailsThumbnailButton2 = document.querySelector('.product-details__thumbnail-button--bg2');
productDetailsThumbnailButton3 = document.querySelector('.product-details__thumbnail-button--bg3');

productDetailsImage1 = document.getElementById('productDetailsImage1');
productDetailsImage2 = document.getElementById('productDetailsImage2');
productDetailsImage3 = document.getElementById('productDetailsImage3');

productDetailsThumbnailButton1.addEventListener('click', () => {
    productDetailsImage1.classList.remove('visually-hidden');
    productDetailsImage2.classList.add('visually-hidden');
    productDetailsImage3.classList.add('visually-hidden');
})

productDetailsThumbnailButton2.addEventListener('click', () => {
    productDetailsImage2.classList.remove('visually-hidden');
    productDetailsImage1.classList.add('visually-hidden');
    productDetailsImage3.classList.add('visually-hidden');
})

productDetailsThumbnailButton3.addEventListener('click', () => {
    productDetailsImage3.classList.remove('visually-hidden');
    productDetailsImage1.classList.add('visually-hidden');
    productDetailsImage2.classList.add('visually-hidden');
})

productDetailsSizeButtons = document.querySelectorAll('.product-details__size-button');
for (let el of productDetailsSizeButtons) {
    el.addEventListener('click', () => {
        el.classList.toggle('product-details__size-button--selected');
    })
}

productDetailsAddToCartButton = document.getElementById("productDetailsAddToCartButton")
productDetailsAddToCartButton.addEventListener("click", () => {
    const isAdded = productDetailsAddToCartButton.classList.contains('button--theme-orange-activated');

    if (isAdded) {
        productDetailsAddToCartButton.classList.remove('button--theme-orange-activated');
        productDetailsAddToCartButton.textContent = 'Add to cart';
    } else {
        productDetailsAddToCartButton.classList.add('button--theme-orange-activated');
        productDetailsAddToCartButton.textContent = 'Added to cart';
    }
})