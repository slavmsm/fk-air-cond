<template>
  <section class="container p-6 mx-auto space-y-6 sm:space-y-12">
    <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <template>
        <router-link v-for="article in data" :key="article.id"
          :to="`${getArticleLink(article.attributes.category.data?.attributes?.slug, article.attributes.slug)}`"
          class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg">
          <img v-if="article.attributes.cover.data?.attributes?.url"
            :src="getStrapiMedia(article.attributes.cover.data.attributes.url)" alt="presentation" width="240"
            height="240" class="object-cover w-full h-44" />
          <div class="p-6 space-y-2 relative">
            <img v-if="article.attributes.authorsBio.data?.attributes?.avatar?.data?.attributes?.url"
              :src="getStrapiMedia(article.attributes.authorsBio.data.attributes.avatar.data.attributes.url)"
              alt="avatar" width="80" height="80" class="rounded-full h-16 w-16 object-cover absolute -top-8 right-4" />
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
              {{ article.attributes.title }}
            </h3>
            <div class="flex justify-between items-center">
              <span class="text-xs dark:text-gray-400">
                {{ formatDate(article.attributes.publishedAt) }}
              </span>
              <span v-if="article.attributes.authorsBio.data?.attributes?.name" class="text-xs dark:text-gray-400">
                {{ article.attributes.authorsBio.data.attributes.name }}
              </span>
            </div>
            <p class="py-4">{{ article.attributes.description }}</p>
          </div>
        </router-link>
      </template>
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'PostList', // Provide the name option
  props: {
    data: Array,
  },
  methods: {
    getStrapiMedia(url) {
      // Implement getStrapiMedia function logic here
    },
    formatDate(date) {
      // Implement formatDate function logic here
    },
    getArticleLink(categorySlug, articleSlug) {
      // Implement getArticleLink function logic here
    },
  },
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
