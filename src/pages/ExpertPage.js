// Компонент ExpertPage - детальна сторінка експерта
const ExpertPage = (props = {}) => {
    return `
        <main class="main">
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <div class="to-prev-page">
                <div class="container">
                    <a class="prev-page-btn" href="/experts" data-link>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Назад</p>
                    </a>
                </div>
            </div>
            <section class="expert-card">
                <div class="container">
                    <div class="expert-card-inner">
                        <div class="expert-card-left">
                            <div class="expert-card-head">
                                <img class="expert-card-head-img" src="./src/img/expert-1.png" alt="">
                                <div class="expert-card-head-info">
                                    <p class="expert-card-name">Антон Багінський</p>
                                    <a class="expert-card-country highlight-pill" href="#">
                                        <img src="./src/img/icons/location.svg" alt="">
                                        <p>Німеччина</p>
                                    </a>
                                    <div class="expert-card-amount">
                                        <div class="expert-card-amount-rating highlight-pill">
                                            <img src="./src/img/icons/star.svg" alt="">
                                            <p>4,5 / 5</p>
                                        </div>
                                        <div class="expert-card-amount-appoints highlight-pill">
                                            <img src="./src/img/icons/clients.svg" alt="">
                                            <p>12 консультацій</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="expert-card-buttons expert-card-buttons-mobile">
                                    <button class="experts-new-appointment button-primary">
                                        <p>Записатись</p>
                                    </button>
                                    <button class="experts-write-message button-secondary">
                                        <p>Звʼязатись</p>
                                    </button>
                                </div>
                            </div>
                            <div class="tabs">
                                <div class="tabs-inner">
                                    <button class="tabs-item expert-card-tabs-info active">
                                        <p>Загальна Інформація</p>
                                    </button>
                                    <button class="tabs-item expert-card-tabs-service">
                                        <p>Сервіс</p>
                                    </button>
                                </div>
                            </div>
                            <div class="expert-card-info-box">
                                <ul class="expert-card-info-items">
                                    <li class="expert-card-info-item">
                                        <p class="expert-card-info-title">спеціальність</p>
                                        <p class="expert-card-info-value">Сімейний лікар</p>
                                    </li>
                                    <li class="expert-card-info-item">
                                        <a class="expert-category-sm" href="">
                                            <p>Медицина</p>
                                            <img src="./src/img/icons/ctgr-list-med.svg" alt="">
                                        </a>
                                    </li>
                                    <li class="expert-card-info-item">
                                        <p class="expert-card-info-title">досвід</p>
                                        <p class="expert-card-info-value">4 роки</p>
                                    </li>
                                    <li class="expert-card-info-item">
                                        <p class="expert-card-info-title">вік</p>
                                        <p class="expert-card-info-value">44 р.</p>
                                    </li>
                                    <li class="expert-card-info-item">
                                        <p class="expert-card-info-title">ціна за консультацію</p>
                                        <p class="expert-card-info-value expert-card-price">50.00€</p>
                                    </li>
                                    <li class="expert-card-info-item">
                                        <p class="expert-card-info-title">мови</p>
                                        <p class="expert-card-info-value" style="max-height: fit-content; overflow: visible;">Українська, німецька, англійська</p>
                                    </li>
                                </ul>
                                <div class="expert-card-work">
                                    <p class="expert-card-work-title">робота</p>
                                    <p class="expert-card-work-value">Сімейний лікар із багаторічним досвідом у загальній терапії, діагностиці та лікуванні широкого спектра захворювань у дорослих і дітей. Спеціалізуюся на профілактичній медицині, індивідуальному підході до кожного пацієнта та веденні хронічних захворювань. Постійно вдосконалюю свої знання, дотримуючись сучасних медичних стандартів і рекомендацій.</p>
                                </div>
                                <div class="expert-card-practice">
                                    <p class="expert-card-practice-title">практика</p>
                                    <p class="expert-card-practice-value">У практиці я приділяю особливу увагу комплексному підходу до здоров'я пацієнтів, поєднуючи сучасні методи діагностики, ефективне лікування та профілактичні заходи. Веду пацієнтів із хронічними захворюваннями, надаю консультації з питань здорового способу життя та своєчасної профілактики. Завдяки багаторічному досвіду та постійному навчанню забезпечую високий рівень медичної допомоги для всієї родини.</p>
                                </div>
                                <div class="expert-card-verification">
                                    <p class="expert-card-verification-title">верифікація</p>
                                    <div class="expert-card-verification-box" data-modal="verification">
                                        <img src="./src/img/icons/check-blue.svg" alt="">
                                        <p>ВЕРИФІКОВАНИЙ ЕКСПЕРТ</p>
                                        <img src="./src/img/icons/info.svg" alt="">
                                    </div>
                                    <div class="expert-card-verification-box" data-modal="founder">
                                        <img src="./src/img/icons/check-blue.svg" alt="">
                                        <p>ЕКСПЕРТ засновник</p>
                                        <img src="./src/img/icons/info.svg" alt="">
                                    </div>
                                </div>
                                <div class="expert-card-certificates">
                                    <p class="expert-card-certificates-title">сертифікати</p>
                                    <ul class="expert-card-certificates-list">
                                        <li class="expert-card-certificates-item">
                                            <img src="./src/img/icons/documents.svg" alt="">
                                            <p>Files</p>
                                        </li>
                                        <li class="expert-card-certificates-item">
                                            <img src="./src/img/icons/documents.svg" alt="">
                                            <p>Files</p>
                                        </li>
                                        <li class="expert-card-certificates-item">
                                            <img src="./src/img/icons/documents.svg" alt="">
                                            <p>Files</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="expert-card-service-box" style="display: none;">
                                <ul class="expert-card-service-items">
                                    <li class="expert-card-service-item">
                                        <div class="expert-card-service-top">
                                            <p>Первинна бізнес-консультація</p>
                                            <div class="expert-card-service-price">
                                                <img src="./src/img/icons/money-purple.svg" alt="" class="icon">
                                                <p>100€</p>
                                                <p>/</p>
                                                <p>45 хвилин</p>
                                            </div>
                                        </div>
                                        <div class="expert-card-service-details">
                                            <div class="expert-card-service-detail">
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>45 хвилин</p>
                                            </div>
                                            <div class="expert-card-service-detail">
                                                <img src="./src/img/icons/message.svg" alt="">
                                                <p>З подальшим листуванням</p>
                                            </div>
                                        </div>
                                        <p class="expert-card-service-about">Комплексна оцінка юридичних потреб вашого бізнесу та поточного стану відповідності. Включає визначення потенційних юридичних ризиків, обговорення нормативних вимог і стратегічні рекомендації, адаптовані до вашої конкретної ситуації.</p>
                                        <button class="experts-new-appointment button-primary">
                                            <p>Записатись</p>
                                        </button>
                                    </li>
                                    <li class="expert-card-service-item">
                                        <div class="expert-card-service-top">
                                            <p>Огляд контракту та консультація</p>
                                            <div class="expert-card-service-price">
                                                <img src="./src/img/icons/money-purple.svg" alt="" class="icon">
                                                <p>100€</p>
                                                <p>/</p>
                                                <p>1 година</p>
                                            </div>
                                        </div>
                                        <div class="expert-card-service-details">
                                            <div class="expert-card-service-detail">
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>1 година</p>
                                            </div>
                                            <div class="expert-card-service-detail">
                                                <img src="./src/img/icons/message.svg" alt="">
                                                <p>З подальшим листуванням</p>
                                            </div>
                                        </div>
                                        <p class="expert-card-service-about">Детальний аналіз ваших існуючих або запропонованих контрактів із зосередженням на визначенні несприятливих умов, потенційних зобов'язань і областей для покращення. Включає консультації щодо стратегій переговорів і рекомендованих змін.</p>
                                        <button class="experts-new-appointment button-primary">
                                            <p>Записатись</p>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="expert-card-right">
                            <div class="expert-card-buttons expert-card-buttons-desktop">
                                <button class="experts-new-appointment button-primary">
                                    <p>Записатись</p>
                                </button>
                                <button class="experts-write-message button-secondary">
                                    <p>Звʼязатись</p>
                                </button>
                            </div>
                            <div class="expert-card-reviews">
                                <div class="expert-card-rating">
                                    <p class="expert-card-rating-title">загальний рейтинг</p>
                                    <p class="expert-card-rating-numbers mb-20">4,5 / 5</p>
                                </div>
                                <div class="expert-card-allreview">
                                    <p class="expert-card-allreview-title">загальна кількість відгуків</p>
                                    <div class="expert-card-allreview-details mb-20">
                                        <p class="expert-card-allreview-numbers">14</p>
                                        <a class="expert-card-allreview-link" href="">Показати ще</a>
                                    </div>
                                </div>
                                <ul class="expert-card-lastreviews">
                                    <li class="expert-card-lastreview">
                                        <div class="expert-card-lastreview-left">
                                            <img class="expert-card-lastreview-photo" src="./src/img/expert-3.png" alt="">
                                            <p class="expert-card-lastreview-rating">4,5/5</p>
                                        </div>
                                        <div class="expert-card-lastreview-right">
                                            <div class="expert-card-lastreview-title">
                                                <p class="expert-card-lastreview-name">Анна Макаренко</p>
                                                <p class="expert-card-lastreview-date">02.03.2025, 12:15</p>
                                            </div>
                                            <p class="expert-card-lastreview-text">Чудовий лікар! Дуже уважний, професійний. Детально пояснює все, що потрібно, і завжди підтримує. Велике дякую за допомогу та турботу!</p>
                                        </div>
                                    </li>
                                    <li class="expert-card-lastreview">
                                        <div class="expert-card-lastreview-left">
                                            <img class="expert-card-lastreview-photo" src="./src/img/expert-3.png" alt="">
                                            <p class="expert-card-lastreview-rating">4,5/5</p>
                                        </div>
                                        <div class="expert-card-lastreview-right">
                                            <div class="expert-card-lastreview-title">
                                                <p class="expert-card-lastreview-name">Анна Макаренко</p>
                                                <p class="expert-card-lastreview-date">02.03.2025, 12:15</p>
                                            </div>
                                            <p class="expert-card-lastreview-text">Чудовий лікар! Дуже уважний, професійний. Детально пояснює все, що потрібно, і завжди підтримує. Велике дякую за допомогу та турботу!</p>
                                        </div>
                                    </li>
                                    <li class="expert-card-lastreview">
                                        <div class="expert-card-lastreview-left">
                                            <img class="expert-card-lastreview-photo" src="./src/img/expert-3.png" alt="">
                                            <p class="expert-card-lastreview-rating">4,5/5</p>
                                        </div>
                                        <div class="expert-card-lastreview-right">
                                            <div class="expert-card-lastreview-title">
                                                <p class="expert-card-lastreview-name">Анна Макаренко</p>
                                                <p class="expert-card-lastreview-date">02.03.2025, 12:15</p>
                                            </div>
                                            <p class="expert-card-lastreview-text">Чудовий лікар! Дуже уважний, професійний. Детально пояснює все, що потрібно, і завжди підтримує. Велике дякую за допомогу та турботу!</p>
                                        </div>
                                    </li>
                                </ul>
                                <div class="expert-card-addrating">
                                    <p class="expert-card-addrating-title">Рейтинг</p>
                                    <p class="expert-card-addrating-text mb-12">Додайте рейтинг до вашого відгуку</p>
                                    <div class="rating-stars">
                                        <form action="">
                                            <input class="star star-5" id="star-5-2" type="radio" name="star"/>
                                            <label class="star star-5" for="star-5-2"></label>
                                            <input class="star star-4" id="star-4-2" type="radio" name="star"/>
                                            <label class="star star-4" for="star-4-2"></label>
                                            <input class="star star-3" id="star-3-2" type="radio" name="star"/>
                                            <label class="star star-3" for="star-3-2"></label>
                                            <input class="star star-2" id="star-2-2" type="radio" name="star"/>
                                            <label class="star star-2" for="star-2-2"></label>
                                            <input class="star star-1" id="star-1-2" type="radio" name="star"/>
                                            <label class="star star-1" for="star-1-2"></label>
                                        </form>
                                    </div>
                                </div>
                                <div class="expert-card-addreview">
                                    <p class="expert-card-addreview-title">Відгук</p>
                                    <p class="expert-card-addreview-text mb-12">Додайте коментар до вашого відгуку</p>
                                    <div class="addreview-container">
                                        <div class="addreview-toolbar">
                                            <button>
                                                <img src="./src/img/icons/toolbar-1.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-2.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-3.svg" alt="">
                                            </button>
                                            <div class="addreview-toolbar-divider"></div>
                                            <button>
                                                <img src="./src/img/icons/toolbar-4.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-5.svg" alt="">
                                            </button>
                                            <div class="addreview-toolbar-divider"></div>
                                            <button>
                                                <img src="./src/img/icons/toolbar-6.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-7.svg" alt="">
                                            </button>
                                        </div>
                                        <textarea class="review-textarea" placeholder="Додати коментар"></textarea>
                                    </div>
                                </div>
                                <div class="expert-card-addreview-buttons">
                                    <button class="button-secondary">
                                        <p>Відмінити</p>
                                    </button>
                                    <button class="button-contained">
                                        <p>Додати</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="modal-verification" class="modal modal-verification">
                <div class="modal-content">
                    <div class="modal-window-close">
                        <img src="./src/img/icons/close.svg" alt="">
                    </div>
                    <p class="modal-verification-title">Цей фахівець пройшов <span>багатоетапну перевірку</span> платформи <span>"Без кордонів"</span>:</p>
                    <div class="modal-verification-box">
                        <img src="./src/img/icons/check-blue.svg" alt="">
                        <p>ВЕРИФІКОВАНИЙ ЕКСПЕРТ</p>
                    </div>
                    <p class="modal-verification-text">Цей фахівець пройшов багатоетапну перевірку платформи "Без кордонів":</p>
                    <ul class="modal-verification-list">
                        <li class="modal-verification-item">
                            <p>Підтверджена особа через офіційні документиe</p>
                        </li>
                        <li class="modal-verification-item">
                            <p>Перевірені професійні дипломи та сертифікати</p>
                        </li>
                        <li class="modal-verification-item">
                            <p>Підтверджений досвід роботи від 2+ років</p>
                        </li>
                        <li class="modal-verification-item">
                            <p>Пройдено професійне інтерв'ю зі спеціалістом галузі</p>
                        </li>
                        <li class="modal-verification-item">
                            <p>Дотримання стандартів етики та якості обслуговування</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="modal-founder" class="modal modal-founder">
                <div class="modal-content">
                    <div class="modal-window-close">
                        <img src="./src/img/icons/close.svg" alt="">
                    </div>
                    <p class="modal-founder-title">Цей фахівець пройшов <span>багатоетапну перевірку</span> платформи <span>"Без кордонів"</span>:</p>
                    <div class="modal-founder-box">
                        <img src="./src/img/icons/check-blue.svg" alt="">
                        <p>Експерт-засновник</p>
                    </div>
                    <p class="modal-founder-text">Цей фахівець пройшов багатоетапну перевірку платформи "Без кордонів":</p>
                    <ul class="modal-founder-list">
                        <li class="modal-founder-item">
                            <p>Підтверджена особа через офіційні документиe</p>
                        </li>
                        <li class="modal-founder-item">
                            <p>Перевірені професійні дипломи та сертифікати</p>
                        </li>
                        <li class="modal-founder-item">
                            <p>Підтверджений досвід роботи від 2+ років</p>
                        </li>
                        <li class="modal-founder-item">
                            <p>Пройдено професійне інтерв'ю зі спеціалістом галузі</p>
                        </li>
                        <li class="modal-founder-item">
                            <p>Дотримання стандартів етики та якості обслуговування</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>

    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExpertPage;
}