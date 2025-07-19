import { Page } from './Page.js';

export class BlogPage extends Page {
    render() {
        this.container.innerHTML = `
            <div class="container">
                <h1>Блог</h1>
                <p>Здесь будут статьи блога.</p>
            </div>
        `;
    }
}
