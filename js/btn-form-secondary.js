document.querySelectorAll('#box-content-item-form div').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('description').textContent = this.getAttribute('data-description');
    });
});