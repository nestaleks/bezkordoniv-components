import { Page } from './Page.js';

export class ExpertMeetingPage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--expert-meeting-->
            <section class="expert-meeting">
                <div class="container">
                    <div class="to-prev-page">
                        <div class="container">
                            <a class="prev-page-btn" href="">
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Назад</p>
                            </a>
                        </div>
                    </div>
                    <div class="expert-meeting-item">
                        <div class="expert-meeting-content">
                            <a href="./expert-meeting.html" class="meetings-card-header">
                                <div class="meetings-card-img">
                                    <img src="./img/icons/calendar-yellow.svg" alt="">
                                </div>
                                <div class="meetings-card-details">
                                    <p class="meetings-card-title">Плановий візит</p>
                                    <div class="meetings-card-pills">
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
                                        <div class="meetings-card-price">
                                            <p class="meetings-card-price-value my-experts-price">25.00€</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div class="expert-meeting-card">
                                <div class="expert-meeting-img">
                                    <img src="./img/expert-7.png" alt="">
                                </div>
                                <div class="expert-meeting-box">
                                    <a class="expert-meeting-name" href="./client-page.html">Константин Вакуленко</a>
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
                                </div>
                            </div>
                            <div class="meetings-card-statuses">
                                <div class="client-history-status">
                                    <p>статус зустрічі</p>
                                    <img src="./img/icons/waiting.svg" alt="">
                                </div>
                                <div class="client-history-payment-status">
                                    <p>статус оплати</p>
                                    <img src="./img/icons/approoved.svg" alt="">
                                </div>
                            </div>
                            <div class="meetings-card-notes">
                                <div class="meetings-card-notes-inner">
                                    <p class="meetings-card-notes-title">Нотатки</p>
                                    <p class="meetings-card-notes-text">Додайте нотатки до вашої зустрічі</p>
                                    <div class="meetings-card-notes-list">
                                        <div class="meetings-card-notes-item">
                                            <div class="meetings-card-notes-box">
                                                <p>12:24</p>
                                                <p>Червень 2019 - початок практики</p>
                                            </div>
                                            <div class="meetings-card-notes-button">
                                                <img src="./img/icons/close.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="meetings-card-notes-item">
                                            <div class="meetings-card-notes-box">
                                                <p>12:12</p>
                                                <p>Отримання магістратури - 12.06.2019</p>
                                            </div>
                                            <div class="meetings-card-notes-button">
                                                <img src="./img/icons/close.svg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="expert-meeting-chat">
                            <div class="expert-meeting-chat-inner">
                                <div class="expert-meeting-chat-box">
                                    <div class="meetings-card-files" style="border-bottom: none;">
                                        <button data-modal="chatFileModal">
                                            <p>Файли: <span>0</span></p>
                                            <img src="./img/icons/files.svg" alt="">
                                        </button>
                                    </div>
                                    <div class="expert-meeting-messages">
                                        <div class="expert-meeting-chat-message message-from-client">
                                            <div class="expert-meeting-message-img">
                                                <img src="./img/expert-1.png" alt="">
                                            </div>
                                            <div class="expert-meeting-message-content">
                                                <p class="expert-meeting-message-user">Антон Багінський<span>12:15</span></p>
                                                <p class="expert-meeting-message-text">Перепрошую за спізнення</p>
                                                <img class="message-status" src="./img/icons/message-read.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="expert-meeting-chat-message message-from-expert">
                                            <div class="expert-meeting-message-content">
                                                <p class="expert-meeting-message-user">Ви<span>12:15</span></p>
                                                <p class="expert-meeting-message-text">Доброго дня! В вас вимкнено мікрофон</p>
                                                <img class="message-status" src="./img/icons/message-read.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="expert-meeting-chat-message message-from-client">
                                            <div class="expert-meeting-message-img">
                                                <img src="./img/expert-1.png" alt="">
                                            </div>
                                            <div class="expert-meeting-message-content">
                                                <p class="expert-meeting-message-user">Антон Багінський<span>12:15</span></p>
                                                <p class="expert-meeting-message-text">Я перевірю налаштування</p>
                                                <img class="message-status" src="./img/icons/message-delivered.svg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="expert-meeting-chat-actions">
                                    <div class="expert-meeting-chat-file">
                                        <input type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" multiple>
                                        <div class="expert-meeting-file-icon">
                                            <img src="./img/icons/attach-file.svg" alt="Прикрепить файл">
                                        </div>
                                    </div>
                                    <div class="expert-meeting-chat-input-box">
                                        <input class="expert-meeting-chat-input" type="text" placeholder="Ваше повідомлення...">
                                        <button type="submit" class="expert-meeting-chat-send">
                                            <img src="./img/icons/send-white.svg" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
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