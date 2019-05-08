import { Observable } from 'rxjs';

export interface CrudService {
    getAll(): Observable<any>;
 add(p): Observable<any>;
 update(p): Observable<any>;
 delete(id): Observable<any>;
}
