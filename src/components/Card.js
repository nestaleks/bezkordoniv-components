// Пример компонента Card
const Card = (props = {}) => {
    const {
        title = 'Card Title',
        content = 'Card content goes here...',
        imageUrl = '',
        className = 'card'
    } = props;

    return `
        <div class="${className}">
            ${imageUrl ? `<img src="${imageUrl}" alt="${title}" class="card-image">` : ''}
            <div class="card-content">
                <h3 class="card-title">${title}</h3>
                <p class="card-text">${content}</p>
            </div>
        </div>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Card;
}