import { Code, Database, Megaphone, Palette } from "lucide-react";

export const courses = [
  "Full Stack Development",
  "Data Science & Analytics",
  "Digital Marketing",
  "UI/UX Design"
];

export const coursesDetails = [
  {
    icon: Code,
    className: "w-12 h-12 text-blue-600",
    name: "Full Stack Development",
    description: "Master both frontend and backend technologies including React, Node.js, MongoDB, and modern deployment practices. Build complete web applications from scratch and learn industry best practices.",
    duration: "12 weeks",
    students: "150+ enrolled",
    features: [
      "React & Next.js Frontend Development",
      "Node.js & Express Backend",
      "Database Design & Management",
      "API Development & Integration",
      "Deployment & DevOps Basics",
      "Real-world Project Portfolio"
    ],
    level: "Beginner to Advanced"
  },
  {
    icon: Database,
    className: "w-12 h-12 text-green-600",
    name: "Data Science & Analytics",
    description: "Dive deep into data analysis, machine learning, and AI. Learn Python, SQL, statistical analysis, and how to extract meaningful insights from complex datasets.",
    duration: "14 weeks",
    students: "120+ enrolled",
    features: [
      "Python Programming for Data Science",
      "Statistical Analysis & Visualization",
      "Machine Learning Algorithms",
      "SQL & Database Management",
      "Big Data Technologies",
      "Industry Case Studies"
    ],
    level: "Intermediate"
  },
  {
    icon: Megaphone,
    className: "w-12 h-12 text-purple-600",
    name: "Digital Marketing",
    description: "Learn comprehensive digital marketing strategies including SEO, social media marketing, content creation, and analytics to drive business growth in the digital age.",
    duration: "10 weeks",
    students: "200+ enrolled",
    features: [
      "SEO & Content Marketing",
      "Social Media Strategy",
      "Google Ads & PPC Campaigns",
      "Email Marketing Automation",
      "Analytics & Performance Tracking",
      "Brand Building & Strategy"
    ],
    level: "Beginner to Intermediate"
  },
  {
    icon: Palette,
    className: "w-12 h-12 text-pink-600",
    name: "UI/UX Design",
    description: "Create beautiful and user-friendly digital experiences. Learn design principles, user research, prototyping, and modern design tools like Figma and Adobe Creative Suite.",
    duration: "11 weeks",
    students: "180+ enrolled",
    features: [
      "Design Principles & Theory",
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Figma & Adobe Creative Suite",
      "Responsive Design",
      "Portfolio Development"
    ],
    level: "Beginner to Advanced"
  }
];