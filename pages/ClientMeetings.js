import { Page } from './Page.js';

export class ClientMeetingsPage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--MY client-meetings-->
            <section class="client-meetings">
                <div class="container">
                    <h4 class="client-meetings-title mb-20">Мої Зустрічі</h4>
                    <div class="tabs">
                        <div class="tabs-inner">
                            <button class="tabs-item client-meetings-tabs-all">
                                <p>Всі</p>
                            </button>
                            <button class="tabs-item client-meetings-tabs-current">
                                <p>Поточні</p>
                            </button>
                            <button class="tabs-item client-meetings-tabs-history">
                                <p>Історія</p>
                            </button>
                        </div>
                    </div>
                    <div class="filters-dropdowns">
                        <button class="show-filters-btn button-contained">
                            <p>Показати фільтри</p>
                        </button>
                        <div class="filters-container">
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <svg width="14.000000" height="14.000000" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M11.66 1C12.4 1 13 1.59 13 2.33L13 11.66C13 12.4 12.4 13 11.66 13L2.33 13C1.59 13 1 12.4 1 11.66L1 2.33C1 1.59 1.59 1 2.33 1L11.66 1ZM1 7L13 7M7 1L7 13" stroke="#000000" stroke-opacity="0.500000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                    <p class="dropbtn-text">Категорія</p>
                                    <img class="dropbtn-img-default" src="./img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#" data-value="medicine">Медицина</a>
                                    <a href="#" data-value="law">Право</a>
                                    <a href="#" data-value="finance">Фінанси</a>
                                    <a href="#" data-value="design">Дизайн</a>
                                    <a href="#" data-value="tech">Технічні спеціальності</a>
                                    <a href="#" data-value="education">Освіта</a>
                                </div>
                            </div>
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <svg width="15.340332" height="14.000000" viewBox="0 0 15.3403 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M7.66 7.66L7.67 7.66M10.33 3.66L10.33 2.33C10.33 1.97 10.19 1.64 9.94 1.39C9.69 1.14 9.35 1 9 1L6.33 1C5.98 1 5.64 1.14 5.39 1.39C5.14 1.64 5 1.97 5 2.33L5 3.66M14.33 8.33C12.35 9.63 10.04 10.33 7.66 10.33C5.29 10.33 2.98 9.63 1 8.33M13 3.66C13.73 3.66 14.33 4.26 14.33 5L14.33 11.66C14.33 12.4 13.73 13 13 13L2.33 13C1.6 13 1 12.4 1 11.66L1 5C1 4.26 1.6 3.66 2.33 3.66L13 3.66Z" stroke="#000000" stroke-opacity="0.500000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                    <p class="dropbtn-text">Спеціальність</p>
                                    <img class="dropbtn-img-default" src="./img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Сімейний лікар</a>
                                    <a href="#">Адвокат</a>
                                    <a href="#">Фінансовий консультант</a>
                                    <a href="#">UX/UI дизайнер</a>
                                    <a href="#">Frontend розробник</a>
                                    <a href="#">Викладач</a>
                                </div>
                            </div>
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
                                    <svg width="15.336914" height="14.714935" viewBox="0 0 15.3369 14.7149" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M7.48 1.05C7.53 1.01 7.6 1 7.66 1C7.73 1 7.79 1.01 7.85 1.05C7.91 1.08 7.95 1.13 7.98 1.19L9.52 4.31C9.62 4.52 9.77 4.69 9.96 4.83C10.14 4.96 10.36 5.05 10.58 5.08L14.03 5.59C14.09 5.6 14.15 5.63 14.21 5.67C14.26 5.71 14.29 5.77 14.31 5.83C14.33 5.89 14.34 5.96 14.32 6.02C14.3 6.09 14.27 6.14 14.22 6.19L11.73 8.62C11.57 8.78 11.45 8.97 11.38 9.19C11.3 9.41 11.29 9.64 11.33 9.87L11.91 13.29C11.93 13.36 11.92 13.43 11.89 13.49C11.87 13.55 11.83 13.6 11.77 13.64C11.72 13.68 11.66 13.7 11.59 13.71C11.52 13.71 11.46 13.7 11.4 13.67L8.32 12.05C8.12 11.94 7.89 11.89 7.66 11.89C7.43 11.89 7.21 11.94 7.01 12.05L3.93 13.67C3.87 13.7 3.8 13.71 3.74 13.71C3.67 13.7 3.61 13.68 3.55 13.64C3.5 13.6 3.46 13.55 3.44 13.49C3.41 13.43 3.4 13.36 3.41 13.29L4 9.87C4.04 9.64 4.02 9.41 3.95 9.19C3.88 8.97 3.76 8.78 3.59 8.62L1.1 6.19C1.06 6.15 1.02 6.09 1.01 6.02C0.99 5.96 0.99 5.89 1.01 5.83C1.03 5.77 1.07 5.71 1.12 5.67C1.17 5.62 1.23 5.6 1.3 5.59L4.74 5.08C4.97 5.05 5.19 4.96 5.37 4.83C5.56 4.69 5.71 4.52 5.81 4.31L7.35 1.19C7.38 1.13 7.42 1.08 7.48 1.05Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                                    </svg>
                                    <p class="dropbtn-text">Рейтинг</p>
                                    <img class="dropbtn-img-default" src="./img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">від 4.5</a>
                                    <a href="#">від 4.0</a>
                                    <a href="#">від 3.5</a>
                                    <a href="#">від 5.0</a>
                                    <a href="#">від 4.8</a>
                                    <a href="#">від 4.2</a>
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
                    <div class="input-container" style="width: 100%;">
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
                    <ul class="client-meetings-list mt-20 mb-20">
                        <li class="client-meetings-item">
                            <div class="client-meetings-item-header">
                                <div class="client-meetings-item-date">
                                    <img src="./img/icons/calendar-blue.svg" alt="">
                                    <p>04.03.2025</p>
                                </div>
                                <div class="client-meetings-item-time">
                                    <img src="./img/icons/clock-blue.svg" alt="">
                                    <p>9:00</p>
                                </div>
                                <div class="client-meetings-item-location">
                                    <img src="./img/icons/location-blue.svg" alt="">
                                    <p>Online</p>
                                </div>
                            </div>
                            <div class="client-meetings-item-body">
                                <div class="client-meetings-item-info">
                                    <a href="./client-meeting.html" class="client-meetings-item-expert">
                                        <img class="client-meetings-item-img" src="./img/expert-1.png" alt="">
                                        <div class="client-meetings-item-about">
                                            <p class="client-meetings-item-expert-name">Антон Багінський. Перша Консультація</p>
                                            <div class="client-meetings-item-expert-speciality">Сімейний лікар</div>
                                        </div>
                                    </a>
                                    <div class="client-meetings-item-payments">
                                        <div class="client-meetings-item-cost">
                                            <img src="./img/icons/money.svg" alt="">
                                            <p>$100.00</p>
                                        </div>
                                        <button class="client-meetings-item-pay button-primary" data-amount="$100.00" data-service="Консультація" data-modal="payment">
                                            <img src="./img/icons/money-white.svg" alt="">
                                            <p>Сплатити</p>
                                        </button>
                                    </div>
                                </div>
                                <div class="client-meetings-item-status-box">
                                    <div class="client-meetings-item-status">
                                        <p>статус зустрічі</p>
                                        <img src="./img/icons/waiting.svg" alt="">
                                    </div>
                                    <div class="client-meetings-item-payment-status">
                                        <p>статус оплати</p>
                                        <img src="./img/icons/approoved.svg" alt="">
                                    </div>
                                </div>
                                <div class="client-meetings-item-buttons">
                                    <button class="button-secondary">
                                        <p>Відмінити</p>
                                    </button>
                                    <button class="button-secondary">
                                        <img src="./img/icons/video-camera-front.svg" alt="">
                                        <p>Дзвінок</p>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="client-meetings-item">
                            <div class="client-meetings-item-header">
                                <div class="client-meetings-item-date">
                                    <img src="./img/icons/calendar-blue.svg" alt="">
                                    <p>24.03.2025</p>
                                </div>
                                <div class="client-meetings-item-time">
                                    <img src="./img/icons/clock-blue.svg" alt="">
                                    <p>15:45</p>
                                </div>
                                <div class="client-meetings-item-location">
                                    <img src="./img/icons/location-blue.svg" alt="">
                                    <p>Alte Elbgaustraße 14</p>
                                </div>
                            </div>
                            <div class="client-meetings-item-body">
                                <div class="client-meetings-item-info">
                                    <div class="client-meetings-item-expert">
                                        <img class="client-meetings-item-img" src="./img/expert-3.png" alt="">
                                        <div class="client-meetings-item-about">
                                            <p class="client-meetings-item-expert-name">Марта Скандинавська. Пломбування</p>
                                            <div class="client-meetings-item-expert-speciality">Дантист</div>
                                        </div>
                                    </div>
                                    <div class="client-meetings-item-payments">
                                        <div class="client-meetings-item-cost">
                                            <img src="./img/icons/money.svg" alt="">
                                            <p>$100.00</p>
                                        </div>
                                        <button class="client-meetings-item-pay button-primary" data-amount="$100.00" data-service="Пломбування" data-modal="payment">
                                            <img src="./img/icons/money-white.svg" alt="">
                                            <p>Сплатити</p>
                                        </button>
                                    </div>
                                </div>
                                <div class="client-meetings-item-status-box">
                                    <div class="client-meetings-item-status">
                                        <p>статус зустрічі</p>
                                        <img src="./img/icons/waiting.svg" alt="">
                                    </div>
                                    <div class="client-meetings-item-payment-status">
                                        <p>статус оплати</p>
                                        <img src="./img/icons/approoved.svg" alt="">
                                    </div>
                                </div>
                                <div class="client-meetings-item-buttons">
                                    <button class="button-secondary">
                                        <p>Відмінити</p>
                                    </button>
                                    <button class="button-secondary">
                                        <img src="./img/icons/video-camera-front.svg" alt="">
                                        <p>Дзвінок</p>
                                    </button>
                                </div>
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