const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var countDownDate
var body = $("body");
var audio = $("audio");
var tool = $(".tools");
var btnPlay = $("#btnPlay");
var btnTest = $("#btnTest");
var setHour = $("#setHour");
var heading = $("#heading");
var setSound = $("#setSound");
var iconPlay = $("#iconPlay");
var btnStart = $("#btnStart");
var switchIcon = $$(".switch");
var timeAlarm = $("#timeAlarm");
var setMinute = $("#setMinute");
var titleEdit = $("#titleEdit");
var editAlarm = $("#editAlarm");
var hourNotice = $("#hourNotice");
var navigation = $("#navigation");
var titleNotice = $("#titleNotice");
var overlayEdit = $("#overlayEdit");
var plus = $(".ci-plus2");
var btnSetAlarm = $("#btnSetAlarm");
var noticeAlarm = $("#noticeAlarm");
var fullScreen = $("#iconFullScreen");
var minus = $(".ci-less");
var btnStopAlarm = $("#btnStopAlarm");
var iconDarkMode = $(".icon.ci-contrast");
var overlayNotice = $("#overlayNotice");
var iconSettings = $$(".icon.ci-config");
var iconCloseEditAlarm = $("#iconClose");
var timePlace = $(".alarmContainerHour");
var datePlace = $(".alarmContainerDate");
var btnCloseNotice = $("#btnCloseNotice");
var btnCloseEditAlarm = $("#buttonClose");
var alarmContainer = $("#alarmContainer");
var iconCloseNotice = $("#iconCloseNotice");
var btnDecreaseHour = $("#btnDecreaseHour");
var btnIncreaseHour = $("#btnIncreaseHour");
var btnDecreaseMinute = $("#btnDecreaseMinute");
var btnIncreaseMinute = $("#btnIncreaseMinute");
var alarmContainerTime = $(".alarmContainerTime");
var alarmContainerNotice = $(".alarmContainerNotice");
var iconColors = $$(".ci-circle");
var btnSlideSwitch = $$(".switch input[type='checkbox'");
var alarmContainerTimeSets = $$(".alarmContainerTimeSet");
var alarmContainerTitleNotice = $(".alarmContainerTitleNotice")
var weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var listSound = [{
    name: "Bells",
    src: "../sounds/bells.mp3"
}, {
    name: "Piano",
    src: "../sounds/piano.mp3"
}, {
    name: "School",
    src: "../sounds/school.mp3"
}]

var setting = $("#setting");

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

function closeEditAlarm() {
    editAlarm.style.transform = "translateY(-150%)";
    editAlarm.style.opacity = "0";
    overlayEdit.style.display = "none";

}

function openEditAlarm() {
    editAlarm.style.transform = "translateY(0)";
    editAlarm.style.opacity = "1";
    overlayEdit.style.display = "block"
}

btnSetAlarm.onclick = openEditAlarm;
iconCloseEditAlarm.onclick = closeEditAlarm;
btnCloseEditAlarm.onclick = closeEditAlarm;
overlayEdit.onclick = closeEditAlarm;

function playSound() {
    listSound.forEach(function(sound) {
        if (sound.name == setSound.value) {
            audio.src = sound.src;
            audio.play();
        }
    })
    if (audio.play()) {
        iconPlay.classList.remove("ci-play-outline");
        iconPlay.classList.add("ci-pause-outline");
    } else {
        iconPlay.classList.add("ci-play-outline");
        iconPlay.classList.remove("ci-pause-outline");
    }
}

function playSoundSecond() {
    if (iconPlay.classList.contains("ci-play-outline")) {
        iconPlay.classList.remove("ci-play-outline");
        iconPlay.classList.add("ci-pause-outline");
        audio.play();
    } else {
        iconPlay.classList.add("ci-play-outline");
        iconPlay.classList.remove("ci-pause-outline");
        audio.pause();
    }
}
setSound.onchange = playSound;
btnPlay.onclick = playSoundSecond;

audio.addEventListener("ended", function() {
    iconPlay.classList.add("ci-play-outline");
    iconPlay.classList.remove("ci-pause-outline");
})

btnDecreaseHour.onclick = function() {
    if (setHour.selectedIndex == 0) {
        setHour[setHour.length - 1].selected = true
    } else {
        setHour[setHour.selectedIndex - 1].selected = true
    }
}

btnIncreaseHour.onclick = function() {
    if (setHour.selectedIndex == setHour.length - 1) {
        setHour[0].selected = true
    } else {
        setHour[setHour.selectedIndex + 1].selected = true
    }
}

