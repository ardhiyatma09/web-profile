<template>
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
              <li class="nav-item active hel">
                <router-link to="/" class="nav-link">Hello</router-link>
              </li>
              <li class="nav-item abo">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item ski">
                <router-link to="/skill" class="nav-link tes">Skill</router-link>
              </li>
              <li class="nav-item soc">
                <router-link to="/socmed" class="nav-link">Socmed</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
