import axios from 'axios';
import { BASE_URL } from '@/constants'

const courseService = {
  getAllCourses: async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/courses`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  },

  getCourseById: async (courseId, token) => {

    try {
      const response = await axios.get(`${BASE_URL}/courses/${courseId}`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching course with ID ${courseId}:`, error);
      throw new Error('Failed to fetch course');
    }
  },
  addCourse: async (newCourse, token) => {
    try {
      const response = await axios.post(`${BASE_URL}/courses`, newCourse, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error adding course:', error);
      throw new Error('Failed to add course');
    }
  },

  updateCourse: async (updatedCourse, token) => {
    try {
      const response = await axios.put(`${BASE_URL}/courses/${updatedCourse.id}`, updatedCourse, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating course:', error);
      throw new Error('Failed to update course');
    }
  },

  deleteCourse: async (courseId, token) => {
    try {
      const response = await axios.delete(`${BASE_URL}/courses/${courseId}`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error deleting course:', error);
      throw new Error('Failed to delete course');
    }
  },

};

export default courseService;
