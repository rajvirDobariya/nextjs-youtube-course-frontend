import axios from 'axios';

// Backend Base URL
const BASE_URL = 'http://localhost:8080'; 

const courseService = {
  getAllCourses: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/courses`);
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  },

  addCourse: async (newCourse) => {
    try {
      const response = await axios.post(`${BASE_URL}/courses`, newCourse);
      return response.data;
    } catch (error) {
      console.error('Error adding course:', error);
      throw new Error('Failed to add course');
    }
  },

  updateCourse: async (courseId, updatedCourse) => {
    try {
      const response = await axios.put(`${BASE_URL}/courses/${courseId}`, updatedCourse);
      return response.data;
    } catch (error) {
      console.error('Error updating course:', error);
      throw new Error('Failed to update course');
    }
  },

  deleteCourse: async (courseId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting course:', error);
      throw new Error('Failed to delete course');
    }
  },

  getCourseById: async (courseId) => {
    try {
      const response = await axios.get(`${BASE_URL}/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching course with ID ${courseId}:`, error);
      throw new Error('Failed to fetch course');
    }
  },
};

export default courseService;