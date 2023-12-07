// Courses.js
import React, { useState, useEffect } from 'react';
import courseService from '../services/courseService';
import { useRouter } from 'next/router';
import { Container, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = () => {
  const router = useRouter();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const allCourses = await courseService.getAllCourses();
        setCourses(allCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []);

  const handleUpdate = (course) => {
    router.push({
      pathname: `/update-course/${course.id}`,
      query: { course: JSON.stringify(course) },
    });
  };

  const handleDelete = async (courseId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this course?');
    if (confirmDelete) {
      try {
        await courseService.deleteCourse(courseId);
        const updatedCourses = courses.filter((course) => course.id !== courseId);
        setCourses(updatedCourses);
        console.log(`Course with ID ${courseId} deleted successfully.`);
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4">All Courses</h1>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <ListGroup>
          {courses.map((course) => (
            <ListGroup.Item className="mb-4 border rounded p-4" key={course.id}>
              <strong>Course ID:</strong> {course.id}
              <br />
              <strong>Title:</strong> {course.title}
              <br />
              <strong>Description:</strong> {course.description}
              <div className="mt-4">
                <Button variant="primary" onClick={() => handleUpdate(course)}>
                  Update
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(course.id)}>
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Courses;