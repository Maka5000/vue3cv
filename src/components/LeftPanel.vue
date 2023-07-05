<template>
    <ul>
        <li>
            <router-link to="/">
                <button>Home</button>
            </router-link>
        </li>
        <li>
            <router-link to="/about">
                <button>About</button>
            </router-link>
        </li>
        <li>
            <router-link to="/projects">
                <button>Projects</button>
            </router-link>
        </li>
    </ul>
</template>

<style scoped>
    ul {
        list-style-type: none;
        background-color: blue;
    }

    li {
        margin: 5px 0;
    }
</style>