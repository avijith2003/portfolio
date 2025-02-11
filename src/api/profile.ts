// src/api/profile.ts

export interface Skill {
    category: string;
    items: string[];
  }
  
  export interface Profile {
    name: string;
    description: string;
    image: string;
    links: {
      github: string;
      linkedin: string;
      email: string;
    };
    skills: Skill[];
  }
  
  export const getProfile = (): Promise<Profile> => {
    // Mocking the response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Avijith Manikandan",
                description: "Motivated and detail-oriented 3rd-year undergraduate with hands-on experience in Python, Java, TensorFlow, Flask, MySQL, and Git/GitHub, along with foundational skills in web development. Passionate about expanding expertise in AI/ML, with a keen interest in exploring advanced machine learning algorithms, neural networks, and AI-driven solutions to contribute to innovative, real-world applications.",
                image: "/images/Avi_1.png",
                links: {
                    github: "https://github.com/avijith2003",
                    linkedin: "https://www.linkedin.com/in/avijith-manikandan-0548392aa/",
                    email: "avijithmanikandan@gmail.com"
                },
                skills: [
                    {
                        category: "Programming",
                        items: ["Python", "Java", "HTML", "CSS"]
                    },
                    {
                        category: "AI & ML",
                        items: ["TensorFlow", "Scikit-learn", "Neural Networks", "NLTK", "Opencv"]
                    },
                    {
                        category: "Database",
                        items: ["Flask (backend integration)", "MySQL (database design, CRUD operations)"]
                    },
                    {
                        category: "Libraries & Tools",
                        items: ["Pandas", "NumPy", "Git"]
                    },
                    {
                        category: "Languages",
                        items: ["English", "Tamil", "Hindi", "Kannada"]
                    }
                ]
            });
        }, 500);
    });
};