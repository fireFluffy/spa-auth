// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TProcessEnv = Record<string, any>;

export type TReducer = (accumulator: TProcessEnv, key: string) => TProcessEnv;

export type TJsObjectEnv = Record<string, string>;
