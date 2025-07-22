import { Page } from './Page.js';

export class LoginPage extends Page {
    constructor(container) {
        super(container);
        this.init();
    }

    init() {
        this.setTitle('Вход');
        this.setMeta(
            'Вход в личный кабинет Без Кордонів',
            'вход, авторизация, личный кабинет'
        );
    }

    render() {
        this.container.innerHTML = `
            <div class="login-page">
                <div class="signup-images">
                    <div class="signup-images-inner">
                        <img class="signup-image-1" src="./img/signup-banner-1.jpg" alt="">
                        <img class="signup-image-2" src="./img/signup-banner-2.jpg" alt="">
                    </div>
                </div>
                <div class="login-container">
                    <h2 class="login-title mb-40">Вхід в Акаунт</h2>

                    <form class="login-form mb-12">
                        <div class="form-group">
                            <input type="text" placeholder="Email*" class="form-input">
                        </div>
                        <div class="form-group">
                            <input type="password" placeholder="Пароль" class="form-input">
                        </div>
                    </form>

                    <label class="checkbox-container mb-12">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        <p>Запамʼятати мене</p>
                    </label>

                    <a class="forgot-pass" href="/reset-password" data-link>Не памʼятаю пароль</a>

                    <div class="form-actions mt-40">
                        <a href="/signup" data-link class="need-signup button-secondary">Немає Акаунту? Зареєструватись</a>
                        <button type="submit" class="login-submit button-primary">Увійти</button>
                    </div>
                </div>
            </div>
        `;

        // Монтируем хедер
        const headerContainer = this.container.querySelector('#header-container');
        const header = new Header(headerContainer);
        header.render();

        this.addEventListeners();
    }

    addEventListeners() {
        const form = this.container.querySelector('#loginForm');
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    async handleLogin() {
        const email = this.container.querySelector('#email').value;
        const password = this.container.querySelector('#password').value;

        try {
            // Здесь будет логика авторизации
            console.log('Login attempt:', { email });
        } catch (error) {
            console.error('Login error:', error);
        }
    }
}