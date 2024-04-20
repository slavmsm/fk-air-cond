<template>
  <section class="about_repair_style_2 repair_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="repair_details">
            <div class="hero-section-title">
              <i class="icon-snowflake"></i>
              <h4>HOW WE REPAIR</h4>
              <h1>FK Aircond Solutions</h1>
            </div>
            <p>
              Located in Malaysia, FK Aircond Services specializes in comprehensive
              Airconding solutions. Our services include chemical cleaning, overhaul
              clean, and repair for all brands. We meticulously clean and check air
              filters, front panels, and covers. Additionally, we offer installation of
              new units and dismantle services for existing Airconds.
            </p>
            <a class="btn-orange" href="#">Contact Us</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-grid">
            <div class="grid-row">
              <div>
                <img src="/assets/images/ac-install.png" alt="about image" />
                <p>Aircond Installation</p>
              </div>
              <div>
                <img src="/assets/images/ac-maintenance.png" alt="about image" />
                <p>Aircond-Maintenance</p>
              </div>
            </div>
            <div class="grid-row">
              <div>
                <img src="/assets/images/ac-repair.png" alt="about image" />
                <p>Aircond Repair</p>
              </div>
              <div>
                <img src="/assets/images/ac-replace.png" alt="about image" />
                <p>Aircond Replacement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="repair-image">
            <img src="/assets/images/about/about-section.png" alt="about image" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="repair_details">
            <div class="hero-section-title">
              <h1>Comprehensive Aircond Solutions</h1>
            </div>
            <p>
              We are an experienced, trusted business that has been servicing the
              Malaysia. If you are in need of any and all Aircond services, you have come
              to the right place. Here at FK Aircond Services, we are dedicated to helping
              our clients have and maintain access to Aircond with as little hassle or
              monetary commitment as possible. Working with both residential and
              commercial clients, our areas of expertise are vast and we are certain we
              can help you with any solution you may need.
            </p>
            <p>
              Whether it is the purchase of a new Aircond unit or servicing, maintaining,
              or repairing your current unit, we are here for you. With a purchase of a
              new Aircond unit, our team will help supply and deliver it as well as
              install and replace it if ever needed. We also offer Aircond repair work and
              services tailored to help your unit run as long as possible so that you can
              feel confident in your access to cool, on demand air.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="repair_details">
            <div class="hero-section-title">
              <h1>Customer-Centric Approach and Cost Considerations</h1>
            </div>
            <p>
              We are dedicated to helping our customers buy and maintain their Aircond
              units as affordably as possible. That’s why we work incredibly hard to keep
              our costs low while maintaining our extremely high level of quality. We know
              that Aircond is a need, not a want and we are sensitive to being as easy on
              our customers wallets as possible throughout the purchase, repair, and
              maintenance of their Aircond units. We love our customers and we do
              everything we can to keep their best interests at the heart of our business.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="repair-image">
            <img src="/assets/images/about/about-section-1.png" alt="about image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
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

.repair-image img {
  margin-bottom: 50px;
  height: 100vh;
  border-top: 6px solid #225685;
  border-right: 6px solid #225685;
  border-radius: 10px;
}
</style>
