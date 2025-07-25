// Компонент 404 Page
const Page404 = (props = {}) => {
    return `
        <main class="main">
            <section class="page-404">
                <div class="page-404-inner">
                    <img class="page-404-img" src="./src/img/404-img.png" alt="">
                    <div class="page-404-content">
                        <img class="page-404-notfound" src="./src/img/icons/not-found.svg" alt="">
                        <p class="page-404-title">Сторінка не знайдена</p>
                        <p class="page-404-text">Перезавантажте сторінку через декілька хвилин.</p>
                        <a class="page-404-link" href="" data-link>
                            <img src="./src/img/icons/prev-btn-white.svg" alt="">
                            <p>Повернутись назад</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>

        <script>
            // 404 Page functionality
            document.addEventListener('DOMContentLoaded', function() {
                // Log 404 error for analytics
                console.log('404 Error: Page not found - ', window.location.pathname);
                
                // Optional: Send 404 analytics data
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_not_found', {
                        'page_path': window.location.pathname,
                        'page_title': '404 - Page Not Found'
                    });
                }

                // Auto-redirect timer (optional)
                let countdown = 10;
                const redirectTimer = setInterval(() => {
                    countdown--;
                    if (countdown <= 0) {
                        clearInterval(redirectTimer);
                        // Uncomment to enable auto-redirect
                        // window.location.href = '/';
                    }
                }, 1000);

                // Track user interaction with back button
                const backButton = document.querySelector('.page-404-link');
                if (backButton) {
                    backButton.addEventListener('click', function() {
                        console.log('User clicked back to home from 404 page');
                    });
                }

                // Add some interactive effects
                const illustration = document.querySelector('.page-404-img');
                if (illustration) {
                    illustration.addEventListener('mouseenter', function() {
                        this.style.transform = 'scale(1.05)';
                        this.style.transition = 'transform 0.3s ease';
                    });
                    
                    illustration.addEventListener('mouseleave', function() {
                        this.style.transform = 'scale(1)';
                    });
                }
            });
        </script>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Page404;
}