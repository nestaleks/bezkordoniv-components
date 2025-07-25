// Компонент Breadcrumb
const Breadcrumb = (props = {}) => {
    const {
        currentPage = 'Home',
        trail = []
    } = props;

    // Данные о страницах для breadcrumb
    const breadcrumbData = {
        "Home": { title: "Головна", icon: "./src/img/icons/home.svg" },
        "About": { title: "Про нас", icon: "./src/img/icons/info.svg", parent: "Home" },
        "FAQ": { title: "Техн-підтримка", icon: "./src/img/icons/support-blue.svg", parent: "Home" },
        "Dashboard": { title: "Дешборд", icon: "./src/img/icons/dashboard.svg", parent: "Home" },
        "Experts": { title: "Експерти", icon: "./src/img/icons/clients.svg", parent: "Home" },
        "ExpertPage": { title: "Профіль експерта", icon: "./src/img/icons/user.svg", parent: "Experts" },
        "Clients": { title: "Клієнти", icon: "./src/img/icons/clients.svg", parent: "Home" },
        "ClientPage": { title: "Профіль клієнта", icon: "./src/img/icons/user.svg", parent: "Clients" },
        "Profile": { title: "Профіль", icon: "./src/img/icons/user.svg", parent: "Home" },
        "Wallet": { title: "Гаманець", icon: "./src/img/icons/money.svg", parent: "Home" },
        "Calendar": { title: "Календар", icon: "./src/img/icons/calendar.svg", parent: "Home" },
        "Meetings": { title: "Мої Зустрічі", icon: "./src/img/icons/calendar.svg", parent: "Home" },
        "Chat": { title: "Повідомлення", icon: "./src/img/icons/message-blue.svg", parent: "Home" },
        "Blog": { title: "Блог", icon: "./src/img/icons/write.svg", parent: "Home" }
    };

    // Функция для получения trail (цепочки) страниц
    const getBreadcrumbTrail = (pageName) => {
        const trail = [];
        let current = pageName;

        while (current && breadcrumbData[current]) {
            trail.unshift(current);
            current = breadcrumbData[current].parent;
        }

        return trail;
    };

    // Создаем home иконку
    const createHomeIcon = () => {
        return `
            <svg width="20.000000" height="20.999512" viewBox="0 0 20 20.9995" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M13 19.99L13 11.99C13 11.73 12.89 11.47 12.7 11.29C12.51 11.1 12.26 10.99 12 10.99L8 10.99C7.73 10.99 7.48 11.1 7.29 11.29C7.1 11.47 7 11.73 7 11.99L7 19.99M1.18 8.15C1.3 7.89 1.48 7.65 1.7 7.47L8.7 1.47C9.06 1.16 9.52 1 10 1C10.47 1 10.93 1.16 11.29 1.47L18.29 7.47C18.51 7.65 18.69 7.89 18.81 8.15C18.93 8.42 19 8.7 19 8.99L19 17.99C19 18.52 18.78 19.03 18.41 19.41C18.03 19.78 17.53 19.99 17 19.99L3 19.99C2.46 19.99 1.96 19.78 1.58 19.41C1.21 19.03 1 18.52 1 17.99L1 8.99C0.99 8.7 1.06 8.42 1.18 8.15Z" stroke="#000000" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
        `;
    };

    // Создаем breadcrumb item
    const createBreadcrumbItem = (pageName, isActive, pageData) => {
        if (isActive) {
            return `
                <li>
                    <div class="breadcrumb-box active">
                        <div class="breadcrumb-img">
                            <img src="${pageData.icon}" alt="${pageData.title}" width="15" height="16" class="breadcrumb-svg-icon active">
                        </div>
                        <span class="breadcrumb-text">${pageData.title}</span>
                    </div>
                </li>
            `;
        } else {
            return `
                <li>
                    <a href="#" class="breadcrumb-box" data-page="${pageName}" data-link-breadcrumb>
                        <div class="breadcrumb-img">
                            <img src="${pageData.icon}" alt="${pageData.title}" width="15" height="16" class="breadcrumb-svg-icon">
                        </div>
                        <span class="breadcrumb-text">${pageData.title}</span>
                    </a>
                </li>
            `;
        }
    };

    // Получаем trail для текущей страницы
    const pageTrail = trail.length > 0 ? trail : getBreadcrumbTrail(currentPage);
    
    // Строим breadcrumb
    let breadcrumbItems = '';
    
    // Добавляем home ссылку (только если не на главной странице)
    if (currentPage !== 'Home') {
        breadcrumbItems += `
            <li>
                <a href="#" class="breadcrumb-box" data-page="Home" data-link-breadcrumb>
                    ${createHomeIcon()}
                </a>
            </li>
        `;
    }

    // Добавляем остальные элементы trail
    pageTrail.forEach((pageName, index) => {
        if (pageName === 'Home') return; // Home уже добавлен как иконка
        
        const pageData = breadcrumbData[pageName];
        if (!pageData) return;
        
        // Добавляем разделитель
        if (breadcrumbItems !== '' || currentPage !== 'Home') {
            breadcrumbItems += '<li class="breadcrumb-separator">/</li>';
        }
        
        const isActive = index === pageTrail.length - 1;
        breadcrumbItems += createBreadcrumbItem(pageName, isActive, pageData);
    });

    return `
        <nav class="breadcrumb">
            <div class="container">
                <ul class="breadcrumb-links">
                    ${breadcrumbItems}
                </ul>
            </div>
        </nav>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Breadcrumb;
}