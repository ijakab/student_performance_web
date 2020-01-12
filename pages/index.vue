<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md6 lg4 xl3>
        <v-card max-width="500" style="border-radius: 16px">
          <v-card-title style="background-color: #009688" class="white--text headline font-weight-bold">Login
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field v-model="user.username" label="Username" color="teal"/>
            <v-text-field v-model="user.password" label="Password" color="teal"/>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mr-2 mt-1 white--text" rounded depressed color="teal">login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
    export default {
        layout: 'empty',
        data() {
            return {
                user: {
                    username: "",
                    password: ""
                }
            }
        }
    }
</script>
