<template>
  <div>
    <!--================ Start Header Area =================-->
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <a class="navbar-brand logo_h" href="index.html"
              ><img src="assets/img/logo.png" alt=""
            /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div
              class="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul class="nav navbar-nav menu_nav justify-content-end">
                <li class="nav-item active">
                  <a class="nav-link" href="#hello">Hello</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link tes" href="#skill">Skill</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#socmed">Socmed</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!--================ End Header Area =================-->

    <!--================ Start Home Banner Area =================-->
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
    <!--================ End Home Banner Area =================-->

    <!--================ Start About Us Area =================-->
    <section class="about_area section_gap" id="about">
      <div class="container">
        <div class="row justify-content-start align-items-center">
          <div class="col-lg-5">
            <div class="about_img">
              <img class="" src="assets/img/about-us.png" alt="" />
            </div>
          </div>

          <div class="offset-lg-1 col-lg-5">
            <div class="main_title text-left">
              <h2>
                let’s <br />
                Introduce about <br />
                myself
              </h2>
              <p>
                Hello, my fullname is
                <span style="font-weight:600;color:rgb(68, 87, 220)"
                  >Ardhiyatma Raditya Wibawa</span
                >. I am a Junior Web Developer. Graduated from school in 2019
              </p>
              <p>
                Dah gitu aja, masih bingung ngerangkai kata kata hehehe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================ End About Us Area =================-->

    <!--================ Start Skill Area =================-->
    <section class="skill_area section_gap" id="skill">
      <div class="banner_inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="text-uppercase text-center">Skill individual</h1>
              <div class="content mt-5">
                <div class="my-8" style="font-size:20px;">
                  <div class="flex mb-4">
                    <i class="devicon-laravel-plain-wordmark colored"></i
                    ><span> Laravel</span>
                    <div class="meter mt-3">
                      <span
                        style="width:80%;background-color:rgb(229,77,38);"
                      ></span>
                    </div>
                  </div>
                  <div class="flex mb-4">
                    <i class="devicon-php-plain colored"></i><span> PHP</span>
                    <div class="meter mt-3">
                      <span
                        style="width:70%;background-color:rgb(68, 87, 220);"
                      ></span>
                    </div>
                  </div>
                  <div class="flex mb-4">
                    <i class="devicon-vuejs-plain colored"></i
                    ><span> VueJS</span>
                    <div class="meter mt-3">
                      <span
                        style="width:10%;background-color:rgb(65, 184, 131);"
                      ></span>
                    </div>
                  </div>
                  <div class="flex mb-4">
                    <i class="devicon-jquery-plain colored"></i
                    ><span> jQuery</span>
                    <div class="meter mt-3">
                      <span
                        style="width:70%;background-color:rgb(7, 105, 173);"
                      ></span>
                    </div>
                  </div>
                  <div class="flex mb-4">
                    <i class="devicon-bootstrap-plain colored"></i
                    ><span> Bootstrap</span>
                    <div class="meter mt-3">
                      <span
                        style="width:75%;background-color:rgb(96, 44, 80);"
                      ></span>
                    </div>
                  </div>
                  <div class="flex mb-4">
                    <i class="devicon-python-plain colored"></i
                    ><span> Python</span>
                    <div class="meter mt-3">
                      <span
                        style="width:20%;background-color:rgb(255, 212, 59);"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================ End Skill Area =================-->

    <!--================ Start Features Area =================-->
    <section class="features_area" id="socmed">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="main_title">
              <h2>My Social Media</h2>
            </div>
          </div>
        </div>
        <div class="row feature_inner">
          <div class="col-lg-3 col-md-6">
            <a href="https://www.instagram.com/ardhiyatmar/" target=”_blank”>
              <div class="feature_item">
                <img src="assets/img/services/s1.png" alt="" />
                <h4 style="text-lowercase">instagram</h4>
                <p>
                  @ardhiyatmar
                </p>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="https://twitter.com/ardhiyatmar" target=”_blank”>
              <div class="feature_item">
                <img src="assets/img/services/s2.png" alt="" />
                <h4>twitter</h4>
                <p>
                  @ardhiyatmar
                </p>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="https://www.facebook.com/ardiyatma.timnas" target=”_blank”>
              <div class="feature_item">
                <img src="assets/img/services/s3.png" alt="" />
                <h4>facebook</h4>
                <p>
                  Ardiyatma
                </p>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="https://github.com/ardhiyatma09" target=”_blank”>
              <div class="feature_item">
                <img src="assets/img/services/s4.png" alt="" />
                <h4>github</h4>
                <p>
                  @ardhiyatma09
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--================ End Features Area =================-->

    <!--================ End Testimonial Area =================-->

    <!--================ Start Newsletter Area =================-->
  </div>
</template>

<style lang="sass" scoped>
.meter
  height: 20px
  position: relative
  background : #dbd7d2
  border-radius : 25px
  padding : 10px
  span
    position : absolute
    height : 100%
    top : 0
    left : 0
    border-bottom-left-radius : 25px
    border-top-left-radius : 25px
</style>

<script>
export default {
  name: "about",
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

      $("a[href*=\\#]:not([href=\\#])").on("click", function() {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.substr(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      });
    });
  },
};
</script>
