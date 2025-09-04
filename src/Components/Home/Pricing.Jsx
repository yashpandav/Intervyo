import { CheckCircle  } from "lucide-react";

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
      <section className="bg-white">
        
    </section>
  );
};

export default Pricing;