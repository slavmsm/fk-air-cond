<template>
  <section class="about_repair_style_2 repair_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="repair_details">
            <div class="hero-section-title">
              <i class="icon-snowflake"></i>
              <h4>HOW WE REPAIR</h4>
              <h1>BioAire Air Cond Solutions</h1>
            </div>
            <p>
              At FK Airconds, we are driven by customer satisfaction. One way we deliver
              that is through expert refrigerator repair! We service all types of
              refrigerators, including top freezer, bottom freezer, French door, ice
              maker, salad bars, compact, and more. We can also replace or repair any part
              on your refrigerator.
            </p>
            <a class="btn-orange" href="#">Contact Us</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-grid">
            <div class="grid-row">
              <div>
                <img src="/assets/images/ac-install.png" alt="about image" />
                <p>Air Cond Installation</p>
              </div>
              <div>
                <img src="/assets/images/ac-maintenance.png" alt="about image" />
                <p>Air Cond-Maintenance</p>
              </div>
            </div>
            <div class="grid-row">
              <div>
                <img src="/assets/images/ac-repair.png" alt="about image" />
                <p>Air Cond Repair</p>
              </div>
              <div>
                <img src="/assets/images/ac-replace.png" alt="about image" />
                <p>Air Cond Replacement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RepairSectionTwo",
};
</script>

<style scoped>
.img-grid {
  display: flex;
  flex-direction: column;
}

.grid-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.grid-row > div {
  width: calc(50% - 10px); /* Adjust as needed */
}

.img-grid > div > div > img {
  width: 200px;
  height: auto;
}
.img-grid > div > div > p {
  font-size: large;
  font-weight: bold;
  margin-top: 10px;
}
</style>
