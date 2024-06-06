<template>
  <section class="blog_details_area section_padding">
    <div class="container" v-if="post">
      <div class="row">
        <div class="col-md-8">
          <div class="blog_details_left">
            <div class="blog_left_box">
              <div class="bl_share_img">
                <img :src="post.coverImage.url" :alt="post.coverImage.alt" />
                <span class="blog_date">{{ post.date }}</span>
              </div><!--end .bl_share_img-->
              <div class="blog_share_details">
                <h1>{{ post.title }}</h1>
                <div v-html="post.description"></div>
                <div v-html="renderBody(post.body?.value.document)"></div>
              </div><!--end blog-share-details-->
            </div><!--end blog-left-box-->
          </div><!--end blog-details-left-->
        </div><!--end col-md-8-->
        <div class="col-md-4">
          <div class="blog_details_right">
            <div class="blog_right_box gray_bg mb_30">
            </div><!--end .blog_right_box-->
            <div class="blog_right_box gray_bg mb_30">
              <div class="widget_categories">
                <h2>Category</h2>
                <ul>
                  <li>{{ post.category.name }}</li>
                </ul>
              </div><!--end .widget_categories-->
            </div><!--end .blog_right_box-->
            <div class="blog_social_share_box">
              <div class="share_box_left">
                <p>Tags: <a href="#">fridge,</a> <a href="#">ice maker,</a> <a href="#">refrigerator</a></p>
              </div>
            </div><!--end .blog_social_share_box-->
          </div><!--end .blog_details_right-->
          <div class="blog_right_box gray_bg mb_30">
            <h2>All Blogs</h2>
            <ul>
              <li v-for="blog in blogs" :key="blog.id">
                <nuxt-link :to="`/blogs${blog.slug}`">
                  <img :src="blog.coverImage.url" :alt="blog.coverImage.alt" class="blog-thumbnail" />
                  <span>{{ blog.title }}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="share_box_left text-center mt-20">
            <ul>
              <li><a target="_blank" href="https://www.facebook.com/fkaircondservices/"><i
                    class="fa fa-facebook"></i></a></li>
              <li><a target="_blank" href="https://www.instagram.com/fkaircondservices/"><i
                    class="fa fa-linkedin"></i></a></li>
              <li><a target="_blank" href="https://www.youtube.com/@FKAircondServices"><i
                    class="fa fa-youtube-play"></i></a></li>
            </ul>
          </div><!--end .blog_right_box-->
        </div><!--end .col-md-4-->
      </div><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
export default {
  name: "BlogDetails",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      blogs: [],
    };
  },
  async mounted() {
    await this.fetchAllBlogs();
  },
  methods: {
    renderBody(document) {
      if (!document) return '';

      let renderedText = '';

      document.children.forEach(child => {
        if (child.type === 'paragraph') {
          renderedText += '<p>';
          child.children.forEach(span => {
            if (span.type === 'span' && span.value) {
              if (span.marks && span.marks.includes('strong')) {
                renderedText += `<strong>${span.value}</strong>`;
              } else {
                renderedText += span.value;
              }
            }
          });
          renderedText += '</p>';
        } else if (child.type === 'heading') {
          const level = child.attrs && child.attrs.level ? child.attrs.level : 1; // Default to h1 if no level is specified
          renderedText += `<h${level}>`;
          child.children.forEach(span => {
            if (span.type === 'span' && span.value) {
              if (span.marks && span.marks.includes('strong')) {
                renderedText += `<strong>${span.value}</strong>`;
              } else {
                renderedText += span.value;
              }
            }
          });
          renderedText += `</h${level}>`;
        }
      });

      return renderedText;
    },
    async fetchAllBlogs() {
      const query = `
        query MyQuery {
          allBlogs {
            id
            slug
            title
            coverImage {
              url
              alt
            }
          }
        }
      `;

      try {
        const response = await this.$axios.post('', { query }, {
          headers: {
            Authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
          }
        });
        this.blogs = response.data.data.allBlogs;
      } catch (error) {
        console.error('Axios error:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any necessary styling here */
.blog_details_area {
  padding: 60px 0;
}

.blog_left_box,
.blog_right_box {
  border: 1px solid #e0e0e0;
  padding: 20px;
  background: #fff;
}

.bl_share_img img {
  width: 100%;
  height: auto;
}

.blog_date {
  display: block;
  margin-top: 10px;
  font-size: 1.2rem;
  color: #e0e0e0;
}

h1 {
  font-size: 3rem;
  margin-top: 30px;
}

h2 {
  font-size: 2rem;
  margin-top: 20px;
}

p {
  font-size: 1.5rem;
  text-align: justify;
  color: #555;
}

.widget_categories ul,
.blog_right_box ul {
  list-style: none;
  padding: 0;
}

.widget_categories li,
.blog_right_box li {
  margin-bottom: 10px;
}

.blog_social_share_box ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.blog_social_share_box li {
  margin: 0 10px;
}

.blog_social_share_box i {
  font-size: 1.5rem;
  color: #555;
}

.blog_social_share_box i:hover {
  color: #333;
}

.blog-thumbnail {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
  vertical-align: middle;
}

.blog_right_box li {
  display: flex;
  align-items: center;
}

.blog_right_box li span {
  display: inline-block;
  font-size: 1rem;
  color: #555;
}
</style>
