import { Component } from './Component.js';

export class Header extends Component {
    render() {
        this.container.innerHTML = `
            <header class="header">
                <div class="header-inner">
                    <div class="header-top">
                        <a href="./index.html" class="header-logo">
                            <img src="./img/logo.svg" alt="">
                            <p>Без Кордонів</p>
                        </a>
                        <!-- buttons for unauthorized users -->
                        <div class="header-if-logout">
                            <div class="header-buttons">
                                <a href="/experts" data-link class="header-button-expert button-secondary">
                                    <p>Шукаєте Клієнта або Експерта?</p>
                                </a>
                                <a href="/support" data-link class="header-button-support button-clear">
                                    <p>Техн-підтримка</p>
                                </a>
                                <a href="/login" data-link class="header-button-login button-primary">
                                    <img src="./img/icons/login.svg" alt="">
                                    <p>Увійти</p>
                                </a>
                                <a href="/signup" data-link class="header-button-signup button-clear">
                                    <img src="./img/icons/signup.svg" alt="">
                                    <p>Реєстрація</p>
                                </a>
                            </div>
                        </div>

                        <!-- buttons for authorized users -->
                        <div class="header-if-login hidden">
                            <div class="header-buttons">
                                <a href="#" class="top-amount">
                                    <img src="./img/icons/money.svg" alt="">
                                    <p class="top-amount-title">Баланс:</p>
                                    <p>$120.00</p>
                                </a>
                                <a href="#" class="top-next-appointment">
                                    <img src="img/icons/calendar-gray.svg" alt="">
                                    </svg>
                                    <p class="top-next-appointment-title">Наступна зустріч:</p>
                                    <p>12:34:47</p>
                                </a>
                                <a href="#" class="top-messages">
                                    <img src="./img/icons/alarm.svg" alt="">
                                    <p class="messages-count">15</p>
                                </a>
                                <a href="#" class="top-notice">
                                    <img src="./img/icons/message.svg" alt="">
                                    <p class="notice-count">5</p>
                                </a>
                                <a href="#" class="top-exit">
                                    <img src="./img/icons/exit.svg" alt="">
                                </a>
                            </div>
                        </div>

                        <!-- Menu toggle -->
                        <div class="menu-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <!-- First divider line -->
                    <div class="header-divider"></div>

                    <!-- Menu navigation -->
                    <nav class="menu">
                        <!-- General menu (always visible) -->
                        <ul class="menu-list">
                            <!-- General menu items (available to everyone) -->
                            <li class="menu-item">
                                <a href="/" class="menu-link" data-link>
                                    <svg class="menu-icon" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 0.125L13.3 4.85L13 5.75H12.5V11.5H1.50001V5.75H1.00001L0.700012 4.85L7.00001 0.125ZM2.50001 4.75V10.5H11.5V4.75L7.00001 1.375L2.50001 4.75Z" fill="black" fill-opacity="0.7"/>
                                    </svg>
                                    <p class="menu-item-text">Головна</p>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="/dashboard" class="menu-link" data-link>
                                    <svg class="menu-icon" width="14.000000" height="14.000000" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M11.66 1C12.4 1 13 1.59 13 2.33L13 11.66C13 12.4 12.4 13 11.66 13L2.33 13C1.59 13 1 12.4 1 11.66L1 2.33C1 1.59 1.59 1 2.33 1L11.66 1ZM1 7L13 7M7 1L7 13" stroke="#000000" stroke-opacity="0.700000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                    <p class="menu-item-text">інформаційна панель</p>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="/about" class="menu-link" data-link>
                                    <svg class="menu-icon" width="8" height="20" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.979167 16.5714H1.70833V10.9286H0.979167C0.576448 10.9286 0.25 10.5788 0.25 10.1473V8.28125C0.25 7.84977 0.576448 7.5 0.979167 7.5H5.0625C5.46522 7.5 5.79167 7.84977 5.79167 8.28125V16.5714H6.52083C6.92355 16.5714 7.25 16.9212 7.25 17.3527V19.2188C7.25 19.6502 6.92355 20 6.52083 20H0.979167C0.576448 20 0.25 19.6502 0.25 19.2188V17.3527C0.25 16.9212 0.576448 16.5714 0.979167 16.5714ZM3.75 0C2.30023 0 1.125 1.25918 1.125 2.8125C1.125 4.36582 2.30023 5.625 3.75 5.625C5.19977 5.625 6.375 4.36582 6.375 2.8125C6.375 1.25918 5.19973 0 3.75 0Z" fill="black" fill-opacity="0.7"/>
                                    </svg>
                                    <p class="menu-item-text">Про нас</p>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="/experts" class="menu-link" data-link>
                                    <svg class="menu-icon" width="22.000046" height="20.000000" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector" d="M17 19C17 16.87 16.15 14.84 14.65 13.34C13.15 11.84 11.12 11 9 11C6.87 11 4.84 11.84 3.34 13.34C1.84 14.84 1 16.87 1 19M9 11C6.23 11 4 8.76 4 6C4 3.23 6.23 1 9 1C11.76 1 14 3.23 14 6C14 8.76 11.76 11 9 11M21 17.99C21 14.62 19 11.49 17 9.99C17.65 9.5 18.18 8.85 18.53 8.11C18.87 7.36 19.03 6.55 18.99 5.72C18.94 4.9 18.7 4.11 18.27 3.4C17.84 2.7 17.25 2.11 16.54 1.69" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </svg>
                                    <p class="menu-item-text">Експерти</p>
                                </a>
                            </li>

                            <!-- menu items for authorized users only -->
                            <li class="menu-item menu-if-login">
                                <a href="./client-meetings.html" class="menu-link">
                                    <svg class="menu-icon" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.33333 1.33333V3.99999M9.66667 1.33333V3.99999M13 8.66666V3.99999C13 3.64637 12.8595 3.30723 12.6095 3.05719C12.3594 2.80714 12.0203 2.66666 11.6667 2.66666H2.33333C1.97971 2.66666 1.64057 2.80714 1.39052 3.05719C1.14048 3.30723 1 3.64637 1 3.99999V13.3333C1 13.687 1.14048 14.0261 1.39052 14.2761C1.64057 14.5262 1.97971 14.6667 2.33333 14.6667H7.66667M1 6.66666H13M9.66667 12.6667H13.6667M11.6667 10.6667V14.6667" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p class="menu-item-text">Мої зустрічі</p>
                                </a>
                            </li>
                            <li class="menu-item menu-if-login">
                                <a href="#" class="menu-link">
                                    <svg class="menu-icon" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.1333 8.33333H11.14M4.46665 3.66667H12.4667C12.8203 3.66667 13.1594 3.80714 13.4095 4.05719C13.6595 4.30724 13.8 4.64638 13.8 5V11.6667C13.8 12.0203 13.6595 12.3594 13.4095 12.6095C13.1594 12.8595 12.8203 13 12.4667 13H3.13332C2.7797 13 2.44056 12.8595 2.19051 12.6095C1.94046 12.3594 1.79999 12.0203 1.79999 11.6667V2.33333C1.79999 1.97971 1.94046 1.64057 2.19051 1.39052C2.44056 1.14048 2.7797 1 3.13332 1H12.4667" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p class="menu-item-text">Гаманець</p>
                                </a>
                            </li>
                            <li class="menu-item menu-if-login">
                                <a href="#" class="menu-link">
                                    <svg class="menu-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.09993 7.66667C8.94088 7.66667 10.4333 6.17428 10.4333 4.33333C10.4333 2.49238 8.94088 1 7.09993 1C5.25899 1 3.7666 2.49238 3.7666 4.33333C3.7666 6.17428 5.25899 7.66667 7.09993 7.66667ZM7.09993 7.66667C8.51442 7.66667 9.87098 8.22857 10.8712 9.22876C11.8714 10.229 12.4333 11.5855 12.4333 13M7.09993 7.66667C5.68545 7.66667 4.32889 8.22857 3.3287 9.22876C2.3285 10.229 1.7666 11.5855 1.7666 13" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p class="menu-item-text">Профіль</p>
                                </a>
                            </li>
                            <li class="menu-item menu-if-login">
                                <a href="/calendar" class="menu-link" data-link>
                                    <svg class="menu-icon" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.33333 1.33333V3.99999M9.66667 1.33333V3.99999M1 6.66666H13M2.33333 2.66666H11.6667C12.403 2.66666 13 3.26362 13 3.99999V13.3333C13 14.0697 12.403 14.6667 11.6667 14.6667H2.33333C1.59695 14.6667 1 14.0697 1 13.3333V3.99999C1 3.26362 1.59695 2.66666 2.33333 2.66666Z" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p class="menu-item-text">Календар</p>
                                </a>
                            </li>
                            <li class="menu-item menu-item-exit menu-if-login">
                                <a href="#" class="menu-link">
                                    <svg class="menu-icon" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 13.5H2.33333C1.97971 13.5 1.64057 13.3595 1.39052 13.1095C1.14048 12.8594 1 12.5203 1 12.1667V2.83333C1 2.47971 1.14048 2.14057 1.39052 1.89052C1.64057 1.64048 1.97971 1.5 2.33333 1.5H5M9.66667 10.8333L13 7.5M13 7.5L9.66667 4.16667M13 7.5H5" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p class="menu-item-text">Вийти</p>
                                </a>
                            </li>
                        </ul>
                        <!-- Blur and gray overlay when mobile menu is open -->
                        <div class="overlay"></div>
                    </nav>
                    <!-- Second divider line -->
                    <div class="header-divider2"></div>
                </div>
            </header>
        `;
        this.addEventListeners();
    }

