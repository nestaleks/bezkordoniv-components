// Пример компонента Form
const Form = (props = {}) => {
    const {
        fields = [],
        submitText = 'Отправить',
        action = '#',
        method = 'POST',
        className = 'form'
    } = props;

    const renderField = (field) => {
        const { type, name, label, placeholder, required } = field;
        
        switch (type) {
            case 'textarea':
                return `
                    <div class="form-group">
                        <label for="${name}">${label}</label>
                        <textarea 
                            id="${name}" 
                            name="${name}" 
                            placeholder="${placeholder || ''}"
                            ${required ? 'required' : ''}
                        ></textarea>
                    </div>
                `;
            case 'select':
                const options = field.options || [];
                return `
                    <div class="form-group">
                        <label for="${name}">${label}</label>
                        <select id="${name}" name="${name}" ${required ? 'required' : ''}>
                            ${options.map(opt => `<option value="${opt.value}">${opt.text}</option>`).join('')}
                        </select>
                    </div>
                `;
            default:
                return `
                    <div class="form-group">
                        <label for="${name}">${label}</label>
                        <input 
                            type="${type}" 
                            id="${name}" 
                            name="${name}" 
                            placeholder="${placeholder || ''}"
                            ${required ? 'required' : ''}
                        >
                    </div>
                `;
        }
    };

    return `
        <form class="${className}" action="${action}" method="${method}">
            ${fields.map(renderField).join('')}
            <button type="submit" class="btn btn-primary">${submitText}</button>
        </form>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Form;
}