btnDecreaseMinute.onclick = function() {
    if (setMinute.selectedIndex == 0) {
        setMinute[setMinute.length - 1].selected = true
    } else {
        setMinute[setMinute.selectedIndex - 1].selected = true
    }
}

btnIncreaseMinute.onclick = function() {
    if (setMinute.selectedIndex == setMinute.length - 1) {
        setMinute[0].selected = true
    } else {
        setMinute[setMinute.selectedIndex + 1].selected = true
    }
}

function openNoticeAlarm() {
    closeEditAlarm();
    audio.play();
    noticeAlarm.style.transform = "translateY(0)";
    noticeAlarm.style.opacity = "1";
    overlayNotice.style.display = "block";
    titleNotice.innerHTML = titleEdit.value;
    hourNotice.innerHTML = setHour.value + ":" + setMinute.value;
}

function closeNoticeAlarm() {
    openEditAlarm();
    audio.pause();
    noticeAlarm.style.transform = "translateY(-150%)";
    noticeAlarm.style.opacity = "0";
    overlayNotice.style.display = "none";
}
btnTest.onclick = openNoticeAlarm;
iconCloseNotice.onclick = closeNoticeAlarm;
btnCloseNotice.onclick = closeNoticeAlarm;
overlayNotice.onclick = closeNoticeAlarm;
var x;
btnStart.onclick = function() {
    var today = new Date();
    var currentHour = today.getHours();
    var currentMinute = today.getMinutes();
    var currentDay = today.getDate();
    var setHourNew = parseInt(setHour.value);
    var setMinuteNew = parseInt(setMinute.value);
    var setDay = today.getDate();
    var setMonth = today.getMonth();
    var setYear = today.getFullYear();
    if (setHourNew < currentHour) {
        setDay = currentDay + 1;
    } else if (setHourNew == currentHour && setMinuteNew <= currentMinute) {
        setDay = currentDay + 1;
    }
    alarmContainerNotice.style.display = "flex"
    alarmContainerTitleNotice.innerHTML = $("#titleEdit").value;
    timeAlarm.innerHTML = setHour.value + ":" + setMinute.value;
    countDownDate = new Date(`${month[setMonth]} ${setDay}, ${setYear} ${setHourNew}:${setMinuteNew}:00`).getTime();
    zoomInFont();
    alarmContainerTime.style.marginTop = "130px";
    closeEditAlarm();
    audio.pause();
    x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000) + 1;

        var textHours = hours < 10 ? "0" + hours : hours;
        var textMinutes = minutes < 10 ? "0" + minutes : minutes;
        var textSeconds = seconds < 10 ? "0" + seconds : seconds;

        $(".alarmContainerTimeCount").innerHTML = textHours + ":" + textMinutes + ":" + textSeconds;

        if (distance < 0) {
            alarmContainerTime.style.marginTop = "300px";
            alarmContainerNotice.style.display = "none";
            openNoticeAlarm();
            clearInterval(x);
        }

    }, 1000);
}

btnStopAlarm.onclick = function() {
    alarmContainerTime.style.marginTop = "300px";
    alarmContainerNotice.style.display = "none";
    zoomOutFont();
    clearInterval(x);
}

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

switchIcon[3].onclick = function() {
    if (btnSlideSwitch[3].checked) {
        body.style.backgroundColor = "#000";
        tool.style.color = "#fff";
        alarmContainerNotice.style.backgroundColor = "#111111";
    } else {
        body.style.backgroundColor = "#fff";
        tool.style.color = "#484747";
        alarmContainerNotice.style.backgroundColor = "#f0f0f0";
    }
}

iconDarkMode.onclick = () => switchIcon[3].click();



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

        alarmContainerNotice.classList.remove("color1");
        alarmContainerNotice.classList.remove("color2");
        alarmContainerNotice.classList.remove("color3");
        alarmContainerNotice.classList.remove("color4");
        alarmContainerNotice.classList.remove("color5");

        if (body.style.backgroundColor === "rgb(255, 255, 255)" && e.target == iconColors[0]) {

            alarmContainerTime.classList.add("color0");
            alarmContainerNotice.classList.add("color0");
        } else if (body.style.backgroundColor === "rgb(0, 0, 0)" && e.target == iconColors[0]) {

            alarmContainerTime.classList.add("color1");
            alarmContainerNotice.classList.add("color1");
        } else {

            alarmContainerTime.classList.add(`color${index+1}`);
            alarmContainerNotice.classList.add(`color${index+1}`);
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