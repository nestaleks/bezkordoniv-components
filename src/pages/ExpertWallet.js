// Компонент ExpertWallet - гаманець експерта
const ExpertWallet = (props = {}) => {
    return `
        <main class="main">
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
                    <div class="expert-balance mb-20">
                        <div class="expert-balance-inner">
                            <div class="expert-balance-info mb-12">
                                <img src="./src/img/icons/money-blue.svg" alt="">
                                <div class="expert-balance-text">
                                    <p>доступний баланс</p>
                                    <p>$120.00</p>
                                </div>
                            </div>
                            <div class="expert-balance-available">
                                <div class="expert-balance-item">
                                    <p>Доступний Баланс</p>
                                    <img src="./src/img/icons/info.svg" alt="">
                                    <p>$120.00</p>
                                </div>
                                <div class="expert-balance-item">
                                    <p>в Очікуванні</p>
                                    <img src="./src/img/icons/info.svg" alt="">
                                    <p>$120.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="expert-balance-buttons">
                            <button type="button" class="expert-balance-request">
                                <img src="./src/img/icons/request.svg" alt="">
                                <p>Запросити Зняття</p>
                            </button>
                            <button type="button" class="expert-balance-settings">
                                <img src="./src/img/icons/wallet-money.svg" alt="">
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
                                <button class="tabs-item expert-wallet-tabs-incoming active">
                                    <p>Поповнення</p>
                                </button>
                                <button class="tabs-item expert-wallet-tabs-outcoming">
                                    <p>Виплати</p>
                                </button>
                            </div>
                        </div>
                        <div class="expert-wallet-incoming">
                            <div class="expert-incoming-table-container mb-20">
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
                                                <img src="./src/img/expert-7.png" alt="">
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
                                                <img src="./src/img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="./src/img/expert-3.png" alt="">
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
                                                <img src="./src/img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="./src/img/expert-6.png" alt="">
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
                                                <img src="./src/img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="./src/img/expert-2.png" alt="">
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
                                                <img src="./src/img/icons/fee-processing.svg" alt="">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="expert-wallet-outcoming" style="display: none;">
                            <div class="expert-wallet-notify">
                                <p>Трансакції можуть тривати до 3-5 робочих днів</p>
                            </div>
                            <div class="expert-outcoming-table-container mb-20">
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
                                                <img src="./src/img/icons/fee-processing.svg" alt="">
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
                                                <img src="./src/img/icons/fee-processing.svg" alt="">
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
                                                <img src="./src/img/icons/fee-paid.svg" alt="">
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
                                                <img src="./src/img/icons/fee-notpaid.svg" alt="">
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
                                <p class="payments-settings-title mb-12">Інформація про одержувача виплати</p>
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
                                                <img src="./src/img/icons/info.svg" alt="">
                                                <p>Щоб змінити цю інформацію, будь ласка звʼяєіться з нами</p>
                                            </div>
                                            <div>
                                                <img src="./src/img/icons/support-yellow.svg" alt="">
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
                                <p class="payments-settings-title mb-12">Банківська Інформація</p>
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
            <!-- modal windows -->
            <div class="expert-wallet-modals">
                <!-- modal window incoming about -->
                <div class="modal modal-incoming-about" id="modal-incoming-about">
                    <div class="modal-content">
                        <div class="modal-window-close">
                            <img src="./src/img/icons/close.svg" alt="Закрыть">
                        </div>
                        <div class="modal-header modal-incoming-header">
                            <div class="modal-incoming-img">
                                <img src="./src/img/icons/calendar-yellow.svg" alt="">
                            </div>
                            <div class="modal-incoming-details">
                                <p class="modal-incoming-title">Плановий візит</p>
                                <div class="modal-incoming-pills">
                                    <div class="highlight-pill">
                                        <img src="./src/img/icons/calendar-black.svg" alt="">
                                        <p>Четвер, 17 травня</p>
                                    </div>
                                    <div class="highlight-pill">
                                        <img src="./src/img/icons/time.svg" alt="">
                                        <p>14:00</p>
                                    </div>
                                    <div class="highlight-pill">
                                        <img src="./src/img/icons/target.svg" alt="">
                                        <p>Онлайн</p>
                                    </div>
                                    <div class="price-pill">
                                        <img src="./src/img/icons/money.svg" alt="">
                                        <p>$80.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-body modal-incoming-body">
                            <div class="modal-incoming-info">
                                <p class="modal-incoming-text">користувач</p>
                                <div class="modal-incoming-user">
                                    <img src="./src/img/expert-7.png" alt="">
                                    <p>Константин Вакуленко</p>
                                </div>
                            </div>
                            <div class="modal-incoming-info">
                                <p class="modal-incoming-text">файли</p>
                                <div class="modal-incoming-files">
                                    <button>
                                        <p>Файли: <span>2</span></p>
                                        <img src="./src/img/icons/files.svg" alt="">
                                    </button>
                                </div>
                            </div>
                            <div class="modal-incoming-info">
                                <p class="modal-incoming-text">статус зустрічі</p>
                                <div class="modal-incoming-status">
                                    <img src="./src/img/icons/waiting.svg" alt="">
                                </div>
                            </div>
                            <div class="modal-incoming-info">
                                <p class="modal-incoming-text">статус оплати</p>
                                <div class="modal-incoming-payment-status">
                                    <img src="./src/img/icons/Denied.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- modal request withdraw -->
                <div class="modal modal-request-withdraw" id="modal-request-withdraw">
                    <div class="modal-content">
                        <div class="modal-window-close">
                            <img src="./src/img/icons/close.svg" alt="Закрыть">
                        </div>
                        <div class="modal-header modal-request-withdraw-header">
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Сума виплати</option>
                                    <option value="50">50 EUR</option>
                                    <option value="75">75 EUR</option>
                                    <option value="100">100 EUR</option>
                                    <option value="200">200 EUR</option>
                                    <!-- ... и так далее -->
                                </select>
                                <p class="form-undertext">Сума виплати</p>
                            </div>
                            <button class="button-primary">Максимальна Сума</button>
                        </div>
                        <div class="modal-body modal-request-withdraw-body">
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>SEPA (EUR)</option>
                                    <option value="50">SWIFT (EUR)</option>
                                    <option value="75">IBAN (EUR)</option>
                                    <option value="100">PayPal (USD)</option>
                                    <!-- ... и так далее -->
                                </select>
                                <p class="form-undertext">Платіжний стандарт</p>
                            </div>
                            <button class="modal-request-payments-setting button-secondary">Налаштувати Виплати</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <script>
            // ExpertWallet functionality
            document.addEventListener('DOMContentLoaded', function() {
                // Отладка для кнопок баланса
                setTimeout(() => {
                    console.log('ExpertWallet: Testing balance buttons...');
                    
                    const requestBtn = document.querySelector('.expert-balance-request');
                    const settingsBtn = document.querySelector('.expert-balance-settings');
                    const modal = document.getElementById('modal-request-withdraw');
                    const walletPage = document.querySelector('.expert-wallet-page');
                    
                    console.log('ExpertWallet: Elements found:', {
                        requestBtn: !!requestBtn,
                        settingsBtn: !!settingsBtn,
                        modal: !!modal,
                        walletPage: !!walletPage
                    });
                    
                    // Прямые обработчики как fallback
                    if (requestBtn && modal) {
                        requestBtn.onclick = function(e) {
                            e.preventDefault();
                            console.log('ExpertWallet: Direct click on request button');
                            modal.style.display = 'flex';
                            modal.style.position = 'fixed';
                            modal.style.top = '0';
                            modal.style.left = '0';
                            modal.style.width = '100%';
                            modal.style.height = '100%';
                            modal.style.zIndex = '9999';
                            modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
                            document.body.style.overflow = 'hidden';
                        };
                    }
                    
                    if (settingsBtn && walletPage) {
                        settingsBtn.onclick = function(e) {
                            e.preventDefault();
                            console.log('ExpertWallet: Direct click on settings button');
                            walletPage.classList.add('show-payments-settings');
                        };
                    }
                    
                    // Обработчик закрытия модального окна
                    if (modal) {
                        const closeBtn = modal.querySelector('.modal-window-close');
                        if (closeBtn) {
                            closeBtn.onclick = function() {
                                console.log('ExpertWallet: Direct close modal');
                                modal.style.display = 'none';
                                document.body.style.overflow = '';
                            };
                        }
                        
                        modal.onclick = function(e) {
                            if (e.target === modal) {
                                console.log('ExpertWallet: Direct background close');
                                modal.style.display = 'none';
                                document.body.style.overflow = '';
                            }
                        };
                    }
                    
                    // Обработчик кнопки "Назад"
                    const backBtn = document.querySelector('.payments-settings .prev-page-btn');
                    if (backBtn && walletPage) {
                        backBtn.onclick = function(e) {
                            e.preventDefault();
                            console.log('ExpertWallet: Direct back button');
                            walletPage.classList.remove('show-payments-settings');
                        };
                    }
                    
                }, 500);
                // Initialize earnings chart
                initEarningsChart();
                
                // Transaction filters
                const typeFilter = document.getElementById('transaction-type');
                const dateFromFilter = document.getElementById('date-from');
                const dateToFilter = document.getElementById('date-to');
                
                if (typeFilter) {
                    typeFilter.addEventListener('change', filterTransactions);
                }
                if (dateFromFilter) {
                    dateFromFilter.addEventListener('change', filterTransactions);
                }
                if (dateToFilter) {
                    dateToFilter.addEventListener('change', filterTransactions);
                }
                
                // Chart period buttons
                const periodButtons = document.querySelectorAll('.period-btn');
                periodButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        periodButtons.forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                        
                        const period = this.getAttribute('data-period');
                        updateEarningsChart(period);
                    });
                });
                
                // Withdrawal amount input
                const withdrawalAmount = document.getElementById('withdrawal-amount');
                if (withdrawalAmount) {
                    withdrawalAmount.addEventListener('input', calculateWithdrawal);
                }
                
                // Pagination
                const paginationButtons = document.querySelectorAll('.pagination-btn, .pagination-number');
                paginationButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const page = this.getAttribute('data-page');
                        console.log('Перехід на сторінку транзакцій:', page);
                        
                        // Remove active class from all numbers
                        document.querySelectorAll('.pagination-number').forEach(btn => 
                            btn.classList.remove('active')
                        );
                        
                        // Add active class to clicked number
                        if (this.classList.contains('pagination-number')) {
                            this.classList.add('active');
                        }
                    });
                });
            });
            
            // Initialize earnings chart
            function initEarningsChart() {
                const canvas = document.getElementById('earnings-chart');
                if (!canvas) return;
                
                const ctx = canvas.getContext('2d');
                
                // Sample data for the week
                const weekData = [120, 180, 90, 240, 200, 160, 300];
                const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
                
                drawChart(ctx, labels, weekData);
            }
            
            function drawChart(ctx, labels, data) {
                const canvas = ctx.canvas;
                const width = canvas.width;
                const height = canvas.height;
                
                // Clear canvas
                ctx.clearRect(0, 0, width, height);
                
                // Set colors
                const lineColor = '#A35BFF';
                const fillColor = 'rgba(163, 91, 255, 0.1)';
                
                // Calculate positions
                const padding = 40;
                const chartWidth = width - padding * 2;
                const chartHeight = height - padding * 2;
                
                const maxValue = Math.max(...data);
                const stepX = chartWidth / (data.length - 1);
                
                // Draw background grid
                ctx.strokeStyle = '#f0f0f0';
                ctx.lineWidth = 1;
                for (let i = 0; i <= 5; i++) {
                    const y = padding + (chartHeight / 5) * i;
                    ctx.beginPath();
                    ctx.moveTo(padding, y);
                    ctx.lineTo(width - padding, y);
                    ctx.stroke();
                }
                
                // Draw area fill
                ctx.beginPath();
                ctx.moveTo(padding, height - padding);
                
                data.forEach((value, index) => {
                    const x = padding + stepX * index;
                    const y = padding + chartHeight - (value / maxValue) * chartHeight;
                    
                    if (index === 0) {
                        ctx.lineTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                });
                
                ctx.lineTo(width - padding, height - padding);
                ctx.closePath();
                ctx.fillStyle = fillColor;
                ctx.fill();
                
                // Draw line
                ctx.beginPath();
                data.forEach((value, index) => {
                    const x = padding + stepX * index;
                    const y = padding + chartHeight - (value / maxValue) * chartHeight;
                    
                    if (index === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                });
                
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = 3;
                ctx.stroke();
                
                // Draw points
                data.forEach((value, index) => {
                    const x = padding + stepX * index;
                    const y = padding + chartHeight - (value / maxValue) * chartHeight;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, 4, 0, Math.PI * 2);
                    ctx.fillStyle = lineColor;
                    ctx.fill();
                });
                
                // Draw labels
                ctx.fillStyle = '#666';
                ctx.font = '12px Arial';
                ctx.textAlign = 'center';
                
                labels.forEach((label, index) => {
                    const x = padding + stepX * index;
                    ctx.fillText(label, x, height - 10);
                });
            }
            
            function updateEarningsChart(period) {
                const canvas = document.getElementById('earnings-chart');
                if (!canvas) return;
                
                const ctx = canvas.getContext('2d');
                let data, labels;
                
                switch(period) {
                    case 'week':
                        data = [120, 180, 90, 240, 200, 160, 300];
                        labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
                        break;
                    case 'month':
                        data = [2890, 3200, 2750, 3100, 2650];
                        labels = ['1 тиж', '2 тиж', '3 тиж', '4 тиж', '5 тиж'];
                        break;
                    case 'year':
                        data = [8500, 9200, 8800, 9500, 10200, 9800, 10500, 11000, 10800, 11500, 12000, 11800];
                        labels = ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'];
                        break;
                }
                
                drawChart(ctx, labels, data);
            }
            
            // Filter transactions
            function filterTransactions() {
                const typeFilter = document.getElementById('transaction-type').value;
                const dateFrom = document.getElementById('date-from').value;
                const dateTo = document.getElementById('date-to').value;
                
                console.log('Фільтрування транзакцій:', { typeFilter, dateFrom, dateTo });
                
                const transactions = document.querySelectorAll('.transaction-item');
                transactions.forEach(transaction => {
                    let show = true;
                    
                    // Filter by type
                    if (typeFilter !== 'all') {
                        if (!transaction.classList.contains(typeFilter)) {
                            show = false;
                        }
                    }
                    
                    // Here you would add date filtering logic
                    
                    transaction.style.display = show ? 'flex' : 'none';
                });
            }
            
            // Withdrawal functions
            function withdrawFunds() {
                document.getElementById('withdrawal-modal').style.display = 'flex';
            }
            
            function closeModal(modalId) {
                document.getElementById(modalId).style.display = 'none';
            }
            
            function calculateWithdrawal() {
                const amount = parseFloat(document.getElementById('withdrawal-amount').value) || 0;
                const fee = amount * 0.02; // 2% fee
                const receive = amount - fee;
                
                document.getElementById('withdrawal-total').textContent = '€' + amount.toFixed(2);
                document.getElementById('withdrawal-fee').textContent = '€' + fee.toFixed(2);
                document.getElementById('withdrawal-receive').textContent = '€' + receive.toFixed(2);
            }
            
            function confirmWithdrawal() {
                const amount = document.getElementById('withdrawal-amount').value;
                const method = document.querySelector('input[name="withdrawal-method"]:checked').value;
                
                if (!amount || amount < 10) {
                    alert('Мінімальна сума для виведення - €10');
                    return;
                }
                
                console.log('Виведення коштів:', { amount, method });
                alert('Запит на виведення коштів надіслано. Кошти надійдуть протягом 2-3 робочих днів.');
                
                // Update balance
                const currentBalance = document.getElementById('current-balance');
                const newBalance = parseFloat(currentBalance.textContent.replace(',', '')) - parseFloat(amount);
                currentBalance.textContent = newBalance.toLocaleString('de-DE', { minimumFractionDigits: 2 });
                
                closeModal('withdrawal-modal');
            }
        </script>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExpertWallet;
}