<template>
  <section class="latest_blog_area section_padding text-center gray_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title">
            <i class="icon-snowflake"></i>
            <h4>NEWS AND UPDATES</h4>
            <h1>Recent blog posts</h1>
          </div><!--end .hero-section-title-->
        </div><!--end .col-md-12-->
      </div><!--end .row-->
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="latest_share_blog_box">
            <div class="latest_share_img_box">
              <img src="/assets/images/blog2.jpg" alt="blog img">
              <span class="blog_date">Aug 30, 2019</span>
            </div>
            <nuxt-link to="/blog-details"><h1>Commercial refrigerator door & gasket repair</h1></nuxt-link>
            <p>If the seal on your commercial refrigerator is old, or it’s simply not working properly.</p>
          </div><!--end .latest_share_blog-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="latest_share_blog_box">
            <div class="latest_share_img_box">
              <img src="/assets/images/blog1.jpg" alt="blog img">
              <span class="blog_date">Aug 28, 2019</span>
            </div>

            <nuxt-link to="/blog-details"><h1>Refrigerator is making strange noises</h1></nuxt-link>
            <p>If the seal on your commercial refrigerator is old, or it’s simply not working properly.</p>
          </div><!--end .latest_share_blog-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="latest_share_blog_box">
            <div class="latest_share_img_box">
              <img src="/assets/images/blog3.jpg" alt="blog img">
              <span class="blog_date">Aug 20, 2019</span>
            </div>

            <nuxt-link to="/blog-details"><h1>Free standing and integrated freezers</h1></nuxt-link>
            <p>If the seal on your commercial refrigerator is old, or it’s simply not working properly.</p>
          </div><!--end .latest_share_blog-->
        </div><!--end .col-md-4-->
      </div><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
    export default {
      name: "BlogRecent"
    }
</script>

<style scoped>

</style>
