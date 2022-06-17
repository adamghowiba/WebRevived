import { Prisma, Account } from './prisma';

declare namespace AccountApi {
  /* GET */
  interface GetParams {
    account_id: string;
  }
  type GetQueryParams = Prisma.AccountInclude;

  /* PUT */
  interface PutInclude {
    users: number[];
    projects: number[];
    websites: number[];
  }
  type PutBody = Partial<Account & PutInclude>;
}
