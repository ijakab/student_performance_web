<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-card style="border-radius: 16px">
          <v-card-title style="background-color: #009688">
            <v-avatar color="white">
              <v-icon large color="black">face</v-icon>
            </v-avatar>
            <span class="headline white--text font-weight-bold pl-3 pr-3">{{user.firstname}} {{user.lastname}}</span>
            <v-chip small class="white--text" color="red" v-if="user.role==='admin'">{{user.role}}</v-chip>
            <v-chip small class="white--text" color="blue" v-if="user.role==='teacher'">{{user.role}}</v-chip>
            <v-chip small class="white--text" color="green" v-if="user.role==='student'">{{user.role}}</v-chip>
          </v-card-title>
          <v-card-text>
            <v-layout row class="pa-5">
              <v-flex xs6><span class="subtitle-2">Username:</span></v-flex>
              <v-flex xs6><span class="subtitle-2">Email:</span></v-flex>
              <v-flex xs6><span class="subtitle-1">{{user.username}}</span></v-flex>
              <v-flex xs6>
                <span class="subtitle-1"> {{user.email}}</span>
                <a :href="`mailto:` + user.email">
                  <v-icon class="mb-1">mail</v-icon>
                </a>
              </v-flex>
              <v-flex xs12 py-4></v-flex>
              <v-flex xs6><span class="subtitle-2">Registration date:</span></v-flex>
              <v-flex xs6><span class="subtitle-2" v-if="user.role==='student'">Predicted performance:</span></v-flex>
              <v-flex xs6><span class="subtitle-1">{{$moment(user.created_at).format('DD. MMMM YYYY')}}</span></v-flex>
              <v-flex xs6 pr-5>
                <v-progress-linear
                  v-if="user.role==='student'"
                  class="mt-2"
                  :value="performance"
                  height="10"
                  striped
                  rounded
                  color="green"
                ></v-progress-linear>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ma-3 white--text" rounded outlined color="teal" @click="$router.go(-1)">Back</v-btn>
          </v-card-actions>
        </v-card>
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
                loading: true,
                user: {}
            }
        },

        async mounted() {
            try {
                let res = await this.$axios.get("user/get/" + this.$route.params.singleUser)
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

        computed: {
            performance() {
                return this.user.details.G3 * 100
            }
        }
    }
</script>
