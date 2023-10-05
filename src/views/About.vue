<template>
    <div>
        <section>
            <h2>About me</h2>
            <p>
                I was born in 09.30.2001 in the country of Kazakhstan, in the city of Astana. 
                I have no work experience, but I have a very great desire to learn programming. 
                Since I was a teenager, I have been very interested in programming because it looks like a constructor of your capabilities and ideas. 
                I perceive programming environments as a canvas, and a programmer as an artist drawing an amazing world. 
                And it always fascinated me, the way pieces of code come to life in front of the user, 
                I always wanted to do it myself. For this reason, I started to study programming on my own, 
                and I think I have reached a good level, but still in order to improve my skills I try to study more frameworks and tools.
            </p>
        </section>
        <section>
            <h2>Education</h2>
            <h3>Master's degree</h3>
            <ul>
                <li>Turan-Astana University program: “Information Systems”</li>
            </ul>
            <h3>Courses</h3>
            <ul>
                <li>HTML and CSS course on the Stepik</li>
                <li>RS School Course “JS / Front-End Stage 0”</li>
            </ul>
        </section>
        <section>
            <h2>Languages</h2>
            <ul>
                <li><span class="kazakh"></span>Kazakh - Native</li>
                <li><span class="russia"></span>Russian - Intermediate / Upper-intermediate (2nd language)</li>
                <li><span class="english"></span>English - Intermediate (B1)</li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
    h3 {
        margin-top: 17px;
    }

    p {
        text-align: justify;
        text-indent: 15px;
    }

    li {
        display: flex;
        align-items: center;
        margin-left: 17px;
    }

    .kazakh {
        display: block;
        background-image: url("../assets/Icons/About/kazakhstan.svg");
        width: 32px;
        height: 32px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .russia {
        display: block;
        background-image: url("../assets/Icons/About/russia.svg");
        width: 32px;
        height: 32px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .english {
        display: block;
        background-image: url("../assets/Icons/About/uk.png");
        width: 32px;
        height: 32px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>