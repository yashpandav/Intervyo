import {ChevronRight, BarChart3, MessageSquare, Upload} from 'lucide-react'
const Demo = () => {
    const steps = [
      {
        icon: <Upload className="text-white" size={32} />,
        title: "Upload Resume",
        description: "Simply upload candidate resumes or job descriptions to get started with the AI analysis."
      },
      {
        icon: <MessageSquare className="text-white" size={32} />,
        title: "AI Interview",
        description: "Our AI conducts natural, adaptive interviews tailored to the specific role and candidate background."
      },
      {
        icon: <BarChart3 className="text-white" size={32} />,
        title: "Get Feedback",
        description: "Receive detailed reports with scores, insights, and recommendations within minutes."
      }
    ];
  
    return (
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get from candidate application to hiring decision in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-teal-500 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-lg">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 text-teal-300">
                    <ChevronRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };


  export default Demo;