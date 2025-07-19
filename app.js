import { Router } from './Router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

// Импорт основных страниц
import { HomePage } from './pages/Home.js';
import { AboutPage } from './pages/About.js';
import { FAQPage } from './pages/FAQ.js';

// Импорт страниц блога
import { BlogPage } from './pages/Blog.js';
import { BlogPostPage } from './pages/BlogPost.js';

// Импорт страниц авторизации
import { LoginPage } from './pages/Login.js';
import { SignUpPage } from './pages/SignUp.js';
import { ResetPasswordPage } from './pages/ResetPassword.js';

// Импорт страниц клиента
import { ClientChatPage } from './pages/ClientChat.js';
import { ClientMeetingPage } from './pages/ClientMeeting.js';
import { ClientMeetingsPage } from './pages/ClientMeetings.js';
import { ClientProfilePage } from './pages/ClientProfile.js';
import { ClientWalletPage } from './pages/ClientWallet.js';
import { ClientPage } from './pages/ClientPage.js';

// Импорт страниц эксперта
import { ExpertChatPage } from './pages/ExpertChat.js';
import { ExpertMeetingPage } from './pages/ExpertMeeting.js';
import { ExpertMeetingsPage } from './pages/ExpertMeetings.js';
import { ExpertProfilePage } from './pages/ExpertProfile.js';
import { ExpertWalletPage } from './pages/ExpertWallet.js';
import { ExpertsPage } from './pages/ExpertsPage.js';
import { ExpertPage } from './pages/ExpertPage.js';

// Импорт страницы дашборда и 404
import { DashboardPage } from './pages/Dashboard.js';
import { NotFoundPage } from './pages/NotFound.js';

// Класс приложения
class App {
    constructor() {
        this.container = document.getElementById('app');
        this.components = new Map();
        this.router = new Router();
        this.init();
    }

    // Инициализация приложения
    init() {
        // Основные маршруты
        this.router.addRoute('/', HomePage);
        this.router.addRoute('/about', AboutPage);
        this.router.addRoute('/faq', FAQPage);

        // Маршруты блога
        this.router.addRoute('/blog', BlogPage);
        this.router.addRoute('/blog/:id', BlogPostPage);

        // Маршруты авторизации
        this.router.addRoute('/login', LoginPage);
        this.router.addRoute('/signup', SignUpPage);
        this.router.addRoute('/reset-password', ResetPasswordPage);

        // Маршруты клиента (сначала специфичные, потом общие)
        this.router.addRoute('/client/:id', ClientPage);
        this.router.addRoute('/client-chat', ClientChatPage);
        this.router.addRoute('/client-meeting/:id', ClientMeetingPage);
        this.router.addRoute('/client-meetings', ClientMeetingsPage);
        this.router.addRoute('/client-profile', ClientProfilePage);
        this.router.addRoute('/client-wallet', ClientWalletPage);

        // Маршруты эксперта (сначала специфичные, потом общие)
        this.router.addRoute('/experts', ExpertsPage);
        this.router.addRoute('/expert/:id', ExpertPage);
        this.router.addRoute('/expert-chat', ExpertChatPage);
        this.router.addRoute('/expert-meeting/:id', ExpertMeetingPage);
        this.router.addRoute('/expert-meetings', ExpertMeetingsPage);
        this.router.addRoute('/expert-profile', ExpertProfilePage);
        this.router.addRoute('/expert-wallet', ExpertWalletPage);

        // Дашборд и 404
        this.router.addRoute('/dashboard', DashboardPage);
        this.router.addRoute('/404', NotFoundPage);
        
        // Запускаем роутер
        this.renderLayout();
        this.router.init(this.renderPage.bind(this));
    }

    renderLayout() {
        this.container.innerHTML = `
            <div id="header-container"></div>
            <main id="page-content" class="page-content"></main>
            <div id="footer-container"></div>
        `;
        const header = new Header(document.getElementById('header-container'));
        header.render();
        const footer = new Footer(document.getElementById('footer-container'));
        footer.render();
    }

    renderPage(PageClass) {
        const pageContent = document.getElementById('page-content');
        pageContent.innerHTML = '';
        if (PageClass) {
            const page = new PageClass(pageContent);
            page.render();
        }
    }

    // Метод для получения компонента по имени
    getComponent(name) {
        return this.components.get(name);
    }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});