console.log('ExpertCalendar.js file loaded!');

// Компонент Calendar Page
const ExpertCalendar = (props = {}) => {
    console.log('ExpertCalendar component called!', props);
    // Создаем breadcrumb для страницы Calendar
    const breadcrumbComponent = typeof Breadcrumb !== 'undefined' ? Breadcrumb({ currentPage: 'Calendar' }) : '';
    
    return `
        <main class="main">
            <!--BREADCRUMB-->
            ${breadcrumbComponent}
            <!-- CALENDAR -->
            <section class="calendar">
                <div class="container">
                    <div class="expert-calendar-head mb-20">
                        <h4 class="calendar-title page-title mb-0" >Календар</h4>
                        <div class="expert-calendar-buttons">
                            <button class="expert-calendar-button-search button-secondary">
                                <img src="./src/img/icons/search.svg" alt="">
                            </button>
                            <button class="expert-calendar-button-settings button-secondary">
                                <img src="./src/img/icons/settings.svg" alt="">
                            </button>
                            <button class="expert-calendar-button-create button-primary">
                                <p>Створити Зустріч</p>
                            </button>
                        </div>
                    </div>
                    <div class="expert-calendar">
                        <div class="expert-create-meet">
                            <div class="expert-create-meet-title">
                                <div class="form-group">
                                    <input type="text" placeholder="Назва Зустрічі" class="form-input">
                                    <p class="form-undertext">Назва Зустрічі</p>
                                </div>
                            </div>
                            <div class="expert-create-meet-time">
                                <div class="expert-create-meet-header">
                                    <img src="./src/img/icons/time-gray.svg" alt="">
                                    <div class="expert-create-meet-desc">
                                        <p>Тривалість прийому</p>
                                        <p>Як довго має тривати зустріч?</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Оберіть тривалість</option>
                                        <option value="15">15 хв</option>
                                        <option value="20">20 хв</option>
                                        <option value="30">30 хв</option>
                                        <option value="45">45 хв</option>
                                        <option value="60">60 хв</option>
                                    </select>
                                </div>
                            </div>
                            <div class="expert-create-meet-location">
                                <div class="expert-create-meet-header">
                                    <img src="./src/img/icons/location-gray.svg" alt="">
                                    <div class="expert-create-meet-desc">
                                        <p>Локація зустрічі</p>
                                        <p>Де має проводитись зустріч?</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Оберіть локацію</option>
                                        <option value="online">Онлайн</option>
                                        <option value="local">Локально</option>
                                    </select>
                                </div>
                            </div>
                            <div class="expert-create-meet-client">
                                <div class="expert-create-meet-header">
                                    <img src="./src/img/icons/user-gray.svg" alt="">
                                    <div class="expert-create-meet-desc">
                                        <p>Користувач</p>
                                        <p>Хто має прийти на зустріч?</p>
                                    </div>
                                </div>
                                <div class="form-group">                                    
                                    <div class="custom-select" style="position: relative; font-family: inherit;">
                                        <div class="select-selected">Оберіть клієнта</div>
                                        <div class="select-items" style="position: absolute; background-color: white; border: 1px solid #ccc; border-radius: 4px; top: 100%; left: 0; right: 0; z-index: 99; margin-top: 4px; display: none;">
                                            <div data-value="client-1" class="select-option" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #eee;">
                                                <img src="./src/img/expert-5.png" alt="" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;">
                                                <span>Іванна Максименко</span>
                                            </div>
                                            <div data-value="client-2" class="select-option" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #eee;">
                                                <img src="./src/img/expert-8.png" alt="" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;">
                                                <span>Марина Озерова</span>
                                            </div>
                                            <div data-value="client-3" class="select-option" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                                                <img src="./src/img/expert-10.png" alt="" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;">
                                                <span>Сергій Петренко</span>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="client" class="client-input">
                                </div>
                            </div>
                            <div class="expert-create-meet-price">
                                <div class="expert-create-meet-header">
                                    <img src="./src/img/icons/money.svg" alt="">
                                    <div class="expert-create-meet-desc">
                                        <p>Ціна</p>
                                        <p>Скількі коштуватиме зустріч?</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Оберіть вартість</option>
                                        <option value="10">10 євро</option>
                                        <option value="25">25 євро</option>
                                        <option value="50">50 євро</option>
                                    </select>
                                </div>
                            </div>
                            <div class="expert-create-meet-files">
                                <div class="expert-create-meet-header">
                                    <img src="./src/img/icons/files.svg" alt="">
                                    <div class="expert-create-meet-desc">
                                        <p>Файл</p>
                                        <p>Додайте файли за необхідністю</p>
                                    </div>
                                </div>
                                <div class="expert-create-meet-file">
                                    <div class="create-meet-add-file">
                                        <input type="file" name="" id="">
                                        <img src="./src/img/icons/add.svg" alt="">
                                        <p>Додати файл</p>
                                    </div>
                                </div>
                            </div>
                            <div class="expert-create-meet-notes">
                                <div class="expert-create-meet-header">
                                    <img src="./src/img/icons/notes.svg" alt="">
                                    <div class="expert-create-meet-desc">
                                        <p>Нотатки</p>
                                        <p>Додайте опис до вашого запису</p>
                                    </div>
                                </div>
                                <div class="expert-create-meet-note">
                                    <div class="create-meet-toolbar">
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
                                    </div>
                                    <textarea class="experience-textarea" placeholder="Додати опис"></textarea>
                                </div>
                            </div>
                            <div class="expert-create-meet-buttons">
                                <button class="expert-create-meet-cancel button-secondary">
                                    <p>Відмінити</p>
                                </button>
                                <button class="expert-create-meet-save button-primary">
                                    <p>Зберегти</p>
                                </button>
                            </div>
                        </div>
                        <div class="calendar-container">
                            <div class="calendar-header mb-20">
                                <div class="nav-buttons">
                                    <button id="prev-btn">
                                        <img src="./src/img/icons/prev-btn.svg" alt="">
                                    </button>
                                    <button id="selected-period-btn">Обраний період</button>
                                    <button id="next-btn">
                                        <img src="./src/img/icons/next-btn.svg" alt="">
                                    </button>
                                </div>
                                <h2 id="current-date">Август 2023</h2>
                                <div class="view-selector">
                                    <button class="view-btn active" data-view="day">День</button>
                                    <button class="view-btn" data-view="week">Тиждень</button>
                                    <button class="view-btn" data-view="month">Місяць</button>
                                </div>
                            </div>

                            <div class="calendar-body">
                                <!-- Day View -->
                                <table class="calendar-day">
                                    <thead>
                                        <tr>
                                            <th class="day-header">Понеділок, 18 грудня 2023</th>
                                        </tr>
                                    </thead>
                                    <tbody class="hour-slots">
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">8.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">9.00</p>
                                                <a class="hour-appointment hour-appointment-call" href="#">
                                                    <h6 class="hour-appointment-title">Копірайтери. Марина Подільська</h6>
                                                    <p class="hour-appointment-time">11:00 - 12:00</p>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">10.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">11.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">12.00</p>
                                                <a class="hour-appointment hour-appointment-video" href="#">
                                                    <h6 class="hour-appointment-title">Вчителі. Сергій Костенко</h6>
                                                    <p class="hour-appointment-time">10:00 - 11:00</p>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">13.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">14.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">15.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">16.00</p>
                                                <a class="hour-appointment hour-appointment-local" href="#">
                                                    <h6 class="hour-appointment-title">Технічні Спеціалісти</h6>
                                                    <p class="hour-appointment-time">11:00 - 12:00</p>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">17.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">18.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">19.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">20.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">21.00</p>
                                            </td>
                                        </tr>
                                        <tr class="hour-slot">
                                            <td>
                                                <p class="hour-label">22.00</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <!-- Week View -->
                                <table class="calendar-week">
                                    <thead>
                                        <tr class="week-header">
                                            <th class="week-day">
                                                <p class="week-day-name">Пон</p>
                                                <p class="week-day-number">12</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Вів</p>
                                                <p class="week-day-number">13</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Сер</p>
                                                <p class="week-day-number">14</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Чет</p>
                                                <p class="week-day-number">15</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Пят</p>
                                                <p class="week-day-number">16</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Суб</p>
                                                <p class="week-day-number">17</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Нед</p>
                                                <p class="week-day-number">18</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="week-slots">
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">08.00</p>
                                                <a class="hour-appointment hour-appointment-local" href="#">
                                                    <h6 class="hour-appointment-title">Технічні Спеціалісти</h6>
                                                    <p class="hour-appointment-time">11:00 - 12:00</p>
                                                </a>
                                            </td>
                                            <td>
                                                <p class="hour-label">08.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">08.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">08.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">08.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">08.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">08.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">09.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">09.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">09.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">09.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">09.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">09.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">09.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">10.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">10.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">10.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">10.00</p>
                                                <a class="hour-appointment hour-appointment-call" href="#">
                                                    <h6 class="hour-appointment-title">Копірайтери. Марина Подільська</h6>
                                                    <p class="hour-appointment-time">11:00 - 12:00</p>
                                                </a>
                                            </td>
                                            <td>
                                                <p class="hour-label">10.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">10.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">10.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">11.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">11.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">11.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">11.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">11.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">11.00</p>
                                                <a class="hour-appointment hour-appointment-video" href="#">
                                                    <h6 class="hour-appointment-title">Вчителі. Сергій Костенко</h6>
                                                    <p class="hour-appointment-time">10:00 - 11:00</p>
                                                </a>
                                            </td>
                                            <td>
                                                <p class="hour-label">11.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">12.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">12.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">12.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">12.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">12.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">12.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">12.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">13.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">13.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">13.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">13.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">13.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">13.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">13.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">14.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">14.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">14.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">14.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">14.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">14.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">14.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">15.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">15.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">15.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">15.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">15.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">15.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">15.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">16.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">16.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">16.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">16.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">16.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">16.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">16.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">17.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">17.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">17.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">17.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">17.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">17.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">17.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">18.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">18.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">18.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">18.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">18.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">18.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">18.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">19.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">19.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">19.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">19.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">19.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">19.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">19.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">20.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">20.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">20.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">20.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">20.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">20.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">20.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">21.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">21.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">21.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">21.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">21.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">21.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">21.00</p>
                                            </td>
                                        </tr>
                                        <tr class="week-slot">
                                            <td>
                                                <p class="hour-label">22.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">22.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">22.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">22.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">22.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">22.00</p>
                                            </td>
                                            <td>
                                                <p class="hour-label">22.00</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <!-- Month View -->
                                <table class="calendar-month">
                                    <thead>
                                        <tr class="month-header">
                                            <th class="week-day">
                                                <p class="week-day-name">Пон</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Вів</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Сер</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Чет</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Пят</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Суб</p>
                                            </th>
                                            <th class="week-day">
                                                <p class="week-day-name">Нед</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="month-slots">
                                        <tr class="month-slot">
                                            <td>
                                                <p class="date-label">31.03.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">01.04.2025</p>
                                                <div class="month-content">
                                                    <a class="month-content-item month-content-canceled" href="#">
                                                        <p class="month-appointment-time">11:00</p>
                                                        <h6 class="month-appointment-title">Технічні Спеціалісти</h6>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">02.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">03.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">04.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">05.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">06.04.2025</p>
                                                <div class="month-content">
                                                    <a class="month-content-item month-content-completed" href="#">
                                                        <p class="month-appointment-time">11:00</p>
                                                        <h6 class="month-appointment-title">Медицина. Тарас Поліщук</h6>
                                                    </a>
                                                    <a class="month-content-item month-content-completed" href="#">
                                                        <p class="month-appointment-time">11:00</p>
                                                        <h6 class="month-appointment-title">Нігтьовий сервуіс. Марина </h6>
                                                    </a>
                                                    <a class="month-content-item month-content-completed" href="#">
                                                        <p class="month-appointment-time">11:00</p>
                                                        <h6 class="month-appointment-title">Адвокати. Сергій Костенко</h6>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="month-slot">
                                            <td>
                                                <p class="date-label">07.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">08.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">09.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">10.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">11.04.2025</p>
                                                <div class="month-content">
                                                    <a class="month-content-item month-content-completed" href="#">
                                                        <p class="month-appointment-time">11:00</p>
                                                        <h6 class="month-appointment-title">Перукарі. Станіслав Романенко</h6>
                                                    </a>
                                                    <a class="month-content-item month-content-waiting" href="#">
                                                        <p class="month-appointment-time">11:00</p>
                                                        <h6 class="month-appointment-title">Технічні Спеціалісти</h6>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">12.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">13.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="month-slot">
                                            <td>
                                                <p class="date-label">14.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">15.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">16.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">17.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">18.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">19.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">20.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="month-slot">
                                            <td>
                                                <p class="date-label">21.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">22.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">23.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">24.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">25.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">26.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">27.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="month-slot">
                                            <td>
                                                <p class="date-label">28.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">29.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">30.04.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">01.05.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">02.05.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">03.05.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                            <td>
                                                <p class="date-label">04.05.2025</p>
                                                <div class="month-content">
    
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="calendar-settings-section">
                <div class="container">
                    <div class="call-back-button-container">
                        <button class="call-back-button">
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Назад</p>
                        </button>
                    </div>
                    <div class="tabs calendar-settings-tabs">
                        <div class="tabs-inner">
                            <button class="tabs-item calendar-settings-tabs-details active">
                                <p>Застосунки Розкладу</p>
                            </button>
                            <button class="tabs-item calendar-settings-tabs-feedback">
                                <p>Зворотний Зв'язок</p>
                            </button>
                        </div>
                    </div>
                    <div class="calendar-settings-content">
                        <div class="calendar-settings-details">
                            <div class="calendar-settings-block">
                                <div class="calendar-settings-title">
                                    <div class="calendar-settings-header">
                                        <img src="./src/img/icons/letter.svg" alt="">
                                        <div class="calendar-settings-desc">
                                            <p>Назва</p>
                                            <p>Напишіть назву вашої консультації</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Напишіть назву вашої консультації" class="form-input">
                                    </div>
                                </div>
                                <div class="calendar-settings-block-row">
                                    <div class="calendar-settings-price-first">
                                        <div class="calendar-settings-header">
                                            <img src="./src/img/icons/money.svg" alt="">
                                            <div class="calendar-settings-desc">
                                                <p>Перша консультація</p>
                                                <p>Вкажіть вартість першої консультації</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" placeholder="Вкажіть вартість" class="form-input">
                                        </div>
                                    </div>
                                    <div class="calendar-settings-price-next">
                                        <div class="calendar-settings-header">
                                            <img src="./src/img/icons/money.svg" alt="">
                                            <div class="calendar-settings-desc">
                                                <p>Повторна консультація</p>
                                                <p>Вкажіть вартість повторної консультації</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" placeholder="Вкажіть вартість" class="form-input">
                                        </div>
                                    </div>
                                </div>
                                <div class="calendar-settings-schedule">
                                    <div class="calendar-settings-header">
                                        <img src="./src/img/icons/time-gray.svg" alt="">
                                        <div class="calendar-settings-desc">
                                            <p>Доступність</p>
                                            <p>Налаштуйте, початок і кінець консультації</p>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <select class="form-select">
                                                <option value="" disabled selected>Оберіть цикл</option>
                                                <option value="week">Повтор щотижня</option>
                                                <option value="month">Повтор щомісяця</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-select">
                                                <option value="" disabled selected>Часовий пояс</option>
                                                <option value="gmt-5">(GMT -5:00) Eastern Standard Time</option>
                                                <option value="gmt0">(GMT +0:00) Greenwich Mean Time</option>
                                                <option value="gmt+1">(GMT +1:00) Central European Time</option>
                                                <option value="gmt+3">(GMT +3:00) Eastern European Time (Kyiv)</option>
                                                <option value="gmt+8">(GMT +8:00) China Standard Time</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="calendar-settings-schedule-table">
                                        <div class="calendar-settings-schedule-day">
                                            <p>Пн</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <p>-</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <button class="schedule-day-cancel">
                                                <img src="./src/img/icons/cancel.svg" alt="">
                                            </button>
                                            <button class="schedule-day-copy">
                                                <img src="./src/img/icons/copy.svg" alt="">
                                            </button>
                                        </div>
                                        <div class="calendar-settings-schedule-day">
                                            <p>Вт</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <p>-</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <button class="schedule-day-cancel">
                                                <img src="./src/img/icons/cancel.svg" alt="">
                                            </button>
                                            <button class="schedule-day-copy">
                                                <img src="./src/img/icons/copy.svg" alt="">
                                            </button>
                                        </div>
                                        <div class="calendar-settings-schedule-day">
                                            <p>Ср</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <p>-</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <button class="schedule-day-cancel">
                                                <img src="./src/img/icons/cancel.svg" alt="">
                                            </button>
                                            <button class="schedule-day-copy">
                                                <img src="./src/img/icons/copy.svg" alt="">
                                            </button>
                                        </div>
                                        <div class="calendar-settings-schedule-day">
                                            <p>Чт</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <p>-</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <button class="schedule-day-cancel">
                                                <img src="./src/img/icons/cancel.svg" alt="">
                                            </button>
                                            <button class="schedule-day-copy">
                                                <img src="./src/img/icons/copy.svg" alt="">
                                            </button>
                                        </div>
                                        <div class="calendar-settings-schedule-day">
                                            <p>Пт</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <p>-</p>
                                            <input type="text" placeholder="Вкажіть час" class="schedule-input">
                                            <button class="schedule-day-cancel">
                                                <img src="./src/img/icons/cancel.svg" alt="">
                                            </button>
                                            <button class="schedule-day-copy">
                                                <img src="./src/img/icons/copy.svg" alt="">
                                            </button>
                                        </div>
                                        <div class="calendar-settings-schedule-disabled">
                                            <p>Сб</p>
                                            <p>Недоступний</p>
                                            <button class="schedule-day-add">
                                                <img src="./src/img/icons/add-black.svg" alt="">
                                            </button>
                                        </div>
                                        <div class="calendar-settings-schedule-disabled">
                                            <p>Нд</p>
                                            <p>Недоступний</p>
                                            <button class="schedule-day-add">
                                                <img src="./src/img/icons/add-black.svg" alt="">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="calendar-settings-block-row">
                                    <div class="calendar-settings-duration">
                                        <div class="calendar-settings-header">
                                            <img src="./src/img/icons/time-gray.svg" alt="">
                                            <div class="calendar-settings-desc">
                                                <p>Тривалість прийому</p>
                                                <p>Як довго має тривати зустріч?</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-select">
                                                <option value="" disabled selected>Оберіть тривалість</option>
                                                <option value="15">15 хв</option>
                                                <option value="20">20 хв</option>
                                                <option value="30">30 хв</option>
                                                <option value="45">45 хв</option>
                                                <option value="60">60 хв</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="calendar-settings-buffer">
                                        <div class="calendar-settings-header">
                                            <img src="./src/img/icons/time-gray.svg" alt="">
                                            <div class="calendar-settings-desc">
                                                <p>Час між консультаціями</p>
                                                <p>Перерва між консультаціями</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-select">
                                                <option value="" disabled selected>Оберіть тривалість</option>
                                                <option value="10">10 хв</option>
                                                <option value="15">15 хв</option>
                                                <option value="20">20 хв</option>
                                                <option value="30">30 хв</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="calendar-settings-block-row">
                                    <div class="calendar-settings-notes">
                                        <div class="calendar-settings-header">
                                            <img src="./src/img/icons/notes.svg" alt="">
                                            <div class="calendar-settings-desc">
                                                <p>Нотатки</p>
                                                <p>Додайте опис до вашого запису</p>
                                            </div>
                                        </div>
                                        <div class="calendar-settings-note">
                                            <div class="calendar-settings-toolbar">
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
                                            </div>
                                            <textarea class="experience-textarea" placeholder="Додати опис"></textarea>
                                        </div>
                                    </div>
                                    <div class="calendar-settings-files">
                                        <div class="calendar-settings-header">
                                            <img src="./src/img/icons/files.svg" alt="">
                                            <div class="calendar-settings-desc">
                                                <p>Файл</p>
                                                <p>Додайте файли за необхідністю</p>
                                            </div>
                                        </div>
                                        <div class="calendar-settings-file">
                                            <div class="calendar-settings-add-file">
                                                <input type="file" name="" id="">
                                                <img src="./src/img/icons/add.svg" alt="">
                                                <p>Додати файл</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="calendar-settings-buttons">
                                <button class="calendar-settings-cancel button-secondary">
                                    <p>Відмінити</p>
                                </button>
                                <button class="calendar-settings-save button-primary">
                                    <p>Зберегти</p>
                                </button>
                            </div>
                            </div>
                            <div class="calendar-settings-templates">
                                <div class="calendar-settings-template-1">
                                    <div class="calendar-settings-template-header">
                                        <div class="calendar-settings-template-img1">
                                            <img src="./src/img/icons/calendar-yellow.svg" alt="">
                                        </div>
                                        <div class="calendar-settings-template-details">
                                            <p class="calendar-settings-template-title">Консультація з вакцинації</p>
                                            <div class="calendar-settings-template-pills">
                                                <div class="highlight-pill">
                                                    <img src="./src/img/icons/calendar-black.svg" alt="">
                                                    <p>Пн-Пт, 09:00-11:00</p>
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
                                        </div>
                                        <div class="calendar-settings-template-img2">
                                            <img src="./src/img/icons/edit.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="calendar-settings-template-content">
                                        <div class="calendar-settings-template-desc">
                                            <p>опис</p>
                                            <p>Консультація з вакцинації — це медичне обговорення з лікарем, під час якого пацієнту надається інформація про необхідні щеплення, їхню ефективність, можливі побічні ефекти та графік проведення вакцинації. Лікар допомагає визначити індивідуальні потреби пацієнта на основі віку, стану здоров’я, способу життя та подорожей.</p>
                                        </div>
                                        <div class="calendar-settings-template-files">
                                            <p>файли</p>
                                            <li class="expert-card-certificates-item">
                                                <img src="./src/img/icons/documents.svg" alt="">
                                                <p>Files</p>
                                            </li>
                                            <li class="expert-card-certificates-item">
                                                <img src="./src/img/icons/documents.svg" alt="">
                                                <p>Files</p>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div class="calendar-settings-template-1">
                                    <div class="calendar-settings-template-header">
                                        <div class="calendar-settings-template-img1">
                                            <img src="./src/img/icons/calendar-yellow.svg" alt="">
                                        </div>
                                        <div class="calendar-settings-template-details">
                                            <p class="calendar-settings-template-title">Консультація з вакцинації</p>
                                            <div class="calendar-settings-template-pills">
                                                <div class="highlight-pill">
                                                    <img src="./src/img/icons/calendar-black.svg" alt="">
                                                    <p>Пн-Пт, 09:00-11:00</p>
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
                                        </div>
                                        <div class="calendar-settings-template-img2">
                                            <img src="./src/img/icons/edit.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="calendar-settings-template-content">
                                        <div class="calendar-settings-template-desc">
                                            <p>опис</p>
                                            <p>Консультація з вакцинації — це медичне обговорення з лікарем, під час якого пацієнту надається інформація про необхідні щеплення, їхню ефективність, можливі побічні ефекти та графік проведення вакцинації. Лікар допомагає визначити індивідуальні потреби пацієнта на основі віку, стану здоров’я, способу життя та подорожей.</p>
                                        </div>
                                        <div class="calendar-settings-template-files">
                                            <p>файли</p>
                                            <li class="expert-card-certificates-item">
                                                <img src="./src/img/icons/documents.svg" alt="">
                                                <p>Files</p>
                                            </li>
                                            <li class="expert-card-certificates-item">
                                                <img src="./src/img/icons/documents.svg" alt="">
                                                <p>Files</p>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div class="calendar-settings-template-1">
                                    <div class="calendar-settings-template-header">
                                        <div class="calendar-settings-template-img1">
                                            <img src="./src/img/icons/calendar-yellow.svg" alt="">
                                        </div>
                                        <div class="calendar-settings-template-details">
                                            <p class="calendar-settings-template-title">Консультація з вакцинації</p>
                                            <div class="calendar-settings-template-pills">
                                                <div class="highlight-pill">
                                                    <img src="./src/img/icons/calendar-black.svg" alt="">
                                                    <p>Пн-Пт, 09:00-11:00</p>
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
                                        </div>
                                        <div class="calendar-settings-template-img2">
                                            <img src="./src/img/icons/edit.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="calendar-settings-template-content">
                                        <div class="calendar-settings-template-desc">
                                            <p>опис</p>
                                            <p>Консультація з вакцинації — це медичне обговорення з лікарем, під час якого пацієнту надається інформація про необхідні щеплення, їхню ефективність, можливі побічні ефекти та графік проведення вакцинації. Лікар допомагає визначити індивідуальні потреби пацієнта на основі віку, стану здоров’я, способу життя та подорожей.</p>
                                        </div>
                                        <div class="calendar-settings-template-files">
                                            <p>файли</p>
                                            <li class="expert-card-certificates-item">
                                                <img src="./src/img/icons/documents.svg" alt="">
                                                <p>Files</p>
                                            </li>
                                            <li class="expert-card-certificates-item">
                                                <img src="./src/img/icons/documents.svg" alt="">
                                                <p>Files</p>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="calendar-settings-feedback">
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>

    `;
};

