<template>
    <div>
        <h1>Get All Users</h1>
        <h4>จำนวนผู้ใช้งาน {{users.length}}</h4>
        <div v-for="user in users" v-bind:key="user.id">
            <p>id : {{user.id}}</p>
            <p>ชื่อ-นามสกุล :{{user.name}} - {{user.lastname}}</p>
            <p>email : {{user.email}}</p>
            <p>password : {{user.password}}</p>
            <p><button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูลผู้ใช้</button></p>
            <p><button v-on:click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูลผู้ใช้</button></p>
            <p><button v-on:click="deleteUser(user)">ลบข้อมูล</button></p>
            <p><button v-on:click="logout">Log out</button></p>
        </div>
    </div>
</template>

<script>

import UsersService from '@/services/UsersService'

export default {
    data () {
        return{
            users: []
        }
    },
    async created (){
        try{
            /*let results = (await UsersService.index()).data
            console.log(results)*/
        this.users = (await UsersService.index()).data
        }catch (error){
            console.log(error)
        }
        
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },
        async deleteUser (user) {
            let result = confirm ("want to delete?")
            if (result){
                try {
                    await UsersService.delete(user)
                    this.refreshData()
                } catch (err){
                    console.log(err)
                }
            }
        },
        async refreshData () {
            this.users = (await UsersService.index()).data
        },
        logout(){
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'login'
            })
        }
    }
}

</script>
<style scoped>

</style>