<template>
  <div class="hv2_gallery_area">
    <div class="hv2_gallery_box">
      <div class="hv2_gallery_overlay">
        <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery_1.jpg"><i class="fa fa-plus"></i></a>
      </div><!--end .hv2_gallery_overlay-->
    </div><!--end .hv2_gallery_box-->
    <div class="hv2_gallery_box hv2_gallery_bg_2">
      <div class="hv2_gallery_overlay">
        <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery_2.jpg"><i class="fa fa-plus"></i></a>
      </div><!--end .hv2_gallery_overlay-->
    </div><!--end .hv2_gallery_box-->
    <div class="hv2_gallery_box hv2_gallery_bg_3">
      <div class="hv2_gallery_overlay">
        <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery_3.jpg"><i class="fa fa-plus"></i></a>
      </div><!--end .hv2_gallery_overlay-->
    </div><!--end .hv2_gallery_box-->
    <div class="hv2_gallery_box hv2_gallery_bg_4">
      <div class="hv2_gallery_overlay">
        <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery_4.jpg"><i class="fa fa-plus"></i></a>
      </div><!--end .hv2_gallery_overlay-->
    </div><!--end .hv2_gallery_box-->
    <div class="hv2_gallery_box hv2_gallery_bg_5">
      <div class="hv2_gallery_overlay">
        <a class="fancybox" data-fancybox-group="group" href="/assets/images/gallery_5.jpg"><i class="fa fa-plus"></i></a>
      </div><!--end .hv2_gallery_overlay-->
    </div><!--end .hv2_gallery_box-->
  </div>
</template>

<script>
    export default {
      name: "Gallery",
      mounted() {
        if($(".fancybox").length) {
          $(".fancybox").fancybox();
        }
      }
    }
</script>

<style scoped>

</style>
