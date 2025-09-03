import { FileText, MessageSquare, Target, BarChart3 } from "lucide-react";
// Features Section
const FeaturesSection = () => {
    const features = [
      {
        icon: <FileText className="text-teal-500" size={32} />,
        title: "Resume Scoring",
        description: "AI analyzes resumes instantly and scores candidates based on job requirements and experience relevance."
      },
      {
        icon: <MessageSquare className="text-teal-500" size={32} />,
        title: "AI Interview",
        description: "Conduct natural conversations with candidates using advanced AI that adapts questions in real-time."
      },
      {
        icon: <Target className="text-teal-500" size={32} />,
        title: "Job Match Insights",
        description: "Get detailed compatibility scores and insights on how well candidates fit your specific role requirements."
      },
      {
        icon: <BarChart3 className="text-teal-500" size={32} />,
        title: "Feedback Report",
        description: "Receive comprehensive reports with strengths, weaknesses, and recommendations for each candidate."
      }
    ];
  
    return (
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your hiring process and make better decisions faster
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-teal-50 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;