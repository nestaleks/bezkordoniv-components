// Компонент FAQ Page
const FAQ = (props = {}) => {
    // Создаем breadcrumb для страницы FAQ
    const breadcrumbComponent = typeof Breadcrumb !== 'undefined' ? Breadcrumb({ currentPage: 'FAQ' }) : '';
    
    return `
        <main class="main">
            <div class="faq-page section-lg">
                <!--BREADCRUMB-->
                ${breadcrumbComponent}
                <!--FAQ-->
                <section class="faq">
                    <div class="container">
                        <h4 class="faq-title page-title">FAQ</h4>
                        <div class="faq-input-container mb-20" style="width: 100%;">
                            <div class="search-input-text">
                                <img src="./src/img/icons/search.svg" alt="">
                                <input type="text" placeholder="Опишіть ваше питання">
                            </div>
                            <button class="faq-search-btn button-primary" type="submit">
                                <p>Пошук</p>
                                <svg width="6.004028" height="10.008179" viewBox="0 0 6.00403 10.0082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path id="Vector" d="M1 9L5 5L1 1" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="tabs">
                            <div class="tabs-inner">
                                <button class="tabs-item faq-tabs-all active">
                                    <p>Всі</p>
                                </button>
                                <button class="tabs-item faq-tabs-for-all">
                                    <p>Загальні</p>
                                </button>
                                <button class="tabs-item faq-tabs-for-clients">
                                    <p>Клієнту</p>
                                </button>
                                <button class="tabs-item faq-tabs-for-experts">
                                    <p>Експерту</p>
                                </button>
                            </div>
                        </div>
                        <div class="faq-content">
                            <div class="faq-content-item faq-for-all" data-answers="consultations-1">
                                <p class="faq-content-item-category">Консультації</p>
                                <p class="faq-content-item-title">Як працює платформа «Без кордонів»: швидкий гайд?</p>
                                <p class="faq-content-item-title">Як обрати потрібного експерта і перевірити його кваліфікацію?</p>
                                <p class="faq-content-item-title">Скільки коштують консультації і які методи оплати доступні?</p>
                                <a class="faq-content-item-link" href="">Детальніше</a>
                            </div>
                            <div class="faq-content-item faq-for-clients" data-answers="users-1">
                                <p class="faq-content-item-category">Клієнту</p>
                                <p class="faq-content-item-title">Як я можу оновити або керувати своїм профілем та налаштуваннями облікового запису?</p>
                                <p class="faq-content-item-title">Що робити, якщо виникла технічна проблема під час використання платформи?</p>
                                <p class="faq-content-item-title">Чи є правила або рекомендації для користувачів щодо взаємодії з іншими на платформі?</p>
                                <a class="faq-content-item-link" href="">Детальніше</a>
                            </div>
                            <div class="faq-content-item faq-for-experts" data-answers="experts-1">
                                <p class="faq-content-item-category">Експерту</p>
                                <p class="faq-content-item-title">Як налаштувати та керувати профілем експерта/лікаря та своєю доступністю?</p>
                                <p class="faq-content-item-title">Що робити, якщо виникають технічні проблеми під час консультації або сеансу?</p>
                                <p class="faq-content-item-title">Правила ті Стандарти, експертів під час надання консультацій на платформі</p>
                                <a class="faq-content-item-link" href="">Детальніше</a>
                            </div>
                            <div class="faq-content-item faq-for-clients" data-answers="users-2">
                                <p class="faq-content-item-category">Клієнту</p>
                                <p class="faq-content-item-title">Як працює платформа «Без кордонів»: швидкий гайд ?</p>
                                <p class="faq-content-item-title">Як обрати потрібного експерта і перевірити його кваліфікацію?</p>
                                <p class="faq-content-item-title">Скільки коштують консультації і які методи оплати доступні?</p>
                                <a class="faq-content-item-link" href="">Детальніше</a>
                            </div>
                            <div class="faq-content-item faq-for-all" data-answers="consultations-2">
                                <p class="faq-content-item-category">Консультації</p>
                                <p class="faq-content-item-title">Як працює платформа «Без кордонів»: швидкий гайд?</p>
                                <p class="faq-content-item-title">Як обрати потрібного експерта і перевірити його кваліфікацію?</p>
                                <p class="faq-content-item-title">Скільки коштують консультації і які методи оплати доступні?</p>
                                <a class="faq-content-item-link" href="">Детальніше</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Block with answers windows -->
                <section class="faq-answers" id="consultations-1">
                    <div class="container">
                        <button class="faq-back-button mb-20">
                            <img src="./src/img/icons/prev-btn-gray.svg" alt="">
                            <p>Назад</p>
                        </button>
                        <h3 class="faq-answers-title">Консультації</h3>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq1">
                            <label class="faq-question" for="faq1">
                                <p>Як знайти експерта за локацією?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Ви можете фільтрувати результати за галуззю та локацією, щоб знайти потрібного експерта.
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq2">
                            <label class="faq-question" for="faq2">
                                <p>Скільки коштують консультації?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Вартість консультацій залежить від експерта та галузі. Ціни зазначені на сторінці кожного спеціаліста.
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq3">
                            <label class="faq-question" for="faq3">
                                <p>Як скасувати заплановану консультацію?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Для скасування консультації увійдіть до особистого кабінету, знайдіть заплановану зустріч у розділі "Мої консультації" та натисніть кнопку "Скасувати". Зверніть увагу, що скасування можливе не пізніше ніж за 24 години до початку консультації.
                            </div>
                        </div>
                    </div>
                </section>
                <section class="faq-answers" id="users-1">
                    <div class="container">
                        <button class="faq-back-button mb-20">
                            <img src="./src/img/icons/prev-btn-gray.svg" alt="">
                            <p>Назад</p>
                        </button>
                        <h3 class="faq-answers-title">Клієнту</h3>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq4">
                            <label class="faq-question" for="faq4">
                                <p>Як додати кредитну картку?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                <p><b>Увійдіть в акаунт:</b></p>
                                <p>- авторизуйтеся у своєму акаунті.</p>
                                <p>- перейдіть до налаштувань оплати.</p>
                                <br>
                                <p><b>Знайдіть розділ "Способи оплати":</b></p>
                                <p>- у деяких сервісах це може бути у розділі "Налаштування" або "Білінг".</p>
                                <p>- додайте нову картку.</p>
                                <br>
                                <p><b>Натисніть кнопку "Додати спосіб оплати":</b></p>
                                <p>- введіть дані картки (номер, термін дії, CVV-код).</p>
                                <p>- підтвердьте картку.</p>
                                <br>
                                <p>Після успішного додавання картка з'явиться у вашому списку способів оплати.</p>
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq6">
                            <label class="faq-question" for="faq6">
                                <p>Правила та умови використання Без Кордонів</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Онлайн-сервіс надає можливість знайти кваліфікованого спеціаліста та отримати консультацію з різних питань. Платформа об'єднує експертів з різних галузей, доступних для користувачів з будь-якої точки Європи. Завдяки зручному пошуку та відеоконсультаціям ви можете швидко отримати професійну допомогу без необхідності відвідувати офіс спеціаліста. Безпека даних та якість послуг гарантуються перевіреними фахівцями та сучасними технологіями.
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq7">
                            <label class="faq-question" for="faq7">
                                <p>Як змінити особисті дані в акаунті?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Перейдіть до свого профілю, натисніть на іконку редагування. У режимі редагування ви зможете змінити своє ім'я, фото профілю та контактну інформацію.
                            </div>
                        </div>
                    </div>
                </section>
                <section class="faq-answers" id="experts-1">
                    <div class="container">
                        <button class="faq-back-button mb-20">
                            <img src="./src/img/icons/prev-btn-gray.svg" alt="">
                            <p>Назад</p>
                        </button>
                        <h3 class="faq-answers-title">Експерту</h3>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq8">
                            <label class="faq-question" for="faq8">
                                <p>Як стати експертом на платформі?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Щоб стати експертом, натисніть кнопку "Для експертів" у верхньому меню, заповніть анкету та завантажте необхідні документи для верифікації. Після перевірки адміністрацією ви отримаєте доступ до особистого кабінету експерта.
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq9">
                            <label class="faq-question" for="faq9">
                                <p>Як встановити вартість своїх послуг?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                У кабінеті експерта перейдіть до розділу "Мої послуги", де ви можете вказати вартість для різних типів консультацій. Ви можете змінювати ціни в будь-який момент, але це не вплине на вже заплановані консультації.
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq11">
                            <label class="faq-question" for="faq11">
                                <p>Як налаштувати графік доступності?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                У розділі "Календар" кабінету експерта ви можете вказати дні та години, коли ви доступні для консультацій. Користувачі зможуть записатися тільки на вільний час у вашому графіку.
                            </div>
                        </div>
                    </div>
                </section>
                <section class="faq-answers" id="users-2">
                    <div class="container">
                        <button class="faq-back-button mb-20">
                            <img src="./src/img/icons/prev-btn-gray.svg" alt="">
                            <p>Назад</p>
                        </button>
                        <h3 class="faq-answers-title">Клієнту</h3>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq4">
                            <label class="faq-question" for="faq4">
                                <p>Як додати кредитну картку?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                <p><b>Увійдіть в акаунт:</b></p>
                                <p>- авторизуйтеся у своєму акаунті.</p>
                                <p>- перейдіть до налаштувань оплати.</p>
                                <br>
                                <p><b>Знайдіть розділ "Способи оплати":</b></p>
                                <p>- у деяких сервісах це може бути у розділі "Налаштування" або "Білінг".</p>
                                <p>- додайте нову картку.</p>
                                <br>
                                <p><b>Натисніть кнопку "Додати спосіб оплати":</b></p>
                                <p>- введіть дані картки (номер, термін дії, CVV-код).</p>
                                <p>- підтвердьте картку.</p>
                                <br>
                                <p>Після успішного додавання картка з'явиться у вашому списку способів оплати.</p>
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq6">
                            <label class="faq-question" for="faq6">
                                <p>Правила та умови використання Без Кордонів</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Онлайн-сервіс надає можливість знайти кваліфікованого спеціаліста та отримати консультацію з різних питань. Платформа об'єднує експертів з різних галузей, доступних для користувачів з будь-якої точки Європи. Завдяки зручному пошуку та відеоконсультаціям ви можете швидко отримати професійну допомогу без необхідності відвідувати офіс спеціаліста. Безпека даних та якість послуг гарантуються перевіреними фахівцями та сучасними технологіями.
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq7">
                            <label class="faq-question" for="faq7">
                                <p>Як змінити особисті дані в акаунті?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Перейдіть до свого профілю, натисніть на іконку редагування. У режимі редагування ви зможете змінити своє ім'я, фото профілю та контактну інформацію.
                            </div>
                        </div>
                    </div>
                </section>
                <section class="faq-answers" id="consultations-2">
                    <div class="container">
                        <button class="faq-back-button mb-20">
                            <img src="./src/img/icons/prev-btn-gray.svg" alt="">
                            <p>Назад</p>
                        </button>
                        <h3 class="faq-answers-title">Консультації</h3>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq1">
                            <label class="faq-question" for="faq1">
                                <p>Як знайти експерта за локацією?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Ви можете фільтрувати результати за галуззю та локацією, щоб знайти потрібного експерта.
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq2">
                            <label class="faq-question" for="faq2">
                                <p>Скільки коштують консультації?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Вартість консультацій залежить від експерта та галузі. Ціни зазначені на сторінці кожного спеціаліста.
                            </div>
                        </div>
                        <div class="question-list-item">
                            <input type="checkbox" id="faq3">
                            <label class="faq-question" for="faq3">
                                <p>Як скасувати заплановану консультацію?</p>
                                <img src="./src/img/icons/accordion-arrow.svg" alt="">
                            </label>
                            <div class="faq-answer">
                                Для скасування консультації увійдіть до особистого кабінету, знайдіть заплановану зустріч у розділі "Мої консультації" та натисніть кнопку "Скасувати". Зверніть увагу, що скасування можливе не пізніше ніж за 24 години до початку консультації.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FAQ;
}