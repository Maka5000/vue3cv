<script></script>
<template>
    <div class="photo">
        <div class="photo-description">
            <h2 class="photo-name">{{ $t('photo.name') }}</h2>
            <ul class="photo-social">
                <li class="photo-social-item">
                    <a href="#" class="discord"></a>
                </li>
                <li class="photo-social-item">
                    <a href="#" class="linkedin"></a>
                </li>
                <li class="photo-social-item">
                    <a href="#" class="email"></a>
                </li>
                <li class="photo-social-item">
                    <a href="https://github.com/Maka5000?tab=repositories" class="github"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .photo {
        background-image: url("../assets/Photo/avatar.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        z-index: 1;
    }

    .photo-description {
        position: absolute;
        bottom: 145px;
        left: 0;
        width: 100%;
        text-align: center;
        backdrop-filter: blur(10px);
    }

    .photo-name {
        font-size: 50px;
        margin-bottom: 15px;
    }

    .photo-social {
        display: flex;
        list-style-type: none;
        column-gap: 20px;
        justify-content: center;
        align-items: center;
    }

    a {
        display: block;
        background-repeat: no-repeat;
        background-color: transparent;
        background-size: contain;
        width: 35px;
        height: 35px;
        filter: invert(100%);
        transition: .2s all ease-in-out;
    }

    a:hover {
        cursor: pointer;
        filter: invert(50%);
    }

    .discord {
        background-image: url("../assets/Icons/MIddlePanel/discord.svg");
    }

    .linkedin {
        background-image: url("../assets/Icons/MIddlePanel/linkedin.svg");
    }

    .email {
        background-image: url("../assets/Icons/MIddlePanel/email.svg");
    }

    .github {
        background-image: url("../assets/Icons/MIddlePanel/github.svg");
    }
</style>