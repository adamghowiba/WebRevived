import { Prisma, Contact } from './prisma';

declare namespace ContactApi {
  /* GET */
  interface ContactIdParam {
    contact_id: string;
  }

  type GetQueryParams = Prisma.AccountInclude;

  type PostBody = Contact;
  
  /* PUT */
  type PutInclude = {
    [K in keyof Prisma.ContactInclude]: number[];
  };
  type PutBody = Partial<Contact & PutInclude>;
}
