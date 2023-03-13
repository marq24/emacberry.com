let themeToUse = null;
let themeLight = document.getElementById('themeLight');
let themeDark = document.getElementById('themeDark');
setTheme(getTheme());

function getTheme() {
    // WE DON'T want to use ANY kind of cookies/tracking...
    /* try {
        themeToUse = sessionStorage.getItem('theme');
    } catch (err) {
        console.log(err);
    }*/
    if (!themeToUse) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeToUse = 'dark';
        } else {
            themeToUse = 'light';
        }
    }
    return themeToUse;
}

function setTheme(theme) {
    if (theme === 'dark') {
        themeDark.setAttribute('rel', 'stylesheet');
        themeLight.setAttribute('rel', 'stylesheet alternate');
    } else {
        themeLight.setAttribute('rel', 'stylesheet');
        themeDark.setAttribute('rel', 'stylesheet alternate');
    }
    themeToUse = theme;
    // WE DON'T want to use ANY kind of cookies/tracking...
    /*setTimeout(() =>{
        try {
            sessionStorage.setItem('theme', theme);
        } catch(err) { console.log(err);}
    }, 0);*/
    return false;
}

function toggleTheme() {
    let newTheme;
    if (getTheme() === 'dark') {
        newTheme = 'light';
    } else {
        newTheme = 'dark';
    }
    setTheme(newTheme);
    setThemeIcon(newTheme);
    ensureMobileNavMenuIsCollapsed();
    return false;
}

function setThemeIcon(theme) {
    let toggleButton = document.getElementById('mToggle');
    if (!theme || !toggleButton) {
        setTimeout(() => setThemeIcon(getTheme()), 100);
    } else {
        if (theme === "dark") {
            toggleButton.classList.replace("fa-moon", "fa-sun");
        } else {
            toggleButton.classList.replace("fa-sun", "fa-moon");
        }
    }
    return false;
}

function ensureMobileNavMenuIsCollapsed() {
    try {
        let navMenu = document.getElementById('nav-trigger');
        if (navMenu && navMenu.checked) {
            navMenu.checked = false;
        }
    } catch (err) {
        console.log(err);
    }
}

window.onload = setThemeIcon(getTheme());