const Alerttheme = {
    root: {
        base: "fixed top-0 right-0 left-0 z-50 overflow-y-auto overflow-x-hidden items-center justify-center h-modal h-screen ---000---",
        show: {
            on: "flex bg-silver-900 bg-opacity-50",
            off: "hidden",
        },
    },
    header: {
        base: "flex items-start justify-between rounded-t border-b",
        popup: "p-2 border-b-0",
        title: "text-xl font-medium text-silver-900",

    },
    body: {
        base: "relative w-full max-w-md h-auto",
        inner: "relative flex flex-col gap-6 p-6 max-h-[90vh] rounded-2xl bg-white shadow",
    },
    content: {
        base: "pt-4",
        inner: "flex flex-col gap-1 pt-2 font-semibold text-lg",
        paragraph: "font-normal text-sm text-neutral-400",
    },
    close: {
        base: "absolute top-0 right-0 flex justify-center items-center size-11",
        inner: "",
        icon: "size-4",
    },
};

export default Alerttheme