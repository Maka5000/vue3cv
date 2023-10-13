<script>
export default {
    methods: {
        showRightPanel() {
            const rightPanel = document.querySelector(".right-panel");

            rightPanel.style.transform = "translateX(-100%)";

            setTimeout(() => {
                rightPanel.style.transform = "translateX(0)";
            }, 200)
        },

        showModal() {
            document.querySelector("dialog").showModal();
        },

        closeModal() {
            document.querySelector("dialog").close();
            const langList = document.querySelector(".lang-list");

            if (langList.classList.contains("show")) {
                this.showLangList();
            }
        },

        showLangList() {
            const langList = document.querySelector(".lang-list");
            const langIcon = document.querySelector(".lang-icon");

            langIcon.classList.toggle("show");
            langList.classList.toggle("show");
        },

        changeLocale(event) {
            const langSelected = document.querySelector(".lang-selected");
            
            langSelected.textContent = event.target.textContent;
            this.$i18n.locale = event.target.dataset.locale

            localStorage.setItem("locale", event.target.dataset.locale);
        }
    }
}
</script>

<template>
    <ul class="left-panel">
        <li class="settings-btn" @click="showModal"></li>
        <li>
            <h1 class="logo">CV</h1>
        </li>
        <li>
            <button @click="showRightPanel" class="about-btn">
                <router-link to="/"></router-link>
            </button>
        </li>
        <li>
            <button @click="showRightPanel" class="contacts-btn">
                <router-link to="/contacts"></router-link>
            </button>
        </li>
        <li>
            <button @click="showRightPanel" class="skills-btn">
                <router-link to="/skills"></router-link>
            </button>
        </li>
        <li>
            <button @click="showRightPanel" class="projects-btn">
                <router-link to="/projects"></router-link>
            </button>
        </li>
        <li>
            <button class="download-btn">
                <router-link to="/download"></router-link>
            </button>
        </li>
    </ul>
    <dialog>
        <span class="modal-close" @click="closeModal"></span>
        <h2 class="modal-title">Settings</h2>
        <div class="lang-container">
            <span>Language:</span>
            <div @click="showLangList" class="lang-selector">
                <div class="lang-selected">
                    <b>English</b>
                </div>
                <span class="lang-icon"></span>
            </div>
            <div class="lang-list">
                    <div class="lang-item" data-locale="en" @click="changeLocale($event)">English</div>
                    <div class="lang-item" data-locale="rus" @click="changeLocale($event)">Русский</div>
                    <div class="lang-item" data-locale="kz" @click="changeLocale($event)">Қазақша</div>
            </div>
        </div>
        <div class="switch-container">
            <span>Theme:</span>
            <label class="switch">
                <input type="checkbox" checked>
                <span class="slider round"></span>
                <span class="sun"></span>
                <span class="moon"></span>
            </label>
        </div>
    </dialog>
</template>

<style scoped>
.left-panel {
    margin: 30px 0;
    list-style-type: none;
    background-color: blue;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: center;
    z-index: 1;
    position: relative;
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
}

.settings-btn {
    width: 25px;
    height: 25px;
    position: absolute;
    left: 6px;
    top: 6px;
    background-image: url("../assets/Icons/LeftPanel/settings.svg");
    filter: invert(100%);
    transition: .2s all ease-in-out;
}

.settings-btn:hover {
    cursor: pointer;
    filter: invert(50%);
}

button {
    width: 100%;
    height: 50px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
    border: none;
    filter: invert(100%);
    transition: .2s all ease-in-out;
}

button:hover {
    cursor: pointer;
    filter: invert(50%);
}

a {
    display: block;
    width: 100%;
    height: 100%;
}

.about-btn {
    background-image: url("../assets/Icons/LeftPanel/aboutme.svg");
}

.projects-btn {
    background-image: url("../assets/Icons/LeftPanel/projects.svg");
}

.download-btn {
    background-image: url("../assets/Icons/LeftPanel/download.svg");
    background-size: contain;
}

.contacts-btn {
    background-image: url("../assets/Icons/LeftPanel/telephone.svg");
    background-size: contain;
}

.skills-btn {
    background-image: url("../assets/Icons/LeftPanel/skills.png");
    background-size: contain;
}

dialog {
    top: 20%;
    left: 35%;
    padding: 0 200px 200px 200px;
    position: relative;
}

.modal-title {
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
}

.modal-close {
    width: 40px;
    height: 40px;
    background-image: url("../assets/Icons/LeftPanel/close.svg");
    filter: invert(100%);
    position: absolute;
    right: 10px;
    top: 0;
    transition: .2s all ease-in-out;
}

.modal-close:hover {
    cursor: pointer;
    filter: invert(50%);
}

.lang-container {
    display: flex;
    font-size: 23px;
    column-gap: 20px;
    position: relative;
}

.lang-selector {
    display: flex;
    column-gap: 5px;
    border-bottom: 1px solid white;
    transition: .2s all ease;
    position: relative;
}

.lang-selector:hover {
    cursor: pointer;
    opacity: 50%;
}

.lang-list {
    position: absolute;
    top: 100%;
    right: 18px;
    text-align: center;
    transition: .2s all ease-in-out;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    background-color: black;
}

.lang-item {
    position: relative;
}

.lang-item:hover {
    cursor: pointer;
}

.lang-item:hover::after {
    width: 100%;
}

.lang-item::after {
    content: "";
    width: 0;
    border-bottom: 1px solid white;
    position: absolute;
    left: 0;
    top: 100%;
    transition: .2s all ease-in-out;
}

.lang-icon {
    display: block;
    width: 32px;
    height: 32px;
    background-image: url("../assets/Icons/LeftPanel/triangle.svg");
    background-size: contain;
    filter: invert(100%);
    transition: .2s all ease-in-out;
}

.lang-icon.show {
    rotate: 180deg;
}

.lang-list.show {
    transform: translateY(0);
    opacity: 100%;
    pointer-events: all;
}

.switch-container {
    display: flex;
    font-size: 23px;
    justify-content: space-between;
    margin-top: 20px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: gray;
    transition: .4s;
    border-radius: 34px;
}

.slider::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    z-index: 1;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider::before {
    transform: translateX(36px);
}

.sun {
    display: inline-block;
    background-image: url("../assets/Icons/LeftPanel/modal/sun.svg");
    background-size: contain;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 6px;
    top: 7px;
    pointer-events: none;
    filter: invert(100%);
}

.moon {
    display: inline-block;
    background-image: url("../assets/Icons/LeftPanel/modal/moon.svg");
    background-size: contain;
    position: absolute;
    width: 20px;
    height: 20px;
    right: 6px;
    top: 7px;
    pointer-events: none;
}

@media (max-width : 768px) {
    .left-panel {
        display: none;
    }

    dialog {
        left: 0;
        padding: 0;
        margin: 0 auto;
        position: fixed;
        padding: 0 60px 200px 60px;
    }

    .modal-title {
        font-size: 25px;
    }

}
</style>