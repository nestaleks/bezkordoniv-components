// Базовый модуль для создания и управления модальным окном на чистом JS

export function openModal(contentHtml, onClose) {
  // Создаём backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';

  // Создаём окно
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal-window';

  // Кнопка закрытия
  const closeButton = document.createElement('button');
  closeButton.className = 'modal-close';
  closeButton.innerHTML = '&times;';
  closeButton.setAttribute('aria-label', 'Закрыть модальное окно');

  // Вставляем контент
  modalWindow.innerHTML = contentHtml;
  modalWindow.prepend(closeButton);

  // Добавляем в DOM
  backdrop.appendChild(modalWindow);
  document.body.appendChild(backdrop);

  // Закрытие по кнопке
  closeButton.onclick = close;
  // Закрытие по клику вне окна
  backdrop.onclick = (e) => {
    if (e.target === backdrop) close();
  };
  // Закрытие по Esc
  function onEsc(e) {
    if (e.key === 'Escape') close();
  }
  document.addEventListener('keydown', onEsc);

  function close() {
    document.body.removeChild(backdrop);
    document.removeEventListener('keydown', onEsc);
    if (typeof onClose === 'function') onClose();
  }

  // Возвращаем функцию для ручного закрытия
  return close;
}
