// Основная логика работы игры

const gameData = [
    {
        id: "toshkent",
        name: "Toshkent",
        symbol: "Bilim Darvozasi",
        npc: "Mirzo Ulugbek",
        locked: false,
        x: 77, // Реальная географическая координата на карте Highcharts (X)
        y: 49, // Реальная географическая координата на карте Highcharts (Y)
        dialogue: "Xush kelibsiz, izlovchi. ko'p kishilar keladi, lekin faqat yuragi ochiqlar o'tadi. Til — kalit, harflar esa uning naqshlaridir. Buyuk saroylar qurishdan oldin, mustahkam poydevor qo'yishimiz kerak. Tayyormisan?",
        choices: [
            { text: "Mening qalbim bilimga ochilgan. Boshlaymiz.", next: "quiz" },
            { text: "Men asoslarni o'rganishga tayyorman, Ustoz.", next: "quiz" }
        ],
        quizzes: [
            {
                question: "Qaysi harf chuqur 'K' kabi aytiladi?",
                options: ["X", "Q", "G'", "H"],
                correct: 1
            },
            {
                question: "Harflarni yig'ing. Bilim idishi nima? (Дано: O, T, K, I, B)",
                options: ["TIKOB", "BOTIK", "KITOB", "OTKIB"],
                correct: 2
            },
            {
                question: "So'z tartibini to'g'rilang: Men o'qiyman kitobni.",
                options: ["Men o'qiyman kitobni", "O'qiyman men kitobni", "Men kitobni o'qiyman", "Kitobni men o'qiyman"],
                correct: 2
            },
            {
                question: "'B...lim' so'ziga qaysi harf yetmayapti?",
                options: ["a", "u", "i", "o"],
                correct: 2,
                isKattaSinov: true
            },
            {
                question: "Tong kuning boshlanishi, nima uni yakunlaydi?",
                options: ["Kun (День)", "Oqshom (Вечер)", "Quyosh (Солнце)", "Tush (Полдень)"],
                correct: 1,
                isKattaSinov: true
            },
            {
                question: "Gapingizni yig'ing: [Ustoz] [berdi] [menga] [kitob]",
                options: ["Ustoz berdi menga kitob", "Menga kitob ustoz berdi", "Ustoz menga kitob berdi", "Kitob menga ustoz berdi"],
                correct: 2,
                isKattaSinov: true
            }
        ],
        endingText: "Sof aql va to‘g‘ri so‘z. Врата открыты. Твой путь лежит дальше, в величественный Samarqand!"
    },
    {
        id: "samarqand",
        name: "Samarqand",
        locked: true,
        symbol: "Vaqt Minorasi",
        npc: "Amir Temur",
        x: 61, // Самарканд X
        y: 67, // Самарканд Y
        dialogue: "Osmonni ko'ryapsanmi? Har bir yulduz o'z o'rni va vaqtini biladi. Tilda ham xuddi shunday. Fikr asosi - Ega va Kesim. Ularsiz gap qulaydi. Vaqt va makon me'morchiligini qurishga tayyormisan?",
        choices: [
            { text: "Vaqt va makon sirlarini anglashga qalbim tayyor.", next: "quiz" }
        ],
        quizzes: [
            {
                question: "Gapning Ega va Kesimini toping: 'Uzoq yo'ldan kelgan sayohatchi chuqur nafas oldi.'",
                options: ["Uzoq yo'ldan – chuqur", "Sayohatchi – nafas oldi", "Kelgan – sayohatchi", "Yo'ldan – nafas oldi"],
                correct: 1
            },
            {
                question: "O'tgan zamon. Qo'shimchani toping: 'Buyuk ajdodlarimiz yulduzlarni kuzat...'",
                options: ["...yapti", "...moqda", "...ganlar", "...adi"],
                correct: 2
            },
            {
                question: "Xatoni to'g'rilang (Hozirgi davom zamon): 'Hozir ustoz eski matnni o'qiydi.'",
                options: ["...o'qidi", "...o'qimoqchi", "...o'qiyapti", "...o'qigan"],
                correct: 2
            },
            {
                question: "'Qadimiy devorlarda hikmatli so'zlar yozilgan.' (Ega qaysi?)",
                options: ["Devorlarda", "Qadimiy", "Hikmatli", "So'zlar"],
                correct: 3,
                isKattaSinov: true
            },
            {
                question: "'Men yozmoqchiman' -> O'tgan zamonga aylantiring:",
                options: ["Men yozdim", "Men yozyapman", "Men yozaman", "Men yozgan"],
                correct: 0,
                isKattaSinov: true
            },
            {
                question: "'Ertaga biz Samarqandga keldi.' -> To'g'rilang:",
                options: ["Ertaga biz Samarqandda keldi.", "Ertaga biz Samarqandga kelamiz.", "Кechqurun biz Samarqandga keldi.", "Ertaga men Samarqandga keldik."],
                correct: 1,
                isKattaSinov: true
            }
        ],
        endingText: "Sen jumlalarning mustahkam ustunlarini qura olding. Endi yo'l Buxoroga..."
    },
    {
        id: "buxoro",
        name: "Buxoro",
        symbol: "Ma'rifat Gumbazi",
        npc: "Ibn Sino",
        locked: true,
        x: 46, // Бухара X
        y: 59, // Бухара Y
        dialogue: "Eshityapman... Sen so'zlarni vaqtida va joyida qo'yishni o'rganding. Ammo so'z suv kabidir: u tushgan idishining shaklini oladi. Kelishiklar (Падежи) — bu ma'no oqadigan o'zanlar. So'zlarning asl tabiatini anglashni xohlaysanmi?",
        choices: [
            { text: "So'zlarning asl tabiatini anglashni xohlayman.", next: "quiz" }
        ],
        quizzes: [
            {
                question: "Sifatni toping:",
                options: ["Kitob", "Yozuvchi", "Qadimiy", "O'qish"],
                correct: 2
            },
            {
                question: "Jo'nalish kelishigi. 'Sayohatchi Darvoza_____ bordi.'",
                options: ["...ni", "...da", "...ga", "...dan"],
                correct: 2
            },
            {
                question: "Chiqish kelishigi. Xatoni toping: 'Bilim ustozga olinadi.'",
                options: ["Ustozni", "Ustozdan", "Ustozda", "Ustozning"],
                correct: 1
            },
            {
                question: "Qaratqich kelishigi. (Мысль наставника)",
                options: ["Ustoz fikr", "Ustozning fikri", "Ustozni fikri", "Ustozga fikri"],
                correct: 1,
                isKattaSinov: true
            },
            {
                question: "O'rin-payt. 'Kashfiyotlar sukunat_____ tug'iladi.'",
                options: ["...ni", "...ga", "...da", "...dan"],
                correct: 2,
                isKattaSinov: true
            },
            {
                question: "Tushum kelishigi. Qaysi so'z ob'ekt? 'Ustoz kitobni berdi.'",
                options: ["Ustoz", "shogirdiga", "qadimiy", "kitobni"],
                correct: 3,
                isKattaSinov: true
            }
        ],
        endingText: "Hayot — suv, bilim — ummon. Aql-idroking kerakli moslashuvchanlikka ega bo'ldi. Endi Xiva tomon boramiz!"
    },
    {
        id: "xiva",
        name: "Xiva",
        symbol: "Ichan-Qal'a",
        npc: "Jaloliddin Manguberdi",
        locked: true,
        x: 33, // Хива X
        y: 52, // Хива Y
        dialogue: "Qal'a bir xil toshlardan qurilmaydi. Buyuk fikr ham birgina so'z bilan ifodalanmaydi. Olam qarama-qarshiliklardan iborat. Yorug'lik zulmatsiz yo'q. Yashirin ma'nolar va qo'shma gaplar labirintiga tayyormisan?",
        choices: [
            { text: "Men so‘zlarning yashirin sirlarini ochishga keldim.", next: "quiz" }
        ],
        quizzes: [
            {
                question: "Antonimni toping - 'Yaxshilik'",
                options: ["Ezgulik", "Yomonlik", "Go'zallik", "Haqiqat"],
                correct: 1
            },
            {
                question: "Sinonimni toping - 'Chiroyli'",
                options: ["Xunuk", "Usta", "Go'zal", "Qadimiy"],
                correct: 2
            },
            {
                question: "Bog'lovchi. 'Savdogar bozorga keldi, _____ bozor yopilgan edi.'",
                options: ["...va...", "...yoki...", "...ammo...", "...uchun..."],
                correct: 2
            },
            {
                question: "Ko'chma ma'no. 'Shirin so'z' nima degani?",
                options: ["Ta'mi asal", "Yoqimli, mehrli ohang", "Yeyishli narsa", "Qandolat mahsuloti"],
                correct: 1,
                isKattaSinov: true
            },
            {
                question: "Antonim - 'Qattiq'",
                options: ["Yumshoq", "Og'ir", "Sovuq", "Keng"],
                correct: 0,
                isKattaSinov: true
            },
            {
                question: "'Havo sovuq bo'ldi, ____ sayohatchi choponini kiydi.'",
                options: ["biroq", "shuning uchun", "va", "yoki"],
                correct: 1,
                isKattaSinov: true
            }
        ],
        endingText: "Toshni yorib chiqqan gul — eng go'zal. Yakuniy manzil: Farg'ona!"
    },
    {
        id: "fargona",
        name: "Farg'ona",
        symbol: "Ipak Yo'li",
        npc: "Alisher Navoi",
        locked: true,
        x: 89, // Фергана X
        y: 59, // Фергана Y
        dialogue: "Barcha shaharlardan muvaffaqiyatli o'tding. Lekin so'zlarni bilish — nutqni egallash degani emas. Haqiqiy usta matndagi xatolarni, yomon uslubni ajrata oladi. So'nggi naqshingni to'qishga tayyormisan?",
        choices: [
            { text: "Mening so‘zlarim ipakdek mayin, qilichdek o‘tkir bo‘lishini xohlayman.", next: "quiz" },
            { text: "So'nggi sinovga tayyorman, Ustoz.", next: "quiz" }
        ],
        quizzes: [
            {
                question: "Uslub xatosi. Adabiy matnga tushmaydigan so'z: 'Ajdodlarimiz meros va zo'r narsalar qoldirgan.'",
                options: ["Ajdodlarimiz", "Meros", "Zo'r narsalar", "Qoldirgan"],
                correct: 2
            },
            {
                question: "Mantiq xatosi. Qaysi gap ortiqcha? [1] Kitob — shamchiroq. [2] U nurga yetaklaydi. [3] Shuning uchun kitob o'qish vaqtni behuda sarflashdir.",
                options: ["1", "2", "3", "Hech qaysi"],
                correct: 2
            },
            {
                question: "Xatoni toping: 'Biz ona tilimizni faxrlanamiz.'",
                options: ["...ona tilimizni faxrlanamiz", "...ona tilimiz bilan faxrlanamiz", "...ona tilimizdan faxrlanadi", "...ona tilimizga faxrlanamiz"],
                correct: 1
            },
            {
                question: "Qaysi gap mukammal to'g'ri?",
                options: ["Kecha men kitobdan o'qidim.", "Kecha men kitobni o'qidim.", "Kecha men kitobga o'qiyman.", "Men kitobni o'qiydi."],
                correct: 1,
                isKattaSinov: true
            },
            {
                question: "Sababni bog'lang: 'Bilim oldim, _____ ko'p o'qidim.'",
                options: ["chunki", "biroq", "yoki", "shuning uchun"],
                correct: 0,
                isKattaSinov: true
            },
            {
                question: "O'zbek tiliga ehtiromni ko'karga chiqaruvchi maqol?",
                options: ["Mehnatning tagi rohat.", "Tilga e'tibor — elga e'tibor.", "O'ynab gapirsang ham o'ylab gapir.", "Tomchidan ko'l bo'lar."],
                correct: 1,
                isKattaSinov: true
            }
        ],
        endingText: "Ip uzilmadi, naqsh buzilmadi. Sen daho va ustozsan — 'Til Merosxo‘ri'san!"
    }
];

