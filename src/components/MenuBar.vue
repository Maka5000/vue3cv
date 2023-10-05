<script>
export default {
    methods: {
        showMenu() {
            const menu = document.querySelector(".menu-container");

            menu.classList.toggle("show");
        },

        showSettings() {
            const dialog = document.querySelector("dialog");

            dialog.showModal();
        }
    }
}
</script>

<template>
    <div class="menu-bar">
        <h1>CV</h1>
        <div class="controls">
            <div @click="showSettings" class="settings-btn"></div>
            <div class="burger" @click="showMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <ul class="menu-container">
            <li>
                <button @click="showMenu" class="about-btn">
                    <router-link to="/">About me</router-link>
                </button>
            </li>
            <li>
                <button @click="showMenu" class="contacts-btn">
                    <router-link to="/contacts">Contacts</router-link>
                </button>
            </li>
            <li>
                <button @click="showMenu" class="skills-btn">
                    <router-link to="/skills">Skills</router-link>
                </button>
            </li>
            <li>
                <button @click="showMenu" class="projects-btn">
                    <router-link to="/projects">Projects</router-link>
                </button>
            </li>
            <li>
                <button @click="showMenu" class="download-btn">
                    <router-link to="/download">Download</router-link>
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .menu-bar {
        display: flex;
        width: 100%;
        height: 60px;
        position: fixed;
        z-index: 3;
        background-color: blue;
        align-items: center;
        justify-content: space-between;
        padding-right: 10px;
        padding-left: 10px;
    }

    .controls {
        display: flex;
        column-gap: 20px;
    }

    .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 32px;
        height: 32px;
        transition: .2s all ease-in-out;
    }

    .burger span {
        display: block;
        border-bottom: 4px solid white;
    }

    .burger:hover {
        opacity: 50%;
    }

    .menu-container {
        width: 100%;
        list-style-type: none;
        text-align: center;
        position: absolute;
        left: 0;
        top: 100%;
        z-index: 2;
        background-color: blue;
        transform: translateY(-120%);
        pointer-events: none;
        transition: .2s all ease-in-out;
    }

    .menu-container.show {
        transform: translateY(0);
        pointer-events: all;
    }

    .menu-container button {
        background-color: transparent;
        border: none;
        width: 100%;
        font-size: 30px;
        height: 50px;
    }

    .menu-container button a {
        text-decoration: none;
        color: white;
        display: inline-block;
        width: 100%;
        line-height: 50px;
    }

    .settings-btn {
        background-image: url("../assets/Icons/LeftPanel/settings.svg");
        filter: invert(100%);
        width: 32px;
        height: 32px;
        transition: .2s all ease-in-out;
    }

    .settings-btn:hover {
        filter: invert(50%);
    }
}
</style>