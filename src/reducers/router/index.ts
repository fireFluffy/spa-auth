// Modules
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export const routerReducer = (history: History) => connectRouter(history);
