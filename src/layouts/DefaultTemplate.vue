<template>
    <div>
        <header-component/>

        <router-view/>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './_partials/header'

export default {
    components : {
        HeaderComponent
    }
}
</script>

<style scoped>

    @import url('../assets/css/vuefood.css');
    @import url('../assets/css/reset.css');
</style>