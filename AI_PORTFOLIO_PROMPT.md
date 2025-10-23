# Промпт для створення сайту-портфоліо з анімаціями в стилі Bento Grid

## Загальний опис проєкту

Створи сучасний односторінковий сайт-портфоліо з анімаціями в стилі Bento Grid (сітка карточок). Сайт повинен бути інтерактивним, з плавними анімаціями та підтримкою декількох мов.

---

## Технічний стек

**Frontend Framework:**
- React 18.3+ з TypeScript
- Vite як білдер
- React Router DOM для маршрутизації

**Стилізація:**
- TailwindCSS 3.4+ для основних стилів
- @tailwindcss/typography для типографіки
- Custom CSS для спеціальних анімацій

**Анімації:**
- Framer Motion (^11.17.0) для анімацій UI елементів
- Three.js (^0.172.0) для 3D анімації фонових частинок
- CSS keyframes для допоміжних анімацій

**UI Компоненти:**
- Radix UI для доступних компонентів (Dialog, ScrollArea, Tooltip, тощо)
- Lucide React (^0.451.0) для іконок
- Shadcn UI компоненти

**Управління станом:**
- React Query (@tanstack/react-query) для серверного стану
- React Hook Form для форм
- Zod для валідації

**Бекенд (опціонально):**
- Supabase для зберігання даних контактної форми

---

## Структура сторінки

### 1. Загальний Layout

**Фон:**
- Градієнт: `bg-gradient-to-br from-yellow-400 to-orange-500`
- Анімований фон з частинками (Three.js або CSS fallback)
- Fixed позиціонування для Header і Footer

**Пропорції:**
- Header: 22.2vh (фіксований вгорі)
- Main content: 66.7vh (прокручується)
- Footer: 11.1vh (фіксований внизу)
- Bento Grid: займає центральну частину з відступами

### 2. Header Component

**Розташування:**
- Fixed position, top: 0
- Висота: 22.2vh
- Margin top: 4
- Max width: 6xl (center aligned)

**Стилізація:**
```css
background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)
backdrop-blur: 2px
border-radius: 2rem
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15)
border: 1px solid rgba(0, 0, 0, 0.2)
```

**Вміст:**
- **Ліворуч (або центр на мобільних):**
  - Заголовок h1: "Vitalii Berbeha, an expert in e-commerce and marketing"
  - Підзаголовок h2: "Professional in e-commerce, marketing, and project management"
  - Опис: "Helping businesses grow, optimize processes, and achieve success"

- **Праворуч:**
  - Вертикальна група кнопок перемикання мови (NO, EN, UA)
  - Кожна кнопка з іконкою Globe з Lucide
  - Активна мова: `bg-white/20`, неактивна: `bg-black/20`
  - Hover ефект: `hover:bg-black/40`

**Skeleton Loader:**
- Показувати під час завантаження перекладів
- 3 skeleton елементи різної ширини

### 3. Bento Grid (Main Content)

**Розташування:**
- Container з padding
- Висота: `calc(100vh-33.3vh)`
- Flex center alignment
- Max width: 7xl

**Сітка:**
```
Grid Layout:
- Mobile: 1 колонка
- Tablet: 2 колонки
- Desktop: 3 колонки
- Gap: 1rem (gap-4)
```

**Карточки (6 секцій):**

1. **About Me (Про мене)**
   - ID: "about"
   - Background Image: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158
   - Контент: "Hi! My name is Vitalii Berbeha. I am a professional in e-commerce, marketing, and project management. My experience includes developing and managing online stores, optimizing and setting up Amazon Private Label, running advertising campaigns on social media (SMM), and lead generation and analytics. My philosophy: help businesses grow, optimize processes, and achieve success. Outside of work, you'll find me exploring history, playing football, or brainstorming creative ideas."

2. **Projects (Проєкти)**
   - ID: "projects"
   - Background Image: https://images.unsplash.com/photo-1460925895917-afdab827c52f
   - Контент: "Check out my latest work and achievements. I specialize in developing and optimizing e-commerce solutions, particularly focusing on Amazon marketplace integration and social media marketing campaigns."

