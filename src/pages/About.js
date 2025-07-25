// Компонент About Page
const About = (props = {}) => {
    // Создаем breadcrumb для страницы About
    const breadcrumbComponent = typeof Breadcrumb !== 'undefined' ? Breadcrumb({ currentPage: 'About' }) : '';
    
    return `
        ${breadcrumbComponent}
        <main class="main about-page">
            <!--TOP-->
            <section class="about-top" style="border: none;">
                <div class="about-top-inner">
                    <h4 class="about-title">Про нас</h4>
                </div>
            </section>
            <!--ABOUT FIND-->
            <section class="about-find section-lg">
                <div class="section-lg-inner">
                    <div class="about-find-inner">
                        <div class="about-find-left">
                            <div class="about-find-images">
                                <img class="about-find-ellipse-1" src="./src/img/about-find-ellipse-1.svg" alt="">
                                <img class="about-find-hero" src="./src/img/about-find.png" alt="">
                                <img class="about-find-ellipse-2" src="./src/img/about-find-ellipse-2.svg" alt="">
                            </div>
                        </div>
                        <div class="about-find-content">
                            <img class="about-find-img" src="./src/img/icons/about-find.svg" alt="">
                            <p class="about-find-title">Ми постійно покращуємо функціонал та набираємо нових фахівців</p>
                            <p class="about-find-text">Наша місія — надати доступ до професійних консультацій незалежно від:</p>
                            <ul class="about-find-list">
                                <li>Підбір експертів за напрямком, мовою та рейтингом</li>
                                <li>Гарантію якості та перевірку профілів фахівців</li>
                                <li>Онлайн-консультації через просту та безпечну платформу</li>
                            </ul>
                            <a class="about-find-link" href="">
                                <p>Знайти спеціаліста</p>
                                <img src="./src/img/icons/details-white.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!--ABOUT SUPPORT-->
            <section class="about-support section-lg" id="how-to-order">
                <div class="section-lg-inner">
                    <div class="about-support-inner">
                        <div class="about-support-content">
                            <img class="about-support-img" src="./src/img/icons/about-support.svg" alt="">
                            <p class="about-support-title">Ми підтримуємо людей, які ведуть здоровий спосіб життя</p>
                            <p class="about-support-text">Ми тобі допожемо, якщо ти:</p>
                            <ul class="about-support-list">
                                <li>Потребуєш кваліфікованої консультації в будь-якій сфері</li>
                                <li>Шукаєш експертів рідною або міжнародною мовами</li>
                                <li>Цінуєш швидкість, доступність і безпеку онлайн-консультацій</li>
                            </ul>
                        </div>
                        <div class="about-support-right">
                            <div class="about-support-images">
                                <img class="about-support-ellipse-1" src="./src/img/about-support-ellipse-1.svg" alt="">
                                <img class="about-support-hero" src="./src/img/about-support-hero.jpg" alt="">
                                <img class="about-support-ellipse-2" src="./src/img/about-support-ellipse-2.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--ABOUT BANNERS-->
            <section class="about-banners section-lg" id="who-need-it">
                <div class="section-lg-inner">
                    <div class="about-banners-inner">
                        <div class="search-banner">
                            <div class="search-banner-content">
                                <p class="search-banner-text">Чому саме ми?</p>
                                <a class="search-banner-link" href="">
                                    <p>Детальніше</p>
                                </a>
                            </div>
                            <img class="search-banner-img" src="./src/img/search-banner-1.png" alt="">
                        </div>
                        <div class="search-banner">
                            <div class="search-banner-content">
                                <p class="search-banner-text">Як це працює: швидкий гайд</p>
                                <a class="search-banner-link" href="">
                                    <p>Детальніше</p>
                                </a>
                            </div>
                            <img class="search-banner-img" src="./src/img/search-banner-2.png" alt="">
                        </div>
                        <div class="search-banner">
                            <div class="search-banner-content">
                                <p class="search-banner-text">Топ пропозиції за категоріями</p>
                                <a class="search-banner-link" href="">
                                    <p>Детальніше</p>
                                </a>
                            </div>
                            <img class="search-banner-img" src="./src/img/search-banner-3.png" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <!--ABOUT OPENING-->
            <section class="about-opening section-lg" id="blog">
                <div class="section-lg-inner">
                    <div class="about-opening-inner">
                        <div class="about-opening-left">
                            <div class="about-opening-images">
                                <img class="about-opening-ellipse-1" src="./src/img/about-opening-ellipse-1.svg" alt="">
                                <img class="about-opening-hero" src="./src/img/about-opening-hero.png" alt="">
                                <img class="about-opening-ellipse-2" src="./src/img/about-opening-ellipse-2.svg" alt="">
                            </div>
                        </div>
                        <div class="about-opening-content">
                            <h4 class="about-opening-title">Коли відкриваємося?</h4>
                            <p class="about-opening-text">Запуск міжнародної версії <span>"Без Кордонів"</span> запланований на <span>вересень 2025</span> року.</p>
                            <p class="about-opening-text">Станьте частиною нашого глобального старту!</p>
                            <a class="about-opening-link button-primary" href="">
                                <p>Знайти спеціаліста</p>
                                <img src="./src/img/icons/details-white.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!--ABOUT SOCIAL-->
            <section class="about-social section-lg">
                <div class="section-lg-inner">
                    <div class="about-social-inner">
                        <p class="section-title">Слідкуйте за нами</p>
                        <div class="about-social-links">
                            <a class="about-social-link" href="">
                                <img src="./src/img/icons/telegram-color.svg" alt="">
                                <p>Telegram</p>
                            </a>
                            <a class="about-social-link" href="">
                                <img src="./src/img/icons/instagram-color.svg" alt="">
                                <p>Instagram</p>
                            </a>
                            <a class="about-social-link" href="">
                                <img src="./src/img/icons/facebook-color.svg" alt="">
                                <p>Facebook</p>
                            </a>
                            <a class="about-social-link" href="">
                                <img src="./src/img/icons/linkedin-color.svg" alt="">
                                <p>LinkedIn</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = About;
}