    addEventListeners() {
        // Поиск кнопок
        const expertButton = this.container.querySelector('.header-button-expert');
        const supportButton = this.container.querySelector('.header-button-support');
        const loginButton = this.container.querySelector('.header-button-login');
        const signupButton = this.container.querySelector('.header-button-signup');
        const menuBtn = this.container.querySelector('.menu-btn');

        // Добавление обработчиков
        expertButton?.addEventListener('click', () => this.handleExpertClick());
        supportButton?.addEventListener('click', () => this.handleSupportClick());
        loginButton?.addEventListener('click', () => this.handleLoginClick());
        signupButton?.addEventListener('click', () => this.handleSignupClick());
        menuBtn?.addEventListener('click', () => this.toggleMenu());
    }

    removeEventListeners() {
        // Удаление обработчиков при уничтожении компонента
        const expertButton = this.container.querySelector('.header-button-expert');
        const supportButton = this.container.querySelector('.header-button-support');
        const loginButton = this.container.querySelector('.header-button-login');
        const signupButton = this.container.querySelector('.header-button-signup');
        const menuBtn = this.container.querySelector('.menu-btn');

        expertButton?.removeEventListener('click', () => this.handleExpertClick());
        supportButton?.removeEventListener('click', () => this.handleSupportClick());
        loginButton?.removeEventListener('click', () => this.handleLoginClick());
        signupButton?.removeEventListener('click', () => this.handleSignupClick());
        menuBtn?.removeEventListener('click', () => this.toggleMenu());
    }

    // Обработчики событий
    handleExpertClick() {
        console.log('Expert button clicked');
        // Добавьте здесь логику для кнопки эксперта
    }

    handleSupportClick() {
        console.log('Support button clicked');
        // Добавьте здесь логику для кнопки поддержки
    }

    handleLoginClick() {
        console.log('Login button clicked');
        // Добавьте здесь логику для кнопки входа
    }

    handleSignupClick() {
        console.log('Signup button clicked');
        // Добавьте здесь логику для кнопки регистрации
    }

    toggleMenu() {
        const menuBtn = this.container.querySelector('.menu-btn');
        const menu = this.container.querySelector('.menu');
        const overlay = this.container.querySelector('.overlay');
        
        menuBtn?.classList.toggle('active');
        menu?.classList.toggle('active');
        overlay?.classList.toggle('active');
        
        // Блокируем прокрутку body при открытом меню
        document.body.style.overflow = menu?.classList.contains('active') ? 'hidden' : '';
    }
}