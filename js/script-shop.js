document.addEventListener("DOMContentLoaded", function() {
    const filterToggleBtn = document.getElementById('filter-toggle-btn');
    const filterPanel = document.querySelector('.filter-panel');
    if (filterToggleBtn && filterPanel) {
        filterToggleBtn.addEventListener('click', () => {
            filterPanel.classList.toggle('active');
            filterToggleBtn.classList.toggle('active');
        });
    }

    const filterHeaders = document.querySelectorAll('.filter-group h3');
    filterHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const group = header.closest('.filter-group');
            group.classList.toggle('active');
        });
    });

    const priceRange = document.querySelector('.price-range');
    if (priceRange) {
        const minSlider = document.getElementById('price-min');
        const maxSlider = document.getElementById('price-max');
        const minValue = document.getElementById('min-value');
        const maxValue = document.getElementById('max-value');
        const sliderFill = priceRange.querySelector('.slider-fill');

        function updateSlider() {
            let minVal = parseInt(minSlider.value);
            let maxVal = parseInt(maxSlider.value);

            if (minVal > maxVal) {
                minVal = maxVal;
                minSlider.value = minVal;
            }

            minValue.textContent = minVal;
            maxValue.textContent = maxVal;

            const percentMin = (minVal / 1000) * 100;
            const percentWidth = ((maxVal - minVal) / 1000) * 100;
            sliderFill.style.left = percentMin + '%';
            sliderFill.style.width = percentWidth + '%';
        }

        minSlider.addEventListener('input', updateSlider);
        maxSlider.addEventListener('input', updateSlider);
        updateSlider(); 
    }
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    const activeSpan = document.querySelector('.shop-bg .active');
    const resetBtn = document.getElementById('reset-filters');

    activeSpan.textContent = '';

    categoryRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                activeSpan.textContent = this.value;
            }
        });
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            categoryRadios.forEach(radio => radio.checked = false);
            activeSpan.textContent = ''; 
        });
    }

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function () {
            window.location.href = "product-details.html"; 
        });
    });
});

