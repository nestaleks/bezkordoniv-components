/**
 * Модуль для управления модальными окнами
 */

// Глобальные переменные для отслеживания состояния модальных окон
let activeModal = null;
let modalInitialized = false;

document.addEventListener('DOMContentLoaded', function() {
    if (modalInitialized) return;
    modalInitialized = true;
    
    console.log('Modal.js: Initializing modal windows');
    
    // Проверяем наличие элементов
    const paymentCard = document.querySelector('.payment-modal-card');
    const paymentModalNewcard = document.getElementById('payment-modal-newcard');
    
    // Если обнаружены элементы, добавляем прямой обработчик
    if (paymentCard && paymentModalNewcard) {
        console.log('Modal.js: Found payment card elements, adding direct handler');
        
        // Простой обработчик для кнопки оплаты картой
        paymentCard.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Modal.js: payment-modal-card clicked directly');
            
            // Закрываем текущее окно выбора метода оплаты
            const appointmentModal = document.getElementById('modal-pay-appointment-item');
            if (appointmentModal) {
                appointmentModal.classList.remove('active');
                appointmentModal.style.display = 'none';
            }
            
            // Показываем окно ввода данных карты
            paymentModalNewcard.classList.add('active');
            paymentModalNewcard.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        
        // Прямой обработчик для кнопки "Назад"
        const backButton = paymentModalNewcard.querySelector('.prev-page-btn');
        if (backButton) {
            backButton.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Modal.js: Back button clicked directly');
                
                // Скрываем окно ввода данных карты
                paymentModalNewcard.classList.remove('active');
                paymentModalNewcard.style.display = 'none';
                
                // Показываем окно выбора метода оплаты
                const appointmentModal = document.getElementById('modal-pay-appointment-item');
                if (appointmentModal) {
                    appointmentModal.classList.add('active');
                    appointmentModal.style.display = 'flex';
                }
            });
        }
        
        // Прямой обработчик для кнопки закрытия
        const closeButton = paymentModalNewcard.querySelector('.modal-window-close');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                console.log('Modal.js: Close button clicked directly');
                paymentModalNewcard.classList.remove('active');
                paymentModalNewcard.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
        
        // Прямой обработчик для кнопки отмены
        const cancelButton = paymentModalNewcard.querySelector('#paymentModalClose');
        if (cancelButton) {
            cancelButton.addEventListener('click', function() {
                console.log('Modal.js: Cancel button clicked directly');
                paymentModalNewcard.classList.remove('active');
                paymentModalNewcard.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
    }
    
    // Инициализация всех модальных окон на странице
    initModals();
    
    // Инициализация обработчиков для таблицы транзакций эксперта
    setupExpertIncomingTableHandlers();
    
    // Expert Page Modals
    // Description: Expert page verification and founder modals management
    // Functionality: Handles opening and closing of verification and founder modals
    initExpertPageModals();
});

// 1. Modal Core Management
// Description: Core modal window management functionality
// Functionality: Handles opening, closing, and state management of modal windows
function openModal(modalId) {
    console.log(`Modal.js: Opening modal: ${modalId}`);
    
    if (!modalId) {
        console.error('Modal.js: No modal ID provided');
        return;
    }
    
    if (activeModal) {
        console.log(`Modal.js: Closing active modal: ${activeModal.id}`);
        closeModal(activeModal.id);
    }
    
    const modal = document.getElementById(modalId);
    console.log(`Modal.js: Found modal element:`, modal);
    
    if (!modal) {
        console.error(`Modal.js: Modal with ID ${modalId} not found`);
        return;
    }
    
    try {
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        activeModal = modal;
        
        console.log(`Modal.js: Modal ${modalId} opened successfully`);
        
        const event = new CustomEvent('modal:opened', { detail: { modalId } });
        document.dispatchEvent(event);
    } catch (error) {
        console.error(`Modal.js: Error opening modal ${modalId}:`, error);
    }
}

function closeModal(modalId) {
    console.log(`Modal.js: Closing modal: ${modalId}`);
    
    const modal = document.getElementById(modalId);
    
    if (!modal) {
        console.error(`Modal.js: Modal with ID ${modalId} not found`);
        return;
    }
    
    modal.classList.remove('active');
    modal.style.display = 'none';
    
    if (activeModal === modal) {
        activeModal = null;
        document.body.style.overflow = '';
    }
    
    console.log(`Modal.js: Modal ${modalId} closed`);
    
    const event = new CustomEvent('modal:closed', { detail: { modalId } });
    document.dispatchEvent(event);
}

function closeAllModals() {
    console.log('Modal.js: Closing all modals');
    
    const modals = document.querySelectorAll('.modal, .modal-recharge-balance, .modal-pay-appointments, .payment-modal, .modal-pay-appointment-item, .payment-modal-newcard, .modal-incoming-about, .modal-request-withdraw, .chat-files-modal');
    
    modals.forEach(modal => {
        modal.classList.remove('active');
        modal.style.display = 'none';
    });
    
    document.body.style.overflow = '';
    activeModal = null;
    
    console.log('Modal.js: All modals closed');
}

// 2. Modal Initialization
// Description: Initial setup of modal windows
// Functionality: Sets up event listeners and initializes modal functionality
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    console.log(`Modal.js: Found ${modalTriggers.length} modal triggers`);
    
    modalTriggers.forEach(trigger => {
        const modalId = trigger.getAttribute('data-modal');
        console.log(`Modal.js: Setting up trigger for modal: ${modalId}`);
        console.log(`Modal.js: Trigger element:`, trigger);
        
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log(`Modal.js: Trigger clicked for modal: ${modalId}`);
            openModal(modalId);
        });
    });
    
    const closeButtons = document.querySelectorAll('.modal-window-close, .modal-close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal, .modal-recharge-balance, .modal-pay-appointments, .payment-modal, .modal-pay-appointment-item, .payment-modal-newcard, .modal-incoming-about, .modal-request-withdraw');
            if (modal) {
                closeModal(modal.id);
            } else {
                closeAllModals();
            }
        });
    });
    
    document.addEventListener('click', function(e) {
        if ((e.target.classList.contains('modal') || 
             e.target.classList.contains('modal-recharge-balance') || 
             e.target.classList.contains('modal-pay-appointments') ||
             e.target.classList.contains('payment-modal') ||
             e.target.classList.contains('modal-pay-appointment-item') ||
             e.target.classList.contains('modal-incoming-about') ||
             e.target.classList.contains('chat-files-modal') ||
             e.target.classList.contains('modal-request-withdraw')) && 
            e.target.classList.contains('active')) {
            closeModal(e.target.id);
        }
    });
    
    setupRechargeBalanceModal();
    setupPayAppointmentsModal();
    setupPayAppointmentItemModal();
    setupPaymentNewcardModal();
    setupIncomingAboutModal();
    setupRequestWithdrawModal();
    setupChatFilesModal();
    setupSpecificHandlers();
}

