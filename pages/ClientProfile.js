import { Page } from './Page.js';

export class ClientProfilePage extends Page {
    render() {
        this.container.innerHTML = `
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--FAQ-->
             <section class="client-profile-page">
                <div class="container">
                    <h4 class="client-profile-title page-title">Профіль</h4>
                    <div class="tabs">
                        <div class="tabs-inner">
                            <button class="tabs-item client-profile-tabs-main">
                                <p>Головна інформація</p>
                            </button>
                            <button class="tabs-item client-profile-tabs-contacts">
                                <p>Контактна інформація</p>
                            </button>
                            <button class="tabs-item client-profile-tabs-password">
                                <p>Налаштування паролю</p>
                            </button>
                        </div>
                    </div>
                    <div class="client-profile-content">
                        <div class="client-profile-photo">
                            <img class="client-profile-avatar" src="./img/expert-7.png" alt="">
                            <div class="client-profile-photo-actions">
                                <button>
                                    <img src="./img/icons/edit.svg" alt="">
                                </button>
                                <button>
                                    <img src="./img/icons/delete.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <div class="client-profile-main">
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" placeholder="Email" class="form-input">
                                    <p class="form-undertext">Електронна Адреса</p>
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Імʼя" class="form-input">
                                    <p class="form-undertext">Імʼя</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" placeholder="Прізвище" class="form-input">
                                    <p class="form-undertext">Прізвище</p>
                                </div>
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Стать</option>
                                        <option value="male">Чоловіча</option>
                                        <option value="female">Жіноча</option>
                                        <option value="other">Інша</option>
                                    </select>
                                    <p class="form-undertext">Прізвище</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="date" placeholder="Дата Народження" class="form-input">
                                    <p class="form-undertext">Дата Народження</p>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Tin" class="form-input">
                                    <p class="form-undertext">Tin</p>
                                </div>
                            </div>
                        </div>
                        <div class="client-profile-contacts hidden">
                            <div class="form-row">
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Країна</option>
                                        <option value="de">Німеччина</option>
                                        <option value="pl">Польща</option>
                                        <option value="cz">Чехія</option>
                                        <option value="ua">Україна</option>
                                    </select>
                                    <p class="form-undertext">Країна</p>
                                </div>
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Область</option>
                                        <option value="de">Німеччина</option>
                                        <option value="pl">Польща</option>
                                        <option value="cz">Чехія</option>
                                        <option value="ua">Україна</option>
                                    </select>
                                    <p class="form-undertext">Область</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Місто</option>
                                        <option value="de">Німеччина</option>
                                        <option value="pl">Польща</option>
                                        <option value="cz">Чехія</option>
                                        <option value="ua">Україна</option>
                                    </select>
                                    <p class="form-undertext">Місто</p>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Індекс" class="form-input">
                                    <p class="form-undertext">Індекс</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Адреса" class="form-input">
                                <p class="form-undertext">Адреса</p>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="+49">+49</option>
                                    </select>
                                    <p class="form-undertext">Код країни</p>
                                </div>
                                <div class="form-group">
                                    <input type="tel" value="152 05752138" class="form-input">
                                    <p class="form-undertext">Номер телефону</p>
                                </div>
                            </div>
                        </div>
                        <div class="client-profile-password hidden">
                            <div class="form-group">
                                <input type="password" placeholder="Поточний Пароль" class="form-input">
                                <p class="form-undertext">Поточний Пароль</p>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Новий Пароль" class="form-input">
                                <p class="form-undertext">Новий Пароль</p>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Підтвердіть Новий Пароль" class="form-input">
                                <p class="form-undertext">Підтвердіть Новий Пароль</p>
                            </div>
                        </div>
                        <div class="client-profile-buttons-save">
                            <button class="client-profile-button-cancel button-secondary">
                                <p>Відмінити</p>
                            </button>
                            <button class="client-profile-button-save button-primary">
                                <p>Зберегти</p>
                            </button>
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