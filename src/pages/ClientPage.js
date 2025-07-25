// Компонент ClientPage - сторінка клієнта
const ClientPage = (props = {}) => {
    const clientId = props.clientId || '1';
    
    // Дані клієнтів (в реальному проекті будуть завантажуватись з API)
    const clientsData = {
        '1': {
            name: 'Константин Вакуленко',
            avatar: './src/img/expert-7.png',
            consultations: 12,
            country: 'Німеччина',
            age: 24,
            email: 'emailexm@gmail.com',
            phone: '+49 123 4567 2100',
            language: 'Українська',
            registration: '2025-01-01'
        },
        '2': {
            name: 'Карина Мартиненко',
            avatar: './src/img/expert-8.png',
            consultations: 8,
            country: 'Данія',
            age: 28,
            email: 'karina.m@email.com',
            phone: '+45 987 6543 210',
            language: 'Українська',
            registration: '2024-12-15'
        },
        '3': {
            name: 'Іванна Поліщук',
            avatar: './src/img/expert-9.png',
            consultations: 15,
            country: 'Польща',
            age: 31,
            email: 'ivanna.p@email.com',
            phone: '+48 123 456 789',
            language: 'Українська',
            registration: '2024-11-20'
        },
        '4': {
            name: 'Остап Шевченко',
            avatar: './src/img/expert-10.png',
            consultations: 6,
            country: 'Чехія',
            age: 26,
            email: 'ostap.s@email.com',
            phone: '+420 987 654 321',
            language: 'Українська',
            registration: '2024-10-05'
        }
    };
    
    const client = clientsData[clientId] || clientsData['1'];
    return `
        <main class="main">
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--MY EXPERTS-->
            <section class="client-page">
                <div class="container">
                    <h4 class="client-page-title page-title">${client.name}</h4>
                    <!--CLIENT-->
                    <div class="client-box">
                        <div class="client-card">
                            <div class="client-content">
                                <div class="client-img">
                                    <img src="${client.avatar}" alt="">
                                </div>
                                <div class="client-info">
                                    <a class="client-name" href="/client" data-link data-client-id="${clientId}">${client.name}</a>
                                    <div class="client-data">
                                        <div class="client-appoints highlight-pill">
                                            <img src="./src/img/icons/clients.svg" alt="">
                                            <p>${client.consultations} <span>консультацій</span></p>
                                        </div>
                                        <a class="client-country highlight-pill" href="#">${client.country}</a>
                                        <div class="client-age highlight-pill">
                                            <img src="./src/img/icons/age.svg" alt="">
                                            <p>${client.age} <span>роки</span></p>
                                        </div>
                                        <div class="client-mail highlight-pill">
                                            <img src="./src/img/icons/mail.svg" alt="">
                                            <p>${client.email}</p>
                                        </div>
                                        <div class="client-phone highlight-pill">
                                            <img src="./src/img/icons/phone.svg" alt="">
                                            <p>${client.phone}</p>
                                        </div>
                                        <div class="client-language highlight-pill">
                                            <img src="./src/img/icons/translator-black.svg" alt="">
                                            <p>${client.language}</p>
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
                                    <img src="./src/img/icons/time-green.svg" alt="">
                                    <p>${client.registration}</p>
                                    <img src="./src/img/icons/info.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="client-history hidden">
                            <ul class="client-history-list">
                                <li class="client-history-card">
                                    <a href="" class="client-history-header">
                                        <div class="client-history-img">
                                            <img src="./src/img/icons/calendar-yellow.svg" alt="">
                                        </div>
                                        <div class="client-history-details">
                                            <p class="client-history-title">Плановий візит</p>
                                            <div class="client-history-pills">
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
                                    <div class="client-history-content">
                                        <div class="client-history-status">
                                            <p>статус зустрічі</p>
                                            <img src="./src/img/icons/waiting.svg" alt="">
                                        </div>
                                        <div class="client-history-payment-status">
                                            <p>статус оплати</p>
                                            <img src="./src/img/icons/approoved.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="client-history-files">
                                        <button>
                                            <p>Файли: <span>0</span></p>
                                            <img src="./src/img/icons/files.svg" alt="">
                                        </button>
                                    </div>
                                </li>
                                <li class="client-history-card">
                                    <a href="" class="client-history-header">
                                        <div class="client-history-img">
                                            <img src="./src/img/icons/calendar-yellow.svg" alt="">
                                        </div>
                                        <div class="client-history-details">
                                            <p class="client-history-title">Плановий візит</p>
                                            <div class="client-history-pills">
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
                                    <div class="client-history-content">
                                        <div class="client-history-status">
                                            <p>статус зустрічі</p>
                                            <img src="./src/img/icons/waiting.svg" alt="">
                                        </div>
                                        <div class="client-history-payment-status">
                                            <p>статус оплати</p>
                                            <img src="./src/img/icons/Denied.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="client-history-files">
                                        <button>
                                            <p>Файли: <span>2</span></p>
                                            <img src="./src/img/icons/files.svg" alt="">
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>

    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClientPage;
}