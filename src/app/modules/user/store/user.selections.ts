import { createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.UserState>('user');
