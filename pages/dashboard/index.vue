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
            <v-flex xs12 mt-3>
              <v-text-field outlined hide-details style="background-color: white" color="white"></v-text-field>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-list two-line v-for="user in users" :key="user.id">
              <v-list-item>
                <v-list-item-avatar size="64">
                  <v-avatar color="#E0F2F1"><span class="font-weight-black">{{user.firstname.charAt(0)}}{{user.lastname.charAt(0)}}</span></v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{user.firstname}} {{user.lastname}}</v-list-item-title>
                  <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-flex xs12>
                    <v-icon v-if="type=='admin'">device_hub</v-icon>
                    <v-icon>edit</v-icon>
                    <v-icon @click="openConfirmDialog(user.id)">delete</v-icon>
                  </v-flex>

                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-pagination
          v-model="pagination.page"
          :length="pagination.lastPage"
          circle
          color="teal"
        ></v-pagination>
      </v-flex>
    </v-layout>

    <template>
      <v-dialog v-model="confirmDialog" width="450">
        <v-card style="border-radius: 8px">
          <v-card-title style="background-color: #009688"><span class="white--text headline">Delete user</span></v-card-title>
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
    export default {
        data() {
            return {
                type: '',
                confirmDialog: false,
                deleteId: null,
            }
        },

        mounted(){
            this.$store.dispatch("users/getUsers", {page: 1})
            this.type=jsCookie.get("type")
        },

        computed:{
            ...mapState("users", ["users", "pagination"])
        },

        methods:{
            openConfirmDialog(id){
                this.deleteId=id;
                this.confirmDialog=true;
            },

            async deleteUser(){
                try{
                    await this.$axios.delete(`user/delete/${this.deleteId}`)
                    this.confirmDialog=false
                    this.$store.dispatch("users/getUsers", {page: this.page})
                }catch(err){
                    console.log(err)
                }
            }
        }
    }
</script>


<style>
</style>
