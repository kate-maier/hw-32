// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

let url;

function checkUrl() {
    url = document.getElementById('siteUrl').value;

    if (url.slice(0, 4) !== 'http' && url.slice(0, 5) !== 'https') {
        url = 'https' + url;
    }

    return url;
}

function followLink() {
    window.open(url);
}