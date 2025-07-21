import { Page } from './Page.js';

export class NotFoundPage extends Page {
    render() {
        this.container.innerHTML = `
            <section class="page-404">
                <div class="page-404-inner">
                    <img class="page-404-img" src="./img/404-img.png" alt="">
                    <div class="page-404-content">
                        <img class="page-404-notfound" src="./img/icons/not-found.svg" alt="">
                        <p class="page-404-title">Сторінка не знайдена</p>
                        <p class="page-404-text">Перезавантажте сторінку через декілька хвилин.</p>
                        <a class="page-404-link" href="">
                            <img src="./img/icons/prev-btn-white.svg" alt="">
                            <p>Повернутись назад</p>
                        </a>
                    </div>
                </div>
            </section>
        `;
        const headerContainer = this.container.querySelector('#header-container');
        const header = new Header(headerContainer);
        header.render();
    }
}