3. **Services (Послуги)**
   - ID: "services"
   - Background Image: https://images.unsplash.com/photo-1454165804606-c3d57bc86b40
   - Контент: "I provide comprehensive e-commerce and marketing solutions including: E-commerce strategy development, Setting up stores on platforms like Amazon, Etsy, and eBay, Brand management and promotion via SMM, Consulting on marketing strategies and analytics, Targeted ad setup. My goal is to help your business grow and reach new heights!"

4. **Skills (Навички)**
   - ID: "skills"
   - Background Image: https://images.unsplash.com/photo-1516321318423-f06f85e504b3
   - Контент: "Technologies and competencies I work with include e-commerce platforms (Amazon, Shopify, WooCommerce), digital marketing tools, analytics platforms, and project management methodologies."

5. **Testimonials (Відгуки)**
   - ID: "testimonials"
   - Background Image: https://images.unsplash.com/photo-1521791136064-7986c2920216
   - Контент: "What clients say about our collaboration. Read through the experiences of businesses I've helped succeed in the digital marketplace."

6. **Contact (Контакти)**
   - ID: "contact"
   - Background Image: https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d
   - Спеціальний контент: Contact Form

**Стилізація карточок:**
```css
height: calc((100vh-33.3vh-4rem)/2)
background: card color з напівпрозорим фоновим зображенням (opacity: 0.5)
border-radius: lg
cursor: pointer
transition: colors
overflow: hidden
```

**Вміст карточки:**
- Абсолютно позиціоноване фонове зображення
- Центрований заголовок (h3, text-3xl, font-bold)
- Hover ефект на карточці

### 4. Footer Component

**Розташування:**
- Fixed position, bottom: 0
- Висота: 11.1vh
- Margin bottom: 4
- Max width: 6xl (center aligned)

**Стилізація:**
- Такі ж стилі як у Header (градієнт, blur, тощо)

**Вміст:**
- **Ліворуч:** Годинник реального часу (toLocaleTimeString())
- **Праворуч:** Соціальні іконки
  - Twitter: https://twitter.com
  - Facebook: https://facebook.com
  - Telegram: https://t.me
  - Instagram: https://instagram.com
  - LinkedIn: https://linkedin.com
  - Іконки розміром w-4 h-4 (md:w-5 h-5)
  - Колір: text-white/80, hover: text-white

**Логіка годинника:**
- useState для збереження часу
- useEffect з setInterval(1000ms) для оновлення
- Cleanup функція для clearInterval

### 5. Particles Background Component

**Three.js реалізація:**
```javascript
- Scene з PerspectiveCamera (FOV: 75)
- WebGLRenderer з alpha: true, antialias: true
- 1000 частинок (BufferGeometry + PointsMaterial)
- Розмір частинок: 0.005
- Колір: 0x667eea (синій/фіолетовий)
- Opacity: 0.6
- Blending: AdditiveBlending
```

**Анімація:**
- Постійне обертання по x і y осях (0.0001 швидкість)
- Інтерактивність з мишкою:
  - Відстежування позиції миші
  - Нормалізація координат (-1 до 1)
  - Додаткове обертання на основі позиції миші (0.0003 множник)

**CSS Fallback:**
- Якщо WebGL не підтримується:
  - Градієнтний фон з низькою opacity
  - 50 анімованих div елементів (float animation)
  - Рандомні розміри (1-4px) та позиції
  - Float keyframe animation (5-15s duration)

**Стилізація:**
```css
position: fixed
inset: 0
z-index: -10
pointer-events: none
background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)
```

### 6. Section Dialog (Modal)

**Trigger:**
- Клік на карточку Bento Grid
- Анімація розширення карточки (600ms)
- Відкриття модального вікна

**Структура:**
- Fixed overlay з backdrop-blur-sm (bg-black/80)
- Центрований контейнер:
  - Max width: 4xl
  - Висота: calc(100vh-33.3vh)
  - Border radius: 2rem
  - Shadow: 2xl

**Вміст:**
- **Ліворуч (1/3 ширини):**
  - Фонове зображення секції
  - Градієнт overlay (from-black/60 to-transparent)
  - Slide-right анімація при появі
  - Hover: scale-105 transform

