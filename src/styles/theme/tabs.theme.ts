import type { FlowbiteTabsTheme } from "@/components/Tabs/items";

export const tabTheme: FlowbiteTabsTheme = {
    base: "flex flex-col gap-2",
    tablist: {
        base: "flex text-center",
        styles: {
            default: "flex-wrap border-b border-gray-200",
            underline: "flex-wrap -mb-px border-b border-gray-200 text-red-500",
            pills: "flex-wrap font-medium text-sm text-red-500 space-x-2",
            fullWidth: "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col rounded-none",
        },
        tabitem: {
            base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-default disabled:text-silver-400  focus:ring-red-500 focus:outline-none bg-red-700",
            styles: {
                default: {
                    base: "rounded-t-lg",
                    active: {
                        on: "bg-silver-100 text-red-600",
                        off: "text-silver-500 hover:bg-line-50 hover:text-silver-600",
                    },
                },
                underline: {
                    base: "rounded-t-lg",
                    active: {
                        on: "text-red-600 rounded-t-lg border-b-2 border-red-600 active",
                        off: "border-b-2 border-transparent text-silver-500 hover:border-gray-900 hover:text-silver-600",
                    },
                },
                pills: {
                    base: "",
                    active: {
                        on: "rounded-lg bg-red-600 text-white",
                        off: "rounded-lg hover:text-silver-900 hover:bg-silver-100",
                    },
                },
                fullWidth: {
                    base: "ml-0 first:ml-0 w-full rounded-none flex",
                    active: {
                        on: "p-4 text-silver-900 bg-silver-100 active",
                        off: "bg-white hover:text-silver-700 hover:bg-line-50 rounded-none",
                    },
                },
            },
            icon: "mr-2 h-5 w-5",
        },
    },
    tabitemcontainer: {
        base: "",
        styles: {
            default: "text-red-600",
            underline: "text-red-600",
            pills: "text-red-600",
            fullWidth: "text-red-600",
        },
    },
    tabpanel: "py-3",
};
