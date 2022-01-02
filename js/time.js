const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var countDownDate
var body = $("body");
var tool = $(".tools");
var plus = $(".ci-plus2");
var minus = $(".ci-less");
var heading = $("#heading");
var switchIcon = $$(".switch");
var navigation = $("#navigation");
var fullScreen = $("#iconFullScreen");
var iconDarkMode = $(".icon.ci-contrast");
var iconSettings = $$(".icon.ci-config");
var timePlace = $(".alarmContainerHour");
var datePlace = $(".alarmContainerDate");
var alarmContainer = $("#alarmContainer");
var iconColors = $$(".ci-circle");
var setting = $("#setting");
var btnSlideSwitch = $$(".switch input[type='checkbox'");
var alarmContainerTime = $(".alarmContainerTime");

var weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];


iconSettings.forEach(function(iconSetting) {
    iconSetting.onclick = function() {

        if (setting.style.transform == "" || setting.style.transform == "translateX(100%)") {
            setting.style.transform = "translateX(0)";
            setting.style.opacity = "1";

        } else {
            setting.style.transform = "translateX(100%)";
            setting.style.opacity = "0";
        }
    }
})

alarmContainer.onclick = function() {

    setting.style.transform = "translateX(100%)";
    setting.style.opacity = "0";

}

setInterval(function() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var day = today.getDate();


    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    if (day < 10) {
        day = "0" + day;
    }

    var time = hour + ":" + minute + ":" + second;
    var date = weekday[today.getDay()] + " - " + month[today.getMonth()] + " " + day + ". " + today.getFullYear();
    timePlace.innerHTML = time;
    datePlace.innerHTML = date;
}, 1000)


fullScreen.onclick = function() {

    if (heading.style.display == "none") {

        heading.style.display = "flex";
        navigation.style.display = "block";
        fullScreen.classList.remove("ci-collapse");
        fullScreen.classList.add("ci-expand1");
        alarmContainer.style.marginLeft = "130px";
        document.exitFullscreen();

    } else {
        var elem = document.documentElement;

        heading.style.display = "none";
        navigation.style.display = "none";
        fullScreen.classList.remove("ci-expand1");
        fullScreen.classList.add("ci-collapse");
        alarmContainer.style.marginLeft = "0";
        elem.requestFullscreen();
    }
}


function zoomInFont() {
    var sizeTime = window.getComputedStyle(timePlace, null).getPropertyValue('font-size');
    var sizeDate = window.getComputedStyle(datePlace, null).getPropertyValue('font-size');
    var fontSizeTime = parseFloat(sizeTime);
    var fontSizeDate = parseFloat(sizeDate);
    if (fontSizeTime > 110) {
        timePlace.style.fontSize = (fontSizeTime - 20) + 'px';
        datePlace.style.fontSize = (fontSizeDate - 10) + 'px';
    }
}

function zoomOutFont() {
    var sizeTime = window.getComputedStyle(timePlace, null).getPropertyValue('font-size');
    var sizeDate = window.getComputedStyle(datePlace, null).getPropertyValue('font-size');
    var fontSizeTime = parseFloat(sizeTime);
    var fontSizeDate = parseFloat(sizeDate);

    if (fontSizeTime < 140) {
        timePlace.style.fontSize = (fontSizeTime + 20) + 'px';
        datePlace.style.fontSize = (fontSizeDate + 10) + 'px';
    }
}

minus.onclick = zoomInFont
plus.onclick = zoomOutFont


switchIcon[0].onclick = function() {
    if (btnSlideSwitch[0].checked) {
        timePlace.classList.add("fontTime");
        datePlace.classList.add("fontDate");
    } else {
        timePlace.classList.remove("fontTime");
        datePlace.classList.remove("fontDate");
    }
}

switchIcon[1].onclick = function() {
    if (btnSlideSwitch[1].checked) {
        // job uncheck
    } else {
        // job check
    }
}

switchIcon[2].onclick = function() {
    if (btnSlideSwitch[2].checked) {
        datePlace.style.visibility = "visible";
    } else {
        datePlace.style.visibility = "hidden";
    }
}

var timeCountryHeadings = $$(".timeCountryHeading")
var timeCountryBodys = $$(".timeCountryBody");

switchIcon[3].onclick = function() {
    if (btnSlideSwitch[3].checked) {
        body.style.backgroundColor = "#000";
        tool.style.color = "#fff";
        timeCountryHeadings.forEach(function(timeCountryHeading) {
            timeCountryHeading.style.backgroundColor = "#111111";
        })
        timeCountryBodys.forEach(function(timeCountryBody) {
            timeCountryBody.style.backgroundColor = "#111111";
        })

    } else {
        body.style.backgroundColor = "#fff";
        tool.style.color = "#484747";
        timeCountryHeadings.forEach(function(timeCountryHeading) {
            timeCountryHeading.style.backgroundColor = "#f0f0f0";
        })
        timeCountryBodys.forEach(function(timeCountryBody) {
            timeCountryBody.style.backgroundColor = "#f0f0f0";
        })
    }
}

iconDarkMode.onclick = () => switchIcon[3].click();


var timeListCountry = $("#timeListCountry")