// 3. Specific Modal Handlers
// Description: Handlers for specific modal types
// Functionality: Manages specific modal window behaviors and interactions
function setupSpecificHandlers() {
    // Удаляем старые обработчики перед добавлением новых
    const existingHandlers = document.querySelectorAll('[data-modal-handler]');
    existingHandlers.forEach(el => el.removeAttribute('data-modal-handler'));
    
    // Обработчики для кнопок карт
    const cardButtons = document.querySelectorAll('.payment-modal-card:not([data-modal-handler])');
    cardButtons.forEach(button => {
        button.setAttribute('data-modal-handler', 'true');
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closeAllModals();
            openModal('payment-modal-newcard');
        });
    });
    
    // Обработчики для кнопок "Назад"
    const backButtons = document.querySelectorAll('.prev-page-btn:not(.to-prev-page .prev-page-btn):not([data-modal-handler])');
    backButtons.forEach(button => {
        button.setAttribute('data-modal-handler', 'true');
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closeAllModals();
            openModal('modal-pay-appointment-item');
        });
    });
    
    // Обработчики для кнопок отмены
    const paymentCancelButtons = document.querySelectorAll('#payment-modal-newcard #paymentModalClose:not([data-modal-handler])');
    paymentCancelButtons.forEach(button => {
        button.setAttribute('data-modal-handler', 'true');
        button.addEventListener('click', function() {
            closeAllModals();
        });
    });
    
    // Обработчики для кнопок оплаты
    const paymentSubmitButtons = document.querySelectorAll('#payment-modal-newcard #paymentModalPay:not([data-modal-handler])');
    paymentSubmitButtons.forEach(button => {
        button.setAttribute('data-modal-handler', 'true');
        button.addEventListener('click', function(e) {
            const cardNumberInput = document.querySelector('#payment-modal-newcard .card-number');
            const cardDateInput = document.querySelector('#payment-modal-newcard .card-date');
            const cardCvvInput = document.querySelector('#payment-modal-newcard .card-cvv');
            
            if (validateCardForm(e, cardNumberInput, cardDateInput, cardCvvInput)) {
                alert('Оплата картой успешно проведена!');
                closeAllModals();
            }
        });
    });
}

// 4. Recharge Balance Modal
// Description: Recharge balance modal management
// Functionality: Handles balance recharge operations and card validation
function setupRechargeBalanceModal() {
    const rechargeModal = document.getElementById('modal-recharge-balance');
    
    if (!rechargeModal) {
        console.log('Modal.js: Recharge balance modal not found on this page');
        return;
    }
    
    console.log('Modal.js: Setting up recharge balance modal');
    
    const cardNumberInput = rechargeModal.querySelector('.card-number');
    const cardDateInput = rechargeModal.querySelector('.card-date');
    const cardCvvInput = rechargeModal.querySelector('.card-cvv');
    const submitButton = rechargeModal.querySelector('.modal-pay-btn');
    
    if (cardNumberInput && cardDateInput && cardCvvInput) {
        console.log('Modal.js: Card inputs found in recharge balance modal');
        
        setupCardNumberValidation(cardNumberInput);
        setupCardDateValidation(cardDateInput);
        setupCardCvvValidation(cardCvvInput);
        
        if (submitButton) {
            submitButton.addEventListener('click', function(e) {
                if (validateCardForm(e, cardNumberInput, cardDateInput, cardCvvInput)) {
                    alert('Баланс успешно пополнен!');
                    closeModal('modal-recharge-balance');
                }
            });
        }
    }
}

