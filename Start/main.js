function moveHtml(html) {
    location.href = html;
}

function GETI(id) {
    return document.getElementById(id);
}

GETI("otherSW").addEventListener("click", () => {
    window.open("https://vscode.dev");
})

function showApp(username) {
    GETI("authSection").style.display = "none";
    GETI("btns").style.display = "block";
    GETI("header").style.display = "flex";
    GETI("title").textContent = "Hello " + username + "! Welcome to The Experience Of Coding";
}

function warn(id, msg) {
    GETI(id).textContent = msg;
}

GETI("signupBtn").addEventListener("click", () => {
    const user = GETI("username").value.trim();
    const pass = GETI("password").value.trim();

    if (!user || !pass) {
        warn("warning", "Please complete the fields");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    localStorage.setItem("loggedIn", "true");
    showApp(user);
});

GETI("loginBtn").addEventListener("click", () => {
    const user = GETI("username").value.trim();
    const pass = GETI("password").value.trim();

    if (!user || !pass) {
        warn("warning", "Please complete the fields");
        return;
    }

    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
        localStorage.setItem("loggedIn", "true");
        showApp(user);
    } else {
        warn("warning", "Wrong username or password");
    }
});

GETI("darkMode").addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(30, 30, 30)";
    document.body.style.color = "white";
});

GETI("lightMode").addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});

GETI("logoutBtn").addEventListener("click", () => {
    if (GETI("settingsWarning").textContent === "Are you sure? Click again to confirm.") {
        localStorage.setItem("loggedIn", "false");
        GETI("authSection").style.display = "flex";
        GETI("btns").style.display = "none";
        GETI("header").style.display = "none";
        GETI("settingsPanel").style.display = "none";
        GETI("title").textContent = "The Experience Of Coding";
        GETI("username").value = "";
        GETI("password").value = "";
        GETI("settingsWarning").textContent = "";
    } else {
        warn("settingsWarning", "Are you sure? Click again to confirm.");
    }
});

GETI("deleteBtn").addEventListener("click", () => {
    if (GETI("settingsWarning").textContent === "Are you sure? Click again to confirm.") {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("loggedIn");
        GETI("authSection").style.display = "flex";
        GETI("btns").style.display = "none";
        GETI("header").style.display = "none";
        GETI("settingsPanel").style.display = "none";
        GETI("title").textContent = "The Experience Of Coding";
        GETI("username").value = "";
        GETI("password").value = "";
        GETI("settingsWarning").textContent = "";
    } else {
        warn("settingsWarning", "Are you sure? Click again to confirm.");
    }
});

window.addEventListener("load", () => {
    const loggedIn = localStorage.getItem("loggedIn");
    const savedUser = localStorage.getItem("username");
    if (loggedIn === "true" && savedUser) {
        showApp(savedUser);
    }
});
