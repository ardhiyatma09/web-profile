<template>
    <div>
    <section class="skill_area section_gap" id="skill" style="padding:150px 0">
      <div class="banner_inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="text-uppercase text-center animate__animated animate__slideInDown">Skill individual</h1>
              <div class="content mt-5">
                <div class="my-8 animate__animated animate__fadeIn" style="font-size:20px;">
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
                        style="width:50%;background-color:rgb(7, 105, 173);"
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
    </div>
</template>

<style lang="scss">
.meter{
  height: 20px;
  position: relative;
  background : #dbd7d2;
  border-radius : 25px;
  padding : 10px;

  span{
    position : absolute;
    height : 100%;
    top : 0;
    left : 0;
    border-bottom-left-radius : 25px;
    border-top-left-radius : 25px;
  }
}
</style>