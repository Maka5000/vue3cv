<template>
    <ul>
        <li><h1 class="logo">CV</h1></li>
        <li>
            <router-link to="/">
                <button class="home-btn"></button>
            </router-link>
        </li>
        <li>
            <router-link to="/about">
                <button class="about-btn"></button>
            </router-link>
        </li>
        <li>
            <router-link to="/projects">
                <button class="projects-btn"></button>
            </router-link>
        </li>
        <li>
            <router-link to="/download">
                <button class="download-btn"></button>
            </router-link>
        </li>
    </ul>
</template>

<style scoped>
    ul {
        margin: 30px 0;
        list-style-type: none;
        background-color: blue;
        display: grid;
        grid-template-rows: 2fr 1fr 1fr 1fr 2fr;
    }

    .logo {
        margin-top: 25px;
        text-align: center;
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
    }

    .home-btn {
        background-image: url("../assets/Icons/LeftPanel/home.svg");
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
        margin-top: 100%;
    }
</style>