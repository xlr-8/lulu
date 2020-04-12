<template>
  <div class="main q-pa-md">
    <div id="7" class="game" v-on:click="click($event)">
        <img v-if="!isHidden()" src="/statics/images/numbers/seven.png" alt="pic seven">
    </div>
  </div>
</template>

<style scoped>
@import '~assets/styles/animate.min.css';

.game {
  background: #FFFFFF; /* #e0e0e0;*/
}

* {
cursor: pointer;
} /*url("https://www.pngfind.com/pngs/m/362-3624445_vole-clipart-cute-mouse-mouse-clip-art-hd.png"), auto;*/

</style>

<script>

export default {
  name: 'PageGame1',
  methods: {
		isHidden() {
			return this.hidden;
		},
     hide() {
      this.hidden = true;
    },
    click(event) {
      var func = this.hide;
      this.animateCSS(".game", "fadeOutLeft slower", function() { func() })
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
	mounted() {
    this.animateCSS(".game", "fadeInRightBig")
  },
  data () { return { hidden: false }}
}

</script>
