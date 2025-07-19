import { Page } from './Page.js';

export class ClientProfilePage extends Page {
    render() {
        this.container.innerHTML = `
            <div class="container">
                <h1>Заголовок</h1>
                <p>Здесь будет содержимое</p>
            </div>
        `;
    }
}