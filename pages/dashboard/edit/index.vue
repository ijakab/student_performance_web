<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-card style="border-radius: 16px">
          <v-card-title style="background-color: #009688">
            <span class="headline white--text font-weight-bold">Create user</span>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs6 px-5  mt-5>
                <v-text-field outlined v-model="user.firstname" label="Firstname" color="teal"></v-text-field>
              </v-flex>
              <v-flex xs6 px-5  mt-5>
                <v-text-field outlined v-model="user.lastname" label="Lastname" color="teal"></v-text-field>
              </v-flex>
              <v-flex xs6 px-5>
                <v-text-field outlined v-model="user.username" label="Username" color="teal"></v-text-field>
              </v-flex>
              <v-flex xs6 px-5>
                <v-text-field outlined v-model="user.email" label="Email" color="teal"></v-text-field>
              </v-flex>
              <v-flex xs6 px-5>
                <v-text-field outlined v-model="password" label="Password" color="teal"></v-text-field>
              </v-flex>
              <v-flex xs6 px-5>
                <v-select outlined :items="roles" v-model="user.role" label="Role" color="teal"></v-select>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="teal" rounded @click="$router.go(-1)">
              back
            </v-btn>
            <v-btn rounded color="teal" depressed class="white--text" @click="editUser">
              edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
    export default {
        data() {
            return {
                roles: ['admin', 'teacher', 'student'],
                user: {},
                id: null,
                password: ""
            }
        },


        async mounted(){

            let id=localStorage.getItem("editId")
            this.id=id;
            let res = await this.$axios.get("user/get/"+id)
            this.user=res.data.data
        },

        methods: {
            async editUser(){
                if(this.password===""){
                    try{
                        await this.$axios.patch(`user/update/${this.id}`, {
                            username: this.user.username,
                            email: this.user.email,
                            role: this.user.role,
                            firstname: this.user.firstname,
                            lastname: this.user.lastname
                        })
                        this.$router.push('/dashboard');
                    }catch(err){
                        console.log(err)
                    }
                }
                else{
                    try{
                        await this.$axios.patch(`user/update/${this.id}`, {
                            username: this.user.username,
                            email: this.user.email,
                            role: this.user.role,
                            firstname: this.user.firstname,
                            lastname: this.user.lastname,
                            password: this.password
                        })
                        this.$router.push('/dashboard');
                    }catch(err){
                        console.log(err)
                    }
                }
            }
        }
    }
</script>
