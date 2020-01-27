<template>
  <nav id="header">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-5 logo-wrapper">
            <span>Ha Van Thai</span>
          </div>
          <div class="col-md-7 nav-horizontal">
            <ul class="nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div
            class="col-md-7 nav-vertical"
            id="nav-vertical"
            :style="{ height: navWrapperHeight + 'px' }"
          >
            <ul class="nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="menu-wrapper" @click="toggleVerticalNav">
            <i class="fa fa-bars"></i>&nbsp;
            <span>Menu</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script src="./Header.js"></script>
<style lang="scss" src="./Header.scss" scoped></style>
