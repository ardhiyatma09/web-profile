<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header.vue';


export default {
  components:{
    'app-header':header
  },
  mounted() {
    this.$nextTick(() => {
      var nav_offset_top = $("header").height() + 50;
      if ($(".header_area").length) {
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= nav_offset_top) {
            $(".header_area").addClass("navbar_fixed");
          } else {
            $(".header_area").removeClass("navbar_fixed");
          }
        });
      }
    });
  },
}
</script>


