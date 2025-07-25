// Компонент ClientWallet - гаманець клієнта
const ClientWallet = (props = {}) => {
    return `
        <main class="main">
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--Client Wallet-->
             <section class="client-wallet-page">
                <div class="container">
                    <h4 class="client-wallet-title page-title">Гаманець</h4>
                    <div class="client-wallet-balance mb-20">
                        <div class="client-wallet-info mb-12">
                            <img src="./src/img/icons/money-blue.svg" alt="">
                            <div class="client-wallet-text">
                                <p>доступний баланс</p>
                                <p>$120.00</p>
                            </div>
                        </div>
                        <div class="client-wallet-available mb-12">
                            <div class="client-wallet-item">
                                <p>Весь Баланс: </p>
                                <p>$240.00</p>
                            </div>
                            <div class="client-wallet-item">
                                <p>Зарезервований Баланс: </p>
                                <p>$120.00</p>
                            </div>
                            <div class="client-wallet-item">
                                <p>Доступний Баланс: </p>
                                <p>$120.00</p>
                            </div>
                        </div>
                        <div class="client-wallet-buttons">
                            <button type="button" class="client-wallet-incoming button-primary" data-modal="modal-recharge-balance">
                                <img src="./src/img/icons/incoming.svg" alt="">
                                <p>Поповнити баланс</p>
                            </button>
                            <button type="button" class="client-wallet-outcoming button-primary" data-modal="modal-pay-appointments">
                                <img src="./src/img/icons/outcoming.svg" alt="">
                                <p>Cплатити Зустріч</p>
                            </button>
                        </div>
                    </div>
                    <div class="client-wallet-history">
                        <div class="wallet-history-head">
                            <div class="wallet-history-head-inner">
                                <p class="wallet-history-title subtitle-2">Історія Оплат</p>
                                <div class="wallet-history-tabs">
                                    <button class="view-btn active" data-view="day">День</button>
                                    <button class="view-btn" data-view="week">Тиждень</button>
                                    <button class="view-btn" data-view="month">Місяць</button>
                                </div>
                            </div>
                        </div>
                        <div class="wallet-history-body">
                            <div class="wallet-history-filters mb-20">
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
                                        <p class="dropbtn-text">Статус Оплати</p>
                                        <img class="dropbtn-img-default" src="./src/img/icons/accordion-arrow.svg" alt="">
                                        <img class="dropbtn-img-active" src="./src/img/icons/cross.svg" alt="">
                                    </button>
                                    <div class="dropdown-content">
                                        <a href="#">Оплачено</a>
                                        <a href="#">Не оплачено</a>
                                    </div>
                                </div>
                                <button class="sorting-by">
                                    <img src="./src/img/icons/sorting-by.svg" alt="">
                                </button>
                            </div>
                            <ul class="wallet-history-list">
                                <li class="wallet-history-item">
                                    <div class="history-expert-box">
                                        <img src="./src/img/expert-5.png" alt="">
                                        <div class="history-expert-info">
                                            <p>Антон Багінський</p>
                                            <p>Сімейний лікар</p>
                                        </div>
                                    </div>
                                    <div class="history-date">
                                        <p>02.02.2025 <span>12:15</span></p>
                                    </div>
                                    <div class="history-price">
                                        <p>-55,00</p>
                                    </div>
                                    <div class="history-status">
                                        <img src="./src/img/icons/fee-paid.svg" alt="">
                                    </div>
                                </li>
                                <li class="wallet-history-item">
                                    <div class="history-expert-box">
                                        <img src="./src/img/expert-3.png" alt="">
                                        <div class="history-expert-info">
                                            <p>Марина Костенкой</p>
                                            <p>Адвокат</p>
                                        </div>
                                    </div>
                                    <div class="history-date">
                                        <p>02.02.2025 <span>12:15</span></p>
                                    </div>
                                    <div class="history-price">
                                        <p>-85,00</p>
                                    </div>
                                    <div class="history-status">
                                        <img src="./src/img/icons/fee-paid.svg" alt="">
                                    </div>
                                </li>
                                <li class="wallet-history-item">
                                    <div class="history-expert-box">
                                        <img src="./src/img/expert-6.png" alt="">
                                        <div class="history-expert-info">
                                            <p>Анна Поліщук</p>
                                            <p>Графічний дизайнер</p>
                                        </div>
                                    </div>
                                    <div class="history-date">
                                        <p>02.02.2025 <span>12:15</span></p>
                                    </div>
                                    <div class="history-price">
                                        <p>-55,00</p>
                                    </div>
                                    <div class="history-status">
                                        <img src="./src/img/icons/appoints-canceled.svg" alt="">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- modal windows -->
                    <div class="client-wallet-modal">
                        <!-- modal window charge balance -->
                        <div class="modal modal-recharge-balance" id="modal-recharge-balance">
                            <div class="modal-content">
                                <div class="modal-window-close">
                                    <img src="./src/img/icons/close.svg" alt="Закрыть">
                                </div>
                                <div class="modal-header">
                                    <h3 class="subtitle-2">Поповнити Баланс</h3>
                                </div>
                                <div class="modal-body">
                                    <p class="modal-description">Будь ласка введіть данні картки, щоб поповнити баланс</p>

                                    <div class="client-wallet-modal-card-info">
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
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="client-wallet-modal-button button-secondary modal-close-btn">
                                        <p>Відмінити</p>
                                    </button>
                                    <button type="button" class="client-wallet-modal-button button-primary modal-pay-btn">
                                        <p>Продовжити</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- modal window pay appointment list-->
                        <div class="modal modal-pay-appointments" id="modal-pay-appointments">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title">Сплатити Зустріч</h3>
                                    <div class="modal-window-close">
                                        <img src="./src/img/icons/close.svg" alt="Закрыть">
                                    </div>
                                </div>
                                <div class="modal-body">
                                    <p class="modal-description">Будь ласка оберіть зустріч, яку ві б хотіли сплатити</p>

                                    <div class="payment-modal-appointments">
                                        <div class="payment-appointment-item">
                                            <div class="payment-appointment-date">
                                                <img src="./src/img/icons/calendar-gray.svg" alt="">
                                                <p>04.03.2025</p>
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>9:00</p>
                                                <img src="./src/img/icons/location.svg" alt="">
                                                <p>Online</p>
                                            </div>
                                            <div class="payment-appointment-expert">
                                                <div class="payment-appointment-expert-info">
                                                    <img src="./src/img/expert-5.png" alt="">
                                                    <div class="payment-expert-info">
                                                        <p>Антон Багінський. Перша Консультація</p>
                                                        <p>Сімейний лікар</p>
                                                    </div>
                                                </div>
                                                <div class="payment-appointment-actions">
                                                    <div class="payment-appointment-price">
                                                        <img src="./src/img/icons/money.svg" alt="">
                                                        <p>$100.00</p>
                                                    </div>
                                                    <button type="button" class="button-primary payment-btn">
                                                        <img src="./src/img/icons/money-white.svg" alt="">
                                                        <p>Сплатити</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment-appointment-item">
                                            <div class="payment-appointment-date">
                                                <img src="./src/img/icons/calendar-gray.svg" alt="">
                                                <p>12.03.2025</p>
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>9:00</p>
                                                <img src="./src/img/icons/location.svg" alt="">
                                                <p>Alte Elbgaustraße 14</p>
                                            </div>
                                            <div class="payment-appointment-expert">
                                                <div class="payment-appointment-expert-info">
                                                    <img src="./src/img/expert-3.png" alt="">
                                                    <div class="payment-expert-info">
                                                        <p>Марта Скандинавська. Пломбування</p>
                                                        <p>Дантист</p>
                                                    </div>
                                                </div>
                                                <div class="payment-appointment-actions">
                                                    <div class="payment-appointment-price">
                                                        <img src="./src/img/icons/money.svg" alt="">
                                                        <p>$100.00</p>
                                                    </div>
                                                    <button type="button" class="button-primary payment-btn">
                                                        <img src="./src/img/icons/money-white.svg" alt="">
                                                        <p>Сплатити</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment-appointment-item">
                                            <div class="payment-appointment-date">
                                                <img src="./src/img/icons/calendar-gray.svg" alt="">
                                                <p>04.03.2025</p>
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>9:00</p>
                                                <img src="./src/img/icons/location.svg" alt="">
                                                <p>Online</p>
                                            </div>
                                            <div class="payment-appointment-expert">
                                                <div class="payment-appointment-expert-info">
                                                    <img src="./src/img/expert-6.png" alt="">
                                                    <div class="payment-expert-info">
                                                        <p>Андрій Макаренко. Встановлення програм</p>
                                                        <p>Системний Адміністратор</p>
                                                    </div>
                                                </div>
                                                <div class="payment-appointment-actions">
                                                    <div class="payment-appointment-price">
                                                        <img src="./src/img/icons/money.svg" alt="">
                                                        <p>$100.00</p>
                                                    </div>
                                                    <button type="button" class="button-primary payment-btn">
                                                        <img src="./src/img/icons/money-white.svg" alt="">
                                                        <p>Сплатити</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="client-wallet-modal-button button-secondary modal-close-btn">
                                        <p>Відмінити</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- modal window pay appointment item-->
                        <div class="modal modal-pay-appointment-item" id="modal-pay-appointment-item">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title">Cплатити Зустріч</h3>
                                </div>
                                <p class="modal-description">Будь ласка оберіть тип оплати</p>
                                <div class="modal-body">
                                    <div class="payment-appointment-item">
                                        <div class="payment-appointment-date">
                                            <img src="./src/img/icons/calendar-gray.svg" alt="">
                                            <p>04.03.2025</p>
                                            <img src="./src/img/icons/time.svg" alt="">
                                            <p>9:00</p>
                                            <img src="./src/img/icons/location.svg" alt="">
                                            <p>Online</p>
                                        </div>
                                        <div class="payment-appointment-expert">
                                            <div class="payment-appointment-expert-info">
                                                <img src="./src/img/expert-6.png" alt="">
                                                <div class="payment-expert-info">
                                                    <p>Андрій Макаренко. Встановлення програм</p>
                                                    <p>Системний Адміністратор</p>
                                                </div>
                                            </div>
                                            <div class="payment-appointment-actions payment-price-pill">
                                                <p>ціна зустрічі</p>
                                                <div class="payment-appointment-price">
                                                    <img src="./src/img/icons/money.svg" alt="">
                                                    <p>$100.00</p>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div class="payment-modal-card">
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
                            </div>
                        </div>

                        <!-- modal window pay new card-->
                        <div class="modal modal-pay-appointment-item" id="payment-modal-newcard">
                            <div class="modal-content">
                                <div class="modal-window-close">
                                    <img src="./src/img/icons/close.svg" alt="">
                                </div>
                                <div class="modal-header">
                                    <h3 class="modal-title">Оплата карткою</h3>
                                </div>
                                <div class="to-prev-page">
                                    <a class="prev-page-btn" href="">
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p>Назад</p>
                                    </a>
                                </div>
                                <div class="modal-body">
                                    <p class="modal-description">Введіть деталі картки</p>
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
                    </div>

                </div>
            </section>
            <!-- modal windows -->
            <div class="client-wallet-modal">
            <!-- modal window charge balance -->
                        <div class="modal modal-recharge-balance" id="modal-recharge-balance">
                            <div class="modal-content">
                                <div class="modal-window-close">
                                    <img src="./src/img/icons/close.svg" alt="Закрыть">
                                </div>
                                <div class="modal-header">
                                    <h3 class="subtitle-2">Поповнити Баланс</h3>
                                </div>
                                <div class="modal-body">
                                    <p class="modal-description">Будь ласка введіть данні картки, щоб поповнити баланс</p>
                                    
                                    <div class="client-wallet-modal-card-info">
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
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="client-wallet-modal-button button-secondary modal-close-btn">
                                        <p>Відмінити</p>
                                    </button>
                                    <button type="button" class="client-wallet-modal-button button-primary modal-pay-btn">
                                        <p>Продовжити</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- modal window pay appointment list-->
                        <div class="modal modal-pay-appointments" id="modal-pay-appointments">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title">Сплатити Зустріч</h3>
                                    <div class="modal-window-close">
                                        <img src="./src/img/icons/close.svg" alt="Закрыть">
                                    </div>
                                </div>
                                <div class="modal-body">
                                    <p class="modal-description">Будь ласка оберіть зустріч, яку ві б хотіли сплатити</p>
                                    
                                    <div class="payment-modal-appointments">
                                        <div class="payment-appointment-item">
                                            <div class="payment-appointment-date">
                                                <img src="./src/img/icons/calendar-gray.svg" alt="">
                                                <p>04.03.2025</p>
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>9:00</p>
                                                <img src="./src/img/icons/location.svg" alt="">
                                                <p>Online</p>
                                            </div>
                                            <div class="payment-appointment-expert">
                                                <div class="payment-appointment-expert-info">
                                                    <img src="./src/img/expert-5.png" alt="">
                                                    <div class="payment-expert-info">
                                                        <p>Антон Багінський. Перша Консультація</p>
                                                        <p>Сімейний лікар</p>
                                                    </div>
                                                </div>
                                                <div class="payment-appointment-actions">
                                                    <div class="payment-appointment-price">
                                                        <img src="./src/img/icons/money.svg" alt="">
                                                        <p>$100.00</p>
                                                    </div>
                                                    <button type="button" class="button-primary payment-btn">
                                                        <img src="./src/img/icons/money-white.svg" alt="">
                                                        <p>Сплатити</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment-appointment-item">
                                            <div class="payment-appointment-date">
                                                <img src="./src/img/icons/calendar-gray.svg" alt="">
                                                <p>12.03.2025</p>
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>9:00</p>
                                                <img src="./src/img/icons/location.svg" alt="">
                                                <p>Alte Elbgaustraße 14</p>
                                            </div>
                                            <div class="payment-appointment-expert">
                                                <div class="payment-appointment-expert-info">
                                                    <img src="./src/img/expert-3.png" alt="">
                                                    <div class="payment-expert-info">
                                                        <p>Марта Скандинавська. Пломбування</p>
                                                        <p>Дантист</p>
                                                    </div>
                                                </div>
                                                <div class="payment-appointment-actions">
                                                    <div class="payment-appointment-price">
                                                        <img src="./src/img/icons/money.svg" alt="">
                                                        <p>$100.00</p>
                                                    </div>
                                                    <button type="button" class="button-primary payment-btn">
                                                        <img src="./src/img/icons/money-white.svg" alt="">
                                                        <p>Сплатити</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="payment-appointment-item">
                                            <div class="payment-appointment-date">
                                                <img src="./src/img/icons/calendar-gray.svg" alt="">
                                                <p>04.03.2025</p>
                                                <img src="./src/img/icons/time.svg" alt="">
                                                <p>9:00</p>
                                                <img src="./src/img/icons/location.svg" alt="">
                                                <p>Online</p>
                                            </div>
                                            <div class="payment-appointment-expert">
                                                <div class="payment-appointment-expert-info">
                                                    <img src="./src/img/expert-6.png" alt="">
                                                    <div class="payment-expert-info">
                                                        <p>Андрій Макаренко. Встановлення програм</p>
                                                        <p>Системний Адміністратор</p>
                                                    </div>
                                                </div>
                                                <div class="payment-appointment-actions">
                                                    <div class="payment-appointment-price">
                                                        <img src="./src/img/icons/money.svg" alt="">
                                                        <p>$100.00</p>
                                                    </div>
                                                    <button type="button" class="button-primary payment-btn">
                                                        <img src="./src/img/icons/money-white.svg" alt="">
                                                        <p>Сплатити</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="client-wallet-modal-button button-secondary modal-close-btn">
                                        <p>Відмінити</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- modal window pay appointment item-->
                        <div class="modal modal-pay-appointment-item" id="modal-pay-appointment-item">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title">Cплатити Зустріч</h3>
                                </div>
                                <p class="modal-description">Будь ласка оберіть тип оплати</p>
                                <div class="modal-body">
                                    <div class="payment-appointment-item">
                                        <div class="payment-appointment-date">
                                            <img src="./src/img/icons/calendar-gray.svg" alt="">
                                            <p>04.03.2025</p>
                                            <img src="./src/img/icons/time.svg" alt="">
                                            <p>9:00</p>
                                            <img src="./src/img/icons/location.svg" alt="">
                                            <p>Online</p>
                                        </div>
                                        <div class="payment-appointment-expert">
                                            <div class="payment-appointment-expert-info">
                                                <img src="./src/img/expert-6.png" alt="">
                                                <div class="payment-expert-info">
                                                    <p>Андрій Макаренко. Встановлення програм</p>
                                                    <p>Системний Адміністратор</p>
                                                </div>
                                            </div>
                                            <div class="payment-appointment-actions payment-price-pill">
                                                <p>ціна зустрічі</p>
                                                <div class="payment-appointment-price">
                                                    <img src="./src/img/icons/money.svg" alt="">
                                                    <p>$100.00</p>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div class="payment-modal-card">
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
                            </div>
                        </div>

                        <!-- modal window pay new card-->
                        <div class="modal modal-pay-appointment-item" id="payment-modal-newcard">
                            <div class="modal-content">
                                <div class="modal-window-close">
                                    <img src="./src/img/icons/close.svg" alt="">
                                </div>
                                <div class="modal-header">
                                    <h3 class="modal-title">Оплата карткою</h3>
                                </div>
                                <div class="to-prev-page">
                                    <a class="prev-page-btn" href="">
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p>Назад</p>
                                    </a>
                                </div>
                                <div class="modal-body">
                                    <p class="modal-description">Введіть деталі картки</p>
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
                    </div>
        </main>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClientWallet;
}