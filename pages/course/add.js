import React, { useState } from 'react';
import { useRouter } from 'next/router';
import courseService from '@/services/courseService';
import styles from '@/styles/add-course-styles.module.css';
import { TOKEN } from '@/constants';

const Add = () => {
  const [course, setCourse] = useState({ title: '', description: '' });
  const router = useRouter();

  const handleInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await courseService.addCourse(course,TOKEN);
      router.push('/courses'); // Redirect to the "All Courses" page after adding the course
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add Course</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label className={styles.label} htmlFor="title">
          Course Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={course.title}
          onChange={handleInputChange}
          className={styles.inputField}
          required
        />
        
        <label className={styles.label} htmlFor="description">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={course.description}
          onChange={handleInputChange}
          className={styles.inputField}
          required
        />

        <button type="submit" className={styles.submitButton}>
          Add Course
        </button>
      </form>
    </div>
  );
};

export default Add;
