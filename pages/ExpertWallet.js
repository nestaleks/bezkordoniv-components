import { Page } from './Page.js';

export class ExpertWalletPage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--Expert Wallet-->
            <section class="expert-wallet-page">
                <div class="container">
                    <h4 class="expert-wallet-title page-title">Гаманець</h4>
                    <div class="expert-balance">
                        <div class="expert-balance-inner">
                            <div class="expert-balance-info">
                                <img src="./img/icons/money-blue.svg" alt="">
                                <div class="expert-balance-text">
                                    <p>доступний баланс</p>
                                    <p>$120.00</p>
                                </div>
                            </div>
                            <div class="expert-balance-available">
                                <div class="expert-balance-item">
                                    <p>Доступний Баланс</p>
                                    <img src="./img/icons/info.svg" alt="">
                                    <p>$120.00</p>
                                </div>
                                <div class="expert-balance-item">
                                    <p>в Очікуванні</p>
                                    <img src="./img/icons/info.svg" alt="">
                                    <p>$120.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="expert-balance-buttons">
                            <button type="button" class="expert-balance-request">
                                <img src="./img/icons/request.svg" alt="">
                                <p>Запросити Зняття</p>
                            </button>
                            <button type="button" class="expert-balance-settings">
                                <img src="./img/icons/wallet-money.svg" alt="">
                                <p>Налаштування Виплат</p>
                            </button>
                        </div>
                    </div>
                    <div class="expert-wallet-history">
                        <div class="expert-history-head">
                            <div class="expert-history-dropdowns">
                                <div class="expert-history-dropdown">
                                    <div class="form-group">
                                        <select class="form-select">
                                            <option value="" selected>1 місяць</option>
                                            <option value="50">3 місяці</option>
                                            <option value="75">6 місяців</option>
                                            <option value="100">1 рік</option>
                                            <!-- ... и так далее -->
                                        </select>
                                    </div>
                                </div>
                                <div class="expert-history-dropdown">
                                    <div class="form-group">
                                        <input type="text" placeholder="Відправник" class="form-input">
                                    </div>
                                </div>
                                <div class="expert-history-dropdown">
                                    <div class="form-group">
                                        <select class="form-select">
                                            <option value="50" selected>50 EUR</option>
                                            <option value="75">75 EUR</option>
                                            <option value="100">100 EUR</option>
                                            <option value="200">200 EUR</option>
                                            <!-- ... и так далее -->
                                        </select>
                                        <p class="form-undertext">Кількість (мінімальна)</p>
                                    </div>
                                </div>
                                <div class="expert-history-dropdown">
                                    <div class="form-group">
                                        <select class="form-select">
                                            <option value="100" selected>100 EUR</option>
                                            <option value="200">200 EUR</option>
                                            <option value="300">300 EUR</option>
                                            <option value="500">500 EUR</option>
                                            <!-- ... и так далее -->
                                        </select>
                                        <p class="form-undertext">Кількість (максимальна)</p>
                                    </div>
                                </div>
                                <div class="expert-history-dropdown">
                                    <div class="form-group">
                                        <select class="form-select">
                                            <option value="" selected>Вхідні</option>
                                            <option value="">Вихідні</option>
                                            <!-- ... и так далее -->
                                        </select>
                                        <p class="form-undertext">Тип транзакції</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs">
                            <div class="tabs-inner">
                                <button class="tabs-item expert-wallet-tabs-incoming">
                                    <p>Поповнення</p>
                                </button>
                                <button class="tabs-item expert-wallet-tabs-outcoming">
                                    <p>Виплати</p>
                                </button>
                            </div>
                        </div>
                        <div class="expert-wallet-incoming">
                            <div class="expert-incoming-table-container">
                                <table class="expert-incoming-table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <p>Імʼя Клієнта</p>
                                            </th>
                                            <th>
                                                <p>Дата та Час</p>
                                            </th>
                                            <th>
                                                <p>Сума Виплати</p>
                                            </th>
                                            <th>
                                                <p>Комісія</p>
                                            </th>
                                            <th>
                                                <p>Надходження</p>
                                            </th>
                                            <th>
                                                <p>Статус Виплати</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="./img/expert-7.png" alt="">
                                                <p>Константин Вакуленко</p>
                                            </td>
                                            <td>
                                                <p style="color: var(--black-50)">02.02.2025 <span>12:15</span></p>
                                            </td>
                                            <td>
                                                <p>-100,00</p>
                                            </td>
                                            <td>
                                                <p>-12,00</p>
                                            </td>
                                            <td>
                                                <p>-88,00</p>
                                            </td>
                                            <td>
                                                <img src="./img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="./img/expert-3.png" alt="">
                                                <p>Анна Макаренко</p>
                                            </td>
                                            <td>
                                                <p style="color: var(--black-50)">02.02.2025 <span>12:15</span></p>
                                            </td>
                                            <td>
                                                <p>-80,00</p>
                                            </td>
                                            <td>
                                                <p>-9,6</p>
                                            </td>
                                            <td>
                                                <p>-70,04</p>
                                            </td>
                                            <td>
                                                <img src="./img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="./img/expert-6.png" alt="">
                                                <p>Ганна Костенко</p>
                                            </td>
                                            <td>
                                                <p style="color: var(--black-50)">02.02.2025 <span>12:15</span></p>
                                            </td>
                                            <td>
                                                <p>-100,00</p>
                                            </td>
                                            <td>
                                                <p>-12,00</p>
                                            </td>
                                            <td>
                                                <p>-88,00</p>
                                            </td>
                                            <td>
                                                <img src="./img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="./img/expert-2.png" alt="">
                                                <p>Іван Степаненко</p>
                                            </td>
                                            <td>
                                                <p style="color: var(--black-50)">02.02.2025 <span>12:15</span></p>
                                            </td>
                                            <td>
                                                <p>-100,00</p>
                                            </td>
                                            <td>
                                                <p>-12,00</p>
                                            </td>
                                            <td>
                                                <p>-88,00</p>
                                            </td>
                                            <td>
                                                <img src="./img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="expert-wallet-outcoming">
                            <div class="expert-wallet-notify">
                                <p>Трансакції можуть тривати до 3-5 робочих днів</p>
                            </div>
                            <div class="expert-outcoming-table-container">
                                <table class="expert-outcoming-table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <p>Дата та Час</p>
                                            </th>
                                            <th>
                                                <p>Сума Виплати</p>
                                            </th>
                                            <th>
                                                <p>Статус Виплати</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p style="color: var(--black-50)">02.02.2025 <span>12:15</span></p>
                                            </td>
                                            <td>
                                                <p>-100,00</p>
                                            </td>
                                            <td>
                                                <img src="./img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="color: var(--black-50)">02.02.2025 <span>12:15</span></p>
                                            </td>
                                            <td>
                                                <p>-80,00</p>
                                            </td>
                                            <td>
                                                <img src="./img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="color: var(--black-50)">02.02.2025 <span>12:15</span></p>
                                            </td>
                                            <td>
                                                <p>-100,00</p>
                                            </td>
                                            <td>
                                                <img src="./img/icons/fee-paid.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="color: var(--black-50)">02.02.2025 <span>12:15</span></p>
                                            </td>
                                            <td>
                                                <p>-100,00</p>
                                            </td>
                                            <td>
                                                <img src="./img/icons/fee-notpaid.svg" alt="">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="payments-settings">
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
                        <div class="payments-settings-inner">
                            <div class="payments-settings-personal">
                                <p class="payments-settings-title">Інформація про одержувача виплати</p>
                                <div class="payments-settings-content">
                                    <p class="payments-settings-content-title">Одержувач</p>
                                    <div class="payments-settings-content-item">
                                        <div class="payments-settings-user">
                                            <p>Імʼя</p>
                                            <p>Іван</p>
                                        </div>
                                        <div class="payments-settings-user">
                                            <p>Прізвище</p>
                                            <p>Степаненко</p>
                                        </div>
                                        <div class="payments-settings-support">
                                            <div>
                                                <img src="./img/icons/info.svg" alt="">
                                                <p>Щоб змінити цю інформацію, будь ласка звʼяєіться з нами</p>
                                            </div>
                                            <div>
                                                <img src="./img/icons/support-yellow.svg" alt="">
                                                <p>Техн-підтримка</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="payments-settings-content-title">Тип Виплати</p>
                                    <div class="payments-settings-content-item">
                                        <div class="form-group">
                                            <select class="form-select">
                                                <option value="" disabled selected>SEPA (EUR)</option>
                                                <option value="50">SWIFT (EUR)</option>
                                                <option value="75">IBAN (EUR)</option>
                                                <option value="100">PayPal (USD)</option>
                                                <!-- ... и так далее -->
                                            </select>
                                        </div>
                                    </div>
                                    <p class="payments-settings-content-title">Мінімальна сума виплати</p>
                                    <div class="payments-settings-content-item">
                                        <select class="form-select">
                                            <option value="" disabled selected>Сума виплати</option>
                                            <option value="50">50 EUR</option>
                                            <option value="75">75 EUR</option>
                                            <option value="100">100 EUR</option>
                                            <option value="200">200 EUR</option>
                                            <!-- ... и так далее -->
                                        </select>
                                        <p class="form-undertext">Комісія Платформи: 6 USD за транзакцію</p>
                                    </div>
                                    <p class="payments-settings-content-title">Місто</p>
                                    <div class="payments-settings-content-item">
                                        <div class="form-group">
                                            <input type="text" class="form-input">
                                        </div>
                                    </div>
                                    <p class="payments-settings-content-title">Адреса</p>
                                    <div class="payments-settings-content-item">
                                        <div class="form-group">
                                            <input type="text" class="form-input">
                                        </div>
                                    </div>
                                    <p class="payments-settings-content-title">Індекс</p>
                                    <div class="payments-settings-content-item">
                                        <div class="form-group">
                                            <input type="text" class="form-input">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="payments-settings-financial">
                                <p class="payments-settings-title">Банківська Інформація</p>
                                <div class="payments-settings-content">
                                    <p class="payments-settings-content-title">Номер рахунку / IBAN</p>
                                    <div class="payments-settings-content-item">
                                        <div class="form-group">
                                            <input type="text" class="form-input">
                                        </div>
                                    </div>
                                    <p class="payments-settings-content-title">Назва Банку</p>
                                    <div class="payments-settings-content-item">
                                        <div class="form-group">
                                            <input type="text" class="form-input">
                                        </div>
                                    </div>
                                    <p class="payments-settings-content-title">SWIFT номер</p>
                                    <div class="payments-settings-content-item">
                                        <div class="form-group">
                                            <input type="text" class="form-input">
                                        </div>
                                    </div>
                                    <p class="payments-settings-content-title">Країна Банку</p>
                                    <div class="payments-settings-content-item">
                                        <div class="form-group">
                                            <input type="text" class="form-input">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="payments-settings-buttons">
                                <button class="button-secondary">Відмінити</button>
                                <button class="button-primary">Створити</button>
                            </div>
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