export interface PagingTheme {
    base: string;
    pages: string;
    selector: string;
}

const number = "cursor-pointer flex justify-center items-center size-8 text-sm"

const paging: PagingTheme = {
    base: "flex justify-center items-center gap-1",
    pages: number,
    selector: `${number} font-semibold`,
};

export default paging