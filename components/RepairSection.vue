<template>
  <section class="repair_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="repair_details">
            <div class="hero-section-title">
              <i class="icon-snowflake"></i>
              <h4>HOW WE REPAIR</h4>
              <h1>BioAire Air Cond Solutions</h1>
            </div>
            <!--end .hero-section-title-->
            <p>
              At FK Airconds, we are driven by customer satisfaction. One way we deliver
              that is through expert refrigerator repair! We service all types of
              refrigerators, including top freezer, bottom freezer, French door, ice
              maker, salad bars, compact, and more. We can also replace or repair any part
              on your regrigerator.
            </p>
            <a class="btn-orange" href="#">Contact Us</a>
          </div>
          <!--end .repair_details-->
        </div>
        <!--end .col-md-6-->
        <div class="col-md-6">
          <div class="repair_details_right text-right">
            <img src="/assets/images/repair.jpg" alt="repair image" />
            <!-- <a
              href="#videostore2"
              class="video-img"
              data-video="https://www.youtube.com/embed/A7ZkZazfvao"
              title="Play Icon"
              id="videolink2"
            >
              <i class="fa fa-play"></i>
            </a>
            <div id="videostore2" class="mfp-hide text-center">
              <iframe
                width="500"
                height="500"
                src="https://www.youtube.com/embed/A7ZkZazfvao"
                allow="autoplay;encrypted-media"
                allowfullscreen
              ></iframe>
            </div> -->
            <!--end #videostore2-->
          </div>
          <!--end .repair_details_right-->
        </div>
        <!--end .col-md-6-->
      </div>
      <!--end .row-->
    </div>
    <!--end .container-->
  </section>
</template>

<script>
export default {
  name: "RepairSection",
  mounted() {
    $("#videolink2").magnificPopup({
      type: "inline",
      midClick: true,
    });
  },
};
</script>

<style scoped></style>
