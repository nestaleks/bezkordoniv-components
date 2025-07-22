import { Page } from './Page.js';

export class BlogPostPage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>

            <section class="blog-item">
                <div class="container">
                    <div class="blog-item-inner">
                        <div class="blog-item-header mb-24">
                            <div class="blog-item-meta mb-12">
                                <span class="blog-item-date">15 березня 2024</span>
                                <span class="blog-item-category">Медицина</span>
                            </div>
                            <h1 class="blog-item-title">Як отримати максимум користі від онлайн-консультації з лікарем: інструкція для пацієнтів</h1>
                        </div>
                        <div class="blog-item-content mb-40">
                            <img class="blog-item-image mb-24" src="./img/blog-item-1.png" alt="">
                            <div class="blog-item-text">
                                <p>Онлайн-консультації з лікарями стали невід'ємною частиною сучасної медицини. Вони дозволяють отримати професійну медичну допомогу, не виходячи з дому. Однак, щоб така консультація була максимально ефективною, важливо правильно до неї підготуватися.</p>

                                <h2>Підготовка до консультації</h2>
                                <p>Перед початком консультації необхідно:</p>
                                <ul>
                                    <li>Підготувати всі наявні медичні документи</li>
                                    <li>Записати основні симптоми та їх тривалість</li>
                                    <li>Скласти список прийманих ліків</li>
                                    <li>Підготувати список запитань до лікаря</li>
                                </ul>

                                <h2>Під час консультації</h2>
                                <p>Для отримання максимальної користі від консультації:</p>
                                <ul>
                                    <li>Чітко описуйте свої симптоми</li>
                                    <li>Записуйте рекомендації лікаря</li>
                                    <li>Не соромтеся задавати уточнювальні запитання</li>
                                    <li>Переконайтеся, що ви правильно зрозуміли всі рекомендації</li>
                                </ul>

                                <h2>Після консультації</h2>
                                <p>Після завершення консультації важливо:</p>
                                <ul>
                                    <li>Дотримуватися всіх рекомендацій лікаря</li>
                                    <li>Приймати призначені препарати за схемою</li>
                                    <li>Відстежувати зміни у своєму стані</li>
                                    <li>За потреби записатися на повторну консультацію</li>
                                </ul>

                                <p>Пам'ятайте, що якість онлайн-консультації багато в чому залежить від вашої підготовки та активного участі в процесі. Дотримуючись цих рекомендацій, ви зможете отримати максимальну користь від спілкування з лікарем.</p>
                            </div>
                        </div>
                        <div class="blog-item-footer">
                            <div class="blog-item-tags">
                                <span class="blog-item-tag">#медицина</span>
                                <span class="blog-item-tag">#онлайн-консультації</span>
                                <span class="blog-item-tag">#здоров'я</span>
                            </div>
                            <div class="blog-item-share">
                                <p>Поділитися:</p>
                                <div class="blog-item-socials">
                                    <a href="#" class="blog-item-social">
                                        <img src="./img/icons/facebook.svg" alt="Facebook">
                                    </a>
                                    <a href="#" class="blog-item-social">
                                        <img src="./img/icons/telegram.svg" alt="Telegram">
                                    </a>
                                    <a href="#" class="blog-item-social">
                                        <img src="./img/icons/whatsapp.svg" alt="WhatsApp">
                                    </a>
                                </div>
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
