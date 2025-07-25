// Компонент Header на основе предоставленной разметки
const Header = (props = {}) => {
    const {
        logo = 'Без Кордонів',
        logoUrl = './index.html',
        logoImage = './src/img/logo.svg'
    } = props;

    // Проверяем глобальное состояние пользователя (будет добавлено позже)
    const isLoggedIn = window.userState?.isLoggedIn || false;
    const userRole = window.userState?.userRole || 'client';
    const balance = window.userState?.balance || '$120.00';
    const nextAppointment = window.userState?.nextAppointment || '12:34:47';
    const messagesCount = window.userState?.messagesCount || 15;
    const noticesCount = window.userState?.noticesCount || 5;

    // SVG иконки
    const icons = {
        home: `<svg class="menu-icon" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 0.125L13.3 4.85L13 5.75H12.5V11.5H1.50001V5.75H1.00001L0.700012 4.85L7.00001 0.125ZM2.50001 4.75V10.5H11.5V4.75L7.00001 1.375L2.50001 4.75Z" fill="black" fill-opacity="0.7"/>
        </svg>`,
        dashboard: `<svg class="menu-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.66 1C12.4 1 13 1.59 13 2.33L13 11.66C13 12.4 12.4 13 11.66 13L2.33 13C1.59 13 1 12.4 1 11.66L1 2.33C1 1.59 1.59 1 2.33 1L11.66 1ZM1 7L13 7M7 1L7 13" stroke="#000000" stroke-opacity="0.7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        </svg>`,
        info: `<svg class="menu-icon" width="8" height="20" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.979167 16.5714H1.70833V10.9286H0.979167C0.576448 10.9286 0.25 10.5788 0.25 10.1473V8.28125C0.25 7.84977 0.576448 7.5 0.979167 7.5H5.0625C5.46522 7.5 5.79167 7.84977 5.79167 8.28125V16.5714H6.52083C6.92355 16.5714 7.25 16.9212 7.25 17.3527V19.2188C7.25 19.6502 6.92355 20 6.52083 20H0.979167C0.576448 20 0.25 19.6502 0.25 19.2188V17.3527C0.25 16.9212 0.576448 16.5714 0.979167 16.5714ZM3.75 0C2.30023 0 1.125 1.25918 1.125 2.8125C1.125 4.36582 2.30023 5.625 3.75 5.625C5.19977 5.625 6.375 4.36582 6.375 2.8125C6.375 1.25918 5.19973 0 3.75 0Z" fill="black" fill-opacity="0.7"/>
        </svg>`,
        experts: `<svg class="menu-icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 19C17 16.87 16.15 14.84 14.65 13.34C13.15 11.84 11.12 11 9 11C6.87 11 4.84 11.84 3.34 13.34C1.84 14.84 1 16.87 1 19M9 11C6.23 11 4 8.76 4 6C4 3.23 6.23 1 9 1C11.76 1 14 3.23 14 6C14 8.76 11.76 11 9 11M21 17.99C21 14.62 19 11.49 17 9.99C17.65 9.5 18.18 8.85 18.53 8.11C18.87 7.36 19.03 6.55 18.99 5.72C18.94 4.9 18.7 4.11 18.27 3.4C17.84 2.7 17.25 2.11 16.54 1.69" stroke="#000000" stroke-opacity="1" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        </svg>`,
        clients: `<svg class="menu-icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 19C17 16.87 16.15 14.84 14.65 13.34C13.15 11.84 11.12 11 9 11C6.87 11 4.84 11.84 3.34 13.34C1.84 14.84 1 16.87 1 19M9 11C6.23 11 4 8.76 4 6C4 3.23 6.23 1 9 1C11.76 1 14 3.23 14 6C14 8.76 11.76 11 9 11M21 17.99C21 14.62 19 11.49 17 9.99C17.65 9.5 18.18 8.85 18.53 8.11C18.87 7.36 19.03 6.55 18.99 5.72C18.94 4.9 18.7 4.11 18.27 3.4C17.84 2.7 17.25 2.11 16.54 1.69" stroke="#000000" stroke-opacity="1" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        </svg>`,
        meetings: `<svg class="menu-icon" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.33333 1.33333V3.99999M9.66667 1.33333V3.99999M13 8.66666V3.99999C13 3.64637 12.8595 3.30723 12.6095 3.05719C12.3594 2.80714 12.0203 2.66666 11.6667 2.66666H2.33333C1.97971 2.66666 1.64057 2.80714 1.39052 3.05719C1.14048 3.30723 1 3.64637 1 3.99999V13.3333C1 13.687 1.14048 14.0261 1.39052 14.2761C1.64057 14.5262 1.97971 14.6667 2.33333 14.6667H7.66667M1 6.66666H13M9.66667 12.6667H13.6667M11.6667 10.6667V14.6667" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        wallet: `<svg class="menu-icon" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1333 8.33333H11.14M4.46665 3.66667H12.4667C12.8203 3.66667 13.1594 3.80714 13.4095 4.05719C13.6595 4.30724 13.8 4.64638 13.8 5V11.6667C13.8 12.0203 13.6595 12.3594 13.4095 12.6095C13.1594 12.8595 12.8203 13 12.4667 13H3.13332C2.7797 13 2.44056 12.8595 2.19051 12.6095C1.94046 12.3594 1.79999 12.0203 1.79999 11.6667V2.33333C1.79999 1.97971 1.94046 1.64057 2.19051 1.39052C2.44056 1.14048 2.7797 1 3.13332 1H12.4667" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        profile: `<svg class="menu-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.09993 7.66667C8.94088 7.66667 10.4333 6.17428 10.4333 4.33333C10.4333 2.49238 8.94088 1 7.09993 1C5.25899 1 3.7666 2.49238 3.7666 4.33333C3.7666 6.17428 5.25899 7.66667 7.09993 7.66667ZM7.09993 7.66667C8.51442 7.66667 9.87098 8.22857 10.8712 9.22876C11.8714 10.229 12.4333 11.5855 12.4333 13M7.09993 7.66667C5.68545 7.66667 4.32889 8.22857 3.3287 9.22876C2.3285 10.229 1.7666 11.5855 1.7666 13" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        calendar: `<svg class="menu-icon" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.33333 1.33333V3.99999M9.66667 1.33333V3.99999M1 6.66666H13M2.33333 2.66666H11.6667C12.403 2.66666 13 3.26362 13 3.99999V13.3333C13 14.0697 12.403 14.6667 11.6667 14.6667H2.33333C1.59695 14.6667 1 14.0697 1 13.3333V3.99999C1 3.26362 1.59695 2.66666 2.33333 2.66666Z" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        exit: `<svg class="menu-icon" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13.5H2.33333C1.97971 13.5 1.64057 13.3595 1.39052 13.1095C1.14048 12.8594 1 12.5203 1 12.1667V2.83333C1 2.47971 1.14048 2.14057 1.39052 1.89052C1.64057 1.64048 1.97971 1.5 2.33333 1.5H5M9.66667 10.8333L13 7.5M13 7.5L9.66667 4.16667M13 7.5H5" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        login: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 8.16667C8.84095 8.16667 10.3333 6.67428 10.3333 4.83333C10.3333 2.99238 8.84095 1.5 7 1.5C5.15906 1.5 3.66667 2.99238 3.66667 4.83333C3.66667 6.67428 5.15906 8.16667 7 8.16667ZM7 8.16667C8.41449 8.16667 9.77105 8.72857 10.7712 9.72876C11.7714 10.729 12.3333 12.0855 12.3333 13.5M7 8.16667C5.58552 8.16667 4.22896 8.72857 3.22877 9.72876C2.22857 10.729 1.66667 12.0855 1.66667 13.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        signup: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33334 13.5C1.33328 12.4735 1.62943 11.4689 2.18623 10.6066C2.74304 9.74426 3.53685 9.06095 4.4724 8.63865C5.40795 8.21634 6.44549 8.07297 7.46051 8.22575C8.47552 8.37854 9.42489 8.82097 10.1947 9.49997M12.6667 10.1667V14.1667M14.6667 12.1667H10.6667M10 4.83333C10 6.67428 8.50762 8.16667 6.66667 8.16667C4.82572 8.16667 3.33334 6.67428 3.33334 4.83333C3.33334 2.99238 4.82572 1.5 6.66667 1.5C8.50762 1.5 10 2.99238 10 4.83333Z" stroke="#F8B647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        money: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4H14C14.55 4 15 4.45 15 5V13C15 13.55 14.55 14 14 14H2C1.45 14 1 13.55 1 13V5C1 4.45 1.45 4 2 4ZM8 6C6.34 6 5 7.34 5 9C5 10.66 6.34 12 8 12C9.66 12 11 10.66 11 9C11 7.34 9.66 6 8 6Z" fill="currentColor"/>
        </svg>`,
        calendarGray: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1V3M12 1V3M1 6H15M3 3H13C13.55 3 14 3.45 14 4V14C14 14.55 13.55 15 13 15H3C2.45 15 2 14.55 2 14V4C2 3.45 2.45 3 3 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        alarm: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2ZM8 4C7.45 4 7 4.45 7 5V8.41L9.89 10.18C10.36 10.46 10.98 10.3 11.26 9.83C11.54 9.36 11.38 8.74 10.91 8.46L8.5 7V5C8.5 4.45 8.05 4 8 4Z" fill="currentColor"/>
        </svg>`,
        message: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H14C14.55 2 15 2.45 15 3V11C15 11.55 14.55 12 14 12H4L2 14V3C2 2.45 2.45 2 3 2H2Z" fill="currentColor"/>
        </svg>`,
        supportYellow: `<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.06007 5.50004C6.2168 5.05449 6.52617 4.67878 6.93337 4.43947C7.34057 4.20015 7.81933 4.11267 8.28485 4.19252C8.75037 4.27237 9.17261 4.51439 9.47679 4.87573C9.78096 5.23707 9.94744 5.69439 9.94674 6.16671C9.94674 7.50004 7.94674 8.16671 7.94674 8.16671M8.00001 10.8333H8.00668M5.26668 12.8334C6.53906 13.4861 8.00273 13.6629 9.39394 13.3319C10.7851 13.0009 12.0124 12.1839 12.8545 11.0281C13.6966 9.87237 14.0983 8.45383 13.9871 7.02813C13.8758 5.60243 13.2591 4.26333 12.2479 3.25215C11.2367 2.24096 9.8976 1.62419 8.4719 1.51297C7.0462 1.40174 5.62766 1.80339 4.47189 2.64552C3.31612 3.48765 2.49914 4.71489 2.16816 6.1061C1.83718 7.4973 2.01397 8.96097 2.66668 10.2334L1.33334 14.1667L5.26668 12.8334Z" stroke="#F8B647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    };

    return `
        <header class="header">
            <div class="header-inner">
                <div class="header-top">
                    <a href="${logoUrl}" class="header-logo">
                        <img src="${logoImage}" alt="" onerror="this.style.display='none'">
                        <p>${logo}</p>
                    </a>
                    
                    <!-- buttons for unauthorized users -->
                    <div class="header-if-logout" style="${isLoggedIn ? 'display: none;' : ''}">
                        <div class="header-buttons">
                            <a href="/experts" data-link class="header-button-expert button-secondary">
                                <p>Шукаєте Клієнта або Експерта?</p>
                            </a>
                            <a href="/support" data-link class="header-button-support button-clear">
                                ${icons.supportYellow}
                                <p>Техн-підтримка</p>
                            </a>
                            <a href="/login" data-link class="header-button-login button-primary">
                                ${icons.login}
                                <p>Увійти</p>
                            </a>
                            <a href="/signup" data-link class="header-button-signup button-clear">
                                ${icons.signup}
                                <p>Реєстрація</p>
                            </a>
                        </div>
                    </div>

                    <!-- buttons for authorized users -->
                    <div class="header-if-login ${isLoggedIn ? '' : 'hidden'}" style="${!isLoggedIn ? 'display: none;' : ''}">
                        <div class="header-buttons">
                            <a href="#" class="top-amount">
                                ${icons.money}
                                <p class="top-amount-title">Баланс:</p>
                                <p>${balance}</p>
                            </a>
                            <a href="#" class="top-next-appointment">
                                ${icons.calendarGray}
                                <p class="top-next-appointment-title">Наступна зустріч:</p>
                                <p>${nextAppointment}</p>
                            </a>
                            <a href="#" class="top-messages">
                                ${icons.alarm}
                                <p class="messages-count">${messagesCount}</p>
                            </a>
                            <a href="#" class="top-notice">
                                ${icons.message}
                                <p class="notice-count">${noticesCount}</p>
                            </a>
                            <a href="#" class="top-exit">
                                ${icons.exit}
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
                    <ul class="menu-list">
                        <!-- General menu items (показываем все пункты как запрошено) -->
                        <li class="menu-item">
                            <a href="/" class="menu-link" data-link>
                                ${icons.home}
                                <p class="menu-item-text">Головна</p>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="/dashboard" class="menu-link" data-link>
                                ${icons.dashboard}
                                <p class="menu-item-text">інформаційна панель</p>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="/about" class="menu-link" data-link>
                                ${icons.info}
                                <p class="menu-item-text">Про нас</p>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="/experts" class="menu-link" data-link>
                                ${icons.experts}
                                <p class="menu-item-text">Експерти</p>
                            </a>
                        </li>
                        <li class="menu-item menu-for-expert">
                            <a href="/clients" class="menu-link" data-link>
                                ${icons.clients}
                                <p class="menu-item-text">Клієнти</p>
                            </a>
                        </li>
                        <li class="menu-item menu-for-expert">
                            <a href="/expert-meetings" class="menu-link" data-link>
                                ${icons.meetings}
                                <p class="menu-item-text">Мої зустрічі</p>
                            </a>
                        </li>
                        <li class="menu-item menu-for-client">
                            <a href="/client-meetings" class="menu-link" data-link>
                                ${icons.meetings}
                                <p class="menu-item-text">Мої зустрічі</p>
                            </a>
                        </li>
                        <li class="menu-item menu-for-expert">
                            <a href="/expert-wallet" class="menu-link" data-link>
                                ${icons.wallet}
                                <p class="menu-item-text">Гаманець</p>
                            </a>
                        </li>
                        <li class="menu-item menu-for-client">
                            <a href="/client-wallet" class="menu-link" data-link>
                                ${icons.wallet}
                                <p class="menu-item-text">Гаманець</p>
                            </a>
                        </li>
                        <li class="menu-item menu-for-expert">
                            <a href="/expert-profile" class="menu-link" data-link>
                                ${icons.profile}
                                <p class="menu-item-text">Профіль</p>
                            </a>
                        </li>
                        <li class="menu-item menu-for-client">
                            <a href="/client-profile" class="menu-link" data-link>
                                ${icons.profile}
                                <p class="menu-item-text">Профіль</p>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="/calendar" class="menu-link" data-link>
                                ${icons.calendar}
                                <p class="menu-item-text">Календар</p>
                            </a>
                        </li>
                        <li class="menu-item menu-item-exit menu-if-login">
                            <a href="#" class="menu-link">
                                ${icons.exit}
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
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Header;
}