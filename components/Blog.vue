<template>
  <section class="latest_blog_area section_padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="latest_share_blog_box mb_40">
            <div class="latest_share_img_box">
              <img src="/assets/images/blog2.jpg" alt="blog image">
              <span class="blog_date">Aug 30, 2019</span>
            </div><!--end .latest_share_img_box-->
            <nuxt-link to="/blog-details">
              <h1>Refrigerator door &amp; gasket repair</h1>
            </nuxt-link>
            <p>If the seal on your commercial refrigerator is old, or it’s simply not working properly.</p>
          </div><!--end .latest_share_blog_box-->
        </div><!--end .col-md-4-->
      </div><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style scoped></style>
