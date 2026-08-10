document.addEventListener('DOMContentLoaded', () => {
    const ageGate = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const display = document.getElementById('countdown');
    
    let timerInterval;

    // Logika potvrzení věku
    btnYes.addEventListener('click', () => {
        ageGate.classList.add('hidden');
        mainContent.classList.remove('hidden');
        // Spustit odpočet (300 sekund = 5 minut)
        startTimer(300, display);
    });

    btnNo.addEventListener('click', () => {
        window.location.href = "https://www.google.com"; // Přesměrování pryč
    });

    // Funkce pro odpočet času
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        
        timerInterval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            // Přidání nuly před jednociferná čísla
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            // Když čas vyprší, zastavit na 00:00 (nebo můžeš skrýt tlačítko)
            if (--timer < 0) {
                clearInterval(timerInterval);
                display.textContent = "00:00";
                display.style.color = "#ff4757"; // Zčervená pro efekt
            }
        }, 1000);
    }
});