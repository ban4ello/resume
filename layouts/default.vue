<template>
  <v-app dark class="overflow-hidden">
    <!-- <v-app-bar
      color="accent"
      app
      fixed
    >
      <div v-if="!isMobile" class="menu_items">
        <span v-for="(item, i) of menu" :key="i" v-scroll-to="`#${item}`" class="menu_item">
          {{ item }}
        </span>
      </div>

      <v-app-bar-nav-icon v-else @click="drawer = !drawer" />

      <v-spacer />

      <v-app-bar-title>Resume of Ivan Miroshnichenko</v-app-bar-title>

      <div class="ml-4 pointer" @click="swap">
        <v-icon v-if="theme === 'dark'">
          mdi-brightness-6
        </v-icon>
        <v-icon v-else>
          mdi-brightness-4
        </v-icon>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      color="accent"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group" class="mobile_menu">
          <v-list-item v-for="(item, i) of menu" :key="i" v-scroll-to="`#${item}`">
            <v-list-item-title>
              <span class="menu_item">{{ item }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app color="accent" class="d-flex justify-center">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data () {
    return {
      group: null,
      drawer: false,
      menu: ['summary', 'skills', 'hobby', 'experience', 'contacts']
    }
  },

  computed: {
    theme () {
      return this.$vuetify.theme.isDark ? 'dark' : 'light'
    },
    isMobile () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    }
  },

  mounted () {
    this.$yandexMetrika.reachGoal('my-goal')

    // this.$yandexMetrika.setUserParams({
    //   userId: '12345'
    // })
  },

  methods: {
    touchAll () {
      const value = this.$vuetify.theme.themes[this.theme]
      this.$vuetify.theme.themes[this.theme] = {}
      this.$vuetify.theme.themes[this.theme] = value
    },

    swap () {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark

      // necessary to reset colors after changing the theme, perhaps a Vuetify.js bug
      this.touchAll(1)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu_items {
  display: flex;
  gap: 20px;
}

.menu_item {
  text-decoration: none;
  text-transform: capitalize;
}

.mobile_menu .v-list-item__title {
  font-size: 1.2em;
}

.v-application {
  background: rgb(17,125,76);
  background: radial-gradient(circle, rgba(17,125,76,1) 15%, rgba(2,0,36,1) 55%, rgba(0,110,133,1) 100%);
}
</style>
<style lang="scss">
.v-toolbar__content {
  max-width: 1170px;
  margin: 0 auto;
}
</style>
