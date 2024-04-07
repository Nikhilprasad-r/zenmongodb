db.users.insertMany([
  { user_id: 1, username: "user1", attendance_status: "present" },
  { user_id: 2, username: "user2", attendance_status: "absent" },
  { user_id: 3, username: "user3", attendance_status: "present" },
  { user_id: 4, username: "user4", attendance_status: "absent" },
]);

db.tasks.insertMany([
  {
    task_id: 1,
    user_id: 1,
    task_name: "Task 1",
    deadline: ISODate("2020-10-20"),
  },
  {
    task_id: 2,
    user_id: 2,
    task_name: "Task 2",
    deadline: ISODate("2020-10-25"),
  },
  {
    task_id: 3,
    user_id: 3,
    task_name: "Task 3",
    deadline: ISODate("2020-11-05"),
  },
  {
    task_id: 4,
    user_id: 4,
    task_name: "Task 4",
    deadline: ISODate("2020-10-30"),
  },
]);

db.company_drives.insertMany([
  { drive_id: 1, drive_name: "Company A", drive_date: ISODate("2020-10-18") },
  { drive_id: 2, drive_name: "Company B", drive_date: ISODate("2020-10-25") },
  { drive_id: 3, drive_name: "Company C", drive_date: ISODate("2020-11-05") },
  { drive_id: 4, drive_name: "Company D", drive_date: ISODate("2020-10-30") },
]);

db.mentors.insertMany([
  { mentor_id: 1, mentor_name: "Mentor X", mentee_count: 20 },
  { mentor_id: 2, mentor_name: "Mentor Y", mentee_count: 15 },
  { mentor_id: 3, mentor_name: "Mentor Z", mentee_count: 10 },
  { mentor_id: 4, mentor_name: "Mentor W", mentee_count: 25 },
]);
db.topics.insertMany([
  { name: "Introduction to Web Development" },
  { name: "Object-Oriented Programming Principles" },
  { name: "Data Structures and Algorithms" },
  { name: "Introduction to Database Management Systems" },
  { name: "Software Design Patterns" },
  { name: "Introduction to Version Control (e.g., Git)" },
  { name: "Introduction to Frontend Development (HTML, CSS, JavaScript)" },
  { name: "Backend Development with Node.js" },
  { name: "RESTful API Design and Development" },
  { name: "Test-Driven Development (TDD)" },
  { name: "Secure Coding Practices" },
  { name: "Introduction to Cloud Computing (e.g., AWS, Azure)" },
  { name: "Microservices Architecture" },
  { name: "Continuous Integration and Continuous Deployment (CI/CD)" },
  { name: "Agile Software Development Methodologies" },
]);
db.codekata.insertMany([
  {
    problem_id: 1,
    title: "Two Sum",
    description:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    solution:
      "Use a hash table to store the indices of elements as you iterate through the array. For each element, check if the complement (target - current element) exists in the hash table.",
  },
  {
    problem_id: 2,
    title: "Reverse Linked List",
    description: "Reverse a singly linked list.",
    difficulty: "Easy",
    tags: ["Linked List"],
    solution:
      "Iterate through the linked list, reversing the pointers as you go.",
  },
  {
    problem_id: 3,
    title: "Merge Intervals",
    description:
      "Given a collection of intervals, merge overlapping intervals.",
    difficulty: "Medium",
    tags: ["Array", "Sorting"],
    solution:
      "Sort the intervals based on the start value. Then iterate through the sorted intervals, merging overlapping intervals as you go.",
  },
]);
db.attendance.insertMany([
  {
    user_id: 1,
    username: "user1",
    date: ISODate("2024-04-01"),
    status: "present",
  },
  {
    user_id: 2,
    username: "user2",
    date: ISODate("2024-04-01"),
    status: "absent",
  },
  {
    user_id: 1,
    username: "user1",
    date: ISODate("2024-04-02"),
    status: "absent",
  },
  {
    user_id: 2,
    username: "user2",
    date: ISODate("2024-04-02"),
    status: "present",
  },
]);
