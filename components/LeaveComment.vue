<template>
  <div>
    <section
      class="contact_form_area contact_form_other_style section_padding text-center"
    >
      <div class="container">
        <div class="row">
          <div class="">
            <h1 class="text-start">Leave A Comment</h1>
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
                    <label for="phone" class="formbold-form-label"
                      >Comment</label
                    >
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Write your Comment"
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
  name: "LeaveCommentForm",
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
