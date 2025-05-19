// Initialize search box
document.getElementById('searchBox').addEventListener('input', searchTools);

// Initialize category tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        // Filter tools
        filterTools(tab.dataset.category);
    });
});

// Search function
function searchTools(e) {
    const searchText = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.category-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        if (title.includes(searchText) || 
            description.includes(searchText) || 
            category.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filter function
function filterTools(category) {
    const cards = document.querySelectorAll('.category-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
} 