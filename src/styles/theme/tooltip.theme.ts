export interface TooltipStyle {
    wrap: string;
    tip: string;
    triangle: string;
    border_radius: {
        [key: string]: string;
    };
}

const conmmon = `absolute left-1/2 -translate-x-1/2`

const TipConfig: TooltipStyle = {
    wrap: "cursor-pointer relative inline-block",
    tip: `${conmmon} bottom-8 flex items-center w-max px-3 py-1 h-8 text-base text-white bg-natural-900 drop-shadow-[4px_4px_16px_rgba(0,0,0,0.1)] z-50`,
    triangle: `${conmmon} -bottom-2 size-0 border-x-[8px] border-t-[10px] border-transparent border-t-natural-900`,
    border_radius: {
        default: "rounded-none",
        round: "rounded-md",
        pill: "rounded-full",
    },
};

export default TipConfig