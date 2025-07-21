import { Page } from './Page.js';

export class SignUpPage extends Page {
    render() {
        this.container.innerHTML = `
            <div class="signup-page">
                <div class="signup-images">
                    <div class="signup-images-inner">
                        <img class="signup-image-1" src="./img/signup-banner-1.jpg" alt="">
                        <img class="signup-image-2" src="./img/signup-banner-2.jpg" alt="">
                    </div>
                </div>
                <div class="signup-container">
                    <h2 class="signup-title">Реєстрація</h2>
                    
                    <div class="signup-tabs">
                        <button class="tab-button active" data-tab="client">
                            <p>Клієнт</p>
                            <img class="tab-button-img" src="./img/icons/signup-client.svg" alt="">
                        </button>
                        <button class="tab-button" data-tab="expert">
                            <p>Експерт</p>
                            <img class="tab-button-img" src="./img/icons/signup-expert.svg" alt="">
                        </button>
                    </div>
            
                    <!-- Sign up for clients and Step 1 for Experts -->
                    <form class="signup-form step-1">
                        <div class="expert-step-1">
                            <div class="step-1-item">
                                <img src="./img/icons/location-blue.svg" alt="">
                                <p>1 Крок. Контактна Інформація</p>
                            </div>
                            <img src="./img//icons/details-gray.svg" alt="">
                            <div class="step-1-item">
                                <img src="./img/icons/shield_gray.svg" alt="">
                                <p>2 Крок. Професійна Інформація</p>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" placeholder="Ім'я" class="form-input">
                            </div>

                            <div class="form-group">
                                <input type="text" placeholder="Прізвище" class="form-input">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" placeholder="Email / Логін*" class="form-input">
                            </div>
                            <div class="form-group">
                                <div class="phone-input">
                                    <select class="country-code">
                                        <option value="+49">+49</option>
                                    </select>
                                    <input type="tel" value="152 05752138" class="phone-number">
                                </div>
                            </div>

                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <input type="password" placeholder="Пароль" class="form-input">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Підтвердити пароль" class="form-input">
                            </div>
                        </div>
            
                        <div class="form-row">
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Вік</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <!-- ... и так далее до 100 -->
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Стать</option>
                                    <option value="male">Чоловіча</option>
                                    <option value="female">Жіноча</option>
                                    <option value="other">Інша</option>
                                </select>
                            </div>
                        </div>
            
                        <div class="form-row">
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Країна</option>
                                    <option value="de">Німеччина</option>
                                    <option value="pl">Польща</option>
                                    <option value="cz">Чехія</option>
                                    <option value="ua">Україна</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Місто</option>
                                    <option value="de">Німеччина</option>
                                    <option value="pl">Польща</option>
                                    <option value="cz">Чехія</option>
                                    <option value="ua">Україна</option>
                                </select>
                            </div>
                        </div>
            
                        <div class="form-group">
                            <input type="text" placeholder="Вулиця" class="form-input">
                        </div>
            
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" placeholder="Дім" class="form-input">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Поштовий індекс" class="form-input">
                            </div>
                        </div>
            
                        <div class="form-group">
                            <select class="form-select">
                                <option value="" disabled selected>Мова</option>
                                <option value="uk">Українська</option>
                                <option value="en">English</option>
                                <option value="de">Deutsch</option>
                                <option value="pl">Polski</option>
                            </select>
                        </div>

                        <div class="form-group terms client-terms">
                            <label class="checkbox-container">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                                <p>Погоджуюсь з <a href="#">Правилами Сервісу</a> та <a href="#">Політикою конфіденційності</a></p>
                            </label>
                        </div>

                        <div class="social-links">
                            <div class="social-text">Зареєструйся за допомогою</div>
                            <div class="social-icons">
                                <a href="#" class="social-icon"><img src="./img/icons/facebook.svg" alt="Facebook"></a>
                                <a href="#" class="social-icon"><img src="./img/icons/instagram.svg" alt="Instagram"></a>
                                <a href="#" class="social-icon"><img src="./img/icons/linkedin.svg" alt="LinkedIn"></a>
                                <a href="#" class="social-icon"><img src="./img/icons/telegram.svg" alt="Telegram"></a>
                                <a href="#" class="social-icon"><img src="./img/icons/whatsapp.svg" alt="WhatsApp"></a>
                            </div>
                        </div>

                        <div class="form-actions">
                            <a href="./login.html" class="have-account button-secondary">Вже є Акаунт? Увійти</a>
                            <button type="submit" class="signup-submit button-primary">Зареєструватись</button>
                            <button type="button" class="continue-button button-primary">Продовжити</button>
                        </div>
                    </form>
                    <!-- Sign up Step 2 for Experts -->
                    <form class="signup-form step-2">
                        <div class="expert-step-2">
                            <div class="step-2-item">
                                <img src="./img/icons/location.svg" alt="">
                                <p>1 Крок. Контактна Інформація</p>
                            </div>
                            <img src="./img//icons/details-gray.svg" alt="">
                            <div class="step-2-item">
                                <img src="./img/icons/shield_blue.svg" alt="">
                                <p>2 Крок. Професійна Інформація</p>
                            </div>
                        </div>
            
                        <div class="form-row">
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Категорія</option>
                                    <option value="18">Медицина</option>
                                    <option value="19">Маркетинг</option>
                                    <option value="20">Юридичні послуги</option>
                                    <!-- ... и так далее до 100 -->
                                </select>
                                <p class="form-undertext">Оберіть категорію вашої праці</p>
                            </div>
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Спеціальність</option>
                                    <option value="male">Хірургія</option>
                                    <option value="female">Кардіологія</option>
                                    <option value="other">Травматологія</option>
                                </select>
                                <p class="form-undertext">Оберіть вашу спеціальність</p>
                            </div>
                        </div>
            
                        <div class="form-row">
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Досвід роботи</option>
                                    <option value="1">1  рік</option>
                                    <option value="2">2 роки</option>
                                    <option value="3">3 роки</option>
                                    <option value="4">4 роки</option>
                                </select>
                                <p class="form-undertext">Зазначте ваш досвід роботи</p>
                            </div>
                            <div class="form-group">
                                <select class="form-select">
                                    <option value="" disabled selected>Ціна за консультацію</option>
                                    <option value="25">$25</option>
                                    <option value="50">$50</option>
                                    <option value="75">$76</option>
                                    <option value="100">$100</option>
                                </select>
                                <p class="form-undertext">Вкажіть ціну за консультацію</p>
                            </div>
                        </div>
            
                        <div class="form-group terms expert-terms">
                            <label class="checkbox-container">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                                <p>Погоджуюсь з <a href="#">Правилами Сервісу</a> та <a href="#">Політикою конфіденційності</a></p>
                            </label>
                        </div>

                        <div class="social-links">
                            <div class="social-text">Зареєструйся за допомогою</div>
                            <div class="social-icons">
                                <a href="#" class="social-icon"><img src="./img/icons/facebook.svg" alt="Facebook"></a>
                                <a href="#" class="social-icon"><img src="./img/icons/instagram.svg" alt="Instagram"></a>
                                <a href="#" class="social-icon"><img src="./img/icons/linkedin.svg" alt="LinkedIn"></a>
                                <a href="#" class="social-icon"><img src="./img/icons/telegram.svg" alt="Telegram"></a>
                                <a href="#" class="social-icon"><img src="./img/icons/whatsapp.svg" alt="WhatsApp"></a>
                            </div>
                        </div>

                        <div class="form-actions">
                            <a href="./login.html" class="have-account button-secondary">Вже є Акаунт? Увійти</a>
                            <button type="submit" class="button-primary signup-submit">Зареєструватись</button>
                        </div>
                    </form>
                </div>

                <div class="signup-container-success hidden">
                    <h2 class="signup-title">Ваш акаунт успішно зареєстровано!</h2>
                    <p class="success-message">Будь ласка, перевірте вашу пошту бо ми наділали вам лінк на верефікацію..</p>
                    <div class="form-actions">
                        <a href="./signup.html" class="have-account button-secondary">Зареєструватись</a>
                        <a href="./login.html" class="have-account button-primary">Увійти</a>
                    </div>
                </div>
            </div>
        `;
    }
}