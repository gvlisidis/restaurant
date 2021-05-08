<template>
    <div>Into the dashboard</div>
    <p>Hello {{ user.name }}!</p>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            user: null
        }
    },
    created() {
        this.authUser();
    },
    methods: {
        authUser() {
            axios.get('/api/user').then(res => {
                this.user = res.data;
            })
        }
    }
}
</script>

<style scoped>

</style>