let currentCityIndex = 0;
let currentQuizIndex = 0;
let typingInterval;

// Фоновые изображения для городов (Сюжеты)
const cityBackgrounds = [
    'https://sereneworld.in/uploads/blogs/1755675796_istockphoto-2157513326-612x612.jpg', // Тошкент
    'https://mrwallpaper.com/images/file/registon-square-samarkand-during-sunrise-bzw0eg6n2mnoytv6.jpg', // Самарканд
    'https://uzbekistan.travel/storage/app/uploads/public/670/deb/905/thumb_3927_1920_0_0_0_auto.jpg', // Фаргона
    'https://quto.ru/imgs/2024/05/31/09/6486117/6c0e562fadc3c967ea13f2da90b686d4c2af5a0f.jpg', // Бухоро
    'https://resize.tripster.ru/eEA3zW9kMZtdp1YvCr2Eb-LpoQs=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/1bca6d20-7460-4709-bc8e-84fe01daadd5.jpg' // Хива
];

// Фоновые изображения (сохраненные пользователем) для главного меню
const localMenuBgImages = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];
let currentBgIndex = 0;
let bgInterval;

function initMenuSlider() {
    const slider = document.getElementById('background-slider');
    slider.innerHTML = ''; // Очищаем от старых
    
    // Создаем div для каждого изображения
    localMenuBgImages.forEach((src, idx) => {
        const div = document.createElement('div');
        div.className = `bg-slide ${idx === 0 ? 'active' : ''}`;
        div.style.backgroundImage = `url('images/${src}')`;
        slider.appendChild(div);
    });

    if (bgInterval) clearInterval(bgInterval);
    bgInterval = setInterval(nextMenuBg, 8000);
}

