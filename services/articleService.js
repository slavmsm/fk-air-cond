// services/articleService.js
export const getArticles = async ($axios) => {
  try {
    const response = await $axios.get("/articles");
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
