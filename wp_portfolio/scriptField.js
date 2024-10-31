document.addEventListener('DOMContentLoaded', function() {
    const field = document.querySelector('.football-field');
    const areas = field.querySelectorAll('div');

    areas.forEach(area => {
        area.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        });

        area.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});