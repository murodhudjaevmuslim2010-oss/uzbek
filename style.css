:root {
    --bg-dark: #0f172a; /* Глубокий синий/сланцевый */
    --bg-panel: #1e293b; 
    --gold: #d4af37; /* Традиционное золото */
    --gold-hover: #b8962e;
    --text-main: #f8fafc;
    --text-muted: #cbd5e1;
    --accent-blue: #0ea5e9;
    --accent-red: #e11d48;
    --accent-green: #10b981;
    --font-heading: 'Cinzel', serif;
    --font-text: 'Nunito', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--bg-dark);
    background-image: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
    color: var(--text-main);
    font-family: var(--font-text);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative; /* Для паттерна-оверлея */
}

/* Полупрозрачный восточный орнамент (8-конечная звезда - Руб аль-хизб) на фоне всего интерфейса */
body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    /* Узор пересекающихся квадратов (Исламская 8-конечная звезда) */
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><g stroke='%23d4af37' stroke-width='0.5' fill='none' opacity='0.08'><polygon points='50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40'/><polygon points='22,22 45,35 78,22 65,45 78,78 45,65 22,78 35,45'/><circle cx='50' cy='50' r='10'/><circle cx='50' cy='50' r='40'/></g></svg>");
    background-size: 200px 200px;
    pointer-events: none;
    z-index: 0;
}

/* Фоновый слайдер */
#background-slider {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: var(--bg-dark);
}

.bg-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1.5s ease-in-out; /* Плавное затухание/появление на 1.5 сек */
    filter: brightness(0.8) contrast(1.1); /* Сделано четче: убрано размытие, увеличена яркость */
}

.bg-slide.active {
    opacity: 1;
}

#game-container {
    width: 100%;
    max-width: 600px;
    height: 100vh;
    max-height: 900px;
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(212, 175, 55, 0.2);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

#game-container.fullscreen {
    max-width: 1200px; /* Расширяем для карты */
    width: 95vw;
    height: 95vh;
    max-height: none;
}

/* Экраны */
.screen {
    display: none;
    flex-direction: column;
    padding: 2.5rem;
    height: 100%;
    animation: fadeIn 0.8s ease forwards;
    overflow-y: auto;
}

.screen.active {
    display: flex;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Типографика */
h1.game-title {
    font-family: var(--font-heading);
    color: var(--gold);
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    /* Улучшенный металлический градиент для заголовка */
    background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
    animation: titleShine 4s linear infinite;
    background-size: 200% auto;
}

@keyframes titleShine {
    to { background-position: 200% center; }
}

.subtitle {
    text-align: center;
    color: var(--text-muted);
    font-style: italic;
    margin-bottom: 2.5rem;
    font-size: 1.3rem;
    letter-spacing: 1px;
    animation: fadeIn 2s ease forwards;
}

/* Эффектная панель главного меню */
.start-content {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(212, 175, 55, 0.3);
    padding: 3rem 4rem;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8), inset 0 0 20px rgba(212, 175, 55, 0.1);
    position: relative;
    animation: floatMenu 6s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
}

body.light-theme .start-content {
    background: rgba(248, 250, 252, 0.85);
    box-shadow: 0 20px 50px rgba(0,0,0,0.2), inset 0 0 20px rgba(184, 150, 46, 0.2);
}

.start-content::before, .start-content::after {
    content: ''; position: absolute; width: 40px; height: 40px; border: 2px solid var(--gold); opacity: 0.5; pointer-events: none;
}
.start-content::before { top: 15px; left: 15px; border-right: none; border-bottom: none; }
.start-content::after { bottom: 15px; right: 15px; border-left: none; border-top: none; }

@keyframes floatMenu {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Иконка NPC с вращающейся аурой */
.npc-icon-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 1.5rem;
}
.npc-icon-wrapper::before {
    content: '';
    position: absolute;
    top: -10%; left: -10%; right: -10%; bottom: -10%;
    border: 2px dashed rgba(212, 175, 55, 0.4);
    border-radius: 50%;
    animation: spin 10s linear infinite;
}
.npc-icon {
    font-size: 4.5rem;
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.8));
    animation: iconBounce 2s ease infinite;
    display: inline-block;
}

@keyframes spin { 100% { transform: rotate(360deg); } }
@keyframes iconBounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Кнопка на стартовом экране с глянцевым эффектом */
.pulse-btn {
    animation: pulse 2s infinite;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 150, 46, 0.4) 100%);
    border: 1px solid var(--gold);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
}

