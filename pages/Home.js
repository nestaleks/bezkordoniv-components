import { Page } from './Page.js';

export class HomePage extends Page {
    constructor(container) {
        super(container);
        this.init();
    }

    init() {
        this.setTitle('Без Кордонів - Поиск экспертов');
        this.setMeta(
            'Без Кордонів - платформа для поиска профессиональных экспертов и консультантов',
            'эксперты, консультации, профессионалы, онлайн консультации'
        );
    }

    render() {
        this.container.innerHTML = `
            <!--SEARCH-->
            <section class="search-box">
                <div class="search-box-inner">
                    <div class="search-container">
                        <div class="search-block">
                            <p class="search-box-title mt-20 mb-12">Об'єднуймо <span>українців та експертів</span> без кордонів</p>
                            <p class="search-box-text mb-20">Онлайн-консультації з медицини, права, фінансів та освіти від професіоналів, які розуміють Вашу мову</p>
                            <div class="input-container">
                                <div class="search-input-name">
                                    <img src="./img/icons/search.svg" alt="">
                                    <input type="text" placeholder="Імʼя, Спеціальність, Категорія">
                                </div>
                                <div class="divider"></div>
                                <div class="search-input-place">
                                    <img src="./img/icons/location.svg" alt="">
                                    <input type="text" placeholder="Адреса, Індекс">
                                    <img src="./img/icons/filter.svg" alt="">
                                    <button class="search-btn button-primary" type="submit">
                                        <p>Пошук</p>
                                        <svg width="6.004028" height="10.008179" viewBox="0 0 6.00403 10.0082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path id="Vector" d="M1 9L5 5L1 1" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search-box-img"></div>
                </div>
                <div class="container">
                    <div class="search-banners">
                        <div class="search-banner">
                            <div class="search-banner-content">
                                <p class="search-banner-text">Чому саме ми?</p>
                                <a class="search-banner-link" href="">
                                    <p>Детальніше</p>
                                </a>
                            </div>
                            <img class="search-banner-img" src="./img/search-banner-1.png" alt="">
                        </div>
                        <div class="search-banner">
                            <div class="search-banner-content">
                                <p class="search-banner-text">Як це працює: швидкий гайд</p>
                                <a class="search-banner-link" href="">
                                    <p>Детальніше</p>
                                </a>
                            </div>
                            <img class="search-banner-img" src="./img/search-banner-2.png" alt="">
                        </div>
                        <div class="search-banner">
                            <div class="search-banner-content">
                                <p class="search-banner-text">Топ пропозиції за категоріями</p>
                                <a class="search-banner-link" href="">
                                    <p>Детальніше</p>
                                </a>
                            </div>
                            <img class="search-banner-img" src="./img/search-banner-3.png" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <!--FEATURES-->
            <section class="tabs features-buttons">
                <div class="container">
                    <div class="tabs-inner features-buttons-inner">
                        <a href="#how-to-order" class="tabs features-buttons-link">
                            <p>Як замовити?</p>
                        </a>
                        <a href="#who-need-it" class="tabs features-buttons-link">
                            <p>Кому допоможе?</p>
                        </a>
                        <a href="#faq" class="tabs features-buttons-link">
                            <p>FAQ</p>
                        </a>
                        <a href="#blog" class="tabs features-buttons-link">
                            <p>Блог</p>
                        </a>
                    </div>
                </div>
            </section>
            <!--CATEGORIES-->
            <section class="categories section-lg">
                <div class="section-lg-inner">
                    <div class="categories-header mb-20">
                        <p class="section-title">Всі Категорії</p>
                        <div class="categories-pagination">
                            <svg class="categories-arrow arrow-prev" width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M11 21C5.47 21 1 16.52 1 11C1 5.47 5.47 1 11 1C16.52 1 21 5.47 21 11C21 16.52 16.52 21 11 21ZM13 15L9 11L13 7" stroke="#000000" stroke-opacity="0.300000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>
                            <p class="categories-pages">1/3</p>
                            <svg class="categories-arrow arrow-next" width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M11 21C5.47 21 1 16.52 1 11C1 5.47 5.47 1 11 1C16.52 1 21 5.47 21 11C21 16.52 16.52 21 11 21ZM9 7L13 11L9 15" stroke="#000000" stroke-opacity="0.300000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <ul class="categories-tiles">
                        <li class="category-tile color-1">
                            <a href="">Медичні</a>
                            <img src="./img/patterns/medical.svg" alt="">
                        </li>
                        <li class="category-tile color-2">
                            <a href="">Психологічні</a>
                            <img src="./img/patterns/psyhology.svg" alt="">
                        </li>
                        <li class="category-tile color-3">
                            <a href="">Юридичні</a>
                            <img src="./img/patterns/law-service.svg" alt="">
                        </li>
                        <li class="category-tile color-5">
                            <a href="">ІТ та технології</a>
                            <img src="./img/patterns/it-technology.svg" alt="">
                        </li>
                        <li class="category-tile color-3">
                            <a href="">Фінансові</a>
                            <img src="./img/patterns/finance.svg" alt="">
                        </li>
                        <li class="category-tile color-4">
                            <a href="">Освітні</a>
                            <img src="./img/patterns/education.svg" alt="">
                        </li>
                        <li class="category-tile color-2">
                            <a href="">Маркетинг</a>
                            <img src="./img/patterns/marketing.svg" alt="">
                        </li>
                        <li class="category-tile color-4">
                            <a href="">Дизайн</a>
                            <img src="./img/patterns/design.svg" alt="">
                        </li>
                        <li class="category-tile color-1">
                            <a href="">Бізнес</a>
                            <img src="./img/patterns/business.svg" alt="">
                        </li>
                        <li class="category-tile color-5">
                            <a href="">Комунікації</a>
                            <img src="./img/patterns/communication.svg" alt="">
                        </li>
                        <li class="category-tile color-3">
                            <a href="">Продажі</a>
                            <img src="./img/patterns/sales.svg" alt="">
                        </li>
                        <li class="category-tile color-2">
                            <a href="">Логістика</a>
                            <img src="./img/patterns/logistic.svg" alt="">
                        </li>
                        <li class="category-tile color-4">
                            <a href="">Віртуальні послуги</a>
                            <img src="./img/patterns/virtual.svg" alt="">
                        </li>
                    </ul>
                </div>


            </section>
            <!--TOP EXPERTS-->
            <section class="top-experts section-lg">
                <div class="section-lg-inner">
                    <div class="top-experts-header mb-20">
                        <p class="section-title">Топ Експерти</p>
                        <div class="top-experts-pagination">
                            <svg class="top-experts-arrow arrow-prev" width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M11 21C5.47 21 1 16.52 1 11C1 5.47 5.47 1 11 1C16.52 1 21 5.47 21 11C21 16.52 16.52 21 11 21ZM13 15L9 11L13 7" stroke="#000000" stroke-opacity="0.300000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>
                            <p class="top-experts-pages">1/3</p>
                            <svg class="top-experts-arrow arrow-next" width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M11 21C5.47 21 1 16.52 1 11C1 5.47 5.47 1 11 1C16.52 1 21 5.47 21 11C21 16.52 16.52 21 11 21ZM9 7L13 11L9 15" stroke="#000000" stroke-opacity="0.300000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <ul class="top-experts-list">
                        <li class="top-experts-card">
                            <a href="#">
                                <div class="top-experts-box mb-20">
                                    <img class="top-experts-img" src="./img/expert-1.png" alt="">
                                    <div class="top-experts-info">
                                        <a class="top-experts-name" href="">
                                            <p>Антон Багінський</p>
                                        </a>
                                        <div class="top-experts-amount">
                                            <a class="top-experts-country highlight-pill" href="#">Німеччина</a>
                                            <p class="top-experts-rating highlight-pill">4,5 / 5</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="top-experts-category">
                                    <a class="expert-category-md" href="">
                                        <p>Медицина</p>
                                        <img src="./img/icons/ctgr-list-med.svg" alt="">
                                    </a>
                                </div>
                            </a>
                        </li>
                        <li class="top-experts-card">
                            <a href="#">
                                <div class="top-experts-box mb-20">
                                    <img class="top-experts-img" src="./img/expert-2.png" alt="">
                                    <div class="top-experts-info">
                                        <a class="top-experts-name" href="">
                                            <p>Андрій Романів</p>
                                        </a>
                                        <div class="top-experts-amount">
                                            <a class="top-experts-country highlight-pill" href="#">Німеччина</a>
                                            <p class="top-experts-rating highlight-pill">4,5 / 5</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="top-experts-category">
                                    <a class="expert-category-md" href="">
                                        <p>Технічні експерти</p>
                                        <img src="./img/icons/ctgr-list-tech.svg" alt="">
                                    </a>
                                </div>
                            </a>
                        </li>
                        <li class="top-experts-card">
                            <a href="#">
                                <div class="top-experts-box mb-20">
                                    <img class="top-experts-img" src="./img/expert-3.png" alt="">
                                    <div class="top-experts-info">
                                        <a class="top-experts-name" href="">
                                            <p>Марʼяна Костенко</p>
                                        </a>
                                        <div class="top-experts-amount">
                                            <a class="top-experts-country highlight-pill" href="#">Німеччина</a>
                                            <p class="top-experts-rating highlight-pill">4,5 / 5</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="top-experts-category">
                                    <a class="expert-category-md" href="">
                                        <p>Дизайнери</p>
                                        <img src="./img/icons/ctgr-list-design.svg" alt="">
                                    </a>
                                </div>
                            </a>
                        </li>
                        <li class="top-experts-card">
                            <a href="#">
                                <div class="top-experts-box mb-20">
                                    <img class="top-experts-img" src="./img/expert-4.png" alt="">
                                    <div class="top-experts-info">
                                        <a class="top-experts-name" href="">
                                            <p>Оксана Поліщук</p>
                                        </a>
                                        <div class="top-experts-amount">
                                            <a class="top-experts-country highlight-pill" href="#">Німеччина</a>
                                            <p class="top-experts-rating highlight-pill">4,5 / 5</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="top-experts-category">
                                    <a class="expert-category-md" href="">
                                        <p>Адвокат</p>
                                        <img src="./img/icons/ctgr-list-law.svg" alt="">
                                    </a>
                                </div>
                            </a>
                        </li>
                        <li class="top-experts-card">
                            <a href="#">
                                <div class="top-experts-box mb-20">
                                    <img class="top-experts-img" src="./img/expert-5.png" alt="">
                                    <div class="top-experts-info">
                                        <a class="top-experts-name" href="">
                                            <p>Карина Мартиненко</p>
                                        </a>
                                        <div class="top-experts-amount">
                                            <a class="top-experts-country highlight-pill" href="#">Данія</a>
                                            <p class="top-experts-rating highlight-pill">4 / 5</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="top-experts-category">
                                    <a class="expert-category-md" href="">
                                        <p>Нігтьовий сервіс</p>
                                        <img src="./img/icons/ctgr-list-nails.svg" alt="">
                                    </a>
                                </div>
                            </a>
                        </li>
                        <li class="top-experts-card">
                            <a href="#">
                                <div class="top-experts-box mb-20">
                                    <img class="top-experts-img" src="./img/expert-6.png" alt="">
                                    <div class="top-experts-info">
                                        <a class="top-experts-name" href="">
                                            <p>Ганна Костенко</p>
                                        </a>
                                        <div class="top-experts-amount">
                                            <a class="top-experts-country highlight-pill" href="#">Польша</a>
                                            <p class="top-experts-rating highlight-pill">4,8 / 5</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="top-experts-category">
                                    <a class="expert-category-md" href="">
                                        <p>Копірайтери</p>
                                        <img src="./img/icons/ctgr-list-copywriter.svg" alt="">
                                    </a>
                                </div>
                            </a>
                        </li>
                        <li class="top-experts-card">
                            <a href="#">
                                <div class="top-experts-box mb-20">
                                    <img class="top-experts-img" src="./img/expert-7.png" alt="">
                                    <div class="top-experts-info">
                                        <a class="top-experts-name" href="">
                                            <p>Константин Вакуленко</p>
                                        </a>
                                        <div class="top-experts-amount">
                                            <a class="top-experts-country highlight-pill" href="#">Україна</a>
                                            <p class="top-experts-rating highlight-pill">4,1 / 5</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="top-experts-category">
                                    <a class="expert-category-md" href="">
                                        <p>Events creating</p>
                                        <img src="./img/icons/ctgr-list-events.svg" alt="">
                                    </a>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <!--HOW TO ORDER-->
            <section class="how-to-order section-lg" id="how-to-order">
                <div class="section-lg-inner">
                    <div class="how-to-order-inner">
                        <p class="section-title">Як замовити?</p>
                        <ul class="how-to-order-list mt-20">
                            <li class="how-to-order-item">
                                <div class="how-to-order-images">
                                    <img class="how-to-order-ellipse-1" src="./img/how-to-order-1a.svg" alt="">
                                    <img class="how-to-order-hero" src="./img/how-to-order-1b.png" alt="">
                                    <img class="how-to-order-ellipse-2" src="./img/how-to-order-1c.svg" alt="">
                                </div>
                                <p class="how-to-order-text">Оберіть фільтр <b>прямо зараз</b> або <b>найближчий запис</b> на зручний час</p>
                            </li>
                            <li class="how-to-order-item">
                                <div class="how-to-order-images">
                                    <img class="how-to-order-ellipse-1" src="./img/how-to-order-2a.svg" alt="">
                                    <img class="how-to-order-hero" src="./img/how-to-order-2b.png" alt="">
                                    <img class="how-to-order-ellipse-2" src="./img/how-to-order-2c.svg" alt="">
                                </div>
                                <p class="how-to-order-text">Оберіть лікаря за <b>рейтингом, відгуком, вартістю</b></p>
                            </li>
                            <li class="how-to-order-item">
                                <div class="how-to-order-images">
                                    <img class="how-to-order-ellipse-1" src="./img/how-to-order-3a.svg" alt="">
                                    <img class="how-to-order-hero" src="./img/how-to-order-3b.png" alt="">
                                    <img class="how-to-order-ellipse-2" src="./img/how-to-order-3c.svg" alt="">
                                </div>
                                <p class="how-to-order-text">Спаліть послугу та <b>отримайте підтвердження оплати</b></p>
                            </li>
                            <li class="how-to-order-item">
                                <div class="how-to-order-images">
                                    <img class="how-to-order-ellipse-1" src="./img/how-to-order-4a.svg" alt="">
                                    <img class="how-to-order-hero" src="./img/how-to-order-4b.png" alt="">
                                    <img class="how-to-order-ellipse-2" src="./img/how-to-order-4c.svg" alt="">
                                </div>
                                <p class="how-to-order-text">Отримайте консультацію онлайні <b>bez-kordoniv.com</b> </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <!--WHO NEED IT-->
            <section class="who-need-it section-lg" id="who-need-it">
                <div class="section-lg-inner">
                    <div class="who-need-it-inner">
                        <div class="who-need-it-left">
                            <div class="who-need-it-images">
                                <img class="who-need-it-ellipse-1" src="./img/who-need-it-ellipse-1.svg" alt="">
                                <img class="who-need-it-hero" src="./img/who-need-it-hero.jpeg" alt="">
                                <img class="who-need-it-ellipse-2" src="./img/who-need-it-ellipse-2.svg" alt="">
                            </div>
                            <div class="who-need-it-contact-md">
                                <p class="who-need-it-text">Наша екосистема об'єднує українських експертів із різних галузей для вашої підтримки. Отримуйте консультації онлайн у зручний час, рідною мовою та без географічних обмежень.</p>
                                <a class="who-need-it-link mt-20" href="">
                                    <p>Знайти спеціаліста</p>
                                    <img src="./img/icons/details-white.svg" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="who-need-it-content">
                            <p class="who-need-it-title">Кому допоможе «Без Кордонів»?</p>
                            <p class="who-need-it-text">Вам, якщо:</p>
                            <ul class="who-need-it-list">
                                <li>Ви <span>українець за кордоном</span> і потребуєте <span>консультації рідною мовою</span></li>
                                <li>Потребуєте <span>швидкої медичної допомоги без довгих черг</span> та поїздок;</li>
                                <li>Маєте <span>юридичні питання</span> та потребуєте <span>кваліфікованої консультації</span>;</li>
                                <li>Плануєте <span>фінансові рішення</span> і хочете <span>порадитися з експертом</span>;</li>
                                <li>Шукаєте <span>освітні можливості</span> та потребуєте <span>допомоги у виборі</span>;</li>
                                <li>Потребуєте <span>психологічної підтримки</span> у <span>комфортній обстановці</span>;</li>
                                <li>Плануєте <span>дизайн-проект</span> чи розробку <span>технічного рішення</span>;</li>
                            </ul>
                            <div class="who-need-it-contact-lg">
                                <p class="who-need-it-text">Наша екосистема об'єднує українських експертів із різних галузей для вашої підтримки. Отримуйте консультації онлайн у зручний час, рідною мовою та без географічних обмежень.</p>
                                <a class="who-need-it-link mt-20" href="">
                                    <p>Знайти спеціаліста</p>
                                    <img src="./img/icons/details-white.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--BLOG-->
            <section class="main-blog section-lg" id="blog">
                <div class="section-lg-inner">
                    <div class="main-blog-header">
                        <p class="section-title">Блог</p>
                        <div class="main-blog-pagination">
                            <svg class="main-blog-arrow arrow-prev" width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M11 21C5.47 21 1 16.52 1 11C1 5.47 5.47 1 11 1C16.52 1 21 5.47 21 11C21 16.52 16.52 21 11 21ZM13 15L9 11L13 7" stroke="#000000" stroke-opacity="0.300000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>
                            <p class="main-blog-pages">1/3</p>
                            <svg class="main-blog-arrow arrow-next" width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M11 21C5.47 21 1 16.52 1 11C1 5.47 5.47 1 11 1C16.52 1 21 5.47 21 11C21 16.52 16.52 21 11 21ZM9 7L13 11L9 15" stroke="#000000" stroke-opacity="0.300000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <ul class="main-blog-list">
                        <li class="main-blog-item">
                            <a href="">
                                <div class="main-blog-content">
                                    <p class="main-blog-title">Як отримати максимум користі від онлайн-консультації з лікарем: інструкція для пацієнтів</p>
                                    <p class="main-blog-text">Практична стаття, яка допоможе користувачам підготуватися до консультації, правильно описати симптоми, підготувати необхідні док</p>
                                    <a class="main-blog-link" href="">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="main-blog-img" src="./img/blog-item-1.png" alt="">
                            </a>
                        </li>
                        <li class="main-blog-item">
                            <a href="">
                                <div class="main-blog-content">
                                    <p class="main-blog-title">Юридичні питання українців за кордоном: 5 найпоширеніших проблем та їхні рішення</p>
                                    <p class="main-blog-text">Інформативна стаття, яка висвітлює актуальні правові виклики для українців в інших країнах (документи, працевлаштування, податки тощо).</p>
                                    <a class="main-blog-link" href="">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="main-blog-img" src="./img/blog-item-2.png" alt="">
                            </a>
                        </li>
                        <li class="main-blog-item">
                            <a href="">
                                <div class="main-blog-content">
                                    <p class="main-blog-title">Адаптація за кордоном: психологічні поради для українців на новому місці</p>
                                    <p class="main-blog-text">Корисна стаття з практичними порадами від психологів платформи щодо подолання культурного шоку, будування нового соціального кола, збереження зв'язку з рідною культу</p>
                                    <a class="main-blog-link" href="">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="main-blog-img" src="./img/blog-item-3.png" alt="">
                            </a>
                        </li>
                        <li class="main-blog-item">
                            <a href="">
                                <div class="main-blog-content">
                                    <p class="main-blog-title">Юридичні питання українців за кордоном: 5 найпоширеніших проблем та їхні рішення</p>
                                    <p class="main-blog-text">Інформативна стаття, яка висвітлює актуальні правові виклики для українців в інших країнах (документи, працевлаштування, податки тощо).</p>
                                    <a class="main-blog-link" href="">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="main-blog-img" src="./img/blog-item-4.png" alt="">
                            </a>
                        </li>
                        <li class="main-blog-item">
                            <a href="">
                                <div class="main-blog-content">
                                    <p class="main-blog-title">Адаптація за кордоном: психологічні поради для українців на новому місці</p>
                                    <p class="main-blog-text">Корисна стаття з практичними порадами від психологів платформи щодо подолання культурного шоку, будування нового соціального кола, збереження зв'язку з рідною культу</p>
                                    <a class="main-blog-link" href="">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="main-blog-img" src="./img/blog-item-5.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <!--ADVANTAGES-->
            <section class="advantages section-lg">
                <div class="section-lg-inner">
                    <div class="advantages-inner">
                        <p class="section-title">Переваги онлайн консультації</p>
                        <div class="advantages-banners mt-20 mb-20">
                            <div class="advantages-banner">
                                <img class="advantages-banner-img" src="./img/advantages-1.svg" alt="">
                                <p class="advantages-banner-title">Доступність</p>
                                <p class="advantages-banner-text">Консультації з українськими спеціалістами онлайн, де б ви не були</p>
                            </div>
                            <div class="advantages-banner">
                                <img class="advantages-banner-img" src="./img/advantages-2.svg" alt="">
                                <p class="advantages-banner-title">Мовна підтримка</p>
                                <p class="advantages-banner-text">Спілкування з будь-яким експертом рідною українською мовою</p>
                            </div>
                            <div class="advantages-banner">
                                <img class="advantages-banner-img" src="./img/advantages-3.svg" alt="">
                                <p class="advantages-banner-title">Зручність</p>
                                <p class="advantages-banner-text">Простий та зручний інтерфейс для запису на консультації</p>
                            </div>
                            <div class="advantages-banner">
                                <img class="advantages-banner-img" src="./img/advantages-4.svg" alt="">
                                <p class="advantages-banner-title">Гнучкість</p>
                                <p class="advantages-banner-text">Платформа постійно розширюється, додаючи нові послуги</p>
                            </div>
                        </div>
                        <div class="advantages-numbers mb-20">
                            <div class="advantages-number">
                                <p class="advantages-number-title">+12600</p>
                                <p class="advantages-number-text">Проведених консультацій</p>
                            </div>
                            <div class="advantages-number">
                                <p class="advantages-number-title">+8000</p>
                                <p class="advantages-number-text">Експертів на платформі</p>
                            </div>
                            <div class="advantages-number">
                                <p class="advantages-number-title">+12600</p>
                                <p class="advantages-number-text">Користувачів з різних країн</p>
                            </div>
                            <div class="advantages-number">
                                <p class="advantages-number-title">+5000</p>
                                <p class="advantages-number-text">Партнерів та сертифікатів</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--QUESTIONS-->
            <section class="questions section-lg"  id="faq">
                <div class="section-lg-inner">
                    <div class="questions-header mb-20">
                        <p class="section-title">Часті запитання</p>
                        <a href="./faq.html" class="questions-more">
                            <p>Детальніше</p>
                        </a>
                    </div>
                    <div class="questions-box">
                        <div class="questions-categories">
                            <div class="questions-category active" id="faq-consultations">
                                <p>Консультації</p>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 7L13 11L9 15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="questions-category" id="faq-users">
                                <p>Користувачам</p>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 7L13 11L9 15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="questions-category" id="faq-experts">
                                <p>Експертам</p>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 7L13 11L9 15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="question-list">
                            <!-- Questions for category Consultations -->
                            <div class="question-list-item" data-category="faq-consultations">
                                <input type="checkbox" id="faq1">
                                <label class="faq-question" for="faq1">
                                    <p>Як знайти експерта за локацією?</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    Ви можете фільтрувати результати за галуззю та локацією, щоб знайти потрібного експерта.
                                </div>
                            </div>
                            <div class="question-list-item" data-category="faq-consultations">
                                <input type="checkbox" id="faq2">
                                <label class="faq-question" for="faq2">
                                    <p>Скільки коштують консультації?</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    Вартість консультацій залежить від експерта та галузі. Ціни зазначені на сторінці кожного спеціаліста.
                                </div>
                            </div>
                            <div class="question-list-item" data-category="faq-consultations">
                                <input type="checkbox" id="faq3">
                                <label class="faq-question" for="faq3">
                                    <p>Як скасувати заплановану консультацію?</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    Для скасування консультації увійдіть до особистого кабінету, знайдіть заплановану зустріч у розділі "Мої консультації" та натисніть кнопку "Скасувати". Зверніть увагу, що скасування можливе не пізніше ніж за 24 години до початку консультації.
                                </div>
                            </div>

                            <!-- Questions for category Users -->
                            <div class="question-list-item" data-category="faq-users">
                                <input type="checkbox" id="faq4">
                                <label class="faq-question" for="faq4">
                                    <p>Як додати кредитну картку?</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    <p><b>Увійдіть в акаунт:</b></p>
                                    <p>- авторизуйтеся у своєму акаунті.</p>
                                    <p>- перейдіть до налаштувань оплати.</p>
                                    <br>
                                    <p><b>Знайдіть розділ "Способи оплати":</b></p>
                                    <p>- у деяких сервісах це може бути у розділі "Налаштування" або "Білінг".</p>
                                    <p>- додайте нову картку.</p>
                                    <br>
                                    <p><b>Натисніть кнопку "Додати спосіб оплати":</b></p>
                                    <p>- введіть дані картки (номер, термін дії, CVV-код).</p>
                                    <p>- підтвердьте картку.</p>
                                    <br>
                                    <p>Після успішного додавання картка з'явиться у вашому списку способів оплати.</p>
                                </div>
                            </div>
                            <div class="question-list-item" data-category="faq-users">
                                <input type="checkbox" id="faq6">
                                <label class="faq-question" for="faq6">
                                    <p>Правила та умови використання Без Кордонів</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    Онлайн-сервіс надає можливість знайти кваліфікованого спеціаліста та отримати консультацію з різних питань. Платформа об'єднує експертів з різних галузей, доступних для користувачів з будь-якої точки Європи. Завдяки зручному пошуку та відеоконсультаціям ви можете швидко отримати професійну допомогу без необхідності відвідувати офіс спеціаліста. Безпека даних та якість послуг гарантуються перевіреними фахівцями та сучасними технологіями.
                                </div>
                            </div>
                            <div class="question-list-item" data-category="faq-users">
                                <input type="checkbox" id="faq7">
                                <label class="faq-question" for="faq7">
                                    <p>Як змінити особисті дані в акаунті?</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    Перейдіть до свого профілю, натисніть на іконку редагування. У режимі редагування ви зможете змінити своє ім'я, фото профілю та контактну інформацію.
                                </div>
                            </div>

                            <!-- Questions for category Experts -->
                            <div class="question-list-item" data-category="faq-experts">
                                <input type="checkbox" id="faq8">
                                <label class="faq-question" for="faq8">
                                    <p>Як стати експертом на платформі?</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    Щоб стати експертом, натисніть кнопку "Для експертів" у верхньому меню, заповніть анкету та завантажте необхідні документи для верифікації. Після перевірки адміністрацією ви отримаєте доступ до особистого кабінету експерта.
                                </div>
                            </div>
                            <div class="question-list-item" data-category="faq-experts">
                                <input type="checkbox" id="faq9">
                                <label class="faq-question" for="faq9">
                                    <p>Як встановити вартість своїх послуг?</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    У кабінеті експерта перейдіть до розділу "Мої послуги", де ви можете вказати вартість для різних типів консультацій. Ви можете змінювати ціни в будь-який момент, але це не вплине на вже заплановані консультації.
                                </div>
                            </div>
                            <div class="question-list-item" data-category="faq-experts">
                                <input type="checkbox" id="faq11">
                                <label class="faq-question" for="faq11">
                                    <p>Як налаштувати графік доступності?</p>
                                    <img src="./img/icons/accordion-arrow.svg" alt="">
                                </label>
                                <div class="faq-answer">
                                    У розділі "Календар" кабінету експерта ви можете вказати дні та години, коли ви доступні для консультацій. Користувачі зможуть записатися тільки на вільний час у вашому графіку.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--LOCATIONS-->
            <section class="locations section-lg">
                <div class="section-lg-inner">
                    <p class="section-title mb-20">Наші локації</p>
                    <div class="locations-list">
                        <div class="locations-item">
                            <img class="locations-item-img" src="./img/icons/countries/germany.svg" alt="">
                            <div class="locations-item-box">
                                <p class="locations-item-title highlight-pill">Німеччина</p>
                                <a class="locations-item-details" href="">Детальніше</a>
                            </div>
                        </div>
                        <div class="locations-item">
                            <img class="locations-item-img" src="./img/icons/countries/slovakia.svg" alt="">
                            <div class="locations-item-box">
                                <p class="locations-item-title highlight-pill">Словаччина</p>
                                <a class="locations-item-details" href="">Детальніше</a>
                            </div>
                        </div>
                        <div class="locations-item">
                            <img class="locations-item-img" src="./img/icons/countries/poland.svg" alt="">
                            <div class="locations-item-box">
                                <p class="locations-item-title highlight-pill">Польща</p>
                                <a class="locations-item-details" href="">Детальніше</a>
                            </div>
                        </div>
                        <div class="locations-item">
                            <img class="locations-item-img" src="./img/icons/countries/ukraine.svg" alt="">
                            <div class="locations-item-box">
                                <p class="locations-item-title highlight-pill">Україна</p>
                                <a class="locations-item-details" href="">Детальніше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--HELP-->
            <section class="need-help section-lg">
                <div class="section-lg-inner">
                    <div class="need-help-inner">
                        <p class="need-help-text">Маєте запитання?</p>
                        <p class="need-help-text">Допомога онлайн або сервісний центр</p>
                        <button class="need-help-btn button-primary">
                            <svg width="15.333374" height="15.333374" viewBox="0 0 15.3334 15.3334" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M7.66 10.33L7.67 10.33M7.66 5L7.66 7.66M10.81 1.39L13.94 4.51C14.19 4.76 14.33 5.1 14.33 5.45L14.33 9.87C14.33 10.22 14.19 10.56 13.94 10.81L10.81 13.94C10.56 14.19 10.22 14.33 9.87 14.33L5.45 14.33C5.1 14.33 4.76 14.19 4.51 13.94L1.39 10.81C1.14 10.56 1 10.22 1 9.87L1 5.45C1 5.1 1.14 4.76 1.39 4.51L4.51 1.39C4.76 1.14 5.1 1 5.45 1L9.87 1C10.22 1 10.56 1.14 10.81 1.39Z" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>
                            <p>Допомога онлайн</p>
                        </button>
                    </div>
                </div>
            </section>
        `;
        this.addEventListeners();
    }

    addEventListeners() {
        // Добавляем обработчики событий если необходимо
    }
}