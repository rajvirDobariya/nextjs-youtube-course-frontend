import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import courseService from '@/services/courseService';
import styles from '@/styles/add-course-styles.module.css';
import { TOKEN } from '@/constants';

const Update = () => {
    const [course, setCourse] = useState({});
    const router = useRouter();

  useEffect(() => {

    async function fetchCourse() {
      try {
        const oldCourse = await courseService.getAllCourses(TOKEN);
        const firstCourse = oldCourse[0]; // Get the 0th element
                
        setCourse({
          id: firstCourse.id,
          title: firstCourse.title,
          description: firstCourse.description,
        });
            } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourse();
    console.log("course");
    console.log(course);
  }, []);

  const handleInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await courseService.updateCourse(course, TOKEN);
      router.push('/courses'); 
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Update Course</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label className={styles.label} htmlFor="title">
          Course Title:
        </label>

<div>        {course.id}</div>
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

        <button type="submit" className={styles.submitButton} style={{ background: 'green' }}>
          Update Course
        </button>
      </form>
    </div>
  );
};

export default Update;
