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
var timePlace = $(".timeCount");
var timePlaceMili = $(".timeCount span");
var alarmContainer = $("#alarmContainer");
var iconColors = $$(".ci-circle");
var setting = $("#setting");
var btnSlideSwitch = $$(".switch input[type='checkbox'");
var alarmContainerTime = $(".alarmContainerTime");



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
    var sizeTimeMili = window.getComputedStyle(timePlaceMili, null).getPropertyValue('font-size');
    var fontSizeTime = parseFloat(sizeTime);
    var fontSizeTimeMili = parseFloat(sizeTimeMili);

    if (fontSizeTime > 110) {
        timePlace.style.fontSize = (fontSizeTime - 20) + 'px';
        timePlaceMili.style.fontSize = (fontSizeTimeMili - 20) + 'px';
    }
}

function zoomOutFont() {
    var sizeTime = window.getComputedStyle(timePlace, null).getPropertyValue('font-size');
    var sizeTimeMili = window.getComputedStyle(timePlaceMili, null).getPropertyValue('font-size');
    var fontSizeTime = parseFloat(sizeTime);
    var fontSizeTimeMili = parseFloat(sizeTimeMili);

    if (fontSizeTime < 140) {
        timePlace.style.fontSize = (fontSizeTime + 20) + 'px';
        timePlaceMili.style.fontSize = (fontSizeTimeMili + 20) + 'px';
    }
}

minus.onclick = zoomInFont
plus.onclick = zoomOutFont


switchIcon[0].onclick = function() {
    if (btnSlideSwitch[0].checked) {
        timePlace.classList.add("fontTime");

    } else {
        timePlace.classList.remove("fontTime");
    }
}

var timeCountryHeadings = $$(".timeCountryHeading")

switchIcon[1].onclick = function() {
    if (btnSlideSwitch[1].checked) {
        body.style.backgroundColor = "#000";
        tool.style.color = "#fff";

    } else {
        body.style.backgroundColor = "#fff";
        tool.style.color = "#484747";

    }
}

iconDarkMode.onclick = () => switchIcon[1].click();


var timeListCountry = $("#timeListCountry")
var timeLap = $(".timeLap");

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

        timeLap.classList.remove("color1");
        timeLap.classList.remove("color2");
        timeLap.classList.remove("color3");
        timeLap.classList.remove("color4");
        timeLap.classList.remove("color5");


        if (body.style.backgroundColor === "rgb(255, 255, 255)" && e.target == iconColors[0]) {
            alarmContainerTime.classList.add("color0");
            timeLap.classList.add("color0");

        } else if (body.style.backgroundColor === "rgb(0, 0, 0)" && e.target == iconColors[0]) {
            alarmContainerTime.classList.add("color1");
            timeLap.classList.add("color1");

        } else {
            alarmContainerTime.classList.add(`color${index+1}`);
            timeLap.classList.add(`color${index+1}`);

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

var btnReset = $("#btnReset");
var btnStart = $("#btnStart");

var minute = $("#minute");
var second = $("#second");
var milisecond = $("#milisecond");

var x;
var intMilisecond;
var intSecond;
var intMinute;
btnStart.onclick = function() {
    if (btnStart.innerHTML == "Start") {
        btnStart.classList.remove("buttonColor1");
        btnReset.classList.remove("buttonColor3");
        btnStart.innerHTML = "Stop";
        btnReset.innerHTML = "Lap";
        btnStart.classList.add("buttonColor4");
        btnReset.classList.add("buttonColor2");
        x = setInterval(function() {
            intMilisecond = parseInt(milisecond.textContent);
            intSecond = parseInt(second.textContent);
            intMinute = parseInt(minute.textContent);

            intMilisecond = intMilisecond + 1;

            if (intMilisecond == 100) {
                intMilisecond = 0;
                intSecond = intSecond + 1;
            }
            if (intSecond == 60) {
                intSecond = 0;
                intMinute = intMinute + 1;
            }

            if (intMilisecond < 10) {
                intMilisecond = "0" + intMilisecond;
            }
            if (intSecond < 10) {
                intSecond = "0" + intSecond;
            }
            if (intMinute < 10) {
                intMinute = "0" + intMinute;
            }

            milisecond.innerHTML = `${intMilisecond}`;
            second.innerHTML = `${intSecond}`;
            minute.innerHTML = `${intMinute}`;
        }, 10)

    } else {
        btnStart.classList.remove("buttonColor4");
        btnReset.classList.remove("buttonColor2");
        btnStart.innerHTML = "Start";
        btnReset.innerHTML = "Reset";
        btnStart.classList.add("buttonColor1");
        btnReset.classList.add("buttonColor3");
        clearInterval(x);
    }
}

var listLap = $("#listLap");
var headerListLap = $("#headerListLap");
var indexLap = 1;
var intMilisecond2 = intMilisecond
var intSecond2 = intSecond
var intMinute2 = intMinute


btnReset.onclick = function() {
    if (btnReset.innerHTML == "Reset") {
        milisecond.innerHTML = "00";
        second.innerHTML = "00";
        minute.innerHTML = "00";
        indexLap = 1;
        listLap.innerHTML = "";
        headerListLap.innerHTML = "";
    } else {


        var text;
        var totalMinute = intMinute - intMinute2;
        var totalSecond = intSecond - intSecond2;
        var totalMillisecond = intMilisecond - intMilisecond2;

        if (totalMillisecond < 0) {
            totalMillisecond = 100 - totalMillisecond;
            totalSecond -= 1;
        }
        if (totalMillisecond > 99) {
            totalMillisecond = totalMillisecond - 100;
            totalSecond += 1;
        }


        if (indexLap == 1) {

            text = `<tr><td>${indexLap}</td><td>${intMinute}:${intSecond}.${intMilisecond}</td></tr>`;
            headerListLap.innerHTML = "<th>LAP</th><th>TIME</th>";
        } else {
            text = `<tr><td>${indexLap}</td><td>${totalMinute > 9 ? totalMinute : ("0"+totalMinute)}:${totalSecond > 9 ? totalSecond : ("0"+totalSecond)}.${totalMillisecond > 9 ? totalMillisecond : ("0"+totalMillisecond)}</td></tr>`;
        }
        intMilisecond2 = intMilisecond
        intSecond2 = intSecond
        intMinute2 = intMinute
        indexLap++;
        var txt = listLap.innerHTML + text;
        listLap.innerHTML = txt;
    }
}