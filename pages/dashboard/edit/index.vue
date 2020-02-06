<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-form v-model="editValid">
          <v-card style="border-radius: 16px">
            <v-card-title style="background-color: #009688">
              <span class="headline white--text font-weight-bold">Edit User</span>
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs6 px-5 mt-5>
                  <v-text-field outlined v-model="user.firstname" label="Firstname" color="teal"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex xs6 px-5 mt-5>
                  <v-text-field outlined v-model="user.lastname" label="Lastname" color="teal"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex xs6 px-5>
                  <v-text-field outlined v-model="user.username" label="Username" color="teal"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex xs6 px-5>
                  <v-text-field outlined v-model="user.email" label="Email" color="teal"
                                :rules="[rules.required, rules.email]"></v-text-field>
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
              <v-btn rounded color="teal" depressed class="white--text" @click="editUser" :disabled="!editValid">
                edit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
      <v-overlay v-model="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-layout>
  </v-container>
</template>


<script>
    import Swal from 'sweetalert2'

    export default {
        data() {
            return {
                roles: ['admin', 'teacher', 'student'],
                user: {},
                id: null,
                password: "",
                loading: true,
                editValid: false,
                rules: {
                    required: value => !!value || 'Required',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid email'
                    },
                }
            }
        },

        async mounted() {
            let id = localStorage.getItem("editId")
            this.id = id;
            try {
                let res = await this.$axios.get("user/get/" + id)
                this.user = res.data.data
            } catch (err) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Upsss... Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.$router.push("/dashboard")
            }
            this.loading = false;
        },

        methods: {
            async editUser() {
                if (this.password === "") {
                    try {
                        await this.$axios.patch(`user/update/${this.id}`, {
                            username: this.user.username,
                            email: this.user.email,
                            role: this.user.role,
                            firstname: this.user.firstname,
                            lastname: this.user.lastname
                        })
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'User updated!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.$router.push('/dashboard');
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
                } else {
                    try {
                        await this.$axios.patch(`user/update/${this.id}`, {
                            username: this.user.username,
                            email: this.user.email,
                            role: this.user.role,
                            firstname: this.user.firstname,
                            lastname: this.user.lastname,
                            password: this.password
                        })
                        this.$router.push('/dashboard');
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'User updated!',
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
    }
</script>
