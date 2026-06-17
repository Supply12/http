function countdown() {
    const countDownDate = new Date("Sep 1, 2026 00:00:00").getTime();
    const locale = "en";
    const unitFormatters = {
        day: new Intl.NumberFormat(locale, { style: "unit", unit: "day", unitDisplay: "narrow" }),
        hour: new Intl.NumberFormat(locale, { style: "unit", unit: "hour", unitDisplay: "narrow" }),
        minute: new Intl.NumberFormat(locale, { style: "unit", unit: "minute", unitDisplay: "narrow" }),
        second: new Intl.NumberFormat(locale, { style: "unit", unit: "second", unitDisplay: "narrow" })
    };

    function formatUnit(value, unit) {
        return unitFormatters[unit].format(value);
    }

    const countdownSpan = document.getElementById("countdown");
    let timer = null;

    function updateDisplay() {
        const now = new Date().getTime();
        let distance = countDownDate - now;

        if (distance <= 0) {
            clearInterval(timer);
            countdownSpan.textContent = "00:00:00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const parts = [];
        if (days > 0) parts.push(formatUnit(days, "day"));
        if (hours > 0 || days > 0) parts.push(formatUnit(hours, "hour"));
        if (minutes > 0 || hours > 0 || days > 0) parts.push(formatUnit(minutes, "minute"));
        parts.push(formatUnit(seconds, "second"));

        countdownSpan.textContent = parts.join(" ");
    }
    updateDisplay();
    timer = setInterval(updateDisplay, 1000);
}

function close_kao() {
    const window = document.getElementById("kao");
    window.style.display = 'none';
}