.pulse-btn::before {
    content: '';
    position: absolute;
    top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-20deg);
    animation: shine 3s infinite 1s;
}

@keyframes shine {
    100% { left: 200%; }
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.5); }
    70% { box-shadow: 0 0 0 20px rgba(212, 175, 55, 0); }
    100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
}

/* Географическая Карта */
.uzb-map {
    position: relative;
    width: 100%;
    max-width: 80vh; /* Ограничиваем максимальную ширину для сохранения пропорций на широких экранах */
    aspect-ratio: 700 / 460; /* Реальные пропорции SVG-карты Узбекистана (широкая) */
    background: url('uzb_map.svg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
    filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.2));
}

/* Линии Шелкового пути */
.map-connections {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.map-connections polyline {
    fill: none;
    stroke: rgba(212, 175, 55, 0.5);
    stroke-width: 2;
    stroke-dasharray: 6, 6;
    animation: dash 10s linear infinite;
}

@keyframes dash {
    to {
        stroke-dashoffset: -100;
    }
}

/* Точки Городов */
.map-pin {
    position: absolute;
    width: 16px;
    height: 16px;
    background: var(--gold);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    box-shadow: 0 0 10px var(--gold);
    transition: all 0.3s ease;
    z-index: 10;
}

.map-pin:hover {
    transform: translate(-50%, -50%) scale(1.5);
    background: #fff;
    box-shadow: 0 0 20px #fff;
}

.map-pin.locked {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: none;
    cursor: not-allowed;
}

.map-pin.locked:hover {
    transform: translate(-50%, -50%);
}

.map-pin.current {
    animation: bouncePin 1.5s infinite;
}

@keyframes bouncePin {
    0%, 100% { transform: translate(-50%, -50%); }
    50% { transform: translate(-50%, -65%); box-shadow: 0 10px 15px var(--gold); }
}

/* Названия городов на карте */
.map-label {
    position: absolute;
    transform: translate(-50%, 0);
    font-family: var(--font-heading);
    color: var(--gold);
    font-size: 1rem;
    text-shadow: 0 2px 4px #000;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    white-space: nowrap;
}

.map-label:hover {
    color: #fff;
}

.map-label.locked {
    color: rgba(255, 255, 255, 0.4);
    cursor: not-allowed;
}

#game-container.vn-mode {
    background: transparent !important;
    backdrop-filter: none !important;
    border: none !important;
    box-shadow: none !important;
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
}

/* Экран диалогов / Visual Novel Style */
#dialog-screen {
    padding: 0;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    background: transparent;
}

.vn-character {
    position: absolute;
    bottom: 250px; /* Над текстовым окном */
    left: 15%;
    height: 50vh;
    max-height: 500px;
    z-index: 5;
    animation: float 6s ease-in-out infinite;
}

.vn-character img {
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));
    display: block;
}

.vn-dialog-box {
    width: 90%;
    max-width: 1000px;
    background: rgba(15, 23, 42, 0.9);
    background-image: radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
    backdrop-filter: blur(10px);
    border: 2px solid var(--gold);
    border-radius: 8px; /* Более строгие углы */
    padding: 2.5rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.9), inset 0 0 20px rgba(212, 175, 55, 0.1);
    position: relative;
    z-index: 10;
    margin-bottom: 2rem;
}

/* Строгие геометрические (исламские) орнаменты по углам диалогового окна */
.vn-dialog-box::before, .vn-dialog-box::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><path d='M0,0 L40,0 L40,10 L10,10 L10,40 L0,40 Z' fill='%23d4af37'/><path d='M20,20 L60,20 L60,30 L30,30 L30,60 L20,60 Z' fill='%23d4af37' opacity='0.7'/><circle cx='80' cy='80' r='5' fill='%23d4af37'/><circle cx='50' cy='50' r='3' fill='%23d4af37'/></svg>");
    background-repeat: no-repeat;
    pointer-events: none;
    opacity: 0.8;
}

.vn-dialog-box::before {
    top: 10px;
    left: 10px;
}

.vn-dialog-box::after {
    bottom: 10px;
    right: 10px;
    transform: rotate(180deg);
}

.quiz-box {
    margin: auto; /* Для викторины центрируем бокс */
    margin-bottom: auto; /* Отменяем прижатие ко дну */
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

.npc-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
}

.npc-icon {
    font-size: 2.5rem;
}

