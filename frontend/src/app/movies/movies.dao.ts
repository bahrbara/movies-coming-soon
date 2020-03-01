import { Movie } from './movie.model';

export interface MoviesDao {
    items: Movie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}
