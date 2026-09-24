
import lorawan_system_architecture from '../assets/lorawan.png'
import report_generator_home from '../assets/report_generator_home.png'
import microcontroller_project from '../assets/microcontroller_project.jpg'
import rl_snake from '../assets/rl_snake.png'
import face_reconstruction from '../assets/face_3d_reconstruction.png'
import online_market from '../assets/online_market_admin.png'
import handrec_example from '../assets/handrec_example.png'
import rentio from '../assets/rentio.png'
import taskhero from '../assets/taskhero.png'
import unimatch_pred from '../assets/unimatch_pred.png'

const projects = [
    {
        id:1,
        image: unimatch_pred,
        title: "Ground Truth-Free Evaluation of Stereo Matching Models",
        summary: "A computer vision project that evaluates stereo matching models without ground-truth depth data using multiple image-based quality metrics.",
        description: "This project looked at how stereo matching models can be evaluated when ground-truth disparity maps are not available. We compared four deep learning models: UniMatch, IGEV-Stereo, RAFT-Stereo, and AnyNet, using metrics such as reprojection error, SSIM, left-right consistency, and edge alignment. We also created a Unified Quality Score that combines several ground-truth-free metrics into one score. In addition to accuracy, we compared inference time and GPU memory usage to look at the trade-off between quality and efficiency. AnyNet was also trained using self-supervised learning to test whether both training and evaluation could be done without labeled disparity data.",
        category: "AI / ML",
        tags: [
            "Python",
            "PyTorch",
            "Computer Vision",
            "Deep Learning",
            "Stereo Vision",
            "Self-Supervised Learning"
        ]
    },
    {
        id:2,
        image:report_generator_home,
        title: "Report generator",
        summary: "A desktop application that automates report creation using predefined templates, making reports faster to create, consistent, and easier to manage.",
        description: "A report generation system developed to replace a manual Excel-based reporting workflow. The application allows users to enter data into predefined fields and automatically generate professionally formatted PDF reports containing text, tables, and images. It also includes report management, role-based user access, authentication, cloud storage, and a customer-facing website for sharing reports directly with clients.",
        category: "Software",
        tags: [
            "C#",
            ".NET 8",
            "WPF",
            "XAML",
            "MVVM",
            "SQLite",
            "Firebase",
            "RDLC",
            "Entity Framework"
        ],
    },
    {
        id:3,
        image:face_reconstruction,
        title: "3D Face Reconstruction",
        summary: "A computer vision pipeline that reconstructs a 3D facial model from video and compares different surface reconstruction algorithms.",
        description: "A computer vision project focused on generating 3D facial models from video footage. The system extracts 468 facial landmarks from multiple video frames using MediaPipe Face Mesh, aligns them into a unified 3D point cloud, and processes the data before generating a mesh. Poisson Surface Reconstruction and the Ball-Pivoting Algorithm were implemented and compared based on surface quality, facial detail preservation, and computational performance. The project also explored point cloud filtering, facial depth correction, texture mapping, and parameter tuning to improve the final reconstruction.",
        category: "AI / ML",
        tags: [
            "Python",
            "Computer Vision",
            "MediaPipe",
            "Open3D",
            "3D Reconstruction",
            "Point Clouds",
            "PSR",
            "BPA"
        ],
    },
    {
        id:4,
        image:microcontroller_project,
        title: "Smart Clock using Microcontroller",
        summary: "An embedded smart clock that displays real-time information such as date, time, weather, temperature, and humidity.",
        description: "A smart clock developed using Mbed OS and a microcontroller. The system displays date and time on a 16x2 LCD and retrieves information such as location, weather and unix epoch time from external APIs. It also uses sensor data to display the current room temperature and humidity. The project gave me experience with embedded programming, hardware interaction, APIs, and working with real-time data.",
        category: "Software",
        tags: [
            "C++",
            "Mbed OS",
            "REST APIs",
            "JSON",
            "Microcontroller"
        ]
    },
    {
        id:5,
        image:rl_snake,
        title: "RL on Modified Snake",
        summary: "A reinforcement learning project that trains and compares multiple AI agents to play a modified Snake game with obstacles, negative rewards, and changing environmental complexity.",
        description: "A reinforcement learning project exploring how different learning algorithms perform in a dynamic version of the classic Snake game. The environment was extended with randomly placed obstacles, rotten food, reward shaping, and collision penalties to create a more challenging decision-making problem. PPO, Rainbow DQN, and a custom value-based Q-learning agent were implemented and trained, then compared using metrics such as score, accumulated reward, episode length, learning stability, and convergence. The project also explored neural network architectures, experience replay, adaptive learning rates, and different exploration strategies.",
        category: "AI / ML",
        tags: [
            "Python",
            "PyTorch",
            "Pygame",
            "Gym",
            "NumPy",
            "Matplotlib"
        ]
    },
    {
        id:6,
        image:lorawan_system_architecture,
        title: "LoRaWAN implementation and real-life measurements",
        summary: "An end-to-end IoT system using LoRaWAN to transmit and collect sensor data over long distances, with real-world testing of signal quality and network reliability.",
        description: "An IoT project focused on designing, implementing, and evaluating a complete LoRaWAN communication system using commercial hardware. An STM32WL55-based end device transmitted data through a Sentrius RG186 gateway to The Things Network, while a Python MQTT client collected the incoming sensor data and transmission metadata in real time. The system was tested across different distances and environments to analyze signal strength, SNR, packet loss, data rate, and airtime, demonstrating how environmental conditions and distance affect LoRaWAN performance.",
        category: "IoT",
        tags: [
            "LoRaWAN",
            "STM32",
            "MQTT",
            "Python",
            "The Things Network",
            "STM32CubeIDE"
        ]
    },
    {
        id:7,
        image:handrec_example,
        title: "Handwritten text recognition",
        summary: "An AI-based handwriting recognition system that converts handwritten words into digital text using deep learning and image preprocessing.",
        description: "A handwriting recognition project focused on training a deep learning model to recognize cursive handwritten words. The model was trained using the IAM Handwriting Database and tested on a custom dataset containing handwritten samples. The application supports live camera input as well as dataset-based testing, and applies image preprocessing techniques to improve recognition accuracy. Predictions from filtered and unfiltered images were compared using Character Error Rate to select the more accurate result.",
        category: "AI / ML",
        tags: [
            "Python",
            "PyTorch",
            "Computer Vision",
            "ONNX",
            "OpenCV",
            "CUDA"
        ]
    },
    {
        id:8,
        image:taskhero,
        title: "TaskHero",
        summary: "A gamified productivity app that combines task management with XP, levels, and achievements to make completing everyday tasks more engaging.",
        description: "A mobile productivity application that combines a traditional to-do list with gamification. Users can create, edit, prioritize, and complete tasks while earning experience points and progressing through levels. The app also includes achievements, progress tracking, user authentication, and cloud-based data storage. React Native was used to build the mobile interface, while Firebase handled authentication, real-time task data, user progress, and achievements.",
        category: "Software",
        tags: [
            "Javascript",
            "React Native",
            "Firebase",
            "Expo Go",
            "Android SDK",
        ]
    },
    {
        id:9,
        image:rentio,
        title: "Car Rental Management System",
        summary: "A desktop application for managing rental cars and customers, developed as an early project focused on object-oriented programming.",
        description: "An early university project where I applied object-oriented programming concepts by developing a car rental management application with a graphical user interface and database. The application manages cars, customers, and rental assignments, with functionality for adding, editing, searching, and removing data. The project gave me practical experience with structuring an application around different data models, database relationships, and GUI-based interaction.",
        category: "Software",
        tags: [
            "C++",
            "QT",
            "SQLite",
        ]
    },
    {
        id:10,
        image:online_market,
        title: "E-BuyBuddy",
        summary: "An e-commerce web application for browsing and managing products, with search, shopping cart, and inventory management functionality.",
        description: "An e-commerce web application developed to explore the fundamentals of online marketplaces and web application development. Users can browse and search products, add items to a shopping cart, change quantities, and view the total cost of their order. The application also includes product management functionality for adding, editing, and deleting products stored in a database. The project was structured using the MVC architecture with separate controllers and models for product and shopping cart functionality.",
        category: "Software",
        tags: [
            "C#",
            ".NET 6",
            "MVC",
            "SQLite",
        ]
    },

];

export default projects;