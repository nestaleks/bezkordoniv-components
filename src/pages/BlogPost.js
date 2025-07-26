// Компонент BlogPost Page
const BlogPost = (props = {}) => {
    const { postId = '1' } = props;
    
    // Sample blog posts data
    const blogPosts = {
        '1': {
            title: 'Як отримати максимум користі від онлайн-консультації з лікарем: інструкція для пацієнтів',
            date: '15 березня 2024',
            category: 'Медицина',
            image: './src/img/blog-item-1.png',
            content: `
                <p>Онлайн-консультації з лікарями стали невід'ємною частиною сучасної медицини. Вони дозволяють отримати професійну медичну допомогу, не виходячи з дому. Однак, щоб така консультація була максимально ефективною, важливо правильно до неї підготуватися.</p>

                <h2>Підготовка до консультації</h2>
                <p>Перед початком консультації необхідно:</p>
                <ul>
                    <li>Підготувати всі наявні медичні документи</li>
                    <li>Записати основні симптоми та їх тривалість</li>
                    <li>Скласти список прийманих ліків</li>
                    <li>Підготувати список запитань до лікаря</li>
                </ul>

                <h2>Під час консультації</h2>
                <p>Для отримання максимальної користі від консультації:</p>
                <ul>
                    <li>Чітко описуйте свої симптоми</li>
                    <li>Записуйте рекомендації лікаря</li>
                    <li>Не соромтеся задавати уточнювальні запитання</li>
                    <li>Переконайтеся, що ви правильно зрозуміли всі рекомендації</li>
                </ul>

                <h2>Після консультації</h2>
                <p>Після завершення консультації важливо:</p>
                <ul>
                    <li>Дотримуватися всіх рекомендацій лікаря</li>
                    <li>Приймати призначені препарати за схемою</li>
                    <li>Відстежувати зміни у своєму стані</li>
                    <li>За потреби записатися на повторну консультацію</li>
                </ul>

                <p>Пам'ятайте, що якість онлайн-консультації багато в чому залежить від вашої підготовки та активного участі в процесі. Дотримуючись цих рекомендацій, ви зможете отримати максимальну користь від спілкування з лікарем.</p>
            `,
            tags: ['медицина', 'онлайн-консультації', 'здоров\'я']
        },
        '4': {
            title: 'Топ-10 помилок при роботі з клієнтами онлайн',
            date: '20 листопада 2024',
            category: 'Для експертів',
            image: './src/img/blog-item-4.png',
            content: `
                <p>Робота з клієнтами в онлайн-форматі має свої особливості та підводні камені. Розглянемо найпоширеніші помилки, які роблять експерти.</p>
                
                <h2>1. Неякісний зв'язок</h2>
                <p>Поганий інтернет, некоректно налаштована камера або мікрофон можуть зіпсувати враження від консультації. Завжди перевіряйте технічну готовність перед зустріччю.</p>
                
                <h2>2. Відсутність структури</h2>
                <p>Онлайн-консультації потребують більш чіткої структури, ніж очні зустрічі. Підготуйте план зустрічі та дотримуйтесь його.</p>
                
                <h2>3. Ігнорування часових зон</h2>
                <p>При роботі з міжнародними клієнтами обов'язково уточнюйте часовий пояс та підтверджуйте час зустрічі.</p>
                
                <p>Уникання цих помилок допоможе вам побудувати успішну практику онлайн-консультацій та збільшити задоволеність клієнтів.</p>
            `,
            tags: ['онлайн', 'помилки', 'консультації', 'експерти']
        },
        '5': {
            title: 'Розвиток психологічної стійкості в умовах стресу',
            date: '25 лютого 2024',
            category: 'Психологія',
            image: './src/img/blog-item-5.png',
            content: `
                <p>Адаптація за кордоном - це складний процес, який потребує психологічної підтримки та розвитку стресостійкості.</p>
                
                <h2>Техніки управління стресом</h2>
                <ul>
                    <li>Медитація та релаксаційні практики</li>
                    <li>Фізична активність</li>
                    <li>Підтримка соціальних зв'язків</li>
                    <li>Планування та організація часу</li>
                </ul>
                
                <h2>Коли звертатися за допомогою</h2>
                <p>Не соромтеся звертатися до психологів, якщо відчуваєте постійну тривогу, депресію або інші симптоми психологічного дискомфорту.</p>
            `,
            tags: ['психологія', 'стрес', 'адаптація', 'здоров\'я']
        },
        '2': {
            title: 'Юридичні питання українців за кордоном: 5 найпоширеніших проблем та їхні рішення',
            date: '10 березня 2024',
            category: 'Право',
            image: './src/img/blog-item-2.png',
            content: `
                <p>Інформативна стаття, яка висвітлює актуальні правові виклики для українців в інших країнах (документи, працевлаштування, податки тощо).</p>
                
                <h2>Основні правові проблеми</h2>
                <ul>
                    <li>Легалізація документів</li>
                    <li>Працевлаштування та трудові права</li>
                    <li>Податкові зобов'язання</li>
                    <li>Медичне страхування</li>
                    <li>Освіта дітей</li>
                </ul>
                
                <h2>Практичні рекомендації</h2>
                <p>Для вирішення правових питань рекомендуємо звертатися до кваліфікованих юристів, які спеціалізуються на міграційному праві та мають досвід роботи з українцями за кордоном.</p>
            `,
            tags: ['право', 'міграція', 'документи', 'українці']
        },
        '3': {
            title: 'Адаптація за кордоном: психологічні поради для українців на новому місці',
            date: '5 березня 2024',
            category: 'Психологія',
            image: './src/img/blog-item-3.png',
            content: `
                <p>Корисна стаття з практичними порадами від психологів платформи щодо подолання культурного шоку, будування нового соціального кола, збереження зв'язку з рідною культурою.</p>
                
                <h2>Етапи адаптації</h2>
                <ul>
                    <li>Культурний шок та його прояви</li>
                    <li>Мовний бар'єр</li>
                    <li>Соціальна ізоляція</li>
                    <li>Професійна самореалізація</li>
                </ul>
                
                <h2>Стратегії подолання</h2>
                <p>Важливо пам'ятати, що адаптація - це природний процес, який потребує часу. Не соромтеся звертатися за професійною психологічною допомогою.</p>
                
                <p>Збереження зв'язку з українською культурою допоможе зберегти ідентичність та полегшить процес адаптації.</p>
            `,
            tags: ['психологія', 'адаптація', 'культурний шок', 'українці']
        }
    };
    
    const currentPost = blogPosts[postId] || blogPosts['1'];
    
    // Создаем breadcrumb для страницы BlogPost
    const breadcrumbComponent = typeof Breadcrumb !== 'undefined' ? Breadcrumb({ currentPage: 'BlogPost' }) : '';
    
    return `
        <main class="main blog-page">
            <!--BREADCRUMB-->
            ${breadcrumbComponent}

            <section class="blog-item">
                <div class="container">
                    <div class="blog-item-inner">
                        <div class="blog-item-header mb-24">
                            <div class="blog-item-meta mb-12">
                                <span class="blog-item-date">${currentPost.date}</span>
                                <span class="blog-item-category">${currentPost.category}</span>
                            </div>
                            <h1 class="blog-item-title">${currentPost.title}</h1>
                        </div>
                        <div class="blog-item-content mb-40">
                            <img class="blog-item-image mb-24" src="${currentPost.image}" alt="${currentPost.title}">
                            <div class="blog-item-text">
                                ${currentPost.content}
                            </div>
                        </div>
                        <div class="blog-item-footer">
                            <div class="blog-item-tags">
                                ${currentPost.tags.map(tag => `<span class="blog-item-tag">#${tag}</span>`).join('')}
                            </div>
                            <div class="blog-item-share">
                                <p>Поділитися:</p>
                                <div class="blog-item-socials">
                                    <a href="#" class="blog-item-social">
                                        <img src="./src/img/icons/facebook.svg" alt="Facebook">
                                    </a>
                                    <a href="#" class="blog-item-social">
                                        <img src="./src/img/icons/telegram.svg" alt="Telegram">
                                    </a>
                                    <a href="#" class="blog-item-social">
                                        <img src="./src/img/icons/whatsapp.svg" alt="WhatsApp">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Related Articles -->
            <section class="related-articles">
                <div class="container">
                    <h2 class="page-title mb-40">Схожі статті</h2>
                    <div class="blog-list" id="related-articles-container">
                        <!-- Related articles will be generated by JavaScript -->
                    </div>
                </div>
            </section>
        </main>

        <script>
            // BlogPost functionality
            document.addEventListener('DOMContentLoaded', function() {
                // Generate related articles
                function generateRelatedArticles() {
                    const allPosts = Object.keys(blogPosts);
                    const currentPostId = '${postId}';
                    
                    // Exclude current post from related articles
                    const availablePosts = allPosts.filter(id => id !== currentPostId);
                    
                    // Shuffle and take up to 3 random posts
                    const shuffled = availablePosts.sort(() => 0.5 - Math.random());
                    const relatedPosts = shuffled.slice(0, Math.min(3, shuffled.length));
                    
                    const relatedContainer = document.getElementById('related-articles-container');
                    if (relatedContainer) {
                        relatedContainer.innerHTML = relatedPosts.map(postId => {
                            const post = blogPosts[postId];
                            return \`
                                <article class="blog-list-item">
                                    <div class="blog-list-content">
                                        <h3 class="blog-list-title">\${post.title}</h3>
                                        <p class="blog-list-text">
                                            \${post.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                                        </p>
                                        <a href="/blog/post/\${postId}" class="blog-list-link" data-link-blog data-post-id="\${postId}">
                                            <p>Детальніше</p>
                                        </a>
                                    </div>
                                    <img class="blog-list-img" src="\${post.image}" alt="\${post.title}">
                                </article>
                            \`;
                        }).join('');
                    }
                }
                
                // Generate related articles on page load
                generateRelatedArticles();
                // Social sharing functionality
                const socialLinks = document.querySelectorAll('.blog-item-social');
                
                socialLinks.forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const imgSrc = this.querySelector('img').getAttribute('src');
                        const platform = imgSrc.includes('facebook') ? 'facebook' : 
                                       imgSrc.includes('telegram') ? 'telegram' : 
                                       imgSrc.includes('whatsapp') ? 'whatsapp' : '';
                        
                        const url = encodeURIComponent(window.location.href);
                        const title = encodeURIComponent(document.querySelector('.blog-item-title').textContent);
                        
                        let shareUrl = '';
                        
                        switch(platform) {
                            case 'facebook':
                                shareUrl = \`https://www.facebook.com/sharer/sharer.php?u=\${url}\`;
                                break;
                            case 'telegram':
                                shareUrl = \`https://t.me/share/url?url=\${url}&text=\${title}\`;
                                break;
                            case 'whatsapp':
                                shareUrl = \`https://wa.me/?text=\${title}%20\${url}\`;
                                break;
                        }
                        
                        if (shareUrl) {
                            window.open(shareUrl, '_blank', 'width=600,height=400');
                        }
                    });
                });

                // Related articles navigation is handled by the main ComponentBuilder

                // Tag functionality
                const tags = document.querySelectorAll('.blog-item-tag');
                tags.forEach(tag => {
                    tag.addEventListener('click', function() {
                        const tagText = this.textContent.replace('#', '');
                        console.log('Поиск по тегу:', tagText);
                        
                        // Navigate back to blog with search by tag
                        if (window.app && window.app.components && window.app.components.has('Blog')) {
                            window.app.render('main', 'Blog');
                            // You could add search functionality here
                        }
                    });
                });

                // Smooth scroll for long articles
                const articleContent = document.querySelector('.blog-item-text');
                if (articleContent) {
                    const headings = articleContent.querySelectorAll('h2');
                    headings.forEach(heading => {
                        heading.style.cursor = 'pointer';
                        heading.addEventListener('click', function() {
                            this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        });
                    });
                }
            });
        </script>
    `;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlogPost;
}