- **Праворуч (2/3 ширини):**
  - Заголовок секції (h2, text-3xl)
  - Текстовий контент (text-lg, leading-relaxed)
  - Для секції "Contact": Contact Form замість тексту

**Кнопка закриття:**
- Absolute position (top-6, right-6)
- Іконка X з Lucide
- Стилізація: bg-white/10, hover:bg-white/20

**ScrollArea:**
- Radix UI ScrollArea для вертикального скролу

### 7. Contact Form

**Поля:**
1. Name (text input, required)
2. Email (email input, required)
3. Message (textarea, 4 rows, required)

**Стилізація полів:**
```css
background: bg-black/50
border: border-gray-700
focus: border-blue-500, ring-1, ring-blue-500
padding: p-3
border-radius: rounded-lg
```

**Кнопка submit:**
```css
background: bg-gradient-to-r from-blue-500 to-purple-500
full width
padding: py-3 px-4
border-radius: rounded-lg
hover: opacity-90
disabled: opacity-50
```

**Стани:**
- isSubmitting: показувати "Sending..." замість "Send Message"
- Success: alert "Message sent successfully!"
- Error: alert "Error sending message"

**Інтеграція з Supabase:**
- Таблиця: contact_forms
- Поля: name, email, message
- Insert операція при submit

**Header форми:**
- Іконка Mail (w-12 h-12)
- Заголовок: "Contact"
- Опис: "Get in touch with me to discuss your project or business needs..."

---

## Анімації

### CSS Keyframes

**1. fadeOut:**
```css
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
}
```

**2. expandCard:**
```css
@keyframes expandCard {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```

**3. slide-right:**
```css
@keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-right {
  animation: slide-right 0.5s ease-out forwards;
}
```

**4. float:**
```css
@keyframes float {
  0% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-100px) translateX(50px); }
  100% { transform: translateY(0) translateX(0); }
}
```

### Framer Motion Анімації

**Карточки Bento Grid:**
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
```

**Snake Animation (розширення карточки):**
```css
.snake-animation {
  position: fixed;
  z-index: 50;
  transition: transform 0.4s ease-in-out;
}

.snake-expanded {
  width: 100%;
  height: 100%;
  max-width: 56rem;
  margin: 0 auto;
  border-radius: 2rem;
  transform: none !important;
}
```

**Логіка анімації:**
1. При кліку на карточку: додати клас `snake-animation`
2. Через 50ms: додати клас `snake-expanded`
3. Через 600ms: відкрити Dialog, прибрати класи

---

## Інтернаціоналізація (i18n)

### Підтримувані мови

1. **English (EN)** - за замовчуванням
2. **Norwegian (NO)**
3. **Ukrainian (UA)**

### Структура перекладів

Файл: `src/utils/translations.ts`

```typescript
export const translations = {
  en: {
    title: "Vitalii Berbeha, an expert in e-commerce and marketing",
    subtitle: "Professional in e-commerce, marketing, and project management",
    description: "Helping businesses grow, optimize processes, and achieve success",
    about: "About me",
    about_title: "About me",
    about_content: "...",
    projects: "Projects",
    // ... інші ключі
  },
  no: {
    title: "Vitalii Berbeha, en ekspert innen e-handel og markedsføring",
    // ... норвезькі переклади
  },
  ua: {
    title: "Віталій Бербеха, експерт з електронної комерції та маркетингу",
    // ... українські переклади
  }
} as const;
```

### Hook useTranslations

```typescript
export type Language = "NO" | "EN" | "UA";

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("EN");
  const [isLoading, setIsLoading] = useState(false);

  const t = (key: keyof typeof translations.en) => {
    const lang = currentLanguage.toLowerCase();
    return translations[lang][key] || translations.en[key];
  };

  return { t, currentLanguage, setCurrentLanguage, isLoading };
};
```

### Використання

```jsx
const { t } = useTranslations();
<h1>{t('title')}</h1>
```

---

## Responsive Design

### Breakpoints (TailwindCSS)

- **Mobile:** < 768px (sm)
- **Tablet:** 768px - 1024px (md)
- **Desktop:** > 1024px (lg, xl)

### Адаптивність

**Header:**
- Mobile: центроване вирівнювання тексту, менші шрифти
- Desktop: ліве вирівнювання, більші шрифти

**Bento Grid:**
- Mobile: 1 колонка
- Tablet: 2 колонки
- Desktop: 3 колонки

**Footer:**
- Mobile: вертикальний stack (flex-col)
- Desktop: горизонтальний (flex-row)

**Іконки:**
- Mobile: w-4 h-4
- Desktop: md:w-5 h-5

**Dialog:**
- Mobile: повна ширина з padding
- Desktop: max-w-4xl centered

---

## Кольорова схема

### Основні кольори

**Фон:**
- Primary gradient: `from-yellow-400 to-orange-500`
- Body background (fallback): `#FDE1D3`

