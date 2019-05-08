import { Action } from '@ngrx/store';
import { SAVE_PRINCIPAL, SavePrincipalAction } from './save.principal.actions';
import { Principal } from './principal';


export function principalReducer(state: Principal, action: SavePrincipalAction) {
    switch (action.type) {
           case SAVE_PRINCIPAL:
            return Object.assign({}, state, action.payload);
           break;
           default: return state;
           break;
        }
}
