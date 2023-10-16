<script></script>
<template>
    <div>
        <section>
            <h2>{{ $t('projects.section1.title') }}</h2>
        </section>
        <section>
            <ul>
                <li>
                    <a href="https://maka5000-momentum.netlify.app/">
                        <span class="momentum"></span>
                        <h3>Momentum</h3>
                    </a>
                </li>
                <li>
                    <a href="https://maka5000.github.io/cssBayan/cssBayan/">
                        <span class="cssBayan"></span>
                        <h3>cssBayan</h3>
                    </a>
                </li>
                <li>
                    <a href="https://maka5000.github.io/gallery/">
                        <span class="gallery"></span>
                        <h3>Gallery</h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="schoolPlatform"></span>
                        <h3>SchoolPlatform</h3>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped>

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 5px;
    }

    a {
        text-decoration: none;
        transition: .2s all ease-in-out;
        width: 100%;
        max-width: 250px;
    }

    a:hover {
        transform: scale(1.4);
    }

    h3 {
        padding-top: 8px;
        padding-left: 8px;
        background-color: var(--background-color);
        color: var(--font-color);
    }

    span {
        display: block;
        width: 100%;
        height: 125px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center bottom;
    }

    .momentum {
        background-image: url("../assets/Photo/Projects_img/momentum.jpeg");
    }

    .cssBayan {
        background-image: url("../assets/Photo/Projects_img/cssBayan.jpeg");
    }

    .gallery {
        background-image: url("../assets/Photo/Projects_img/gallery.jpeg");
    }

    a:has(> .schoolPlatform) {
        pointer-events: none;
    }

    .schoolPlatform {
        background-image: url("../assets/Photo/Projects_img/schoolPlatform.jpg");
        background-size: cover;
    }

    @media (max-width: 620px) {
        ul {
            grid-template-columns: 1fr;
        }
    }

</style>