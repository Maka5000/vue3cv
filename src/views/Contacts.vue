<script></script>
<template>
    <div>
        <section>
            <h2>{{ $t('contacts.section1.title') }}</h2>
        </section>
        <section>
            <ul>
                <li>
                    <span class="tel"></span><p>{{ $t('contacts.section2.phone') }} +7 (775) 796 3210</p>
                </li>
                <li>
                    <span class="email"></span><p>E-mail: mak.khas02@mail.ru</p>
                </li>
                <li>
                    <span class="discord"></span><p>{{ $t('contacts.section2.discord') }} Maka#2223</p>
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
        width: 32px;
        height: 32px;
    }

    p {
        font-size: 25px;
    }

    .tel {
        background-image: url("../assets/Icons/Contacts/phone.svg");
        background-size: contain;
    }

    .email {
        background-image: url("../assets/Icons/MIddlePanel/email.svg");
    }

    .discord {
        background-image: url("../assets/Icons/MIddlePanel/discord.svg");
    }

</style>