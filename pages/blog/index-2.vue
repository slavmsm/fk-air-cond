"use client"

<template>
  <div>
    <PageHeader :heading="'Our Blog'" :text="'Checkout Something Cool'" />
    <PostList :data="data">
      <div v-if="shouldShowLoadMoreButton" class="flex justify-center">
        <button type="button" class="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
          @click="loadMorePosts">
          Load more posts...
        </button>
      </div>
    </PostList>
    <Loader v-if="isLoading" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'; // Import computed from Vue
import Loader from '../../components/Blogs/Loader';
import PostList from '../../components/Blogs/PostList';
import PageHeader from '../../components/PageHeader';
import { fetchAPI } from '../../utils/fetch-api';

const meta = ref(null);
const data = ref([]);
const isLoading = ref(true);

const fetchData = async (start, limit) => {
  isLoading.value = true;
  try {
    const token = process.env.VUE_APP_STRAPI_API_TOKEN; // Correct the environment variable name
    const path = '/articles';
    const urlParamsObject = {
      sort: { createdAt: 'desc' },
      populate: {
        cover: { fields: ['url'] },
        category: { populate: '*' },
        authorsBio: { populate: '*' },
      },
      pagination: { start, limit },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);

    if (start === 0) {
      data.value = responseData.data;
    } else {
      data.value = [...data.value, ...responseData.data];
    }

    meta.value = responseData.meta;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const loadMorePosts = () => {
  const nextPosts = meta.value.pagination.start + meta.value.pagination.limit;
  fetchData(nextPosts, Number(process.env.VUE_APP_PAGE_LIMIT)); // Correct the environment variable name
};

const shouldShowLoadMoreButton = computed(() =>
  meta.value ? meta.value.pagination.start + meta.value.pagination.limit < meta.value.pagination.total : false
);

onMounted(() => {
  fetchData(0, Number(process.env.VUE_APP_PAGE_LIMIT)); // Correct the environment variable name
});

</script>

<style>
/* Add your component-specific styles here */
</style>
