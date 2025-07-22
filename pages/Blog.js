import { Page } from './Page.js';

export class BlogPage extends Page {
    render() {
        this.container.innerHTML = `
            <section class="blog-page section-lg mt-24 mb-24">
                <div class="section-lg-inner">
                    <!--BREADCRUMB-->
                    <nav class="breadcrumb">
                        <div class="container">
                            <!-- Breadcrumb will be generated automatically by JavaScript -->
                        </div>
                    </nav>
                    <!--BLOG-->
                    <div class="blog-page-inner">
                        <div class="blog-page-header">
                            <h4 class="page-title">Блог</h4>
                            <div class="blog-input-container mb-20" style="width: 100%;">
                                <div class="search-input-text">
                                    <img src="./img/icons/search.svg" alt="">
                                    <input type="text" placeholder="Пошук">
                                </div>
                                <button class="blog-search-btn button-primary" type="submit">
                                    <p>Пошук</p>
                                    <svg width="6.004028" height="10.008179" viewBox="0 0 6.00403 10.0082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M1 9L5 5L1 1" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="tabs">
                                <div class="tabs-inner">
                                    <button class="tabs-item blog-tabs-all">
                                        <p>Всі</p>
                                    </button>
                                    <button class="tabs-item blog-tabs-for-clients">
                                        <p>Клієнту</p>
                                    </button>
                                    <button class="tabs-item blog-tabs-for-experts">
                                        <p>Експертам</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="blog-page-banner mt-20 mb-20">
                            <div class="blog-banner-left">
                                <div class="blog-banner-images">
                                    <img class="blog-banner-ellipse-1" src="./img/about-find-ellipse-1.svg" alt="">
                                    <img class="blog-banner-hero" src="./img/blog-banner.png" alt="">
                                    <img class="blog-banner-ellipse-2" src="./img/about-find-ellipse-2.svg" alt="">
                                </div>
                            </div>
                            <div class="blog-banner-content">
                                <img class="blog-banner-img" src="./img/icons/blog-idea.svg" alt="">
                                <p class="blog-banner-title">Ми відкрились!</p>
                                <p class="blog-banner-text">Запрошуємо на нашу нову онлайн-платформу, де Ви можете отримати професійні консультації з <span>медицини</span>, <span>права</span>, <span>фінансів</span> та <span>освіти</span>.</p>

                                <p class="blog-banner-text">Наші фахівці говорять Вашою мовою та готові допомогти саме Вам — швидко, зручно та доступно, де б Ви не були.</p>

                                <ul class="blog-banner-list">
                                    <li>Онлайн</li>
                                    <li>Без черг</li>
                                    <li>З турботою про Вас</li>
                                </ul>

                                <a class="blog-banner-link button-primary mt-20" href="">
                                    <p>Знайти спеціаліста</p>
                                    <img src="./img/icons/details-white.svg" alt="">
                                </a>
                            </div>
                        </div>
                        <ul class="blog-list mt-40">
                            <li class="blog-list-item">
                                <div class="blog-list-content">
                                    <p class="blog-list-title">Як отримати максимум користі від онлайн-консультації з лікарем: інструкція для пацієнтів</p>
                                    <p class="blog-list-text">Практична стаття, яка допоможе користувачам підготуватися до консультації, правильно описати симптоми, підготувати необхідні док</p>
                                    <a class="blog-list-link" href=".blog/:id">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="blog-list-img" src="./img/blog-item-1.png" alt="">
                            </li>
                            <li class="blog-list-item">
                                <div class="blog-list-content">
                                    <p class="blog-list-title">Юридичні питання українців за кордоном: 5 найпоширеніших проблем та їхні рішення</p>
                                    <p class="blog-list-text">Інформативна стаття, яка висвітлює актуальні правові виклики для українців в інших країнах (документи, працевлаштування, податки тощо).</p>
                                    <a class="blog-list-link" href=".blog/:id">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="blog-list-img" src="./img/blog-item-2.png" alt="">
                            </li>
                            <li class="blog-list-item">
                                <div class="blog-list-content">
                                    <p class="blog-list-title">Адаптація за кордоном: психологічні поради для українців на новому місці</p>
                                    <p class="blog-list-text">Корисна стаття з практичними порадами від психологів платформи щодо подолання культурного шоку, будування нового соціального кола, збереження зв'язку з рідною культу</p>
                                    <a class="blog-list-link" href=".blog/:id">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="blog-list-img" src="./img/blog-item-3.png" alt="">
                            </li>
                            <li class="blog-list-item">
                                <div class="blog-list-content">
                                    <p class="blog-list-title">Юридичні питання українців за кордоном: 5 найпоширеніших проблем та їхні рішення</p>
                                    <p class="blog-list-text">Інформативна стаття, яка висвітлює актуальні правові виклики для українців в інших країнах (документи, працевлаштування, податки тощо).</p>
                                    <a class="blog-list-link" href=".blog/:id">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="blog-list-img" src="./img/blog-item-4.png" alt="">
                            </li>
                            <li class="blog-list-item">
                                <div class="blog-list-content">
                                    <p class="blog-list-title">Адаптація за кордоном: психологічні поради для українців на новому місці</p>
                                    <p class="blog-list-text">Корисна стаття з практичними порадами від психологів платформи щодо подолання культурного шоку, будування нового соціального кола, збереження зв'язку з рідною культу</p>
                                    <a class="blog-list-link" href=".blog/:id">
                                        <p>Детальніше</p>
                                    </a>
                                </div>
                                <img class="blog-list-img" src="./img/blog-item-5.png" alt="">
                            </li>
                        </ul>
                        <div class="blog-list-pagination mt-20">
                            <ul class="blog-list-pagination-pages">
                                <li class="blog-list-pagination-page active">1</li>
                                <li class="blog-list-pagination-page">2</li>
                                <li class="blog-list-pagination-page">3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
        const headerContainer = this.container.querySelector('#header-container');
        const header = new Header(headerContainer);
        header.render();
    }
}
