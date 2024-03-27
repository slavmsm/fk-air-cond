<template>
  <div class="gallery_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box mb_30">
            <img src="/assets/images/gallery/page_gallery_1.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery/page_gallery_1.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box mb_30">
            <img src="/assets/images/gallery_2.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery_2.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box mb_30">
            <img src="/assets/images/gallery_3.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery_3.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box mb_30">
            <img src="/assets/images/gallery_4.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery_4.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box mb_30">
            <img src="/assets/images/gallery/page_gallery_2.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery/page_gallery_2.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box mb_30">
            <img src="/assets/images/gallery/page_gallery_6.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery/page_gallery_6.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box">
            <img src="/assets/images/gallery/page_gallery_5.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery/page_gallery_5.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box">
            <img src="/assets/images/gallery/page_gallery_4.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery/page_gallery_4.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="gallery_box">
            <img src="/assets/images/gallery/page_gallery_3.jpg" alt="gallery image">
            <div class="page_gallery_overlay">
              <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery/page_gallery_3.jpg"><i class="fa fa-plus"></i></a>
            </div><!--end .page_gallery_overlay-->
          </div><!--end .gallery_box-->
        </div><!--end .col-md-4-->
      </div><!--end .row-->
    </div><!--end .container-->
  </div>
</template>

<script>
    export default {
      name: "GalleryPage",
      mounted() {
        if($(".fancybox").length) {
          $(".fancybox").fancybox();
        }
      }
    }
</script>

<style scoped>

</style>