for (var i = 0; i < iconColors.length; i++) {
    iconColors[i].onclick = function(e) {
        var index;
        for (var j = 0; j < iconColors.length; j++) {
            if (iconColors[j].classList.contains("ci-checkmark-outline")) {
                iconColors[j].classList.remove("ci-checkmark-outline");
                iconColors[j].classList.add("ci-circle");
            }
            if (iconColors[j] === e.target) {
                index = j;
            }
        }
        e.target.classList.add("ci-checkmark-outline");
        e.target.classList.remove("ci-circle");

        alarmContainerTime.classList.remove("color1");
        alarmContainerTime.classList.remove("color2");
        alarmContainerTime.classList.remove("color3");
        alarmContainerTime.classList.remove("color4");
        alarmContainerTime.classList.remove("color5");

        timeListCountry.classList.remove("color1");
        timeListCountry.classList.remove("color2");
        timeListCountry.classList.remove("color3");
        timeListCountry.classList.remove("color4");
        timeListCountry.classList.remove("color5");

        if (body.style.backgroundColor === "rgb(255, 255, 255)" && e.target == iconColors[0]) {

            alarmContainerTime.classList.add("color0");
            timeListCountry.classList.add("color0");
        } else if (body.style.backgroundColor === "rgb(0, 0, 0)" && e.target == iconColors[0]) {

            alarmContainerTime.classList.add("color1");
            timeListCountry.classList.add("color1");
        } else {

            alarmContainerTime.classList.add(`color${index+1}`);
            timeListCountry.classList.add(`color${index+1}`);
        }
    }
}

var iconOpenBar = $("#iconOpenBar");
var overlayMobile = $("#overlayMobile");
var iconCloseNavigationMobile = $("#iconCloseNavigationMobile");
var navigationMobile = $("#navigationMobile");

function openNavigationMobile() {
    navigationMobile.style.transform = "translateX(0)";
    navigationMobile.style.opacity = "1";
    overlayMobile.style.display = "block";
}

function closeNavigationMobile() {
    navigationMobile.style.transform = "translateX(-100%)";
    navigationMobile.style.opacity = "0";
    overlayMobile.style.display = "none";

}

iconOpenBar.onclick = openNavigationMobile;
overlayMobile.onclick = closeNavigationMobile;
iconCloseNavigationMobile.onclick = closeNavigationMobile;

function calcTime(city, offset) {

    var d = new Date();

    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    var nd = new Date(utc + (3600000 * offset));

    var str
    if (offset > 0) {
        str = "+" + offset + " UTC";
    } else {
        str = offset + " UTC";
    }
    var hour = nd.getHours() > 10 ? nd.getHours() : ("0" + nd.getHours());
    var minute = nd.getMinutes() > 10 ? nd.getMinutes() : ("0" + nd.getMinutes());
    var second = nd.getSeconds() > 10 ? nd.getSeconds() : ("0" + nd.getSeconds());
    var day = nd.getDate() > 10 ? nd.getDate() : ("0" + nd.getDate());
    var month = (nd.getMonth() + 1) > 10 ? (nd.getMonth() + 1) : ("0" + (nd.getMonth() + 1));

    return {
        time: `${hour}:${minute}:${second}`,
        date: `${day}-${month}-${nd.getFullYear()}, ${str}`
    }
}

var newyorkTime = $("#newyork .timeCountryBodyTime");
var newyorkDate = $("#newyork .timeCountryBodyDate");

var londonTime = $("#london .timeCountryBodyTime");
var londonDate = $("#london .timeCountryBodyDate");

var tokyoTime = $("#tokyo .timeCountryBodyTime");
var tokyoDate = $("#tokyo .timeCountryBodyDate");

var singaporeTime = $("#singapore .timeCountryBodyTime");
var singaporeDate = $("#singapore .timeCountryBodyDate");

var koreaTime = $("#korea .timeCountryBodyTime");
var koreaDate = $("#korea .timeCountryBodyDate");

var hawaiiTime = $("#hawaii .timeCountryBodyTime");
var hawaiiDate = $("#hawaii .timeCountryBodyDate");

var sydneyTime = $("#sydney .timeCountryBodyTime");
var sydneyDate = $("#sydney .timeCountryBodyDate");

var manilaTime = $("#manila .timeCountryBodyTime");
var manilaDate = $("#manila .timeCountryBodyDate");

setInterval(function() {
    newyorkTime.innerHTML = calcTime("NewYork", -5).time;
    newyorkDate.innerHTML = calcTime("NewYork", -5).date;
    londonTime.innerHTML = calcTime("London", 1).time;
    londonDate.innerHTML = calcTime("London", 1).date;
    singaporeTime.innerHTML = calcTime("Singapore", 8).time;
    singaporeDate.innerHTML = calcTime("Singapore", 8).date;
    tokyoTime.innerHTML = calcTime("Tokyo", 9).time;
    tokyoDate.innerHTML = calcTime("Tokyo", 9).date;
    koreaTime.innerHTML = calcTime("Korea", 9).time;
    koreaDate.innerHTML = calcTime("Korea", 9).date;
    hawaiiTime.innerHTML = calcTime("Hawaii", -10).time;
    hawaiiDate.innerHTML = calcTime("Hawaii", -10).date;
    sydneyTime.innerHTML = calcTime("Sydney", 11).time;
    sydneyDate.innerHTML = calcTime("Sydney", 11).date;
    manilaTime.innerHTML = calcTime("Manila", 8).time;
    manilaDate.innerHTML = calcTime("Manila", 8).date;
}, 1000)