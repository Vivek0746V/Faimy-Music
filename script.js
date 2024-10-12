document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Pop-up for tour dates info
    const moreInfoBtn = document.getElementById('more-info');
    moreInfoBtn.addEventListener('click', () => {
        alert("Stay tuned! (Your notification is now turned on) More tour dates will be announced soon.");
    });
});