**Header/Footer:**
- Gradient: `linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)`
- Border: `rgba(0, 0, 0, 0.2)`

**Карточки:**
- Background: card color (з TailwindCSS config)
- Image overlay: opacity 0.5
- Text: white

**Particles:**
- Color: `0x667eea` (синьо-фіолетовий)
- Opacity: 0.6

**Buttons:**
- Primary gradient: `from-blue-500 to-purple-500`
- Active language: `bg-white/20`
- Inactive language: `bg-black/20`
- Hover: `hover:bg-black/40`

### TailwindCSS Theme

```javascript
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --radius: 0.75rem;
}
```

---

## Оптимізація та Performance

### Three.js

- Reduced particle count: 1000 (замість більшої кількості)
- Low-power preference: `powerPreference: "low-power"`
- Proper cleanup в useEffect
- CSS fallback для слабких пристроїв

### Images

- Використовувати Unsplash з оптимізованими URL
- Lazy loading для зображень у Dialog
- Background images з object-cover

### Code Splitting

- React.lazy для великих компонентів
- Dynamic imports для Three.js

### Animations

- Use transform замість position
- will-change property для анімованих елементів
- RequestAnimationFrame для Three.js

---

## Налаштування проєкту

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

### Vite Config

- React SWC plugin для швидшого білда
- Path aliases: `@/` -> `src/`