function nextMenuBg() {
    const slides = document.querySelectorAll('.bg-slide');
    if(slides.length === 0) return;
    
    // Плавное затухание в темный фон
    slides[currentBgIndex].classList.remove('active');
    
    setTimeout(() => {
        currentBgIndex = (currentBgIndex + 1) % slides.length;
        slides[currentBgIndex].classList.add('active');
    }, 1500);
}

// Инициализация игры
document.addEventListener("DOMContentLoaded", () => {
    initMenuSlider(); // Запускаем слайдер для главного меню
    
    // Подключаем кнопку "Играть"
    document.getElementById("start-game-btn").addEventListener("click", () => {
        showScreen('map-screen');
        initMap();
    });

    // Кнопка возврата из экрана завершения
    document.getElementById("return-map-btn").addEventListener("click", () => {
        if (currentCityIndex + 1 < gameData.length) {
            gameData[currentCityIndex + 1].locked = false;
        }
        showScreen('map-screen');
        initMap();
    });
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Показываем кнопку паузы везде, кроме стартового экрана
    const pauseBtn = document.getElementById('pause-btn');
    if (pauseBtn) {
        if (screenId === 'start-screen') {
            pauseBtn.classList.add('hidden');
        } else {
            pauseBtn.classList.remove('hidden');
        }
    }

    const container = document.getElementById('game-container');
    container.className = ''; // сброс классов
    
    if (screenId === 'start-screen' || screenId === 'map-screen') {
        if (!bgInterval) initMenuSlider(); // Возвращаем слайдер если он остановлен
        if (screenId === 'map-screen') container.classList.add('fullscreen');
    } else if (screenId === 'dialog-screen' || screenId === 'quiz-screen' || screenId === 'end-screen') {
        container.classList.add('vn-mode');
        if (bgInterval) {
            clearInterval(bgInterval);
            bgInterval = null;
        }
    } else {
        container.classList.remove('fullscreen');
    }
}

// Рендер географической карты
function initMap() {
    const container = document.getElementById("map-container");
    
    // Оставляем только SVG соединений, удаляем старые точки
    const objects = container.querySelectorAll('.map-pin, .map-label');
    objects.forEach(obj => obj.remove());
    
    // Рисуем правильные линии между открытыми городами
    const path = document.getElementById("silk-road");
    let points = "";
    gameData.forEach(c => {
        points += `${c.x}%,${c.y}% `;
    });
    path.setAttribute("points", points.trim());

    // Размещаем города на карте
    gameData.forEach((city, index) => {
        const pin = document.createElement("div");
        pin.className = `map-pin ${city.locked ? 'locked' : ''} ${index === gameData.findIndex(c => c.locked) - 1 || (!city.locked && index === gameData.length -1) ? 'current' : ''}`;
        pin.style.left = `${city.x}%`;
        pin.style.top = `${city.y}%`;
        
        const label = document.createElement("div");
        label.className = `map-label ${city.locked ? 'locked' : ''}`;
        label.style.left = `${city.x}%`;
        label.style.top = `calc(${city.y}% + 25px)`;
        label.innerHTML = `${city.name} ${city.locked ? '🔒' : ''}`;
        
        if (!city.locked) {
            pin.onclick = () => openCity(index);
            label.onclick = () => openCity(index);
        }
        
        container.appendChild(pin);
        container.appendChild(label);
    });
}

function openCity(index) {
    currentCityIndex = index;
    const city = gameData[index];
    
    // Устанавливаем спрайт персонажа
    const spriteEl = document.getElementById('npc-sprite');
    spriteEl.src = `images/npc_${city.id}.png`;
    // Если картинки нет, показываем красивый светящийся монумент/силуэт по умолчанию
    spriteEl.onerror = () => spriteEl.src = `data:image/svg+xml;utf8,<svg viewBox='0 0 200 400' xmlns='http://www.w3.org/2000/svg'><path d='M70,80 Q100,20 130,80 Q140,120 100,140 Q60,120 70,80 Z' fill='%23d4af37'/><path d='M40,160 Q100,120 160,160 L180,400 L20,400 Z' fill='%23d4af37' opacity='0.8'/></svg>`;

    // --- ФЕЙД В ЧЕРНОЕ НА 3.5 СЕКУНДЫ ---
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = '#000';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 1s ease';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);

    // Запускаем затемнение
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 50);

    // Ждем 3.5 секунды, затем показываем город и снимаем затемнение
    setTimeout(() => {
        // Устанавливаем конкретный фон города
        const slider = document.getElementById('background-slider');
        slider.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'bg-slide active';
        div.style.backgroundImage = `url('${cityBackgrounds[index]}')`;
        slider.appendChild(div);

        // Показываем экран диалога
        showScreen('dialog-screen');
        document.getElementById('npc-name').innerHTML = `${city.npc} <span style="font-size:0.6em; color:var(--text-muted); font-weight:normal;">(${city.symbol})</span>`;
        
        if (typingInterval) clearInterval(typingInterval);
        document.getElementById('dialog-choices').innerHTML = '';
        
        const textEl = document.getElementById('dialog-text');
        textEl.innerHTML = '';
        let i = 0;
        
        typingInterval = setInterval(() => {
            textEl.innerHTML += city.dialogue.charAt(i);
            i++;
            if (i >= city.dialogue.length) {
                clearInterval(typingInterval);
                showDialogChoices(city.choices);
            }
        }, 20);

        // Выход из черного экрана (Fade From Black)
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
        }, 1000);

    }, 3500);
}

