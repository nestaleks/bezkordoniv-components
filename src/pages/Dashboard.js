// Компонент Dashboard Page
const Dashboard = (props = {}) => {
    // Создаем breadcrumb для страницы Dashboard
    const breadcrumbComponent = typeof Breadcrumb !== 'undefined' ? Breadcrumb({ currentPage: 'Dashboard' }) : '';
    
    return `
        <main class="main">
            <!--BREADCRUMB-->
            ${breadcrumbComponent}
            <!--DASHBOARD-DIAGRAM-->
            <section class="dashboard">
                <div class="container">
                    <div class="dashboard-inner">
                        <h4 class="diagrams-title page-title">Дешборд</h4>
                        <div class="dashboard-banners">
                            <div class="dashboard-notification">
                                <div class="dashboard-notification-buttons">
                                    <a href="#" class="dashboard-notice">
                                        <img src="./src/img/icons/alarm.svg" alt="">
                                        <p class="dashboard-notice-text">Новини</p>
                                        <div class="dashboard-notification-btn">
                                            <img class="dashboard-notification-btn-img" src="./src/img/icons/details-white.svg" alt="">
                                            <p class="notice-count">5</p>
                                        </div>
                                    </a>
                                    <a href="#" class="dashboard-amount">
                                        <p class="dashboard-amount-text">Баланс:</p>
                                        <p>$120.00</p>
                                        <div class="dashboard-notification-btn">
                                            <img class="dashboard-notification-btn-img" src="./src/img/icons/details-white.svg" alt="">
                                        </div>
                                    </a>
                                    <a href="#" class="dashboard-messages">
                                        <img src="./src/img/icons/message.svg" alt="">
                                        <p class="dashboard-messages-text">Повідомлення</p>
                                        <div class="dashboard-notification-btn">
                                            <img class="dashboard-notification-btn-img" src="./src/img/icons/details-white.svg" alt="">
                                            <p class="messages-count">15</p>
                                        </div>
                                    </a>
                                    <a href="#" class="dashboard-appointment">
                                        <p class="dashboard-appointment-text">Наступна зустріч:</p>
                                        <p>12:34:47</p>
                                        <div class="dashboard-notification-btn">
                                            <img class="dashboard-notification-btn-img" src="./src/img/icons/details-white.svg" alt="">
                                            <p class="dashboard-appointment-count">5</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="dashboard-diagram">
                                <img class="dashboard-diagram-img" src="./src/img/diagram.svg" alt="">
                                <ul class="dashboard-diagram-list">
                                    <li class="diagram-list-item">
                                        <svg width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <circle id="Ellipse 3" cx="5.000000" cy="5.000000" r="5.000000" fill="#A35BFF" fill-opacity="1.000000"/>
                                        </svg>
                                        <p class="diagram-list-title">Doctors</p>
                                        <p class="diagram-list-number">12</p>
                                    </li>
                                    <li class="diagram-list-item">
                                        <svg width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <circle id="Ellipse 3" cx="5.000000" cy="5.000000" r="5.000000" fill="#F8B647" fill-opacity="1.000000"/>
                                        </svg>
                                        <p class="diagram-list-title">Legal Experts</p>
                                        <p class="diagram-list-number">8</p>
                                    </li>
                                    <li class="diagram-list-item">
                                        <svg width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <circle id="Ellipse 3" cx="5.000000" cy="5.000000" r="5.000000" fill="#4AC195" fill-opacity="1.000000"/>
                                        </svg>
                                        <p class="diagram-list-title">Teachers</p>
                                        <p class="diagram-list-number">2</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!--LAST MEETINGS-->
            <section class="last-meetings">
                <div class="container">
                    <p class="last-meetings-title mb-20">Останні зустрічі</p>
                    <div class="filters-dropdowns">
                        <button class="show-filters-btn button-contained">
                            <p>Показати фільтри</p>
                        </button>
                        <div class="filters-container">
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.33333 1.33334V4M9.66667 1.33334V4M1 6.66667H13M2.33333 2.66667H11.6667C12.403 2.66667 13 3.26362 13 4V13.3333C13 14.0697 12.403 14.6667 11.6667 14.6667H2.33333C1.59695 14.6667 1 14.0697 1 13.3333V4C1 3.26362 1.59695 2.66667 2.33333 2.66667Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    <p class="dropbtn-text">Дата</p>
                                    <img class="dropbtn-img-default" src="./src/img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./src/img/icons/cross.svg" alt="">
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
                                    <svg width="14.000000" height="14.000000" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M11.66 1C12.4 1 13 1.59 13 2.33L13 11.66C13 12.4 12.4 13 11.66 13L2.33 13C1.59 13 1 12.4 1 11.66L1 2.33C1 1.59 1.59 1 2.33 1L11.66 1ZM1 7L13 7M7 1L7 13" stroke="#000000" stroke-opacity="0.500000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                    <p class="dropbtn-text">Категорія</p>
                                    <img class="dropbtn-img-default" src="./src/img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./src/img/icons/cross.svg" alt="">
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
                                    <svg width="12.000000" height="14.666504" viewBox="0 0 12 14.6665" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector (Stroke)" d="M6 1.33C4.76 1.33 3.57 1.82 2.7 2.7C1.82 3.57 1.33 4.76 1.33 6C1.33 7.43 2.14 8.99 3.19 10.37C4.21 11.71 5.38 12.79 6 13.33C6.61 12.79 7.78 11.71 8.8 10.37C9.85 8.99 10.66 7.43 10.66 6C10.66 4.76 10.17 3.57 9.29 2.7C8.42 1.82 7.23 1.33 6 1.33ZM1.75 1.75C2.88 0.63 4.4 0 6 0C7.59 0 9.11 0.63 10.24 1.75C11.36 2.88 12 4.4 12 6C12 7.88 10.96 9.73 9.86 11.18C8.74 12.65 7.47 13.82 6.83 14.37C6.82 14.38 6.81 14.38 6.8 14.39C6.57 14.57 6.28 14.66 6 14.66C5.71 14.66 5.42 14.57 5.19 14.39C5.18 14.38 5.17 14.38 5.16 14.37C4.52 13.82 3.25 12.65 2.13 11.18C1.03 9.73 0 7.88 0 6C0 4.4 0.63 2.88 1.75 1.75ZM6 4.66C5.26 4.66 4.66 5.26 4.66 6C4.66 6.73 5.26 7.33 6 7.33C6.73 7.33 7.33 6.73 7.33 6C7.33 5.26 6.73 4.66 6 4.66ZM3.33 6C3.33 4.52 4.52 3.33 6 3.33C7.47 3.33 8.66 4.52 8.66 6C8.66 7.47 7.47 8.66 6 8.66C4.52 8.66 3.33 7.47 3.33 6Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd"/>
                                    </svg>
                                    <p class="dropbtn-text">Локація</p>
                                    <img class="dropbtn-img-default" src="./src/img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./src/img/icons/cross.svg" alt="">
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
                                <button class="dropbtn dropbtn-checkbox">
                                    <input type="checkbox" name="search-with-note" id="">
                                    <p class="dropbtn-text">Note</p>
                                </button>
                            </div>
                            <div class="filters-dropdown">
                                <button class="dropbtn dropbtn-search">
                                    <img src="./src/img/icons/search.svg" alt="">
                                    <input type="text" placeholder="Пошук">
                                </button>
                            </div>
                            <div class="filters-dropdown">
                                <button class="dropbtn dropbtn-checkbox">
                                    <input type="checkbox" name="search-with-documents" id="">
                                    <p class="dropbtn-text">Documents</p>
                                </button>
                            </div>
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <p class="dropbtn-text">Статус Оплати</p>
                                    <img class="dropbtn-img-default" src="./src/img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./src/img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Оплачено</a>
                                    <a href="#">Не оплачено</a>
                                </div>
                            </div>
                            <div class="filters-dropdown">
                                <button class="dropbtn">
                                    <p class="dropbtn-text">Статус Запису</p>
                                    <img class="dropbtn-img-default" src="./src/img/icons/accordion-arrow.svg" alt="">
                                    <img class="dropbtn-img-active" src="./src/img/icons/cross.svg" alt="">
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Очікування</a>
                                    <a href="#">Проведена</a>
                                    <a href="#">Скасована</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="last-meetings-list">
                        <li class="last-meeting-card">
                            <a href="" class="last-meeting-header">
                                <div class="last-meeting-img">
                                    <img src="./src/img/icons/calendar-yellow.svg" alt="">
                                </div>
                                <div class="last-meeting-details">
                                    <p class="last-meeting-title">Плановий візит</p>
                                    <div class="last-meeting-pills">
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
                                </div>
                            </a>
                            <div class="last-meeting-content">
                                <div class="last-meeting-status">
                                    <p>статус зустрічі</p>
                                    <img src="./src/img/icons/waiting.svg" alt="">
                                </div>
                                <div class="last-meeting-payment-status">
                                    <p>статус оплати</p>
                                    <img src="./src/img/icons/approoved.svg" alt="">
                                </div>
                                <div class="last-meeting-category">
                                    <a class="expert-category-lg" href="">
                                        <div class="">
                                            <p class="categories-list-title">Медицина</p>
                                        </div>
                                        <img class="categories-list-img" src="./src/img/icons/ctgr-list-med.svg" alt="">
                                    </a>
                                </div>
                                <div class="last-meeting-price">
                                    <p class="last-meeting-price-title">ціна за консультацію</p>
                                    <p class="last-meeting-price-value my-experts-price">25.00€</p>
                                </div>
                            </div>
                            <div class="last-meeting-files">
                                <button>
                                    <p>Файли: <span>0</span></p>
                                    <img src="./src/img/icons/files.svg" alt="">
                                </button>
                            </div>
                        </li>
                        <li class="last-meeting-card">
                            <a href="" class="last-meeting-header">
                                <div class="last-meeting-img">
                                    <img src="./src/img/icons/calendar-yellow.svg" alt="">
                                </div>
                                <div class="last-meeting-details">
                                    <p class="last-meeting-title">Плановий візит</p>
                                    <div class="last-meeting-pills">
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
                                </div>
                            </a>
                            <div class="last-meeting-content">
                                <div class="last-meeting-status">
                                    <p>статус зустрічі</p>
                                    <img src="./src/img/icons/waiting.svg" alt="">
                                </div>
                                <div class="last-meeting-payment-status">
                                    <p>статус оплати</p>
                                    <img src="./src/img/icons/Denied.svg" alt="">
                                </div>
                                <div class="last-meeting-category">
                                    <a class="expert-category-lg" href="">
                                        <div class="">
                                            <p class="categories-list-title">Освіта</p>
                                        </div>
                                        <img class="categories-list-img" src="./src/img/icons/ctgr-list-teacher.svg" alt="">
                                    </a>
                                </div>
                                <div class="last-meeting-price">
                                    <p class="last-meeting-price-title">ціна за консультацію</p>
                                    <p class="last-meeting-price-value my-experts-price">30.00€</p>
                                </div>
                            </div>
                            <div class="last-meeting-files">
                                <button>
                                    <p>Файли: <span>2</span></p>
                                    <img src="./src/img/icons/files.svg" alt="">
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>

        <script>
            // Dashboard functionality
            document.addEventListener('DOMContentLoaded', function() {
                // Update dashboard data based on user state
                function updateDashboardData() {
                    if (typeof window.userState !== 'undefined') {
                        // Update notification counts
                        const noticeCount = document.getElementById('notice-count');
                        const messagesCount = document.getElementById('messages-count');
                        const nextAppointment = document.getElementById('next-appointment');
                        const balanceAmount = document.getElementById('balance-amount');

                        if (noticeCount) noticeCount.textContent = window.userState.noticesCount || '5';
                        if (messagesCount) messagesCount.textContent = window.userState.messagesCount || '15';
                        if (nextAppointment) nextAppointment.textContent = window.userState.nextAppointment || '12:34:47';
                        if (balanceAmount) balanceAmount.textContent = window.userState.balance || '$120.00';
                    }
                }

                // Initialize dashboard data
                updateDashboardData();

                // Notification buttons handlers
                const notificationBtns = document.querySelectorAll('.dashboard-notification-btn');
                notificationBtns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const parent = this.closest('div');
                        const type = parent.classList.contains('dashboard-notice') ? 'notices' :
                                   parent.classList.contains('dashboard-messages') ? 'messages' :
                                   parent.classList.contains('dashboard-appointment') ? 'appointments' :
                                   'balance';
                        
                        console.log('Открытие раздела:', type);
                        // Здесь можно добавить логику перехода к соответствующим разделам
                    });
                });

                // Download files buttons
                const downloadBtns = document.querySelectorAll('.last-meeting-files button');
                downloadBtns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const meetingCard = this.closest('.last-meeting-card');
                        const meetingTitle = meetingCard.querySelector('.last-meeting-title').textContent;
                        
                        console.log('Загрузка файлов для встречи:', meetingTitle);
                        alert('Файлы для встречи "' + meetingTitle + '" будут загружены');
                    });
                });

                // Real-time updates (simulation)
                function simulateRealTimeUpdates() {
                    // Обновление времени до следующей встречи каждую секунду
                    const appointmentElement = document.getElementById('next-appointment');
                    if (appointmentElement) {
                        setInterval(() => {
                            const currentTime = appointmentElement.textContent;
                            const timeParts = currentTime.split(':');
                            let hours = parseInt(timeParts[0]);
                            let minutes = parseInt(timeParts[1]);
                            let seconds = parseInt(timeParts[2]);
                            
                            if (seconds > 0) {
                                seconds--;
                            } else if (minutes > 0) {
                                minutes--;
                                seconds = 59;
                            } else if (hours > 0) {
                                hours--;
                                minutes = 59;
                                seconds = 59;
                            }
                            
                            const formattedTime = 
                                (hours < 10 ? '0' : '') + hours + ':' +
                                (minutes < 10 ? '0' : '') + minutes + ':' +
                                (seconds < 10 ? '0' : '') + seconds;
                            
                            appointmentElement.textContent = formattedTime;
                        }, 1000);
                    }
                }

                // Start real-time updates
                simulateRealTimeUpdates();

                // Card hover effects
                const meetingCards = document.querySelectorAll('.last-meeting-card');
                meetingCards.forEach(card => {
                    card.addEventListener('mouseenter', function() {
                        this.style.transform = 'translateY(-5px)';
                    });
                    
                    card.addEventListener('mouseleave', function() {
                        this.style.transform = 'translateY(0)';
                    });
                });
            });
        </script>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Dashboard;
}