#npc-name {
    font-family: var(--font-heading);
    color: var(--gold);
    font-size: 1.6rem;
}

.dialog-content {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    flex: 1;
    color: #e2e8f0;
}

.dialog-choices {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Общие кнопки (выбор в диалогах) */
.btn-primary {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
    border: 1px solid rgba(212, 175, 55, 0.5);
    color: var(--gold);
    padding: 1rem 1.5rem;
    border-radius: 4px;
    font-family: var(--font-text);
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 0 10px rgba(212, 175, 55, 0.05);
}

.btn-primary::after {
    content: '⭐';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.btn-primary:hover::after {
    opacity: 1;
}

.btn-primary:hover {
    background: rgba(212, 175, 55, 0.1);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
    text-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
}

/* Экран викторины */
.quiz-header {
    font-family: var(--font-heading);
    color: var(--gold);
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.quiz-header::before, .quiz-header::after {
    content: ' ۞ ';
    font-size: 1rem;
    opacity: 0.7;
}

.quiz-question {
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    text-align: center;
    font-weight: 600;
}

.quiz-options {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2rem;
}

.quiz-option {
    background: linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(212, 175, 55, 0.05) 100%);
    border: 1px solid rgba(212, 175, 55, 0.3);
    color: var(--text-main);
    padding: 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    font-size: 1.1rem;
    font-family: var(--font-text);
    position: relative;
}
.quiz-option::after {
    content: '🌙';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.1;
    transition: opacity 0.3s ease;
}
.quiz-option:hover::after {
    opacity: 0.8;
}

.quiz-option:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.4);
    transform: scale(1.02);
}

.quiz-option.correct {
    background: rgba(16, 185, 129, 0.2);
    border-color: var(--accent-green);
    color: var(--accent-green);
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
}

.quiz-option.wrong {
    background: rgba(225, 29, 72, 0.2);
    border-color: var(--accent-red);
    color: var(--accent-red);
}

.feedback {
    text-align: center;
    font-size: 1.2rem;
    min-height: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
}

.hidden {
    display: none !important;
}

.ending-text {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
    color: var(--text-muted);
}

/* Вспомогательный класс анимации из JS */
.fade-in-text {
    animation: fadeIn 0.5s ease forwards;
}

/* Light Theme Variables overriding Root */
body.light-theme {
    --bg-dark: #f8fafc;
    --bg-panel: #e2e8f0;
    --text-main: #0f172a;
    --text-muted: #334155;
    --gold: #b8962e;
    --gold-hover: #d4af37;
    background-image: radial-gradient(circle at center, #f8fafc 0%, #cbd5e1 100%);
    color: var(--text-main);
}
body.light-theme .dialog-content { color: var(--text-main); }
body.light-theme .vn-dialog-box {
    background: rgba(248, 250, 252, 0.95);
    box-shadow: 0 10px 40px rgba(0,0,0,0.1), inset 0 0 20px rgba(184, 150, 46, 0.1);
}
body.light-theme .btn-primary {
    background: linear-gradient(135deg, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.9) 100%);
    color: var(--text-main);
}

/* Pause & Menu Button */
.in-game-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid var(--gold);
    color: var(--gold);
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-family: var(--font-text);
    font-size: 1.1rem;
    cursor: pointer;
    z-index: 100;
    transition: all 0.3s;
    backdrop-filter: blur(5px);
}
.in-game-btn:hover { background: var(--gold); color: var(--bg-dark); }
body.light-theme .in-game-btn { background: rgba(248, 250, 252, 0.8); }

/* Modals Overlay */
.modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.modal-overlay.hidden { display: none !important; }
.modal-box {
    margin: 0;
    width: 90%;
    max-width: 600px;
}

/* Settings Toggle Switch */
.setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}
.switch { position: relative; display: inline-block; width: 60px; height: 34px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .4s; border-radius: 34px; }
.slider:before { position: absolute; content: ""; height: 26px; width: 26px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; }
input:checked + .slider { background-color: var(--accent-green); }
input:checked + .slider:before { transform: translateX(26px); }
body.light-theme .slider { background-color: #94a3b8; }

/* Secondary Button (for menu) */
.btn-secondary {
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--text-muted);
    color: var(--text-main);
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
    font-family: var(--font-text);
}
.btn-secondary:hover {
    border-color: var(--gold);
    color: var(--gold);
    background: rgba(212,175,55,0.1);
}