// Глобальная функция инициализации ExpertCalendar
window.initExpertCalendar = function() {
    console.log('initExpertCalendar called');
    
    function initCreateMeetToggle() {
        const createButton = document.querySelector('.expert-calendar-button-create');
        const createMeetForm = document.querySelector('.expert-create-meet');
        
        if (createButton && createMeetForm) {
            // Добавим переменную для отслеживания состояния
            let isFormVisible = false;
            
            // Сначала скроем форму
            createMeetForm.style.display = 'none';
            
            createButton.addEventListener('click', function() {
                console.log('Button clicked');
                console.log('isFormVisible:', isFormVisible);
                
                if (!isFormVisible) {
                    createMeetForm.style.display = 'block';
                    isFormVisible = true;
                    console.log('Form shown');
                } else {
                    createMeetForm.style.display = 'none';
                    isFormVisible = false;
                    console.log('Form hidden');
                }
            });
        }
    }
    
    function initCustomSelect() {
        console.log('initCustomSelect called');
        const customSelect = document.querySelector('.custom-select');
        console.log('customSelect found:', customSelect);
        
        if (!customSelect) {
            console.error('Custom select element not found');
            return;
        }
        
        const selectSelected = customSelect.querySelector('.select-selected');
        const selectItems = customSelect.querySelector('.select-items');
        const hiddenInput = customSelect.parentNode.querySelector('.client-input');
        
        console.log('selectSelected:', selectSelected);
        console.log('selectItems:', selectItems);
        console.log('hiddenInput:', hiddenInput);
        
        // Простое переключение видимости (удаляем onclick из HTML)
        const newSelectSelected = selectSelected.cloneNode(true);
        newSelectSelected.onclick = null;
        newSelectSelected.textContent = 'Оберіть клієнта';
        selectSelected.parentNode.replaceChild(newSelectSelected, selectSelected);
        
        newSelectSelected.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Custom selectSelected clicked');
            
            if (selectItems.style.display === 'none' || selectItems.style.display === '') {
                selectItems.style.display = 'block';
                console.log('Showing dropdown');
            } else {
                selectItems.style.display = 'none';
                console.log('Hiding dropdown');
            }
        });
        
        // Обработка выбора опции
        selectItems.addEventListener('click', function(e) {
            e.stopPropagation();
            const option = e.target.closest('.select-option');
            if (option) {
                console.log('Option clicked:', option);
                const value = option.getAttribute('data-value');
                const text = option.querySelector('span').textContent;
                const img = option.querySelector('img');
                
                newSelectSelected.innerHTML = '<img src="' + img.src + '" alt="" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;"> <span>' + text + '</span>';
                newSelectSelected.classList.add('has-selection');
                hiddenInput.value = value;
                selectItems.style.display = 'none';
                console.log('Selected:', text, value);
            }
        });
        
        // Закрытие при клике вне элемента
        document.addEventListener('click', function(e) {
            if (!customSelect.contains(e.target)) {
                selectItems.style.display = 'none';
            }
        });
    }
    
    function initCalendarTabs() {
        const viewButtons = document.querySelectorAll('.view-btn');
        const dayView = document.querySelector('.calendar-day');
        const weekView = document.querySelector('.calendar-week');
        const monthView = document.querySelector('.calendar-month');

        if (viewButtons.length && dayView && weekView && monthView) {
            console.log('Calendar tab elements found, initializing...');
            
            // По умолчанию показываем day view
            dayView.style.display = 'table';
            weekView.style.display = 'none';
            monthView.style.display = 'none';

            // Добавляем обработчики для кнопок переключения
            viewButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Убираем активный класс у всех кнопок
                    viewButtons.forEach(b => b.classList.remove('active'));
                    // Добавляем активный класс к нажатой кнопке
                    this.classList.add('active');
                    
                    const view = this.dataset.view;
                    console.log('Switching to view:', view);
                    
                    // Скрываем все виды
                    dayView.style.display = 'none';
                    weekView.style.display = 'none';
                    monthView.style.display = 'none';

                    // Показываем выбранный вид
                    switch(view) {
                        case 'day':
                            dayView.style.display = 'table';
                            break;
                        case 'week':
                            weekView.style.display = 'table';
                            break;
                        case 'month':
                            monthView.style.display = 'table';
                            break;
                    }
                });
            });
        }
    }

    function initSettingsToggle() {
        const settingsButton = document.querySelector('.expert-calendar-button-settings');
        const backButton = document.querySelector('.call-back-button');
        const calendarSection = document.querySelector('.calendar');
        const settingsSection = document.querySelector('.calendar-settings-section');
        
        if (settingsButton && backButton && calendarSection && settingsSection) {
            // Показать настройки при клике на кнопку настроек
            settingsButton.addEventListener('click', function() {
                calendarSection.style.display = 'none';
                settingsSection.style.display = 'block';
                console.log('Settings shown');
            });
            
            // Вернуться к календарю при клике на кнопку "Назад"
            backButton.addEventListener('click', function() {
                settingsSection.style.display = 'none';
                calendarSection.style.display = 'block';
                console.log('Calendar shown');
            });
        }
    }

    function initSettingsTabs() {
        const detailsTab = document.querySelector('.calendar-settings-tabs-details');
        const feedbackTab = document.querySelector('.calendar-settings-tabs-feedback');
        const detailsContent = document.querySelector('.calendar-settings-details');
        const feedbackContent = document.querySelector('.calendar-settings-feedback');
        
        if (detailsTab && feedbackTab && detailsContent && feedbackContent) {
            // По умолчанию показываем детали, скрываем обратную связь
            detailsContent.style.display = 'flex';
            feedbackContent.style.display = 'none';
            
            // Обработчик для таба "Застосунки Розкладу"
            detailsTab.addEventListener('click', function() {
                // Переключаем активные классы
                detailsTab.classList.add('active');
                feedbackTab.classList.remove('active');
                
                // Переключаем контент
                detailsContent.style.display = 'flex';
                feedbackContent.style.display = 'none';
                
                console.log('Details tab activated');
            });
            
            // Обработчик для таба "Зворотний Зв'язок"
            feedbackTab.addEventListener('click', function() {
                // Переключаем активные классы
                feedbackTab.classList.add('active');
                detailsTab.classList.remove('active');
                
                // Переключаем контент
                feedbackContent.style.display = 'block';
                detailsContent.style.display = 'none';
                
                console.log('Feedback tab activated');
            });
        }
    }

    // Инициализируем функции
    initCreateMeetToggle();
    initCustomSelect();
    initCalendarTabs();
    initSettingsToggle();
    initSettingsTabs();
    console.log('ExpertCalendar initialization completed');
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExpertCalendar;
}