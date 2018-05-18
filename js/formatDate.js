function setFormatDateResult() {
    let date = new Date(document.getElementById("datetime-local-input").value);
    let pattern = document.getElementById("pattern-input").value;

    pattern = pattern.replace(/yyyy/g, date.getFullYear());
    pattern = pattern.replace(/yy/g, date.getFullYear() % 100 >= 10 ?
        date.getFullYear() % 100 : "0" + date.getFullYear() % 100);
    pattern = pattern.replace(/MMMM/g, date.toLocaleString("en-us", { month: "long"} ));
    pattern = pattern.replace(/MMM/g, date.toLocaleString("en-us", { month: "short" }));
    pattern = pattern.replace(/MM/g, date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1));
    pattern = pattern.replace(/M/g, date.getMonth() + 1);
    pattern = pattern.replace(/dd/g, date.getDate() >= 10 ? date.getDate() : "0" + date.getDate());
    pattern = pattern.replace(/d/g, date.getDate());
    pattern = pattern.replace(/HH/g, date.getHours() >= 10 ? date.getHours() : "0" + date.getHours());
    pattern = pattern.replace(/H/g, date.getHours());
    pattern = pattern.replace(/hh/g, getMeridiumHours(date.getHours(), true));
    pattern = pattern.replace(/h/g, getMeridiumHours(date.getHours(), false));
    pattern = pattern.replace(/mm/g, date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes());
    pattern = pattern.replace(/m/g, date.getMinutes());
    pattern = pattern.replace(/ss/g, date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds());
    pattern = pattern.replace(/s/g, date.getSeconds());

    document.getElementById("datetime-result").value = pattern
}

function getMeridiumHours(hours, zero) {
    if (hours >= 0 && hours <= 9) {
        return zero ? "0" + hours : hours
    }
    if (hours >= 10 && hours <= 12) {
        return hours
    }
    if (hours >= 13 && hours <= 21) {
        return zero ? "0" + hours % 12 : hours % 12
    }
    if (hours >= 22 && hours < 24) {
        return hours % 12 !== 0 ? hours % 12 : "00"
    }
}
