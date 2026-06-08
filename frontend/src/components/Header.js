document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[data-target]');

    navLinks.forEach(a => {
        // prepare underline span
        const underline = document.createElement('span');
        underline.className = 'underline absolute left-0 -bottom-2 h-0.5 bg-primary w-0 transition-all duration-300';
        a.classList.add('relative', 'px-1');
        a.appendChild(underline);

        a.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = a.dataset.target;
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(targetId);
        });
    });

    function setActive(id) {
        navLinks.forEach(a => {
            const u = a.querySelector('.underline');
            if (!u) return;
            if (a.dataset.target === id) {
                u.classList.remove('w-0');
                u.classList.add('w-full');
            } else {
                u.classList.remove('w-full');
                u.classList.add('w-0');
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
});