function showDialogChoices(choices) {
    const container = document.getElementById('dialog-choices');
    container.innerHTML = '';
    
    choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'btn-primary fade-in-text';
        btn.textContent = c.text;
        btn.onclick = () => {
            if (c.next === 'quiz') {
                startQuiz();
            } else if (c.next === 'map') {
                showScreen('map-screen');
            }
        };
        container.appendChild(btn);
    });
}

function startQuiz() {
    currentQuizIndex = 0;
    showScreen('quiz-screen');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const city = gameData[currentCityIndex];
    if (currentQuizIndex >= city.quizzes.length) {
        finishCity(city);
        return;
    }
    
    const q = city.quizzes[currentQuizIndex];
    document.getElementById('quiz-city-name').textContent = city.name;
    // Убираем слово SINOV
    document.getElementById('quiz-level-info').textContent = q.isKattaSinov ? `❗️ DIQQAT` : ``;
    if (q.isKattaSinov) {
        document.getElementById('quiz-level-info').style.color = "var(--accent-red)";
    } else {
        document.getElementById('quiz-level-info').style.color = "var(--text-muted)";
    }

    document.getElementById('quiz-question').textContent = q.question;
    
    const optionsCont = document.getElementById('quiz-options');
    optionsCont.innerHTML = '';
    document.getElementById('quiz-feedback').textContent = '';
    
    const nextBtn = document.getElementById('next-quiz-btn');
    nextBtn.classList.add('hidden');
    nextBtn.textContent = 'Davom etish (Далее)';
    nextBtn.onclick = () => {
        currentQuizIndex++;
        loadQuizQuestion();
    };
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option fade-in-text';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(idx, q.correct, btn, q.isKattaSinov);
        optionsCont.appendChild(btn);
    });
}

