<template>
  <section class="testimonial_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title text-center">
            <h4>TESTIMONIALS</h4>
          </div>
          <!--end .hero-section-title-->
        </div>
        <!--end .col-md-12-->
        <div class="col-md-8 col-md-offset-2">
          <div class="testimonial_image text-center">
            <ul id="custom_owl_carousel_dots">
              <li class="testimonial1 active" data-x="0">
                <img
                  src="/assets/images/testimonial-0.jpg"
                  alt="testimonial img"
                />
              </li>
              <li class="testimonial2" data-x="1">
                <img
                  src="/assets/images/testimonial-1.webp"
                  alt="testimonial img"
                />
              </li>
              <li class="testimonial3" data-x="2">
                <img
                  src="/assets/images/testimonial-2.webp"
                  alt="testimonial img"
                />
              </li>
            </ul>
          </div>
          <!--end .testimonial_image-->
          <div class="testimonial_slider owl-carousel text-center">
            <div class="testimonial_details">
              <p>
                "Outstanding service! FK Aircond Services did a fantastic job
                repairing my AC unit. Their attention to detail and
                professionalism exceeded my expectations. I highly recommend
                their services."
              </p>
              <span class="rating"
                ><i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i
              ></span>
              <h3>
                Sarah Johnson<span class="skills"> / Marketing Manager</span>
              </h3>
            </div>
            <div class="testimonial_details">
              <p>
                "I was impressed by the thorough chemical cleaning FK Aircond
                Services provided for my Airconder. It's now running more
                efficiently than ever before. Thank you for your excellent
                work!"
              </p>
              <span class="rating"
                ><i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i
              ></span>
              <h3>Ahmed Khan<span class="skills"> / Business Owner</span></h3>
            </div>
            <!--end  .testimonial_details-->
            <div class="testimonial_details">
              <p>
                "FK Aircond Services installed a new Airconder in my home,
                and I couldn't be happier with the results. The installation was
                smooth, and their team was courteous and knowledgeable
                throughout the process. I will definitely use their services
                again."
              </p>
              <span class="rating"
                ><i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                <i class="fa fa-star"></i
              ></span>
              <h3>Emily Smith<span class="skills"> / Professor</span></h3>
            </div>
            <!--end .testimonial_details-->
          </div>
          <!--end .testimonial_slider-->
        </div>
        <!--end .col-md-8-->
      </div>
      <!--end .row-->
    </div>
    <!--end .container-->
  </section>
</template>

<script>
export default {
  name: 'Testimonial',
  mounted () {
    $(document).on('click', '#custom_owl_carousel_dots > li', function () {
      $('#custom_owl_carousel_dots > li.active').removeClass('active')
      $(this).addClass('active')
    })

    let Owl = {
      init: function () {
        Owl.carousel()
      },
      carousel: function () {
        let owl
        owl = $('.testimonial_slider').owlCarousel({
          items: 1,
          dots: true,
          center: true,
          autoplay: true,
          addClassActive: true,
          nav: false,
          loop: true,
          margin: 10,
          animateOut: 'slideOutDown',
          animateIn: 'slideInDown'
        })

        $('#custom_owl_carousel_dots').on('click', 'li', function (e) {
          owl.trigger('to.owl.carousel', [$(this).index(), 300])
        })
      }
    }
    Owl.init()

    let testimonial_slider = $('.testimonial_slider')
    testimonial_slider.on('changed.owl.carousel', function (e) {
      if (e.relatedTarget.current() === 2) {
        $('#custom_owl_carousel_dots > li.testimonial1').addClass('active')
      } else {
        $('#custom_owl_carousel_dots > li.testimonial1').removeClass('active')
      }
      if (e.relatedTarget.current() === 3) {
        $('#custom_owl_carousel_dots > li.testimonial2').addClass('active')
      } else {
        $('#custom_owl_carousel_dots > li.testimonial2').removeClass('active')
      }
      if (e.relatedTarget.current() === 4) {
        $('#custom_owl_carousel_dots > li.testimonial3').addClass('active')
      } else {
        $('#custom_owl_carousel_dots > li.testimonial3').removeClass('active')
      }
      if (e.relatedTarget.current() === 5) {
        $('#custom_owl_carousel_dots > li.testimonial4').addClass('active')
      } else {
        $('#custom_owl_carousel_dots > li.testimonial4').removeClass('active')
      }
      if (e.relatedTarget.current() === 6) {
        $('#custom_owl_carousel_dots > li.testimonial5').addClass('active')
      } else {
        $('#custom_owl_carousel_dots > li.testimonial5').removeClass('active')
      }
      if (e.relatedTarget.current() === 7) {
        $('#custom_owl_carousel_dots > li.testimonial6').addClass('active')
      } else {
        $('#custom_owl_carousel_dots > li.testimonial6').removeClass('active')
      }
    })
  }
}
</script>

<style scoped></style>
