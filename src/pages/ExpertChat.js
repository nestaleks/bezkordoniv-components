// Компонент ExpertChat - чат експерта
const ExpertChat = (props = {}) => {
    // Создаем breadcrumb для страницы ExpertChat
    const breadcrumbComponent = typeof Breadcrumb !== 'undefined' ? Breadcrumb({ currentPage: 'Chat' }) : '';
    
    return `
        <main class="main">
            <!--BREADCRUMB-->
            ${breadcrumbComponent}
            <!--EXPERT CHAT PAGE-->
            <section class="expert-chat">
                <div class="container">
                    <h4 class="page-title">Повідомлення</h4>
                    <div class="tabs expert-chat-tabs">
                        <div class="tabs-inner">
                            <button class="tabs-item expert-chat-tabs-all active">
                                <p>Всі</p>
                            </button>
                            <button class="tabs-item expert-chat-tabs-meetings">
                                <p>Зустрічі</p>
                            </button>
                            <button class="tabs-item expert-chat-tabs-clients">
                                <p>Клієнти</p>
                            </button>
                            <button class="tabs-item expert-chat-tabs-remind">
                                <p>Нагадування</p>
                            </button>
                            <button class="tabs-item expert-chat-tabs-support">
                                <p>Підтримка</p>
                            </button>
                        </div>
                    </div>
                    <div class="expert-chat-content">
                        <div class="expert-chat-sidebar">
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
                                        <img class="chat-list-item-img" src="./src/img/expert-9.png" alt="">
                                        <div class="chat-list-item-about">
                                            <p class="chat-list-item-client-name">Аліна Берікова</p>
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
                                        <img class="chat-list-item-img" src="./src/img/expert-5.png" alt="">
                                        <div class="chat-list-item-about">
                                            <p class="chat-list-item-client-name">Марина Іванова</p>
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
                                        <img class="chat-list-item-img" src="./src/img/expert-7.png" alt="">
                                        <div class="chat-list-item-about">
                                            <p class="chat-list-item-client-name">Кирило Павлюченко</p>
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
                        <div class="expert-chat-client">
                            <!-- Back button for mobile -->
                            <div class="chat-back-button-container">
                                <button class="chat-back-button">
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Назад</p>
                                </button>
                            </div>
                            <div class="expert-chat-client-content">
                                <div class="expert-chat-client-header">
                                    <div class="expert-chat-client-img">
                                        <img src="./src/img/expert-9.png" alt="">
                                    </div>
                                    <a href="./expert-page.html" class="expert-chat-client-name">Аліна Берікова</a>
                                </div>
                                <div class="expert-chat-client-data mt-12">
                                    <div class="clients-appoints highlight-pill">
                                        <img src="./src/img/icons/clients.svg" alt="">
                                        <p>12 <span>консультацій</span></p>
                                    </div>
                                    <a class="clients-country highlight-pill" href="#">Німеччина</a>
                                    <div class="clients-age highlight-pill">
                                        <img src="./src/img/icons/age.svg" alt="">
                                        <p>24 <span>роки</span></p>
                                    </div>
                                    <div class="clients-mail highlight-pill">
                                        <img src="./src/img/icons/mail.svg" alt="">
                                        <p>emailexm@gmail.com</p>
                                    </div>
                                    <div class="clients-phone highlight-pill">
                                        <img src="./src/img/icons/phone.svg" alt="">
                                        <p>+49 123 4567 2100</p>
                                    </div>
                                    <div class="clients-language highlight-pill">
                                        <img src="./src/img/icons/translator-black.svg" alt="">
                                        <p>Українська</p>
                                    </div>
                                </div>
                            </div>
                            <div class="expert-chat-client-buttons">
                                <button class="expert-chat-client-call button-secondary">
                                    <p>Дзвінок</p>
                                </button>
                                <button class="expert-chat-client-remind button-secondary">
                                    <p>Нагадати</p>
                                </button>
                            </div>
                        </div>
                        <div class="expert-chat-box">
                            <div class="expert-chat-files" style="border-bottom: none;">
                                <button data-modal="chatFileModal">
                                    <p>Файли: <span>0</span></p>
                                    <img src="./src/img/icons/files.svg" alt="">
                                </button>
                            </div>
                            <div class="expert-chat-messages">
                                <div class="expert-chat-message mb-20 expert-chat-from-client">
                                    <div class="expert-chat-message-img">
                                        <img src="./src/img/expert-1.png" alt="">
                                    </div>
                                    <div class="expert-chat-message-content">
                                        <p class="expert-chat-message-user">Антон Багінський<span>12:15</span></p>
                                        <p class="expert-chat-message-text">Перепрошую за спізнення</p>
                                        <img class="message-status" src="./src/img/icons/message-read.svg" alt="">
                                    </div>
                                </div>
                                <div class="expert-chat-message mb-20 expert-chat-from-expert">
                                    <div class="expert-chat-message-content">
                                        <p class="expert-chat-message-user">Ви<span>12:15</span></p>
                                        <p class="expert-chat-message-text">Доброго дня! В вас вимкнено мікрофон</p>
                                        <img class="message-status" src="./src/img/icons/message-read.svg" alt="">
                                    </div>
                                </div>
                                <div class="expert-chat-message mb-20 expert-chat-from-client">
                                    <div class="expert-chat-message-img">
                                        <img src="./src/img/expert-1.png" alt="">
                                    </div>
                                    <div class="expert-chat-message-content">
                                        <p class="expert-chat-message-user">Антон Багінський<span>12:15</span></p>
                                        <p class="expert-chat-message-text">Я перевірю налаштування</p>
                                        <img class="message-status" src="./src/img/icons/message-delivered.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="expert-chat-actions">
                                <div class="expert-chat-file">
                                    <input type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" multiple>
                                    <div class="expert-chat-file-icon">
                                        <img src="./src/img/icons/attach-file.svg" alt="Прикрепить файл">
                                    </div>
                                </div>
                                <div class="expert-chat-input-box">
                                    <input class="expert-chat-input" type="text" placeholder="Ваше повідомлення...">
                                    <button type="submit" class="expert-chat-send">
                                        <img src="./src/img/icons/send-white.svg" alt="">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="expert-remind" style="display: none;">
                        <div class="remind-content">
                            <div class="remind-section">
                                <div class="remind-section-header mb-12">
                                    <img src="./src/img/icons/letter.svg" alt="">
                                    <div class="remind-section-title">
                                        <p>Назва</p>
                                        <p>Напишіть назву нагадування</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Назва нагадування" class="form-input">
                                </div>
                            </div>
                            <div class="remind-section">
                                <div class="remind-auto-checkbox">
                                    <input type="checkbox" id="remind-auto" class="remind-auto-checkbox-input">
                                    <label for="remind-auto" class="remind-auto-checkbox-label">
                                        <p>Автоматичне нагадування</p>
                                    </label>
                                </div>
                            </div>
                            <div class="remind-section">
                                <div class="remind-section-header mb-12">
                                    <img src="./src/img/icons/clock-gray.svg" alt="">
                                    <div class="remind-section-title">
                                        <p>Час</p>
                                        <p>Налаштуйте, коли має надійти нагадування</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Оберіть період</option>
                                        <option value="1-hour">1 година</option>
                                        <option value="3-hour">3 години</option>
                                        <option value="12-hour">12 годин</option>
                                        <option value="1-day">1 день</option>
                                        <!-- ... и так далее -->
                                    </select>
                                </div>
                            </div>
                            <div class="remind-section">
                                <div class="remind-section-header mb-12">
                                    <img src="./src/img/icons/user.svg" alt="">
                                    <div class="remind-section-title">
                                        <p>Користувач</p>
                                        <p>Хто має отримувати нагадування</p>
                                    </div>
                                </div>
                                <div class="remind-section-search">
                                    <div class="chat-search">
                                        <img src="./src/img/icons/search.svg" alt="">
                                        <input type="text" class="chat-search-input" placeholder="Пошук">
                                    </div>
                                    <button class="remind-add-user">
                                        <img src="./src/img/icons/add-black.svg" alt="">
                                    </button>
                                </div>
                                <ul class="remind-user-list mt-12">
                                    <li class="remind-user-item">
                                        <div class="remind-user-info">
                                            <img src="./src/img/expert-5.png" alt="">
                                            <p>Іванна Максименко</p>
                                        </div>
                                        <button class="remind-delete-user">
                                            <img src="./src/img/icons/cancel.svg" alt="">
                                        </button>
                                    </li>
                                    <li class="remind-user-item">
                                        <div class="remind-user-info">
                                            <img src="./src/img/expert-7.png" alt="">
                                            <p>Остап Шевченко</p>
                                        </div>
                                        <button class="remind-delete-user">
                                            <img src="./src/img/icons/cancel.svg" alt="">
                                        </button>
                                    </li>
                                    <li class="remind-user-item">
                                        <div class="remind-user-info">
                                            <img src="./src/img/expert-8.png" alt="">
                                            <p>Іванна Поліщук</p>
                                        </div>
                                        <button class="remind-delete-user">
                                            <img src="./src/img/icons/cancel.svg" alt="">
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="remind-section">
                                <div class="remind-section-header mb-12">
                                    <img src="./src/img/icons/write.svg" alt="">
                                    <div class="remind-section-title">
                                        <p>Опис</p>
                                        <p>Додайте опис до вашого нагадування</p>
                                    </div>
                                </div>
                                <div class="remind-section-description">
                                    <div class="toolbar">
                                        <button>
                                            <img src="./src/img/icons/toolbar-1.svg" alt="">
                                        </button>
                                        <button>
                                            <img src="./src/img/icons/toolbar-2.svg" alt="">
                                        </button>
                                        <button>
                                            <img src="./src/img/icons/toolbar-3.svg" alt="">
                                        </button>
                                        <div class="toolbar-divider"></div>
                                        <button>
                                            <img src="./src/img/icons/toolbar-4.svg" alt="">
                                        </button>
                                        <button>
                                            <img src="./src/img/icons/toolbar-5.svg" alt="">
                                        </button>
                                        <div class="toolbar-divider"></div>
                                        <button>
                                            <img src="./src/img/icons/toolbar-6.svg" alt="">
                                        </button>
                                        <button>
                                            <img src="./src/img/icons/toolbar-7.svg" alt="">
                                        </button>
                                    </div>
                                    <textarea class="description-textarea" placeholder="Додати опис"></textarea>
                                </div>
                            </div>
                            <div class="remind-section">
                                <div class="remind-section-header mb-12">
                                    <img src="./src/img/icons/documents.svg" alt="">
                                    <div class="remind-section-title">
                                        <p>Файл</p>
                                        <p>Додайте файли за необхідністю</p>
                                    </div>
                                </div>
                                <div class="expert-profile-prof-files">
                                    <div class="add-file">
                                        <input type="file" name="" id="">
                                        <img src="./src/img/icons/add.svg" alt="">
                                        <p>Додати файл</p>
                                    </div>
                                </div>
                            </div>
                            <div class="remind-section-buttons">
                                <button class="remind-cancel button-secondary">
                                    <p>Скасувати</p>
                                </button>
                                <button class="remind-save button-primary">
                                    <p>Зберегти</p>
                                </button>
                            </div>
                        </div>
                        <div class="remind-created-items">
                            <ul class="remind-list">
                                <li class="remind-item">
                                    <div class="remind-item-header">
                                        <div class="remind-item-img">
                                            <img src="./src/img/icons/calendar-yellow.svg" alt="">
                                        </div>
                                        <p>Перша Консультація</p>
                                        <button>
                                            <img src="./src/img/icons/note.svg" alt="">
                                        </button>
                                    </div>
                                    <div class="remind-item-about">
                                        <p class="remind-item-about-title">опис</p>
                                        <p>Доброго дня!</p>
                                        <p>Нагадуємо, що незабаром відбудеться консультація.</p>
                                        <div class="remind-item-pills">
                                            <div class="highlight-pill">
                                                <img src="./src/img/icons/calendar-black.svg" alt="">
                                                <p>Вів, 28 Січня, 14:30</p>
                                            </div>
                                            <div class="highlight-pill">
                                                <img src="./src/img/icons/target.svg" alt="">
                                                <p>Онлайн</p>
                                            </div>
                                            <div class="highlight-pill">
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>45 хвилин</p>
                                            </div>
                                        </div>
                                        <p>Якщо у вас виникли запитання або ви не зможете бути присутніми — будь ласка, повідомте заздалегідь.</p>
                                        <p>До зустрічі!</p>
                                    </div>
                                    <div class="remind-item-files">
                                        <p class="remind-item-files-title">файли</p>
                                        <ul class="remind-item-files-list">
                                            <li class="remind-item-files-item">
                                                <img src="./src/img/icons/documents.svg" alt="">
                                                <p>Files</p>
                                            </li>
                                            <li class="remind-item-files-item">
                                                <img src="./src/img/icons/documents.svg" alt="">
                                                <p>Files</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="remind-item-users">
                                        <p class="remind-item-users-title">користувачі</p>
                                        <ul class="remind-item-users-list mt-12">
                                            <li class="remind-item-users-item">
                                                <img src="./src/img/expert-5.png" alt="">
                                            </li>
                                            <li class="remind-item-users-item">
                                                <img src="./src/img/expert-7.png" alt="">
                                            </li>
                                            <li class="remind-item-users-item">
                                                <img src="./src/img/expert-8.png" alt="">
                                            </li>
                                            <li class="remind-item-users-item">
                                                <img src="./src/img/expert-4.png" alt="">
                                            </li>
                                            <li class="remind-item-users-item">
                                                <img src="./src/img/expert-6.png" alt="">
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="expert-call" style="display: none;">
                <div class="container">
                    <div class="call-back-button-container">
                        <button class="call-back-button">
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Назад</p>
                        </button>
                    </div>
                    <div class="expert-call-page mt-20">
                        <div class="expert-call-content">
                            <div class="expert-call-top mb-20">
                                <div class="expert-call-time">
                                    <img src="./src/img/icons/rec.svg" alt="">
                                    <p>Зустріч - <span>00:25:14</span></p>
                                </div>
                                <div class="expert-call-add-user">
                                    <p>Додати користувача</p>
                                    <img src="./src/img/icons/add-blue.svg" alt="">
                                </div>
                            </div>
                            <div class="expert-call-display">
                                <img src="./src/img/icons/video-camera-front.svg" alt="">
                            </div>
                            <div class="expert-call-controls mt-12 mb-12">
                                <div class="call-volume">
                                    <img src="./src/img/icons/volume-min.svg" alt="">
                                    <label class="slider" for="slider-input">
                                        <!-- Range input -->
                                        <input class="slider-input" id="slider-input" type="range" min="0" max="100" value="33">
                                    </label>
                                    <img src="./src/img/icons/volume-max.svg" alt="">
                                </div>
                                <div class="expert-call-controls-buttons">
                                    <div>
                                        <button class="expert-call-controls-button button-secondary">
                                            <img src="./src/img/icons/mic-off.svg" alt="">
                                        </button>
                                        <p>Мікрофон</p>
                                    </div>
                                    <div>
                                        <button class="expert-call-controls-button button-secondary">
                                            <img src="./src/img/icons/camera-off.svg" alt="">
                                        </button>
                                        <p>Камера</p>
                                    </div>
                                    <div>
                                        <button class="expert-call-controls-button button-secondary">
                                            <img src="./src/img/icons/subtitles.svg" alt="">
                                        </button>
                                        <p>Титри</p>
                                    </div>
                                    <div>
                                        <button class="expert-call-controls-button button-secondary">
                                            <img src="./src/img/icons/fullscreen.svg" alt="">
                                        </button>
                                        <p>Дисплей</p>
                                    </div>
                                </div>
                            </div>
                            <div class="expert-call-notes">
                                <div class="expert-call-notes-header">
                                    <p class="expert-call-notes-title">Нотатки</p>
                                    <p class="expert-call-notes-text">Додайте нотатки до вашої зустрічі</p>
                                </div>
                                <div class="expert-call-notes-new">
                                    <div class="expert-call-notes-add mt-12 mb-12">
                                        <div class="expert-call-notes-description">
                                            <div class="toolbar">
                                                <button>
                                                    <img src="./src/img/icons/toolbar-1.svg" alt="">
                                                </button>
                                                <button>
                                                    <img src="./src/img/icons/toolbar-2.svg" alt="">
                                                </button>
                                                <button>
                                                    <img src="./src/img/icons/toolbar-3.svg" alt="">
                                                </button>
                                                <div class="toolbar-divider"></div>
                                                <button>
                                                    <img src="./src/img/icons/toolbar-4.svg" alt="">
                                                </button>
                                                <button>
                                                    <img src="./src/img/icons/toolbar-5.svg" alt="">
                                                </button>
                                                <div class="toolbar-divider"></div>
                                                <button>
                                                    <img src="./src/img/icons/toolbar-6.svg" alt="">
                                                </button>
                                                <button>
                                                    <img src="./src/img/icons/toolbar-7.svg" alt="">
                                                </button>
                                            </div>
                                            <textarea class="description-textarea" placeholder="Додати опис"></textarea>
                                        </div>
                                        <div class="expert-call-notes-button-container">
                                            <button class="expert-call-notes-button">
                                                <img src="./src/img/icons/cancel.svg" alt="">
                                            </button>
                                            <button class="expert-call-notes-button">
                                                <img src="./src/img/icons/add-yellow.svg" alt="">
                                            </button>
                                        </div>
                                    </div>
                                    <button class="expert-call-notes-create">
                                        <img src="./src/img/icons/add.svg" alt="">
                                        <p>Додати</p>
                                    </button>
                                </div>
                                <div class="expert-call-notes-list mt-12">
                                    <div class="expert-call-notes-item">
                                        <div class="expert-call-notes-box">
                                            <p>12:24</p>
                                            <p>Червень 2019 - початок практики</p>
                                        </div>
                                        <button class="expert-call-notes-button">
                                            <img src="./src/img/icons/cancel.svg" alt="">
                                        </button>
                                    </div>
                                    <div class="expert-call-notes-item">
                                        <div class="expert-call-notes-box">
                                            <p>12:12</p>
                                            <p>Отримання магістратури - 12.06.2019</p>
                                        </div>
                                        <button class="expert-call-notes-button">
                                            <img src="./src/img/icons/cancel.svg" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="expert-call-chat">
                            <div class="expert-call-files">
                                <button data-modal="chatFileModal">
                                    <p>Файли: <span>0</span></p>
                                    <img src="./src/img/icons/files.svg" alt="">
                                </button>
                            </div>
                            <div class="expert-chat-messages" style="margin-top: 0">
                                <div class="expert-chat-message mb-20 expert-chat-from-client">
                                    <div class="expert-chat-message-img">
                                        <img src="./src/img/expert-1.png" alt="">
                                    </div>
                                    <div class="expert-chat-message-content">
                                        <p class="expert-chat-message-user">Антон Багінський<span>12:15</span></p>
                                        <p class="expert-chat-message-text">Перепрошую за спізнення</p>
                                        <img class="message-status" src="./src/img/icons/message-read.svg" alt="">
                                    </div>
                                </div>
                                <div class="expert-chat-message mb-20 expert-chat-from-expert">
                                    <div class="expert-chat-message-content">
                                        <p class="expert-chat-message-user">Ви<span>12:15</span></p>
                                        <p class="expert-chat-message-text">Доброго дня! В вас вимкнено мікрофон</p>
                                        <img class="message-status" src="./src/img/icons/message-read.svg" alt="">
                                    </div>
                                </div>
                                <div class="expert-chat-message mb-20 expert-chat-from-client">
                                    <div class="expert-chat-message-img">
                                        <img src="./src/img/expert-1.png" alt="">
                                    </div>
                                    <div class="expert-chat-message-content">
                                        <p class="expert-chat-message-user">Антон Багінський<span>12:15</span></p>
                                        <p class="expert-chat-message-text">Я перевірю налаштування</p>
                                        <img class="message-status" src="./src/img/icons/message-delivered.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="expert-chat-actions" style="margin-top: 0">
                                <div class="expert-chat-file">
                                    <input type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" multiple>
                                    <div class="expert-chat-file-icon">
                                        <img src="./src/img/icons/attach-file.svg" alt="Прикрепить файл">
                                    </div>
                                </div>
                                <div class="expert-chat-input-box">
                                    <input class="expert-chat-input" type="text" placeholder="Ваше повідомлення...">
                                    <button type="submit" class="expert-chat-send">
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
    module.exports = ExpertChat;
}