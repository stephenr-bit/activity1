Add grade should:

1. Should add a grade to the students transcript per course, student
2. Should add a grade for an existing student
3. Change grade if grade already exists for the course
4. Throw an error if a student does not exist 
5. If the course does not exist, should throw an error
6. Can't add a negative grade
7. Should add a grade to the database per course, student


We are deciding to have a set list of courses because we want to reference them whether they exist or not. 
We will create them using an array of courses. We assume that all courses will be named courseName, Semester, Year to 
make sure we do not override any retaken courses.


We don't want the grades to be below 0, and are setting a limit on the lower bound to prevent that when adding a grade.











