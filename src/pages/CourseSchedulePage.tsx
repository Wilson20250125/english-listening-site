import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Course {
  title: string;
  level: string;
  type: string;
  url: string;
  description: string;
}

const courses: Course[] = [
  {
    title: "BBC Learning English – Lower Levels",
    level: "Beginner (A1-A2)",
    type: "General listening",
    url: "https://www.bbc.co.uk/learningenglish",
    description: "Slow-paced videos with subtitles and practical English."
  },
  {
    title: "VOA Learning English – Let's Learn English",
    level: "Beginner (A1-A2)",
    type: "Structured lessons",
    url: "https://learningenglish.voanews.com/z/952",
    description: "American English lessons with clear speech and daily topics."
  },
  {
    title: "Speak English with Mr. Duncan",
    level: "Beginner (A1-A2)",
    type: "Conversational",
    url: "https://www.youtube.com/user/duncaninchina",
    description: "Engaging, humorous lessons focusing on basic English."
  },
  {
    title: "EnglishClass101 – Beginner Listening",
    level: "Beginner (A1-A2)",
    type: "Listening practice",
    url: "https://www.englishclass101.com",
    description: "Beginner listening exercises with transcripts and vocabulary."
  },
  {
    title: "English with Lucy",
    level: "Intermediate (B1-B2)",
    type: "Comprehensive",
    url: "https://www.youtube.com/englishwithlucy",
    description: "Grammar, vocabulary, pronunciation tips for intermediate learners."
  },
  {
    title: "Bob the Canadian",
    level: "Intermediate (B1-B2)",
    type: "Real-life conversations",
    url: "https://www.youtube.com/c/BobtheCanadian",
    description: "Conversations and experiences showcasing natural English usage."
  },
  {
    title: "JenniferESL",
    level: "Intermediate (B1-B2)",
    type: "Comprehensive",
    url: "https://www.youtube.com/user/JenniferESL",
    description: "Lessons covering listening, speaking, reading, and writing skills."
  },
  {
    title: "EnglishClass101 – Intermediate Listening",
    level: "Intermediate (B1-B2)",
    type: "Listening practice",
    url: "https://www.englishclass101.com",
    description: "Moderate-paced dialogues and stories."
  },
  {
    title: "Rachel's English",
    level: "Advanced (C1-C2)",
    type: "Pronunciation & Listening",
    url: "https://www.youtube.com/user/rachelsenglish",
    description: "Focus on American pronunciation and real-life conversation."
  },
  {
    title: "BBC Learning English – News Review",
    level: "Advanced (C1-C2)",
    type: "News analysis",
    url: "https://www.bbc.co.uk/learningenglish/features/newsreview",
    description: "Explains news vocabulary and expressions from current stories."
  },
  {
    title: "VOA Learning English – Learning English Broadcast",
    level: "Advanced (C1-C2)",
    type: "News & features",
    url: "https://learningenglish.voanews.com/z/953",
    description: "News and feature stories in clear, slow-paced English."
  },
  {
    title: "LinguaMarina",
    level: "Advanced (C1-C2)",
    type: "Culture & language",
    url: "https://www.youtube.com/c/LinguaMarina",
    description: "Insights into American culture and fluency tips."
  },
  {
    title: "Crash Course",
    level: "Specialized",
    type: "Educational",
    url: "https://www.youtube.com/c/crashcourse",
    description: "Educational series on science, history, and economics."
  },
  {
    title: "SciShow",
    level: "Specialized",
    type: "Educational",
    url: "https://www.youtube.com/user/scishow",
    description: "Scientific topics and discoveries with clear explanations."
  },
  {
    title: "AsapSCIENCE",
    level: "Specialized",
    type: "Educational",
    url: "https://www.youtube.com/user/AsapSCIENCE",
    description: "Science concepts and questions in an accessible format."
  },
  {
    title: "MinutePhysics",
    level: "Specialized",
    type: "Educational",
    url: "https://www.youtube.com/user/minutephysics",
    description: "Physics explained through concise, animated videos."
  }
];

const CourseSchedulePage: React.FC = () => {
  const getLevelColor = (level: string) => {
    if (level.includes('Beginner')) return 'bg-green-100 text-green-800 border-green-200';
    if (level.includes('Intermediate')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (level.includes('Advanced')) return 'bg-purple-100 text-purple-800 border-purple-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Schedule</h1>
          <p className="text-xl text-gray-600">
            Explore our curated collection of English learning resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                    {course.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-2 min-h-[3rem]">
                  {course.description}
                </p>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  Visit Course
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSchedulePage;