interface GenericObject<T> { [key: string]: T; }
type ObjectString = GenericObject<string>;
export interface CustomTabStyle {
    base: string;
    labelwrap: string;
    label: string;
    tabbody: string;
    disabled: string;
    kind: ObjectString;
    active: ObjectString;
    height: ObjectString;
}

const kindCommon = "-mb-px border-line-200";
const activeCommon = "font-semibold";

const TabObject: CustomTabStyle = {
    base: "flex flex-col gap-2",
    labelwrap: "flex items-center border-b border-line-200 relative",
    label: "flex justify-center items-center px-3 min-w-[100px] text-natural-700 cursor-pointer",
    kind:{
        base: "",
        line: `${kindCommon} border border-l-0 first:border-l`,
        underline: `${kindCommon}`,
    },
    active:{
        base: `${activeCommon} text-white bg-natural-900`,
        line: `${activeCommon} font-semibold text-natural-900 border border-natural-900`,
        underline: `${activeCommon} text-natural-900 border-b border-natural-900`,
    },
    disabled: "cursor-default text-natural-300",
    tabbody: "w-full",
    height: {
        "36" : "h-9 text-xs",
        "44" : "h-11 text-sm",
        "48" : "h-12 text-sm",
        "56" : "h-14 text-base",
    }
};
export default TabObject