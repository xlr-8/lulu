<template>
  <div class="tutorial q-pa-md">
    <div class="main">
      <div class="placement" v-for="image in images">
        <img class="image" v-bind:src=image.src v-bind:alt=image.alt>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~assets/styles/animate.min.css';

.main {
  text-align: center;
  border: 1px solid #ff0000;
}

.image {
  border: 1px solid #0a0300;
}

.tutorial {
  height: auto !important;
  height: 100%;
}

.placement {
  display: inline-block;
  border: 1px solid #0000ff;
  margin-left: auto;
  margin-right: auto;
  padding: 130px;
}
</style>

<script>

// <img class="image" @mouseover="play(index)" src="{{ image.src }}" alt="{{ image.alt }}">

// Les images devrait etre factorisee dans des objects
// Avec:
//  * OnHover()
//  * Play()
//  * Contains(sound) bool
// Les phonemes pourraient aussi etre classe:
//  map[string]object

import { Image } from '../components/Images'

export default {
  name: 'Tutorial',
  methods: {
    mouseOver() {
      console.log("I'm OVER 1!")
      success.play();
    },
	},
	mounted() {
    const soundPath = "/statics/audio/"
    const imagePath = "/statics/images/numbers/"

    let img1 = new Image("1", imagePath + "one.png", false, "image-one.png", soundPath + "good-notif.mp3", "e");
    let img2 = new Image("2", imagePath + "two.png", false, "image-two.png", soundPath + "negativ-notif.mp3", "t");

    this.images = [
      img1,
      img2,
    ]
  },
  data () { return {images: this.images}}
}

</script>
