const courses = [
  {
    courseID: 1,
    CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1739439665/Course-logo/r7uelujsqv71xtalnyq8.jpg",
    courseName: "HTML, CSS, JS",
    CourseDescription : "Frontend course covering all the concepts of HTML, CSS, and JS",
    description: "Embark on your journey to become a frontend web developer with this comprehensive course on the foundational pillars of the web. This program is meticulously designed to take you from a complete beginner to a confident coder capable of building beautiful, responsive, and interactive websites from scratch. You'll start by understanding the structure of a web page with HTML5, then bring it to life with the styling power of CSS3, including advanced layout techniques like Flexbox and Grid. Finally, you'll learn to add dynamic behavior and complex user interactions with modern JavaScript (ES6+). Through hands-on projects, you'll build everything from simple static sites to complex client-side applications, all while learning best practices for code organization, accessibility, and cross-browser compatibility.",
    courseDuration: "3 Months",
    courseFee: "10000",
    courseLearnings: [
      "Create semantically structured, accessible web pages using HTML5.",
      "Design visually stunning and fully responsive layouts that work on any device using CSS3, media queries, and modern CSS frameworks.",
      "Implement complex interactivity, manipulate the DOM, and handle user events with vanilla JavaScript.",
      "Master modern layout systems including Flexbox and CSS Grid for sophisticated page designs.",
      "Write clean, efficient, and modern JavaScript using ES6+ features like arrow functions, destructuring, promises, and async/await.",
      "Utilize browser developer tools for debugging, performance analysis, and testing.",
      "Understand fundamental web concepts such as the box model, specificity, hoisting, and closures.",
      "Version control your projects with Git and GitHub for professional collaboration.",
    ],
    courseSyllabus: [
      {
        module: "HTML5 Fundamentals & Semantics",
        topics: [
          "Web Fundamentals: How the Internet & Websites Work",
          "Document Structure, Tags, Attributes, and Forms",
          "HTML5 Semantic Elements (header, nav, section, article, footer)",
          "Embedding Media: Images, Audio, Video, and Iframes",
          "Creating Accessible Forms with Input Types and Validations",
          "SEO Basics with HTML Meta Tags",
        ],
      },
      {
        module: "CSS3 Styling & Responsive Design",
        topics: [
          "CSS Syntax, Selectors, Specificity, and the Box Model",
          "Typography, Colors, Backgrounds, and Gradients",
          "Positioning Elements: Static, Relative, Absolute, Fixed, and Sticky",
          "Advanced Responsive Design with Fluid Layouts and Media Queries",
          "CSS Transforms, Transitions, and Keyframe Animations",
          "Mastering Layouts: Flexbox for 1D Layouts and CSS Grid for 2D Layouts",
          "CSS Variables (Custom Properties) for Maintainable Code",
          "Building a Mobile-First Responsive Portfolio Project",
        ],
      },
      {
        module: "Modern JavaScript (ES6+)",
        topics: [
          "JavaScript Basics: Variables, Data Types, and Operators",
          "Control Flow: Conditionals (if/else, switch) and Loops (for, while)",
          "Functions, Scope, Hoisting, and the 'this' Keyword",
          "Document Object Model (DOM) Manipulation and Traversal",
          "Handling Events: Click, Submit, Input, Keyboard, and Mouse Events",
          "ES6+ Essentials: Let/Const, Template Literals, and Arrow Functions",
          "Destructuring Assignment, Spread/Rest Operators, and Modules",
          "Working with Arrays and Objects: Modern Methods (map, filter, reduce)",
          "Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
          "Fetch API for consuming data from external REST APIs",
          "Final Capstone Project: Building an Interactive Web Application",
        ],
      },
    ],
  },

  {
    courseID: 2,
    CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742026110/dddsvpwl1d7uycgdkasq-removebg-preview_lgnjdz.png",
    CourseDescription : "Frontend course covering all the concepts of React",
    courseName: "React",
    description: "Dive deep into the world of modern frontend development with React, the most popular JavaScript library for building dynamic and scalable user interfaces. This intensive course is designed for those who already understand HTML, CSS, and JavaScript and are ready to build powerful Single Page Applications (SPAs). You will learn React's core philosophy of components, state, and props, and how to use them to create reusable and maintainable UI code. The course covers everything from the fundamentals of JSX and functional components with Hooks to advanced topics like state management with Context API and Redux Toolkit, client-side routing with React Router, and performance optimization. By the end, you will be equipped to build, test, and deploy production-ready React applications that are fast, efficient, and provide an excellent user experience.",
    courseDuration: "6 Months",
    courseFee: "20000",
    courseLearnings: [
      "Understand the React ecosystem and its component-based architecture.",
      "Build reusable UI components using JSX and functional components.",
      "Manage component state and side effects using React Hooks (useState, useEffect, useContext, useReducer).",
      "Handle complex application state at scale using Redux Toolkit.",
      "Implement dynamic routing and navigation in SPAs with React Router v6.",
      "Create custom hooks to extract and reuse component logic.",
      "Perform testing of React components using Jest and React Testing Library.",
      "Optimize React application performance with techniques like memoization and code splitting.",
      "Deploy applications to modern hosting platforms like Vercel and Netlify.",
    ],
    courseSyllabus: [
      {
        module: "React Fundamentals",
        topics: [
          "Introduction to React: Virtual DOM and JSX Syntax",
          "Building Your First Components: Functional vs. Class Components",
          "Understanding and Using Props for Data Passing",
          "Managing Internal State with the useState Hook",
          "Handling User Events and Forms in React",
          "The Component Lifecycle and the useEffect Hook",
          "Lists and Keys: Rendering Dynamic Data",
          "Conditional Rendering Techniques",
        ],
      },
      {
        module: "Advanced React & State Management",
        topics: [
          "Managing Global State with the Context API and useContext Hook",
          "Complex State Logic with the useReducer Hook",
          "Introduction to State Management with Redux Toolkit (RTK)",
          "Async Actions with Redux Thunk and RTK Query",
          "Client-Side Routing with React Router v6 (Routes, Route, Link, useNavigate)",
          "Building Custom Hooks for Logic Reusability",
          "Controlled vs. Uncontrolled Components",
          "Introduction to Component Testing with Jest and React Testing Library",
        ],
      },
      {
        module: "Production & Deployment",
        topics: [
          "Performance Optimization: React.memo, useMemo, useCallback",
          "Code Splitting and Lazy Loading with React.lazy",
          "Building for Production: Optimized Bundles",
          "Continuous Deployment Pipelines with GitHub Actions",
          "Deploying to Vercel, Netlify, and GitHub Pages",
          "Final Capstone Project: A Full-Featured React SPA from Design to Deployment",
        ],
      },
    ],
  },

  
  {
    courseID: 3,
    CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742026643/ipyhmia3qx5e2ykcy9ep-removebg-preview_k1hkxr.png",
    courseName: "Microsoft Excel",
    CourseDescription : "Comprehensive course covering all essential concepts of Microsoft Excel",
    description: "Master Microsoft Excel from the ground up and become proficient in one of the most in-demand productivity tools used in business, finance, data analysis, and everyday work. This course takes you from basic spreadsheet fundamentals to advanced techniques, including formulas and functions, data validation, conditional formatting, pivot tables, charts and visualizations, VLOOKUP/XLOOKUP, Power Query, and an introduction to macros and automation. Through practical, real-world exercises and projects, you’ll learn how to clean, analyze, and present data effectively, build professional reports, and streamline repetitive tasks—giving you the skills and confidence to use Excel productively in any professional environment.",
    courseDuration: "3 months",
    courseFee: "5000",
    courseLearnings: [
  "Navigate the Excel interface and efficiently manage workbooks, worksheets, and cells.",
  "Create, edit, and format professional spreadsheets with proper data organization.",
  "Master essential formulas and functions including SUM, AVERAGE, IF, VLOOKUP, XLOOKUP, INDEX-MATCH, and nested functions.",
  "Apply conditional formatting, data validation, and custom number formats for better data presentation.",
  "Analyze data effectively using PivotTables, PivotCharts, and advanced filtering techniques.",
  "Create professional charts, graphs, and visual dashboards to present insights clearly.",
  "Clean and transform data using Power Query and Text-to-Columns tools.",
  "Automate repetitive tasks with basic macros and an introduction to VBA.",
  "Protect workbooks, manage multiple sheets, and collaborate using shared workbooks or OneDrive.",
  "Build practical real-world projects such as budgets, dashboards, reports, and data analysis models.",
],
courseSyllabus: [
  {
    module: "Excel Fundamentals & Interface",
    topics: [
      "Excel Interface Overview: Ribbon, Quick Access Toolbar, and Status Bar",
      "Working with Workbooks, Worksheets, and Cells",
      "Data Entry, Editing, and Basic Formatting Techniques",
      "Cell References: Relative, Absolute, and Mixed",
      "Basic Formulas and AutoFill Features",
      "Managing Rows, Columns, and Worksheet Structure",
    ],
  },
  {
    module: "Formulas, Functions & Data Handling",
    topics: [
      "Essential Math & Statistical Functions (SUM, AVERAGE, COUNT, MIN, MAX)",
      "Logical Functions: IF, AND, OR, Nested IFs",
      "Lookup & Reference Functions: VLOOKUP, HLOOKUP, XLOOKUP, INDEX-MATCH",
      "Text Functions: LEFT, RIGHT, MID, CONCATENATE, TEXTJOIN, TRIM",
      "Date & Time Functions",
      "Data Validation and Dropdown Lists",
      "Conditional Formatting Rules and Formulas",
    ],
  },
  {
    module: "Data Analysis & Visualization",
    topics: [
      "Sorting, Filtering, and Advanced Filter Techniques",
      "Creating and Customizing PivotTables",
      "PivotCharts and Slicers for Interactive Analysis",
      "Building Professional Charts (Column, Line, Pie, Combo, etc.)",
      "Sparklines and Data Bars for Visual Insights",
      "Introduction to Dashboards and Report Design",
      "What-If Analysis: Goal Seek, Scenario Manager, and Data Tables",
    ],
  },
  {
    module: "Advanced Tools, Automation & Projects",
    topics: [
      "Power Query: Importing, Cleaning, and Transforming Data",
      "Working with Multiple Worksheets and Workbooks",
      "Protecting Sheets, Workbooks, and Cells",
      "Introduction to Macros and VBA Basics",
      "Keyboard Shortcuts and Productivity Tips",
      "Real-World Project: Budget Tracker / Sales Dashboard",
      "Capstone Project: End-to-End Data Analysis Report with Dashboard",
    ],
  },
],
  },

 {
  courseID: 4,
  CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742026643/ipyhmia3qx5e2ykcy9ep-removebg-preview_k1hkxr.png",
  courseName: "Java",
  CourseDescription: "Complete course covering Core Java to advanced concepts for real-world development",
  description: "Master Java programming from the fundamentals to advanced topics and become a confident Java developer. This comprehensive course starts with basic syntax, data types, and control structures, then dives deep into Object-Oriented Programming principles. You will learn exception handling, collections framework, multithreading, file handling, and JDBC for database connectivity. The course also covers modern Java features, best practices, and hands-on projects so you can build robust console and real-world applications. By the end, you will have strong problem-solving skills and a solid foundation ready for backend development, Android, or enterprise applications.",
  courseDuration: "4 months",
  courseFee: "8000",
  courseLearnings: [
    "Understand Java syntax, data types, operators, and control flow statements.",
    "Apply Object-Oriented Programming concepts: Classes, Objects, Inheritance, Polymorphism, Abstraction, and Encapsulation.",
    "Handle exceptions effectively using try-catch, throw, throws, and custom exceptions.",
    "Work with Java Collections Framework (List, Set, Map, Queue) and Generics.",
    "Implement multithreading and concurrency for efficient programs.",
    "Perform file handling and I/O operations using Java streams.",
    "Connect Java applications to databases using JDBC.",
    "Use modern Java features such as Lambda expressions, Streams API, and Optional.",
    "Write clean, reusable, and maintainable code following best practices.",
    "Build real-world console-based and mini projects to strengthen practical skills.",
  ],
  courseSyllabus: [
    {
      module: "Java Fundamentals",
      topics: [
        "Introduction to Java and JVM Architecture",
        "Setting up JDK, IDE (IntelliJ / Eclipse / VS Code)",
        "Variables, Data Types, and Type Casting",
        "Operators and Expressions",
        "Control Statements: if-else, switch, loops",
        "Arrays and Strings in Java",
        "Methods and Method Overloading",
      ],
    },
    {
      module: "Object-Oriented Programming in Java",
      topics: [
        "Classes, Objects, and Constructors",
        "this and static keywords",
        "Inheritance and Method Overriding",
        "Polymorphism (Compile-time & Runtime)",
        "Abstraction using Abstract Classes and Interfaces",
        "Encapsulation and Access Modifiers",
        "Packages and Access Control",
      ],
    },
    {
      module: "Advanced Java Concepts",
      topics: [
        "Exception Handling and Custom Exceptions",
        "Java Collections Framework (ArrayList, LinkedList, HashSet, HashMap, etc.)",
        "Generics and Wrapper Classes",
        "Multithreading and Thread Lifecycle",
        "Synchronization and Concurrent Collections",
        "File Handling and Java I/O Streams",
        "Introduction to Lambda Expressions and Stream API",
      ],
    },
    {
      module: "Database Connectivity & Projects",
      topics: [
        "JDBC Architecture and Drivers",
        "CRUD Operations with MySQL using JDBC",
        "PreparedStatement and ResultSet",
        "Best Practices and Code Optimization",
        "Mini Project: Student Management System",
        "Mini Project: Banking / Inventory Console Application",
        "Capstone Project: Complete Console-based Application with OOP + JDBC",
      ],
    },
  ],
},

 {
  courseID: 5,
  CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742026643/ipyhmia3qx5e2ykcy9ep-removebg-preview_k1hkxr.png",
  courseName: "JavaScript",
  CourseDescription: "Complete course covering modern JavaScript from basics to advanced concepts",
  description: "Master JavaScript from the ground up and become a proficient frontend developer. This comprehensive course starts with core language fundamentals and progresses to advanced topics including ES6+ features, DOM manipulation, asynchronous programming, and working with APIs. You will learn how to write clean, efficient, and modern JavaScript code, handle events, build interactive web pages, and understand key concepts like closures, promises, and async/await. Through practical exercises and real-world projects, you will gain the skills needed to create dynamic web applications and prepare for frameworks like React.",
  courseDuration: "3 months",
  courseFee: "6000",
  courseLearnings: [
    "Understand JavaScript fundamentals: variables, data types, operators, and control structures.",
    "Work with functions, scope, hoisting, and closures effectively.",
    "Manipulate the DOM and handle events to create interactive web pages.",
    "Master modern ES6+ features including arrow functions, destructuring, spread/rest, modules, and template literals.",
    "Handle asynchronous operations using Callbacks, Promises, and Async/Await.",
    "Make API calls using Fetch and work with JSON data.",
    "Understand and apply array methods (map, filter, reduce, etc.) and object manipulation.",
    "Implement error handling and debugging techniques.",
    "Write clean, modular, and reusable JavaScript code following best practices.",
    "Build real-world interactive projects and mini applications.",
  ],
  courseSyllabus: [
    {
      module: "JavaScript Fundamentals",
      topics: [
        "Introduction to JavaScript and How it Works in the Browser",
        "Variables (var, let, const) and Data Types",
        "Operators, Expressions, and Type Conversion",
        "Control Flow: if-else, switch, loops (for, while, do-while)",
        "Functions: Declaration, Expression, Arrow Functions",
        "Scope, Hoisting, and Closures",
        "Arrays and Basic Array Methods",
      ],
    },
    {
      module: "DOM Manipulation & Events",
      topics: [
        "Selecting and Manipulating DOM Elements",
        "Creating, Adding, and Removing Elements Dynamically",
        "Event Handling and Event Listeners",
        "Event Bubbling, Capturing, and Delegation",
        "Working with Forms and Form Validation",
        "Local Storage and Session Storage",
        "Building Interactive UI Components",
      ],
    },
    {
      module: "Modern JavaScript (ES6+) & Asynchronous Programming",
      topics: [
        "ES6+ Features: Destructuring, Spread/Rest, Template Literals",
        "Modules (import/export) and Code Organization",
        "Array Methods: map, filter, reduce, find, forEach",
        "Objects, Object Methods, and this Keyword",
        "Callbacks and Callback Hell",
        "Promises and Promise Chaining",
        "Async/Await and Error Handling with try-catch",
      ],
    },
    {
      module: "APIs, Best Practices & Projects",
      topics: [
        "Working with Fetch API and JSON",
        "Making GET, POST requests and Handling Responses",
        "Error Handling and Debugging Techniques",
        "JavaScript Best Practices and Clean Code",
        "Mini Project: To-Do List Application",
        "Mini Project: Weather App using API",
        "Capstone Project: Interactive Web Application (e.g., Quiz App / Expense Tracker)",
      ],
    },
  ],
},

  {
    courseID: 6,
    CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1739439665/Course-logo/dbbtp9rwyom4vjjxn2x5.png",
   
   CourseDescription : " Covers all the concepts of Tally",
    courseName: "Tally",
    description: "Gain a powerful competitive edge in the fields of accounting and finance with this comprehensive course on TallyPrime, India's leading business management and GST compliance software. This program is ideal for aspiring accountants, business owners, and finance professionals. You will build a strong foundation in accounting principles and then learn how to implement them digitally using Tally. The course covers everything from basic company setup and ledger creation to advanced features like managing complex inventory, processing payroll, and most importantly, handling all aspects of GST—from configuration and filing to generating e-way bills. Upon completion, you will be proficient in using Tally for day-to-day business accounting and generating crucial financial reports for decision-making.",
    courseDuration: "3 Months",
    courseFee: "10000",
    courseLearnings: [
      "Understand fundamental accounting concepts and the double-entry system (Debit/Credit).",
      "Create and manage company data, groups, ledgers, and vouchers in Tally.",
      "Record all types of accounting transactions including receipts, payments, sales, and purchases.",
      "Manage inventory: create stock items, godowns, and track stock movements.",
      "Configure and apply GST rates to transactions accurately.",
      "Generate GST returns (GSTR-1, GSTR-3B) and e-way bills directly from Tally.",
      "Process payroll, calculate salaries, and generate pay slips.",
      "Produce essential financial statements: Balance Sheet, Profit & Loss Account, Cash Flow Statement.",
      "Generate and analyze various business reports for accounting, inventory, and taxation.",
    ],
    courseSyllabus: [
      {
        module: "Accounting Fundamentals in Tally",
        topics: [
          "Introduction to Accounting Principles and TallyPrime Interface",
          "Creating a Company and Configuring Features",
          "Creating Chart of Accounts: Groups and Ledgers",
          "Recording Transactions: Voucher Entry (Payment, Receipt, Contra, Journal, Sales, Purchase)",
          "Generating Key Reports: Trial Balance, Day Book, and Ledger Statements",
        ],
      },
      {
        module: "Inventory & Advanced Accounting",
        topics: [
          "Setting Up Inventory Masters: Stock Groups, Items, Units, and Godowns",
          "Recording Inventory Vouchers: Stock Journal, Delivery Note, Receipt Note",
          "Tracking Cost Centers and Categories for detailed reporting",
          "Bank Reconciliation Statements",
        ],
      },
      {
        module: "GST Compliance & Payroll",
        topics: [
          "Configuring GST Settings for a Company",
          "Recording GST-Compliant Sales and Purchase Invoices",
          "Generating GST Returns (GSTR-1, GSTR-3B) and Reconciliation Reports",
          "Creating and Managing E-Way Bills",
          "Setting Up Payroll and Processing Employee Salary",
          "Final Project: Managing Books of Accounts for a Sample Business for a Full Financial Year",
        ],
      },
    ],
  },

 {
  courseID: 7,
  CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742026643/ipyhmia3qx5e2ykcy9ep-removebg-preview_k1hkxr.png",
  courseName: "DCA (Diploma in Computer Application)",
  CourseDescription: "Complete Diploma in Computer Application covering computer fundamentals, MS Office, internet, and basic programming",
  description: "Build a strong foundation in computers with this comprehensive Diploma in Computer Application (DCA) program. Designed for beginners, this course covers everything from basic computer concepts and operating systems to complete MS Office suite (Word, Excel, PowerPoint, Access), internet applications, email, and an introduction to programming. Through practical hands-on training and real-world assignments, you will gain the essential computer skills required for office jobs, data entry, administrative roles, and further studies in IT. By the end of the course, you will be confident in using computers productively for both personal and professional work.",
  courseDuration: "6 months",
  courseFee: "10000",
  courseLearnings: [
    "Understand computer fundamentals, hardware, software, and operating system basics.",
    "Work confidently with Windows OS – file management, settings, and troubleshooting.",
    "Create professional documents using Microsoft Word (formatting, tables, mail merge).",
    "Perform data analysis and calculations using Microsoft Excel (formulas, charts, pivot tables).",
    "Design effective presentations with Microsoft PowerPoint.",
    "Manage databases using Microsoft Access.",
    "Use internet effectively – browsing, email, Google tools, and online safety.",
    "Learn basic programming concepts and write simple programs.",
    "Develop typing speed and computer proficiency for office work.",
    "Build practical projects and gain job-ready computer application skills.",
  ],
  courseSyllabus: [
    {
      module: "Computer Fundamentals & Operating System",
      topics: [
        "Introduction to Computers – Hardware & Software",
        "Input, Output, and Storage Devices",
        "Number System and Computer Memory",
        "Windows Operating System – Desktop, Files & Folders",
        "Control Panel, Settings, and System Utilities",
        "Computer Security and Basic Troubleshooting",
        "Introduction to Computer Networks",
      ],
    },
    {
      module: "Microsoft Office – Word & PowerPoint",
      topics: [
        "MS Word Interface and Document Creation",
        "Text Formatting, Styles, and Paragraph Settings",
        "Working with Tables, Images, and SmartArt",
        "Mail Merge, Headers, Footers, and Page Setup",
        "MS PowerPoint – Creating Professional Presentations",
        "Slide Design, Transitions, and Animations",
        "Inserting Media, Charts, and Delivery Tips",
      ],
    },
    {
      module: "Microsoft Excel, Access & Internet",
      topics: [
        "MS Excel Basics – Workbook, Worksheet, and Cells",
        "Formulas, Functions, and Cell References",
        "Charts, Conditional Formatting, and Data Validation",
        "Introduction to Pivot Tables",
        "MS Access – Creating Tables, Forms, and Queries",
        "Internet Basics, Web Browsers, and Search Engines",
        "Email (Gmail), Google Drive, and Online Tools",
      ],
    },
    {
      module: "Basic Programming & Project Work",
      topics: [
        "Introduction to Programming Concepts",
        "Basics of C / Python Programming (Syntax & Logic)",
        "Writing Simple Programs – Variables, Conditions, Loops",
        "Typing Practice and Speed Improvement",
        "Mini Project: Official Letter + Excel Report",
        "Mini Project: Presentation + Database",
        "Final Project: Complete Office Automation Assignment",
      ],
    },
  ],
},

  {
    courseID: 8,
    CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742026887/oflds6wit4dszjsspyfe-removebg-preview_gxqziq.png",
    CourseDescription : "Cover all the concepts of Wordpress",
    courseName: "WordPress",
    description: "Empower yourself to build powerful, dynamic websites without writing code by mastering WordPress, the world's most popular Content Management System (CMS). This course is designed for entrepreneurs, bloggers, marketers, and aspiring web developers. You will learn how to install WordPress, choose and customize themes to control your site's appearance, and extend functionality with plugins. The curriculum covers everything from creating pages and blog posts to managing users, comments, and media. You will also learn crucial skills for website management, including search engine optimization (SEO) to increase visibility, security best practices to protect your site, and performance optimization to ensure a fast user experience. By the end, you'll be able to build and manage professional websites for yourself or clients.",
    courseDuration: "3 Months",
    courseFee: "15000",

    courseLearnings: [
      "Install WordPress on a local server and live web hosting (cPanel).",
      "Navigate the WordPress Admin Dashboard with confidence.",
      "Install, customize, and configure themes to change a website's design.",
      "Extend website functionality by finding, installing, and configuring plugins.",
      "Create and manage content: pages, posts, custom post types, and media.",
      "Build navigation menus, sidebars, and widgets.",
      "Understand and implement basic Search Engine Optimization (SEO) techniques.",
      "Apply security measures to protect a WordPress website from common threats.",
      "Manage users, comments, and website settings.",
      "Perform basic troubleshooting and maintenance, including updates and backups.",
    ],
    courseSyllabus: [
      {
        module: "WordPress Basics & Setup",
        topics: [
          "Introduction to CMS and WordPress.org vs. WordPress.com",
          "Manual Installation on Web Hosting (cPanel) and Local Server (Local by Flywheel)",
          "Dashboard Overview: Posts, Pages, Media, Comments, and Appearance",
          "Creating and Formatting Content: The Gutenberg Block Editor",
          "Managing Media: Uploading and Optimizing Images",
        ],
      },
      {
        module: "Customization with Themes & Plugins",
        topics: [
          "Finding, Installing, and Activating Themes",
          "Customizing Appearance with the WordPress Customizer",
          "Introduction to Page Builders (Elementor) for Drag-and-Drop Design",
          "Extending Functionality: Essential Plugins for Contact Forms, SEO, Security, and Backup",
          "Creating Custom Menus and Widget Areas",
        ],
      },
      {
        module: "Management, SEO & Security",
        topics: [
          "User Management: Roles and Capabilities",
          "Introduction to SEO: Using a Plugin like Yoast or Rank Math",
          "Website Security: Strong Passwords, Security Plugins, and Best Practices",
          "Website Maintenance: Updating Core, Themes, and Plugins; Creating Backups",
          "Website Performance: Caching and Image Optimization",
          "Final Project: Building a Complete Business or Blog Website from Scratch",
        ],
      },
    ],
  },

  {
  courseID: 9,
  CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742026643/ipyhmia3qx5e2ykcy9ep-removebg-preview_k1hkxr.png",
  courseName: "SQL",
  CourseDescription: "Complete course covering SQL from basics to advanced database querying and management",
  description: "Master Structured Query Language (SQL) and become proficient in working with relational databases. This course takes you from fundamental concepts of databases to advanced SQL techniques. You will learn how to create and manage databases, write efficient queries, use joins, subqueries, aggregate functions, and perform data manipulation. The course also covers views, indexes, stored procedures, and best practices for writing optimized SQL. Through practical hands-on exercises and real-world projects, you will gain the skills required for data analysis, backend development, and database administration roles.",
  courseDuration: "2 months",
  courseFee: "5000",
  courseLearnings: [
    "Understand relational database concepts and RDBMS fundamentals.",
    "Write basic to advanced SQL queries for data retrieval (SELECT statements).",
    "Create, modify, and delete database objects using DDL commands.",
    "Perform data manipulation using INSERT, UPDATE, and DELETE statements.",
    "Use JOINs (INNER, LEFT, RIGHT, FULL) to combine data from multiple tables.",
    "Apply aggregate functions, GROUP BY, and HAVING clauses for data analysis.",
    "Write subqueries and nested queries for complex data retrieval.",
    "Create and manage Views, Indexes, and Constraints.",
    "Understand transactions, ACID properties, and basic database security.",
    "Build practical projects by solving real-world database problems.",
  ],
  courseSyllabus: [
    {
      module: "Database Fundamentals & Basic SQL",
      topics: [
        "Introduction to Databases and RDBMS",
        "Database vs DBMS vs RDBMS",
        "SQL vs NoSQL Overview",
        "Installing and Setting up MySQL / PostgreSQL",
        "Basic SELECT Statements and Filtering with WHERE",
        "ORDER BY, LIMIT, and DISTINCT",
        "SQL Data Types and Operators",
      ],
    },
    {
      module: "Data Definition & Manipulation",
      topics: [
        "DDL Commands: CREATE, ALTER, DROP, TRUNCATE",
        "Creating Tables with Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK)",
        "DML Commands: INSERT, UPDATE, DELETE",
        "Working with NULL values and DEFAULT",
        "Database and Table Management",
        "Importing and Exporting Data",
      ],
    },
    {
      module: "Advanced Querying Techniques",
      topics: [
        "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
        "GROUP BY and HAVING Clauses",
        "JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, SELF JOIN",
        "Subqueries (Single-row, Multi-row, Correlated)",
        "UNION, INTERSECT, and EXISTS",
        "String, Date, and Numeric Functions",
        "CASE Statements and Conditional Logic",
      ],
    },
    {
      module: "Database Objects, Optimization & Projects",
      topics: [
        "Creating and Using Views",
        "Indexes – Types and Performance Benefits",
        "Introduction to Stored Procedures and Functions",
        "Transactions and ACID Properties",
        "Basic Database Security and User Management",
        "Mini Project: Employee Management Database",
        "Capstone Project: E-commerce / Library Management System Queries",
      ],
    },
  ],
},

 {
  courseID: 10,
  CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742026643/ipyhmia3qx5e2ykcy9ep-removebg-preview_k1hkxr.png",
  courseName: "C++",
  CourseDescription: "Complete course covering C++ programming from basics to Object-Oriented and advanced concepts",
  description: "Master C++ programming from the fundamentals to advanced Object-Oriented concepts and become a strong programmer. This comprehensive course starts with basic syntax, data types, and control structures, then progresses to functions, arrays, pointers, and Object-Oriented Programming pillars. You will also learn about file handling, exception handling, the Standard Template Library (STL), and modern C++ features. Through practical coding exercises and real-world projects, you will develop strong logical thinking and problem-solving skills essential for software development, competitive programming, and system-level programming.",
  courseDuration: "4 months",
  courseFee: "7500",
  courseLearnings: [
    "Understand C++ syntax, data types, operators, and control flow statements.",
    "Work with functions, arrays, strings, and pointers effectively.",
    "Apply Object-Oriented Programming concepts: Classes, Objects, Inheritance, Polymorphism, Abstraction, and Encapsulation.",
    "Handle memory management using dynamic allocation (new/delete).",
    "Implement exception handling and file handling operations.",
    "Use Standard Template Library (STL) – vectors, lists, maps, sets, and algorithms.",
    "Understand constructors, destructors, operator overloading, and friend functions.",
    "Write clean, efficient, and reusable C++ code following best practices.",
    "Develop logical thinking and problem-solving skills through coding exercises.",
    "Build real-world console-based projects to strengthen practical knowledge.",
  ],
  courseSyllabus: [
    {
      module: "C++ Fundamentals",
      topics: [
        "Introduction to C++ and Setting up Development Environment",
        "Variables, Data Types, and Type Conversion",
        "Operators and Expressions",
        "Control Statements: if-else, switch, loops",
        "Functions – Declaration, Definition, Call by Value/Reference",
        "Arrays (1D & 2D) and Strings",
        "Pointers and References Basics",
      ],
    },
    {
      module: "Object-Oriented Programming in C++",
      topics: [
        "Classes and Objects",
        "Constructors and Destructors",
        "Access Specifiers and Encapsulation",
        "Inheritance (Single, Multiple, Multilevel, Hierarchical)",
        "Polymorphism – Function Overloading & Overriding",
        "Abstract Classes and Virtual Functions",
        "Friend Functions and Operator Overloading",
      ],
    },
    {
      module: "Advanced C++ Concepts",
      topics: [
        "Dynamic Memory Allocation (new and delete)",
        "Exception Handling (try, catch, throw)",
        "File Handling – Reading and Writing Files",
        "Templates – Function and Class Templates",
        "Introduction to Standard Template Library (STL)",
        "STL Containers: Vector, List, Stack, Queue, Map, Set",
        "STL Algorithms and Iterators",
      ],
    },
    {
      module: "Projects & Best Practices",
      topics: [
        "Modern C++ Features Overview (C++11/14/17 basics)",
        "Code Optimization and Best Practices",
        "Debugging Techniques and Common Errors",
        "Mini Project: Student Record Management System",
        "Mini Project: Bank Management / Library System",
        "Capstone Project: Complete Console Application using OOP + STL",
        "Introduction to Competitive Programming Basics",
      ],
    },
  ],
},

  {
  courseID: 12,
  CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1739439665/Course-logo/ubra8mifjr9kdlzs4rht.jpg",
  courseName: "Computer Fundamentals & Office Applications",
  CourseDescription : "Computer Fundamentals & Office Applications course covering all the concepts of Computer Fundamentals & Office Applications",
  description: "A comprehensive 3-month course designed to build a solid foundation in computer operations and essential software skills. This program is perfect for beginners, job seekers, and professionals looking to enhance their digital literacy. You'll start with the absolute basics of computer hardware and software, then progress to mastering the Microsoft Office Suite—the industry standard for productivity software. The course also covers practical internet skills, email etiquette, and crucial cybersecurity practices to keep you safe online. Through hands-on exercises and real-world projects, you'll gain the confidence and competence needed to thrive in today's digital workplace, whether you're creating professional documents, analyzing data, or communicating effectively online.",
  courseDuration: "3 Months",
  courseFee: "10000",
  courseLearnings: [
    "Understand computer architecture, hardware components, and software ecosystems",
    "Navigate operating systems (Windows/macOS) with proficiency and confidence",
    "Master file management techniques for organizing digital documents efficiently",
    "Create professional documents with advanced formatting in Microsoft Word",
    "Build complex spreadsheets with formulas, functions, and data analysis in Excel",
    "Design compelling presentations with animations and transitions in PowerPoint",
    "Utilize internet resources effectively for research and information gathering",
    "Practice professional email communication with proper etiquette and organization",
    "Implement cybersecurity best practices to protect personal and work data",
    "Develop touch typing skills with improved speed and accuracy",
    "Troubleshoot common computer problems and perform basic maintenance",
    "Use cloud storage services for backup and file sharing across devices"
  ],
  courseSyllabus: [
    {
      module: "Computer Fundamentals & Operating Systems",
      topics: [
        "Introduction to Computing: History and Evolution of Computers",
        "Hardware Components: CPU, RAM, Storage, Motherboard, and Peripherals",
        "Software Types: System Software vs. Application Software",
        "Operating System Navigation: Windows and macOS Interfaces",
        "File System Management: Creating, Organizing, and Searching for Files",
        "System Configuration: Display Settings, User Accounts, and Accessibility Options",
        "Installing and Uninstalling Software Applications",
        "Using Utility Programs: Disk Cleanup, Defragmentation, and Backup Tools"
      ]
    },
    {
      module: "Microsoft Word - Professional Document Creation",
      topics: [
        "Word Interface Overview: Ribbon, Quick Access Toolbar, and Views",
        "Text Formatting: Fonts, Paragraph Alignment, and Styles",
        "Page Layout: Margins, Orientation, Size, and Columns",
        "Working with Templates and Building Blocks",
        "Advanced Features: Tables, Images, Shapes, and SmartArt",
        "Document References: Table of Contents, Footnotes, and Citations",
        "Mail Merge: Creating Letters, Envelopes, and Labels for Mass Communication",
        "Collaboration Tools: Track Changes, Comments, and Document Comparison",
        "Final Project: Creating a Multi-page Business Report with Professional Formatting"
      ]
    },
    {
      module: "Microsoft Excel - Spreadsheets & Data Analysis",
      topics: [
        "Excel Interface: Workbooks, Worksheets, Cells, and Ranges",
        "Data Entry Techniques and AutoFill Features",
        "Formulas and Functions: SUM, AVERAGE, COUNT, IF, and VLOOKUP",
        "Cell Referencing: Relative, Absolute, and Mixed References",
        "Data Formatting: Number Formats, Conditional Formatting, and Table Styles",
        "Data Management: Sorting, Filtering, and Data Validation",
        "Chart Creation: Bar, Pie, Line, and Combo Charts for Data Visualization",
        "PivotTables and PivotCharts for Dynamic Data Analysis",
        "Final Project: Building a Budget Tracker with Formulas and Charts"
      ]
    },
    {
      module: "Microsoft PowerPoint - Effective Presentations",
      topics: [
        "PowerPoint Interface: Slides, Layouts, and Master Views",
        "Design Principles: Themes, Color Schemes, and Font Pairing",
        "Adding and Formatting Content: Text Boxes, Images, and Media",
        "Slide Transitions and Animation Effects",
        "Multimedia Integration: Audio, Video, and Screen Recording",
        "Presenter View: Notes, Timer, and Presentation Tools",
        "Creating Handouts and Exporting Presentations to Other Formats",
        "Final Project: Designing a Business Pitch Deck with Animations and Transitions"
      ]
    },
    {
      module: "Internet, Email & Cybersecurity",
      topics: [
        "Internet Fundamentals: How the Web Works, Browsers, and Search Engines",
        "Effective Online Research: Advanced Search Techniques and Source Evaluation",
        "Email Management: Creating Professional Accounts, Organizing Folders, and Filters",
        "Email Etiquette: Subject Lines, Salutations, Signatures, and Tone",
        "Cloud Storage: Using Google Drive, OneDrive, and Dropbox for File Management",
        "Cybersecurity Threats: Viruses, Malware, Phishing, and Social Engineering",
        "Password Management: Creating Strong Passwords and Using Password Managers",
        "Privacy Settings: Social Media, Browser, and Application Privacy",
        "Safe Online Practices: Secure Shopping, Banking, and Data Sharing"
      ]
    },
    {
      module: "Capstone Project & Skill Integration",
      topics: [
        "Integrating Office Applications: Embedding Excel Charts in Word and PowerPoint",
        "Creating a Comprehensive Business Portfolio Document",
        "Designing an Interactive Presentation with Linked Excel Data",
        "Developing a Personal Budget in Excel with Charts for Presentation",
        "Final Assessment: Practical Exam Covering All Course Modules",
        "Career Preparation: Building a Digital Skills Resume",
        "Course Review and Next Steps for Continued Learning"
      ]
    }
  ]
  },

  {
    courseID: 11,
    CourseImage: "https://res.cloudinary.com/dufxj1sau/image/upload/v1742027236/qlgtheupsgvqq0vg1ca9-removebg-preview_bvzlbh.png",
    courseName: "Advanced Computer Applications & IT Fundamentals",
    description: "This intensive 6-month program is designed for those who have basic computer skills and want to advance their expertise in specialized areas of computing. The course provides a comprehensive overview of advanced office productivity tools, programming fundamentals, database management, graphic design basics, and networking concepts. You'll dive deep into Excel's powerful data analysis capabilities, learn the logic of programming with Python, understand how to manipulate and query databases, explore graphic design principles, and grasp the fundamentals of computer networking. Through practical projects and hands-on labs, you'll develop a diverse skill set that prepares you for roles requiring technical proficiency across multiple domains, from data analysis to IT support.",
    courseDuration: "6 Months",
    CourseDescription : "Computer Applications Deploma course covering all the concepts of Computer Applications Deploma",
    courseFee: "25000",
    courseLearnings: [
      "Master advanced Excel features including pivot tables, complex formulas, and data visualization",
      "Automate repetitive tasks using Excel macros and VBA programming",
      "Understand programming concepts and write basic Python scripts",
      "Develop problem-solving skills through algorithmic thinking",
      "Create and manage databases using Microsoft Access",
      "Write SQL queries to extract, filter, and analyze data",
      "Apply design principles to create visually appealing graphics and layouts",
      "Understand computer networking fundamentals and protocols",
      "Diagnose and troubleshoot common hardware and software issues",
      "Implement data security practices and backup strategies",
      "Collaborate effectively using cloud-based tools and version control",
      "Prepare for industry-recognized certifications in various IT domains"
    ],
    courseSyllabus: [
      {
        module: "Advanced Microsoft Excel & Automation",
        topics: [
          "Advanced Functions: INDEX-MATCH, SUMIFS, COUNTIFS, and Array Formulas",
          "Data Analysis with PivotTables and PivotCharts: Slicers, Timelines, and Calculated Fields",
          "What-If Analysis: Data Tables, Goal Seek, and Scenario Manager",
          "Data Visualization: Advanced Chart Types, Sparklines, and Conditional Formatting",
          "Introduction to Excel VBA: Recording Macros, Understanding the VBA Editor",
          "Writing Basic VBA Code: Variables, Loops, and Conditional Statements",
          "Creating User Forms and Custom Functions with VBA",
          "Automating Complex Workflows and Data Processing Tasks",
          "Project: Building an Automated Dashboard with Interactive Elements"
        ]
      },
      {
        module: "Programming Fundamentals with Python",
        topics: [
          "Introduction to Programming: Algorithms, Flowcharts, and Pseudocode",
          "Python Environment Setup: Installing Python and an IDE (PyCharm/VSCode)",
          "Python Syntax: Variables, Data Types, and Basic Operations",
          "Control Structures: Conditional Statements (if, elif, else) and Logical Operators",
          "Loops: For loops, While loops, and Loop Control Statements",
          "Data Structures: Lists, Tuples, Dictionaries, and Sets",
          "Functions: Defining Functions, Parameters, Return Values, and Scope",
          "File Handling: Reading from and Writing to Text Files",
          "Error Handling: Try-Except Blocks and Exception Management",
          "Project: Building a Text-Based Application (Calculator/To-Do List)"
        ]
      },
      {
        module: "Database Management with Access & SQL",
        topics: [
          "Database Concepts: Tables, Records, Fields, and Relationships",
          "Designing a Database: Normalization and Entity-Relationship Diagrams",
          "Microsoft Access Interface: Tables, Queries, Forms, and Reports",
          "Creating and Managing Tables: Data Types, Primary Keys, and Indexes",
          "Querying Data: Select Queries, Criteria, and Sorting",
          "Advanced Queries: Parameter Queries, Action Queries, and CrossTab Queries",
          "Introduction to SQL: SELECT, FROM, WHERE, ORDER BY, and JOIN Statements",
          "Building User Interfaces: Forms with Controls and Subforms",
          "Generating Reports: Grouping, Sorting, and Calculating Data",
          "Project: Developing a Complete Database Application for Inventory Management"
        ]
      },
      {
        module: "Graphic Design Fundamentals",
        topics: [
          "Design Principles: Balance, Contrast, Hierarchy, and Alignment",
          "Color Theory: Color Wheels, Harmonies, and Psychology of Color",
          "Typography: Font Families, Pairing, and Hierarchy",
          "Introduction to Adobe Photoshop: Interface, Tools, and Layers",
          "Image Editing: Cropping, Resizing, Retouching, and Color Correction",
          "Introduction to Adobe Illustrator: Vector Graphics, Paths, and Shapes",
          "Logo Design and Brand Identity Basics",
          "Layout Design: Creating Flyers, Brochures, and Social Media Graphics",
          "Project: Designing a Cohesive Brand Identity Package"
        ]
      },
      {
        module: "Networking & IT Infrastructure",
        topics: [
          "Networking Fundamentals: LAN, WAN, MAN, and Network Topologies",
          "OSI and TCP/IP Models: Understanding Network Layers",
          "Network Devices: Routers, Switches, Hubs, and Modems",
          "IP Addressing: IPv4, Subnetting, and Introduction to IPv6",
          "Network Protocols: HTTP, HTTPS, FTP, DNS, and DHCP",
          "Wireless Networking: Wi-Fi Standards, Security, and Configuration",
          "Network Troubleshooting: Using Command Line Tools (ipconfig, ping, tracert)",
          "Introduction to Cloud Computing: IaaS, PaaS, SaaS Models",
          "Project: Designing a Small Office Network Infrastructure"
        ]
      },
      {
        module: "System Administration & Troubleshooting",
        topics: [
          "Operating System Installation: Windows and Linux Basics",
          "User Account Management: Permissions and Access Control",
          "System Maintenance: Disk Management, Updates, and Backup Strategies",
          "Troubleshooting Methodology: Identifying and Resolving Common Issues",
          "Hardware Basics: Component Identification, Installation, and Upgrades",
          "Software Troubleshooting: Compatibility, Installation, and Removal",
          "Security Practices: Antivirus, Firewalls, and Malware Removal",
          "Remote Access and Support Tools",
          "Project: Performing a Complete System Diagnostic and Optimization"
        ]
      },
      {
        module: "Capstone Project & Career Preparation",
        topics: [
          "Integrating Multiple Skills: Developing a Comprehensive Business Solution",
          "Project Management Basics: Planning, Execution, and Documentation",
          "Creating a Technical Portfolio Showcasing Course Projects",
          "Resume Preparation: Highlighting Technical Skills and Achievements",
          "Interview Preparation: Technical Questions and Problem-Solving Scenarios",
          "Industry Certifications Overview: Microsoft Office Specialist, CompTIA ITF+, etc.",
          "Continuing Education Paths: Specialized IT Careers and Further Learning",
          "Final Presentation: Demonstrating Capstone Project to Instructors and Peers"
        ]
      }
    ]
  }
];

export default courses;