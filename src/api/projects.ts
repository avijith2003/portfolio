import api from './api';

// Description: Get all portfolio projects
// Endpoint: GET /api/projects
// Request: {}
// Response: { projects: Array<{ id: string, title: string, description: string, image: string, tags: string[], link: string }> }
export const getProjects = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                projects: [
                    {
                        _id: '1',
                        title: 'Fake News vs Real News Detection',
                        description: 'Developed a machine learning model to classify news articles as real or fake. Utilized NLP techniques to analyze text patterns and detect misinformation. Trained the model using TensorFlow and Python. Built a Flask-based web application for users to input and verify news credibility.',
                        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
                        tags: ['Python', 'TensorFlow', 'NLP', 'Flask'],
                        link: 'https://github.com/avijith2003/Fake-vs-Real-news-classifier'
                    },
                    {
                        _id: '2',
                        title: 'AI-Powered Chatbot',
                        description: 'Implemented chatbot using LLaMA-3.2-3B-Instruct for intelligent conversation handling. Used modules like Pytorch, Hugging face Transformers. Optimized deployment on a 4GB GPU, handling memory constraints and performance bottlenecks.',
                        image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624',
                        tags: ['LLaMA', 'PyTorch', 'Transformers', 'Python'],
                        link: 'https://github.com/avijith2003/Chatbot-using-LLaMA_Model'
                    },
                    {
                        _id: '3',
                        title: 'Smart Agriculture Dashboard',
                        description: 'A real-time web dashboard designed to monitor temperature, humidity, and soil moisture, helping farmers make data-driven decisions for efficient crop management. The system features secure authentication and data storage using MySQL, ensuring reliable access control and historical data tracking.',
                        image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab',
                        tags: ['Flask', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
                        link: 'https://github.com/avijith2003/smart-agriculture'
                    }
                ]
            });
        }, 500);
    });
};