import { Page } from './Page.js';

export class IndexPage extends Page {
    constructor(container) {
        super(container);
        this.init();
    }

    init() {
        this.setTitle('Главная');
        this.setMeta(
            'Без Кордонів - платформа для поиска экспертов',
            'эксперты, консультации, услуги, поиск экспертов'
        );
    }

    render() {
        this.container.innerHTML = `
            <div class="container">
                <!-- Контент главной страницы -->
                <section class="hero-section">
                    <h1>Найдите своего эксперта прямо сейчас</h1>
                    <div class="search-container">
                        <!-- Компонент поиска будет добавлен здесь -->
                    </div>
                </section>
                <section class="how-it-works">
                    <h2>Как это работает</h2>
                    <div class="steps-grid">
                        <div class="step">
                            <img src="./img/how-to-order-1b.png" alt="Шаг 1">
                            <h3>Найдите эксперта</h3>
                            <p>Выберите специалиста из нашей базы экспертов</p>
                        </div>
                        <div class="step">
                            <img src="./img/how-to-order-2b.png" alt="Шаг 2">
                            <h3>Забронируйте время</h3>
                            <p>Выберите удобное время для консультации</p>
                        </div>
                        <div class="step">
                            <img src="./img/how-to-order-3b.png" alt="Шаг 3">
                            <h3>Получите консультацию</h3>
                            <p>Общайтесь с экспертом онлайн или лично</p>
                        </div>
                    </div>
                </section>
            </div>
        `;
        const headerContainer = this.container.querySelector('#header-container');
        const header = new Header(headerContainer);
        header.render();
        this.addEventListeners();
    }

    addEventListeners() {
        // Добавляем обработчики событий если необходимо
    }
}