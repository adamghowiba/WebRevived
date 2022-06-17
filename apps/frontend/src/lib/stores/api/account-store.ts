import accountApi from '$lib/api/account-api';
import { createAsyncStore } from '$lib/stores/async-store';
import type { Account } from '$lib/types/account';


const createAccountStore = () => {
	const { refresh, state, subscribe, update } = createAsyncStore<Account[]>([], () => {
		return accountApi.getAccounts();
	});

	const addAccount = async (accountData: Account) => {
		try {
			const accountResult = await accountApi.postAccount(accountData);
			update((account) => {
				account.data.push(accountResult);
				return account;
			});
		} catch (error) {
			console.log(error);
		}
	};

	// const putAccount = async (AccountData:)

	return {
		refresh,
		addAccount,
		state,
		subscribe
	};
};

export const accountStore = createAccountStore();
