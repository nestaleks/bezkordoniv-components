// Шаблон для создания новых страниц
const PageTemplate = (props = {}) => {
    const {
        pageName = 'NewPage',  // Имя страницы для breadcrumb
        showBreadcrumb = true,  // Показывать ли breadcrumb
        pageTitle = 'Заголовок страницы',  // Заголовок страницы
        pageDescription = 'Описание страницы'  // Описание страницы
    } = props;

    // Создаем breadcrumb для страницы (если нужен)
    const breadcrumbComponent = showBreadcrumb && typeof Breadcrumb !== 'undefined' 
        ? Breadcrumb({ currentPage: pageName }) 
        : '';
    
    return `
        ${breadcrumbComponent}
        <main class="main ${pageName.toLowerCase()}-page">
            <!-- Hero Section -->
            <section class="hero-section section-lg">
                <div class="section-lg-inner">
                    <div class="hero-content">
                        <h1 class="page-title">${pageTitle}</h1>
                        <p class="page-description">${pageDescription}</p>
                    </div>
                </div>
            </section>

            <!-- Content Section 1 -->
            <section class="content-section-1 section-lg">
                <div class="section-lg-inner">
                    <div class="content-inner">
                        <h2 class="section-title">Секция контента 1</h2>
                        <p class="section-text">
                            Замените этот текст на нужный контент. Можете добавить списки, 
                            изображения, кнопки и другие элементы.
                        </p>
                        
                        <!-- Пример списка -->
                        <ul class="content-list">
                            <li>Пункт списка 1</li>
                            <li>Пункт списка 2</li>
                            <li>Пункт списка 3</li>
                        </ul>
                        
                        <!-- Пример кнопки -->
                        <button class="content-button button-primary">
                            <p>Кнопка действия</p>
                        </button>
                    </div>
                </div>
            </section>

            <!-- Content Section 2 -->
            <section class="content-section-2 section-lg">
                <div class="section-lg-inner">
                    <div class="content-with-image">
                        <div class="content-text">
                            <h3 class="subsection-title">Подзаголовок</h3>
                            <p class="subsection-text">
                                Добавьте здесь ваш контент. Можете использовать существующие 
                                CSS классы из проекта или создать новые.
                            </p>
                            
                            <!-- Пример ссылки -->
                            <a href="#" class="content-link" data-link>
                                <p>Ссылка на другую страницу</p>
                                <img src="./src/img/icons/details-white.svg" alt="">
                            </a>
                        </div>
                        
                        <!-- Пример изображения -->
                        <div class="content-image">
                            <img src="./src/img/about-top.jpg" alt="Пример изображения">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Cards Section -->
            <section class="cards-section section-lg">
                <div class="section-lg-inner">
                    <h2 class="section-title">Карточки</h2>
                    <div class="cards-grid">
                        <!-- Карточка 1 -->
                        <div class="content-card">
                            <div class="card-icon">
                                <img src="./src/img/icons/support.svg" alt="">
                            </div>
                            <h4 class="card-title">Заголовок карточки 1</h4>
                            <p class="card-text">Описание функции или услуги</p>
                        </div>
                        
                        <!-- Карточка 2 -->
                        <div class="content-card">
                            <div class="card-icon">
                                <img src="./src/img/icons/star.svg" alt="">
                            </div>
                            <h4 class="card-title">Заголовок карточки 2</h4>
                            <p class="card-text">Описание функции или услуги</p>
                        </div>
                        
                        <!-- Карточка 3 -->
                        <div class="content-card">
                            <div class="card-icon">
                                <img src="./src/img/icons/calendar.svg" alt="">
                            </div>
                            <h4 class="card-title">Заголовок карточки 3</h4>
                            <p class="card-text">Описание функции или услуги</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta-section section-lg">
                <div class="section-lg-inner">
                    <div class="cta-inner">
                        <h2 class="cta-title">Призыв к действию</h2>
                        <p class="cta-text">
                            Добавьте мотивирующий текст для пользователей
                        </p>
                        <div class="cta-buttons">
                            <button class="cta-button button-primary">
                                <p>Основное действие</p>
                            </button>
                            <button class="cta-button button-secondary">
                                <p>Дополнительное действие</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PageTemplate;
}

/*
ИНСТРУКЦИЯ ПО ИСПОЛЬЗОВАНИЮ ШАБЛОНА:

1. СОЗДАНИЕ НОВОЙ СТРАНИЦЫ:
   - Скопируйте этот файл
   - Переименуйте в YourPageName.js
   - Измените название функции на YourPageName

2. НАСТРОЙКА ПАРАМЕТРОВ:
   - pageName: имя для breadcrumb и CSS классов
   - showBreadcrumb: true/false - показывать ли навигацию
   - pageTitle: основной заголовок страницы
   - pageDescription: описание под заголовком

3. РЕДАКТИРОВАНИЕ КОНТЕНТА:
   - Замените текст в секциях на ваш контент
   - Добавьте/удалите секции по необходимости
   - Используйте существующие CSS классы из проекта

4. ПОДКЛЮЧЕНИЕ К ПРОЕКТУ:
   - Добавьте <script src="src/pages/YourPageName.js"></script> в index.html
   - Зарегистрируйте в ComponentBuilder (src/index.js)
   - Добавьте в навигацию (Header.js) если нужно

5. ДОСТУПНЫЕ CSS КЛАССЫ:
   - section-lg, section-lg-inner - основные секции
   - page-title, section-title - заголовки
   - button-primary, button-secondary - кнопки
   - content-card, card-title, card-text - карточки
   - Посмотрите другие страницы для примеров

6. ИЗОБРАЖЕНИЯ И ИКОНКИ:
   - Используйте существующие из ./src/img/
   - Иконки: ./src/img/icons/
   - Фото: различные в ./src/img/

ПРИМЕР ИСПОЛЬЗОВАНИЯ:
const MyPage = PageTemplate({
    pageName: 'Services',
    pageTitle: 'Наши услуги',
    pageDescription: 'Полный перечень услуг платформы'
});
*/