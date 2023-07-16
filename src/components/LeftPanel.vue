<script>
    export default {
        methods: {
            showRightPanel() {
                const rightPanel = document.querySelector(".right-panel");

                rightPanel.style.transform = "translateX(-100%)";

                setTimeout(() => {
                    rightPanel.style.transform = "translateX(0)";
                }, 200)
            }
        }
    }
</script>

<template>
    <ul>
        <li><h1 class="logo">CV</h1></li>
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
</template>

<style scoped>
    ul {
        margin: 30px 0;
        list-style-type: none;
        background-color: blue;
        display: grid;
        grid-template-rows: 2fr 1fr 1fr 1fr 2fr;
        z-index: 1;
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
        margin-top: 100%;
    }

    .contacts-btn {
        background-image: url("../assets/Icons/LeftPanel/telephone.svg");
        background-size: contain;
    }

    .skills-btn {
        background-image: url("../assets/Icons/LeftPanel/skills.png");
        background-size: contain;
    }

</style>