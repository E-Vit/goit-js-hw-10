import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;
let userSelectedDate = null;
cons options = {
    enabletime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            alert("Please choose a date in the future");
            startBtn.disabled = true;
            return;
        }
        startBtn.disabled = false;
    },
};
flatpickr(input, options);