### TailwindCSS Config

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // custom config
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
```

### TypeScript Config

- Strict mode enabled
- Path mapping: `@/*` -> `src/*`

---

## Файлова структура

```
src/
├── components/
│   ├── background/
│   │   └── ParticlesBackground.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── BentoGrid.tsx
│   │   ├── SectionDialog.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       └── [Radix UI components]
├── hooks/
│   ├── useTranslations.ts
│   └── use-toast.ts
├── integrations/
│   └── supabase/
│       ├── client.ts
│       └── types.ts
├── lib/
│   └── utils.ts
├── pages/
│   └── Index.tsx
├── utils/
│   └── translations.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

---

## Особливі вимоги

### Accessibility

- ARIA labels для кнопок
- Keyboard navigation
- Focus states
- Alt texts для зображень

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- WebGL fallback для старих браузерів
- Mobile browsers support

### SEO

- Meta tags у index.html
- Semantic HTML5
- Proper heading hierarchy

---

## Додаткові функції

### Loading States

- Skeleton loader для Header під час завантаження перекладів
- Loading spinner для всього додатку
- Disabled states для форм

### Error Handling

- Try-catch для Three.js ініціалізації
- Error states для форми
- Console warnings для WebGL fallback

### User Experience

- Smooth transitions (0.3-0.6s)
- Hover effects для всіх інтерактивних елементів
- Visual feedback для кліків
- Toast notifications для форми

---

## Інструкції для розробки

1. **Ініціалізація проєкту:**
   ```bash
   npm create vite@latest my-portfolio -- --template react-ts
   cd my-portfolio
   npm install
   ```

2. **Встановлення залежностей:**
   ```bash
   npm install framer-motion three @types/three lucide-react
   npm install @radix-ui/react-dialog @radix-ui/react-scroll-area
   npm install @tanstack/react-query react-router-dom
   npm install @supabase/supabase-js
   npm install tailwindcss postcss autoprefixer
   npm install @tailwindcss/typography tailwindcss-animate
   ```

3. **Налаштування TailwindCSS:**
   ```bash
   npx tailwindcss init -p
   ```

4. **Створення структури папок:**
   - Створи папки згідно з файловою структурою вище

5. **Розробка компонентів:**
   - Почни з базового layout (Header, Footer)
   - Додай Bento Grid з карточками
   - Реалізуй Particles Background
   - Додай Dialog для деталей
   - Реалізуй Contact Form

6. **Додавання анімацій:**
   - CSS keyframes у index.css
   - Framer Motion анімації в компонентах
   - Three.js setup для частинок

7. **Інтернаціоналізація:**
   - Створи translations.ts
   - Реалізуй useTranslations hook
   - Додай перемикач мови

8. **Тестування:**
   - Перевір responsive design
   - Протестуй на різних браузерах
   - Перевір WebGL fallback
   - Протестуй форму контактів

9. **Оптимізація:**
   - Зменш розмір білда
   - Оптимізуй зображення
   - Додай lazy loading
   - Мінімізуй JavaScript

10. **Деплой:**
    - Build: `npm run build`
    - Preview: `npm run preview`
    - Deploy на Vercel/Netlify

---

## Контрольний список

- [ ] React + TypeScript + Vite setup
- [ ] TailwindCSS configuration
- [ ] Header з градієнтом та перемикачем мови
- [ ] Footer з годинником та соціальними іконками
- [ ] Bento Grid з 6 карточками
- [ ] Фонові зображення з Unsplash
- [ ] Particles Background (Three.js + CSS fallback)
- [ ] Framer Motion анімації для карточок
- [ ] Snake animation для розширення карточки
- [ ] Section Dialog з slide-right анімацією
- [ ] Contact Form з валідацією
- [ ] Supabase інтеграція
- [ ] Система перекладів (EN/NO/UA)
- [ ] useTranslations hook
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Loading states (skeleton, spinner)
- [ ] Error handling
- [ ] Accessibility features
- [ ] Browser compatibility
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Testing на різних пристроях

---

## Важливі примітки

1. **Всі тексти та дані вже включені** - використовуй точно ті самі тексти з секції "Структура сторінки"
2. **Зображення з Unsplash** - використовуй вказані URL для фонових зображень
3. **Градієнти та кольори** - дотримуйся точної кольорової схеми
4. **Анімації** - реалізуй всі вказані анімації для плавного UX
5. **Responsive** - сайт повинен коректно працювати на всіх пристроях
6. **Performance** - оптимізуй Three.js та великі зображення
7. **Accessibility** - додай ARIA labels та keyboard navigation
8. **Fallbacks** - реалізуй fallback для WebGL та інших критичних функцій

---

## Готовий промпт для копіювання

**Створи сучасний односторінковий сайт-портфоліо для Vitalii Berbeha з використанням:**
- React 18 + TypeScript + Vite
- TailwindCSS для стилізації
- Framer Motion для UI анімацій
- Three.js для 3D фонових частинок
- Radix UI для компонентів
- Підтримка 3 мов (EN/NO/UA)

**Структура:**
- Фіксований Header (22.2vh) з градієнтом та перемикачем мови
- Bento Grid з 6 карточками (About, Projects, Services, Skills, Testimonials, Contact)
- Фіксований Footer (11.1vh) з годинником та соціальними іконками
- Анімований фон з частинками
- Модальне вікно для деталей кожної секції

**Анімації:**
- Fade in для карточок (opacity 0->1, y 20->0)
- Snake expand для відкриття карточки (scale 1->1.05->1)
- Slide-right для зображення в модалці
- Float animation для частинок
- Інтерактивні частинки з Three.js (реакція на рух миші)

**Дизайн:**
- Фон: градієнт yellow-400 to orange-500
- Header/Footer: фіолетовий градієнт з backdrop-blur
- Карточки: напівпрозорі фонові зображення
- Всі елементи з округленими кутами

**Функціонал:**
- Контактна форма з інтеграцією Supabase
- Перемикач мови (NO/EN/UA) з збереженням стану
- Responsive design для mobile/tablet/desktop
- Loading states та error handling
- WebGL fallback для старих браузерів

Використовуй всі тексти, зображення та стилі з детального промпту вище.
