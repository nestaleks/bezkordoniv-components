// Пример отдельного компонента Button
const Button = (props = {}) => {
    const {
        text = 'Click me',
        className = 'btn',
        onClick = '',
        type = 'button',
        disabled = false
    } = props;

    return `
        <button 
            type="${type}" 
            class="${className}" 
            ${disabled ? 'disabled' : ''}
            ${onClick ? `onclick="${onClick}"` : ''}
        >
            ${text}
        </button>
    `;
};

// Экспорт компонента
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Button;
}