<script></script>
<template>
    <div>
        <section>
            <h2>{{ $t('skills.section1.title') }}</h2>
        </section>
        <section>
            <h2>{{ $t('skills.section2.title') }}</h2>
            <ul>
                <li>
                    <span class="js-icon"></span><p>JavaScript</p>
                </li>
                <li>
                    <span class="css-icon"></span><p>CSS</p>
                </li>
                <li>
                    <span class="html-icon"></span><p>HTML</p>
                </li>
                <li>
                    <span class="node-icon"></span><p>NodeJS</p>
                </li>
                <li>
                    <span class="express-icon"></span><p>Express</p>
                </li>
                <li>
                    <span class="mongodb-icon"></span><p>MongoDB</p>
                </li>
                <li>
                    <span class="python-icon"></span><p>Python</p>
                </li>
            </ul>
        </section>
        <section>
            <h2>{{ $t('skills.section3.title') }}</h2>
            <ul>
                <li>
                    <span class="vue-icon"></span><p>Vue</p>
                </li>
                <li>
                    <span class="react-icon"></span><p>React</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
    h3 {
        margin-top: 17px;
    }

    li {
        margin-left: 17px;
        display: flex;
        align-items: center;
        column-gap: 5px;
    }

    span {
        display: block;
        width: 20px;
        height: 20px;
    }

    p {
        font-size: 20px;
    }

    .js-icon {
        background-image: url("../assets/Icons/Skills/javascript.svg");
    }

    .css-icon {
        background-image: url("../assets/Icons/Skills/css.svg");
    }

    .html-icon {
        background-image: url("../assets/Icons/Skills/html.svg");
    }

    .node-icon {
        background-image: url("../assets/Icons/Skills/nodejs.svg");
    }

    .express-icon {
        background-image: url("../assets/Icons/Skills/express.svg");
        background-size: contain;
    }

    .mongodb-icon {
        background-image: url("../assets/Icons/Skills/mongodb.svg");
    }

    .python-icon {
        background-image: url("../assets/Icons/Skills/python.png");
        background-size: contain;
    }
    .express-icon {
        background-image: url("../assets/Icons/Skills/express.svg");
    }

    .vue-icon {
        background-image: url("../assets/Icons/Skills/vue.svg");
    }

    .react-icon {
        background-image: url("../assets/Icons/Skills/react.svg");
    }
</style>