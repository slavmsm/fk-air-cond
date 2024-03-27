<template>
  <section class="faq_area section_padding gray_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title text-center">
            <i class="icon-snowflake"></i>
            <h4>OUR FAQS</h4>
            <h1>Question &amp; answers</h1>
          </div><!--end .hero-section-title-->
        </div><!--end .col-md-12-->
      </div><!--end .row-->
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <div class="faq_accordions_img"></div><!--end .faq_accordions_img-->
        </div><!--end .col-md-6-->
        <div class="col-md-6 col-sm-6">
          <div class="faq_accordions">
            <div id="faq" role="tablist" aria-multiselectable="true">

              <div class="panel card">
                <div role="tab" id="questionOne">
                  <h5 class="card-header">
                    <a class="card-link" data-toggle="collapse" data-parent="#faq" href="#answerOne" aria-expanded="false" aria-controls="answerOne">
                      Things to expect from your fridge repair service
                      <i class="fa fa-plus"></i>
                      <i class="fa fa-minus"></i>
                    </a>
                  </h5>
                </div><!--end #questionOne-->
                <div id="answerOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="questionOne">
                  <div class="panel-body card-body">
                    Lorem Ipsum is simply dummy text of not the print type setting industry has been the standard dummy.
                  </div><!--end .panel-body-->
                </div><!--end #answerOne-->
              </div><!--end .panel-->

              <div class="panel card">
                <div role="tab" id="questionTwo">
                  <h5 class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" data-parent="#faq" href="#answerTwo" aria-expanded="false" aria-controls="answerTwo">
                      Do you supply original parts for refrigerator
                      <i class="fa fa-plus"></i>
                      <i class="fa fa-minus"></i>
                    </a>
                  </h5>
                </div><!--end #questionTwo-->
                <div id="answerTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionTwo">
                  <div class="panel-body card-body">
                    Lorem Ipsum is simply dummy text of not the print type setting industry has been the standard dummy.
                  </div><!--end .panel-body-->
                </div><!--end #answerTwo-->
              </div><!--end .panel-->

              <div class="panel card">
                <div role="tab" id="questionThree">
                  <h5 class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" data-parent="#faq" href="#answerThree" aria-expanded="true" aria-controls="answerThree">
                      Reliable work from experts of their trade
                      <i class="fa fa-plus"></i>
                      <i class="fa fa-minus"></i>
                    </a>
                  </h5>
                </div><!--end #questionThree-->
                <div id="answerThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionThree">
                  <div class="panel-body card-body">
                    Lorem Ipsum is simply dummy text of not the print type setting industry has been the standard dummy.
                  </div><!--end .panel-body-->
                </div><!--end .answerThree-->
              </div><!--end .panel-->

              <div class="panel card">
                <div role="tab" id="questionFour">
                  <h5 class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" data-parent="#faq" href="#answerFour" aria-expanded="true" aria-controls="answerFour">
                      Which London areas do you serve?
                      <i class="fa fa-plus"></i>
                      <i class="fa fa-minus"></i>
                    </a>
                  </h5>
                </div><!--end #questionFour-->
                <div id="answerFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionFour">
                  <div class="panel-body card-body">
                    Lorem Ipsum is simply dummy text of not the print type setting industry has been the standard dummy.
                  </div><!--end .panel-body-->
                </div><!--end .answerFour-->
              </div><!--end .panel-->

            </div><!--end #faq-->
          </div><!--end .faq_accordions-->
        </div><!--end .col-md-6-->
      </div><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
    export default {
      name: "Faq"
    }
</script>

<style scoped>

</style>
