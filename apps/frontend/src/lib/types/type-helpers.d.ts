export type PropsTypes<T> = T extends SvelteComponentTyped<infer P, any, any> ? P : never;
