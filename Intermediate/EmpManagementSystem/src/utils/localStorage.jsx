const employees = [
  {
    id: 1,
    firstName: "Abhi", // Adding first name
    email: "a@a.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage design",
        taskDate: "2024-10-21",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve issue with the navbar on mobile view",
        taskDate: "2024-10-19",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Gather data and prepare the report",
        taskDate: "2024-10-20",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Priya", // Adding first name
    email: "priya@emp.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Client Meeting Preparation",
        taskDescription: "Prepare documents for client presentation",
        taskDate: "2024-10-21",
        category: "Client Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug Fixing Session",
        taskDescription: "Work with the team to resolve bugs",
        taskDate: "2024-10-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Shubham", // Adding first name
    email: "shubham@emp.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Database Optimization",
        taskDescription: "Optimize the database queries for faster performance",
        taskDate: "2024-10-15",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Add New Features",
        taskDescription:
          "Add new features to the project as requested by the client",
        taskDate: "2024-10-21",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review the code submitted by junior developers",
        taskDate: "2024-10-20",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Vidya", // Adding first name
    email: "vidya@emp.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Marketing Campaign",
        taskDescription: "Plan and execute the new marketing campaign",
        taskDate: "2024-10-22",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Product Launch",
        taskDescription: "Work with the team for the product launch",
        taskDate: "2024-10-23",
        category: "Product",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Blog Writing",
        taskDescription:
          "Write an informative blog post for the company website",
        taskDate: "2024-10-19",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Aakash", // Adding first name
    email: "aakash@emp.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Software Testing",
        taskDescription: "Test the new software update for bugs",
        taskDate: "2024-10-20",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Client Feedback Analysis",
        taskDescription: "Analyze feedback from recent client survey",
        taskDate: "2024-10-21",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Team Presentation",
        taskDescription: "Prepare slides for the team meeting",
        taskDate: "2024-10-19",
        category: "Team Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Rohan",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return { employees, admin, loggedInUser };
};
