<template>
  <section class="latest_blog_area section_padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6" v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/blog/${post.slug}`">
            <div class="latest_share_blog_box mb_40">
              <div class="latest_share_img_box">
                <img :src="post.coverImage.url" :alt="post.coverImage.alt" />
                <span class="blog_date">{{ post.date }}</span>
              </div><!--end .latest_share_img_box-->
              <h2>{{ post.title }}</h2>
              <p v-html="post.description"></p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogsGrid",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log('Posts received:', this.posts);
  },
};
</script>

<style scoped>
.latest_blog_area {
  padding: 60px 0;
}

.latest_share_blog_box {
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 30px;
  background: #fff;
  transition: transform 0.3s ease-in-out;
}

.latest_share_blog_box:hover {
  transform: translateY(-10px);
}

.latest_share_img_box img {
  width: 100%;
  height: auto;
}

.blog_date {
  display: block;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #777;
}

h2 {
  font-size: 2rem;
  margin-top: 30px;
}

p {
  font-size: 1.5rem;
  text-align: justify;
  color: #555;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col-md-4 {
  flex: 1 1 calc(33.333% - 20px);
  margin: 10px;
}

.col-sm-6 {
  flex: 1 1 calc(50% - 20px);
  margin: 10px;
}

@media (max-width: 768px) {
  .col-sm-6 {
    flex: 1 1 calc(100% - 20px);
  }
}
</style>
