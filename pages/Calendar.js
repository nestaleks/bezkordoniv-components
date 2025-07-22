import { Page } from './Page.js';

export class CalendarPage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <ul class="breadcrumb-links">
                        <li>
                            <a href="#" class="breadcrumb-box">
                                <svg width="20.000000" height="20.999512" viewBox="0 0 20 20.9995" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path id="Vector" d="M13 19.99L13 11.99C13 11.73 12.89 11.47 12.7 11.29C12.51 11.1 12.26 10.99 12 10.99L8 10.99C7.73 10.99 7.48 11.1 7.29 11.29C7.1 11.47 7 11.73 7 11.99L7 19.99M1.18 8.15C1.3 7.89 1.48 7.65 1.7 7.47L8.7 1.47C9.06 1.16 9.52 1 10 1C10.47 1 10.93 1.16 11.29 1.47L18.29 7.47C18.51 7.65 18.69 7.89 18.81 8.15C18.93 8.42 19 8.7 19 8.99L19 17.99C19 18.52 18.78 19.03 18.41 19.41C18.03 19.78 17.53 19.99 17 19.99L3 19.99C2.46 19.99 1.96 19.78 1.58 19.41C1.21 19.03 1 18.52 1 17.99L1 8.99C0.99 8.7 1.06 8.42 1.18 8.15Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                </svg>
                            </a>
                        </li>
                        <li>/</li>
                        <li>
                            <div class="breadcrumb-box">
                                <div class="breadcrumb-img">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.33333 1.33337V4.00004M9.66667 1.33337V4.00004M1 6.66671H13M2.33333 2.66671H11.6667C12.403 2.66671 13 3.26366 13 4.00004V13.3334C13 14.0698 12.403 14.6667 11.6667 14.6667H2.33333C1.59695 14.6667 1 14.0698 1 13.3334V4.00004C1 3.26366 1.59695 2.66671 2.33333 2.66671Z" stroke="#2E66E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </div>
                                <a href="#" class="breadcrumb-text">Календар</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- CALENDAR -->
            <section class="calendar">
                <div class="container">
                    <h4 class="calendar-title page-title">Календар</h4>
                    <div class="calendar-container">
                        <div class="calendar-header mb-20">
                            <div class="nav-buttons">
                                <button id="prev-btn">
                                    <img src="./img/icons/prev-btn.svg" alt="">
                                </button>
                                <button id="selected-period-btn">Обраний період</button>
                                <button id="next-btn">
                                    <img src="./img/icons/next-btn.svg" alt="">
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
        `;
        const headerContainer = this.container.querySelector('#header-container');
        const header = new Header(headerContainer);
        header.render();
    }
}