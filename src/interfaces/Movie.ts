export interface Movie {
    id?: number | string;
    title: string;
    cover: string;
    score?: number;
    backdrop_path?: string;
    vote_average?: number;
    name?: string;
    poster_path?: string;
}