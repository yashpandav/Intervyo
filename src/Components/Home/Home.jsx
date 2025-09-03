import { TextAnimate } from "@/components/magicui/text-animate";


export const SmartInterviewTextAnimate = () => {
    return (
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <TextAnimate animation="blurInUp" by="character" once>
                Smarter Interviews
            </TextAnimate>
        </h1>

    );
}


export function BetterHiringTextAnimate() {
    return (
        <TextAnimate animation="slideUp" by="word">
            Better Hiring.
        </TextAnimate>
    );
}
