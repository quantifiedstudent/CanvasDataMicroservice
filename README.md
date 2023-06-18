# Canvas Data Microservice
## Setup Local Development Environment
1. Add [Canvas Access Token](https://canvas.instructure.com/doc/api/file.oauth.html#manual-token-generation) to the file PrivateToken.txt
2. Install all dependencies using `npm i`
3. Run the project with `npm run start:dev`

## Student
### Student Canvas Id (user_id)
>Gets Canvas Id (user_id) of student which authorization token is used

`http://localhost:{port}/student/selfId` - API Route


>Example

`http://localhost:{port}/student/selfId` - returns student's Canvas Id (user_id)

<br>

### Student Data by Token
>Gets information about student which authorization token is used

`http://localhost:{port}/student/self` - API Route


>Example

`http://localhost:{port}/student/self` - returns StudentObject

<br>

### Student Data by Canvas Id (user_id)
>Gets information about student with certian ID

`http://localhost:{port}/student/:studentCanvasId` - API Route

>Example

`http://localhost:{port}/student/1234` - returns StudentObject with given ID

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *studentId*  | int | Student Canvas Id (user_id) |

<br>

## Canvas Courses
### List of Canvas Courses
> Returns the list of active courses for the student, by his Student Canvas Id (user_id).

`http://localhost:{port}/course/student/:studentId` - API Route

>Example

`http://localhost:{port}/course/student/1234` - returns all active courses of student with Student Canvas Id (user_id) 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *studentId*  | int | Student Canvas Id (user_id) |

<!--
<br>

### Specific Canvas Course
> Returns the courses with the given course id for the student, by his Student Canvas Id (user_id).

`http://localhost:{port}/student/:studentCanvasId/courses/:courseId` - API Route

>Example

`http://localhost:{port}/student/1234/courses/1234` - returns active course with id 1234 of a student with Student Canvas Id (user_id) 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *studentCanvasId*  | int | Student Canvas Id (user_id) |
| *courseId*  | int | id of the course | -->

<br>

## Canvas Assignments
### List of Canvas Assignments
> Returns the list of assignments of the student in the course, by student's Student Canvas Id (user_id) and course id.

`http://localhost:{port}/assignment/course/:courseId/student/:studnetId` - API Route

>Example

`http://localhost:{port}/assignment/course/1234/student/1234` - returns all assignments for active course with id 1234 of student with Student Canvas Id (user_id) 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *studnetId*  | int | Student Canvas Id (user_id) |
| *courseId*  | int | id of the course |

<br>

### Specific Canvas Assignment
> Returns the assignment with certian id from certian course 

`http://localhost:{port}/assignment/course/:courseId/assignment/:assignmentId` - API Route

>Example

`http://localhost:{port}/assignment/course/1234/assignment/1234` - returns assignment with id 1234 for active course with id 1234 


| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *courseId*  | int | id of the course |
| *assignmentId*  | int | id of the assignment |

<br>

## Submission
### Specific Submission
>Gets information about subbmision with certian Id from certian course and student also specified by Id

`http://localhost:{port}/subbmision/course/:courseId/student/:studentId/assignment/:assignmentsId` - API Route

>Example

`http://localhost:{port}/subbmision/course/1234/student/1234/assignment/1234` - returns Submission with 1234 ID from course of 1234 id and student of 1234 id 

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *courseId*  | int | id of the course |
| *assignmentId*  | int | id of the assignment |
| *studnetId*  | int | Student Canvas Id (user_id) |

<br>

## Graded Submissions
### List of Submissions with corresponding Assignments and max amount of points

>Gets submissions objects with assignment and max amount of points for certian student and course defined by Id's

`http://localhost:{port}/submissionObjects/course/:courseId/student/:studentId` - API Route

>Example

`http://localhost:{port}/submissionObjects/course/1234/student/1234` - returns array of submissionObjects form course of Id 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *courseId*  | int | id of the course |
| *studnetId*  | int | Student Canvas Id (user_id) |

<br>

### Specific Grade

>Gets grade from certian student, assignment and course defined by Id

`http://localhost:{port}/grade/gradeObject/course/:courseId/assignment/:assignmentId/student/:studentId` - API Route

>Example

`http://localhost:{port}/grade/gradeObject/course/1234/assignment/1234/student/1234` - returns gradeObject form course of Id 1234, assignment of Id 1234 from student with Id 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *courseId*  | int | id of the course |
| *assignmentId*  | int | id of the assignment |
| *studnetId*  | int | Student Canvas Id (user_id) |

<br>

### Specific Submission with max amount of points

>Gets submission object with max amount of points from certian student, assignment and course defined by Id

`http://localhost:{port}/grade/submissionObject/course/:courseId/assignment/:assignmentId/student/:studentId` - API Route

>Example

`http://localhost:{port}/grade/submissionObject/course/1234/assignment/12/student/1234` - returns submissionObject form course of Id 1234, assignment of Id 1234 from student with Id 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *courseId*  | int | id of the course |
| *assignmentId*  | int | id of the assignment |
| *studnetId*  | int | Student Canvas Id (user_id) |
