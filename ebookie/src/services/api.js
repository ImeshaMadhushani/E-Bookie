// src/services/api.js
const BASE_URL = process.env.REACT_APP_API_BASE_URL; 

// Helper function to handle fetch requests
const request = async (endpoint, method = "GET", data) => {
    try {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        };

        const response = await fetch(`${BASE_URL}/${endpoint}`, options);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

// Books API functions
export const fetchBooks = () => request("books", "GET");
export const getBookById = (id) => request(`books/${id}`, "GET");
export const addBook = (bookData) => request("books", "POST", bookData);
export const updateBook = (id, bookData) => request(`books/${id}`, "PUT", bookData);
export const deleteBook = (id) => request(`books/${id}`, "DELETE");

// Users API functions
export const fetchUsers = () => request("users", "GET");
export const getUserById = (id) => request(`users/${id}`, "GET");
export const addUser = (userData) => request("users", "POST", userData);
export const updateUser = (id, userData) => request(`users/${id}`, "PUT", userData);
export const deleteUser = (id) => request(`users/${id}`, "DELETE");

// Cart API functions
export const fetchCartItems = (userId) => request(`cart/${userId}`, "GET");
export const addItemToCart = (userId, itemData) => request(`cart`, "POST", itemData);
export const updateCartItem = (userId, itemId, itemData) => request(`cart/${userId}/${itemId}`, "PUT", itemData);
export const deleteCartItem = (userId, itemId) => request(`cart/${userId}/${itemId}`, "DELETE");

// Favorites API functions
export const fetchFavorites = (userId) => request(`favorites/${userId}`, "GET");
export const addFavorite = (userId, favoriteData) => request(`favorites`, "POST", favoriteData);
export const removeFavorite = (userId, favoriteId) => request(`favorites/${userId}/${favoriteId}`, "DELETE");
