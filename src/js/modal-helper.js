/**
 * Modal Helper - Универсальная система для работы с модальными окнами
 * Версия: 2.0
 * 
 * Этот файл предоставляет упрощенный API для работы с модальными окнами
 * и готовые функции для типовых задач
 */

class ModalHelper {
    constructor() {
        this.activeModal = null;
        this.initialized = false;
        this.init();
    }

    init() {
        if (this.initialized) return;
        
        console.log('ModalHelper: Инициализация системы модальных окон');
        
        // Ждем загрузки DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
        
        this.initialized = true;
    }

    setupEventListeners() {
        // Обработчик клавиши Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.close(this.activeModal.id);
            }
        });

        // Автоматическое создание триггеров для data-modal атрибутов
        this.setupDataModalTriggers();
    }

    setupDataModalTriggers() {
        const triggers = document.querySelectorAll('[data-modal]:not(.modal-trigger-initialized)');
        
        triggers.forEach(trigger => {
            const modalId = trigger.getAttribute('data-modal');
            
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.open(modalId);
            });
            
            trigger.classList.add('modal-trigger-initialized');
        });
    }

    /**
     * Открыть модальное окно
     * @param {string} modalId - ID модального окна
     * @param {Object} options - Дополнительные опции
     */
    open(modalId, options = {}) {
        const modal = document.getElementById(modalId);
        
        if (!modal) {
            console.error(`ModalHelper: Модальное окно с ID "${modalId}" не найдено`);
            return false;
        }

        // Закрываем активное модальное окно если есть
        if (this.activeModal && this.activeModal !== modal) {
            this.close(this.activeModal.id);
        }

        // Открываем новое модальное окно
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        this.activeModal = modal;

        // Настраиваем закрытие по клику на фон
        this.setupBackdropClose(modal);
        
        // Настраиваем кнопки закрытия
        this.setupCloseButtons(modal);

        // Триггерим событие
        this.triggerEvent('modal:opened', { modalId, modal });

        console.log(`ModalHelper: Открыто модальное окно "${modalId}"`);
        return true;
    }

    /**
     * Закрыть модальное окно
     * @param {string} modalId - ID модального окна
     */
    close(modalId) {
        const modal = document.getElementById(modalId);
        
        if (!modal) {
            console.error(`ModalHelper: Модальное окно с ID "${modalId}" не найдено`);
            return false;
        }

        modal.classList.remove('active');
        modal.style.display = 'none';
        
        if (this.activeModal === modal) {
            this.activeModal = null;
            document.body.style.overflow = '';
        }

        // Триггерим событие
        this.triggerEvent('modal:closed', { modalId, modal });

        console.log(`ModalHelper: Закрыто модальное окно "${modalId}"`);
        return true;
    }

    /**
     * Закрыть все модальные окна
     */
    closeAll() {
        const modals = document.querySelectorAll('.modal.active, .modal-recharge-balance.active, .modal-pay-appointments.active, .payment-modal.active, .modal-verification.active, .modal-founder.active');
        
        modals.forEach(modal => {
            modal.classList.remove('active');
            modal.style.display = 'none';
        });
        
        document.body.style.overflow = '';
        this.activeModal = null;

        console.log('ModalHelper: Закрыты все модальные окна');
    }

    /**
     * Проверить, открыто ли модальное окно
     * @param {string} modalId - ID модального окна
     */
    isOpen(modalId) {
        const modal = document.getElementById(modalId);
        return modal && modal.classList.contains('active');
    }

    /**
     * Создать модальное окно программно
     * @param {Object} config - Конфигурация модального окна
     */
    create(config) {
        const {
            id,
            title = '',
            content = '',
            size = 'medium', // small, medium, large
            showCloseButton = true,
            buttons = [],
            className = ''
        } = config;

        if (!id) {
            console.error('ModalHelper: ID модального окна обязателен');
            return false;
        }

        // Проверяем, не существует ли уже модальное окно с таким ID
        if (document.getElementById(id)) {
            console.warn(`ModalHelper: Модальное окно с ID "${id}" уже существует`);
            return false;
        }

        // Создаем HTML структуру
        const modalHTML = `
            <div id="${id}" class="modal ${className}">
                <div class="modal-content modal-${size}">
                    ${showCloseButton ? '<div class="modal-window-close"><img src="src/img/icons/close.svg" alt="Закрыть"></div>' : ''}
                    ${title ? `<div class="modal-header"><h3>${title}</h3></div>` : ''}
                    <div class="modal-body">${content}</div>
                    ${buttons.length > 0 ? `<div class="modal-footer">${buttons.map(btn => `<button class="${btn.className || 'demo-button'}" ${btn.onClick ? `onclick="${btn.onClick}"` : ''}>${btn.text}</button>`).join('')}</div>` : ''}
                </div>
            </div>
        `;

        // Добавляем модальное окно в DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        console.log(`ModalHelper: Создано модальное окно "${id}"`);
        return true;
    }

    /**
     * Удалить модальное окно
     * @param {string} modalId - ID модального окна
     */
    destroy(modalId) {
        const modal = document.getElementById(modalId);
        
        if (!modal) {
            console.error(`ModalHelper: Модальное окно с ID "${modalId}" не найдено`);
            return false;
        }

        // Закрываем если открыто
        if (this.isOpen(modalId)) {
            this.close(modalId);
        }

        // Удаляем из DOM
        modal.remove();

        console.log(`ModalHelper: Удалено модальное окно "${modalId}"`);
        return true;
    }

    // Вспомогательные методы

    setupBackdropClose(modal) {
        const backdrop = modal;
        
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                this.close(modal.id);
            }
        });
    }

    setupCloseButtons(modal) {
        const closeButtons = modal.querySelectorAll('.modal-window-close, .modal-close-btn, [data-modal-close]');
        
        closeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.close(modal.id);
            });
        });
    }

    triggerEvent(eventName, detail) {
        const event = new CustomEvent(eventName, { detail });
        document.dispatchEvent(event);
    }

    // Готовые методы для типовых задач

    /**
     * Показать уведомление
     * @param {string} message - Текст уведомления
     * @param {string} type - Тип уведомления (success, error, warning, info)
     */
    showNotification(message, type = 'info') {
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };

        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };

        this.create({
            id: `notification_${Date.now()}`,
            title: `${icons[type]} ${type.charAt(0).toUpperCase() + type.slice(1)}`,
            content: message,
            size: 'small',
            buttons: [
                {
                    text: 'OK',
                    className: 'demo-button',
                    onClick: `modalHelper.close('notification_${Date.now()}')`
                }
            ],
            className: `notification-${type}`
        });

        // Автоматически открываем
        setTimeout(() => {
            const notifications = document.querySelectorAll('[id^="notification_"]');
            if (notifications.length > 0) {
                const latestNotification = notifications[notifications.length - 1];
                this.open(latestNotification.id);
                
                // Автоматически закрываем через 3 секунды
                setTimeout(() => {
                    this.close(latestNotification.id);
                    setTimeout(() => this.destroy(latestNotification.id), 300);
                }, 3000);
            }
        }, 100);
    }

    /**
     * Показать диалог подтверждения
     * @param {string} message - Текст сообщения
     * @param {Function} onConfirm - Callback при подтверждении
     * @param {Function} onCancel - Callback при отмене
     */
    showConfirm(message, onConfirm, onCancel) {
        const confirmId = `confirm_${Date.now()}`;
        
        // Сохраняем callbacks
        window[`confirm_${confirmId}_yes`] = () => {
            this.close(confirmId);
            setTimeout(() => this.destroy(confirmId), 300);
            if (onConfirm) onConfirm();
        };
        
        window[`confirm_${confirmId}_no`] = () => {
            this.close(confirmId);
            setTimeout(() => this.destroy(confirmId), 300);
            if (onCancel) onCancel();
        };

        this.create({
            id: confirmId,
            title: '⚠️ Подтверждение',
            content: message,
            size: 'small',
            buttons: [
                {
                    text: 'Отмена',
                    className: 'demo-button secondary',
                    onClick: `confirm_${confirmId}_no()`
                },
                {
                    text: 'Подтвердить',
                    className: 'demo-button',
                    onClick: `confirm_${confirmId}_yes()`
                }
            ]
        });

        this.open(confirmId);
    }

    /**
     * Показать форму ввода
     * @param {string} title - Заголовок
     * @param {string} placeholder - Placeholder для поля ввода
     * @param {Function} onSubmit - Callback при отправке
     */
    showPrompt(title, placeholder = '', onSubmit) {
        const promptId = `prompt_${Date.now()}`;
        
        window[`prompt_${promptId}_submit`] = () => {
            const input = document.querySelector(`#${promptId} input`);
            const value = input ? input.value.trim() : '';
            
            if (value) {
                this.close(promptId);
                setTimeout(() => this.destroy(promptId), 300);
                if (onSubmit) onSubmit(value);
            } else {
                input.style.borderColor = '#dc3545';
                input.focus();
            }
        };

        this.create({
            id: promptId,
            title: title,
            content: `<div class="form-group">
                <input type="text" class="card-input" placeholder="${placeholder}" autofocus>
            </div>`,
            size: 'small',
            buttons: [
                {
                    text: 'Отмена',
                    className: 'demo-button secondary',
                    onClick: `modalHelper.close('${promptId}'); setTimeout(() => modalHelper.destroy('${promptId}'), 300);`
                },
                {
                    text: 'OK',
                    className: 'demo-button',
                    onClick: `prompt_${promptId}_submit()`
                }
            ]
        });

        this.open(promptId);
    }
}

// Создаем глобальный экземпляр
const modalHelper = new ModalHelper();

// Экспортируем для обратной совместимости
window.openModal = (modalId) => modalHelper.open(modalId);
window.closeModal = (modalId) => modalHelper.close(modalId);
window.closeAllModals = () => modalHelper.closeAll();

// Экспортируем основной объект
window.modalHelper = modalHelper;

console.log('🚀 ModalHelper загружен и готов к использованию!');

// Дополнительные стили для размеров модальных окон
const additionalStyles = `
<style>
.modal-small .modal-content { max-width: 400px; }
.modal-medium .modal-content { max-width: 600px; }
.modal-large .modal-content { max-width: 900px; }

.notification-success .modal-content { border-left: 4px solid #28a745; }
.notification-error .modal-content { border-left: 4px solid #dc3545; }
.notification-warning .modal-content { border-left: 4px solid #ffc107; }
.notification-info .modal-content { border-left: 4px solid #17a2b8; }

.form-group { margin-bottom: 15px; }
.form-group label { display: block; margin-bottom: 8px; font-weight: 600; }
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);