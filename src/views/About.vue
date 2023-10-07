<script>
</script>
<template>
    <div>
        <section>
            <h2>{{ $t('about.section1.title') }}</h2>
            <p>
                {{ $tm('about.section1.myhistory').join(" ") }}
            </p>
        </section>
        <section>
            <h2>{{ $t('about.section2.title') }}</h2>
            <h3>{{ $t('about.section2.subtitle1.content') }}</h3>
            <ul>
                <li>{{ $t('about.section2.subtitle1.description') }}</li>
            </ul>
            <h3>Courses</h3>
            <ul>
                <li>HTML and CSS course</li>
                <li>RS School Course “JS / Front-End Stage 0”</li>
            </ul>
        </section>
        <section>
            <h2>{{ $t('about.section3.title') }}</h2>
            <ul>
                <li><span class="kazakh"></span>{{ $tm('about.section3.langList[0]') }}</li>
                <li><span class="russia"></span>{{ $tm('about.section3.langList[1]') }}</li>
                <li><span class="english"></span>{{ $tm('about.section3.langList[2]') }}</li>
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