import axios from "axios";

// ✅ Read backend URL from .env
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

// Final API endpoint
const API_URL = `${BASE_URL}/tasks`;

// 🔽 GET all tasks
export const getTasks = () => {
    return axios.get(API_URL);
};

// 🔽 ADD new task
export const addTask = (task) => {
    return axios.post(API_URL, task);
};

// 🔽 UPDATE task
export const updateTask = (id, task) => {
    return axios.put(`${API_URL}/${id}`, task);
};

// 🔽 DELETE task
export const deleteTask = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
