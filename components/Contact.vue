<template>
  <div>
    <section
      class="contact_form_area contact_form_other_style section_padding text-center"
    >
      <div class="container section_padding">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="why_choose_us_details">
              <i class="fa fa-map-marker"></i>
              <h3>OUR MAIN OFFICE</h3>
              <p>Sunway PGS9 Bandar Sunway Subang Jaya Selangor, Malaysia.</p>
            </div>
            <!--end .why_choose_us_details-->
          </div>
          <!--end .col-md-2-->
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="why_choose_us_details">
              <i class="fa fa-phone"></i>
              <h3>Phone Numbers</h3>
              <p>+60-11-6441-8255</p>
            </div>
            <!--end .why_choose_us_details-->
          </div>
          <!--end .col-md-2-->
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="why_choose_us_details">
              <i class="fa fa-envelope"></i>
              <h3>Email</h3>
              <p>info@fkAircondservices.com</p>
            </div>
            <!--end .why_choose_us_details-->
          </div>
          <!--end .col-md-2-->
        </div>
        <!--end .row-->
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form action="#" method="POST">
                  <div class="formbold-mb-5">
                    <label for="email" class="formbold-form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email Address"
                      class="formbold-form-input"
                    />
                  </div>
                  <div class="formbold-mb-5">
                    <label for="name" class="formbold-form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                      class="formbold-form-input"
                    />
                  </div>
                  <div class="formbold-mb-5">
                    <label for="phone" class="formbold-form-label">Message</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone Message"
                      class="formbold-form-input"
                    />
                  </div>
                  <div>
                    <button class="formbold-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>

            <!--end .contact-details-->
          </div>
          <div class="col-lg-6 col-md-6">
            <h1 class="text-start">Get in touch with us</h1>
            <div class="contact-details">
              <p class="text-justify">
                "FK Aircond offers comprehensive HVAC solutions tailored to your needs.
                Our expert team provides top-notch services including air conditioner
                repair, installation, maintenance, replacement, and specialized chemical
                services. Whether you need a quick fix, a new unit installed, or routine
                maintenance, trust FK Aircond to keep your indoor climate comfortable
                year-round."
              </p>
            </div>
            <div class="contact-social">
              <ul class="social_media">
                <li>
                  <a href="https://www.facebook.com/fkaircondservices/" target="_blank"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/fkaircondservices/" target="_blank"
                    ><i class="fa fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@FKAircondServices" target="_blank"
                    ><i class="fa fa-youtube-play"></i
                  ></a>
                </li>
              </ul>
            </div>
            <!--end .contact-details-->
          </div>
          <!--end .col-md-8-->
        </div>
        <!--end .row-->
      </div>
      <!--end .container-->
    </section>
    <!--end .contact_form_area-->
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.formbold-mb-5 {
  margin-bottom: 20px;
}
.formbold-pt-3 {
  padding-top: 12px;
}
.formbold-main-wrapper {
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
}

.formbold-form-wrapper {
  margin: 0 auto;
  max-width: 550px;
  width: 100%;
  background: white;
}
.formbold-form-label {
  text-align: left;
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #07074d;
  margin-bottom: 12px;
}
.formbold-form-label-2 {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
}

.formbold-form-input {
  width: 100%;
  padding: 12px 24px;
  background: white;
  font-weight: 500;
  font-size: 16px;
  color: #6b7280;
  border: none;
  border-bottom: 2px solid black;
}
.formbold-form-input:focus {
  border-color: #b8272e;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
}

.formbold-btn {
  text-align: center;
  font-size: 16px;
  border-radius: 50px;
  padding: 14px 32px;
  border: none;
  font-weight: 600;
  background-color: #b8272e;
  color: white;
  width: 100%;
  cursor: pointer;
}
.formbold-btn:hover {
  background-color: #225685;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
}

.formbold--mx-3 {
  margin-left: -12px;
  margin-right: -12px;
}
.formbold-px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.w-full {
  width: 100%;
}
@media (min-width: 540px) {
  .sm\:w-half {
    width: 50%;
  }
}

.contact-social .social_media li {
  display: inline-block;
  margin-top: 10px;
}

.contact-social .social_media li a {
  display: block;
  background: #225685;
  color: #ffffff;
  border-radius: 50%;
  font-size: 16px;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  margin-right: 5px;
  position: relative;
  z-index: 1;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.contact-social .social_media li a:hover {
  background: #a73434;
  color: #ffffff;
}

.contact-social .social_media {
  margin-right: 7px;
}

.contact-social .social_media li a:hover:before {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.contact-social {
  display: flex;
  align-items: center;
}
</style>
