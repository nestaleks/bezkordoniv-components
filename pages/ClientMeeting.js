import { Page } from './Page.js';

export class ClientMeetingPage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--client-meeting-->
             <section class="client-meeting">
                <div class="container">
                    <h4 class="client-meeting-title">Антон Багінський. Перша Консультація</h4>
                    <div class="client-meeting-item">
                        <div class="client-meeting-item-header">
                            <div class="client-meeting-item-date">
                                <img src="./img/icons/calendar-blue.svg" alt="">
                                <p>04.03.2025</p>
                            </div>
                            <div class="client-meeting-item-time">
                                <img src="./img/icons/clock-blue.svg" alt="">
                                <p>9:00</p>
                            </div>
                            <div class="client-meeting-item-location">
                                <img src="./img/icons/location-blue.svg" alt="">
                                <p>Online</p>
                            </div>
                        </div>
                        <div class="client-meeting-item-body">
                            <div class="client-meeting-item-top">
                                <div class="client-meeting-item-expert">
                                    <img class="client-meeting-item-img" src="./img/expert-1.png" alt="">
                                    <div class="client-meeting-item-about">
                                        <p class="client-meeting-item-expert-name">Антон Багінський</p>
                                        <div class="client-meeting-item-expert-speciality">Сімейний лікар</div>
                                    </div>
                                </div>
                                <div class="client-meeting-item-buttons">
                                    <button class="button-secondary">
                                        <p>Відмінити</p>
                                    </button>
                                    <button class="button-secondary">
                                        <img src="./img/icons/video-camera-front.svg" alt="">
                                        <p>Дзвінок</p>
                                    </button>
                                </div>
                                <div class="client-meeting-item-tabs">
                                    <button class="client-meeting-item-tab active" data-tab="info">Інформація</button>
                                    <button class="client-meeting-item-tab" data-tab="chat">Чат</button>
                                </div>
                            </div>
                            <div class="client-meeting-item-content">
                                <div class="client-meeting-item-left active" id="info-tab">
                                    <div class="client-meeting-item-payments">
                                        <div class="client-meeting-item-cost">
                                            <img src="./img/icons/money.svg" alt="">
                                            <p>$100.00</p>
                                        </div>
                                        <button class="client-meeting-item-pay button-primary" data-amount="$100.00" data-service="Консультація" data-modal="paymentModal">
                                            <img src="./img/icons/money-white.svg" alt="">
                                            <p>Сплатити</p>
                                        </button>
                                    </div>
                                    <div class="client-meeting-item-status-box">
                                        <div class="client-meeting-item-status">
                                            <p>статус зустрічі</p>
                                            <img src="./img/icons/waiting.svg" alt="">
                                        </div>
                                        <div class="client-meeting-item-payment-status">
                                            <p>статус оплати</p>
                                            <img src="./img/icons/approoved.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="client-meeting-item-category">
                                        <a class="expert-category-sm" href="">
                                            <div class="">
                                                <p class="categories-list-title">Медицина</p>
                                            </div>
                                            <img class="categories-list-img" src="./img/icons/ctgr-list-med.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="client-meeting-item-experience">
                                        <p class="my-experts-info-title">досвід</p>
                                        <p class="my-experts-info-value">4 роки</p>
                                    </div>
                                    <div class="client-meeting-item-languages">
                                        <p class="my-experts-info-title">мови</p>
                                        <p class="my-experts-info-value">Українська, німецька, англійська</p>
                                    </div>
                                </div>
                                <div class="client-meeting-item-right" id="chat-tab">
                                    <div class="client-meeting-item-files">
                                        <button data-modal="chatFileModal">
                                            <p>Файли</p>
                                            <img src="./img/icons/files.svg" alt="">
                                        </button>
                                    </div>
                                    <div class="client-meeting-chat">
                                        <div class="client-meeting-chat-box">
                                            <div class="client-meeting-chat-message">
                                                <div class="client-meeting-message-img">
                                                    <img src="./img/expert-1.png" alt="">
                                                </div>
                                                <div class="client-meeting-message-content">
                                                    <p class="client-meeting-message-user">Антон Багінський<span>12:15</span></p>
                                                    <p class="client-meeting-message-text">Доброго дня! Перед консультацією прошу підготувати медичну історію, або надіслати документом. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="client-meeting-chat-actions">
                                            <div class="client-meeting-chat-file">
                                                <input type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" multiple>
                                                <div class="client-meeting-file-icon">
                                                    <img src="./img/icons/attach-file.svg" alt="Прикрепить файл">
                                                </div>
                                            </div>
                                            <div class="client-meeting-chat-input-box">
                                                <input class="client-meeting-chat-input" type="text" placeholder="Ваше повідомлення...">
                                                <button type="submit" class="client-meeting-chat-send">
                                                    <img src="./img/icons/send-white.svg" alt="">
                                                </button>
                                            </div>
                                        </div>
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