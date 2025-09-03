
// Pricing Section
const Pricing = () => {
    const plans = [
      {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for trying out our platform",
        features: [
          "5 AI interviews per month",
          "Basic resume scoring",
          "Standard support",
          "Email notifications"
        ],
        cta: "Get Started",
        popular: false
      },
      {
        name: "Pro",
        price: "$49",
        period: "per month",
        description: "Best for growing teams",
        features: [
          "100 AI interviews per month",
          "Advanced analytics",
          "Custom question sets",
          "Priority support",
          "Team collaboration",
          "Integration APIs"
        ],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "contact us",
        description: "For large organizations",
        features: [
          "Unlimited AI interviews",
          "White-label solution",
          "Custom integrations",
          "Dedicated support",
          "Advanced security",
          "SLA guarantee"
        ],
        cta: "Contact Sales",
        popular: false
      }
    ];
  
    return (
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your hiring needs. Start free, scale as you grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-2 border-teal-500' : 'border border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period !== "contact us" && (
                      <span className="text-gray-600 ml-1">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'border-2 border-teal-500 text-teal-500 hover:bg-teal-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;