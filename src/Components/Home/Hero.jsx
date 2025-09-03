import { Brain, Play, Users } from 'lucide-react';

const HeroSection = () => {
    return (
      <div className="bg-gradient-to-br from-white via-teal-50/30 to-green-50/30 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smarter Interviews.{' '}
                <span className="text-teal-500">Better Hiring.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AI-powered platform to evaluate candidates in 5 minutes. Transform your hiring process with intelligent interviews and instant insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 transition-all duration-200 hover:scale-105 shadow-lg">
                  Get Started Free
                </button>
                <button className="border-2 border-teal-500 text-teal-500 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-200 flex items-center justify-center gap-2">
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Illustration Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Brain className="text-teal-500" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg px-4 py-2 mb-2">
                      <p className="text-sm">Tell me about your experience with React...</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 justify-end">
                  <div className="flex-1 text-right">
                    <div className="bg-teal-100 rounded-lg px-4 py-2 mb-2 inline-block">
                      <p className="text-sm">I have 3 years of experience building...</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="text-green-500" size={24} />
                  </div>
                </div>
  
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">Match Score</span>
                    <span className="text-2xl font-bold text-green-500">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;