// Компонент ClientChat - чат клієнта
const ClientChat = (props = {}) => {
    // Создаем breadcrumb для страницы ClientChat
    const breadcrumbComponent = typeof Breadcrumb !== 'undefined' ? Breadcrumb({ currentPage: 'Chat' }) : '';
    
    return `
        <main class="main">
            <!--BREADCRUMB-->
            ${breadcrumbComponent}
            <!--MY client-meetings-->
            <section class="client-chat">
                <div class="container">
                    <h4 class="page-title">Повідомлення</h4>
                    <div class="tabs">
                        <div class="tabs-inner">
                            <button class="tabs-item client-chat-tabs-all">
                                <p>Всі</p>
                            </button>
                            <button class="tabs-item client-chat-tabs-meetings">
                                <p>Зустрічі</p>
                            </button>
                            <button class="tabs-item client-chat-tabs-experts">
                                <p>Експерти</p>
                            </button>
                            <button class="tabs-item client-chat-tabs-support">
                                <p>Підтримка</p>
                            </button>
                        </div>
                    </div>
                    <div class="client-chat-content">
                        <div class="client-chat-sidebar">
                            <div class="chat-search-header">
                                <div class="chat-search">
                                    <img src="./src/img/icons/search.svg" alt="">
                                    <input type="text" class="chat-search-input" placeholder="Пошук">
                                </div>
                                <button class="chat-search-button">
                                    <img src="./src/img/icons/send-white.svg" alt="">
                                </button>
                            </div>
                            <ul class="chat-list">
                                <li class="chat-list-item">
                                    <div class="chat-list-item-header mb-12">
                                        <img class="chat-list-item-img" src="./src/img/expert-1.png" alt="">
                                        <div class="chat-list-item-about">
                                            <p class="chat-list-item-expert-name">Антон Багінський</p>
                                            <div class="chat-list-item-expert-speciality">Сімейний лікар</div>
                                        </div>
                                        <p class="chat-list-item-time">12.15</p>
                                    </div>
                                    <div class="chat-list-item-content">
                                        <p class="chat-list-item-text">Доброго дгя! Перед консультацією прошу підготувати медичну історію, або надіслати документом. </p>
                                    </div>
                                    <div class="chat-list-item-counter">
                                        <p>6</p>
                                    </div>
                                </li>
                                <li class="chat-list-item">
                                    <div class="chat-list-item-header mb-12">
                                        <img class="chat-list-item-img" src="./src/img/expert-1.png" alt="">
                                        <div class="chat-list-item-about">
                                            <p class="chat-list-item-expert-name">Антон Багінський</p>
                                            <div class="chat-list-item-expert-speciality">Сімейний лікар</div>
                                        </div>
                                        <p class="chat-list-item-time">12.15</p>
                                    </div>
                                    <div class="chat-list-item-content">
                                        <p class="chat-list-item-text">Доброго дгя! Перед консультацією прошу підготувати медичну історію, або надіслати документом. </p>
                                    </div>
                                    <div class="chat-list-item-counter">
                                        <p>6</p>
                                    </div>
                                </li>
                                <li class="chat-list-item">
                                    <div class="chat-list-item-header mb-12">
                                        <img class="chat-list-item-img" src="./src/img/expert-3.png" alt="">
                                        <div class="chat-list-item-about">
                                            <p class="chat-list-item-expert-name">Ганна Степанова</p>
                                            <div class="chat-list-item-expert-speciality">Нігтьовий сервіс</div>
                                        </div>
                                        <p class="chat-list-item-time">12.15</p>
                                    </div>
                                    <div class="chat-list-item-content">
                                        <p class="chat-list-item-text">Доброго дгя! Перед консультацією прошу підготувати медичну історію, або надіслати документом. </p>
                                    </div>
                                    <div class="chat-list-item-counter">
                                        <p>6</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- Moving expert block before the chat box -->
                        <div class="client-chat-expert">
                            <!-- Back button for mobile -->
                            <div class="chat-back-button-container">
                                <button class="chat-back-button">
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Назад</p>
                                </button>
                            </div>
                            <div class="client-chat-expert-content">
                                <div class="client-chat-expert-img">
                                    <img src="./src/img/expert-1.png" alt="">
                                </div>
                                <div class="client-chat-expert-data">
                                    <a href="./expert-page.html" class="client-chat-expert-name">Антон Багінський</a>
                                    <a class="client-chat-expert-country highlight-pill" href="#">Німеччина</a>
                                    <div class="client-chat-expert-amount" style="gap: 2px;">
                                        <div class="client-chat-expert-amount-rating highlight-pill">
                                            <img src="./src/img/icons/star.svg" alt="">
                                            <p>4,5 / 5</p>
                                        </div>
                                        <div class="client-chat-expert-amount-appoints highlight-pill" style="background-color: var(--white-100); border: 1px solid var(--black-10);">
                                            <img src="./src/img/icons/clients.svg" alt="">
                                            <p>12 <span>зустрічей</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="client-chat-expert-info">
                                <div class="client-chat-expert-speciality">
                                    <div class="experts-info-speciality" style="border: none;">
                                        <p class="experts-info-title">спеціальність</p>
                                        <p class="experts-info-value">Сімейний лікар</p>
                                    </div>
                                </div>
                                <div class="client-chat-expert-price">
                                    <p class="client-chat-price-title">ціна за консультацію</p>
                                    <div class="client-chat-price">
                                        <img src="./src/img/icons/money.svg" alt="">
                                        <p>$100.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="client-chat-box">
                            <div class="client-chat-files" style="border-bottom: none;">
                                <button data-modal="chatFileModal">
                                    <p>Файли: <span>0</span></p>
                                    <img src="./src/img/icons/files.svg" alt="">
                                </button>
                            </div>
                            <div class="client-chat-messages">
                                <div class="client-chat-message mb-20 client-chat-from-expert">
                                    <div class="client-chat-message-img">
                                        <img src="./src/img/expert-1.png" alt="">
                                    </div>
                                    <div class="client-chat-message-content">
                                        <p class="client-chat-message-user">Антон Багінський<span>12:15</span></p>
                                        <p class="client-chat-message-text">Перепрошую за спізнення</p>
                                        <img class="message-status" src="./src/img/icons/message-read.svg" alt="">
                                    </div>
                                </div>
                                <div class="client-chat-message mb-20 client-chat-from-client">
                                    <div class="client-chat-message-content">
                                        <p class="client-chat-message-user">Ви<span>12:15</span></p>
                                        <p class="client-chat-message-text">Доброго дня! В вас вимкнено мікрофон</p>
                                        <img class="message-status" src="./src/img/icons/message-read.svg" alt="">
                                    </div>
                                </div>
                                <div class="client-chat-message mb-20 client-chat-from-expert">
                                    <div class="client-chat-message-img">
                                        <img src="./src/img/expert-1.png" alt="">
                                    </div>
                                    <div class="client-chat-message-content">
                                        <p class="client-chat-message-user">Антон Багінський<span>12:15</span></p>
                                        <p class="client-chat-message-text">Я перевірю налаштування</p>
                                        <img class="message-status" src="./src/img/icons/message-delivered.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="client-chat-actions">
                                <div class="client-chat-file" style="cursor: pointer;">
                                    <img src="./src/img/icons/attach-file.svg" alt="">
                                    <input type="file" class="chat-file-input" style="display: none;" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" multiple>
                                </div>
                                <div class="client-chat-input-box">
                                    <input class="client-chat-input" type="text" placeholder="Ваше повідомлення...">
                                    <button type="submit" class="client-chat-send">
                                        <img src="./src/img/icons/send-white.svg" alt="">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- modal windows -->
             <div class="chat-modals">
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
            </div>
        </main>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClientChat;
}