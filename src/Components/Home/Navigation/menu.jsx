"use client";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const NavMenu = ({ onNavigate, sections, activeSection }) => {
    const menuItems = [
        { label: "Home", section: "hero" },
        { label: "Features", section: "features" },
        { label: "Demo", section: "demo" },
        { label: "Testimonials", section: "testimonials" },
    ];

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-4 sm:gap-6 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
                {menuItems.map((item) => {
                    const isActive = item.section === activeSection;

                    return (
                        <NavigationMenuItem key={item.label}>
                            <NavigationMenuLink asChild>
                                <p
                                    onClick={() => onNavigate(sections[item.section])}
                                    className={`text-sm sm:text-base font-medium px-2 py-1 rounded-md transition-all cursor-pointer
                    ${isActive
                                            ? "text-teal-600 "
                                            : "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                                        }
                    `}
                                >
                                    {item.label}
                                </p>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
