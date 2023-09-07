<template>
    <div>
        <section>
            <h2>Projects</h2>
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
        row-gap: 20px;
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
    }

    a:hover {
        transform: scale(1.4);
    }

    h3 {
        padding-top: 8px;
        padding-left: 8px;
        background-color: white;
        color: blue;
    }

    span {
        display: block;
        width: 250px;
        height: 125px;
        background-size: contain;
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

    
</style>