// 5. Pay Appointments Modal
// Description: Pay appointments modal management
// Functionality: Handles appointment payment operations
function setupPayAppointmentsModal() {
    const payAppointmentsModal = document.getElementById('modal-pay-appointments');
    
    if (!payAppointmentsModal) {
        console.log('Modal.js: Pay appointments modal not found on this page');
        return;
    }
    
    console.log('Modal.js: Setting up pay appointments modal');
    
    const paymentButtons = payAppointmentsModal.querySelectorAll('.payment-btn');
    paymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Modal.js: Payment button clicked for appointment');
            closeModal('modal-pay-appointments');
            openModal('modal-pay-appointment-item');
            
            const appointmentItem = button.closest('.payment-appointment-item');
            if (appointmentItem) {
                const date = appointmentItem.querySelector('.payment-appointment-date p:nth-child(2)').textContent;
                const time = appointmentItem.querySelector('.payment-appointment-date p:nth-child(4)').textContent;
                const location = appointmentItem.querySelector('.payment-appointment-date p:nth-child(6)').textContent;
                const expertName = appointmentItem.querySelector('.payment-expert-info p:first-child').textContent;
                const expertRole = appointmentItem.querySelector('.payment-expert-info p:last-child').textContent;
                const cost = appointmentItem.querySelector('.payment-appointment-price p').textContent;
                const expertImg = appointmentItem.querySelector('.payment-appointment-expert-info img').src;
                
                const payAppointmentItemModal = document.getElementById('modal-pay-appointment-item');
                if (payAppointmentItemModal) {
                    const targetDate = payAppointmentItemModal.querySelector('.payment-appointment-date p:nth-child(2)');
                    const targetTime = payAppointmentItemModal.querySelector('.payment-appointment-date p:nth-child(4)');
                    const targetLocation = payAppointmentItemModal.querySelector('.payment-appointment-date p:nth-child(6)');
                    const targetExpertName = payAppointmentItemModal.querySelector('.payment-expert-info p:first-child');
                    const targetExpertRole = payAppointmentItemModal.querySelector('.payment-expert-info p:last-child');
                    const targetCost = payAppointmentItemModal.querySelector('.payment-appointment-price p');
                    const targetExpertImg = payAppointmentItemModal.querySelector('.payment-appointment-expert-info img');
                    
                    if (targetDate) targetDate.textContent = date;
                    if (targetTime) targetTime.textContent = time;
                    if (targetLocation) targetLocation.textContent = location;
                    if (targetExpertName) targetExpertName.textContent = expertName;
                    if (targetExpertRole) targetExpertRole.textContent = expertRole;
                    if (targetCost) targetCost.textContent = cost;
                    if (targetExpertImg) targetExpertImg.src = expertImg;
                }
            }
        });
    });
}

// 6. Pay Appointment Item Modal
// Description: Pay appointment item modal management
// Functionality: Handles individual appointment payment operations
function setupPayAppointmentItemModal() {
    const payAppointmentItemModal = document.getElementById('modal-pay-appointment-item');
    
    if (!payAppointmentItemModal) {
        console.log('Modal.js: Pay appointment item modal not found on this page');
        return;
    }
    
    console.log('Modal.js: Setting up pay appointment item modal');
    
    const cancelButton = payAppointmentItemModal.querySelector('#paymentModalClose');
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            closeModal('modal-pay-appointment-item');
        });
    }
    
    const confirmButton = payAppointmentItemModal.querySelector('#paymentModalPay');
    if (confirmButton) {
        confirmButton.addEventListener('click', function() {
            const balanceChooser = payAppointmentItemModal.querySelector('.payment-balance-choose');
            if (balanceChooser && balanceChooser.checked) {
                alert('Оплата с баланса успешно произведена!');
                closeModal('modal-pay-appointment-item');
            } else {
                closeModal('modal-pay-appointment-item');
                
                const newCardModal = document.getElementById('payment-modal-newcard');
                if (newCardModal) {
                    console.log('Modal.js: Opening payment-modal-newcard from continue button');
                    newCardModal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                    activeModal = newCardModal;
                }
            }
        });
    }
}

// 7. Payment Newcard Modal
// Description: New card payment modal management
// Functionality: Handles new card payment operations and validation
function setupPaymentNewcardModal() {
    const paymentModalNewcard = document.getElementById('payment-modal-newcard');
    
    if (!paymentModalNewcard) {
        console.log('Modal.js: Payment modal newcard not found on this page');
        return;
    }
    
    console.log('Modal.js: Setting up payment modal newcard');
    
    const cardNumberInput = paymentModalNewcard.querySelector('.card-number');
    const cardDateInput = paymentModalNewcard.querySelector('.card-date');
    const cardCvvInput = paymentModalNewcard.querySelector('.card-cvv');
    
    if (cardNumberInput && cardDateInput && cardCvvInput) {
        setupCardNumberValidation(cardNumberInput);
        setupCardDateValidation(cardDateInput);
        setupCardCvvValidation(cardCvvInput);
    }
}

