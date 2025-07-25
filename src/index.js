class ComponentBuilder {
    constructor() {
        this.components = new Map();
        this.loadComponents();
    }

    loadComponents() {
        // Подключаем внешние компоненты
        this.loadExternalComponents();
        
        // Регистрируем базовые компоненты
        this.register('MainContent', () => `
            <section class="main-content">
                <div class="hero">
                    <h1>Добро пожаловать в Component Builder</h1>
                    <p>Создавайте HTML страницы из компонентов с помощью JavaScript</p>
                    <button class="cta-button">Начать</button>
                </div>
                <div class="features">
                    <div class="feature-card">
                        <h3>Простота</h3>
                        <p>Легко создавать и использовать компоненты</p>
                    </div>
                    <div class="feature-card">
                        <h3>Гибкость</h3>
                        <p>Настраивайте компоненты под ваши нужды</p>
                    </div>
                    <div class="feature-card">
                        <h3>Переиспользование</h3>
                        <p>Используйте компоненты многократно</p>
                    </div>
                </div>
            </section>
        `);
    }

    loadExternalComponents() {
        // Загружаем Header компонент
        if (typeof Header !== 'undefined') {
            this.register('Header', Header);
        }
        
        // Загружаем Footer компонент
        if (typeof Footer !== 'undefined') {
            this.register('Footer', Footer);
        }
        
        // Загружаем Button компонент
        if (typeof Button !== 'undefined') {
            this.register('Button', Button);
        }
        
        // Загружаем Card компонент
        if (typeof Card !== 'undefined') {
            this.register('Card', Card);
        }
        
        // Загружаем Form компонент
        if (typeof Form !== 'undefined') {
            this.register('Form', Form);
        }

        // Загружаем Breadcrumb компонент
        if (typeof Breadcrumb !== 'undefined') {
            this.register('Breadcrumb', Breadcrumb);
        }

        // Загружаем страницы
        if (typeof Home !== 'undefined') {
            this.register('Home', Home);
        }
        
        if (typeof About !== 'undefined') {
            this.register('About', About);
        }
        
        if (typeof FAQ !== 'undefined') {
            this.register('FAQ', FAQ);
        }

        // Загружаем страницы аутентификации
        if (typeof Login !== 'undefined') {
            this.register('Login', Login);
        }
        
        if (typeof SignUp !== 'undefined') {
            this.register('SignUp', SignUp);
        }
        
        if (typeof ResetPassword !== 'undefined') {
            this.register('ResetPassword', ResetPassword);
        }
        
        if (typeof Calendar !== 'undefined') {
            this.register('Calendar', Calendar);
        }
        
        if (typeof Blog !== 'undefined') {
            this.register('Blog', Blog);
        }
        
        if (typeof BlogPost !== 'undefined') {
            this.register('BlogPost', BlogPost);
        }
        
        if (typeof Dashboard !== 'undefined') {
            this.register('Dashboard', Dashboard);
        }
        
        if (typeof Page404 !== 'undefined') {
            this.register('Page404', Page404);
        }
        
        // Загружаем страницы экспертов
        if (typeof Experts !== 'undefined') {
            this.register('Experts', Experts);
        }
        
        if (typeof ExpertPage !== 'undefined') {
            this.register('ExpertPage', ExpertPage);
        }
        
        if (typeof ExpertProfile !== 'undefined') {
            this.register('ExpertProfile', ExpertProfile);
        }
        
        if (typeof ExpertWallet !== 'undefined') {
            this.register('ExpertWallet', ExpertWallet);
        }
        
        if (typeof ExpertMeetings !== 'undefined') {
            this.register('ExpertMeetings', ExpertMeetings);
        }
        
        if (typeof ExpertMeeting !== 'undefined') {
            this.register('ExpertMeeting', ExpertMeeting);
        }
        
        if (typeof ExpertChat !== 'undefined') {
            this.register('ExpertChat', ExpertChat);
        }
        
        // Загружаем страницы клиентов
        if (typeof Clients !== 'undefined') {
            this.register('Clients', Clients);
        }
        
        if (typeof ClientPage !== 'undefined') {
            this.register('ClientPage', ClientPage);
        }
        
        if (typeof ClientProfile !== 'undefined') {
            this.register('ClientProfile', ClientProfile);
        }
        
        if (typeof ClientWallet !== 'undefined') {
            this.register('ClientWallet', ClientWallet);
        }
        
        if (typeof ClientMeetings !== 'undefined') {
            this.register('ClientMeetings', ClientMeetings);
        }
        
        if (typeof ClientMeeting !== 'undefined') {
            this.register('ClientMeeting', ClientMeeting);
        }
        
        if (typeof ClientChat !== 'undefined') {
            this.register('ClientChat', ClientChat);
        }
    }

    register(name, template) {
        if (typeof template === 'function') {
            this.components.set(name, template);
        } else if (typeof template === 'string') {
            this.components.set(name, () => template);
        } else {
            throw new Error('Template должен быть функцией или строкой');
        }
    }

    render(containerId, componentName, props = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Контейнер с id "${containerId}" не найден`);
        }

        let component = this.components.get(componentName);
        if (!component) {
            console.warn(`Компонент "${componentName}" не зарегистрирован, показываем 404`);
            component = this.components.get('Page404');
            if (!component) {
                throw new Error(`Ни основной компонент "${componentName}", ни 404 компонент не найдены`);
            }
            componentName = 'Page404';
        }

        const html = component(props);
        container.innerHTML = html;

        // Устанавливаем текущую страницу для breadcrumb
        if (containerId === 'main') {
            window.currentPageName = componentName;
            // Обновляем breadcrumb если он есть
            if (window.breadcrumbGenerator) {
                window.breadcrumbGenerator.currentPage = componentName;
                window.breadcrumbGenerator.generateBreadcrumb();
            }
        }

        // Добавляем обработчики событий если они есть
        this.attachEventListeners(container, componentName, props);
        
        // Сохраняем ссылку на app для использования в скриптах компонентов
        window.app = this;

        return container;
    }

    attachEventListeners(container, componentName, props) {
        // Специальная инициализация для Home страницы
        if (componentName === 'Home') {
            console.log('Initializing Home page sliders and FAQ');
            setTimeout(() => {
                // Инициализируем слайдеры и FAQ для Home страницы
                if (typeof initCategoriesSlider === 'function') {
                    initCategoriesSlider();
                }
                if (typeof initExpertsSlider === 'function') {
                    initExpertsSlider();
                }
                if (typeof initBlogSlider === 'function') {
                    initBlogSlider();
                }
                if (typeof initFaqCategories === 'function') {
                    initFaqCategories();
                }
                console.log('Home page initialization completed');
            }, 200);
        }

        // Обработчики для Header компонента
        if (componentName === 'Header') {
            // Обработчик мобильного меню (бургер)
            const menuBtn = container.querySelector('.menu-btn');
            const menuList = container.querySelector('.menu-list');
            
            if (menuBtn && menuList) {
                menuBtn.addEventListener('click', () => {
                    menuList.classList.toggle('menu--open');
                    document.body.classList.toggle('menu-open');
                });
            }

            // Обработчик закрытия меню при клике на overlay
            const overlay = container.querySelector('.overlay');
            if (overlay) {
                overlay.addEventListener('click', () => {
                    menuList.classList.remove('menu--open');
                    document.body.classList.remove('menu-open');
                });
            }

            // Обработчики ссылок в меню
            const menuLinks = container.querySelectorAll('.menu-link[data-link]');
            const self = this; // Сохраняем контекст ComponentBuilder
            menuLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    console.log('Переход к:', href);
                    
                    // Определяем какую страницу загрузить
                    let pageName = 'Home'; // По умолчанию
                    switch(href) {
                        case '/':
                            pageName = 'Home';
                            break;
                        case '/about':
                            pageName = 'About';
                            break;
                        case '/faq':
                            pageName = 'FAQ';
                            break;
                        case '/experts':
                            pageName = 'Experts';
                            break;
                        case '/expert':
                            pageName = 'ExpertPage';
                            break;
                        case '/clients':
                            pageName = 'Clients';
                            break;
                        case '/client':
                            pageName = 'ClientPage';
                            break;
                        case '/expert-wallet':
                            pageName = 'ExpertWallet';
                            break;
                        case '/expert-profile':
                            pageName = 'ExpertProfile';
                            break;
                        case '/expert-meetings':
                            pageName = 'ExpertMeetings';
                            break;
                        case '/expert-meeting':
                            pageName = 'ExpertMeeting';
                            break;
                        case '/expert-chat':
                            pageName = 'ExpertChat';
                            break;
                        case '/client-wallet':
                            pageName = 'ClientWallet';
                            break;
                        case '/client-profile':
                            pageName = 'ClientProfile';
                            break;
                        case '/client-meetings':
                            pageName = 'ClientMeetings';
                            break;
                        case '/client-meeting':
                            pageName = 'ClientMeeting';
                            break;
                        case '/client-chat':
                            pageName = 'ClientChat';
                            break;
                        default:
                            console.log('Страница не найдена для:', href);
                            return;
                    }
                    
                    // Переключаем страницу
                    self.render('main', pageName);
                    
                    // Закрываем мобильное меню при клике на ссылку
                    if (menuList) {
                        menuList.classList.remove('menu--open');
                        document.body.classList.remove('menu-open');
                    }
                });
            });
        }

        // Базовые обработчики для других компонентов
        const button = container.querySelector('.cta-button');
        if (button) {
            button.addEventListener('click', () => {
                alert('Добро пожаловать в Component Builder!');
            });
        }

        // Обработчики для всех ссылок с data-link (включая футер)
        const allDataLinks = container.querySelectorAll('a[data-link]');
        const self = this; // Сохраняем контекст ComponentBuilder
        allDataLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                console.log('Переход к:', href);
                
                // Определяем какую страницу загрузить
                let pageName = 'Home'; // По умолчанию
                switch(href) {
                    case '/':
                        pageName = 'Home';
                        break;
                    case '/about':
                        pageName = 'About';
                        break;
                    case '/faq':
                        pageName = 'FAQ';
                        break;
                    case '/login':
                        pageName = 'Login';
                        break;
                    case '/signup':
                        pageName = 'SignUp';
                        break;
                    case '/reset-password':
                        pageName = 'ResetPassword';
                        break;
                    case '/calendar':
                        pageName = 'Calendar';
                        break;
                    case '/blog':
                        pageName = 'Blog';
                        break;
                    case '/dashboard':
                        pageName = 'Dashboard';
                        break;
                    case '/experts':
                        pageName = 'Experts';
                        break;
                    case '/expert':
                        pageName = 'ExpertPage';
                        break;
                    case '/clients':
                        pageName = 'Clients';
                        break;
                    case '/client':
                        pageName = 'ClientPage';
                        break;
                    case '/expert-wallet':
                        pageName = 'ExpertWallet';
                        break;
                    case '/expert-profile':
                        pageName = 'ExpertProfile';
                        break;
                    case '/expert-meetings':
                        pageName = 'ExpertMeetings';
                        break;
                    case '/expert-meeting':
                        pageName = 'ExpertMeeting';
                        break;
                    case '/expert-chat':
                        pageName = 'ExpertChat';
                        break;
                    case '/client-wallet':
                        pageName = 'ClientWallet';
                        break;
                    case '/client-profile':
                        pageName = 'ClientProfile';
                        break;
                    case '/client-meetings':
                        pageName = 'ClientMeetings';
                        break;
                    case '/client-meeting':
                        pageName = 'ClientMeeting';
                        break;
                    case '/client-chat':
                        pageName = 'ClientChat';
                        break;
                    default:
                        console.log('Страница не найдена для:', href);
                        pageName = 'Page404';
                        break;
                }
                
                // Переключаем страницу
                self.render('main', pageName);
            });
        });

        // Обработчики для ссылок breadcrumb
        const breadcrumbLinks = container.querySelectorAll('a[data-link-breadcrumb]');
        breadcrumbLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageName = link.getAttribute('data-page');
                console.log('Breadcrumb переход к:', pageName);
                
                if (pageName && self.components.has(pageName)) {
                    self.render('main', pageName);
                } else {
                    console.log('Страница не найдена:', pageName);
                }
            });
        });

        // Обработчики для ссылок аутентификации
        const authLinks = container.querySelectorAll('a[data-link-auth]');
        authLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageName = link.getAttribute('data-page');
                console.log('Auth переход к:', pageName);
                
                if (pageName && self.components.has(pageName)) {
                    self.render('main', pageName);
                } else {
                    console.log('Страница не найдена:', pageName);
                }
            });
        });

        // Обработчики для ссылок блога
        const blogLinks = container.querySelectorAll('a[data-link-blog]');
        blogLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = link.getAttribute('data-post-id');
                console.log('Blog переход к статье:', postId);
                
                if (self.components.has('BlogPost')) {
                    self.render('main', 'BlogPost', { postId: postId });
                } else {
                    console.log('BlogPost компонент не найден');
                }
            });
        });

        // Обработчики для ссылок экспертов с data-expert-id
        const expertLinks = container.querySelectorAll('a[data-link][data-expert-id]');
        expertLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const expertId = link.getAttribute('data-expert-id');
                const href = link.getAttribute('href');
                console.log('Expert переход к профилю:', expertId, href);
                
                if (href === '/expert' && self.components.has('ExpertPage')) {
                    self.render('main', 'ExpertPage', { expertId: expertId });
                } else {
                    console.log('ExpertPage компонент не найден или неправильный href');
                }
            });
        });

        // Обработчики для ссылок клиентов с data-client-id
        const clientLinks = container.querySelectorAll('a[data-link][data-client-id]');
        clientLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const clientId = link.getAttribute('data-client-id');
                const href = link.getAttribute('href');
                console.log('Client переход к профилю:', clientId, href);
                
                if (href === '/client' && self.components.has('ClientPage')) {
                    self.render('main', 'ClientPage', { clientId: clientId });
                } else {
                    console.log('ClientPage компонент не найден или неправильный href');
                }
            });
        });

        // Обработчики табов для ExpertPage
        if (componentName === 'ExpertPage') {
            const expertTabButtons = container.querySelectorAll('.tabs-item');
            const infoBox = container.querySelector('.expert-card-info-box');
            const serviceBox = container.querySelector('.expert-card-service-box');
            
            expertTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    expertTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show/hide content based on clicked tab
                    if (this.classList.contains('expert-card-tabs-info')) {
                        if (infoBox) infoBox.style.display = 'block';
                        if (serviceBox) serviceBox.style.display = 'none';
                    } else if (this.classList.contains('expert-card-tabs-service')) {
                        if (infoBox) infoBox.style.display = 'none';
                        if (serviceBox) serviceBox.style.display = 'block';
                    }
                });
            });
            
            // Инициализация модальных окон для ExpertPage
            if (typeof initExpertPageModals === 'function') {
                // Используем setTimeout для гарантии что DOM полностью обновлен
                setTimeout(() => {
                    initExpertPageModals();
                }, 100);
            }
        }

        // Обработчики табов для ExpertWallet
        if (componentName === 'ExpertWallet') {
            const walletTabButtons = container.querySelectorAll('.tabs-item.expert-wallet-tabs-incoming, .tabs-item.expert-wallet-tabs-outcoming');
            const incomingBox = container.querySelector('.expert-wallet-incoming');
            const outcomingBox = container.querySelector('.expert-wallet-outcoming');
            
            walletTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    walletTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show/hide content based on clicked tab
                    if (this.classList.contains('expert-wallet-tabs-incoming')) {
                        if (incomingBox) incomingBox.style.display = 'block';
                        if (outcomingBox) outcomingBox.style.display = 'none';
                    } else if (this.classList.contains('expert-wallet-tabs-outcoming')) {
                        if (incomingBox) incomingBox.style.display = 'none';
                        if (outcomingBox) outcomingBox.style.display = 'block';
                    }
                });
            });
            
            // Инициализация модальных окон для ExpertWallet
            setTimeout(() => {
                initUniversalModals('ExpertWallet');
                // Специальная инициализация для модального окна запроса на вывод и настроек
                if (typeof setupRequestWithdrawModal === 'function') {
                    setupRequestWithdrawModal();
                }
            }, 100);
        }

        // Обработчики табов для ExpertProfile
        if (componentName === 'ExpertProfile') {
            const profileTabButtons = container.querySelectorAll('.tabs-item.expert-profile-tabs-main, .tabs-item.expert-profile-tabs-contacts, .tabs-item.expert-profile-tabs-prof, .tabs-item.expert-profile-tabs-password');
            const mainBox = container.querySelector('.expert-profile-main');
            const contactsBox = container.querySelector('.expert-profile-contacts');
            const profBox = container.querySelector('.expert-profile-prof');
            const passwordBox = container.querySelector('.expert-profile-password');
            
            profileTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    profileTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all content boxes
                    if (mainBox) mainBox.classList.add('hidden');
                    if (contactsBox) contactsBox.classList.add('hidden');
                    if (profBox) profBox.classList.add('hidden');
                    if (passwordBox) passwordBox.classList.add('hidden');
                    
                    // Show relevant content based on clicked tab
                    if (this.classList.contains('expert-profile-tabs-main')) {
                        if (mainBox) mainBox.classList.remove('hidden');
                    } else if (this.classList.contains('expert-profile-tabs-contacts')) {
                        if (contactsBox) contactsBox.classList.remove('hidden');
                    } else if (this.classList.contains('expert-profile-tabs-prof')) {
                        if (profBox) profBox.classList.remove('hidden');
                    } else if (this.classList.contains('expert-profile-tabs-password')) {
                        if (passwordBox) passwordBox.classList.remove('hidden');
                    }
                });
            });
        }

        // Обработчики табов для ExpertChat
        if (componentName === 'ExpertChat') {
            const chatTabButtons = container.querySelectorAll('.expert-chat-tabs .tabs-item');
            const chatContentBox = container.querySelector('.expert-chat-content');
            const remindBox = container.querySelector('.expert-remind');
            
            chatTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    chatTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all content boxes
                    if (chatContentBox) chatContentBox.style.display = 'none';
                    if (remindBox) remindBox.style.display = 'none';
                    
                    // Show relevant content based on clicked tab
                    if (this.classList.contains('expert-chat-tabs-remind')) {
                        if (remindBox) remindBox.style.display = 'block';
                        console.log('ExpertChat: Showing remind content');
                    } else {
                        // Для всех остальных табов показываем основной контент чата
                        if (chatContentBox) chatContentBox.style.display = 'block';
                        console.log('ExpertChat: Showing chat content');
                    }
                });
            });
            
            // Обработчик переключения между чатом и звонком
            const callButton = container.querySelector('.expert-chat-client-call');
            const chatSection = container.querySelector('.expert-chat');
            const callSection = container.querySelector('.expert-call');
            const backButton = container.querySelector('.call-back-button');
            
            if (callButton && chatSection && callSection) {
                callButton.addEventListener('click', function() {
                    console.log('ExpertChat: Switching to call mode');
                    chatSection.style.display = 'none';
                    callSection.style.display = 'block';
                });
            }
            
            if (backButton && chatSection && callSection) {
                backButton.addEventListener('click', function() {
                    console.log('ExpertChat: Switching back to chat mode');
                    callSection.style.display = 'none';
                    chatSection.style.display = 'block';
                });
            }
            
            // Инициализация модальных окон для ExpertChat
            setTimeout(() => {
                initChatModals('ExpertChat');
            }, 100);
        }

        // Обработчики табов для ClientPage
        if (componentName === 'ClientPage') {
            const clientTabButtons = container.querySelectorAll('.client-tabs .tabs-item');
            const mainInfoBox = container.querySelector('.client-main-info');
            const historyBox = container.querySelector('.client-history');
            
            clientTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    clientTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show/hide content based on clicked tab
                    if (this.classList.contains('client-tabs-main')) {
                        if (mainInfoBox) mainInfoBox.style.display = 'block';
                        if (historyBox) historyBox.classList.add('hidden');
                    } else if (this.classList.contains('client-tabs-history')) {
                        if (mainInfoBox) mainInfoBox.style.display = 'none';
                        if (historyBox) historyBox.classList.remove('hidden');
                    }
                });
            });
        }

        // Обработчики для ClientWallet (фильтры времени)
        if (componentName === 'ClientWallet') {
            const viewButtons = container.querySelectorAll('.view-btn');
            
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    viewButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const view = this.getAttribute('data-view');
                    console.log('ClientWallet view changed to:', view);
                    // Here you can add logic to filter payment history by time period
                });
            });
            
            // Инициализация модальных окон для ClientWallet
            setTimeout(() => {
                initUniversalModals('ClientWallet');
            }, 100);
        }

        // Обработчики табов для ClientProfile
        if (componentName === 'ClientProfile') {
            const profileTabButtons = container.querySelectorAll('.tabs-item.client-profile-tabs-main, .tabs-item.client-profile-tabs-contacts, .tabs-item.client-profile-tabs-password');
            const mainBox = container.querySelector('.client-profile-main');
            const contactsBox = container.querySelector('.client-profile-contacts');
            const passwordBox = container.querySelector('.client-profile-password');
            
            profileTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    profileTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all content boxes
                    if (mainBox) mainBox.classList.add('hidden');
                    if (contactsBox) contactsBox.classList.add('hidden');
                    if (passwordBox) passwordBox.classList.add('hidden');
                    
                    // Show relevant content based on clicked tab
                    if (this.classList.contains('client-profile-tabs-main')) {
                        if (mainBox) mainBox.classList.remove('hidden');
                    } else if (this.classList.contains('client-profile-tabs-contacts')) {
                        if (contactsBox) contactsBox.classList.remove('hidden');
                    } else if (this.classList.contains('client-profile-tabs-password')) {
                        if (passwordBox) passwordBox.classList.remove('hidden');
                    }
                });
            });
        }

        // Обработчики табов для ClientChat
        if (componentName === 'ClientChat') {
            const chatTabButtons = container.querySelectorAll('.client-chat-tabs .tabs-item');
            const allBox = container.querySelector('.client-chat-all');
            const meetingsBox = container.querySelector('.client-chat-meetings');
            const expertsBox = container.querySelector('.client-chat-experts');
            const supportBox = container.querySelector('.client-chat-support');
            
            chatTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    chatTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all content boxes
                    if (allBox) allBox.style.display = 'none';
                    if (meetingsBox) meetingsBox.style.display = 'none';
                    if (expertsBox) expertsBox.style.display = 'none';
                    if (supportBox) supportBox.style.display = 'none';
                    
                    // Show relevant content based on clicked tab
                    if (this.classList.contains('client-chat-tabs-all')) {
                        if (allBox) allBox.style.display = 'block';
                    } else if (this.classList.contains('client-chat-tabs-meetings')) {
                        if (meetingsBox) meetingsBox.style.display = 'block';
                    } else if (this.classList.contains('client-chat-tabs-experts')) {
                        if (expertsBox) expertsBox.style.display = 'block';
                    } else if (this.classList.contains('client-chat-tabs-support')) {
                        if (supportBox) supportBox.style.display = 'block';
                    }
                });
            });
            
            // Инициализация модальных окон для ClientChat
            setTimeout(() => {
                initChatModals('ClientChat');
            }, 100);
        }

        // Обработчики табов для ClientMeetings
        if (componentName === 'ClientMeetings') {
            const meetingsTabButtons = container.querySelectorAll('.client-meetings-tabs .tabs-item');
            const allBox = container.querySelector('.client-meetings-all');
            const currentBox = container.querySelector('.client-meetings-current');
            const historyBox = container.querySelector('.client-meetings-history');
            
            meetingsTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    meetingsTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all content boxes
                    if (allBox) allBox.style.display = 'none';
                    if (currentBox) currentBox.style.display = 'none';
                    if (historyBox) historyBox.style.display = 'none';
                    
                    // Show relevant content based on clicked tab
                    if (this.classList.contains('client-meetings-tabs-all')) {
                        if (allBox) allBox.style.display = 'block';
                    } else if (this.classList.contains('client-meetings-tabs-current')) {
                        if (currentBox) currentBox.style.display = 'block';
                    } else if (this.classList.contains('client-meetings-tabs-history')) {
                        if (historyBox) historyBox.style.display = 'block';
                    }
                });
            });
            
            // Инициализация модальных окон для ClientMeetings
            setTimeout(() => {
                initUniversalModals('ClientMeetings');
                initPaymentModals('ClientMeetings');
            }, 100);
        }

        // Инициализация модальных окон для ClientMeeting
        if (componentName === 'ClientMeeting') {
            setTimeout(() => {
                initChatModals('ClientMeeting'); // Для chat file modal
                initUniversalModals('ClientMeeting'); // Для payment modal
                initPaymentModals('ClientMeeting'); // Для перехода между модальными окнами оплаты
            }, 100);
        }

        // Инициализация модальных окон для ExpertMeeting
        if (componentName === 'ExpertMeeting') {
            setTimeout(() => {
                initChatModals('ExpertMeeting'); // Для chat file modal
            }, 100);
        }

        // Обработчики табов для SignUp
        if (componentName === 'SignUp') {
            const signupTabButtons = container.querySelectorAll('.signup-tabs .tab-button');
            const step1Form = container.querySelector('.signup-form.step-1');
            const step2Form = container.querySelector('.signup-form.step-2');
            
            signupTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    signupTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    const tabType = this.getAttribute('data-tab');
                    
                    if (tabType === 'client') {
                        // Show client registration (step-1 form)
                        if (step1Form) step1Form.style.display = 'flex';
                        if (step2Form) {
                            step2Form.style.display = 'none';
                            step2Form.classList.remove('visible');
                        }
                        
                        // Hide expert-specific elements in step-1
                        const expertStep1 = container.querySelector('.expert-step-1');
                        const continueButton = container.querySelector('.continue-button');
                        const signupSubmit = container.querySelector('.step-1 .signup-submit');
                        
                        if (expertStep1) expertStep1.style.display = 'none';
                        if (continueButton) {
                            continueButton.style.display = 'none';
                            continueButton.classList.remove('force-visible');
                        }
                        if (signupSubmit) {
                            signupSubmit.style.display = 'block';
                            signupSubmit.classList.add('force-visible');
                        }
                        
                    } else if (tabType === 'expert') {
                        // Show expert registration (step-1 form with expert elements)
                        if (step1Form) step1Form.style.display = 'flex';
                        if (step2Form) {
                            step2Form.style.display = 'none';
                            step2Form.classList.remove('visible');
                        }
                        
                        // Show expert-specific elements in step-1
                        const expertStep1 = container.querySelector('.expert-step-1');
                        const continueButton = container.querySelector('.continue-button');
                        const signupSubmit = container.querySelector('.step-1 .signup-submit');
                        
                        if (expertStep1) expertStep1.style.display = 'flex';
                        if (continueButton) {
                            continueButton.style.display = 'block';
                            continueButton.classList.add('force-visible');
                        }
                        if (signupSubmit) {
                            signupSubmit.style.display = 'none';
                            signupSubmit.classList.remove('force-visible');
                        }
                    }
                });
            });
            
            // Handle continue button for expert registration
            const continueButton = container.querySelector('.continue-button');
            if (continueButton) {
                continueButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Switch to step 2 for expert registration
                    if (step1Form) step1Form.style.display = 'none';
                    if (step2Form) {
                        step2Form.style.display = 'flex';
                        step2Form.classList.add('visible');
                        
                        // Принудительно показать кнопку регистрации на step-2
                        const step2SignupButton = container.querySelector('.step-2 .signup-submit');
                        if (step2SignupButton) {
                            step2SignupButton.style.display = 'block';
                            step2SignupButton.style.setProperty('display', 'block', 'important');
                            step2SignupButton.classList.add('force-visible');
                        }
                    }
                });
            }
        }

        // Обработчики табов для FAQ
        if (componentName === 'FAQ') {
            const faqTabButtons = container.querySelectorAll('.tabs-item.faq-tabs-all, .tabs-item.faq-tabs-for-all, .tabs-item.faq-tabs-for-clients, .tabs-item.faq-tabs-for-experts');
            const allItems = container.querySelectorAll('.faq-content-item');
            
            faqTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all tabs
                    faqTabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show/hide content based on clicked tab
                    if (this.classList.contains('faq-tabs-all')) {
                        // Show all items
                        allItems.forEach(item => item.style.display = 'block');
                    } else if (this.classList.contains('faq-tabs-for-all')) {
                        // Show only general items
                        allItems.forEach(item => {
                            if (item.classList.contains('faq-for-all')) {
                                item.style.display = 'block';
                            } else {
                                item.style.display = 'none';
                            }
                        });
                    } else if (this.classList.contains('faq-tabs-for-clients')) {
                        // Show only client items
                        allItems.forEach(item => {
                            if (item.classList.contains('faq-for-clients')) {
                                item.style.display = 'block';
                            } else {
                                item.style.display = 'none';
                            }
                        });
                    } else if (this.classList.contains('faq-tabs-for-experts')) {
                        // Show only expert items
                        allItems.forEach(item => {
                            if (item.classList.contains('faq-for-experts')) {
                                item.style.display = 'block';
                            } else {
                                item.style.display = 'none';
                            }
                        });
                    }
                });
            });
        }

        // Обработчики для ссылок встреч с data-meeting-id
        const meetingLinks = container.querySelectorAll('a[data-link][data-meeting-id]');
        meetingLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const meetingId = link.getAttribute('data-meeting-id');
                const href = link.getAttribute('href');
                console.log('Meeting переход к встрече:', meetingId, href);
                
                if (href === '/expert-meeting' && self.components.has('ExpertMeeting')) {
                    self.render('main', 'ExpertMeeting', { meetingId: meetingId });
                } else if (href === '/client-meeting' && self.components.has('ClientMeeting')) {
                    self.render('main', 'ClientMeeting', { meetingId: meetingId });
                } else {
                    console.log('Meeting компонент не найден или неправильный href');
                }
            });
        });
    }

    createPage(layout) {
        // Метод для создания целой страницы по конфигурации
        Object.entries(layout).forEach(([containerId, config]) => {
            if (typeof config === 'string') {
                this.render(containerId, config);
            } else if (config && config.component) {
                this.render(containerId, config.component, config.props || {});
            }
        });
    }

    getComponent(name) {
        return this.components.get(name);
    }

    listComponents() {
        return Array.from(this.components.keys());
    }

    // Метод для показа 404 страницы
    show404(reason = 'Page not found') {
        console.log('Показываем 404:', reason);
        this.render('main', 'Page404');
    }

    // Метод для навигации с проверкой существования компонента
    navigateTo(pageName, props = {}) {
        if (this.components.has(pageName)) {
            this.render('main', pageName, props);
        } else {
            this.show404(`Component "${pageName}" not found`);
        }
    }
}

// Экспорт для использования в модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentBuilder;
}