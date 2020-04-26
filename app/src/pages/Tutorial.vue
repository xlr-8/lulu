<template>
  <div class="tutorial q-pa-md">
    <div class="main">
      <!-- When the image disappear the other div move, it should remain fixed -->
      <div class="placement" v-for="(image, index) in images">
        <img v-bind:id="'img' + image.name"
            class="img"
            v-if="!image.hidden"
            v-bind:src="image.src"
            v-bind:alt="image.alt"
            @mouseover="mouseover(image)"
            @click="click(image)"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~assets/styles/animate.min.css';

.main {
  text-align: center;
  overflow: hidden;
/*  border: 1px solid #ff0000;*/
}

.img {
  border: 1px solid #0a0300;

}

.tutorial {
  height: auto !important;
  height: 100%;
}

.placement {
  border: 1px solid #0000ff;
  display: inline-block;
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
    inactivityTime(time) {
      var timeout;
      var played = false;

      window.onload = resetTimer;
      // DOM Events
      document.onmousemove = resetTimer;
      document.onkeypress = resetTimer;

      console.log("starting inactivity count");

      function help() {
        console.log("NEED HELP");
        const completed = new Audio('statics/audio/mortel.mp3');

        //completed.type = 'audio/mp3';
        completed.play();
        played = true;
      }

      function resetTimer() {
        // 1000 milliseconds = 1 second
        if (played === false) {
          clearTimeout(timeout);
          timeout = setTimeout(help, time)
        }
      }
      return timeout;
    },
    mouseover(i) {
      console.log(i.isViewed());
      i.playSound();
      i.setViewed(true);
      console.log(i.isViewed());
      if (this.images.every(function(img){ return img.isViewed() === true })) {
        console.log("do something")
      }
    },
    click(i) {
      console.log("PARAMS: ", i)
      console.log("PHONEME: ", i.phoneme)
      console.log("SEARCHING: ", this.searching)
      console.log("EVENT: ", event.target.id)

      if (i.containsPhoneme(this.searching)) {
        this.animateCSS('#' + event.target.id, "fadeOutLeft", function () { i.hidden = true})
        console.log("clicked: ", i.name)
      }
    },
    animateCSS(element, animationName, callback) {
      const node = document.querySelector(element)
      const ans = animationName.split(' ');

      node.classList.add('animated')
      for (var i = 0, length = ans.length; i < length; i++) {
        node.classList.add(ans[i]);
      }
      function handleAnimationEnd() {
          node.classList.remove('animated')
          for (var i = 0, length = ans.length; i < length; i++) {
            node.classList.remove(ans[i]);
          }
          node.removeEventListener('animationend', handleAnimationEnd)

          if (typeof callback === 'function') callback()
      }
      node.addEventListener('animationend', handleAnimationEnd)
    }
  },
	created() {
    const soundPath = "statics/audio/";
    const imagePath = "statics/images/numbers/";
    const phoneme = "e"

    let img1 = new Image("1", imagePath + "one.png", false, "image-one.png", soundPath + "good-notif.mp3", "e");
    let img2 = new Image("2", imagePath + "two.png", false, "image-two.png", soundPath + "negative-notif.mp3", "t");

    this.timeout;
    this.searching = phoneme;
    this.images = [
      img1,
      img2,
    ];
  },
 	mounted() {
    this.animateCSS("#img1", "fadeInRightBig")
    this.animateCSS("#img2", "fadeInRightBig")
    this.timeout = this.inactivityTime(5000);
  },
 data () {
   return {images: this.images}}
}

</script>
