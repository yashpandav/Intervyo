"use client";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

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
    <div className="relative pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6 sm:gap-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-snug sm:leading-tight">
              AI interviews that hire faster
              <br />
              <span className="text-teal-600 block text-2xl sm:text-4xl mt-2">
                with real feedback for candidates
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-md sm:max-w-2xl">
              Recruiters create roles, candidates apply, and our AI conducts
              structured interviews in minutes—scoring skills, generating
              insights, and sharing constructive feedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition-all duration-200 shadow-lg text-base">
                Try an Interview
              </button>
              <button className="border-2 border-teal-500 text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-200 text-base">
                For Recruiters
              </button>
            </div>

            {/* Avatar row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex -space-x-3">
                <AvatarCirclesDemo />
              </div>
            </div>
          </div>


          {/* Right content card */}
          <div className="relative">
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

            {/* Floating blobs */}
            <div className="absolute -top-6 -right-6 h-16 w-16 rounded-2xl bg-teal-100 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-2xl bg-green-100 blur-2xl" />
          </div>
        </div>

        {/* Background glow blob */}
        <div className="pointer-events-none absolute -bottom-20 right-0 w-2/3 sm:w-1/3 max-w-sm h-64 rounded-full bg-teal-300/30 blur-3xl z-0" />
      </div>
    </div>
  );
};

export default HeroSection;
