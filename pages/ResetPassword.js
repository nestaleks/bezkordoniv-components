import { Page } from './Page.js';

export class ResetPasswordPage extends Page {
    render() {
        this.container.innerHTML = `
            <div class="reset-page">
                <div class="signup-images">
                    <div class="signup-images-inner">
                        <img class="signup-image-1" src="./img/signup-banner-1.jpg" alt="">
                        <img class="signup-image-2" src="./img/signup-banner-2.jpg" alt="">
                    </div>
                </div>
                <div class="reset-container">
                    <!-- Enter email  for reset password -->
                    <div class="reset-box-1">
                        <div class="to-prev-page">
                            <div class="container">
                                <a class="prev-page-btn" href="">
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Назад</p>
                                </a>
                            </div>
                        </div>
            
                        <h2 class="reset-title">Відновити пароль</h2>
            
                        <div class="form-group">
                            <input type="text" placeholder="Email*" class="form-input">
                            <p class="form-undertext">Введіть свій Email</p>
                        </div>
            
                        <div class="form-actions reset-actions">
                            <a href="./signup.html" class="need-signup button-secondary">Немає Акаунту? Зареєструватись</a>
                            <button type="submit" class="reset-next button-primary">Продовжити</button>
                        </div>
                    </div>
                    <!-- Email has been sent -->
                    <div class="reset-box-2">
                        <div class="to-prev-page">
                            <div class="container">
                                <a class="prev-page-btn" href="">
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 9L1 5L5 1" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Назад</p>
                                </a>
                            </div>
                        </div>
            
                        <h2 class="reset-title">Відновити пароль</h2>
            
                        <p class="reset-text">Ми відправили тобі посилання на відновлення паролю! Перевір свою пошту та дотримуйся подальших кроків.</p>
            
                        <div class="form-actions reset-actions">
                            <a href="./login.html" class="have-account button-secondary">Вже є Акаунт? Увійти</a>
                            <a href="./signup.html" type="submit" class="button-primary need-signup">Зареєструватись</a>
                        </div>
                    </div>
                    <!-- Create new  password -->
                    <div class="reset-box-3">
            
                        <h2 class="reset-title">Створіть пароль</h2>


                        <p class="new-password-text">Введіть і підтвердіть новий пароль</p>
            
                        <div class="new-password">
                            <div class="form-group">
                                <input type="password" placeholder="Пароль" class="form-input">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Підтвердити пароль" class="form-input">
                            </div>
                        </div>
            
                        <div class="form-actions reset-actions">
                            <button type="submit" class="new-password-submit button-primary">Змінити</button>
                        </div>
                    </div>
                    <!-- Password has been update -->
                    <div class="reset-box-4">
            
                        <h2 class="reset-title">Пароль успішно змінено!</h2>
            
                        <p class="reset-text success-message">Ваш пароль був успішно змінений, увійдіть в свій аккаунт.</p>
            
                        <div class="form-actions reset-actions">
                            <a href="./signup.html" class="have-account button-secondary">Зареєструватись</a>
                            <a href="./login.html" type="submit" class="button-primary need-signup">Увійти</a>
                        </div>
                    </div>
                    <!-- Something wrong -->
                    <div class="reset-box-error">
            
                        <h2 class="reset-title">Шось трапилось :(</h2>
            
                        <p class="reset-text success-message">І пароль не було змінено. Будь ласка, порторіть спробу</p>

                        <!-- Open reset-box-1 -->
                        <a href="./reset-password.html" type="submit" class="button-primary reset-password">Змінити Пароль</a>

                        <div class="form-actions reset-actions">
                            <a href="./signup.html" class="have-account button-secondary">Зареєструватись</a>
                            <a href="./login.html" type="submit" class="button-primary need-signup">Увійти</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}