export interface Course {
    id: number
    title: string
    description: string
    image: string
    category: string
    level: string
    price: string
}

export const courses: Course[] = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description:
            "Master modern web development with MongoDB, Express, React, and Node.js. Build real-world projects.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        category: "Development",
        level: "Beginner",
        price: "₹4999",
    },
    {
        id: 2,
        title: "Advanced React Patterns",
        description:
            "Level up your React skills with advanced design patterns, performance optimization, and best practices.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        category: "Development",
        level: "Advanced",
        price: "₹3499",
    },
    {
        id: 3,
        title: "Digital Marketing Masterclass",
        description: "Learn SEO, Social Media Marketing, and Google Ads from industry experts to grow any business.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
        category: "Marketing",
        level: "Beginner",
        price: "₹2999",
    },
    {
        id: 4,
        title: "UI/UX Design Fundamentals",
        description: "Understand the core principles of User Interface and User Experience design using Figma.",
        image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=2000&auto=format&fit=crop",
        category: "Design",
        level: "Beginner",
        price: "₹3999",
    },
    {
        id: 5,
        title: "Data Science with Python",
        description: "Analyze data and build machine learning models using Python, Pandas, and Scikit-learn.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        category: "Data Science",
        level: "Intermediate",
        price: "₹5999",
    },
    {
        id: 6,
        title: "Accounting & Taxation",
        description: "Practical training in accounting software, GST, and income tax filing for career growth.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2071&auto=format&fit=crop",
        category: "Finance",
        level: "Intermediate",
        price: "₹4499",
    },
]
