document.addEventListener('DOMContentLoaded', function() {
    const filterToggle = document.getElementById('filterToggle');
    const sidebarContent = document.getElementById('sidebarContent');

    if (filterToggle && sidebarContent) {
        filterToggle.addEventListener('click', function() {
            filterToggle.classList.toggle('active');
            sidebarContent.classList.toggle('active');
        });
    }
});