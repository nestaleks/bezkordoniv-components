// Компонент Login Page
const Login = (props = {}) => {
    return `
        <main class="main login-page">
            <div class="signup-images">
                    <div class="signup-images-inner">
                        <img class="signup-image-1" src="./src/img/signup-banner-1.jpg" alt="">
                        <img class="signup-image-2" src="./src/img/signup-banner-2.jpg" alt="">
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
        </main>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Login;
}