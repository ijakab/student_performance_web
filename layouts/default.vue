<template>
  <v-app style="background-color: #E0F2F1">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      style="background-color: #009688"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text font-weight-bold" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="teal"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text"/>
      <span class="pl-5 title white--text">Student Performance</span>
      <v-spacer></v-spacer>
      <v-btn outlined rounded color="white">log out</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!--v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2020</span>
    </v-footer-->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'dashboard',
          title: 'Admin panel',
        },
        {
          icon: 'device_hub',
          title: 'Predictive module',
          to: '/predictive_module'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
