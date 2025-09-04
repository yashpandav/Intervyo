import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NavMenu } from "./menu";
import { NavigationSheet } from "./nav-sheet";

const Navbar = () => {
    return (
        <div>
            <nav className="fixed top-6 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur border border-gray-200 shadow-md dark:border-slate-700/70">
                <div className="h-full flex items-center justify-between mx-auto px-4">
                    <Image src="/images/BrandLogo.png" alt="Brand Logo" width={120} height={36} />

                    {/* Desktop Menu */}
                    <NavMenu className="hidden md:block" />

                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            className="hidden sm:inline-flex rounded-full border-teal-500 text-teal-600 hover:bg-teal-50"
                        >
                            Sign In
                        </Button>
                        <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-white">
                            Get Started
                        </Button>

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
