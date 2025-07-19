export class Router {
    constructor() {
        this.routes = new Map();
        this.currentPage = null;
        this.renderPageCallback = null;
        
        // Обработчик изменения URL
        window.addEventListener('popstate', () => {
            this.handleRoute(window.location.pathname);
        });
    }

    // Добавление маршрута
    addRoute(path, PageClass) {
        this.routes.set(path, PageClass);
    }

    // Навигация к странице
    navigateTo(path) {
        window.history.pushState({}, '', path);
        this.handleRoute(path);
    }

    // Обработка маршрута
    async handleRoute(path) {
        // Очищаем текущую страницу если она есть
        if (this.currentPage && this.currentPage.destroy) {
            this.currentPage.destroy();
        }

        // Получаем класс страницы для текущего пути
        let PageClass = this.routes.get(path);
        
        // Если путь пустой или /, используем HomePage
        if (!PageClass && (path === '' || path === '/')) {
            PageClass = this.routes.get('/');
        }
        
        // Если страница не найдена, показываем 404
        if (!PageClass) {
            PageClass = this.routes.get('/404');
        }

        if (this.renderPageCallback) {
            this.renderPageCallback(PageClass);
        }
    }

    // Инициализация роутера
    init(renderPageCallback) {
        this.renderPageCallback = renderPageCallback;
        // Обрабатываем начальный маршрут
        this.handleRoute(window.location.pathname);

        // Перехватываем клики по ссылкам для SPA навигации
        document.addEventListener('click', (e) => {
            // Ищем ближайший элемент с data-link
            const link = e.target.closest('a[data-link]');
            if (link && link.href) {
                // Проверяем, что ссылка ведет на тот же домен (внутренняя)
                const url = new URL(link.href);
                if (url.origin === window.location.origin) {
                    e.preventDefault();
                    // Используем относительный путь
                    this.navigateTo(url.pathname);
                }
            }
        });
    }
}