// 8. Incoming About Modal
// Description: Incoming transaction details modal management
// Functionality: Handles display of transaction details
function setupIncomingAboutModal() {
    const incomingAboutModal = document.getElementById('modal-incoming-about');
    
    if (!incomingAboutModal) {
        console.log('Modal.js: Incoming about modal not found on this page');
        return;
    }
    
    console.log('Modal.js: Setting up incoming about modal');
    
    const closeButton = incomingAboutModal.querySelector('.modal-window-close');
    if (closeButton) {
        const buttonClone = closeButton.cloneNode(true);
        closeButton.parentNode.replaceChild(buttonClone, closeButton);
        
        buttonClone.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Modal.js: Close button clicked in modal-incoming-about');
            closeModal('modal-incoming-about');
        });
    } else {
        console.log('Modal.js: Close button not found in modal-incoming-about');
    }
}

// 9. Request Withdraw Modal
// Description: Withdrawal request modal management
// Functionality: Handles withdrawal requests and payment settings
function setupRequestWithdrawModal() {
    console.log('Modal.js: Setting up request withdraw modal');
    
    // Используем setTimeout для обеспечения загрузки DOM
    setTimeout(() => {
        const requestWithdrawButton = document.querySelector('.expert-balance-request');
        const requestWithdrawModal = document.getElementById('modal-request-withdraw');
        const settingsButton = document.querySelector('.expert-balance-settings');
        const walletPage = document.querySelector('.expert-wallet-page');
        
        console.log('Modal.js: Found elements:', {
            requestWithdrawButton: !!requestWithdrawButton,
            requestWithdrawModal: !!requestWithdrawModal,
            settingsButton: !!settingsButton,
            walletPage: !!walletPage
        });
        
        // Обработчик для кнопки "Запросити Зняття"
        if (requestWithdrawButton && requestWithdrawModal) {
            requestWithdrawButton.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Modal.js: expert-balance-request clicked');
                
                // Принудительно показываем модальное окно
                requestWithdrawModal.style.display = 'flex';
                requestWithdrawModal.style.position = 'fixed';
                requestWithdrawModal.style.top = '0';
                requestWithdrawModal.style.left = '0';
                requestWithdrawModal.style.width = '100%';
                requestWithdrawModal.style.height = '100%';
                requestWithdrawModal.style.zIndex = '9999';
                requestWithdrawModal.style.backgroundColor = 'rgba(0,0,0,0.5)';
                requestWithdrawModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                activeModal = requestWithdrawModal;
                
                console.log('Modal.js: modal-request-withdraw should now be visible');
            });
            
            // Обработчик закрытия модального окна
            const closeButton = requestWithdrawModal.querySelector('.modal-window-close');
            if (closeButton) {
                closeButton.addEventListener('click', function() {
                    console.log('Modal.js: Close button clicked in request withdraw modal');
                    requestWithdrawModal.style.display = 'none';
                    requestWithdrawModal.classList.remove('active');
                    document.body.style.overflow = '';
                    activeModal = null;
                });
            }
            
            // Закрытие по клику на фон
            requestWithdrawModal.addEventListener('click', function(e) {
                if (e.target === requestWithdrawModal) {
                    console.log('Modal.js: Background clicked on request withdraw modal');
                    requestWithdrawModal.style.display = 'none';
                    requestWithdrawModal.classList.remove('active');
                    document.body.style.overflow = '';
                    activeModal = null;
                }
            });
            
            // Обработчик кнопки "Налаштувати Виплати" внутри модального окна
            const modalSettingsButton = requestWithdrawModal.querySelector('.modal-request-payments-setting');
            if (modalSettingsButton) {
                modalSettingsButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Modal.js: Payment settings button clicked from modal');
                    
                    // Закрываем модальное окно
                    requestWithdrawModal.style.display = 'none';
                    requestWithdrawModal.classList.remove('active');
                    document.body.style.overflow = '';
                    activeModal = null;
                    
                    // Показываем блок настроек платежей
                    if (walletPage) {
                        walletPage.classList.add('show-payments-settings');
                        console.log('Modal.js: Added show-payments-settings class');
                    }
                });
            }
        }
        
        // Обработчик для кнопки "Налаштування Виплат" (прямая)
        if (settingsButton && walletPage) {
            settingsButton.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Modal.js: expert-balance-settings clicked directly');
                
                // Показываем блок настроек платежей
                walletPage.classList.add('show-payments-settings');
                console.log('Modal.js: Added show-payments-settings class to wallet page');
            });
        }
        
        // Обработчик кнопки "Назад" в блоке настроек
        const backButton = document.querySelector('.payments-settings .prev-page-btn');
        if (backButton && walletPage) {
            backButton.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Modal.js: Back button clicked in payments settings');
                
                // Скрываем блок настроек платежей
                walletPage.classList.remove('show-payments-settings');
                console.log('Modal.js: Removed show-payments-settings class');
            });
        }
        
    }, 300);
}

