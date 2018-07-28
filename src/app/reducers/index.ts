import {
  ActionReducerMap,
  MetaReducer,
  ActionReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../environments/environment';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {

};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['user'], rehydrate: true})(reducer);
}

const devMetaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [...devMetaReducers] : [...devMetaReducers];
