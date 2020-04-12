<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Lulu App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- DRAWER -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Games Links</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- PAGE -->
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <!-- FOOTER -->
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style scoped>
* {
  cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"), auto;
/*	cursor: url("https://www.pngfind.com/pngs/m/362-3624445_vole-clipart-cute-mouse-mouse-clip-art-hd.png"), auto;*/
}
</style>


<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Home page',
          icon: 'school',
          link: '/'
        },
        {
          title: 'Game 1',
          caption: 'Test the first game!',
          icon: 'school',
          link: 'game1'
        },
        {
          title: 'Game 2',
          caption: 'Test the second game!',
          icon: 'school',
          link: 'game2'
        }
      ]
    }
  }
}
</script>
