export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  highlights: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Eanwol',
    role: 'Software Development Intern',
    period: 'June 2026',
    location: 'Chennai, India',
    type: 'Full-Stack Software Development',
    responsibilities: [
      'Developed and tested REST API functionality for enterprise applications, supporting structured data retrieval between backend services and frontend interfaces.',
      'Built and integrated full-stack application features using backend APIs, React user interfaces, and Microsoft SQL Server.',
      'Constructed optimized SQL queries utilizing joins, filtering, and distinct data retrieval across multiple related relational database tables.',
      'Transformed relational query results into structured JSON payloads for reliable frontend consumption.',
      'Validated API endpoints and payloads using Postman collections across feature testing, debugging, and deployment workflows.',
      'Collaborated using Git-based workflows, participating in code reviews, technical documentation, and enterprise development practices.',
    ],
    technologies: ['REST APIs', 'React', 'Microsoft SQL Server', 'Postman', 'Git', 'JSON'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Vellore Institute of Technology (VIT)',
    degree: 'B.Tech in Computer Science and Engineering — Artificial Intelligence & Robotics',
    period: '2023 – 2027',
    location: 'Chennai, Tamil Nadu, India',
    score: 'CGPA: 7.9 / 10',
    highlights: [
      'Core coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Object-Oriented Programming, System Design.',
      'Specialized engineering focus: Robot Operating System (ROS), Autonomous Navigation, Distributed Backend Systems, and Machine Learning.',
    ],
  },
  {
    institution: 'The Spice Valley Public School',
    degree: 'Senior Secondary (Class XII & Class X)',
    period: '2021 – 2023',
    location: 'Bodinayakanur, India',
    score: 'Class XII: 87.0% · Class X: 87.6%',
    highlights: [
      'Rigorous foundation in Mathematics, Physics, Chemistry, and Computer Science.',
    ],
  },
];
