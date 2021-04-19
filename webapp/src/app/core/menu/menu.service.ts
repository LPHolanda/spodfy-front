import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    showMenu = new BehaviorSubject<boolean>(true);

    constructor() {}

    getShowMenu(): Observable<boolean> {
        return this.showMenu.asObservable();
    }
    
    setShowMenu(show: boolean): void {
        this.showMenu.next(show);
    }
}