import { Page } from './Page.js';

export class ClientsPage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--MY EXPERTS-->
            <section class="clients">
                <div class="container">
                    <h4 class="clients-title page-title">Клієнти</h4>
                    <div class="input-container mb-20" style="width: 100%;">
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
                    <!--CLIENTS-->
                    <div class="filters-dropdowns">
                        <button class="show-filters-btn button-contained">
                            <p>Показати фільтри</p>
                        </button>
                        <div class="filters-container">
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <svg width="12.000000" height="14.666504" viewBox="0 0 12 14.6665" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector (Stroke)" d="M6 1.33C4.76 1.33 3.57 1.82 2.7 2.7C1.82 3.57 1.33 4.76 1.33 6C1.33 7.43 2.14 8.99 3.19 10.37C4.21 11.71 5.38 12.79 6 13.33C6.61 12.79 7.78 11.71 8.8 10.37C9.85 8.99 10.66 7.43 10.66 6C10.66 4.76 10.17 3.57 9.29 2.7C8.42 1.82 7.23 1.33 6 1.33ZM1.75 1.75C2.88 0.63 4.4 0 6 0C7.59 0 9.11 0.63 10.24 1.75C11.36 2.88 12 4.4 12 6C12 7.88 10.96 9.73 9.86 11.18C8.74 12.65 7.47 13.82 6.83 14.37C6.82 14.38 6.81 14.38 6.8 14.39C6.57 14.57 6.28 14.66 6 14.66C5.71 14.66 5.42 14.57 5.19 14.39C5.18 14.38 5.17 14.38 5.16 14.37C4.52 13.82 3.25 12.65 2.13 11.18C1.03 9.73 0 7.88 0 6C0 4.4 0.63 2.88 1.75 1.75ZM6 4.66C5.26 4.66 4.66 5.26 4.66 6C4.66 6.73 5.26 7.33 6 7.33C6.73 7.33 7.33 6.73 7.33 6C7.33 5.26 6.73 4.66 6 4.66ZM3.33 6C3.33 4.52 4.52 3.33 6 3.33C7.47 3.33 8.66 4.52 8.66 6C8.66 7.47 7.47 8.66 6 8.66C4.52 8.66 3.33 7.47 3.33 6Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd"/>
                                    </svg>
                                    <p class="dropbtn-text">Країна</p>
                                    <img class="dropbtn-img-default" src="./img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Німеччина</a>
                                    <a href="#">Польща</a>
                                    <a href="#">Чехія</a>
                                    <a href="#">Франція</a>
                                    <a href="#">Італія</a>
                                    <a href="#">Іспанія</a>
                                </div>
                            </div>
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <svg width="14.000000" height="14.000000" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M10.33 8.33L10.33 8.33M3.66 3.66L11.66 3.66C12.02 3.66 12.35 3.8 12.6 4.05C12.85 4.3 13 4.64 13 5L13 11.66C13 12.02 12.85 12.35 12.6 12.6C12.35 12.85 12.02 13 11.66 13L2.33 13C1.97 13 1.64 12.85 1.39 12.6C1.14 12.35 1 12.02 1 11.66L1 2.33C1 1.97 1.14 1.64 1.39 1.39C1.64 1.14 1.97 1 2.33 1L11.66 1" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                    <p class="dropbtn-text">Вартість</p>
                                    <img class="dropbtn-img-default" src="./img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">до 25€</a>
                                    <a href="#">25-50€</a>
                                    <a href="#">від 50€</a>
                                    <a href="#">до 100€</a>
                                    <a href="#">100-200€</a>
                                    <a href="#">від 200€</a>
                                </div>
                            </div>
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <svg width="10.000000" height="15.333130" viewBox="0 0 10 15.3331" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M7.31 8.25L8.32 13.94C8.33 14.01 8.33 14.07 8.3 14.14C8.27 14.2 8.22 14.25 8.16 14.28C8.1 14.32 8.04 14.33 7.97 14.33C7.9 14.32 7.84 14.3 7.78 14.25L5.4 12.46C5.28 12.37 5.14 12.33 5 12.33C4.85 12.33 4.71 12.37 4.6 12.46L2.21 14.25C2.16 14.29 2.09 14.32 2.02 14.33C1.96 14.33 1.89 14.32 1.83 14.28C1.77 14.25 1.72 14.2 1.7 14.14C1.67 14.07 1.66 14.01 1.67 13.94L2.68 8.25M5 9C2.79 9 1 7.2 1 5C1 2.79 2.79 1 5 1C7.2 1 9 2.79 9 5C9 7.2 7.2 9 5 9Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                    <p class="dropbtn-text">Вік</p>
                                    <img class="dropbtn-img-default" src="./img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">до 35</a>
                                    <a href="#">35-50</a>
                                    <a href="#">від 50</a>
                                    <a href="#">до 25</a>
                                    <a href="#">25-40</a>
                                    <a href="#">від 40</a>
                                </div>
                            </div>
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <svg width="15.335938" height="15.336334" viewBox="0 0 15.3359 15.3363" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M3 5L7 9M2.33 9L6.33 5L7.66 3M1 3L9 3M4.33 1L5 1M14.33 14.33L11 7.66L7.66 14.33M9 11.66L13 11.66" stroke="#000000" stroke-opacity="0.500000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                    <p class="dropbtn-text">Мова</p>
                                    <img class="dropbtn-img-default" src="./img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Українська</a>
                                    <a href="#">Англійська</a>
                                    <a href="#">Німецька</a>
                                    <a href="#">Французька</a>
                                    <a href="#">Іспанська</a>
                                    <a href="#">Італійська</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Clients list-->
                    <ul class="clients-list">
                        <li class="clients-card">
                            <div class="clients-content">
                                <img class="clients-img" src="./img/expert-7.png" alt="">
                                <a class="clients-name" href="./client-page.html">Константин Вакуленко</a>
                                <div class="clients-data">
                                    <div class="clients-appoints highlight-pill">
                                        <img src="./img/icons/clients.svg" alt="">
                                        <p>12 <span>консультацій</span></p>
                                    </div>
                                    <a class="clients-country highlight-pill" href="#">Німеччина</a>
                                    <div class="clients-age highlight-pill">
                                        <img src="./img/icons/age.svg" alt="">
                                        <p>24 <span>роки</span></p>
                                    </div>
                                    <div class="clients-mail highlight-pill">
                                        <img src="./img/icons/mail.svg" alt="">
                                        <p>emailexm@gmail.com</p>
                                    </div>
                                    <div class="clients-phone highlight-pill">
                                        <img src="./img/icons/phone.svg" alt="">
                                        <p>+49 123 4567 2100</p>
                                    </div>
                                    <div class="clients-language highlight-pill">
                                        <img src="./img/icons/translator-black.svg" alt="">
                                        <p>Українська</p>
                                    </div>
                                </div>
                                <button class="clients-dots">
                                    <img src="./img/icons/dots.svg" alt="">
                                </button>
                            </div>
                            <div class="clients-buttons">
                                <button class="clients-new-appointment button-primary">
                                    <p>Налаштувати Записи</p>
                                </button>
                                <button class="clients-write-message button-secondary">
                                    <p>Звʼязатись</p>
                                </button>
                                <button class="clients-call button-secondary">
                                    <p>Дзвінок</p>
                                </button>
                            </div>
                        </li>
                        <li class="clients-card">
                            <div class="clients-content">
                                <img class="clients-img" src="./img/expert-8.png" alt="">
                                <a class="clients-name" href="./client-page.html">Карина Мартиненко</a>
                                <div class="clients-data">
                                    <div class="clients-appoints highlight-pill">
                                        <img src="./img/icons/clients.svg" alt="">
                                        <p>12 <span>консультацій</span></p>
                                    </div>
                                    <a class="clients-country highlight-pill" href="#">Німеччина</a>
                                    <div class="clients-age highlight-pill">
                                        <img src="./img/icons/age.svg" alt="">
                                        <p>24 <span>роки</span></p>
                                    </div>
                                    <div class="clients-mail highlight-pill">
                                        <img src="./img/icons/mail.svg" alt="">
                                        <p>emailexm@gmail.com</p>
                                    </div>
                                    <div class="clients-phone highlight-pill">
                                        <img src="./img/icons/phone.svg" alt="">
                                        <p>+49 123 4567 2100</p>
                                    </div>
                                    <div class="clients-language highlight-pill">
                                        <img src="./img/icons/translator-black.svg" alt="">
                                        <p>Українська</p>
                                    </div>
                                </div>
                                <button class="clients-dots">
                                    <img src="./img/icons/dots.svg" alt="">
                                </button>
                            </div>
                            <div class="clients-buttons">
                                <button class="clients-new-appointment button-primary">
                                    <p>Налаштувати Записи</p>
                                </button>
                                <button class="clients-write-message button-secondary">
                                    <p>Звʼязатись</p>
                                </button>
                                <button class="clients-call button-secondary">
                                    <p>Дзвінок</p>
                                </button>
                            </div>
                        </li>
                        <li class="clients-card">
                            <div class="clients-content">
                                <img class="clients-img" src="./img/expert-9.png" alt="">
                                <a class="clients-name" href="./client-page.html">Іванна Поліщук</a>
                                <div class="clients-data">
                                    <div class="clients-appoints highlight-pill">
                                        <img src="./img/icons/clients.svg" alt="">
                                        <p>12 <span>консультацій</span></p>
                                    </div>
                                    <a class="clients-country highlight-pill" href="#">Німеччина</a>
                                    <div class="clients-age highlight-pill">
                                        <img src="./img/icons/age.svg" alt="">
                                        <p>24 <span>роки</span></p>
                                    </div>
                                    <div class="clients-mail highlight-pill">
                                        <img src="./img/icons/mail.svg" alt="">
                                        <p>emailexm@gmail.com</p>
                                    </div>
                                    <div class="clients-phone highlight-pill">
                                        <img src="./img/icons/phone.svg" alt="">
                                        <p>+49 123 4567 2100</p>
                                    </div>
                                    <div class="clients-language highlight-pill">
                                        <img src="./img/icons/translator-black.svg" alt="">
                                        <p>Українська</p>
                                    </div>
                                </div>
                                <button class="clients-dots">
                                    <img src="./img/icons/dots.svg" alt="">
                                </button>
                            </div>
                            <div class="clients-buttons">
                                <button class="clients-new-appointment button-primary">
                                    <p>Налаштувати Записи</p>
                                </button>
                                <button class="clients-write-message button-secondary">
                                    <p>Звʼязатись</p>
                                </button>
                                <button class="clients-call button-secondary">
                                    <p>Дзвінок</p>
                                </button>
                            </div>
                        </li>
                        <li class="clients-card">
                            <div class="clients-content">
                                <img class="clients-img" src="./img/expert-10.png" alt="">
                                <a class="clients-name" href="./client-page.html">Остап Шевченко</a>
                                <div class="clients-data">
                                    <div class="clients-appoints highlight-pill">
                                        <img src="./img/icons/clients.svg" alt="">
                                        <p>12 <span>консультацій</span></p>
                                    </div>
                                    <a class="clients-country highlight-pill" href="#">Німеччина</a>
                                    <div class="clients-age highlight-pill">
                                        <img src="./img/icons/age.svg" alt="">
                                        <p>24 <span>роки</span></p>
                                    </div>
                                    <div class="clients-mail highlight-pill">
                                        <img src="./img/icons/mail.svg" alt="">
                                        <p>emailexm@gmail.com</p>
                                    </div>
                                    <div class="clients-phone highlight-pill">
                                        <img src="./img/icons/phone.svg" alt="">
                                        <p>+49 123 4567 2100</p>
                                    </div>
                                    <div class="clients-language highlight-pill">
                                        <img src="./img/icons/translator-black.svg" alt="">
                                        <p>Українська</p>
                                    </div>
                                </div>
                                <button class="clients-dots">
                                    <img src="./img/icons/dots.svg" alt="">
                                </button>
                            </div>
                            <div class="clients-buttons">
                                <button class="clients-new-appointment button-primary">
                                    <p>Налаштувати Записи</p>
                                </button>
                                <button class="clients-write-message button-secondary">
                                    <p>Звʼязатись</p>
                                </button>
                                <button class="clients-call button-secondary">
                                    <p>Дзвінок</p>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        `;
        const headerContainer = this.container.querySelector('#header-container');
        const header = new Header(headerContainer);
        header.render();
    }
}