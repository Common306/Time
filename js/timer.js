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
    var fontSizeTime = parseFloat(sizeTime);

    if (fontSizeTime > 110) {
        timePlace.style.fontSize = (fontSizeTime - 20) + 'px';
    }
}

function zoomOutFont() {
    var sizeTime = window.getComputedStyle(timePlace, null).getPropertyValue('font-size');
    var fontSizeTime = parseFloat(sizeTime);

    if (fontSizeTime < 140) {
        timePlace.style.fontSize = (fontSizeTime + 20) + 'px';
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




        if (body.style.backgroundColor === "rgb(255, 255, 255)" && e.target == iconColors[0]) {
            alarmContainerTime.classList.add("color0");


        } else if (body.style.backgroundColor === "rgb(0, 0, 0)" && e.target == iconColors[0]) {
            alarmContainerTime.classList.add("color1");

        } else {
            alarmContainerTime.classList.add(`color${index+1}`);

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


var editAlarm = $("#editAlarm");
var overlayEdit = $("#overlayEdit");
var btnEdit = $("#btnEdit");
var iconCloseEditAlarm = $("#iconClose");
var btnCloseEditAlarm = $("#buttonClose");
var audio = $("audio");
var iconPlay = $("#iconPlay");
var setSound = $("#setSound");
var btnPlay = $("#btnPlay");
var btnDecreaseHour = $("#btnDecreaseHour");
var btnIncreaseHour = $("#btnIncreaseHour");
var btnDecreaseMinute = $("#btnDecreaseMinute");
var btnIncreaseMinute = $("#btnIncreaseMinute");
var btnDecreaseSecond = $("#btnDecreaseSecond");
var btnIncreaseSecond = $("#btnIncreaseSecond");
var setMinute = $("#setMinute");
var setHour = $("#setHour");
var setSecond = $("#setSecond");
var btnTest = $("#btnTest");

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

btnEdit.onclick = openEditAlarm;
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


btnDecreaseSecond.onclick = function() {
    if (setSecond.selectedIndex == 0) {
        setSecond[setSecond.length - 1].selected = true
    } else {
        setSecond[setSecond.selectedIndex - 1].selected = true
    }
}

btnIncreaseSecond.onclick = function() {
    if (setSecond.selectedIndex == setSecond.length - 1) {
        setSecond[0].selected = true
    } else {
        setSecond[setSecond.selectedIndex + 1].selected = true
    }
}

function openNoticeAlarm() {
    closeEditAlarm();
    audio.play();
    noticeAlarm.style.transform = "translateY(0)";
    noticeAlarm.style.opacity = "1";
    overlayNotice.style.display = "block";
    titleNotice.innerHTML = titleEdit.value;
    hourNotice.innerHTML = setHour.value + ":" + setMinute.value + ":" + setSecond.value;
}

function closeNoticeAlarm() {
    openEditAlarm();
    audio.pause();
    noticeAlarm.style.transform = "translateY(-150%)";
    noticeAlarm.style.opacity = "0";
    overlayNotice.style.display = "none";
}
var iconCloseNotice = $("#iconCloseNotice");
var btnCloseNotice = $("#btnCloseNotice");
var overlayNotice = $("#overlayNotice");

btnTest.onclick = openNoticeAlarm;
iconCloseNotice.onclick = closeNoticeAlarm;
btnCloseNotice.onclick = closeNoticeAlarm;
overlayNotice.onclick = closeNoticeAlarm;


var countInDay = $("#countInDay");
var countManyDay = $("#countManyDay");

var btnReset = $("#btnReset");
var btnStartEdit = $("#btnStartEdit");
var x;
var timeCount;
var hours, minutes, seconds;

function handleCountTimer() {
    var setHourNew = parseInt(setHour.value);
    var setMinuteNew = parseInt(setMinute.value);
    var setSecondNew = parseInt(setSecond.value);
    var timer = setHourNew * 60 * 60 + setMinuteNew * 60 + setSecondNew;
    countPressReset = 1;
    x = setInterval(function() {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer - hours * 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timePlace.textContent = hours + ":" + minutes + ":" + seconds;

        timeCount = hours * 3600 + minutes * 60 + seconds;

        if (--timer < 0) {
            clearInterval(x);
            timePlace.textContent = "00:00:00";
            openNoticeAlarm();
            btnStart.innerText = "Start";
            btnStart.classList.add("buttonColor1");
            btnStart.classList.remove("buttonColor4");
            countPressStart = 0;
            countPressReset = 0;
        }
    }, 1000);
}

btnStartEdit.onclick = function() {
    clearInterval(x);
    handleCountTimer();
    closeEditAlarm();
    audio.pause();
    btnStart.innerText = "Stop";
    btnStart.classList.remove("buttonColor1");
    btnStart.classList.add("buttonColor4");
}
var countPressReset = 0;
btnReset.onclick = function() {
    if (countPressReset > 0) {
        btnStartEdit.click();
        countPressReset++;
    }
}

var btnStart = $("#btnStart");
var countPressStart = 0;


btnStart.onclick = function() {
    if (btnStart.classList.contains("buttonColor4")) {
        timePlace.textContent = hours + ":" + minutes + ":" + seconds;
        clearInterval(x);
        btnStart.innerText = "Start";
        btnStart.classList.add("buttonColor1");
        btnStart.classList.remove("buttonColor4");
        countPressStart++;
    } else {
        if (countPressStart > 0) {

            clearInterval(x);

            btnStart.innerText = "Stop";
            btnStart.classList.remove("buttonColor1");
            btnStart.classList.add("buttonColor4");
            timer = timeCount;
            countPressReset = 1;

            x = setInterval(function() {
                hours = parseInt(timer / 3600, 10);
                minutes = parseInt((timer - hours * 3600) / 60, 10);
                seconds = parseInt(timer % 60, 10);

                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                timePlace.textContent = hours + ":" + minutes + ":" + seconds;

                timeCount = hours * 3600 + minutes * 60 + seconds;

                if (--timer < 0) {
                    clearInterval(x);
                    timePlace.textContent = "00:00:00";
                    openNoticeAlarm();
                    btnStart.innerText = "Start";
                    btnStart.classList.add("buttonColor1");
                    btnStart.classList.remove("buttonColor4");
                    countPressStart = 0;
                    countPressReset = 0;
                }
            }, 1000);
        }
    }
}