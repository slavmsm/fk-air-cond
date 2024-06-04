<template>
  <div class="p-4 rounded-lg dark:bg-gray-900 min-h-[365px] relative">
    <h4 class="text-xl font-semibold">Browse By Category</h4>

    <div>
      <div class="flex flex-wrap py-6 space-x-2 dark:border-gray-400">
        <template v-for="category in filteredCategories" :key="category.id">
          <Link v-for="category in filteredCategories" :key="category.id" :to="`/${category.attributes.slug}`"
            :class="selectedFilter(category.attributes.slug, params.category)">
          #{{ category.attributes.name }}
          </Link>
        </template>
        <Link :to="/" :class="selectedFilter('', 'filter')" :key="'all'">
        #all
        </Link>
      </div>

      <div class="space-y-2">
        <h4 class="text-lg font-semibold">Other Posts You May Like</h4>
        <ul class="ml-4 space-y-1 list-disc">
          <li v-for="article in articles" :key="article.id">
            <Link :to="`/${params.category}/${article.attributes.slug}`"
              :class="{ 'text-violet-400': params.slug === article.attributes.slug, 'hover:underline hover:text-violet-400 transition-colors duration-200': true }">
            {{ article.attributes.title }}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    filteredCategories() {
      return this.categories.filter(category => category.attributes.articles.data.length > 0);
    }
  },
  props: {
    categories: {
      type: Array,
      required: true
    },
    articles: {
      type: Array,
      required: true
    },
    params: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectedFilter(current, selected) {
      return current === selected
        ? 'px-3 py-1 rounded-lg hover:underline dark:bg-violet-700 dark:text-gray-100'
        : 'px-3 py-1 rounded-lg hover:underline dark:bg-violet-400 dark:text-gray-900';
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
