<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Til Merosi</title>
    <!-- Подключение элегантных шрифтов для заголовков (Cinzel) и приятных для чтения (Nunito) -->
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Nunito:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
<body>
    <!-- Фоновый слайдер -->
    <div id="background-slider"></div>

    <div id="game-container">
        
        <!-- Screen 0: Главное меню -->
        <div id="start-screen" class="screen active" style="justify-content: center; align-items: center; text-align: center;">
            <div class="start-content">
                <div class="npc-icon-wrapper">
                    <span class="npc-icon">🕌</span>
                </div>
                <h1 class="game-title" style="font-size: 3.5rem;">Til Merosi</h1>
                <p class="subtitle" style="font-size: 1.2rem; margin-bottom: 3rem;">Buyuk Ipak Yo'li orqali bilim izlab...</p>
                <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                    <button id="start-game-btn" class="btn-primary pulse-btn" style="font-size: 1.5rem; padding: 1rem 3rem; width: 100%;">Boshlash (Играть)</button>
                    <div style="display: flex; gap: 1rem; width: 100%;">
                        <button class="btn-secondary" style="flex: 1;" onclick="openModal('settings-modal')">⚙️ Sozlamalar</button>
                        <button class="btn-secondary" style="flex: 1;" onclick="openModal('about-modal')">ℹ️ Loyiha</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Screen 1: Географическая Карта -->
        <div id="map-screen" class="screen">
            <div class="map-header" style="text-align: center; margin-bottom: 1rem;">
                <h2 class="game-title" style="font-size: 2rem;">O'zbekiston Xaritasi</h2>
                <p class="subtitle" style="margin-bottom: 1rem;">O'z yo'lingizni tanlang</p>
            </div>
            <div class="uzb-map" id="map-container">
                <!-- Линии, соединяющие города -->
                <svg class="map-connections" xmlns="http://www.w3.org/2000/svg">
                    <polyline id="silk-road" points="15%,45% 40%,65% 55%,65% 75%,40% 88%,50%" />
                </svg>
                
                <!-- Города будут добавлены сюда через JS -->
            </div>
        </div>

        <!-- Screen 2: Диалог с наставником (Visual Novel Style) -->
        <div id="dialog-screen" class="screen">
            <div class="vn-character">
                <img id="npc-sprite" src="" alt="NPC">
            </div>
            
            <div class="vn-dialog-box">
                <div class="npc-header">
                    <span class="npc-icon">👳‍♂️</span>
                    <h2 id="npc-name">Ustoz Mahmud</h2>
                </div>
                <div id="dialog-text" class="dialog-content"></div>
                <div id="dialog-choices" class="dialog-choices"></div>
            </div>
        </div>

        <!-- Screen 3: Игровой процесс (Викторина) -->
        <div id="quiz-screen" class="screen">
            <div class="vn-dialog-box quiz-box">
                <div class="quiz-header">
                    <span id="quiz-city-name">Toshkent</span> - <span id="quiz-level-info">1-chi Sinov</span>
                </div>
                <div id="quiz-question" class="quiz-question">Savol texti...</div>
                
                <div id="quiz-options" class="quiz-options">
                    <!-- Кнопки будут внедрены сюда через JS -->
                </div>
                
                <div id="quiz-feedback" class="feedback"></div>
                <button id="next-quiz-btn" class="btn-primary hidden" style="width: 100%; text-align: center;">Davom etish</button>
            </div>
        </div>

        <!-- Screen 4: Завершение уровня или игры -->
        <div id="end-screen" class="screen">
            <div class="vn-dialog-box quiz-box" style="text-align: center;">
                <h1 id="end-title" class="game-title">Tabriklaymiz!</h1>
                <p id="end-text" class="ending-text"></p>
                <div style="margin-top: 2rem;">
                    <button id="return-map-btn" class="btn-primary pulse-btn" style="text-align: center;">Xaritaga qaytish (Вернуться на карту)</button>
                </div>
            </div>
        </div>
        <!-- Кнопка паузы (появляется только во время игры) -->
        <button id="pause-btn" class="in-game-btn hidden" onclick="openModal('pause-modal')"><span>⏸️</span> Меню</button>

        <!-- Модальные окна -->
        <div id="pause-modal" class="modal-overlay hidden">
            <div class="modal-box vn-dialog-box">
                <h2 class="game-title" style="font-size: 2rem;">Pauza (Пауза)</h2>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem;">
                    <button class="btn-primary" onclick="closeModal('pause-modal'); resumeGame()">Davom etish (Продолжить)</button>
                    <button class="btn-primary" onclick="restartGame()">Boshidan boshlash (Начать заново)</button>
                    <button class="btn-primary" onclick="closeModal('pause-modal'); openModal('settings-modal')">⚙️ Sozlamalar (Настройки)</button>
                    <button class="btn-primary" onclick="goToMainMenu()">Bosh menyu (Главное меню)</button>
                </div>
            </div>
        </div>

        <div id="settings-modal" class="modal-overlay hidden">
            <div class="modal-box vn-dialog-box">
                <h2 class="game-title" style="font-size: 2rem;">Sozlamalar (Настройки)</h2>
                <div class="settings-list" style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
                    <div class="setting-item">
                        <span class="setting-label">Ovoz (Звук)</span>
                        <label class="switch">
                            <input type="checkbox" id="sound-toggle" checked onchange="toggleSound()">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="setting-item">
                        <span class="setting-label">Mavzu (Светлая тема)</span>
                        <label class="switch">
                            <input type="checkbox" id="theme-toggle" onchange="toggleTheme()">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div style="margin-top: 2.5rem; text-align: center;">
                    <button class="btn-primary" onclick="closeModal('settings-modal')" style="padding: 0.8rem 2rem;">Qaytish (Назад)</button>
                </div>
            </div>
        </div>

        <div id="about-modal" class="modal-overlay hidden">
            <div class="modal-box vn-dialog-box">
                <h2 class="game-title" style="font-size: 2rem;">Loyiha haqida</h2>
                <div class="dialog-content" style="margin-top: 1rem; text-align: justify; font-size: 1.1rem; max-height: 50vh; overflow-y: auto;">
                    Образовательная визуальная новелла <strong>"Til Merosi"</strong> (Наследие Языка).<br><br>
                    Игрок отправляется в путешествие по городам Великого Шелкового пути: Ташкент, Самарканд, Бухара, Хива и Фергана. В каждом городе исторических деятелей ждет диалог и задание (викторина), помогающее освоить узбекский язык от основ до литературных конструкций.<br><br>
                    Цель проекта: Показать красоту и богатство узбекского языка в увлекательной интерактивной форме!
                </div>
                <div style="margin-top: 2rem; text-align: center;">
                    <button class="btn-primary" onclick="closeModal('about-modal')" style="padding: 0.8rem 2rem;">Qaytish (Назад)</button>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
