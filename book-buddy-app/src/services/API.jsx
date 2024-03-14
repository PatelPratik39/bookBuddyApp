// https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books
const API_BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  return data;
};

export const register = async ({ firstname, lastname, email, password }) => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ firstname, lastname, email, password })
  });
  const data = await response.json();
  return data;
};
