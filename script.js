document.addEventListener('DOMContentLoaded', function() {
    // --- Homepage Search Filtering ---
    const searchInput = document.querySelector('.hero .search-bar input[type="text"]');
    const searchButton = document.querySelector('.hero .search-bar button');
    const stayCards = document.querySelectorAll('.featured-stays .stay-card');

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase();
            stayCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const location = card.querySelector('p').textContent.toLowerCase(); // Assuming location is in the <p> tag
                if (title.includes(searchTerm) || location.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        searchInput.addEventListener('input', function() {
            // Optional: You could implement live filtering as the user types here
            // For this example, we'll keep the filtering on button click.
        });
    }

    // --- Listing Page Image Gallery Interaction ---
    const mainImage = document.querySelector('.listing-details .image-gallery > img');
    const smallImages = document.querySelectorAll('.listing-details .small-images img');

    smallImages.forEach(smallImage => {
        smallImage.addEventListener('click', function() {
            const newSrc = this.src;
            const newAlt = this.alt;
            mainImage.src = newSrc;
            mainImage.alt = newAlt;
        });
    });

    // --- Basic "Book Now" Alert (unchanged) ---
    const bookButton = document.querySelector('.book-button');
    if (bookButton) {
        bookButton.addEventListener('click', function() {
            alert('Booking functionality is not implemented in this prototype.');
        });
    }
});