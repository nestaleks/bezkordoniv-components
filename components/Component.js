export class Component {
    constructor(container) {
        this.container = container;
    }

    render() {
        throw new Error('Метод render должен быть реализован');
    }

    update() {
        this.render();
    }

    addEventListeners() {}

    removeEventListeners() {}

    destroy() {
        this.removeEventListeners();
        this.container.innerHTML = '';
    }
}