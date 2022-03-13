// Modules
import { Store } from 'redux';
import { History } from 'history';
// Types
import { TInitialState } from '@models/types';

export type TInitStore = (history: History) => Store<TInitialState>;
