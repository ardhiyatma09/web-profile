<template>
  <div>
    <section class="home_banner_area">
      <div class="banner_inner" id="hello">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="banner_content">
                <h3 class="text-uppercase">Hell0</h3>
                <h1 class="text-uppercase">I am Ardhiyatma</h1>
                <h5 class="text-uppercase">Web Developer</h5>
                <div class="d-flex align-items-center">
                  <a class="primary_btn tr-bg" href="#"><span>Get CV</span></a>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="home_right_img">
                <img class="" src="assets/img/banner/home-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

// <script>
// export default {
//   name: "about",
//   mounted() {
//     this.$nextTick(() => {
//       var nav_offset_top = $("header").height() + 50;
//       if ($(".header_area").length) {
//         $(window).scroll(function() {
//           var scroll = $(window).scrollTop();
//           if (scroll >= nav_offset_top) {
//             $(".header_area").addClass("navbar_fixed");
//           } else {
//             $(".header_area").removeClass("navbar_fixed");
//           }
//         });
//       }

//       $("a[href*=\\#]:not([href=\\#])").on("click", function() {
//         var target = $(this.hash);
//         target = target.length
//           ? target 
//           : $("[name=" + this.hash.substr(1) + "]");
//         if (target.length) {
//           $("html,body").animate(
//             {
//               scrollTop: target.offset().top,
//             },
//             1000
//           );
//           return false;
//         }
//       });
//     });
//   },
// };
// </script>
