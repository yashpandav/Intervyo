import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { NavMenu } from "./menu";

export const NavigationSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <Image src="/images/brand-logo.png" alt="Brand Logo" width={120} height={36} />
                <NavMenu orientation="vertical" className="mt-12" />
            </SheetContent>
        </Sheet>
    );
};
