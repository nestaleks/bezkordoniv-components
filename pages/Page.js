export class Page {
    constructor(container) {
        this.container = container;
    }
    render() {
        throw new Error('Метод render должен быть реализован');
    }
    destroy() {
        this.container.innerHTML = '';
    }
    setTitle(title) {
        document.title = title;
    }
    setMeta(description, keywords) {
        let desc = document.querySelector('meta[name="description"]');
        if (!desc) {
            desc = document.createElement('meta');
            desc.name = 'description';
            document.head.appendChild(desc);
        }
        desc.content = description;

        let kw = document.querySelector('meta[name="keywords"]');
        if (!kw) {
            kw = document.createElement('meta');
            kw.name = 'keywords';
            document.head.appendChild(kw);
        }
        kw.content = keywords;
    }
}