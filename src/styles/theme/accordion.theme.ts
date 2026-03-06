interface GenericObject<T> { [key: string]: T; }
type ObjectString = GenericObject<string>;
export interface AccordionStyle {
    wrap : {
        base: string;
        toggle: ObjectString;
    };
    title: {
        base: string;
        arrow: {
            base:string;
            open: ObjectString;
        },
        open: ObjectString;
    },
    content: string;
}



const accordionConfig: AccordionStyle = {
    wrap: {
        base: '',
        toggle: {
            off: 'rounded-lg border',
            on: 'border-b',
        },
    },

    title: {
        base: 'flex items-center justify-between p-3 w-full font-medium text-left border-b border-line-200',
        open: {
            off: 'text-natural-500',
            on: 'text-slate-900',
        },
        arrow: {
            base: 'size-5',
            open: {
                off: '',
                on: 'rotate-180',
            },
        },
    },
    content: 'p-7 text-sm text-natural-700 border-b border-line-200  bg-slate-50',
};
export default accordionConfig