"use client";
import { FileText, MessageSquare, Target, BarChart3, Bot, Clock, Link2, ThumbsUp, Smile, Zap, Sparkles, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FeaturesSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

    const features = [
        {
            icon: <Bot className="text-emerald-600" size={24} />,
            title: "Smart Interview Engine",
            description: "Dynamic conversations that dig deeper into what matters—not just scripted questions.",
            highlight: "Adaptive AI",
            color: "emerald"
        },
        {
            icon: <FileText className="text-teal-600" size={24} />,
            title: "Resume Intelligence",
            description: "Spot the perfect match instantly. Our AI reads between the lines of every resume.",
            highlight: "Instant Analysis",
            color: "teal"
        },
        {
            icon: <ThumbsUp className="text-green-600" size={24} />,
            title: "Live Feedback Loop",
            description: "Real-time insights that help both candidates and recruiters improve with every interaction.",
            highlight: "Continuous Learning",
            color: "green"
        },
        {
            icon: <MessageSquare className="text-emerald-600" size={24} />,
            title: "Context-Aware Questions",
            description: "Questions that actually relate to the role. No more generic interviews that waste everyone's time.",
            highlight: "Relevant & Fair",
            color: "emerald"
        },
        {
            icon: <Target className="text-teal-600" size={24} />,
            title: "Fit Prediction",
            description: "Beyond skills matching—we predict cultural fit and long-term success potential.",
            highlight: "Holistic View",
            color: "teal"
        },
        {
            icon: <Clock className="text-green-600" size={24} />,
            title: "Respectful Timing",
            description: "Quick enough to respect busy schedules, thorough enough to make confident decisions.",
            highlight: "5-Min Efficiency",
            color: "green"
        },
        {
            icon: <Zap className="text-emerald-600" size={24} />,
            title: "Intelligent Follow-ups",
            description: "When something doesn't add up, our AI knows exactly what to ask next.",
            highlight: "Smart Probing",
            color: "emerald"
        },
        {
            icon: <Link2 className="text-teal-600" size={24} />,
            title: "Workflow Harmony",
            description: "Slides right into your existing tools. No disruption, just enhancement.",
            highlight: "Plug & Play",
            color: "teal"
        },
        {
            icon: <Smile className="text-green-600" size={24} />,
            title: "Human-First Design",
            description: "Candidates actually enjoy the process. Imagine that—interviews that don't suck.",
            highlight: "Stress-Free",
            color: "green"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            emerald: {
                bg: "bg-emerald-50/80",
                border: "border-emerald-200/60",
                hover: "hover:bg-gray-50/70"
            },
            teal: {
                bg: "bg-teal-50/80",
                border: "border-teal-200/60",
                hover: "hover:bg-gray-50/70"
            },
            green: {
                bg: "bg-green-50/80",
                border: "border-green-200/60",
                hover: "hover:bg-gray-50/70"
            }
        };
        return colors[color];
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    return (
        <section ref={sectionRef} id="features" className="relative py-24 overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="pointer-events-none absolute inset-0">
                <motion.div 
                    style={{ y, rotate }}
                    className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-200/40 via-teal-200/30 to-green-200/40 blur-3xl"
                />
                <motion.div 
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
                    className="absolute -bottom-12 -right-12 h-80 w-80 rounded-full bg-gradient-to-tl from-teal-300/30 via-emerald-200/25 to-green-300/35 blur-3xl"
                />
                <div className="absolute top-1/3 left-1/4 h-2 w-2 rounded-full bg-emerald-400/60" />
                <div className="absolute top-2/3 right-1/3 h-1 w-1 rounded-full bg-teal-500/70" />
                <div className="absolute bottom-1/4 left-1/2 h-1.5 w-1.5 rounded-full bg-green-400/50" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-6">
                        <Sparkles className="text-emerald-600" size={16} />
                        <span className="text-emerald-700 font-medium text-sm">Why teams choose Intervyo</span>
                    </div>
                    
                    <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Hiring that actually
                        <span className="relative ml-3">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
                                makes sense
                            </span>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-full origin-left"
                            />
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Stop playing resume roulette. Start having conversations that reveal who people really are.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const colors = getColorClasses(feature.color);
                        
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group relative"
                            >
                                <div className={`
                                    relative h-full p-8 rounded-3xl border backdrop-blur-sm
                                    bg-white/60 ${colors.border} ${colors.hover}
                                    transition-all duration-300 ease-out
                                    shadow-sm hover:shadow-xl hover:shadow-emerald-500/5
                                    flex flex-col
                                `}>
                                    <div className="relative flex flex-col">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                                {feature.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6">Ready to transform your hiring process?</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        See it in action
                        <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;