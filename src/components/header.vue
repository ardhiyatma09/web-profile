<template>
  <!--================ Start Header Area =================-->
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <router-link to="/"><h3>i'm ardhi</h3></router-link>
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
              <li class="nav-item">
                <router-link to="/">Hello</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/skill">Skill</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/portofolio">Portofolio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/certificate">Certificate</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/socmed">Socmed</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
h3{
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(90deg, #4d57de, #844eee);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
.nav {

  a {
    text-decoration: none;
    font:500 14px/100px "Rubik", sans-serif;
    text-transform: uppercase;
    color: #000000;
    padding: 0px;
    display: inline-block;

    &.router-link-exact-active {
      color: #4458dc;
    }
  }
  
  a:hover{
    color: #4458dc;
  }

  @media (max-width: 991px){
    
    a {
        text-decoration: none;
        line-height: 40px;
        margin-right: 0px;
        display: block;
        border-bottom: 1px solid #ededed33;
        border-radius: 0px;
        color: #fff;
    }

    a:hover{
      color: #4458dc;
    }

  }
}
</style>


