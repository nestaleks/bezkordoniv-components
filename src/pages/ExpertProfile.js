// Компонент ExpertProfile - особистий профіль експерта
const ExpertProfile = (props = {}) => {
    return `
        <main class="main">
            <!--BREADCRUMB-->
            <nav class="breadcrumb">
                <div class="container">
                    <!-- Breadcrumb will be generated automatically by JavaScript -->
                </div>
            </nav>
            <!--FAQ-->
             <section class="expert-profile-page">
                <div class="container">
                    <h4 class="expert-profile-title page-title">Профіль</h4>
                    <div class="tabs">
                        <div class="tabs-inner">
                            <button class="tabs-item expert-profile-tabs-main active">
                                <p>Головна інформація</p>
                            </button>
                            <button class="tabs-item expert-profile-tabs-contacts">
                                <p>Контактна інформація</p>
                            </button>
                            <button class="tabs-item expert-profile-tabs-prof">
                                <p>Професійна інформація</p>
                            </button>
                            <button class="tabs-item expert-profile-tabs-password">
                                <p>Налаштування паролю</p>
                            </button>
                        </div>
                    </div>
                    <div class="expert-profile-content">
                        <div class="expert-profile-photo mb-20">
                            <img class="expert-profile-avatar" src="./src/img/expert-3.png" alt="">
                            <div class="expert-profile-photo-actions">
                                <button>
                                    <img src="./src/img/icons/edit.svg" alt="">
                                </button>
                                <button>
                                    <img src="./src/img/icons/delete.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <div class="expert-profile-main">
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" placeholder="Email" class="form-input">
                                    <p class="form-undertext">Електронна Адреса</p>
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Імʼя" class="form-input">
                                    <p class="form-undertext">Імʼя</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" placeholder="Прізвище" class="form-input">
                                    <p class="form-undertext">Прізвище</p>
                                </div>
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Стать</option>
                                        <option value="male">Чоловіча</option>
                                        <option value="female">Жіноча</option>
                                        <option value="other">Інша</option>
                                    </select>
                                    <p class="form-undertext">Прізвище</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="date" placeholder="Дата Народження" class="form-input">
                                    <p class="form-undertext">Дата Народження</p>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Tin" class="form-input">
                                    <p class="form-undertext">Tin</p>
                                </div>
                            </div>
                        </div>
                        <div class="expert-profile-contacts hidden">
                            <div class="form-row">
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Країна</option>
                                        <option value="de">Німеччина</option>
                                        <option value="pl">Польща</option>
                                        <option value="cz">Чехія</option>
                                        <option value="ua">Україна</option>
                                    </select>
                                    <p class="form-undertext">Країна</p>
                                </div>
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Область</option>
                                        <option value="de">Німеччина</option>
                                        <option value="pl">Польща</option>
                                        <option value="cz">Чехія</option>
                                        <option value="ua">Україна</option>
                                    </select>
                                    <p class="form-undertext">Область</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="" disabled selected>Місто</option>
                                        <option value="de">Німеччина</option>
                                        <option value="pl">Польща</option>
                                        <option value="cz">Чехія</option>
                                        <option value="ua">Україна</option>
                                    </select>
                                    <p class="form-undertext">Місто</p>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Індекс" class="form-input">
                                    <p class="form-undertext">Індекс</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Адреса" class="form-input">
                                <p class="form-undertext">Адреса</p>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <select class="form-select">
                                        <option value="+49">+49</option>
                                    </select>
                                    <p class="form-undertext">Код країни</p>
                                </div>
                                <div class="form-group">
                                    <input type="tel" value="152 05752138" class="form-input">
                                    <p class="form-undertext">Номер телефону</p>
                                </div>
                            </div>
                        </div>
                        <div class="expert-profile-prof hidden">
                            <div class="expert-profile-prof-content">
                                <div class="expert-profile-prof-item">
                                    <div class="expert-profile-prof-box">
                                        <img src="./src/img/icons/shield_gray.svg" alt="">
                                        <div class="expert-profile-prof-head">
                                            <p class="expert-profile-prof-title">Опишіть свою спеціальність</p>
                                            <p class="expert-profile-prof-text">Як називається ваша спеціальність та професія</p>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <select class="form-select">
                                                <option value="" disabled selected>Професія</option>
                                                <option value="18">Лікар</option>
                                                <option value="19">Адвокат</option>
                                                <option value="20">Дизайнер</option>
                                                <!-- ... и так далее до 100 -->
                                            </select>
                                            <p class="form-undertext">Професія</p>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-select">
                                                <option value="" disabled selected>Спеціальність</option>
                                                <option value="male">Терапевт</option>
                                                <option value="female">Кардіолог</option>
                                                <option value="other">Травматолог</option>
                                            </select>
                                            <p class="form-undertext">Спеціальність</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="expert-profile-prof-item">
                                    <div class="expert-profile-prof-box">
                                        <img src="./src/img/icons/translator.svg" alt="">
                                        <div class="expert-profile-prof-head">
                                            <p class="expert-profile-prof-title">Мова</p>
                                            <p class="expert-profile-prof-text">Вкажіть мови, якими ви володієте</p>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <select class="form-select">
                                                <option value="" disabled selected>Мова</option>
                                                <option value="uk">Українська</option>
                                                <option value="en">English</option>
                                                <option value="de">Deutsch</option>
                                                <option value="pl">Polski</option>
                                            </select>
                                        </div>
                                        <div class="form-group add-lang">
                                            <img src="./src/img/icons/add.svg" alt="">
                                            <p>Додати мову</p>
                                        </div>
                                    </div>
                                    <div class="expert-profile-prof-languages mt-12">
                                        <div class="expert-language">
                                            <img src="./src/img/icons/translator-purple.svg" alt="">
                                            <p>Українська</p>
                                            <button class="expert-language-delete">
                                                <img src="./src/img/icons/cross.svg" alt="">
                                            </button>
                                        </div>
                                        <div class="expert-language">
                                            <img src="./src/img/icons/translator-purple.svg" alt="">
                                            <p>Німецька</p>
                                            <button class="expert-language-delete">
                                                <img src="./src/img/icons/cross.svg" alt="">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="expert-profile-prof-item">
                                    <div class="expert-profile-prof-box">
                                        <img src="./src/img/icons/write.svg" alt="">
                                        <div class="expert-profile-prof-head">
                                            <p class="expert-profile-prof-title">Досвід Роботи</p>
                                            <p class="expert-profile-prof-text">Додайте ваш досвід роботи</p>
                                        </div>
                                    </div>
                                    <div class="expert-profile-prof-experience">
                                        <div class="toolbar">
                                            <button>
                                                <img src="./src/img/icons/toolbar-1.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-2.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-3.svg" alt="">
                                            </button>
                                            <div class="toolbar-divider"></div>
                                            <button>
                                                <img src="./src/img/icons/toolbar-4.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-5.svg" alt="">
                                            </button>
                                            <div class="toolbar-divider"></div>
                                            <button>
                                                <img src="./src/img/icons/toolbar-6.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-7.svg" alt="">
                                            </button>
                                        </div>
                                        <textarea class="experience-textarea" placeholder="Додати опис"></textarea>
                                    </div>
                                </div>
                                <div class="expert-profile-prof-item">
                                    <div class="expert-profile-prof-box">
                                        <img src="./src/img/icons/write.svg" alt="">
                                        <div class="expert-profile-prof-head">
                                            <p class="expert-profile-prof-title">Біографія</p>
                                            <p class="expert-profile-prof-text">Додайте вашу біографію</p>
                                        </div>
                                    </div>
                                    <div class="expert-profile-prof-biography">
                                        <div class="toolbar">
                                            <button>
                                                <img src="./src/img/icons/toolbar-1.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-2.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-3.svg" alt="">
                                            </button>
                                            <div class="toolbar-divider"></div>
                                            <button>
                                                <img src="./src/img/icons/toolbar-4.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-5.svg" alt="">
                                            </button>
                                            <div class="toolbar-divider"></div>
                                            <button>
                                                <img src="./src/img/icons/toolbar-6.svg" alt="">
                                            </button>
                                            <button>
                                                <img src="./src/img/icons/toolbar-7.svg" alt="">
                                            </button>
                                        </div>
                                        <textarea class="biography-textarea" placeholder="Додати опис"></textarea>
                                    </div>
                                </div>
                                <div class="expert-profile-prof-item">
                                    <div class="expert-profile-prof-box">
                                        <img src="./src/img/icons/files.svg" alt="">
                                        <div class="expert-profile-prof-head">
                                            <p class="expert-profile-prof-title">Файл</p>
                                            <p class="expert-profile-prof-text">Додайте файли за необхідністю</p>
                                        </div>
                                    </div>
                                    <div class="expert-profile-prof-files">
                                        <div class="add-file">
                                            <input type="file" name="" id="">
                                            <img src="./src/img/icons/add.svg" alt="">
                                            <p>Додати файл</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="expert-profile-prof-item">
                                    <div class="expert-profile-prof-box">
                                        <img src="./src/img/icons/link-gray.svg" alt="">
                                        <div class="expert-profile-prof-head">
                                            <p class="expert-profile-prof-title">Посилання</p>
                                            <p class="expert-profile-prof-text">Додайте посилання</p>
                                        </div>
                                    </div>
                                    <div class="expert-profile-prof-link">
                                        <div class="form-row">
                                            <div class="form-group">
                                                <input type="text" placeholder="http://" class="form-input">
                                            </div>
                                            <div class="form-group add-link">
                                                <img src="./src/img/icons/add.svg" alt="">
                                                <p>Додати посилання</p>
                                            </div>
                                        </div>
                                        <div class="expert-profile-prof-links mt-12">
                                            <div class="expert-link">
                                                <img src="./src/img/icons/link-purple.svg" alt="">
                                                <p>http://instagram.com</p>
                                                <button class="expert-link-delete">
                                                    <img src="./src/img/icons/cross.svg" alt="">
                                                </button>
                                            </div>
                                            <div class="expert-link">
                                                <img src="./src/img/icons/link-purple.svg" alt="">
                                                <p>http://facebook.com</p>
                                                <button class="expert-link-delete">
                                                    <img src="./src/img/icons/cross.svg" alt="">
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="expert-profile-password hidden">
                            <div class="form-group">
                                <input type="password" placeholder="Поточний Пароль" class="form-input">
                                <p class="form-undertext">Поточний Пароль</p>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Новий Пароль" class="form-input">
                                <p class="form-undertext">Новий Пароль</p>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Підтвердіть Новий Пароль" class="form-input">
                                <p class="form-undertext">Підтвердіть Новий Пароль</p>
                            </div>
                        </div>
                        <div class="expert-profile-buttons-save">
                            <button class="expert-profile-button-cancel button-secondary">
                                <p>Відмінити</p>
                            </button>
                            <button class="expert-profile-button-save button-primary">
                                <p>Зберегти</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <script>
            // ExpertProfile functionality
            document.addEventListener('DOMContentLoaded', function() {
                // Tab switching
                const tabButtons = document.querySelectorAll('.tab-btn');
                const tabContents = document.querySelectorAll('.tab-content');
                
                tabButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const tabId = this.getAttribute('data-tab');
                        
                        // Remove active class from all tabs and contents
                        tabButtons.forEach(btn => btn.classList.remove('active'));
                        tabContents.forEach(content => content.classList.remove('active'));
                        
                        // Add active class to clicked tab and corresponding content
                        this.classList.add('active');
                        document.getElementById(tabId + '-tab').classList.add('active');
                    });
                });
                
                // Avatar upload
                const avatarInput = document.getElementById('avatar-input');
                const avatarImg = document.getElementById('avatar-img');
                
                if (avatarInput) {
                    avatarInput.addEventListener('change', function(e) {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = function(e) {
                                avatarImg.src = e.target.result;
                            };
                            reader.readAsDataURL(file);
                        }
                    });
                }
                
                // Day schedule checkboxes
                const dayCheckboxes = document.querySelectorAll('.day-schedule input[type="checkbox"]');
                dayCheckboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', function() {
                        const timeInputs = this.closest('.day-schedule').querySelectorAll('input[type="time"]');
                        timeInputs.forEach(input => {
                            input.disabled = !this.checked;
                        });
                    });
                });
                
                // Document upload
                const documentInput = document.getElementById('document-input');
                if (documentInput) {
                    documentInput.addEventListener('change', function(e) {
                        const files = Array.from(e.target.files);
                        files.forEach(file => {
                            console.log('Завантажено документ:', file.name);
                            // Тут буде логіка завантаження документа
                        });
                    });
                }
            });
            
            // Skills management
            function addSkill() {
                const input = document.getElementById('skill-input');
                const skillsContainer = document.getElementById('skills-tags');
                const skillText = input.value.trim();
                
                if (skillText) {
                    const skillTag = document.createElement('span');
                    skillTag.className = 'skill-tag';
                    skillTag.innerHTML = skillText + ' <button onclick="removeSkill(this)">×</button>';
                    
                    skillsContainer.appendChild(skillTag);
                    input.value = '';
                }
            }
            
            function removeSkill(button) {
                button.parentElement.remove();
            }
            
            // Services management
            function addService() {
                const servicesList = document.querySelector('.services-list');
                const serviceItem = document.createElement('div');
                serviceItem.className = 'service-item';
                serviceItem.innerHTML = \`
                    <div class="service-info">
                        <input type="text" placeholder="Назва послуги" class="service-name-input">
                        <textarea placeholder="Опис послуги" class="service-desc-input"></textarea>
                    </div>
                    <div class="service-price">
                        <input type="number" value="30" min="1"> €/год
                    </div>
                    <button class="btn-danger btn-small" onclick="removeService(this)">Видалити</button>
                \`;
                
                servicesList.appendChild(serviceItem);
            }
            
            function removeService(button) {
                button.parentElement.remove();
            }
            
            // Form actions
            function saveProfile() {
                console.log('Збереження профілю експерта');
                
                // Збираємо дані з форм
                const formData = {
                    personal: {
                        firstName: document.getElementById('firstName').value,
                        lastName: document.getElementById('lastName').value,
                        email: document.getElementById('email').value,
                        phone: document.getElementById('phone').value,
                        location: document.getElementById('location').value,
                        city: document.getElementById('city').value
                    },
                    professional: {
                        category: document.getElementById('category').value,
                        specialty: document.getElementById('specialty').value,
                        experience: document.getElementById('experience').value,
                        education: document.getElementById('education').value,
                        bio: document.getElementById('bio').value
                    }
                };
                
                console.log('Дані профілю:', formData);
                alert('Профіль успішно збережено!');
            }
            
            function resetForm() {
                if (confirm('Ви впевнені, що хочете скасувати всі зміни?')) {
                    location.reload();
                }
            }
        </script>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExpertProfile;
}