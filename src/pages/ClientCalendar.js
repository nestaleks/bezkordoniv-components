// Компонент Calendar Page
const ClientCalendar = (props = {}) => {
    // Создаем breadcrumb для страницы Calendar
    const breadcrumbComponent = typeof Breadcrumb !== 'undefined' ? Breadcrumb({ currentPage: 'Calendar' }) : '';
    
    return `
        <main class="main">
            <!--BREADCRUMB-->
            ${breadcrumbComponent}
            <!-- CALENDAR -->
            <section class="calendar">
                <div class="container">
                    <h4 class="calendar-title page-title">Календар</h4>
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
            </section>
        </main>

        <script>
            // Calendar functionality
            document.addEventListener('DOMContentLoaded', function() {
                const viewButtons = document.querySelectorAll('.view-btn');
                const dayView = document.querySelector('.calendar-day');
                const weekView = document.querySelector('.calendar-week');
                const monthView = document.querySelector('.calendar-month');
                const prevBtn = document.getElementById('prev-btn');
                const nextBtn = document.getElementById('next-btn');
                const periodBtn = document.getElementById('selected-period-btn');

                let currentView = 'day';
                let currentDate = new Date();

                // View switching
                viewButtons.forEach(btn => {
                    btn.addEventListener('click', function() {
                        viewButtons.forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                        
                        currentView = this.dataset.view;
                        showView(currentView);
                        updatePeriodDisplay();
                    });
                });

                function showView(view) {
                    dayView.style.display = 'none';
                    weekView.style.display = 'none';
                    monthView.style.display = 'none';

                    switch(view) {
                        case 'day':
                            dayView.style.display = 'block';
                            break;
                        case 'week':
                            weekView.style.display = 'block';
                            break;
                        case 'month':
                            monthView.style.display = 'block';
                            break;
                    }
                }

                // Navigation
                prevBtn.addEventListener('click', function() {
                    switch(currentView) {
                        case 'day':
                            currentDate.setDate(currentDate.getDate() - 1);
                            break;
                        case 'week':
                            currentDate.setDate(currentDate.getDate() - 7);
                            break;
                        case 'month':
                            currentDate.setMonth(currentDate.getMonth() - 1);
                            break;
                    }
                    updatePeriodDisplay();
                });

                nextBtn.addEventListener('click', function() {
                    switch(currentView) {
                        case 'day':
                            currentDate.setDate(currentDate.getDate() + 1);
                            break;
                        case 'week':
                            currentDate.setDate(currentDate.getDate() + 7);
                            break;
                        case 'month':
                            currentDate.setMonth(currentDate.getMonth() + 1);
                            break;
                    }
                    updatePeriodDisplay();
                });

                function updatePeriodDisplay() {
                    const months = [
                        'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
                        'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
                    ];
                    
                    const days = [
                        'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'
                    ];

                    switch(currentView) {
                        case 'day':
                            periodBtn.textContent = \`\${days[currentDate.getDay()]}, \${currentDate.getDate()} \${months[currentDate.getMonth()]} \${currentDate.getFullYear()}\`;
                            break;
                        case 'week':
                            const weekStart = new Date(currentDate);
                            weekStart.setDate(currentDate.getDate() - currentDate.getDay() + 1);
                            const weekEnd = new Date(weekStart);
                            weekEnd.setDate(weekStart.getDate() + 6);
                            periodBtn.textContent = \`\${weekStart.getDate()} - \${weekEnd.getDate()} \${months[currentDate.getMonth()]} \${currentDate.getFullYear()}\`;
                            break;
                        case 'month':
                            periodBtn.textContent = \`\${months[currentDate.getMonth()]} \${currentDate.getFullYear()}\`;
                            break;
                    }
                }

                // Initialize display
                showView(currentView);
                updatePeriodDisplay();

                // Click handlers for appointments
                const appointments = document.querySelectorAll('.hour-appointment, .month-content-item');
                appointments.forEach(appointment => {
                    appointment.addEventListener('click', function() {
                        console.log('Appointment clicked:', this.querySelector('.hour-appointment-title, .month-appointment-title').textContent);
                        // Здесь можно добавить логику открытия модального окна с деталями встречи
                    });
                });
            });
        </script>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClientCalendar;
}