<template>
  <div class="q-pa-md">
    <div class="row justify-center text-center">
      <div @click="click(0)" class="col-auto advert-img">
        <img v-if="!getPic(0).hidden" :src="path + getPic(0).src" :alt="getPic(0).alt">
      </div>
      <div @click="click(1)" class="col-auto advert-img">
        <img v-if="!getPic(1).hidden" :src="path + getPic(1).src" alt="getPic(1).alt">
      </div>
      <div @click="click(2)" class="col-auto advert-img">
        <img v-if="!getPic(2).hidden" :src="path + getPic(2).src" alt="getPic(2).alt">
      </div>
    </div>

    <div class="row justify-center full-height full-width text-center">
      <div @click="click(3)" class="col-auto advert-img">
        <img v-if="!getPic(3).hidden" :src="path + getPic(3).src" alt="getPic(3).alt">
      </div>
      <div @click="click(4)" class="col-auto advert-img">
        <img v-if="!getPic(4).hidden" :src="path + getPic(4).src" alt="getPic(4).alt">
      </div>
      <div @click="click(5)" class="col-auto advert-img">
        <img v-if="!getPic(5).hidden" :src="path + getPic(5).src" alt="getPic(5).alt">
      </div>
    </div>

    <div class="row justify-center full-height full-width text-center">
      <div @click="click(6)" class="col-auto advert-img">
        <img v-if="!getPic(6).hidden" :src="path + getPic(6).src" alt="getPic(6).alt">
      </div>
      <div @click="click(7)" class="col-auto advert-img">
        <img v-if="!getPic(7).hidden" :src="path + getPic(7).src" alt="getPic(7).alt">
      </div>
      <div @click="click(8)" class="col-auto advert-img">
        <img v-if="!getPic(8).hidden" :src="path + getPic(8).src" alt="getPic(8).alt">
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.row > div
  width: 30%
  height: 250px
.row + .row
  margin-top: 1rem
img
  max-width: 50%
  height: auto
</style>

<script>

import CompA from 'components/CompA'

const completed = new Audio('statics/audio/mortel.mp3')
const success = new Audio('statics/audio/good-notif.mp3')
const fail = new Audio('statics/audio/negative-notif.mp3')

completed.type = 'audio/mp3';
success.type = 'audio/mp3';
fail.type = 'audio/mp3';

export default {
  name: 'PageGame1',
  components: {
    CompA
  },
  methods: {
    generateIndices() {
      while (this.randomIndices.length < 9) {
        let ri = Math.floor(Math.random() * this.images.length)
        if (!this.randomIndices.includes(ri)) {
          this.randomIndices.push(ri)
        }
      }
    },
    getPath() {
      return '/statics/'
    },
    getPic(index) {
      return this.images[this.randomIndices[index]]
    },
    click(index) {
      console.log("CLICK")
      this.$root.$emit('event')
      this.$parent.$emit('event')
      this.$emit('event')
      let i = 0

      if (this.images[this.randomIndices[index]].hidden === true) {
        return;
      }
      for (i = 0; i < this.randomIndices[index] && this.images[i].hidden === true; i++) {
      }
      if (i === this.randomIndices[index]) {
        this.images[i].hidden = true
        if (i+1 === this.images.length) {
          completed.play()
        } else {
          success.play()
        }
      } else {
        fail.play()
      }
    }
  },
  created() {
    this.generateIndices();
  },
  data () {
    return {
      path: '/statics/',
      images: [
        {src: 'one.png'  , hidden: false, alt: 'picture one' },
        {src: 'two.png'  , hidden: false, alt: 'picture two' },
        {src: 'three.png', hidden: false, alt: 'picture three' },
        {src: 'four.png' , hidden: false, alt: 'picture four' },
        {src: 'five.png' , hidden: false, alt: 'picture five' },
        {src: 'six.png'  , hidden: false, alt: 'picture six' },
        {src: 'seven.png', hidden: false, alt: 'picture seven' },
        {src: 'eight.png', hidden: false, alt: 'picture eight' },
        {src: 'nine.png' , hidden: false, alt: 'picture nine' }
      ],
      randomIndices: [],
    }
  }
}
</script>

