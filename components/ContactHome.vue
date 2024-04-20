<template>
  <section class="contact_form_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contact-details">
            <div class="hero-section-title">
              <i class="icon-snowflake"></i>
              <h4>BOOK APPOINTMENT</h4>
              <h1>Get a free quote</h1>
            </div>
            <!--end .hero-section-title-->
            <form action="#" method="post">
              <input
                class="gray_bg input_half_width input_mr"
                type="text"
                name="name"
                placeholder="Full name"
              />
              <input
                class="gray_bg input_half_width"
                type="EMAIL"
                name="email"
                placeholder="Your email"
              />
              <input
                class="gray_bg input_half_width input_mr"
                type="tel"
                name="tel"
                placeholder="Phone"
              />
              <input
                class="gray_bg input_half_width"
                type="text"
                name="zipcode"
                placeholder="Location"
              />
              <span class="select_icon">
                <select class="gray_bg contact_select" name="select" id="select">
                  <option value="select-a-service">Select a service</option>
                  <option value="1">Repairing</option>
                  <option value="2">Installation</option>
                  <option value="3">Maintenance</option>
                  <option value="4">Replacement</option>
                  <option value="5">Chemical Services</option>
                </select>
              </span>
              <textarea
                class="gray_bg"
                name="content"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Write message"
              ></textarea>
              <button class="btn-orange" type="submit" value="Request a Quote Now">
                Request a Quote Now
              </button>
            </form>
          </div>
          <!--end .contact_details-->
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
  name: "ContactHome",
};
</script>

<style scoped></style>
