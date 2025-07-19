import { Page } from './Page.js';

export class ExpertChatPage extends Page {
    render() {
        this.container.innerHTML = `
            <div class="container">
                <h1>Заголовок</h1>
                <p>Здесь будет содержимое</p>
            </div>
        `;
        const headerContainer = this.container.querySelector('#header-container');
        const header = new Header(headerContainer);
        header.render();
    }
}