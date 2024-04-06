<template>
  <section class="book_online_form_section section_padding">
    <div class="container">
      <div class="row">
        <div class="book_online_tabs">
          <ul class="nav nav-tabs">
            <li class="active">
              <a data-toggle="tab" href="#book_online_form_1">Step 01</a>
            </li>
            <li><a data-toggle="tab" href="#book_online_form_2">Step 02</a></li>
            <li><a data-toggle="tab" href="#book_online_form_3">Step 03</a></li>
          </ul>
          <div class="tab-content">
            <div id="book_online_form_1" class="tab-pane in active">
              <div class="book_online_step_1 gray_bg">
                <label>Book An Repairmen in 2 minutes or less!</label>
                <span class="select_icon">
                  <select
                    name="select"
                    id="select"
                    class="input_half_width input_mr mb_20"
                  >
                    <option value="0">Select brand</option>
                    <option value="1">Brand 1</option>
                    <option value="2">Brand 2</option>
                    <option value="3">Brand 3</option>
                    <option value="4">Brand 4</option>
                    <option value="5">Brand 5</option>
                  </select>
                </span>
                <span class="select_icon">
                  <select
                    name="select"
                    id="select2"
                    class="input_half_width mb_20"
                  >
                    <option value="0">Select Type</option>
                    <option value="1">Type 1</option>
                    <option value="2">Type 2</option>
                    <option value="3">Type 3</option>
                    <option value="4">Type 4</option>
                    <option value="5">Type 5</option>
                  </select>
                </span>
                <input
                  type="text"
                  placeholder="Zip code"
                  class="input_half_width mb_60"
                />
                <label class="mb_0"
                  >Is your appliance Freestanding or Built-In</label
                >
                <p class="input_agree_title">
                  <span class="check">
                    <i class="fa fa-check"></i>
                  </span>
                  <span>Free Standing</span>
                </p>
                <p class="input_agree_title mb_60 mt_15">
                  <span class="check_2">
                    <i class="fa fa-check"></i>
                  </span>
                  <span>Built in</span>
                </p>
                <a class="btn-orange mb_20" href="#">Go To Next Step</a>
              </div>
              <!--end .book_online_step_1-->
            </div>
            <!--end #book_online_step_1-->
            <div id="book_online_form_2" class="tab-pane">
              <div class="book_online_step_box_2 gray_bg">
                <label class="mb_30"
                  >We can repair your appliance from tomorrow onwards.</label
                >
                <div class="book_online_step_2_flex">
                  <div class="book_online_step_2_box">
                    <h3 class="mb_40">One-off Repair</h3>
                    <ul>
                      <li>
                        <i class="fa fa-check"></i> We fix almost all makes
                        &amp; models.
                      </li>
                      <li>
                        <i class="fa fa-check"></i> Simple pricing structure
                        (just pay for parts on top).
                      </li>
                      <li>
                        <i class="fa fa-check"></i> Approved and trusted b the
                        leading manufacturers.
                      </li>
                      <li>
                        <i class="fa fa-check"></i> Six months guarantee on the
                        same fault as standard.
                      </li>
                    </ul>
                    <h3 class="price">$29.99</h3>
                    <a class="simple-btn" href="#">(parts not included)</a>
                    <a class="btn-gray" href="#">Select</a>
                  </div>
                  <!--end .book_online_step_2_box-->
                  <div class="book_online_step_2_box">
                    <h3 class="mb_40">Spread The Cost</h3>
                    <ul>
                      <li><i class="fa fa-check"></i> No fix no fee*</li>
                      <li>
                        <i class="fa fa-check"></i> Protect your appliance for a
                        low monthly fee.
                      </li>
                      <li>
                        <i class="fa fa-check"></i> Unlimited approved repairs
                        (includes all parts &amp; labour).
                      </li>
                      <li>
                        <i class="fa fa-check"></i> Covers mechanical,
                        electrical, and accidental damage.
                      </li>
                    </ul>
                    <h3 class="price">$12.99</h3>
                    <a class="simple-btn" href="#">(parts not included)</a>
                    <a class="btn-gray" href="#">Select</a>
                  </div>
                  <!--end .book_online_step_2_box-->
                </div>
                <!--end .book_online_step_2_flex-->
              </div>
              <!--end .book_online_step_box_2-->
            </div>
            <!--end .book_online_form_2-->
            <div id="book_online_form_3" class="tab-pane">
              <div class="book_online_step_3 gray_bg">
                <form action="#" method="post">
                  <label>When do you want your appliance reapired?</label>
                  <span class="select_icon">
                    <select
                      name="select"
                      id="select3"
                      class="input_mr input_half_width"
                    >
                      <option value="0">Select appointment date</option>
                      <option value="1">Date 1</option>
                      <option value="2">Date 2</option>
                      <option value="3">Date 3</option>
                      <option value="4">Date 4</option>
                    </select>
                  </span>
                  <span class="select_icon">
                    <select name="select" id="select4" class="input_half_width">
                      <option value="0">Select time</option>
                      <option value="1">Time 1</option>
                      <option value="2">Time 2</option>
                      <option value="3">Time 3</option>
                      <option value="4">Time 4</option>
                    </select>
                  </span>
                  <label>Where is your appliance located?</label>
                  <input
                    class="input_mr input_half_width"
                    type="text"
                    placeholder="Zip code"
                  />
                  <input
                    class="input_half_width"
                    type="text"
                    placeholder="Write address"
                  />
                  <label>What is wrong with your LG Freezer?</label>
                  <input
                    type="text"
                    placeholder="Describe the faults"
                    class="input_mr input_half_width"
                  />
                  <input
                    type="text"
                    placeholder="Model Number"
                    class="input_half_width"
                  />
                  <label>How can we contact you?</label>
                  <input
                    type="text"
                    placeholder="First name"
                    class="input_mb input_mr input_half_width"
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last name"
                    class="input_mb book_lastname input_half_width"
                  />
                  <input
                    type="EMAIL"
                    name="EMAIL"
                    placeholder="Email address"
                    class="input_mb input_mr input_half_width"
                  />
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Your phone"
                    class="input_mb input_half_width"
                  />
                  <textarea
                    class="input_mb"
                    name="content"
                    id="content"
                    cols="30"
                    rows="10"
                    placeholder="General booking notes"
                  ></textarea>
                  <p class="input_agree_title mb_40">
                    <span class="check">
                      <i class="fa fa-check"></i>
                    </span>
                    I agree with the <span>Teams &amp; Conditions.</span>
                  </p>
                  <a class="btn-orange" href="#">Book Repairmen</a>
                </form>
              </div>
              <!--end .book_online_step_3-->
            </div>
            <!--end .book_online_form_3-->
          </div>
          <!--end tab-content-->
        </div>
        <!--end .book_online_tabs-->
      </div>
      <!--end .row-->
    </div>
    <!--end .container-->
  </section>
</template>

<script>
export default {
  name: "BookOnline",
};
</script>

<style scoped></style>
