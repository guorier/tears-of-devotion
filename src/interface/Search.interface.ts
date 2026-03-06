type SortKey = 'ASC' | 'DESC' | null

export interface ISearchParams {
    page?: number;
    pageSize: number;
    sortKey?: string;
    sortValue?: SortKey;
    searchType?: string;
    searchKwd?: string;
}