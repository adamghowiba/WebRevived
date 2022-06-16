export type AsyncState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncStore<D> {
	state: AsyncState;
	data: D;
	error?: string | Error;
}