// 10. Chat Files Modal
// Description: Chat files modal management
// Functionality: Handles display and interaction with chat files
function setupChatFilesModal() {
    const filesBtnModals = document.querySelectorAll('[data-modal="chatFileModal"]:not([data-modal-handler])');
    const chatFileModal = document.getElementById('chatFileModal');
    
    if (!filesBtnModals.length || !chatFileModal) {
        return;
    }

    filesBtnModals.forEach(button => {
        button.setAttribute('data-modal-handler', 'true');
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openModal('chatFileModal');
        });
    });

    // Настройка табов только один раз
    const chatFilesTabs = chatFileModal.querySelectorAll('.chat-files-tabs-media, .chat-files-tabs-links, .chat-files-tabs-documents');
    if (chatFilesTabs.length > 0 && !chatFileModal.hasAttribute('data-tabs-initialized')) {
        chatFileModal.setAttribute('data-tabs-initialized', 'true');
        
        chatFilesTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                chatFilesTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const contentBlocks = chatFileModal.querySelectorAll('.modal-tab-content');
                contentBlocks.forEach(block => block.classList.remove('active'));
                
                let targetBlock;
                if (this.classList.contains('chat-files-tabs-media')) {
                    targetBlock = chatFileModal.querySelector('.modal-files-media');
                } else if (this.classList.contains('chat-files-tabs-links')) {
                    targetBlock = chatFileModal.querySelector('.modal-files-links');
                } else if (this.classList.contains('chat-files-tabs-documents')) {
                    targetBlock = chatFileModal.querySelector('.modal-files-documents');
                }
                
                if (targetBlock) {
                    targetBlock.classList.add('active');
                }
            });
        });
    }
}

// 11. Card Validation
// Description: Card validation functionality
// Functionality: Handles validation of card number, date, and CVV
function setupCardNumberValidation(cardNumberInput) {
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        
        e.target.value = formattedValue;
        
        const isValid = validateCardNumber(value);
        updateValidationStyle(e.target, isValid && value.length >= 13);
    });
}

function setupCardDateValidation(cardDateInput) {
    cardDateInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        if (value.length > 0) {
            let month = parseInt(value.substring(0, 2));
            if (month > 12) {
                month = 12;
                value = month.toString() + value.substring(2);
            }
            
            formattedValue = value.substring(0, 2);
            
            if (value.length > 2) {
                formattedValue += '/' + value.substring(2, 4);
            }
        }
        
        e.target.value = formattedValue;
        
        const isValid = validateCardDate(formattedValue);
        updateValidationStyle(e.target, isValid);
    });
}

function setupCardCvvValidation(cardCvvInput) {
    cardCvvInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
        
        const isValid = value.length >= 3;
        updateValidationStyle(e.target, isValid);
    });
}

function validateCardForm(e, cardNumberInput, cardDateInput, cardCvvInput) {
    if (!cardNumberInput || !cardDateInput || !cardCvvInput) {
        console.error('Modal.js: Card inputs not found');
        return false;
    }
    
    const isCardValid = validateCardNumber(cardNumberInput.value.replace(/\D/g, ''));
    const isDateValid = validateCardDate(cardDateInput.value);
    const isCvvValid = cardCvvInput.value.replace(/\D/g, '').length >= 3;
    
    if (!isCardValid || !isDateValid || !isCvvValid) {
        e.preventDefault();
        alert('Пожалуйста, проверьте правильность ввода данных карты');
        
        updateValidationStyle(cardNumberInput, isCardValid);
        updateValidationStyle(cardDateInput, isDateValid);
        updateValidationStyle(cardCvvInput, isCvvValid);
        
        return false;
    }
    
    return true;
}

function validateCardNumber(cardNumber) {
    if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 19) {
        return false;
    }
    
    let sum = 0;
    let double = false;
    
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));
        
        if (double) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        
        sum += digit;
        double = !double;
    }
    
    return sum % 10 === 0;
}

function validateCardDate(date) {
    if (!date || date.length !== 5) {
        return false;
    }
    
    const parts = date.split('/');
    if (parts.length !== 2) {
        return false;
    }
    
    const month = parseInt(parts[0]);
    let year = parseInt(parts[1]);
    
    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        return false;
    }
    
    year += 2000;
    
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
    }
    
    return true;
}

function updateValidationStyle(element, isValid) {
    if (!element) return;
    
    if (isValid) {
        element.classList.remove('input-error');
    } else {
        element.classList.add('input-error');
    }
}

// 12. Expert Incoming Table
// Description: Expert incoming transactions table management
// Functionality: Handles interaction with transaction table rows
function setupExpertIncomingTableHandlers() {
    console.log('Modal.js: Looking for expert-incoming-table...');
    
    // Используем MutationObserver вместо setTimeout для отслеживания динамически добавляемых элементов
    const setupTableHandlers = () => {
        const expertIncomingTable = document.querySelector('.expert-incoming-table');
        
        if (!expertIncomingTable) {
            return;
        }
        
        const tableRows = expertIncomingTable.querySelectorAll('tbody tr:not([data-modal-handler])');
        
        if (tableRows.length === 0) {
            return;
        }
        
        tableRows.forEach((row, index) => {
            row.style.cursor = 'pointer';
            row.setAttribute('data-modal-handler', 'true');
            
            row.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const modalId = 'modal-incoming-about';
                const userName = this.querySelector('td:first-child p')?.textContent || '';
                const userImg = this.querySelector('td:first-child img')?.src || '';
                
                const modal = document.getElementById(modalId);
                
                if (modal) {
                    const modalUserName = modal.querySelector('.modal-incoming-user p');
                    const modalUserImg = modal.querySelector('.modal-incoming-user img');
                    
                    if (modalUserName) modalUserName.textContent = userName;
                    if (modalUserImg) modalUserImg.src = userImg;
                    
                    openModal(modalId);
                }
            });
        });
    };
    
    // Первоначальная настройка
    setupTableHandlers();
    
    // Отслеживание динамически добавляемых элементов
    const observer = new MutationObserver(() => {
        setupTableHandlers();
    });
    
    const tableContainer = document.querySelector('.expert-incoming-table tbody');
    if (tableContainer) {
        observer.observe(tableContainer, { childList: true });
    }
}