function checkAnswer(selected, correct, clickedBtn, isKattaSinov) {
    const allBtns = document.getElementById('quiz-options').querySelectorAll('.quiz-option');
    allBtns.forEach(b => b.style.pointerEvents = 'none');
    
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-quiz-btn');
    
    if (selected === correct) {
        clickedBtn.classList.add('correct');
        feedback.textContent = 'To\'g\'ri! (Верно)';
        feedback.style.color = 'var(--accent-green)';
        nextBtn.classList.remove('hidden');
    } else {
        clickedBtn.classList.add('wrong');
        allBtns[correct].classList.add('correct');
        feedback.textContent = isKattaSinov ? 'Xato! Katta Sinov yiqildi... (Провал)' : 'Xato! (Ошибка)';
        feedback.style.color = 'var(--accent-red)';
        
        nextBtn.classList.remove('hidden');
        if (isKattaSinov) {
            nextBtn.textContent = 'Qayta urinib ko\'rish (Начать заново)';
            nextBtn.onclick = () => {
                currentQuizIndex = 0;
                loadQuizQuestion();
            };
        }
    }
}

function finishCity(city) {
    showScreen('end-screen');
    const isFinal = city.id === 'fargona';
    
    document.getElementById('end-title').textContent = isFinal ? "TIL MEROSXO'RI!" : "Tabriklaymiz!";
    document.getElementById('end-text').innerHTML = `${city.endingText}`;
    
    if (isFinal) {
        document.getElementById('return-map-btn').textContent = "Boshidan o'ynash (Сыграть заново)";
        document.getElementById('return-map-btn').onclick = () => location.reload();
    }
}

