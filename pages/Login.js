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
            <div class="page-container">
                <main class="main">
                    <div class="container">
                        <div class="auth-container">
                            <div class="auth-form-container">
                                <h1 class="auth-title">Вход в личный кабинет</h1>
                                <form class="auth-form" id="loginForm">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Пароль</label>
                                        <input type="password" id="password" name="password" required>
                                    </div>
                                    <div class="form-actions">
                                        <button type="submit" class="button-primary">Войти</button>
                                        <a href="/reset-password" class="form-link" data-link>Забыли пароль?</a>
                                    </div>
                                </form>
                                <div class="auth-footer">
                                    <p>Еще нет аккаунта? <a href="/signup" data-link>Зарегистрироваться</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div id="footer-container"></div>
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