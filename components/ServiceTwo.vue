<template>
  <section
    class="service_style_2_area pt_0 hv2_service_with_details section_padding text-center gray_bg"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about_with_contact_form">
            <h1>Get a Free Quote Today!</h1>
            <form action="#" method="post">
              <div class="row">
                <div class="col-md-4 pr_12">
                  <div class="input-group">
                    <input type="text" name="fname" placeholder="First name" />
                  </div>
                  <!--end .input-group-->
                </div>
                <!--end .col-md-4-->
                <div class="col-md-4 pr_12 pl_12">
                  <div class="input-group">
                    <input type="text" name="lname" placeholder="Last name" />
                  </div>
                  <!--end .input-group-->
                </div>
                <!--end .col-md-4-->
                <div class="col-md-4 pl_12">
                  <div class="input-group">
                    <input placeholder="Your email" type="EMAIL" name="email" />
                  </div>
                  <!--end .input-group-->
                </div>
                <!--end .col-md-4-->
                <div class="col-md-4 pr_12">
                  <div class="input-group">
                    <input type="tel" name="tel" placeholder="Phone" />
                  </div>
                  <!--end .input-group-->
                </div>
                <!--end .col-md-4-->
                <div class="col-md-4 pr_12 pl_12">
                  <div class="input-group">
                    <span class="select_icon">
                      <select name="select" id="select">
                        <option value="select-a-service">
                          Select a service
                        </option>
                        <option value="service-1">Service 1</option>
                        <option value="service-2">Service 2</option>
                        <option value="service-3">Service 3</option>
                        <option value="service-4">Service 4</option>
                        <option value="service-5">Service 5</option>
                      </select>
                    </span>
                  </div>
                  <!--end .input-group-->
                </div>
                <!--end .col-md-4-->
                <div class="col-md-4 pl_12">
                  <div class="input-group">
                    <input type="text" placeholder="Zip code" />
                  </div>
                  <!--end .input-group-->
                </div>
                <!--end .col-md-4-->
                <div class="col-md-12">
                  <div class="input-group">
                    <textarea
                      name="textarea"
                      id="textarea"
                      cols="30"
                      rows="10"
                      placeholder="Write message"
                    ></textarea>
                    <button class="btn-orange" value="Request a Quote Now">
                      Request a Quote Now
                    </button>
                  </div>
                  <!--end .input-group-->
                </div>
                <!--end .col-md-12-->
              </div>
              <!--end .row-->
            </form>
          </div>
          <!--end .about_with_contact_form-->
        </div>
        <!--end .col-md-12-->
      </div>
      <!--end .row-->
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title">
            <i class="icon-snowflake"></i>
            <h4>WHAT WE DO</h4>
            <h1>Services we offer</h1>
          </div>
          <!--end .hero-section-title-->
        </div>
        <!--end .col-md-12-->
      </div>
      <!--end .row-->
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="service_style_2_details">
            <i class="icon-freezer"></i>
            <nuxt-link to="/service-refrigerator"><h2>Ice Maker</h2></nuxt-link>
            <p class="mb_50">
              We are specialized in repairing your refrigerators. We promise to
              deliver satisfaction.
            </p>
            <nuxt-link class="btn-blue" to="/service-refrigerator"
              >Read More</nuxt-link
            >
          </div>
          <!--end .service_style_2_details-->
        </div>
        <!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="service_style_2_details">
            <i class="icon-FK Air Cons-side-by-side"></i>
            <nuxt-link to="/service-refrigerator"
              ><h2>Refrigerator</h2></nuxt-link
            >
            <p class="mb_50">
              We are specialized in repairing your refrigerators. We promise to
              deliver satisfaction.
            </p>
            <a class="btn-blue" href="/service-refrigerator">Read More</a>
          </div>
          <!--end .service_style_2_details-->
        </div>
        <!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="service_style_2_details">
            <i class="icon-fridge"></i>
            <nuxt-link to="/service-refrigerator"
              ><h2>Cold Coolers</h2></nuxt-link
            >
            <p class="mb_50">
              We are specialized in repairing your refrigerators. We promise to
              deliver satisfaction.
            </p>
            <nuxt-link class="btn-blue" to="/service-refrigerator"
              >Read More</nuxt-link
            >
          </div>
          <!--end .service_style_2_details-->
        </div>
        <!--end .col-md-4-->
      </div>
      <!--end .row-->
    </div>
    <!--end .container-->
  </section>
</template>

<script>
export default {
  name: "ServiceTwo",
};
</script>

<style scoped></style>
