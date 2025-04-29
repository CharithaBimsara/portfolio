const allProjects = [
  {
    "id": 1,
    "title": "Movie APIs",
    "description": "A backend system for managing movies, built with .NET Core Web API and C#, designed for an admin dashboard.",
    "image": "https://github.com/CharithaBimsara/Movie-Admin-Dashboad--Backend/raw/master/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Movie-Admin-Dashboad--Backend/raw/master/demo.png"
    ],
    "technologies": [".NET Core Web API", "C#", "Entity Framework", "REST API", "SQLServer"],
    "type": "Backend",
    "githubLink": "https://github.com/CharithaBimsara/Movie-Admin-Dashboad--Backend",
    "featured": true,
    "features": [
      "Admin authentication and authorization",
      "CRUD operations for movie data",
      "Database management with MongoDB",
      "REST API for handling requests"
    ],
    "manualDescription": "The Movie Admin Dashboard backend project is built to provide a fully functional system for managing movie-related data, targeted at administrators. It is developed using .NET Core Web APIs and C# for the server-side, while SQL Server is used as the database to store and manage the data. The backend allows administrators to authenticate securely, perform CRUD (Create, Read, Update, Delete) operations on movie data, and handle various requests through a RESTful API. This project ensures scalability, security, and flexibility by using modern backend technologies. With easy-to-use endpoints, administrators can perform necessary actions like adding a new movie, updating movie details, deleting records, and retrieving data efficiently. This project is designed with high-level security protocols to ensure safe and authenticated access to sensitive data, making it suitable for use in large movie management systems or platforms."
  },
  {
    "id": 2,
    "title": "Movie Admin Dashboard",
    "description": "A frontend interface for the movie admin dashboard, built with React with Vite and Tailwind CSS.",
    "image": "https://github.com/CharithaBimsara/Movie-Admin-Dashboad--Frontend/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Movie-Admin-Dashboad--Frontend/raw/main/demo.png"
    ],
    "technologies": ["React","Vite", "Tailwind", "CSS"],
    "type": "Frontend",
    "githubLink": "https://github.com/CharithaBimsara/Movie-Admin-Dashboad--Frontend",
    "featured": true,
    "features": [
      "Admin dashboard interface",
      "Responsive design with Tailwind CSS",
      "Movie data display and management features"
    ],
    "manualDescription": "The Movie Admin Dashboard frontend project is designed to provide an intuitive and responsive interface for administrators to manage movie-related data. Built with React for the frontend framework and Tailwind CSS for modern, user-friendly components, this dashboard allows admins to view movie information, add new entries, and modify or delete existing movie records. The design is highly responsive, ensuring that it looks great on both desktop and mobile devices. The use of Material UI ensures a consistent and attractive layout with easy navigation. The dashboard includes features like tables for displaying movie data, search and filter functionalities, and buttons for performing CRUD operations on movie records. This project is a perfect example of how to build an admin panel for content management systems (CMS) using React and Material UI, providing a sleek and user-friendly solution."
  },
  {
    "id": 3,
    "title": "Student Registration System",
    "description": "A comprehensive student registration system built using the MERN stack.",
    "image": "https://github.com/CharithaBimsara/MERN-stack-Student-Registration-System/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/MERN-stack-Student-Registration-System/raw/main/demo.png"
    ],
    "technologies": ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
    "type": "Full Stack",
    "githubLink": "https://github.com/CharithaBimsara/MERN-stack-Student-Registration-System",
    "featured": true,
    "features": [
      "Student registration and management",
      "Course enrollment",
      "Admin dashboard",
      "User authentication and authorization",
      "Responsive UI"
    ],
    "manualDescription": "The MERN Stack Student Registration System is a comprehensive web application designed to streamline the process of student registration and management within educational institutions. Built using MongoDB, Express.js, React, and Node.js (MERN stack), this system provides an efficient solution for managing student data, course enrollments, and administrative tasks. The application features a user-friendly interface that allows administrators to register new students, update existing student information, manage course offerings, and track enrollment statistics. Students can create accounts, browse available courses, register for classes, and view their enrollment status. The system implements secure authentication and authorization mechanisms to ensure data privacy and appropriate access levels for different user roles. With its responsive design, the application is accessible across various devices, making it a versatile tool for educational institutions seeking to modernize their registration processes and enhance administrative efficiency."
  },
  {
    "id": 4,
    "title": "User Management System",
    "description": "A user management system developed using the MERN stack with authentication features.",
    "image": "https://github.com/CharithaBimsara/MERN-stack-user-management-system/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/MERN-stack-user-management-system/raw/main/demo.png"
    ],
    "technologies": ["MongoDB", "Express", "React", "Node.js", "JWT"],
    "type": "Full Stack",
    "githubLink": "https://github.com/CharithaBimsara/MERN-stack-user-management-system",
    "featured": false,
    "features": [
      "User registration and login",
      "Role-based access control",
      "User profile management",
      "JWT authentication",
      "CRUD operations for user data"
    ],
    "manualDescription": "The MERN Stack User Management System is a robust web application designed to facilitate comprehensive user account management and administration. Built on the MongoDB, Express.js, React, and Node.js (MERN) stack, this system provides a secure and scalable solution for handling user registrations, authentication, and profile management. The system implements JWT (JSON Web Token) for secure authentication and session management, ensuring protected access to sensitive user information. The application features role-based access control, allowing administrators to assign different permission levels to users based on their roles within the organization. Administrators can perform full CRUD operations on user accounts, including creating new users, viewing user details, updating information, and deactivating accounts when necessary. The React-based frontend delivers a responsive and intuitive user interface that enhances the user experience across different devices. This user management system serves as an essential component for any organization requiring efficient user account administration and can be easily integrated with other systems or expanded with additional features as needed."
  },
  {
    "id": 5,
    "title": "Todo APIs",
    "description": "A demonstration of a RESTful API for task management.",
    "image": "https://via.placeholder.com/300",
    "galleryImages": [
      "https://via.placeholder.com/300"
    ],
    "technologies": [".NET Core Web API", "Entity Framework", "SQLServer", "REST API"],
    "type": "Backend",
    "githubLink": "https://github.com/CharithaBimsara/TaskApiDemo",
    "featured": false,
    "features": [
      "RESTful API endpoints",
      "Task CRUD operations",
      "API documentation",
      "Error handling"
    ],
    "manualDescription": "The TaskApiDemo project is a comprehensive demonstration of how to build a RESTful API for task management applications. Developed using .NET Core Web APIs and Express.js as the database, this project serves as an educational resource for developers looking to understand RESTful API design principles and implementation. The API provides a complete set of endpoints for task management, including creating new tasks, retrieving tasks with various filtering options, updating task details, and deleting tasks. Each endpoint is carefully designed to follow REST conventions, with appropriate HTTP methods, status codes, and response formats. The project includes thorough error handling to ensure robust operation and meaningful error messages for clients. Additionally, it features comprehensive API documentation using tools like Swagger, making it easy for developers to understand and integrate with the API. This demo project is ideal for learning backend development practices, API design patterns, and MongoDB integration in a Node.js environment."
  },
  {
    "id": 6,
    "title": "Mango Tree Classifire",
    "description": "A machine learning project for classifying tree species using feture enginnering.",
    "image": "https://via.placeholder.com/300",
    "galleryImages": [
      "https://via.placeholder.com/300"
    ],
    "technologies": ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-learn"],
    "type": "Machine Learning",
    "githubLink": "https://github.com/CharithaBimsara/tree-classifier",
    "featured": false,
    "features": [
      "Image preprocessing",
      "Convolutional neural network model",
      "Tree species classification",
      "Model evaluation",
      "Prediction visualization"
    ],
    "manualDescription": "The Tree Classifier project is a sophisticated machine learning application designed to identify and classify different tree species from images. Utilizing Python as the primary programming language, this project leverages deep learning frameworks such as TensorFlow and Keras to build and train a convolutional neural network (CNN) model. The system processes input images through various preprocessing techniques, including resizing, normalization, and data augmentation to enhance the model's learning capabilities and accuracy. The CNN architecture is specifically optimized for identifying distinctive features of various tree species, such as leaf patterns, bark textures, and overall tree structure. The project includes a comprehensive dataset of tree images spanning multiple species, carefully curated to ensure diversity and quality for training. The system provides detailed model evaluation metrics, including accuracy, precision, recall, and F1-score, to assess performance across different tree species. Additionally, the project includes visualization tools to help understand the model's predictions and feature importance. This tree classifier serves as an excellent educational resource for understanding image classification techniques in machine learning while offering practical applications in fields such as forestry, botany, and environmental science."
  },
  {
    "id": 7,
    "title": "Background Remover",
    "description": "A tool for removing backgrounds from images using image processing techniques.",
    "image": "https://github.com/CharithaBimsara/background-remover/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/background-remover/raw/main/demo.png"
    ],
    "technologies": ["Python", "OpenCV", "NumPy", "PIL", "Deep Learning"],
    "type": "Image Processing",
    "githubLink": "https://github.com/CharithaBimsara/background-remover",
    "featured": false,
    "features": [
      "Automated background removal",
      "Support for various image formats",
      "User-friendly interface",
      "Batch processing capability",
      "Transparent background output"
    ],
    "manualDescription": "The Background Remover project is an advanced image processing tool designed to automatically remove backgrounds from images with high precision. Developed in Python, this application leverages computer vision libraries like OpenCV and deep learning models to accurately separate foreground subjects from their backgrounds. The system employs sophisticated segmentation algorithms that analyze pixel data to distinguish between foreground and background elements based on color distribution, edges, and contextual information. Users can process images individually or in batches, with support for multiple common image formats (JPEG, PNG, BMP, etc.). The application produces output images with transparent backgrounds (PNG format), making them immediately usable in graphic design projects, product photography, or web content. The tool features an intuitive user interface that allows users to adjust sensitivity parameters for different image types and preview results before finalizing. Additional features include edge refinement options to ensure smooth transitions around complex edges like hair or fur, and the ability to replace backgrounds with solid colors or other images. This background remover serves as both a practical tool for designers and photographers and an educational resource for understanding advanced image segmentation techniques."
  },
  {
    "id": 8,
    "title": "Calculator App",
    "description": "A simple calculator application built using Flutter framework.",
    "image": "https://github.com/CharithaBimsara/Flutter-calculator/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Flutter-calculator/raw/main/demo.png"
    ],
    "technologies": ["Flutter", "Dart"],
    "type": "Mobile App",
    "githubLink": "https://github.com/CharithaBimsara/Flutter-calculator",
    "featured": false,
    "features": [
      "Basic arithmetic operations",
      "Clean user interface",
      "Cross-platform compatibility",
      "History of calculations",
      "Responsive design"
    ],
    "manualDescription": "The Flutter Calculator is a sleek, modern calculator application developed using the Flutter framework and Dart programming language. This cross-platform mobile application showcases the power and flexibility of Flutter for building intuitive user interfaces with native performance on both iOS and Android platforms. The calculator implements all standard arithmetic operations including addition, subtraction, multiplication, division, and percentage calculations, as well as memory functions and square root operations. The application features a clean, minimalist design with a responsive layout that adapts to different screen sizes and orientations. The calculator's interface includes large, easy-to-tap buttons with visual feedback and a clear display area that shows both the current input and calculation history. The project demonstrates effective state management in Flutter applications, handling user input and calculation logic while maintaining a responsive interface. Additional features include a calculation history log that allows users to review previous calculations and reuse results, theme customization options for personalized appearance, and haptic feedback for button presses. This Flutter Calculator serves as an excellent example project for developers learning mobile app development with Flutter, demonstrating core concepts such as widget composition, state management, and responsive design."
  },
  {
    "id": 9,
    "title": "Weather App",
    "description": "A weather application built with Flutter that displays current weather conditions and forecasts.",
    "image": "https://github.com/CharithaBimsara/Flutter-weather-app/raw/main/assets/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Flutter-weather-app/raw/main/assets/demo.png"
    ],
    "technologies": ["Flutter", "Dart", "Weather API", "Geolocation"],
    "type": "Mobile App",
    "githubLink": "https://github.com/CharithaBimsara/Flutter-weather-app",
    "featured": false,
    "features": [
      "Current weather conditions",
      "5-day forecast",
      "Location-based weather data",
      "Beautiful UI with weather animations",
      "Search for weather by city"
    ],
    "manualDescription": "The Flutter Weather App is a comprehensive mobile application that provides users with accurate and up-to-date weather information in an aesthetically pleasing interface. Developed using Flutter and Dart, this cross-platform application delivers a consistent user experience across both iOS and Android devices. The app integrates with popular weather APIs to fetch current weather conditions, hourly forecasts, and extended 5-day predictions for any location worldwide. Users can access weather data based on their current GPS location or search for specific cities to view their weather information. The application's interface features dynamic backgrounds and animations that reflect current weather conditions, creating an immersive user experience. Weather data is presented in an intuitive format, including temperature, humidity, wind speed and direction, precipitation probability, UV index, and sunrise/sunset times. The app implements efficient state management and caching strategies to minimize API calls and provide a smooth user experience even with limited connectivity. Additional features include customizable units (Celsius/Fahrenheit, km/h/mph), weather alerts and notifications for severe conditions, and historical weather data for comparison. This Flutter Weather App demonstrates effective API integration, geolocation services, data visualization, and responsive design principles within the Flutter framework."
  },
  {
    "id": 10,
    "title": "Wall Color Chnage AI",
    "description": "An AI-powered tool that generates color palettes for wall painting based on user preferences.",
    "image": "https://github.com/CharithaBimsara/WallColorGenAI/raw/main/Demo.gif",
    "galleryImages": [
      "https://github.com/CharithaBimsara/WallColorGenAI/raw/main/Demo.gif",
      "https://camo.githubusercontent.com/ab96b3f01fb26e6d8ea6de4cb21c1614066d4a34b710343604762396e8039077/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6c473053686967785043772f6d617872657364656661756c742e6a7067"
    ],
    "technologies": ["Python", "TensorFlow", "Flask", "React", "Color Theory Algorithms"],
    "type": "AI Application",
    "githubLink": "https://github.com/CharithaBimsara/WallColorGenAI",
    "featured": true,
    "features": [
      "AI-powered color palette generation",
      "Room type customization",
      "Mood-based color suggestions",
      "Color visualization in sample rooms",
      "Exportable color palettes"
    ],
    "manualDescription": "WallColorGenAI is an innovative artificial intelligence application designed to revolutionize the way people select color schemes for interior wall painting. This sophisticated tool combines machine learning algorithms with color theory principles to generate personalized color palettes that match users' preferences and room specifications. The system employs a neural network trained on thousands of professionally designed interiors to understand color harmony, spatial effects of different colors, and emotional responses to various color combinations. Users can specify their room type (living room, bedroom, kitchen, etc.), desired mood (relaxing, energizing, focused, etc.), existing furniture colors, lighting conditions, and room dimensions to receive tailored color recommendations. The application features an interactive visualization component that allows users to see their selected colors applied to sample room images, helping them envision the final result before committing to a color scheme. WallColorGenAI also provides complementary color suggestions for trim, ceiling, and accent walls to create a cohesive design. The system accounts for color psychology principles, ensuring that the suggested palettes align with the intended function of each room. Advanced features include color accessibility checks to ensure sufficient contrast, seasonal color trend integration, and the ability to export color palettes in various formats compatible with major paint brands. This project demonstrates the practical application of AI in creative domains and serves as a valuable tool for homeowners, interior designers, and property developers seeking optimal color solutions for interior spaces."
  },
  {
    "id": 11,
    "title": "Book Store - MERN",
    "description": "A full-stack bookstore application developed using the MERN stack.",
    "image": "https://github.com/CharithaBimsara/Bookstore-MERN/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Bookstore-MERN/raw/main/demo.png"
    ],
    "technologies": ["MongoDB", "Express", "React", "Node.js", "Redux"],
    "type": "Full Stack",
    "githubLink": "https://github.com/CharithaBimsara/Bookstore-MERN",
    "featured": false,
    "features": [
      "Book catalog with search and filtering",
      "User authentication and profiles",
      "Shopping cart and checkout process",
      "Admin panel for inventory management",
      "Responsive design for all devices"
    ],
    "manualDescription": "The Bookstore-MERN project is a comprehensive full-stack e-commerce application specifically designed for online bookstores. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this application offers a complete solution for both book retailers and customers. The platform features an extensive book catalog system that allows users to browse, search, and filter books by various criteria including genre, author, publication date, and price range. The frontend is developed with React and Redux for state management, providing a smooth, single-page application experience with fast navigation and responsive design across all device types. On the backend, Express.js and Node.js handle API requests, business logic, and database operations with MongoDB storing book information, user data, and transaction records. The system includes a robust user authentication mechanism using JWT (JSON Web Tokens) that supports different user roles (customers, administrators) with appropriate access controls. Customers can create accounts, maintain wishlists, write book reviews, and track their order history. The shopping cart functionality allows users to add books, adjust quantities, and proceed through a multi-step checkout process with various payment options. For store administrators, the application provides a comprehensive dashboard to manage inventory, process orders, track sales performance with visualized analytics, and handle customer inquiries. Additional features include email notifications for order updates, a recommendation system based on user browsing history, and integration capabilities with external APIs for book information and payment processing. This Bookstore-MERN project serves as both a practical e-commerce solution and an excellent demonstration of full-stack development practices using modern web technologies."
  },
  {
    "id": 12,
    "title": "Computer Repair Shop - .NET",
    "description": "A comprehensive management system for computer repair shops built using .NET framework.",
    "image": "https://github.com/CharithaBimsara/Computer-Repair-Shop-Management-System-.NET/raw/main/demo1.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Computer-Repair-Shop-Management-System-.NET/raw/main/demo1.png",
      "https://github.com/CharithaBimsara/Computer-Repair-Shop-Management-System-.NET/raw/main/demo2.png"
    ],
    "technologies": [".NET", "C#", "SQL Server", "WPF", "Entity Framework"],
    "type": "Desktop Application",
    "githubLink": "https://github.com/CharithaBimsara/Computer-Repair-Shop-Management-System-.NET",
    "featured": false,
    "features": [
      "Customer and repair job tracking",
      "Inventory management",
      "Billing and invoicing",
      "Technician assignment and scheduling",
      "Reporting and analytics"
    ],
    "manualDescription": "The Computer Repair Shop Management System is a comprehensive desktop application developed using the .NET framework and C# programming language, designed specifically to streamline operations in computer repair businesses. This robust system provides an end-to-end solution for managing all aspects of a repair shop, from initial customer intake to final billing and everything in between. The application features a modular architecture with several integrated components: a customer management module for storing client information, contact details, and service history; a repair ticket system for tracking the status of each repair job through customizable workflow stages; an inventory management system for tracking parts and supplies with automatic reorder notifications when stock runs low; a technician management module for assigning jobs based on expertise and workload; and a comprehensive billing system that generates professional invoices with itemized parts and labor costs. The system utilizes SQL Server as its database backend with Entity Framework for data access, ensuring data integrity and efficient querying. The user interface is built with Windows Presentation Foundation (WPF), providing a modern, intuitive experience with role-based access control for different staff members. Advanced features include appointment scheduling with automated reminders, integrated communication tools for sending status updates to customers, detailed reporting capabilities with visualizations for business performance metrics, barcode scanning for quick part lookups, and a knowledge base for technicians to document common repair procedures. This system significantly improves operational efficiency by reducing paperwork, minimizing human error, and providing real-time visibility into business operations, making it an essential tool for computer repair businesses of all sizes."
  },
  {
    "id": 13,
    "title": "Institue Management System",
    "description": "A management system for educational institutes developed in Java.",
    "image": "https://github.com/CharithaBimsara/Java-Institute-Management-System/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Java-Institute-Management-System/raw/main/demo.png"
    ],
    "technologies": ["Java", "JavaFX", "MySQL", "Hibernate", "JasperReports"],
    "type": "Desktop Application",
    "githubLink": "https://github.com/CharithaBimsara/Java-Institute-Management-System",
    "featured": false,
    "features": [
      "Student registration and management",
      "Course and curriculum management",
      "Faculty and staff administration",
      "Attendance tracking",
      "Examination and grading system",
      "Financial management and fee collection"
    ],
    "manualDescription": "The Java Institute Management System is a comprehensive software solution developed specifically for educational institutions to streamline administrative processes and enhance operational efficiency. Built using Java as the core programming language with JavaFX for the user interface, this desktop application provides a complete ecosystem for managing all aspects of an educational institute. The system employs a modular architecture featuring interconnected components that address various administrative needs: a student management module for handling applications, admissions, and student records; a comprehensive course management system for organizing curricula, scheduling classes, and tracking course materials; faculty management tools for maintaining instructor profiles, managing teaching assignments, and recording performance evaluations; a robust attendance tracking system with automated reports and notifications for excessive absences; an examination management component for scheduling tests, recording grades, and generating transcripts; and financial management tools for processing fee payments, managing scholarships, and tracking institutional expenses. The application uses MySQL as its database backend with Hibernate ORM for data persistence, ensuring reliable data storage and efficient querying capabilities. Advanced reporting functionality is implemented using JasperReports, allowing administrators to generate comprehensive reports on various aspects of institutional performance. Additional features include a parent portal for monitoring student progress, SMS and email notification capabilities for important announcements, library management tools for tracking book loans and returns, alumni tracking for maintaining relationships with graduates, and a secure role-based access control system ensuring that users can only access information relevant to their position. This Java Institute Management System significantly reduces administrative overhead, improves data accuracy, and enhances communication between all stakeholders in the educational process, making it an invaluable tool for schools, colleges, training centers, and other educational organizations."
  },
  {
    "id": 14,
    "title": "Tour-Travel-App-Android",
    "description": "A mobile application for planning and booking tours and travel experiences.",
    "image": "https://github.com/CharithaAdikari/Tour/assets/95647364/795e81a6-bd05-4c59-88b2-242114f40bd7",
    "galleryImages": [
      "https://github.com/CharithaAdikari/Tour/assets/95647364/795e81a6-bd05-4c59-88b2-242114f40bd7",
      "https://github.com/CharithaAdikari/Tour/assets/95647364/ab6fc24b-6bb1-47ae-b3bd-73ce75775cee",
      "https://github.com/CharithaAdikari/Tour/assets/95647364/49fb365f-6028-4a57-9ec2-eea64db96706",
      "https://github.com/CharithaAdikari/Tour/assets/95647364/4384c8c8-544d-426e-8736-e27ae2598505",
      "https://github.com/CharithaAdikari/Tour/assets/95647364/ae45af83-d7aa-44c7-a5d0-30f7b73cca4d",
      "https://github.com/CharithaAdikari/Tour/assets/95647364/de1ea5f3-5e8c-4a2a-9b11-056fae406f70",
      "https://github.com/CharithaAdikari/Tour/assets/95647364/ca3aca6f-dca4-4f79-8ad6-694e75c1f795",
      "https://github.com/CharithaAdikari/Tour/assets/95647364/c31cae08-336e-443f-bf62-f14afe4e799c",
      "https://github.com/CharithaAdikari/Tour/assets/95647364/6e4930fc-9394-4ffd-bb71-5aae55b42e3e"
    ],
    "technologies": ["Java", "Android SDK", "Firebase", "Google Maps API", "Payment Gateway Integration"],
    "type": "Mobile App",
    "githubLink": "https://github.com/CharithaBimsara/Tour-Travel-App-Android",
    "featured": true,
    "features": [
      "Destination discovery and browsing",
      "Tour package booking",
      "Itinerary planning",
      "User reviews and ratings",
      "Offline map access",
      "Travel recommendations"
    ],
    "manualDescription": "The Tour & Travel App is a comprehensive Android mobile application designed to transform the way travelers discover, plan, and book their journeys. Developed using Java and the Android SDK, this application serves as a one-stop solution for all travel-related needs. The app features an intuitive, visually appealing interface that showcases destinations with high-quality images and detailed information about attractions, local customs, best times to visit, and travel tips. Users can browse through curated tour packages categorized by themes such as adventure, cultural, relaxation, or family-friendly, with detailed itineraries, inclusion lists, and transparent pricing. The application leverages Firebase for backend services, providing real-time data synchronization, user authentication, and cloud storage for travel content. Integration with Google Maps API enables interactive maps with points of interest, recommended routes, and navigation capabilities that work both online and offline, ensuring travelers can find their way even without an internet connection. The booking system allows users to customize tour packages by selecting specific dates, accommodation preferences, and additional activities before proceeding through a secure payment process that supports multiple payment methods. Social features enable travelers to share their experiences, post reviews, and rate destinations or services, creating a community-driven recommendation system. For frequent travelers, the app includes a travel journal feature where users can document their journeys with photos, notes, and location tags. Additional functionalities include weather forecasts for destinations, currency conversion tools, language translation assistance, emergency contact information for different countries, and push notifications for travel deals, flight status changes, or itinerary updates. With its comprehensive feature set and user-centered design, this Tour & Travel App serves as an indispensable companion for both casual vacationers and seasoned travelers looking to explore new destinations with confidence and convenience."
  },
  {
    "id": 15,
    "title": "ReactJS-POS-System",
    "description": "A point of sale system built with ReactJS for retail businesses.",
    "image": "https://github.com/CharithaBimsara/ReactJS-POS-System/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/ReactJS-POS-System/raw/main/demo.png"
    ],
    "technologies": ["React", "Redux", "Node.js", "Express", "MongoDB", "Material UI"],
    "type": "Web Application",
    "githubLink": "https://github.com/CharithaBimsara/ReactJS-POS-System",
    "featured": true,
    "features": [
      "Product management with categories",
      "Inventory tracking",
      "Sales processing and receipts",
      "User authentication with role-based access",
      "Sales reports and analytics",
      "Customer management"
    ],
    "manualDescription": "The ReactJS POS System is a modern, web-based point of sale application designed to meet the needs of retail businesses of all sizes. Built with React for the frontend and supported by Node.js, Express, and MongoDB for the backend services, this application offers a comprehensive solution for managing retail operations. The system features a clean, intuitive user interface developed with Material UI components, ensuring a responsive design that works seamlessly across desktop, tablet, and touchscreen devices commonly used in retail environments. At its core, the POS system provides fast and efficient sales processing capabilities, allowing cashiers to quickly add products to a cart using barcode scanning, product search, or category navigation, apply discounts or promotions, and complete transactions with various payment methods including cash, credit cards, and mobile payments. The product management module enables business owners to maintain a detailed catalog with categories, pricing, tax information, and inventory levels, with support for product variants such as size and color. Inventory management features include real-time stock tracking, automatic low-stock alerts, and batch inventory adjustments. The system implements a robust user management system with role-based access control, ensuring that employees only have access to the functions relevant to their position. For business owners and managers, the application provides comprehensive reporting and analytics tools with visual representations of sales performance, inventory turnover, popular products, and revenue trends over customizable time periods. Additional features include customer relationship management capabilities for tracking purchase history and loyalty programs, end-of-day reconciliation processes, shift management for multiple cashiers, and integration capabilities with accounting software. This ReactJS POS System combines modern web technologies with essential retail business functionality to create a powerful, flexible solution that can grow with a business while improving operational efficiency and customer service."
  },
  {
    "id": 16,
    "title": "Masala-Mingle",
    "description": "A recipe sharing and management application focused on spice blends and Indian cuisine.",
    "image": "https://github.com/CharithaBimsara/Masala-Mingle/raw/main/img/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Masala-Mingle/raw/main/img/demo.png"
    ],
    "technologies": ["React Native", "Firebase", "Redux", "Expo"],
    "type": "Mobile App",
    "githubLink": "https://github.com/CharithaBimsara/Masala-Mingle",
    "featured": false,
    "features": [
      "Recipe creation and sharing",
      "Spice blend database",
      "Cooking timer and converter tools",
      "Personalized recipe recommendations",
      "Social features like comments and ratings",
      "Offline access to saved recipes"
    ],
    "manualDescription": "Masala Mingle is an innovative mobile application dedicated to the rich world of Indian cuisine and spice blends, developed using React Native and Expo to ensure cross-platform compatibility on both iOS and Android devices. This culinary app serves as a comprehensive platform for food enthusiasts to discover, create, share, and preserve authentic spice blend recipes that form the foundation of Indian cooking. The application features an extensive database of traditional and modern masala blends categorized by region, flavor profile, and culinary use, with detailed information about each ingredient's purpose and proportion. Users can browse through a visually rich collection of recipes featuring high-quality images, step-by-step preparation instructions, difficulty levels, preparation times, and nutritional information. The recipe creation tool allows users to document their own spice blend formulations with customizable templates, ingredient measurements, and preparation methods, complete with options to keep recipes private or share them with the community. Firebase provides the backend infrastructure for user authentication, real-time database functionality, and cloud storage for recipe images and videos. Social features enable users to follow favorite recipe creators, participate in discussions through comments, rate recipes, and share their cooking experiences. A smart search functionality allows users to find recipes based on available ingredients, dietary restrictions, cooking time, or specific health benefits of different spices. The app includes practical cooking tools such as measurement converters, interactive timers, and scaling calculators for adjusting recipe quantities. For those learning about Indian cuisine, educational content explains the cultural significance of different spice combinations, their medicinal properties according to Ayurveda, and suggested pairings with various dishes. Additional features include a shopping list generator based on selected recipes, seasonal recipe collections, spice storage tips, and offline access to saved recipes. Masala Mingle not only serves as a recipe repository but also as a cultural bridge, helping users around the world understand and appreciate the complexity and artistry behind Indian spice blends while building a global community of culinary enthusiasts."
  },
  {
    "id": 17,
    "title": "Library-Management-App-Android",
    "description": "An Android application for managing library operations and resources.",
    "image": "https://github.com/CharithaBimsara/Library-Management-App-Android/raw/main/demo.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Library-Management-App-Android/raw/main/demo.png"
    ],
    "technologies": ["Java", "Android SDK", "SQLite", "Firebase", "Barcode Scanning"],
    "type": "Mobile App",
    "githubLink": "https://github.com/CharithaBimsara/Library-Management-App-Android",
    "featured": false,
    "features": [
      "Book catalog and management",
      "Member registration and management",
      "Barcode scanning for book checkout/return",
      "Due date tracking and notifications",
      "Search functionality",
      "Reservation system"
    ],
    "manualDescription": "The Library Management App for Android is a comprehensive mobile solution designed to modernize library operations through digital transformation. Developed using Java and the Android SDK, this application serves both library staff and patrons with features that streamline book management and enhance the borrowing experience. For library administrators, the app provides a complete catalog management system where books can be added, edited, and organized with details such as title, author, ISBN, category, and location within the library. The application implements barcode scanning functionality that allows staff to quickly process book checkouts and returns by simply scanning book and member ID cards. The member management system maintains detailed profiles of library users, tracks their borrowing history, and manages membership renewals. On the patron side, users can browse the library catalog, search for books using various criteria, check book availability, and place reservations for books currently checked out. The app features a robust notification system that alerts users about upcoming due dates, overdue books, and when reserved books become available. Built with a SQLite local database for offline functionality and Firebase for cloud synchronization, the system ensures data consistency across multiple devices used by library staff. The interface is designed to be intuitive and accessible, with separate views tailored to staff and patron needs. Additional features include reading progress tracking for patrons, reading recommendations based on borrowing history, digital reading cards that eliminate the need for physical membership cards, fine calculation for overdue books, and comprehensive reports on library usage patterns. This Library Management App transforms traditional library services into a modern, efficient system that enhances both operational management and the user experience."
  },
  {
    "id": 18,
    "title": "Weather-App",
    "description": "A simple weather application that provides current weather information and forecasts.",
    "image": "https://github.com/CharithaBimsara/Weather-App/raw/main/images/weather-preview.png",
    "galleryImages": [
      "https://github.com/CharithaBimsara/Weather-App/raw/main/images/weather-preview.png"
    ],
    "technologies": ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
    "type": "Web Application",
    "githubLink": "https://github.com/CharithaBimsara/Weather-App",
    "featured": false,
    "features": [
      "Current weather conditions display",
      "Multi-day forecast",
      "Location-based weather data",
      "Search functionality for different locations",
      "Responsive design for all devices"
    ],
    "manualDescription": "The Weather App is a sleek, user-friendly web application that provides real-time weather information and forecasts to users around the world. Built using HTML, CSS, and JavaScript, this front-end focused project demonstrates effective integration with third-party weather APIs to deliver accurate meteorological data. The application features a clean, intuitive interface that displays current weather conditions including temperature, humidity, wind speed and direction, atmospheric pressure, and precipitation probability. Users can access weather information based on their current location through browser geolocation services or search for specific cities globally. The app provides a detailed multi-day forecast that helps users plan ahead, with hourly breakdowns for the current day. Visual elements such as weather icons and dynamic backgrounds change based on current conditions and time of day, creating an immersive experience that intuitively communicates weather status. The design is fully responsive, adapting seamlessly to various screen sizes from desktop monitors to mobile phones, ensuring accessibility across all devices. Additional features include unit conversion between Celsius and Fahrenheit, saving favorite locations for quick access, historical weather data for the selected location, and severe weather alerts when applicable. This Weather App project showcases fundamental web development concepts including API integration, asynchronous JavaScript programming, responsive design principles, and user-centered interface design, making it both a practical tool for users and an educational resource for web developers."
  },
  {
    "id": 19,
    "title": "Random-Background-Color-Changer",
    "description": "A simple web application that changes the background color randomly with each click.",
    "image": "https://via.placeholder.com/300",
    "galleryImages": [
      "https://via.placeholder.com/300"
    ],
    "technologies": ["HTML", "CSS", "JavaScript"],
    "type": "Web Application",
    "githubLink": "https://github.com/CharithaBimsara/Random-Background-Color-Changer",
    "featured": false,
    "features": [
      "Random color generation",
      "Color code display",
      "Copy color code to clipboard",
      "Color history tracking",
      "Simple and intuitive interface"
    ],
    "manualDescription": "The Random Background Color Changer is a lightweight yet engaging web application designed to generate and display random color combinations with a simple user interaction. Built using fundamental web technologies—HTML for structure, CSS for styling, and JavaScript for functionality—this project serves as an excellent demonstration of basic interactive web development principles. Upon loading, the application presents users with a minimalist interface featuring a prominent button that, when clicked, triggers a JavaScript function to generate a random hexadecimal color code. This code is then applied as the background color of the entire page, creating an immediate visual change. The current color's hexadecimal value is displayed prominently on the screen, allowing users to note colors they find appealing for use in their own projects. A convenient copy-to-clipboard button accompanies the color code, enabling users to quickly capture colors they wish to use elsewhere. The application maintains a history of recently generated colors, displayed as swatches that users can click to return to previous colors. Enhanced features include the ability to toggle between different color formats (HEX, RGB, and HSL), save favorite colors to local storage for future reference, and adjust brightness or saturation of generated colors using simple slider controls. The user interface is designed to be both aesthetically pleasing and fully responsive, functioning perfectly across devices from desktop computers to mobile phones. While simple in concept, this Random Background Color Changer serves multiple purposes: it functions as a practical tool for designers seeking color inspiration, a learning resource for beginning web developers, and a demonstrative example of how even straightforward applications can provide genuine utility and an engaging user experience through thoughtful implementation of basic web technologies."
  }

];

export default allProjects;