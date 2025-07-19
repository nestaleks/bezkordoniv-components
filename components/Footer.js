import { Component } from './Component.js';

export class Footer extends Component {
    render() {
        this.container.innerHTML = `
            <footer class="footer">
    <div class="footer-inner">
        <div class="footer-logo">
            <img src="./img/logo.svg" alt="">
            <p>Без Кордонів</p>
        </div>
        <div class="footer-content">
            <nav class="footer-links">
                <a href="">Про нас</a>
                <a href="">Партнерам</a>
                <a href="">Правила сервісу</a>
                <a href="">Політика конфіденційності </a>
                <a href="">Політика безпеки передачі реквізитів платіжної картки</a>
                <a href="">Умови повернення грошей</a>
                <a href="">FAQ</a>
                <a href="">Блог</a>
            </nav>
            <div class="footer-contacts">
                <p class="footer-contacts-title">Контакти: Телефонуйте нам:</p>
                <p class="footer-contacts-text">
                    <span>Пн-Пт:</span> з 8:00 до 20:00
                </p>
                <p class="footer-contacts-text">
                    <span>Сб-Нд:</span> з 9:00 до 20:00
                </p>
                <p class="footer-contacts-text">
                    <span>Служба турботи:</span> <a href="tel:+380977777777">0977777777</a> 
                </p>
                <div class="footer-socials">
                    <img src="./img/icons/facebook.svg" alt="">
                    <img src="./img/icons/instagram.svg" alt="">
                    <img src="./img/icons/linkedin.svg" alt="">
                    <img src="./img/icons/telegram.svg" alt="">
                    <img src="./img/icons/whatsapp.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-copyright">
        <p>©bezkordoniv.com, 2025 Використання матеріалів дозволено тільки при наявності активного посилання на джерело</p>
        <p class="footer-copyright-lang">UA</p>
    </div>
</footer>
        `;
    }
} 