<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-form v-model="createValid">
          <v-card style="border-radius: 16px">
            <v-card-title style="background-color: #009688">
              <span class="headline white--text font-weight-bold">Create User</span>
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs6 px-5 mt-5>
                  <v-text-field outlined v-model="newUser.firstname" label="Firstname" color="teal"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex xs6 px-5 mt-5>
                  <v-text-field outlined v-model="newUser.lastname" label="Lastname" color="teal"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex xs6 px-5>
                  <v-text-field outlined v-model="newUser.username" label="Username" color="teal"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex xs6 px-5>
                  <v-text-field outlined v-model="newUser.email" label="Email" color="teal"
                                :rules="[rules.required, rules.email]"></v-text-field>
                </v-flex>
                <v-flex xs6 px-5>
                  <v-select outlined :items="roles" v-model="newUser.role" label="Role" color="teal"></v-select>
                </v-flex>
                <v-flex xs6 px-5>
                  <v-text-field outlined v-model="newUser.password" label="Password" color="teal"
                                type="password"></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="teal" rounded @click="$router.go(-1)">
                back
              </v-btn>
              <v-btn rounded color="teal" depressed class="white--text" @click="createUser" :disabled="!createValid">
                create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
    import Swal from 'sweetalert2'

    export default {
        data() {
            return {
                roles: ['admin', 'teacher', 'student'],
                newUser: {
                    firstname: '',
                    lastname: '',
                    username: '',
                    email: '',
                    password: '',
                    role: ''
                },
                createValid: false,
                rules: {
                    required: value => !!value || 'Required',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid email'
                    },
                }
            }
        },

        methods: {
            async createUser() {
                this.newUser.password = this.newUser.password.toString()
                try {
                    await this.$axios.post('user/create', this.newUser)
                    this.$router.push('/dashboard');
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User created!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } catch (err) {
                    console.log(err)
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Upsss... Something went wrong!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        }
    }
</script>
