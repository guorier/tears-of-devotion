export interface SelectboxStyle {
   base: string;
   label: string;
   text: string;
   option: ObjectString;
   item: string;
   select: ObjectString;
   border_radius: ObjectString;
   selectedItem: string;
   base_disabled: string;
   item_disabled: string;
   width: ObjectString;
   option_width: ObjectString;
}
interface GenericObject<T> {
   [key: string]: T;
}
type ObjectString = GenericObject<string>;

const labelCommon = "flex justify-between items-center gap-4 px-3 h-[42px] bg-white border border-gray-300 focus:border-natural-900 transition duration-150 ease-in-out";
const labelArrow = "after:content-[''] after:size-4 after:min-w-4 after:min-h-4 after:bg-transparent after:bg-no-repeat after:bg-center after:bg-contain after:bg-down after:transition after:duration-100 after:ease-in-out";
const commonOption = "overflow-y-scroll absolute max-h-79 border border-natural-900 bg-white z-50";

const SelectboxConfig: SelectboxStyle = {
   base: "cursor-pointer relative min-w-41",
   label: `${labelCommon} ${labelArrow} `,
   text: "text-sm text-natural-900 truncate",
   option: {
      default: `${commonOption} top-[41px] opacity-0 min-w-[-webkit-fill-available]`,
      open: `${commonOption} top-[41px] opacity-100`,
      round: `${commonOption} top-[51px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] border-line-200 rounded-2xl`,
      underline: `${commonOption} top-[51px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] border-line-200`,
   },
   item: "cursor-pointer flex items-center px-3 h-[42px] text-sm text-natural-900 hover:bg-line-50",
   select: {
      off: "border-gray-300",
      on: "border-natural-900 after:rotate-180",
   },
   border_radius: {
      default: "rounded-none",
      round: "rounded-full",
      underline: `border-0 border-b border-gray-400`,
   },
   selectedItem: "font-semibold",
   base_disabled: "border-gray-300 focus:border-gray-300 z-auto",
   item_disabled: "text-natural-300 bg-silver-200 after:bg-disabled-down",
   width: {
      /*  10px*/ "2.5": "w-2.5",
      /*  12px*/ "3": "w-3",
      /*  14px*/ "3.5": "w-3.5",
      /*  16px*/ "4": "w-4",
      /*  18px*/ "4.5": "w-4.5",
      /*  20px*/ "5": "w-5",
      /*  22px*/ "5.5": "w-5.5",
      /*  24px*/ "6": "w-6",
      /*  26px*/ "6.5": "w-6.5",
      /*  28px*/ "7": "w-7",
      /*  30px*/ "7.5": "w-7.5",
      /*  32px*/ "8": "w-8",
      /*  34px*/ "8.5": "w-8.5",
      /*  36px*/ "9": "w-9",
      /*  38px*/ "9.5": "w-9.5",
      /*  40px*/ "10": "w-10",
      /*  42px*/ "10.5": "w-10.5",
      /*  44px*/ "11": "w-11",
      /*  46px*/ "11.5": "w-11.5",
      /*  48px*/ "12": "w-12",
      /*  50px*/ "12.5": "w-12.5",
      /*  52px*/ "13": "w-13",
      /*  54px*/ "13.5": "w-13.5",
      /*  56px*/ "14": "w-14",
      /*  58px*/ "14.5": "w-14.5",
      /*  60px;*/ "15": "w-15",
      /*  62px;*/ "15.5": "w-15.5",
      /*  64px*/ "16": "w-16",
      /*  66px*/ "16.5": "w-16.5",
      /*  68px*/ "17": "w-17",
      /*  70px*/ "17.5": "w-17.5",
      /*  72px*/ "18": "w-18",
      /*  74px*/ "18.5": "w-18.5",
      /*  76px*/ "19": "w-19",
      /*  78px*/ "19.5": "w-19.5",
      /*  80px*/ "20": "w-20",
      /*  82px*/ "20.5": "w-20.5",
      /*  84px*/ "21": "w-21",
      /*  86px*/ "21.5": "w-21.5",
      /*  88px*/ "22": "w-22",
      /*  90px*/ "22.5": "w-22.5",
      /*  92px*/ "23": "w-23",
      /*  94px*/ "23.5": "w-23.5",
      /*  96px*/ "24": "w-24",
      /*  98px*/ "25": "w-25",
      /*100px*/ "26": "w-26",
      /*112px*/ "28": "w-28",
      /*120px*/ "29": "w-29",
      /*128px*/ "32": "w-32",
      /*130px*/ "34": "w-34",
      /*136px*/ "35": "w-35",
      /*144px*/ "36": "w-36",
      /*152px*/ "39": "w-39",
      /*160px*/ "40": "w-40",
      /*168px*/ "42": "w-42",
      /*176px*/ "44": "w-44",
      /*192px*/ "48": "w-48",
      /*200px*/ "50": "w-50",
      /*208px*/ "52": "w-52",
      /*220px*/ "54": "w-54",
      /*224px*/ "56": "w-56",
      /*240px*/ "60": "w-60",
      /*244px*/ "62": "w-62",
      /*250px*/ "63": "w-63",
      /*256px*/ "64": "w-64",
      /*260px*/ "66": "w-66",
      /*288px*/ "72": "w-72",
      /*300px*/ "79": "w-79",
      /*320px*/ "80": "w-80",
      /*384px*/ "96": "w-96",
      /*400px*/ "100": "w-100",
      "auto": "w-auto",
      "full": "w-full",
   },
   option_width: {
      "auto": "w-auto",
      "full": "w-full",
   }
};
export default SelectboxConfig