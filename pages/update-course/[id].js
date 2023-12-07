import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import courseService from '../../services/courseService';
import styles from '@/styles/update-course-styles.module.css'; // Adjust the path based on your project structure

const UpdateCourse = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const fetchedCourse = await courseService.getCourseById(id); 
        setCourse(fetchedCourse);
        setUpdatedTitle(fetchedCourse.title); // Set initial value for the updated title
        setUpdatedDescription(fetchedCourse.description); // Set initial value for the updated description
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setUpdatedDescription(e.target.value);
  };

  const handleUpdateCourse = async () => {
    try {
      const updatedCourse = { ...course, title: updatedTitle, description: updatedDescription };
      await courseService.updateCourse(course.id, updatedCourse);
      router.push('/courses'); // Redirect to the courses page after updating
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Update Course</h1>
      <p>Course ID: {course.id}</p>
      <label className={styles.label}>
        Title:
        <input
          type="text"
          value={updatedTitle}
          onChange={handleTitleChange}
          className={styles.inputField}
        />
      </label>
      <br />
      <label className={styles.label}>
        Description:
        <textarea
          value={updatedDescription}
          onChange={handleDescriptionChange}
          className={styles.inputField}
        />
      </label>
      <br />
      <button onClick={handleUpdateCourse} className={styles.submitButton}>
        Update Course
      </button>
    </div>
  );
};

export default UpdateCourse;
