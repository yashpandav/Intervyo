import { TextReveal } from "@/components/magicui/text-reveal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function DemoHeadText() {
    return (
        <>
            <TextReveal className="-mt-8">
                Streamline Your Interview Process in Minutes
            </TextReveal>
            <div className="flex justify-center items-center">
                <ShimmerButton
                    background="linear-gradient(90deg, #059669 0%, #0d9488 100%)"
                    shimmerSize="0.1rem"
                >
                    See it in action
                </ShimmerButton>
            </div>
        </>
    )
}