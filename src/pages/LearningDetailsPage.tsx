import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';

const LearningDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const videoUrl = "https://www.youtube.com/watch?v=QgjkjsqAzvo";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Today's Learning</h1>
          <button
            onClick={() => navigate('/')}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* 嵌入 YouTube 视频播放器 */}
<div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow">
  <iframe
    src="https://www.youtube.com/embed/QgjkjsqAzvo"
    title="Learn English - Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>


          {/* 文字内容区域 */}
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600">
                Loading summary...
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Vocabulary & Expressions</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">Loading vocabulary...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDetailsPage;
