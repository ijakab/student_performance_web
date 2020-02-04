<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-card style="border-radius: 16px">
          <v-card-title style="background-color: #009688" class="headline white--text font-weight-bold">
            <v-flex xs6><span>User list</span></v-flex>
            <v-flex xs6 text-right>
              <v-btn outlined rounded small color="white" nuxt :to="`dashboard/create`">Create new</v-btn>
            </v-flex>
            <!--v-flex xs12 mt-3>
              <v-text-field outlined hide-details style="background-color: white" color="white"></v-text-field>
            </v-flex-->
          </v-card-title>
          <v-card-text>
            <v-list two-line v-for="user in users" :key="user.id">
              <v-list-item nuxt link :to="`dashboard/${user.id}`">
                <v-list-item-avatar size="64">
                  <v-avatar color="#E0F2F1"><span class="font-weight-black">{{user.firstname.charAt(0)}}{{user.lastname.charAt(0)}}</span>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{user.firstname}} {{user.lastname}}
                    <v-chip small class="white--text" color="red" v-if="user.role==='admin'">{{user.role}}</v-chip>
                    <v-chip small class="white--text" color="blue" v-if="user.role==='teacher'">{{user.role}}</v-chip>
                    <v-chip small class="white--text" color="green" v-if="user.role==='student'">{{user.role}}</v-chip>
                  </v-list-item-title>
                  <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-flex xs12>
                    <v-icon @click.prevent="openDetails(user.id)" v-show="user.role==='student' && userType==='admin'"
                            class="px-1">device_hub
                    </v-icon>
                    <v-icon @click.prevent="openEdit(user.id)" class="px-1">edit</v-icon>
                    <v-icon @click.prevent="openConfirmDialog(user.id)" class="px-1">delete</v-icon>
                  </v-flex>

                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-pagination
          v-model="page"
          :length="pagination.lastPage"
          circle
          color="teal"
        ></v-pagination>
      </v-flex>
    </v-layout>

    <template>
      <v-dialog v-model="confirmDialog" width="450">
        <v-card style="border-radius: 8px">
          <v-card-title style="background-color: #009688"><span class="white--text headline">Delete user</span>
          </v-card-title>
          <v-card-text>Are you sure that you want to <b>delete</b> this user?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined rounded small color="teal" @click="confirmDialog=false">dismiss</v-btn>
            <v-btn depressed rounded small color="teal" @click="deleteUser" class="white--text">agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

  </v-container>
</template>


<script>
    import {mapState} from 'vuex'
    import jsCookie from 'js-cookie'
    import Swal from 'sweetalert2'

    export default {
        data() {
            return {
                confirmDialog: false,
                deleteId: null,
                page: 1
            }
        },

        mounted() {
            this.$store.dispatch("users/getUsers", {page: 1})
            this.type = jsCookie.get("type")
        },

        computed: {
            ...mapState("users", ["users", "pagination"]),

            userType() {
                return jsCookie.get('type')
            }
        },

        methods: {
            openConfirmDialog(id) {
                this.deleteId = id;
                this.confirmDialog = true;
            },

            async deleteUser() {
                try {
                    await this.$axios.delete(`user/delete/${this.deleteId}`)
                    this.confirmDialog = false
                    this.$store.dispatch("users/getUsers", {page: this.page})
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User deleted!',
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
            },

            openEdit(id) {
                localStorage.setItem("editId", id)
                this.$router.push("/dashboard/edit")
            },

            openDetails(id) {
                localStorage.setItem("detailsId", id)
                this.$router.push("/dashboard/details")
            }
        },

        watch: {
            page() {
                this.$store.dispatch("users/getUsers", {page: this.page})
            }
        }
    }
</script>


<style>
</style>
