import { Page } from './Page.js';

export class ClientPage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--MY EXPERTS-->
            <section class="client-page">
                <div class="container">
                    <h4 class="client-page-title page-title">Ім'я Кліента</h4>
                    <!--CLIENT-->
                    <div class="client-box">
                        <div class="client-card">
                            <div class="client-content">
                                <div class="client-img">
                                    <img src="./img/expert-7.png" alt="">
                                </div>
                                <div class="client-info">
                                    <a class="client-name" href="./client-page.html">Константин Вакуленко</a>
                                    <div class="client-data">
                                        <div class="client-appoints highlight-pill">
                                            <img src="./img/icons/clients.svg" alt="">
                                            <p>12 <span>консультацій</span></p>
                                        </div>
                                        <a class="client-country highlight-pill" href="#">Німеччина</a>
                                        <div class="client-age highlight-pill">
                                            <img src="./img/icons/age.svg" alt="">
                                            <p>24 <span>роки</span></p>
                                        </div>
                                        <div class="client-mail highlight-pill">
                                            <img src="./img/icons/mail.svg" alt="">
                                            <p>emailexm@gmail.com</p>
                                        </div>
                                        <div class="client-phone highlight-pill">
                                            <img src="./img/icons/phone.svg" alt="">
                                            <p>+49 123 4567 2100</p>
                                        </div>
                                        <div class="client-language highlight-pill">
                                            <img src="./img/icons/translator-black.svg" alt="">
                                            <p>Українська</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="client-buttons">
                                <button class="client-new-appointment button-primary">
                                    <p>Налаштувати Записи</p>
                                </button>
                                <button class="client-write-message button-secondary">
                                    <p>Звʼязатись</p>
                                </button>
                                <button class="client-call button-secondary">
                                    <p>Дзвінок</p>
                                </button>
                            </div>
                        </div>
                        <div class="client-tabs tabs">
                            <div class="tabs-inner">
                                <button class="client-tabs-main tabs-item active">
                                    <p>Загальна Інформація</p>
                                </button>
                                <button class="client-tabs-history tabs-item">
                                    <p>Історія Зустрічей</p>
                                </button>
                            </div>
                        </div>
                        <div class="client-main-info">
                            <div class="client-languages">
                                <p class="client-info-title">статус зустрічі</p>
                                <div class="client-languages-pills">
                                    <p class="highlight-pill">Українська</p>
                                    <p class="highlight-pill">Англійська</p>
                                    <p class="highlight-pill">Німецька</p>
                                </div>
                            </div>
                            <div class="client-registration">
                                <p class="client-info-title">реєстрація</p>
                                <div class="client-registration-data">
                                    <img src="./img/icons/time-green.svg" alt="">
                                    <p>2025-01-01</p>
                                    <img src="./img/icons/info.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="client-history hidden">
                            <ul class="client-history-list">
                                <li class="client-history-card">
                                    <a href="" class="client-history-header">
                                        <div class="client-history-img">
                                            <img src="./img/icons/calendar-yellow.svg" alt="">
                                        </div>
                                        <div class="client-history-details">
                                            <p class="client-history-title">Плановий візит</p>
                                            <div class="client-history-pills">
                                                <div class="highlight-pill">
                                                    <img src="./img/icons/calendar-black.svg" alt="">
                                                    <p>Вів, 28 Січня, 14:30</p>
                                                </div>
                                                <div class="highlight-pill">
                                                    <img src="./img/icons/target.svg" alt="">
                                                    <p>Онлайн</p>
                                                </div>
                                                <div class="highlight-pill">
                                                    <img src="./img/icons/time.svg" alt="">
                                                    <p>45 хвилин</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="client-history-content">
                                        <div class="client-history-status">
                                            <p>статус зустрічі</p>
                                            <img src="./img/icons/waiting.svg" alt="">
                                        </div>
                                        <div class="client-history-payment-status">
                                            <p>статус оплати</p>
                                            <img src="./img/icons/approoved.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="client-history-files">
                                        <button>
                                            <p>Файли: <span>0</span></p>
                                            <img src="./img/icons/files.svg" alt="">
                                        </button>
                                    </div>
                                </li>
                                <li class="client-history-card">
                                    <a href="" class="client-history-header">
                                        <div class="client-history-img">
                                            <img src="./img/icons/calendar-yellow.svg" alt="">
                                        </div>
                                        <div class="client-history-details">
                                            <p class="client-history-title">Плановий візит</p>
                                            <div class="client-history-pills">
                                                <div class="highlight-pill">
                                                    <img src="./img/icons/calendar-black.svg" alt="">
                                                    <p>Вів, 28 Січня, 14:30</p>
                                                </div>
                                                <div class="highlight-pill">
                                                    <img src="./img/icons/target.svg" alt="">
                                                    <p>Онлайн</p>
                                                </div>
                                                <div class="highlight-pill">
                                                    <img src="./img/icons/time.svg" alt="">
                                                    <p>45 хвилин</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="client-history-content">
                                        <div class="client-history-status">
                                            <p>статус зустрічі</p>
                                            <img src="./img/icons/waiting.svg" alt="">
                                        </div>
                                        <div class="client-history-payment-status">
                                            <p>статус оплати</p>
                                            <img src="./img/icons/Denied.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="client-history-files">
                                        <button>
                                            <p>Файли: <span>2</span></p>
                                            <img src="./img/icons/files.svg" alt="">
                                        </button>
                                    </div>
                                </li>
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