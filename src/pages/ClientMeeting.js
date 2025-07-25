// Компонент ClientMeeting - окрема зустріч клієнта
const ClientMeeting = (props = {}) => {
    return `
        <main class="main">
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--client-meeting-->
             <section class="client-meeting">
                <div class="container">
                    <h4 class="client-meeting-title mb-20">Антон Багінський. Перша Консультація</h4>
                    <div class="client-meeting-item">
                        <div class="client-meeting-item-header">
                            <div class="client-meeting-item-date">
                                <img src="./src/img/icons/calendar-blue.svg" alt="">
                                <p>04.03.2025</p>
                            </div>
                            <div class="client-meeting-item-time">
                                <img src="./src/img/icons/clock-blue.svg" alt="">
                                <p>9:00</p>
                            </div>
                            <div class="client-meeting-item-location">
                                <img src="./src/img/icons/location-blue.svg" alt="">
                                <p>Online</p>
                            </div>
                        </div>
                        <div class="client-meeting-item-body">
                            <div class="client-meeting-item-top">
                                <div class="client-meeting-item-expert">
                                    <img class="client-meeting-item-img" src="./src/img/expert-1.png" alt="">
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
                                        <img src="./src/img/icons/video-camera-front.svg" alt="">
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
                                            <img src="./src/img/icons/money.svg" alt="">
                                            <p>$100.00</p>
                                        </div>
                                        <button class="client-meeting-item-pay button-primary" data-amount="$100.00" data-service="Консультація" data-modal="paymentModal">
                                            <img src="./src/img/icons/money-white.svg" alt="">
                                            <p>Сплатити</p>
                                        </button>
                                    </div>
                                    <div class="client-meeting-item-status-box">
                                        <div class="client-meeting-item-status">
                                            <p>статус зустрічі</p>
                                            <img src="./src/img/icons/waiting.svg" alt="">
                                        </div>
                                        <div class="client-meeting-item-payment-status">
                                            <p>статус оплати</p>
                                            <img src="./src/img/icons/approoved.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="client-meeting-item-category">
                                        <a class="expert-category-sm" href="">
                                            <div class="">
                                                <p class="categories-list-title">Медицина</p>
                                            </div>
                                            <img class="categories-list-img" src="./src/img/icons/ctgr-list-med.svg" alt="">
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
                                            <img src="./src/img/icons/files.svg" alt="">
                                        </button>
                                    </div>
                                    <div class="client-meeting-chat">
                                        <div class="client-meeting-chat-box">
                                            <div class="client-meeting-chat-message mb-20">
                                                <div class="client-meeting-message-img">
                                                    <img src="./src/img/expert-1.png" alt="">
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
                                                    <img src="./src/img/icons/attach-file.svg" alt="Прикрепить файл">
                                                </div>
                                            </div>
                                            <div class="client-meeting-chat-input-box">
                                                <input class="client-meeting-chat-input" type="text" placeholder="Ваше повідомлення...">
                                                <button type="submit" class="client-meeting-chat-send">
                                                    <img src="./src/img/icons/send-white.svg" alt="">
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
            <!-- modal payment window -->
            <div class="modal payment-modal" id="paymentModal">
                <div class="modal-content payment-modal-content">
                    <div class="modal-window-close">
                        <img src="./src/img/icons/close.svg" alt="">
                    </div>
                    <div class="payment-modal-method">
                        <div class="payment-modal-balance">
                            <div class="payment-balance-info">
                                <img src="./src/img/icons/money-blue.svg" alt="">
                                <div class="payment-balance-text">
                                    <p>доступний баланс</p>
                                    <p>$120.00</p>
                                </div>
                                <input class="payment-balance-choose" type="radio">
                            </div>
                            <div class="payment-balance-available">
                                <div class="payment-balance-item">
                                    <p>Весь: </p>
                                    <p>$240.00</p>
                                </div>
                                <div class="payment-balance-item">
                                    <p>Зарезервований: </p>
                                    <p>$120.00</p>
                                </div>
                                <div class="payment-balance-item">
                                    <p>Доступний: </p>
                                    <p>$120.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="payment-modal-card" data-modal="payment-modal-newcard">
                            <p>Оплатити з кредитної або дебютної картки</p>
                        </div>
                    </div>
                    <div class="payment-modals-buttons">
                        <button class="payment-modal-button button-secondary" id="paymentModalClose">
                            <p>Відмінити</p>
                        </button>
                        <button class="payment-modal-button button-primary" id="paymentModalPay">
                            <p>Продовжити</p>
                        </button>
                    </div>
                </div>
                <div class="modal payment-modal-newcard" id="payment-modal-newcard" style="display: none;">
                    <div class="modal-content">
                        <div class="modal-window-close">
                        <img src="./src/img/icons/close.svg" alt="">
                    </div>
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
                    <div class="modal-header">
                        <p class="subtitle-2">Введіть деталі картки</p>
                    </div>
                    <div class="payment-modal-card-info">
                        <div class="card-info">
                            <input type="text" placeholder="Номер картки" class="card-input card-number" maxlength="19">
                            <p class="form-undertext">Номер картки</p>
                        </div>
                        <div class="card-info-row">
                            <div class="card-info">
                                <input type="text" placeholder="Термін дії картки" class="card-input card-date" maxlength="5">
                                <p class="form-undertext">Термін дії картки</p>
                            </div>
                            <div class="card-info">
                                <input type="text" placeholder="CVV код" class="card-input card-cvv" maxlength="3">
                                <p class="form-undertext">CVV код</p>
                            </div>
                        </div>
                        <div class="card-info">
                            <input type="text" placeholder="Імʼя власника картки" class="card-input">
                            <p class="form-undertext">Імʼя власника картки</p>
                        </div>
                    </div>
                    <div class="payment-modals-buttons">
                        <button class="payment-modal-button button-secondary" id="paymentModalClose">
                            <p>Відмінити</p>
                        </button>
                        <button class="payment-modal-button button-primary" id="paymentModalPay">
                            <p>Продовжити</p>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <!-- modal chat files window -->
            <div class="modal modal-chat-files" id="chatFileModal">
                <div class="modal-content modal-chat-files-content">
                    <div class="modal-window-close">
                        <img src="./src/img/icons/close.svg" alt="">
                    </div>
                    <div class="modal-header modal-chat-files-header">
                        <div class="tabs">
                            <div class="tabs-inner">
                                <button class="tabs-item chat-files-tabs-media active">
                                    <p>Медіа</p>
                                </button>
                                <button class="tabs-item chat-files-tabs-links">
                                    <p>Посилання</p>
                                </button>
                                <button class="tabs-item chat-files-tabs-documents">
                                    <p>Документи</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body modal-chat-files-body">
                        <!-- Media Content (Active by default) -->
                        <div class="modal-tab-content modal-files-media active">
                            <div class="modal-file-choose">
                                <button>
                                    <p>Обрати</p>
                                </button>
                            </div>
                            <div class="modal-files-grid">
                                <!-- Example media files -->
                                <div class="modal-file-item">
                                    <img src="./src/img/files-img1.jpg" alt="Фото">
                                    <div class="modal-file-info">
                                        <p class="modal-file-name">Фото.jpg</p>
                                        <p class="modal-file-date">12.05.2023</p>
                                    </div>
                                </div>
                                <div class="modal-file-item">
                                    <img src="./src/img/files-img2.jpg" alt="Фото">
                                    <div class="modal-file-info">
                                        <p class="modal-file-name">Результати.jpg</p>
                                        <p class="modal-file-date">14.05.2023</p>
                                    </div>
                                </div>
                                <div class="modal-file-item">
                                    <img src="./src/img/files-img1.jpg" alt="Фото">
                                    <div class="modal-file-info">
                                        <p class="modal-file-name">Фото.jpg</p>
                                        <p class="modal-file-date">12.05.2023</p>
                                    </div>
                                </div>
                                <div class="modal-file-item">
                                    <img src="./src/img/files-img2.jpg" alt="Фото">
                                    <div class="modal-file-info">
                                        <p class="modal-file-name">Результати.jpg</p>
                                        <p class="modal-file-date">14.05.2023</p>
                                    </div>
                                </div>
                                <div class="modal-file-item">
                                    <img src="./src/img/files-img1.jpg" alt="Фото">
                                    <div class="modal-file-info">
                                        <p class="modal-file-name">Фото.jpg</p>
                                        <p class="modal-file-date">12.05.2023</p>
                                    </div>
                                </div>
                                <div class="modal-file-item">
                                    <img src="./src/img/files-img2.jpg" alt="Фото">
                                    <div class="modal-file-info">
                                        <p class="modal-file-name">Результати.jpg</p>
                                        <p class="modal-file-date">14.05.2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Links Content -->
                        <div class="modal-tab-content modal-files-links">
                            <div class="modal-links-list">
                                <div class="modal-link-item">
                                    <img src="./src/img/icons/link-gray.svg" alt="Посилання">
                                    <div class="modal-link-info">
                                        <p class="modal-link-title">Корисна стаття</p>
                                        <a href="https://suspilne.media/sport/1004585-liverpul-dostrokovo-zdobuv-perse-za-pat-rokiv-cempionstvo-apl/" target="_blank" class="modal-link-url">Посилання</a>
                                        <p class="modal-link-date">15.05.2023</p>
                                    </div>
                                </div>
                                <div class="modal-link-item">
                                    <img src="./src/img/icons/link-gray.svg" alt="Посилання">
                                    <div class="modal-link-info">
                                        <p class="modal-link-title">Відео інструкція</p>
                                        <a href="https://youtu.be/0IHbz4e3BO8?si=3qJaO4nR8w-eauJP" target="_blank" class="modal-link-url">Посилання</a>
                                        <p class="modal-link-date">16.05.2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Documents Content -->
                        <div class="modal-tab-content modal-files-documents">
                            <div class="modal-documents-list">
                                <div class="modal-document-item">
                                    <img src="./src/img/icons/documents.svg" alt="Документ">
                                    <div class="modal-document-info">
                                        <p class="modal-document-name">Звіт.pdf</p>
                                        <p class="modal-document-size">1.2 MB</p>
                                        <p class="modal-document-date">18.05.2023</p>
                                    </div>
                                    <div class="modal-document-download">
                                        <img src="./src/img/icons/download.svg" alt="Завантажити">
                                    </div>
                                </div>
                                <div class="modal-document-item">
                                    <img src="./src/img/icons/documents.svg" alt="Документ">
                                    <div class="modal-document-info">
                                        <p class="modal-document-name">Договір.docx</p>
                                        <p class="modal-document-size">850 KB</p>
                                        <p class="modal-document-date">20.05.2023</p>
                                    </div>
                                    <div class="modal-document-download">
                                        <img src="./src/img/icons/download.svg" alt="Завантажити">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClientMeeting;
}