// --- ИНТЕРФЕЙС И НАСТРОЙКИ (МОДАЛКИ, ПАУЗА, ТЕМА) ---

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
}

function resumeGame() {
    // Функция вызывается после закрытия модалки из HTML,
    // дополнительная логика пока не требуется (таймеры можно не сбрасывать).
}

function restartGame() {
    // Для чистого рестарта сбрасываем всё, просто перезагрузив страницу
    location.reload();
}

function goToMainMenu() {
    closeModal('pause-modal');
    // Опционально: сбросить город, либо просто показать карту/главное меню
    showScreen('start-screen');
}

// --- ЛОГИКА ТЕМЫ И ЗВУКА ---
let isSoundMuted = false;

function initSettings() {
    // Тема
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeToggle) themeToggle.checked = true;
    }

    // Звук
    const savedSound = localStorage.getItem('sound');
    const soundToggle = document.getElementById('sound-toggle');
    if (savedSound === 'muted') {
        isSoundMuted = true;
        if (soundToggle) soundToggle.checked = false; // Выключен
    } else {
        isSoundMuted = false;
        if (soundToggle) soundToggle.checked = true; // Включен
    }
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function toggleSound() {
    isSoundMuted = !isSoundMuted;
    localStorage.setItem('sound', isSoundMuted ? 'muted' : 'on');
    // В будущем здесь можно управлять audio-элементом
}

// Инициализируем настройки при загрузке 
// (вызываем функцию после готовности DOM)
document.addEventListener("DOMContentLoaded", () => {
    initSettings();
});
