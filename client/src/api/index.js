import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

//ARTICLES
export const fetchArticles = () => API.get("/articles");
export const getAnArticle = (id) => API.get(`/articles/${id}`);
export const createArticle = (newArticle) => API.post("/articles", newArticle);
export const updateArticle = (id, updatedArticle) =>
  API.patch(`/articles/${id}`, updatedArticle);
export const deleteArticle = (id) => API.delete(`/articles/${id}`);

//FAQ
export const fetchFaqs = () => API.get("/faqs");
export const getFaq = (id) => API.get(`/faqs/${id}`);
export const createFaq = (newFaq) => API.post("/faqs", newFaq);
export const updateFaq = (id, updatedFaq) =>
  API.patch(`/faqs/${id}`, updatedFaq);
export const deleteFaq = (id) => API.delete(`/faqs/${id}`);
export const likePost = (id) => API.patch(`/faqs/${id}/likePost`);

//USERS
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const getUser = (id) => API.get(`/users/${id}`);