// 13. Expert Page Modals
// Description: Expert page verification and founder modals management
// Functionality: Handles opening and closing of verification and founder modals
function initExpertPageModals() {
    const verificationTrigger = document.querySelector('[data-modal="verification"]');
    const verificationModal = document.querySelector('.modal-verification');
    
    if (verificationTrigger && verificationModal) {
        verificationTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            verificationModal.classList.add('active');
            verificationModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        
        const closeBtn = verificationModal.querySelector('.modal-window-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                verificationModal.classList.remove('active');
                verificationModal.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
        
        verificationModal.addEventListener('click', function(e) {
            if (e.target === verificationModal) {
                verificationModal.classList.remove('active');
                verificationModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    
    const founderTrigger = document.querySelector('[data-modal="founder"]');
    const founderModal = document.querySelector('.modal-founder');
    
    if (founderTrigger && founderModal) {
        founderTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            founderModal.classList.add('active');
            founderModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        
        const closeBtn = founderModal.querySelector('.modal-window-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                founderModal.classList.remove('active');
                founderModal.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
        
        founderModal.addEventListener('click', function(e) {
            if (e.target === founderModal) {
                founderModal.classList.remove('active');
                founderModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
}

// Инициализация модальных окон для страниц чата (ClientChat, ExpertChat)
function initChatModals(pageType) {
    console.log(`Modal.js: Initializing chat modals for ${pageType}`);
    
    // Ищем триггеры для модального окна файлов чата
    const chatFileTriggers = document.querySelectorAll('[data-modal="chatFileModal"]');
    const chatFileModal = document.getElementById('chatFileModal');
    
    if (chatFileTriggers.length > 0 && chatFileModal) {
        console.log(`Modal.js: Found ${chatFileTriggers.length} chat file triggers and modal`);
        
        chatFileTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Modal.js: Chat file modal trigger clicked');
                
                chatFileModal.classList.add('active');
                chatFileModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Обработчик закрытия модального окна
        const closeBtn = chatFileModal.querySelector('.modal-window-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                console.log('Modal.js: Chat file modal close button clicked');
                chatFileModal.classList.remove('active');
                chatFileModal.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
        
        // Закрытие по клику на фон
        chatFileModal.addEventListener('click', function(e) {
            if (e.target === chatFileModal) {
                console.log('Modal.js: Chat file modal background clicked');
                chatFileModal.classList.remove('active');
                chatFileModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        
        // Инициализация табов внутри модального окна файлов
        const chatFilesTabs = chatFileModal.querySelectorAll('.chat-files-tabs-media, .chat-files-tabs-links, .chat-files-tabs-documents');
        const chatFilesContent = chatFileModal.querySelectorAll('.modal-files-media, .modal-files-links, .modal-files-documents');
        
        chatFilesTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active from all tabs
                chatFilesTabs.forEach(t => t.classList.remove('active'));
                chatFilesContent.forEach(content => content.classList.remove('active'));
                
                // Add active to clicked tab
                this.classList.add('active');
                
                // Show corresponding content
                if (this.classList.contains('chat-files-tabs-media')) {
                    chatFileModal.querySelector('.modal-files-media')?.classList.add('active');
                } else if (this.classList.contains('chat-files-tabs-links')) {
                    chatFileModal.querySelector('.modal-files-links')?.classList.add('active');
                } else if (this.classList.contains('chat-files-tabs-documents')) {
                    chatFileModal.querySelector('.modal-files-documents')?.classList.add('active');
                }
            });
        });
        
        console.log(`Modal.js: Chat modals initialized for ${pageType}`);
    } else {
        console.warn(`Modal.js: Chat file triggers or modal not found for ${pageType}`);
    }
}

// Инициализация модальных окон оплаты (специальная логика для перехода между окнами)
function initPaymentModals(pageType) {
    console.log(`Modal.js: Initializing payment modals for ${pageType}`);
    
    // Простое и надежное решение
    setTimeout(() => {
        const allPaymentCards = document.querySelectorAll('.payment-modal-card');
        const newCardModal = document.getElementById('payment-modal-newcard');
        const currentModal = document.getElementById('paymentModal');
        
        console.log(`Modal.js: Found ${allPaymentCards.length} payment-modal-card elements`);
        console.log(`Modal.js: newCardModal exists:`, !!newCardModal);
        console.log(`Modal.js: currentModal exists:`, !!currentModal);
        
        if (allPaymentCards.length > 0 && newCardModal) {
            allPaymentCards.forEach((card, index) => {
                console.log(`Modal.js: Setting up payment card ${index}`);
                
                // Удаляем все предыдущие обработчики
                card.onclick = null;
                
                // Добавляем простой и надежный обработчик
                card.addEventListener('click', function(e) {
                    console.log('Modal.js: Payment card clicked - opening new card modal');
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Закрываем все активные модальные окна
                    const allModals = document.querySelectorAll('.modal, .payment-modal');
                    allModals.forEach(modal => {
                        modal.style.display = 'none';
                        modal.classList.remove('active');
                    });
                    
                    // Открываем модальное окно карты
                    newCardModal.style.display = 'flex';
                    newCardModal.style.position = 'fixed';
                    newCardModal.style.top = '0';
                    newCardModal.style.left = '0';
                    newCardModal.style.width = '100%';
                    newCardModal.style.height = '100%';
                    newCardModal.style.zIndex = '9999';
                    newCardModal.style.backgroundColor = 'rgba(0,0,0,0.5)';
                    newCardModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    
                    console.log('Modal.js: payment-modal-newcard should now be visible');
                    
                    // Настройка кнопки "Назад"
                    const backButton = newCardModal.querySelector('.prev-page-btn');
                    if (backButton) {
                        backButton.onclick = function(e) {
                            e.preventDefault();
                            console.log('Modal.js: Back button clicked');
                            
                            newCardModal.style.display = 'none';
                            newCardModal.classList.remove('active');
                            
                            if (currentModal) {
                                currentModal.style.display = 'flex';
                                currentModal.classList.add('active');
                            }
                        };
                    }
                    
                    // Настройка кнопки закрытия
                    const closeButton = newCardModal.querySelector('.modal-window-close');
                    if (closeButton) {
                        closeButton.onclick = function(e) {
                            console.log('Modal.js: Close button clicked');
                            newCardModal.style.display = 'none';
                            newCardModal.classList.remove('active');
                            document.body.style.overflow = '';
                        };
                    }
                    
                    // Закрытие по клику на фон
                    newCardModal.onclick = function(e) {
                        if (e.target === newCardModal) {
                            console.log('Modal.js: Background clicked');
                            newCardModal.style.display = 'none';
                            newCardModal.classList.remove('active');
                            document.body.style.overflow = '';
                        }
                    };
                });
                
                // Добавляем визуальную обратную связь
                card.style.cursor = 'pointer';
                card.style.transition = 'all 0.2s ease';
                
                card.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f0f0f0';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = '';
                });
            });
            
            console.log('Modal.js: Payment modal handlers setup complete');
        } else {
            console.warn('Modal.js: Payment cards or newcard modal not found');
        }
    }, 300);
}

// Универсальная инициализация модальных окон по data-modal атрибутам
function initUniversalModals(pageType) {
    console.log(`Modal.js: Initializing universal modals for ${pageType}`);
    
    // Находим все элементы с data-modal атрибутами, кроме payment-modal-card (они обрабатываются отдельно)
    const modalTriggers = document.querySelectorAll('[data-modal]:not(.payment-modal-card)');
    
    modalTriggers.forEach(trigger => {
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (modal) {
            console.log(`Modal.js: Setting up trigger for modal ${modalId}`);
            
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log(`Modal.js: Opening modal ${modalId}`);
                
                modal.classList.add('active');
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
            
            // Обработчик закрытия
            const closeBtn = modal.querySelector('.modal-window-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    console.log(`Modal.js: Closing modal ${modalId} via close button`);
                    modal.classList.remove('active');
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                });
            }
            
            // Закрытие по клику на фон
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    console.log(`Modal.js: Closing modal ${modalId} via background click`);
                    modal.classList.remove('active');
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        } else {
            console.warn(`Modal.js: Modal with ID ${modalId} not found for trigger`);
        }
    });
    
    console.log(`Modal.js: Universal modals initialized for ${pageType}`);
}

// Унифицированная функция для создания модальных окон
function createModal(config) {
    const {
        id,
        title = '',
        content = '',
        size = 'medium',
        buttons = [],
        onOpen = null,
        onClose = null
    } = config;

    if (!id) {
        console.error('Modal.js: ID модального окна обязателен');
        return false;
    }

    // Проверяем, не существует ли уже модальное окно с таким ID
    if (document.getElementById(id)) {
        console.warn(`Modal.js: Модальное окно с ID "${id}" уже существует`);
        return false;
    }

    const sizeClass = {
        small: 'modal-small',
        medium: 'modal-medium', 
        large: 'modal-large'
    }[size] || 'modal-medium';

    const buttonsHTML = buttons.map(btn => 
        `<button class="${btn.className || 'demo-button'}" ${btn.onClick ? `onclick="${btn.onClick}"` : ''}>${btn.text}</button>`
    ).join('');

    const modalHTML = `
        <div id="${id}" class="modal ${sizeClass}">
            <div class="modal-content">
                <div class="modal-window-close">
                    <img src="src/img/icons/close.svg" alt="Закрыть">
                </div>
                ${title ? `<div class="modal-header"><h3>${title}</h3></div>` : ''}
                <div class="modal-body">${content}</div>
                ${buttonsHTML ? `<div class="modal-footer">${buttonsHTML}</div>` : ''}
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.getElementById(id);
    
    // Добавляем callbacks
    if (onOpen) modal.addEventListener('modal:opened', onOpen);
    if (onClose) modal.addEventListener('modal:closed', onClose);

    console.log(`Modal.js: Создано модальное окно "${id}"`);
    return modal;
}

// Функция для обновления содержимого существующего модального окна
function updateModalContent(modalId, data) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.error(`Modal.js: Modal with ID "${modalId}" not found`);
        return false;
    }

    // Обновляем заголовок
    if (data.title) {
        const titleEl = modal.querySelector('.modal-header h3, .modal-title');
        if (titleEl) titleEl.textContent = data.title;
    }

    // Обновляем содержимое
    if (data.content) {
        const bodyEl = modal.querySelector('.modal-body');
        if (bodyEl) bodyEl.innerHTML = data.content;
    }

    // Обновляем кнопки
    if (data.buttons) {
        const footerEl = modal.querySelector('.modal-footer');
        if (footerEl) {
            footerEl.innerHTML = '';
            data.buttons.forEach(btn => {
                const button = document.createElement('button');
                button.textContent = btn.text;
                button.className = btn.className || 'demo-button';
                if (btn.onClick) {
                    button.setAttribute('onclick', btn.onClick);
                }
                footerEl.appendChild(button);
            });
        }
    }

    // Обновляем класс модального окна для типов
    if (data.type) {
        modal.className = `modal modal-${data.type}`;
    }

    console.log(`Modal.js: Обновлено содержимое модального окна "${modalId}"`);
    return true;
}

// Функция для открытия модального окна с данными
function openModalWithData(modalId, data) {
    if (updateModalContent(modalId, data)) {
        openModal(modalId);
    }
}

// Функция для автоматической обработки data-атрибутов
function setupSmartDataAttributes() {
    // Находим все элементы с data-modal атрибутами
    const triggers = document.querySelectorAll('[data-modal]:not([data-smart-modal])');
    
    triggers.forEach(trigger => {
        trigger.setAttribute('data-smart-modal', 'true');
        
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            const modalId = this.getAttribute('data-modal');
            const smartData = {};
            
            // Собираем все data-атрибуты, которые начинаются с data-modal-
            Array.from(this.attributes).forEach(attr => {
                if (attr.name.startsWith('data-modal-')) {
                    const key = attr.name.replace('data-modal-', '');
                    smartData[key] = attr.value;
                }
            });
            
            // Если есть данные для обновления, обновляем содержимое
            if (Object.keys(smartData).length > 0) {
                updateModalContent(modalId, smartData);
            }
            
            openModal(modalId);
        });
    });
}

// Вспомогательная функция для быстроя создания уведомлений
function showNotification(message, type = 'info', duration = 3000) {
    const notificationId = `notification_${Date.now()}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };

    createModal({
        id: notificationId,
        title: `${icons[type]} ${type.charAt(0).toUpperCase() + type.slice(1)}`,
        content: `<p>${message}</p>`,
        size: 'small',
        buttons: [
            {
                text: 'OK',
                className: 'demo-button',
                onClick: `closeModal('${notificationId}')`
            }
        ]
    });

    const modal = document.getElementById(notificationId);
    if (modal) {
        modal.classList.add(`modal-${type}`);
    }

    openModal(notificationId);

    // Автоматически закрываем через указанное время
    if (duration > 0) {
        setTimeout(() => {
            closeModal(notificationId);
            setTimeout(() => {
                const modalEl = document.getElementById(notificationId);
                if (modalEl) modalEl.remove();
            }, 300);
        }, duration);
    }
}

// Функция для подтверждения действий
function showConfirmDialog(message, onConfirm, onCancel, options = {}) {
    const confirmId = `confirm_${Date.now()}`;
    const title = options.title || '⚠️ Подтверждение';
    const confirmText = options.confirmText || 'Подтвердить';
    const cancelText = options.cancelText || 'Отмена';
    const confirmClass = options.confirmClass || 'demo-button danger';

    // Создаем временные глобальные функции
    window[`confirm_${confirmId}_yes`] = () => {
        closeModal(confirmId);
        setTimeout(() => {
            const modalEl = document.getElementById(confirmId);
            if (modalEl) modalEl.remove();
        }, 300);
        if (onConfirm) onConfirm();
        // Очищаем временные функции
        delete window[`confirm_${confirmId}_yes`];
        delete window[`confirm_${confirmId}_no`];
    };

    window[`confirm_${confirmId}_no`] = () => {
        closeModal(confirmId);
        setTimeout(() => {
            const modalEl = document.getElementById(confirmId);
            if (modalEl) modalEl.remove();
        }, 300);
        if (onCancel) onCancel();
        // Очищаем временные функции
        delete window[`confirm_${confirmId}_yes`];
        delete window[`confirm_${confirmId}_no`];
    };

    createModal({
        id: confirmId,
        title: title,
        content: `<p>${message}</p>`,
        size: 'small',
        buttons: [
            {
                text: cancelText,
                className: 'demo-button secondary',
                onClick: `confirm_${confirmId}_no()`
            },
            {
                text: confirmText,
                className: confirmClass,
                onClick: `confirm_${confirmId}_yes()`
            }
        ]
    });

    openModal(confirmId);
}

// Инициализация улучшенных data-атрибутов при загрузке
document.addEventListener('DOMContentLoaded', function() {
    setupSmartDataAttributes();
    
    // Переинициализация при изменении DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                setupSmartDataAttributes();
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Экспортируем функции в глобальную область
window.createModal = createModal;
window.updateModalContent = updateModalContent;
window.openModalWithData = openModalWithData;
window.showNotification = showNotification;
window.showConfirmDialog = showConfirmDialog;
window.setupRequestWithdrawModal = setupRequestWithdrawModal;
window.initPaymentModals = initPaymentModals;
window.initChatModals = initChatModals;
window.initUniversalModals = initUniversalModals;