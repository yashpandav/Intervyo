"use client";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { motion, useScroll, useTransform } from "framer-motion";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://example.com/",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://example.com/",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://example.com/",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://example.com/",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://example.com/",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://example.com/",
  },
];

function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={50} avatarUrls={avatars} />;
}

const HeroSection = () => {
    return (
      <div className="relative pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                AI interviews that hire faster
                <br className="hidden sm:block" />
                <span className="text-teal-600">with real feedback for candidates</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Recruiters create roles, candidates apply, and our AI conducts structured interviews
                in minutes—scoring skills, generating insights, and sharing constructive feedback.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 transition-all duration-200 shadow-lg">
                  Try an Interview
                </button>
                <button className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-200">
                  For Recruiters
                </button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                <AvatarCirclesDemo />
                </div>
              </div>
            </div>

            {/* Right-side visual card */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="space-y-5">
                  <div className="h-3 w-24 bg-teal-500/30 rounded animate-float-x" />
                  <div className="h-3 w-40 bg-gray-200 rounded" />
                  <div className="h-3 w-32 bg-gray-200 rounded" />
                  <div className="h-3 w-48 bg-gray-200 rounded" />
                  <div className="h-3 w-28 bg-gray-200 rounded" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-teal-50 border border-teal-100 animate-float-y" />
                  <div className="h-16 rounded-xl bg-green-50 border border-green-100 animate-float-y-slow" />
                  <div className="h-16 rounded-xl bg-gray-50 border border-gray-100" />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 h-16 w-16 rounded-2xl bg-teal-100 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-2xl bg-green-100 blur-2xl" />
            </div>
          </div>
          {/* BLOB */}
            <div className="pointer-events-none absolute -bottom-20 right-0 w-1/4 max-w-sm h-64 rounded-full bg-teal-300/30 blur-3xl z-0" />
        </div>
      </div>
    );
  };
  
  export default HeroSection;