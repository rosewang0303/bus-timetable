<template>
    <div class="layout-default">
        <nuxt/>
    </div>
</template>
<style lang="scss">
html, body {
    padding: 0;
    margin: 0;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: $black;
    color: $white;
}
* {
    padding: 0;
    margin: 0;
    position: relative;
    box-sizing: border-box;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none;
    color: $white;
    &:hover {
        color: $white;
    }
    &:visited {
        color: $white;
    }
}
input, button {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
    &:focus {
        outline-style: none;
        border-color: transparent;
    }
}
.layout-default {
    font-family: 'Noto Sans TC';
    color: $white;
    background-color: $black;
}
@media screen and (max-width: 768px){
    .layout-default {
        height: 100vh;
        overflow: hidden;
    }
}
@media screen and (max-width: 576px){
    .layout-default {
    }
}
</style>