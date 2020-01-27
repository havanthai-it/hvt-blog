<template>
  <div id="post">
    <div class="header-image">
      <div class="container"></div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-left">
          <div class="post">
            <div class="post-title">{{ post.title }}</div>

            <div class="post-date">
              <i class="fa fa-calendar-o"></i>
              {{ post.date }}
            </div>

            <div class="post-content" v-html="post.content"></div>
          </div>
        </div>
        <div class="col-lg-3 col-right">
          <h3 style="color: #000;">Recent Posts</h3>
          <div>
            <div class="post-card">
              <div class="card-thumbnail">
                <img src="@/assets/images/thumbnail.png" />
              </div>
              <div class="card-title">
                <a href="#">Here is why your page is so slow?</a>
              </div>
            </div>

            <div class="post-card">
              <div class="card-thumbnail">
                <img src="@/assets/images/thumbnail.png" />
              </div>
              <div class="card-title">
                <a href="#">Here is why your page is so slow?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Post.js"></script>
<style lang="scss" src="./Post.scss" scoped></style>
