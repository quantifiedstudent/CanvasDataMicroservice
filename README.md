# CanvasDataMicroservice

## Student
>Gets information concerning students.
`http://localhost:{port}/student` - API Route


>Example
`http://localhost:{port}/student` - returns StudentObject


## Student Canvas Id (user_id)
>Gets information concerning students.
`http://localhost:{port}/studentCanvasId` - API Route

>Example
`http://localhost:{port}/studentCanvasId` - returns Student Canvas Id (user_id)

## Canvas Courses
> Returns the list of active courses for the student, by his Student Canvas Id (user_id).
`http://localhost:{port}/student/:studentCanvasId/courses` - API Route

>Example
`http://localhost:{port}/student/1234/courses` - returns all active courses of student with Student Canvas Id (user_id) 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *studentCanvasId*  | int | Student Canvas Id (user_id) |
<br>

> Returns the courses with given course id for the student, by his Student Canvas Id (user_id).
`http://localhost:{port}/student/:studentCanvasId/courses/:courseId` - API Route

>Example
`http://localhost:{port}/student/1234/courses/1234` - returns active course with id 1234 of student with Student Canvas Id (user_id) 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *studentCanvasId*  | int | Student Canvas Id (user_id) |
| *courseId*  | int | id of the course |

## Canvas Assignments
> Returns the list of assignments of the student in the course, by student's Student Canvas Id (user_id) and course id.
`http://localhost:{port}/student/:studentCanvasId/courses/:courseId/assignments` - API Route

>Example
`http://localhost:{port}/student/1234/courses/1234/assignments` - returns all assignments for active course with id 1234 of student with Student Canvas Id (user_id) 1234

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *studentCanvasId*  | int | Student Canvas Id (user_id) |
| *courseId*  | int | id of the course |

<br>


> Returns the list of assignments of the student in the course, by student's Student Canvas Id (user_id) and course id.
`http://localhost:{port}/student/:studentCanvasId/courses/:courseId/assignments/:assignmentId` - API Route

>Example
`http://localhost:{port}/student/1234/courses/1234/assignments/1234` - returns assignment with id 1234 for active course with id 1234 of student with Student Canvas Id (user_id) 1234


| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *studentCanvasId*  | int | Student Canvas Id (user_id) |
| *courseId*  | int | id of the course |
| *assignmentId*  | int | id of the assignment |

etc for submissions, outcomes and grades