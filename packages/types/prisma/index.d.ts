
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  password: string
  first_name: string
  last_name: string | null
  title: string | null
  clickup_uid: string | null
  slack_uid: string | null
  zoho_uid: string | null
  bio: string | null
  group_id: number | null
  role: UserRole
  createdAt: Date
}

/**
 * Model Group
 * 
 */
export type Group = {
  id: number
  name: string
  description: string
  createdAt: Date
}

/**
 * Model Project
 * 
 */
export type Project = {
  id: number
  name: string
  type: string
  description: string | null
  slack_channel: string | null
  account_id: number | null
  due_date: Date | null
  createdAt: Date
}

/**
 * Model Account
 * 
 */
export type Account = {
  id: number
  name: string
  industry: string | null
  phone: string | null
  street: string | null
  city: string | null
  state: string | null
  code: string | null
  country: string | null
}

/**
 * Model Contact
 * 
 */
export type Contact = {
  id: number
  first_name: string
  last_name: string
  title: string
  email: string
  phone: string | null
  portal_uid: number | null
  projectId: number | null
}

/**
 * Model Website
 * 
 */
export type Website = {
  id: number
  account_id: number
  url: string
}

/**
 * Model PortalUser
 * 
 */
export type PortalUser = {
  password: string
  contact_id: number
  portal_id: number
}

/**
 * Model PortalInvitation
 * 
 */
export type PortalInvitation = {
  token: string
  expiration_date: Date
  contact_id: number
}

/**
 * Model Portal
 * 
 */
export type Portal = {
  id: number
  account_id: number
}

/**
 * Model Form
 * 
 */
export type Form = {
  id: number
  name: string
  website_id: number
}

/**
 * Model FormSubmission
 * 
 */
export type FormSubmission = {
  id: number
  data: Prisma.JsonValue
  from_id: number
  submittedDate: Date
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sid: string
  data: string
  expiresAt: Date
  createdAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserRole: {
  GUEST: 'GUEST',
  DESIGNER: 'DESIGNER',
  DEVELOPER: 'DEVELOPER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<GlobalReject>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<GlobalReject>;

  /**
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<GlobalReject>;

  /**
   * `prisma.portalUser`: Exposes CRUD operations for the **PortalUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortalUsers
    * const portalUsers = await prisma.portalUser.findMany()
    * ```
    */
  get portalUser(): Prisma.PortalUserDelegate<GlobalReject>;

  /**
   * `prisma.portalInvitation`: Exposes CRUD operations for the **PortalInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortalInvitations
    * const portalInvitations = await prisma.portalInvitation.findMany()
    * ```
    */
  get portalInvitation(): Prisma.PortalInvitationDelegate<GlobalReject>;

  /**
   * `prisma.portal`: Exposes CRUD operations for the **Portal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portals
    * const portals = await prisma.portal.findMany()
    * ```
    */
  get portal(): Prisma.PortalDelegate<GlobalReject>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<GlobalReject>;

  /**
   * `prisma.formSubmission`: Exposes CRUD operations for the **FormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormSubmissions
    * const formSubmissions = await prisma.formSubmission.findMany()
    * ```
    */
  get formSubmission(): Prisma.FormSubmissionDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.14.0
   * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Group: 'Group',
    Project: 'Project',
    Account: 'Account',
    Contact: 'Contact',
    Website: 'Website',
    PortalUser: 'PortalUser',
    PortalInvitation: 'PortalInvitation',
    Portal: 'Portal',
    Form: 'Form',
    FormSubmission: 'FormSubmission',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    website: number
    projects: number
    accounts: number
  }

  export type UserCountOutputTypeSelect = {
    website?: boolean
    projects?: boolean
    accounts?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type GroupCountOutputType
   */


  export type GroupCountOutputType = {
    users: number
  }

  export type GroupCountOutputTypeSelect = {
    users?: boolean
  }

  export type GroupCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GroupCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GroupCountOutputType
    : S extends undefined
    ? never
    : S extends GroupCountOutputTypeArgs
    ?'include' extends U
    ? GroupCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GroupCountOutputType ? GroupCountOutputType[P] : never
  } 
    : GroupCountOutputType
  : GroupCountOutputType




  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     * 
    **/
    select?: GroupCountOutputTypeSelect | null
  }



  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    contacts: number
    users: number
  }

  export type ProjectCountOutputTypeSelect = {
    contacts?: boolean
    users?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProjectCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProjectCountOutputType
    : S extends undefined
    ? never
    : S extends ProjectCountOutputTypeArgs
    ?'include' extends U
    ? ProjectCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
    : ProjectCountOutputType
  : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     * 
    **/
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Count Type AccountCountOutputType
   */


  export type AccountCountOutputType = {
    users: number
    contacts: number
    website: number
    projects: number
  }

  export type AccountCountOutputTypeSelect = {
    users?: boolean
    contacts?: boolean
    website?: boolean
    projects?: boolean
  }

  export type AccountCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AccountCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AccountCountOutputType
    : S extends undefined
    ? never
    : S extends AccountCountOutputTypeArgs
    ?'include' extends U
    ? AccountCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AccountCountOutputType ? AccountCountOutputType[P] : never
  } 
    : AccountCountOutputType
  : AccountCountOutputType




  // Custom InputTypes

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     * 
    **/
    select?: AccountCountOutputTypeSelect | null
  }



  /**
   * Count Type ContactCountOutputType
   */


  export type ContactCountOutputType = {
    forms: number
    account: number
  }

  export type ContactCountOutputTypeSelect = {
    forms?: boolean
    account?: boolean
  }

  export type ContactCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ContactCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ContactCountOutputType
    : S extends undefined
    ? never
    : S extends ContactCountOutputTypeArgs
    ?'include' extends U
    ? ContactCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ContactCountOutputType ? ContactCountOutputType[P] : never
  } 
    : ContactCountOutputType
  : ContactCountOutputType




  // Custom InputTypes

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     * 
    **/
    select?: ContactCountOutputTypeSelect | null
  }



  /**
   * Count Type WebsiteCountOutputType
   */


  export type WebsiteCountOutputType = {
    forms: number
    users: number
  }

  export type WebsiteCountOutputTypeSelect = {
    forms?: boolean
    users?: boolean
  }

  export type WebsiteCountOutputTypeGetPayload<
    S extends boolean | null | undefined | WebsiteCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? WebsiteCountOutputType
    : S extends undefined
    ? never
    : S extends WebsiteCountOutputTypeArgs
    ?'include' extends U
    ? WebsiteCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WebsiteCountOutputType ? WebsiteCountOutputType[P] : never
  } 
    : WebsiteCountOutputType
  : WebsiteCountOutputType




  // Custom InputTypes

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WebsiteCountOutputType
     * 
    **/
    select?: WebsiteCountOutputTypeSelect | null
  }



  /**
   * Count Type PortalCountOutputType
   */


  export type PortalCountOutputType = {
    users: number
  }

  export type PortalCountOutputTypeSelect = {
    users?: boolean
  }

  export type PortalCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PortalCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PortalCountOutputType
    : S extends undefined
    ? never
    : S extends PortalCountOutputTypeArgs
    ?'include' extends U
    ? PortalCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PortalCountOutputType ? PortalCountOutputType[P] : never
  } 
    : PortalCountOutputType
  : PortalCountOutputType




  // Custom InputTypes

  /**
   * PortalCountOutputType without action
   */
  export type PortalCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PortalCountOutputType
     * 
    **/
    select?: PortalCountOutputTypeSelect | null
  }



  /**
   * Count Type FormCountOutputType
   */


  export type FormCountOutputType = {
    contacts: number
    form_submissions: number
  }

  export type FormCountOutputTypeSelect = {
    contacts?: boolean
    form_submissions?: boolean
  }

  export type FormCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FormCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FormCountOutputType
    : S extends undefined
    ? never
    : S extends FormCountOutputTypeArgs
    ?'include' extends U
    ? FormCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof FormCountOutputType ? FormCountOutputType[P] : never
  } 
    : FormCountOutputType
  : FormCountOutputType




  // Custom InputTypes

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     * 
    **/
    select?: FormCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    group_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    group_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    title: string | null
    clickup_uid: string | null
    slack_uid: string | null
    zoho_uid: string | null
    bio: string | null
    group_id: number | null
    role: UserRole | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    title: string | null
    clickup_uid: string | null
    slack_uid: string | null
    zoho_uid: string | null
    bio: string | null
    group_id: number | null
    role: UserRole | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    first_name: number
    last_name: number
    title: number
    clickup_uid: number
    slack_uid: number
    zoho_uid: number
    bio: number
    group_id: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    group_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    group_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    title?: true
    clickup_uid?: true
    slack_uid?: true
    zoho_uid?: true
    bio?: true
    group_id?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    title?: true
    clickup_uid?: true
    slack_uid?: true
    zoho_uid?: true
    bio?: true
    group_id?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    title?: true
    clickup_uid?: true
    slack_uid?: true
    zoho_uid?: true
    bio?: true
    group_id?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    first_name: string
    last_name: string | null
    title: string | null
    clickup_uid: string | null
    slack_uid: string | null
    zoho_uid: string | null
    bio: string | null
    group_id: number | null
    role: UserRole
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    title?: boolean
    clickup_uid?: boolean
    slack_uid?: boolean
    zoho_uid?: boolean
    bio?: boolean
    website?: boolean | WebsiteFindManyArgs
    projects?: boolean | ProjectFindManyArgs
    accounts?: boolean | AccountFindManyArgs
    group?: boolean | GroupArgs
    group_id?: boolean
    role?: boolean
    createdAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    website?: boolean | WebsiteFindManyArgs
    projects?: boolean | ProjectFindManyArgs
    accounts?: boolean | AccountFindManyArgs
    group?: boolean | GroupArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'website' ? Array < WebsiteGetPayload<S['include'][P]>>  :
        P extends 'projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'group' ? GroupGetPayload<S['include'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'website' ? Array < WebsiteGetPayload<S['select'][P]>>  :
        P extends 'projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'group' ? GroupGetPayload<S['select'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    website<T extends WebsiteFindManyArgs = {}>(args?: Subset<T, WebsiteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Website>>, PrismaPromise<Array<WebsiteGetPayload<T>>>>;

    projects<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    accounts<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    group<T extends GroupArgs = {}>(args?: Subset<T, GroupArgs>): CheckSelect<T, Prisma__GroupClient<Group | null >, Prisma__GroupClient<GroupGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Group
   */


  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type GroupAggregateArgs = {
    /**
     * Filter which Group to aggregate.
     * 
    **/
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs = {
    where?: GroupWhereInput
    orderBy?: Enumerable<GroupOrderByWithAggregationInput>
    by: Array<GroupScalarFieldEnum>
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }


  export type GroupGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | UserFindManyArgs
    createdAt?: boolean
    _count?: boolean | GroupCountOutputTypeArgs
  }

  export type GroupInclude = {
    users?: boolean | UserFindManyArgs
    _count?: boolean | GroupCountOutputTypeArgs
  }

  export type GroupGetPayload<
    S extends boolean | null | undefined | GroupArgs,
    U = keyof S
      > = S extends true
        ? Group
    : S extends undefined
    ? never
    : S extends GroupArgs | GroupFindManyArgs
    ?'include' extends U
    ? Group  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? GroupCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? GroupCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Group ? Group[P] : never
  } 
    : Group
  : Group


  type GroupCountArgs = Merge<
    Omit<GroupFindManyArgs, 'select' | 'include'> & {
      select?: GroupCountAggregateInputType | true
    }
  >

  export interface GroupDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Group'> extends True ? CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>> : CheckSelect<T, Prisma__GroupClient<Group | null >, Prisma__GroupClient<GroupGetPayload<T> | null >>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Group'> extends True ? CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>> : CheckSelect<T, Prisma__GroupClient<Group | null >, Prisma__GroupClient<GroupGetPayload<T> | null >>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs>(
      args?: SelectSubset<T, GroupFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Group>>, PrismaPromise<Array<GroupGetPayload<T>>>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs>(
      args: SelectSubset<T, GroupCreateArgs>
    ): CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs>(
      args?: SelectSubset<T, GroupCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs>(
      args: SelectSubset<T, GroupDeleteArgs>
    ): CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs>(
      args: SelectSubset<T, GroupUpdateArgs>
    ): CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs>(
      args?: SelectSubset<T, GroupDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs>(
      args: SelectSubset<T, GroupUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs>(
      args: SelectSubset<T, GroupUpsertArgs>
    ): CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * Throw an Error if a Group can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Group to fetch.
     * 
    **/
    where: GroupWhereUniqueInput
  }


  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * Throw an Error if a Group can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Group to fetch.
     * 
    **/
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     * 
    **/
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     * 
    **/
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * Filter, which Groups to fetch.
     * 
    **/
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     * 
    **/
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * Group create
   */
  export type GroupCreateArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * The data needed to create a Group.
     * 
    **/
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs = {
    /**
     * The data used to create many Groups.
     * 
    **/
    data: Enumerable<GroupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * The data needed to update a Group.
     * 
    **/
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     * 
    **/
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs = {
    /**
     * The data used to update Groups.
     * 
    **/
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     * 
    **/
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * The filter to search for the Group to update in case it exists.
     * 
    **/
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     * 
    **/
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * Filter which Group to delete.
     * 
    **/
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs = {
    /**
     * Filter which Groups to delete
     * 
    **/
    where?: GroupWhereInput
  }


  /**
   * Group without action
   */
  export type GroupArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
  }



  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    description: string | null
    slack_channel: string | null
    account_id: number | null
    due_date: Date | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    description: string | null
    slack_channel: string | null
    account_id: number | null
    due_date: Date | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    slack_channel: number
    account_id: number
    due_date: number
    createdAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    slack_channel?: true
    account_id?: true
    due_date?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    slack_channel?: true
    account_id?: true
    due_date?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    slack_channel?: true
    account_id?: true
    due_date?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: Array<ProjectScalarFieldEnum>
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: number
    name: string
    type: string
    description: string | null
    slack_channel: string | null
    account_id: number | null
    due_date: Date | null
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    slack_channel?: boolean
    contacts?: boolean | ContactFindManyArgs
    users?: boolean | UserFindManyArgs
    account?: boolean | AccountArgs
    account_id?: boolean
    due_date?: boolean
    createdAt?: boolean
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectInclude = {
    contacts?: boolean | ContactFindManyArgs
    users?: boolean | UserFindManyArgs
    account?: boolean | AccountArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectArgs,
    U = keyof S
      > = S extends true
        ? Project
    : S extends undefined
    ? never
    : S extends ProjectArgs | ProjectFindManyArgs
    ?'include' extends U
    ? Project  & {
    [P in TrueKeys<S['include']>]:
        P extends 'contacts' ? Array < ContactGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'account' ? AccountGetPayload<S['include'][P]> | null :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'contacts' ? Array < ContactGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'account' ? AccountGetPayload<S['select'][P]> | null :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Project ? Project[P] : never
  } 
    : Project
  : Project


  type ProjectCountArgs = Merge<
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }
  >

  export interface ProjectDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    contacts<T extends ContactFindManyArgs = {}>(args?: Subset<T, ContactFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Contact>>, PrismaPromise<Array<ContactGetPayload<T>>>>;

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    account<T extends AccountArgs = {}>(args?: Subset<T, AccountArgs>): CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Throw an Error if a Project can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Throw an Error if a Project can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     * 
    **/
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     * 
    **/
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     * 
    **/
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     * 
    **/
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     * 
    **/
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     * 
    **/
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    name: string | null
    industry: string | null
    phone: string | null
    street: string | null
    city: string | null
    state: string | null
    code: string | null
    country: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    name: string | null
    industry: string | null
    phone: string | null
    street: string | null
    city: string | null
    state: string | null
    code: string | null
    country: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    industry: number
    phone: number
    street: number
    city: number
    state: number
    code: number
    country: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    phone?: true
    street?: true
    city?: true
    state?: true
    code?: true
    country?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    phone?: true
    street?: true
    city?: true
    state?: true
    code?: true
    country?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    phone?: true
    street?: true
    city?: true
    state?: true
    code?: true
    country?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: number
    name: string
    industry: string | null
    phone: string | null
    street: string | null
    city: string | null
    state: string | null
    code: string | null
    country: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    name?: boolean
    industry?: boolean
    phone?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    code?: boolean
    country?: boolean
    users?: boolean | UserFindManyArgs
    contacts?: boolean | ContactFindManyArgs
    website?: boolean | WebsiteFindManyArgs
    portal?: boolean | PortalArgs
    projects?: boolean | ProjectFindManyArgs
    _count?: boolean | AccountCountOutputTypeArgs
  }

  export type AccountInclude = {
    users?: boolean | UserFindManyArgs
    contacts?: boolean | ContactFindManyArgs
    website?: boolean | WebsiteFindManyArgs
    portal?: boolean | PortalArgs
    projects?: boolean | ProjectFindManyArgs
    _count?: boolean | AccountCountOutputTypeArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S
      > = S extends true
        ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ?'include' extends U
    ? Account  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'contacts' ? Array < ContactGetPayload<S['include'][P]>>  :
        P extends 'website' ? Array < WebsiteGetPayload<S['include'][P]>>  :
        P extends 'portal' ? PortalGetPayload<S['include'][P]> | null :
        P extends 'projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends '_count' ? AccountCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'contacts' ? Array < ContactGetPayload<S['select'][P]>>  :
        P extends 'website' ? Array < WebsiteGetPayload<S['select'][P]>>  :
        P extends 'portal' ? PortalGetPayload<S['select'][P]> | null :
        P extends 'projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends '_count' ? AccountCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
    : Account
  : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    contacts<T extends ContactFindManyArgs = {}>(args?: Subset<T, ContactFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Contact>>, PrismaPromise<Array<ContactGetPayload<T>>>>;

    website<T extends WebsiteFindManyArgs = {}>(args?: Subset<T, WebsiteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Website>>, PrismaPromise<Array<WebsiteGetPayload<T>>>>;

    portal<T extends PortalArgs = {}>(args?: Subset<T, PortalArgs>): CheckSelect<T, Prisma__PortalClient<Portal | null >, Prisma__PortalClient<PortalGetPayload<T> | null >>;

    projects<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Throw an Error if a Account can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Throw an Error if a Account can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Contact
   */


  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
    portal_uid: number | null
    projectId: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
    portal_uid: number | null
    projectId: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    title: string | null
    email: string | null
    phone: string | null
    portal_uid: number | null
    projectId: number | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    title: string | null
    email: string | null
    phone: string | null
    portal_uid: number | null
    projectId: number | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    title: number
    email: number
    phone: number
    portal_uid: number
    projectId: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
    portal_uid?: true
    projectId?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
    portal_uid?: true
    projectId?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    title?: true
    email?: true
    phone?: true
    portal_uid?: true
    projectId?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    title?: true
    email?: true
    phone?: true
    portal_uid?: true
    projectId?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    title?: true
    email?: true
    phone?: true
    portal_uid?: true
    projectId?: true
    _all?: true
  }

  export type ContactAggregateArgs = {
    /**
     * Filter which Contact to aggregate.
     * 
    **/
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs = {
    where?: ContactWhereInput
    orderBy?: Enumerable<ContactOrderByWithAggregationInput>
    by: Array<ContactScalarFieldEnum>
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }


  export type ContactGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    title: string
    email: string
    phone: string | null
    portal_uid: number | null
    projectId: number | null
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    portal_uid?: boolean
    forms?: boolean | FormFindManyArgs
    account?: boolean | AccountFindManyArgs
    portal_token?: boolean | PortalInvitationArgs
    portal_user?: boolean | PortalUserArgs
    Project?: boolean | ProjectArgs
    projectId?: boolean
    _count?: boolean | ContactCountOutputTypeArgs
  }

  export type ContactInclude = {
    forms?: boolean | FormFindManyArgs
    account?: boolean | AccountFindManyArgs
    portal_token?: boolean | PortalInvitationArgs
    portal_user?: boolean | PortalUserArgs
    Project?: boolean | ProjectArgs
    _count?: boolean | ContactCountOutputTypeArgs
  }

  export type ContactGetPayload<
    S extends boolean | null | undefined | ContactArgs,
    U = keyof S
      > = S extends true
        ? Contact
    : S extends undefined
    ? never
    : S extends ContactArgs | ContactFindManyArgs
    ?'include' extends U
    ? Contact  & {
    [P in TrueKeys<S['include']>]:
        P extends 'forms' ? Array < FormGetPayload<S['include'][P]>>  :
        P extends 'account' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'portal_token' ? PortalInvitationGetPayload<S['include'][P]> | null :
        P extends 'portal_user' ? PortalUserGetPayload<S['include'][P]> | null :
        P extends 'Project' ? ProjectGetPayload<S['include'][P]> | null :
        P extends '_count' ? ContactCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'forms' ? Array < FormGetPayload<S['select'][P]>>  :
        P extends 'account' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'portal_token' ? PortalInvitationGetPayload<S['select'][P]> | null :
        P extends 'portal_user' ? PortalUserGetPayload<S['select'][P]> | null :
        P extends 'Project' ? ProjectGetPayload<S['select'][P]> | null :
        P extends '_count' ? ContactCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Contact ? Contact[P] : never
  } 
    : Contact
  : Contact


  type ContactCountArgs = Merge<
    Omit<ContactFindManyArgs, 'select' | 'include'> & {
      select?: ContactCountAggregateInputType | true
    }
  >

  export interface ContactDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContactFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Contact'> extends True ? CheckSelect<T, Prisma__ContactClient<Contact>, Prisma__ContactClient<ContactGetPayload<T>>> : CheckSelect<T, Prisma__ContactClient<Contact | null >, Prisma__ContactClient<ContactGetPayload<T> | null >>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContactFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Contact'> extends True ? CheckSelect<T, Prisma__ContactClient<Contact>, Prisma__ContactClient<ContactGetPayload<T>>> : CheckSelect<T, Prisma__ContactClient<Contact | null >, Prisma__ContactClient<ContactGetPayload<T> | null >>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactFindManyArgs>(
      args?: SelectSubset<T, ContactFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Contact>>, PrismaPromise<Array<ContactGetPayload<T>>>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends ContactCreateArgs>(
      args: SelectSubset<T, ContactCreateArgs>
    ): CheckSelect<T, Prisma__ContactClient<Contact>, Prisma__ContactClient<ContactGetPayload<T>>>

    /**
     * Create many Contacts.
     *     @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactCreateManyArgs>(
      args?: SelectSubset<T, ContactCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends ContactDeleteArgs>(
      args: SelectSubset<T, ContactDeleteArgs>
    ): CheckSelect<T, Prisma__ContactClient<Contact>, Prisma__ContactClient<ContactGetPayload<T>>>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUpdateArgs>(
      args: SelectSubset<T, ContactUpdateArgs>
    ): CheckSelect<T, Prisma__ContactClient<Contact>, Prisma__ContactClient<ContactGetPayload<T>>>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactDeleteManyArgs>(
      args?: SelectSubset<T, ContactDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUpdateManyArgs>(
      args: SelectSubset<T, ContactUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUpsertArgs>(
      args: SelectSubset<T, ContactUpsertArgs>
    ): CheckSelect<T, Prisma__ContactClient<Contact>, Prisma__ContactClient<ContactGetPayload<T>>>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContactClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    forms<T extends FormFindManyArgs = {}>(args?: Subset<T, FormFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Form>>, PrismaPromise<Array<FormGetPayload<T>>>>;

    account<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    portal_token<T extends PortalInvitationArgs = {}>(args?: Subset<T, PortalInvitationArgs>): CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation | null >, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T> | null >>;

    portal_user<T extends PortalUserArgs = {}>(args?: Subset<T, PortalUserArgs>): CheckSelect<T, Prisma__PortalUserClient<PortalUser | null >, Prisma__PortalUserClient<PortalUserGetPayload<T> | null >>;

    Project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Throw an Error if a Contact can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Contact to fetch.
     * 
    **/
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Throw an Error if a Contact can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Contact to fetch.
     * 
    **/
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     * 
    **/
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     * 
    **/
    distinct?: Enumerable<ContactScalarFieldEnum>
  }


  /**
   * Contact findMany
   */
  export type ContactFindManyArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Filter, which Contacts to fetch.
     * 
    **/
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     * 
    **/
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContactScalarFieldEnum>
  }


  /**
   * Contact create
   */
  export type ContactCreateArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * The data needed to create a Contact.
     * 
    **/
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }


  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs = {
    /**
     * The data used to create many Contacts.
     * 
    **/
    data: Enumerable<ContactCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Contact update
   */
  export type ContactUpdateArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * The data needed to update a Contact.
     * 
    **/
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     * 
    **/
    where: ContactWhereUniqueInput
  }


  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs = {
    /**
     * The data used to update Contacts.
     * 
    **/
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     * 
    **/
    where?: ContactWhereInput
  }


  /**
   * Contact upsert
   */
  export type ContactUpsertArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * The filter to search for the Contact to update in case it exists.
     * 
    **/
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     * 
    **/
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }


  /**
   * Contact delete
   */
  export type ContactDeleteArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Filter which Contact to delete.
     * 
    **/
    where: ContactWhereUniqueInput
  }


  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs = {
    /**
     * Filter which Contacts to delete
     * 
    **/
    where?: ContactWhereInput
  }


  /**
   * Contact without action
   */
  export type ContactArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
  }



  /**
   * Model Website
   */


  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _avg: WebsiteAvgAggregateOutputType | null
    _sum: WebsiteSumAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type WebsiteSumAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    url: string | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    url: string | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    account_id: number
    url: number
    _all: number
  }


  export type WebsiteAvgAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type WebsiteSumAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type WebsiteMinAggregateInputType = {
    id?: true
    account_id?: true
    url?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    account_id?: true
    url?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    account_id?: true
    url?: true
    _all?: true
  }

  export type WebsiteAggregateArgs = {
    /**
     * Filter which Website to aggregate.
     * 
    **/
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     * 
    **/
    orderBy?: Enumerable<WebsiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebsiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebsiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs = {
    where?: WebsiteWhereInput
    orderBy?: Enumerable<WebsiteOrderByWithAggregationInput>
    by: Array<WebsiteScalarFieldEnum>
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _avg?: WebsiteAvgAggregateInputType
    _sum?: WebsiteSumAggregateInputType
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }


  export type WebsiteGroupByOutputType = {
    id: number
    account_id: number
    url: string
    _count: WebsiteCountAggregateOutputType | null
    _avg: WebsiteAvgAggregateOutputType | null
    _sum: WebsiteSumAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect = {
    id?: boolean
    account_id?: boolean
    url?: boolean
    forms?: boolean | FormFindManyArgs
    users?: boolean | UserFindManyArgs
    account?: boolean | AccountArgs
    _count?: boolean | WebsiteCountOutputTypeArgs
  }

  export type WebsiteInclude = {
    forms?: boolean | FormFindManyArgs
    users?: boolean | UserFindManyArgs
    account?: boolean | AccountArgs
    _count?: boolean | WebsiteCountOutputTypeArgs
  }

  export type WebsiteGetPayload<
    S extends boolean | null | undefined | WebsiteArgs,
    U = keyof S
      > = S extends true
        ? Website
    : S extends undefined
    ? never
    : S extends WebsiteArgs | WebsiteFindManyArgs
    ?'include' extends U
    ? Website  & {
    [P in TrueKeys<S['include']>]:
        P extends 'forms' ? Array < FormGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'account' ? AccountGetPayload<S['include'][P]> :
        P extends '_count' ? WebsiteCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'forms' ? Array < FormGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'account' ? AccountGetPayload<S['select'][P]> :
        P extends '_count' ? WebsiteCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Website ? Website[P] : never
  } 
    : Website
  : Website


  type WebsiteCountArgs = Merge<
    Omit<WebsiteFindManyArgs, 'select' | 'include'> & {
      select?: WebsiteCountAggregateInputType | true
    }
  >

  export interface WebsiteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WebsiteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WebsiteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Website'> extends True ? CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>> : CheckSelect<T, Prisma__WebsiteClient<Website | null >, Prisma__WebsiteClient<WebsiteGetPayload<T> | null >>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WebsiteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WebsiteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Website'> extends True ? CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>> : CheckSelect<T, Prisma__WebsiteClient<Website | null >, Prisma__WebsiteClient<WebsiteGetPayload<T> | null >>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WebsiteFindManyArgs>(
      args?: SelectSubset<T, WebsiteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Website>>, PrismaPromise<Array<WebsiteGetPayload<T>>>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
    **/
    create<T extends WebsiteCreateArgs>(
      args: SelectSubset<T, WebsiteCreateArgs>
    ): CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>>

    /**
     * Create many Websites.
     *     @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     *     @example
     *     // Create many Websites
     *     const website = await prisma.website.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WebsiteCreateManyArgs>(
      args?: SelectSubset<T, WebsiteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
    **/
    delete<T extends WebsiteDeleteArgs>(
      args: SelectSubset<T, WebsiteDeleteArgs>
    ): CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WebsiteUpdateArgs>(
      args: SelectSubset<T, WebsiteUpdateArgs>
    ): CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WebsiteDeleteManyArgs>(
      args?: SelectSubset<T, WebsiteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WebsiteUpdateManyArgs>(
      args: SelectSubset<T, WebsiteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
    **/
    upsert<T extends WebsiteUpsertArgs>(
      args: SelectSubset<T, WebsiteUpsertArgs>
    ): CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>>

    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WebsiteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    forms<T extends FormFindManyArgs = {}>(args?: Subset<T, FormFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Form>>, PrismaPromise<Array<FormGetPayload<T>>>>;

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    account<T extends AccountArgs = {}>(args?: Subset<T, AccountArgs>): CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * Throw an Error if a Website can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Website to fetch.
     * 
    **/
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * Throw an Error if a Website can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Website to fetch.
     * 
    **/
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     * 
    **/
    orderBy?: Enumerable<WebsiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     * 
    **/
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     * 
    **/
    distinct?: Enumerable<WebsiteScalarFieldEnum>
  }


  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * Filter, which Websites to fetch.
     * 
    **/
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     * 
    **/
    orderBy?: Enumerable<WebsiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     * 
    **/
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WebsiteScalarFieldEnum>
  }


  /**
   * Website create
   */
  export type WebsiteCreateArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * The data needed to create a Website.
     * 
    **/
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }


  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs = {
    /**
     * The data used to create many Websites.
     * 
    **/
    data: Enumerable<WebsiteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Website update
   */
  export type WebsiteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * The data needed to update a Website.
     * 
    **/
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     * 
    **/
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs = {
    /**
     * The data used to update Websites.
     * 
    **/
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     * 
    **/
    where?: WebsiteWhereInput
  }


  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * The filter to search for the Website to update in case it exists.
     * 
    **/
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     * 
    **/
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }


  /**
   * Website delete
   */
  export type WebsiteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * Filter which Website to delete.
     * 
    **/
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs = {
    /**
     * Filter which Websites to delete
     * 
    **/
    where?: WebsiteWhereInput
  }


  /**
   * Website without action
   */
  export type WebsiteArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
  }



  /**
   * Model PortalUser
   */


  export type AggregatePortalUser = {
    _count: PortalUserCountAggregateOutputType | null
    _avg: PortalUserAvgAggregateOutputType | null
    _sum: PortalUserSumAggregateOutputType | null
    _min: PortalUserMinAggregateOutputType | null
    _max: PortalUserMaxAggregateOutputType | null
  }

  export type PortalUserAvgAggregateOutputType = {
    contact_id: number | null
    portal_id: number | null
  }

  export type PortalUserSumAggregateOutputType = {
    contact_id: number | null
    portal_id: number | null
  }

  export type PortalUserMinAggregateOutputType = {
    password: string | null
    contact_id: number | null
    portal_id: number | null
  }

  export type PortalUserMaxAggregateOutputType = {
    password: string | null
    contact_id: number | null
    portal_id: number | null
  }

  export type PortalUserCountAggregateOutputType = {
    password: number
    contact_id: number
    portal_id: number
    _all: number
  }


  export type PortalUserAvgAggregateInputType = {
    contact_id?: true
    portal_id?: true
  }

  export type PortalUserSumAggregateInputType = {
    contact_id?: true
    portal_id?: true
  }

  export type PortalUserMinAggregateInputType = {
    password?: true
    contact_id?: true
    portal_id?: true
  }

  export type PortalUserMaxAggregateInputType = {
    password?: true
    contact_id?: true
    portal_id?: true
  }

  export type PortalUserCountAggregateInputType = {
    password?: true
    contact_id?: true
    portal_id?: true
    _all?: true
  }

  export type PortalUserAggregateArgs = {
    /**
     * Filter which PortalUser to aggregate.
     * 
    **/
    where?: PortalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PortalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortalUsers
    **/
    _count?: true | PortalUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortalUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortalUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalUserMaxAggregateInputType
  }

  export type GetPortalUserAggregateType<T extends PortalUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePortalUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortalUser[P]>
      : GetScalarType<T[P], AggregatePortalUser[P]>
  }




  export type PortalUserGroupByArgs = {
    where?: PortalUserWhereInput
    orderBy?: Enumerable<PortalUserOrderByWithAggregationInput>
    by: Array<PortalUserScalarFieldEnum>
    having?: PortalUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalUserCountAggregateInputType | true
    _avg?: PortalUserAvgAggregateInputType
    _sum?: PortalUserSumAggregateInputType
    _min?: PortalUserMinAggregateInputType
    _max?: PortalUserMaxAggregateInputType
  }


  export type PortalUserGroupByOutputType = {
    password: string
    contact_id: number
    portal_id: number
    _count: PortalUserCountAggregateOutputType | null
    _avg: PortalUserAvgAggregateOutputType | null
    _sum: PortalUserSumAggregateOutputType | null
    _min: PortalUserMinAggregateOutputType | null
    _max: PortalUserMaxAggregateOutputType | null
  }

  type GetPortalUserGroupByPayload<T extends PortalUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PortalUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalUserGroupByOutputType[P]>
            : GetScalarType<T[P], PortalUserGroupByOutputType[P]>
        }
      >
    >


  export type PortalUserSelect = {
    password?: boolean
    contact_id?: boolean
    portal_id?: boolean
    contact?: boolean | ContactArgs
    portal?: boolean | PortalArgs
  }

  export type PortalUserInclude = {
    contact?: boolean | ContactArgs
    portal?: boolean | PortalArgs
  }

  export type PortalUserGetPayload<
    S extends boolean | null | undefined | PortalUserArgs,
    U = keyof S
      > = S extends true
        ? PortalUser
    : S extends undefined
    ? never
    : S extends PortalUserArgs | PortalUserFindManyArgs
    ?'include' extends U
    ? PortalUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'contact' ? ContactGetPayload<S['include'][P]> :
        P extends 'portal' ? PortalGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'contact' ? ContactGetPayload<S['select'][P]> :
        P extends 'portal' ? PortalGetPayload<S['select'][P]> :  P extends keyof PortalUser ? PortalUser[P] : never
  } 
    : PortalUser
  : PortalUser


  type PortalUserCountArgs = Merge<
    Omit<PortalUserFindManyArgs, 'select' | 'include'> & {
      select?: PortalUserCountAggregateInputType | true
    }
  >

  export interface PortalUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PortalUser that matches the filter.
     * @param {PortalUserFindUniqueArgs} args - Arguments to find a PortalUser
     * @example
     * // Get one PortalUser
     * const portalUser = await prisma.portalUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PortalUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PortalUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PortalUser'> extends True ? CheckSelect<T, Prisma__PortalUserClient<PortalUser>, Prisma__PortalUserClient<PortalUserGetPayload<T>>> : CheckSelect<T, Prisma__PortalUserClient<PortalUser | null >, Prisma__PortalUserClient<PortalUserGetPayload<T> | null >>

    /**
     * Find the first PortalUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalUserFindFirstArgs} args - Arguments to find a PortalUser
     * @example
     * // Get one PortalUser
     * const portalUser = await prisma.portalUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PortalUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PortalUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PortalUser'> extends True ? CheckSelect<T, Prisma__PortalUserClient<PortalUser>, Prisma__PortalUserClient<PortalUserGetPayload<T>>> : CheckSelect<T, Prisma__PortalUserClient<PortalUser | null >, Prisma__PortalUserClient<PortalUserGetPayload<T> | null >>

    /**
     * Find zero or more PortalUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortalUsers
     * const portalUsers = await prisma.portalUser.findMany()
     * 
     * // Get first 10 PortalUsers
     * const portalUsers = await prisma.portalUser.findMany({ take: 10 })
     * 
     * // Only select the `password`
     * const portalUserWithPasswordOnly = await prisma.portalUser.findMany({ select: { password: true } })
     * 
    **/
    findMany<T extends PortalUserFindManyArgs>(
      args?: SelectSubset<T, PortalUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PortalUser>>, PrismaPromise<Array<PortalUserGetPayload<T>>>>

    /**
     * Create a PortalUser.
     * @param {PortalUserCreateArgs} args - Arguments to create a PortalUser.
     * @example
     * // Create one PortalUser
     * const PortalUser = await prisma.portalUser.create({
     *   data: {
     *     // ... data to create a PortalUser
     *   }
     * })
     * 
    **/
    create<T extends PortalUserCreateArgs>(
      args: SelectSubset<T, PortalUserCreateArgs>
    ): CheckSelect<T, Prisma__PortalUserClient<PortalUser>, Prisma__PortalUserClient<PortalUserGetPayload<T>>>

    /**
     * Create many PortalUsers.
     *     @param {PortalUserCreateManyArgs} args - Arguments to create many PortalUsers.
     *     @example
     *     // Create many PortalUsers
     *     const portalUser = await prisma.portalUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PortalUserCreateManyArgs>(
      args?: SelectSubset<T, PortalUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PortalUser.
     * @param {PortalUserDeleteArgs} args - Arguments to delete one PortalUser.
     * @example
     * // Delete one PortalUser
     * const PortalUser = await prisma.portalUser.delete({
     *   where: {
     *     // ... filter to delete one PortalUser
     *   }
     * })
     * 
    **/
    delete<T extends PortalUserDeleteArgs>(
      args: SelectSubset<T, PortalUserDeleteArgs>
    ): CheckSelect<T, Prisma__PortalUserClient<PortalUser>, Prisma__PortalUserClient<PortalUserGetPayload<T>>>

    /**
     * Update one PortalUser.
     * @param {PortalUserUpdateArgs} args - Arguments to update one PortalUser.
     * @example
     * // Update one PortalUser
     * const portalUser = await prisma.portalUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PortalUserUpdateArgs>(
      args: SelectSubset<T, PortalUserUpdateArgs>
    ): CheckSelect<T, Prisma__PortalUserClient<PortalUser>, Prisma__PortalUserClient<PortalUserGetPayload<T>>>

    /**
     * Delete zero or more PortalUsers.
     * @param {PortalUserDeleteManyArgs} args - Arguments to filter PortalUsers to delete.
     * @example
     * // Delete a few PortalUsers
     * const { count } = await prisma.portalUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PortalUserDeleteManyArgs>(
      args?: SelectSubset<T, PortalUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortalUsers
     * const portalUser = await prisma.portalUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PortalUserUpdateManyArgs>(
      args: SelectSubset<T, PortalUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PortalUser.
     * @param {PortalUserUpsertArgs} args - Arguments to update or create a PortalUser.
     * @example
     * // Update or create a PortalUser
     * const portalUser = await prisma.portalUser.upsert({
     *   create: {
     *     // ... data to create a PortalUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortalUser we want to update
     *   }
     * })
    **/
    upsert<T extends PortalUserUpsertArgs>(
      args: SelectSubset<T, PortalUserUpsertArgs>
    ): CheckSelect<T, Prisma__PortalUserClient<PortalUser>, Prisma__PortalUserClient<PortalUserGetPayload<T>>>

    /**
     * Count the number of PortalUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalUserCountArgs} args - Arguments to filter PortalUsers to count.
     * @example
     * // Count the number of PortalUsers
     * const count = await prisma.portalUser.count({
     *   where: {
     *     // ... the filter for the PortalUsers we want to count
     *   }
     * })
    **/
    count<T extends PortalUserCountArgs>(
      args?: Subset<T, PortalUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortalUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalUserAggregateArgs>(args: Subset<T, PortalUserAggregateArgs>): PrismaPromise<GetPortalUserAggregateType<T>>

    /**
     * Group by PortalUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalUserGroupByArgs['orderBy'] }
        : { orderBy?: PortalUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortalUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PortalUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    contact<T extends ContactArgs = {}>(args?: Subset<T, ContactArgs>): CheckSelect<T, Prisma__ContactClient<Contact | null >, Prisma__ContactClient<ContactGetPayload<T> | null >>;

    portal<T extends PortalArgs = {}>(args?: Subset<T, PortalArgs>): CheckSelect<T, Prisma__PortalClient<Portal | null >, Prisma__PortalClient<PortalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PortalUser findUnique
   */
  export type PortalUserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PortalUser
     * 
    **/
    select?: PortalUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalUserInclude | null
    /**
     * Throw an Error if a PortalUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PortalUser to fetch.
     * 
    **/
    where: PortalUserWhereUniqueInput
  }


  /**
   * PortalUser findFirst
   */
  export type PortalUserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PortalUser
     * 
    **/
    select?: PortalUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalUserInclude | null
    /**
     * Throw an Error if a PortalUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PortalUser to fetch.
     * 
    **/
    where?: PortalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalUsers.
     * 
    **/
    cursor?: PortalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalUsers.
     * 
    **/
    distinct?: Enumerable<PortalUserScalarFieldEnum>
  }


  /**
   * PortalUser findMany
   */
  export type PortalUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the PortalUser
     * 
    **/
    select?: PortalUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalUserInclude | null
    /**
     * Filter, which PortalUsers to fetch.
     * 
    **/
    where?: PortalUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortalUsers.
     * 
    **/
    cursor?: PortalUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PortalUserScalarFieldEnum>
  }


  /**
   * PortalUser create
   */
  export type PortalUserCreateArgs = {
    /**
     * Select specific fields to fetch from the PortalUser
     * 
    **/
    select?: PortalUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalUserInclude | null
    /**
     * The data needed to create a PortalUser.
     * 
    **/
    data: XOR<PortalUserCreateInput, PortalUserUncheckedCreateInput>
  }


  /**
   * PortalUser createMany
   */
  export type PortalUserCreateManyArgs = {
    /**
     * The data used to create many PortalUsers.
     * 
    **/
    data: Enumerable<PortalUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PortalUser update
   */
  export type PortalUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the PortalUser
     * 
    **/
    select?: PortalUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalUserInclude | null
    /**
     * The data needed to update a PortalUser.
     * 
    **/
    data: XOR<PortalUserUpdateInput, PortalUserUncheckedUpdateInput>
    /**
     * Choose, which PortalUser to update.
     * 
    **/
    where: PortalUserWhereUniqueInput
  }


  /**
   * PortalUser updateMany
   */
  export type PortalUserUpdateManyArgs = {
    /**
     * The data used to update PortalUsers.
     * 
    **/
    data: XOR<PortalUserUpdateManyMutationInput, PortalUserUncheckedUpdateManyInput>
    /**
     * Filter which PortalUsers to update
     * 
    **/
    where?: PortalUserWhereInput
  }


  /**
   * PortalUser upsert
   */
  export type PortalUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the PortalUser
     * 
    **/
    select?: PortalUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalUserInclude | null
    /**
     * The filter to search for the PortalUser to update in case it exists.
     * 
    **/
    where: PortalUserWhereUniqueInput
    /**
     * In case the PortalUser found by the `where` argument doesn't exist, create a new PortalUser with this data.
     * 
    **/
    create: XOR<PortalUserCreateInput, PortalUserUncheckedCreateInput>
    /**
     * In case the PortalUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PortalUserUpdateInput, PortalUserUncheckedUpdateInput>
  }


  /**
   * PortalUser delete
   */
  export type PortalUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the PortalUser
     * 
    **/
    select?: PortalUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalUserInclude | null
    /**
     * Filter which PortalUser to delete.
     * 
    **/
    where: PortalUserWhereUniqueInput
  }


  /**
   * PortalUser deleteMany
   */
  export type PortalUserDeleteManyArgs = {
    /**
     * Filter which PortalUsers to delete
     * 
    **/
    where?: PortalUserWhereInput
  }


  /**
   * PortalUser without action
   */
  export type PortalUserArgs = {
    /**
     * Select specific fields to fetch from the PortalUser
     * 
    **/
    select?: PortalUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalUserInclude | null
  }



  /**
   * Model PortalInvitation
   */


  export type AggregatePortalInvitation = {
    _count: PortalInvitationCountAggregateOutputType | null
    _avg: PortalInvitationAvgAggregateOutputType | null
    _sum: PortalInvitationSumAggregateOutputType | null
    _min: PortalInvitationMinAggregateOutputType | null
    _max: PortalInvitationMaxAggregateOutputType | null
  }

  export type PortalInvitationAvgAggregateOutputType = {
    contact_id: number | null
  }

  export type PortalInvitationSumAggregateOutputType = {
    contact_id: number | null
  }

  export type PortalInvitationMinAggregateOutputType = {
    token: string | null
    expiration_date: Date | null
    contact_id: number | null
  }

  export type PortalInvitationMaxAggregateOutputType = {
    token: string | null
    expiration_date: Date | null
    contact_id: number | null
  }

  export type PortalInvitationCountAggregateOutputType = {
    token: number
    expiration_date: number
    contact_id: number
    _all: number
  }


  export type PortalInvitationAvgAggregateInputType = {
    contact_id?: true
  }

  export type PortalInvitationSumAggregateInputType = {
    contact_id?: true
  }

  export type PortalInvitationMinAggregateInputType = {
    token?: true
    expiration_date?: true
    contact_id?: true
  }

  export type PortalInvitationMaxAggregateInputType = {
    token?: true
    expiration_date?: true
    contact_id?: true
  }

  export type PortalInvitationCountAggregateInputType = {
    token?: true
    expiration_date?: true
    contact_id?: true
    _all?: true
  }

  export type PortalInvitationAggregateArgs = {
    /**
     * Filter which PortalInvitation to aggregate.
     * 
    **/
    where?: PortalInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalInvitations to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalInvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PortalInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalInvitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalInvitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortalInvitations
    **/
    _count?: true | PortalInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortalInvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortalInvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalInvitationMaxAggregateInputType
  }

  export type GetPortalInvitationAggregateType<T extends PortalInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregatePortalInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortalInvitation[P]>
      : GetScalarType<T[P], AggregatePortalInvitation[P]>
  }




  export type PortalInvitationGroupByArgs = {
    where?: PortalInvitationWhereInput
    orderBy?: Enumerable<PortalInvitationOrderByWithAggregationInput>
    by: Array<PortalInvitationScalarFieldEnum>
    having?: PortalInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalInvitationCountAggregateInputType | true
    _avg?: PortalInvitationAvgAggregateInputType
    _sum?: PortalInvitationSumAggregateInputType
    _min?: PortalInvitationMinAggregateInputType
    _max?: PortalInvitationMaxAggregateInputType
  }


  export type PortalInvitationGroupByOutputType = {
    token: string
    expiration_date: Date
    contact_id: number
    _count: PortalInvitationCountAggregateOutputType | null
    _avg: PortalInvitationAvgAggregateOutputType | null
    _sum: PortalInvitationSumAggregateOutputType | null
    _min: PortalInvitationMinAggregateOutputType | null
    _max: PortalInvitationMaxAggregateOutputType | null
  }

  type GetPortalInvitationGroupByPayload<T extends PortalInvitationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PortalInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], PortalInvitationGroupByOutputType[P]>
        }
      >
    >


  export type PortalInvitationSelect = {
    token?: boolean
    expiration_date?: boolean
    contact_id?: boolean
    conatct?: boolean | ContactArgs
  }

  export type PortalInvitationInclude = {
    conatct?: boolean | ContactArgs
  }

  export type PortalInvitationGetPayload<
    S extends boolean | null | undefined | PortalInvitationArgs,
    U = keyof S
      > = S extends true
        ? PortalInvitation
    : S extends undefined
    ? never
    : S extends PortalInvitationArgs | PortalInvitationFindManyArgs
    ?'include' extends U
    ? PortalInvitation  & {
    [P in TrueKeys<S['include']>]:
        P extends 'conatct' ? ContactGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'conatct' ? ContactGetPayload<S['select'][P]> :  P extends keyof PortalInvitation ? PortalInvitation[P] : never
  } 
    : PortalInvitation
  : PortalInvitation


  type PortalInvitationCountArgs = Merge<
    Omit<PortalInvitationFindManyArgs, 'select' | 'include'> & {
      select?: PortalInvitationCountAggregateInputType | true
    }
  >

  export interface PortalInvitationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PortalInvitation that matches the filter.
     * @param {PortalInvitationFindUniqueArgs} args - Arguments to find a PortalInvitation
     * @example
     * // Get one PortalInvitation
     * const portalInvitation = await prisma.portalInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PortalInvitationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PortalInvitationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PortalInvitation'> extends True ? CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation>, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T>>> : CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation | null >, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T> | null >>

    /**
     * Find the first PortalInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalInvitationFindFirstArgs} args - Arguments to find a PortalInvitation
     * @example
     * // Get one PortalInvitation
     * const portalInvitation = await prisma.portalInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PortalInvitationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PortalInvitationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PortalInvitation'> extends True ? CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation>, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T>>> : CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation | null >, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T> | null >>

    /**
     * Find zero or more PortalInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalInvitationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortalInvitations
     * const portalInvitations = await prisma.portalInvitation.findMany()
     * 
     * // Get first 10 PortalInvitations
     * const portalInvitations = await prisma.portalInvitation.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const portalInvitationWithTokenOnly = await prisma.portalInvitation.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends PortalInvitationFindManyArgs>(
      args?: SelectSubset<T, PortalInvitationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PortalInvitation>>, PrismaPromise<Array<PortalInvitationGetPayload<T>>>>

    /**
     * Create a PortalInvitation.
     * @param {PortalInvitationCreateArgs} args - Arguments to create a PortalInvitation.
     * @example
     * // Create one PortalInvitation
     * const PortalInvitation = await prisma.portalInvitation.create({
     *   data: {
     *     // ... data to create a PortalInvitation
     *   }
     * })
     * 
    **/
    create<T extends PortalInvitationCreateArgs>(
      args: SelectSubset<T, PortalInvitationCreateArgs>
    ): CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation>, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T>>>

    /**
     * Create many PortalInvitations.
     *     @param {PortalInvitationCreateManyArgs} args - Arguments to create many PortalInvitations.
     *     @example
     *     // Create many PortalInvitations
     *     const portalInvitation = await prisma.portalInvitation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PortalInvitationCreateManyArgs>(
      args?: SelectSubset<T, PortalInvitationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PortalInvitation.
     * @param {PortalInvitationDeleteArgs} args - Arguments to delete one PortalInvitation.
     * @example
     * // Delete one PortalInvitation
     * const PortalInvitation = await prisma.portalInvitation.delete({
     *   where: {
     *     // ... filter to delete one PortalInvitation
     *   }
     * })
     * 
    **/
    delete<T extends PortalInvitationDeleteArgs>(
      args: SelectSubset<T, PortalInvitationDeleteArgs>
    ): CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation>, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T>>>

    /**
     * Update one PortalInvitation.
     * @param {PortalInvitationUpdateArgs} args - Arguments to update one PortalInvitation.
     * @example
     * // Update one PortalInvitation
     * const portalInvitation = await prisma.portalInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PortalInvitationUpdateArgs>(
      args: SelectSubset<T, PortalInvitationUpdateArgs>
    ): CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation>, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T>>>

    /**
     * Delete zero or more PortalInvitations.
     * @param {PortalInvitationDeleteManyArgs} args - Arguments to filter PortalInvitations to delete.
     * @example
     * // Delete a few PortalInvitations
     * const { count } = await prisma.portalInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PortalInvitationDeleteManyArgs>(
      args?: SelectSubset<T, PortalInvitationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortalInvitations
     * const portalInvitation = await prisma.portalInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PortalInvitationUpdateManyArgs>(
      args: SelectSubset<T, PortalInvitationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PortalInvitation.
     * @param {PortalInvitationUpsertArgs} args - Arguments to update or create a PortalInvitation.
     * @example
     * // Update or create a PortalInvitation
     * const portalInvitation = await prisma.portalInvitation.upsert({
     *   create: {
     *     // ... data to create a PortalInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortalInvitation we want to update
     *   }
     * })
    **/
    upsert<T extends PortalInvitationUpsertArgs>(
      args: SelectSubset<T, PortalInvitationUpsertArgs>
    ): CheckSelect<T, Prisma__PortalInvitationClient<PortalInvitation>, Prisma__PortalInvitationClient<PortalInvitationGetPayload<T>>>

    /**
     * Count the number of PortalInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalInvitationCountArgs} args - Arguments to filter PortalInvitations to count.
     * @example
     * // Count the number of PortalInvitations
     * const count = await prisma.portalInvitation.count({
     *   where: {
     *     // ... the filter for the PortalInvitations we want to count
     *   }
     * })
    **/
    count<T extends PortalInvitationCountArgs>(
      args?: Subset<T, PortalInvitationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortalInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalInvitationAggregateArgs>(args: Subset<T, PortalInvitationAggregateArgs>): PrismaPromise<GetPortalInvitationAggregateType<T>>

    /**
     * Group by PortalInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalInvitationGroupByArgs['orderBy'] }
        : { orderBy?: PortalInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalInvitationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortalInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PortalInvitationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    conatct<T extends ContactArgs = {}>(args?: Subset<T, ContactArgs>): CheckSelect<T, Prisma__ContactClient<Contact | null >, Prisma__ContactClient<ContactGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PortalInvitation findUnique
   */
  export type PortalInvitationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PortalInvitation
     * 
    **/
    select?: PortalInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInvitationInclude | null
    /**
     * Throw an Error if a PortalInvitation can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PortalInvitation to fetch.
     * 
    **/
    where: PortalInvitationWhereUniqueInput
  }


  /**
   * PortalInvitation findFirst
   */
  export type PortalInvitationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PortalInvitation
     * 
    **/
    select?: PortalInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInvitationInclude | null
    /**
     * Throw an Error if a PortalInvitation can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PortalInvitation to fetch.
     * 
    **/
    where?: PortalInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalInvitations to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalInvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalInvitations.
     * 
    **/
    cursor?: PortalInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalInvitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalInvitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalInvitations.
     * 
    **/
    distinct?: Enumerable<PortalInvitationScalarFieldEnum>
  }


  /**
   * PortalInvitation findMany
   */
  export type PortalInvitationFindManyArgs = {
    /**
     * Select specific fields to fetch from the PortalInvitation
     * 
    **/
    select?: PortalInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInvitationInclude | null
    /**
     * Filter, which PortalInvitations to fetch.
     * 
    **/
    where?: PortalInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalInvitations to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalInvitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortalInvitations.
     * 
    **/
    cursor?: PortalInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalInvitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalInvitations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PortalInvitationScalarFieldEnum>
  }


  /**
   * PortalInvitation create
   */
  export type PortalInvitationCreateArgs = {
    /**
     * Select specific fields to fetch from the PortalInvitation
     * 
    **/
    select?: PortalInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInvitationInclude | null
    /**
     * The data needed to create a PortalInvitation.
     * 
    **/
    data: XOR<PortalInvitationCreateInput, PortalInvitationUncheckedCreateInput>
  }


  /**
   * PortalInvitation createMany
   */
  export type PortalInvitationCreateManyArgs = {
    /**
     * The data used to create many PortalInvitations.
     * 
    **/
    data: Enumerable<PortalInvitationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PortalInvitation update
   */
  export type PortalInvitationUpdateArgs = {
    /**
     * Select specific fields to fetch from the PortalInvitation
     * 
    **/
    select?: PortalInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInvitationInclude | null
    /**
     * The data needed to update a PortalInvitation.
     * 
    **/
    data: XOR<PortalInvitationUpdateInput, PortalInvitationUncheckedUpdateInput>
    /**
     * Choose, which PortalInvitation to update.
     * 
    **/
    where: PortalInvitationWhereUniqueInput
  }


  /**
   * PortalInvitation updateMany
   */
  export type PortalInvitationUpdateManyArgs = {
    /**
     * The data used to update PortalInvitations.
     * 
    **/
    data: XOR<PortalInvitationUpdateManyMutationInput, PortalInvitationUncheckedUpdateManyInput>
    /**
     * Filter which PortalInvitations to update
     * 
    **/
    where?: PortalInvitationWhereInput
  }


  /**
   * PortalInvitation upsert
   */
  export type PortalInvitationUpsertArgs = {
    /**
     * Select specific fields to fetch from the PortalInvitation
     * 
    **/
    select?: PortalInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInvitationInclude | null
    /**
     * The filter to search for the PortalInvitation to update in case it exists.
     * 
    **/
    where: PortalInvitationWhereUniqueInput
    /**
     * In case the PortalInvitation found by the `where` argument doesn't exist, create a new PortalInvitation with this data.
     * 
    **/
    create: XOR<PortalInvitationCreateInput, PortalInvitationUncheckedCreateInput>
    /**
     * In case the PortalInvitation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PortalInvitationUpdateInput, PortalInvitationUncheckedUpdateInput>
  }


  /**
   * PortalInvitation delete
   */
  export type PortalInvitationDeleteArgs = {
    /**
     * Select specific fields to fetch from the PortalInvitation
     * 
    **/
    select?: PortalInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInvitationInclude | null
    /**
     * Filter which PortalInvitation to delete.
     * 
    **/
    where: PortalInvitationWhereUniqueInput
  }


  /**
   * PortalInvitation deleteMany
   */
  export type PortalInvitationDeleteManyArgs = {
    /**
     * Filter which PortalInvitations to delete
     * 
    **/
    where?: PortalInvitationWhereInput
  }


  /**
   * PortalInvitation without action
   */
  export type PortalInvitationArgs = {
    /**
     * Select specific fields to fetch from the PortalInvitation
     * 
    **/
    select?: PortalInvitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInvitationInclude | null
  }



  /**
   * Model Portal
   */


  export type AggregatePortal = {
    _count: PortalCountAggregateOutputType | null
    _avg: PortalAvgAggregateOutputType | null
    _sum: PortalSumAggregateOutputType | null
    _min: PortalMinAggregateOutputType | null
    _max: PortalMaxAggregateOutputType | null
  }

  export type PortalAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type PortalSumAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type PortalMinAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type PortalMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type PortalCountAggregateOutputType = {
    id: number
    account_id: number
    _all: number
  }


  export type PortalAvgAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type PortalSumAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type PortalMinAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type PortalMaxAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type PortalCountAggregateInputType = {
    id?: true
    account_id?: true
    _all?: true
  }

  export type PortalAggregateArgs = {
    /**
     * Filter which Portal to aggregate.
     * 
    **/
    where?: PortalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portals to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PortalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portals
    **/
    _count?: true | PortalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalMaxAggregateInputType
  }

  export type GetPortalAggregateType<T extends PortalAggregateArgs> = {
        [P in keyof T & keyof AggregatePortal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortal[P]>
      : GetScalarType<T[P], AggregatePortal[P]>
  }




  export type PortalGroupByArgs = {
    where?: PortalWhereInput
    orderBy?: Enumerable<PortalOrderByWithAggregationInput>
    by: Array<PortalScalarFieldEnum>
    having?: PortalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalCountAggregateInputType | true
    _avg?: PortalAvgAggregateInputType
    _sum?: PortalSumAggregateInputType
    _min?: PortalMinAggregateInputType
    _max?: PortalMaxAggregateInputType
  }


  export type PortalGroupByOutputType = {
    id: number
    account_id: number
    _count: PortalCountAggregateOutputType | null
    _avg: PortalAvgAggregateOutputType | null
    _sum: PortalSumAggregateOutputType | null
    _min: PortalMinAggregateOutputType | null
    _max: PortalMaxAggregateOutputType | null
  }

  type GetPortalGroupByPayload<T extends PortalGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PortalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalGroupByOutputType[P]>
            : GetScalarType<T[P], PortalGroupByOutputType[P]>
        }
      >
    >


  export type PortalSelect = {
    id?: boolean
    account_id?: boolean
    users?: boolean | PortalUserFindManyArgs
    account?: boolean | AccountArgs
    _count?: boolean | PortalCountOutputTypeArgs
  }

  export type PortalInclude = {
    users?: boolean | PortalUserFindManyArgs
    account?: boolean | AccountArgs
    _count?: boolean | PortalCountOutputTypeArgs
  }

  export type PortalGetPayload<
    S extends boolean | null | undefined | PortalArgs,
    U = keyof S
      > = S extends true
        ? Portal
    : S extends undefined
    ? never
    : S extends PortalArgs | PortalFindManyArgs
    ?'include' extends U
    ? Portal  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? Array < PortalUserGetPayload<S['include'][P]>>  :
        P extends 'account' ? AccountGetPayload<S['include'][P]> :
        P extends '_count' ? PortalCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? Array < PortalUserGetPayload<S['select'][P]>>  :
        P extends 'account' ? AccountGetPayload<S['select'][P]> :
        P extends '_count' ? PortalCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Portal ? Portal[P] : never
  } 
    : Portal
  : Portal


  type PortalCountArgs = Merge<
    Omit<PortalFindManyArgs, 'select' | 'include'> & {
      select?: PortalCountAggregateInputType | true
    }
  >

  export interface PortalDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Portal that matches the filter.
     * @param {PortalFindUniqueArgs} args - Arguments to find a Portal
     * @example
     * // Get one Portal
     * const portal = await prisma.portal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PortalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PortalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Portal'> extends True ? CheckSelect<T, Prisma__PortalClient<Portal>, Prisma__PortalClient<PortalGetPayload<T>>> : CheckSelect<T, Prisma__PortalClient<Portal | null >, Prisma__PortalClient<PortalGetPayload<T> | null >>

    /**
     * Find the first Portal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFindFirstArgs} args - Arguments to find a Portal
     * @example
     * // Get one Portal
     * const portal = await prisma.portal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PortalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PortalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Portal'> extends True ? CheckSelect<T, Prisma__PortalClient<Portal>, Prisma__PortalClient<PortalGetPayload<T>>> : CheckSelect<T, Prisma__PortalClient<Portal | null >, Prisma__PortalClient<PortalGetPayload<T> | null >>

    /**
     * Find zero or more Portals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portals
     * const portals = await prisma.portal.findMany()
     * 
     * // Get first 10 Portals
     * const portals = await prisma.portal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portalWithIdOnly = await prisma.portal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PortalFindManyArgs>(
      args?: SelectSubset<T, PortalFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Portal>>, PrismaPromise<Array<PortalGetPayload<T>>>>

    /**
     * Create a Portal.
     * @param {PortalCreateArgs} args - Arguments to create a Portal.
     * @example
     * // Create one Portal
     * const Portal = await prisma.portal.create({
     *   data: {
     *     // ... data to create a Portal
     *   }
     * })
     * 
    **/
    create<T extends PortalCreateArgs>(
      args: SelectSubset<T, PortalCreateArgs>
    ): CheckSelect<T, Prisma__PortalClient<Portal>, Prisma__PortalClient<PortalGetPayload<T>>>

    /**
     * Create many Portals.
     *     @param {PortalCreateManyArgs} args - Arguments to create many Portals.
     *     @example
     *     // Create many Portals
     *     const portal = await prisma.portal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PortalCreateManyArgs>(
      args?: SelectSubset<T, PortalCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Portal.
     * @param {PortalDeleteArgs} args - Arguments to delete one Portal.
     * @example
     * // Delete one Portal
     * const Portal = await prisma.portal.delete({
     *   where: {
     *     // ... filter to delete one Portal
     *   }
     * })
     * 
    **/
    delete<T extends PortalDeleteArgs>(
      args: SelectSubset<T, PortalDeleteArgs>
    ): CheckSelect<T, Prisma__PortalClient<Portal>, Prisma__PortalClient<PortalGetPayload<T>>>

    /**
     * Update one Portal.
     * @param {PortalUpdateArgs} args - Arguments to update one Portal.
     * @example
     * // Update one Portal
     * const portal = await prisma.portal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PortalUpdateArgs>(
      args: SelectSubset<T, PortalUpdateArgs>
    ): CheckSelect<T, Prisma__PortalClient<Portal>, Prisma__PortalClient<PortalGetPayload<T>>>

    /**
     * Delete zero or more Portals.
     * @param {PortalDeleteManyArgs} args - Arguments to filter Portals to delete.
     * @example
     * // Delete a few Portals
     * const { count } = await prisma.portal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PortalDeleteManyArgs>(
      args?: SelectSubset<T, PortalDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portals
     * const portal = await prisma.portal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PortalUpdateManyArgs>(
      args: SelectSubset<T, PortalUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Portal.
     * @param {PortalUpsertArgs} args - Arguments to update or create a Portal.
     * @example
     * // Update or create a Portal
     * const portal = await prisma.portal.upsert({
     *   create: {
     *     // ... data to create a Portal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portal we want to update
     *   }
     * })
    **/
    upsert<T extends PortalUpsertArgs>(
      args: SelectSubset<T, PortalUpsertArgs>
    ): CheckSelect<T, Prisma__PortalClient<Portal>, Prisma__PortalClient<PortalGetPayload<T>>>

    /**
     * Count the number of Portals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalCountArgs} args - Arguments to filter Portals to count.
     * @example
     * // Count the number of Portals
     * const count = await prisma.portal.count({
     *   where: {
     *     // ... the filter for the Portals we want to count
     *   }
     * })
    **/
    count<T extends PortalCountArgs>(
      args?: Subset<T, PortalCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalAggregateArgs>(args: Subset<T, PortalAggregateArgs>): PrismaPromise<GetPortalAggregateType<T>>

    /**
     * Group by Portal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalGroupByArgs['orderBy'] }
        : { orderBy?: PortalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PortalClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends PortalUserFindManyArgs = {}>(args?: Subset<T, PortalUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PortalUser>>, PrismaPromise<Array<PortalUserGetPayload<T>>>>;

    account<T extends AccountArgs = {}>(args?: Subset<T, AccountArgs>): CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Portal findUnique
   */
  export type PortalFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Portal
     * 
    **/
    select?: PortalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInclude | null
    /**
     * Throw an Error if a Portal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Portal to fetch.
     * 
    **/
    where: PortalWhereUniqueInput
  }


  /**
   * Portal findFirst
   */
  export type PortalFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Portal
     * 
    **/
    select?: PortalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInclude | null
    /**
     * Throw an Error if a Portal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Portal to fetch.
     * 
    **/
    where?: PortalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portals to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portals.
     * 
    **/
    cursor?: PortalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portals.
     * 
    **/
    distinct?: Enumerable<PortalScalarFieldEnum>
  }


  /**
   * Portal findMany
   */
  export type PortalFindManyArgs = {
    /**
     * Select specific fields to fetch from the Portal
     * 
    **/
    select?: PortalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInclude | null
    /**
     * Filter, which Portals to fetch.
     * 
    **/
    where?: PortalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portals to fetch.
     * 
    **/
    orderBy?: Enumerable<PortalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portals.
     * 
    **/
    cursor?: PortalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PortalScalarFieldEnum>
  }


  /**
   * Portal create
   */
  export type PortalCreateArgs = {
    /**
     * Select specific fields to fetch from the Portal
     * 
    **/
    select?: PortalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInclude | null
    /**
     * The data needed to create a Portal.
     * 
    **/
    data: XOR<PortalCreateInput, PortalUncheckedCreateInput>
  }


  /**
   * Portal createMany
   */
  export type PortalCreateManyArgs = {
    /**
     * The data used to create many Portals.
     * 
    **/
    data: Enumerable<PortalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Portal update
   */
  export type PortalUpdateArgs = {
    /**
     * Select specific fields to fetch from the Portal
     * 
    **/
    select?: PortalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInclude | null
    /**
     * The data needed to update a Portal.
     * 
    **/
    data: XOR<PortalUpdateInput, PortalUncheckedUpdateInput>
    /**
     * Choose, which Portal to update.
     * 
    **/
    where: PortalWhereUniqueInput
  }


  /**
   * Portal updateMany
   */
  export type PortalUpdateManyArgs = {
    /**
     * The data used to update Portals.
     * 
    **/
    data: XOR<PortalUpdateManyMutationInput, PortalUncheckedUpdateManyInput>
    /**
     * Filter which Portals to update
     * 
    **/
    where?: PortalWhereInput
  }


  /**
   * Portal upsert
   */
  export type PortalUpsertArgs = {
    /**
     * Select specific fields to fetch from the Portal
     * 
    **/
    select?: PortalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInclude | null
    /**
     * The filter to search for the Portal to update in case it exists.
     * 
    **/
    where: PortalWhereUniqueInput
    /**
     * In case the Portal found by the `where` argument doesn't exist, create a new Portal with this data.
     * 
    **/
    create: XOR<PortalCreateInput, PortalUncheckedCreateInput>
    /**
     * In case the Portal was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PortalUpdateInput, PortalUncheckedUpdateInput>
  }


  /**
   * Portal delete
   */
  export type PortalDeleteArgs = {
    /**
     * Select specific fields to fetch from the Portal
     * 
    **/
    select?: PortalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInclude | null
    /**
     * Filter which Portal to delete.
     * 
    **/
    where: PortalWhereUniqueInput
  }


  /**
   * Portal deleteMany
   */
  export type PortalDeleteManyArgs = {
    /**
     * Filter which Portals to delete
     * 
    **/
    where?: PortalWhereInput
  }


  /**
   * Portal without action
   */
  export type PortalArgs = {
    /**
     * Select specific fields to fetch from the Portal
     * 
    **/
    select?: PortalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PortalInclude | null
  }



  /**
   * Model Form
   */


  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormAvgAggregateOutputType = {
    id: number | null
    website_id: number | null
  }

  export type FormSumAggregateOutputType = {
    id: number | null
    website_id: number | null
  }

  export type FormMinAggregateOutputType = {
    id: number | null
    name: string | null
    website_id: number | null
  }

  export type FormMaxAggregateOutputType = {
    id: number | null
    name: string | null
    website_id: number | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    name: number
    website_id: number
    _all: number
  }


  export type FormAvgAggregateInputType = {
    id?: true
    website_id?: true
  }

  export type FormSumAggregateInputType = {
    id?: true
    website_id?: true
  }

  export type FormMinAggregateInputType = {
    id?: true
    name?: true
    website_id?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    name?: true
    website_id?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    name?: true
    website_id?: true
    _all?: true
  }

  export type FormAggregateArgs = {
    /**
     * Filter which Form to aggregate.
     * 
    **/
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     * 
    **/
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs = {
    where?: FormWhereInput
    orderBy?: Enumerable<FormOrderByWithAggregationInput>
    by: Array<FormScalarFieldEnum>
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _avg?: FormAvgAggregateInputType
    _sum?: FormSumAggregateInputType
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }


  export type FormGroupByOutputType = {
    id: number
    name: string
    website_id: number
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect = {
    id?: boolean
    name?: boolean
    website_id?: boolean
    website?: boolean | WebsiteArgs
    contacts?: boolean | ContactFindManyArgs
    form_submissions?: boolean | FormSubmissionFindManyArgs
    _count?: boolean | FormCountOutputTypeArgs
  }

  export type FormInclude = {
    website?: boolean | WebsiteArgs
    contacts?: boolean | ContactFindManyArgs
    form_submissions?: boolean | FormSubmissionFindManyArgs
    _count?: boolean | FormCountOutputTypeArgs
  }

  export type FormGetPayload<
    S extends boolean | null | undefined | FormArgs,
    U = keyof S
      > = S extends true
        ? Form
    : S extends undefined
    ? never
    : S extends FormArgs | FormFindManyArgs
    ?'include' extends U
    ? Form  & {
    [P in TrueKeys<S['include']>]:
        P extends 'website' ? WebsiteGetPayload<S['include'][P]> :
        P extends 'contacts' ? Array < ContactGetPayload<S['include'][P]>>  :
        P extends 'form_submissions' ? Array < FormSubmissionGetPayload<S['include'][P]>>  :
        P extends '_count' ? FormCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'website' ? WebsiteGetPayload<S['select'][P]> :
        P extends 'contacts' ? Array < ContactGetPayload<S['select'][P]>>  :
        P extends 'form_submissions' ? Array < FormSubmissionGetPayload<S['select'][P]>>  :
        P extends '_count' ? FormCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Form ? Form[P] : never
  } 
    : Form
  : Form


  type FormCountArgs = Merge<
    Omit<FormFindManyArgs, 'select' | 'include'> & {
      select?: FormCountAggregateInputType | true
    }
  >

  export interface FormDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FormFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Form'> extends True ? CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>> : CheckSelect<T, Prisma__FormClient<Form | null >, Prisma__FormClient<FormGetPayload<T> | null >>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FormFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Form'> extends True ? CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>> : CheckSelect<T, Prisma__FormClient<Form | null >, Prisma__FormClient<FormGetPayload<T> | null >>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormFindManyArgs>(
      args?: SelectSubset<T, FormFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Form>>, PrismaPromise<Array<FormGetPayload<T>>>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
    **/
    create<T extends FormCreateArgs>(
      args: SelectSubset<T, FormCreateArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Create many Forms.
     *     @param {FormCreateManyArgs} args - Arguments to create many Forms.
     *     @example
     *     // Create many Forms
     *     const form = await prisma.form.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormCreateManyArgs>(
      args?: SelectSubset<T, FormCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
    **/
    delete<T extends FormDeleteArgs>(
      args: SelectSubset<T, FormDeleteArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormUpdateArgs>(
      args: SelectSubset<T, FormUpdateArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormDeleteManyArgs>(
      args?: SelectSubset<T, FormDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormUpdateManyArgs>(
      args: SelectSubset<T, FormUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
    **/
    upsert<T extends FormUpsertArgs>(
      args: SelectSubset<T, FormUpsertArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FormClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    website<T extends WebsiteArgs = {}>(args?: Subset<T, WebsiteArgs>): CheckSelect<T, Prisma__WebsiteClient<Website | null >, Prisma__WebsiteClient<WebsiteGetPayload<T> | null >>;

    contacts<T extends ContactFindManyArgs = {}>(args?: Subset<T, ContactFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Contact>>, PrismaPromise<Array<ContactGetPayload<T>>>>;

    form_submissions<T extends FormSubmissionFindManyArgs = {}>(args?: Subset<T, FormSubmissionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FormSubmission>>, PrismaPromise<Array<FormSubmissionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * Throw an Error if a Form can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Form to fetch.
     * 
    **/
    where: FormWhereUniqueInput
  }


  /**
   * Form findFirst
   */
  export type FormFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * Throw an Error if a Form can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Form to fetch.
     * 
    **/
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     * 
    **/
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     * 
    **/
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     * 
    **/
    distinct?: Enumerable<FormScalarFieldEnum>
  }


  /**
   * Form findMany
   */
  export type FormFindManyArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * Filter, which Forms to fetch.
     * 
    **/
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     * 
    **/
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     * 
    **/
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FormScalarFieldEnum>
  }


  /**
   * Form create
   */
  export type FormCreateArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * The data needed to create a Form.
     * 
    **/
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }


  /**
   * Form createMany
   */
  export type FormCreateManyArgs = {
    /**
     * The data used to create many Forms.
     * 
    **/
    data: Enumerable<FormCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Form update
   */
  export type FormUpdateArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * The data needed to update a Form.
     * 
    **/
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     * 
    **/
    where: FormWhereUniqueInput
  }


  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs = {
    /**
     * The data used to update Forms.
     * 
    **/
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     * 
    **/
    where?: FormWhereInput
  }


  /**
   * Form upsert
   */
  export type FormUpsertArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * The filter to search for the Form to update in case it exists.
     * 
    **/
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     * 
    **/
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }


  /**
   * Form delete
   */
  export type FormDeleteArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * Filter which Form to delete.
     * 
    **/
    where: FormWhereUniqueInput
  }


  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs = {
    /**
     * Filter which Forms to delete
     * 
    **/
    where?: FormWhereInput
  }


  /**
   * Form without action
   */
  export type FormArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
  }



  /**
   * Model FormSubmission
   */


  export type AggregateFormSubmission = {
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  export type FormSubmissionAvgAggregateOutputType = {
    id: number | null
    from_id: number | null
  }

  export type FormSubmissionSumAggregateOutputType = {
    id: number | null
    from_id: number | null
  }

  export type FormSubmissionMinAggregateOutputType = {
    id: number | null
    from_id: number | null
    submittedDate: Date | null
  }

  export type FormSubmissionMaxAggregateOutputType = {
    id: number | null
    from_id: number | null
    submittedDate: Date | null
  }

  export type FormSubmissionCountAggregateOutputType = {
    id: number
    data: number
    from_id: number
    submittedDate: number
    _all: number
  }


  export type FormSubmissionAvgAggregateInputType = {
    id?: true
    from_id?: true
  }

  export type FormSubmissionSumAggregateInputType = {
    id?: true
    from_id?: true
  }

  export type FormSubmissionMinAggregateInputType = {
    id?: true
    from_id?: true
    submittedDate?: true
  }

  export type FormSubmissionMaxAggregateInputType = {
    id?: true
    from_id?: true
    submittedDate?: true
  }

  export type FormSubmissionCountAggregateInputType = {
    id?: true
    data?: true
    from_id?: true
    submittedDate?: true
    _all?: true
  }

  export type FormSubmissionAggregateArgs = {
    /**
     * Filter which FormSubmission to aggregate.
     * 
    **/
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     * 
    **/
    orderBy?: Enumerable<FormSubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormSubmissions
    **/
    _count?: true | FormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type GetFormSubmissionAggregateType<T extends FormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormSubmission[P]>
      : GetScalarType<T[P], AggregateFormSubmission[P]>
  }




  export type FormSubmissionGroupByArgs = {
    where?: FormSubmissionWhereInput
    orderBy?: Enumerable<FormSubmissionOrderByWithAggregationInput>
    by: Array<FormSubmissionScalarFieldEnum>
    having?: FormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormSubmissionCountAggregateInputType | true
    _avg?: FormSubmissionAvgAggregateInputType
    _sum?: FormSubmissionSumAggregateInputType
    _min?: FormSubmissionMinAggregateInputType
    _max?: FormSubmissionMaxAggregateInputType
  }


  export type FormSubmissionGroupByOutputType = {
    id: number
    data: JsonValue
    from_id: number
    submittedDate: Date
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  type GetFormSubmissionGroupByPayload<T extends FormSubmissionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type FormSubmissionSelect = {
    id?: boolean
    data?: boolean
    from_id?: boolean
    submittedDate?: boolean
    form?: boolean | FormArgs
  }

  export type FormSubmissionInclude = {
    form?: boolean | FormArgs
  }

  export type FormSubmissionGetPayload<
    S extends boolean | null | undefined | FormSubmissionArgs,
    U = keyof S
      > = S extends true
        ? FormSubmission
    : S extends undefined
    ? never
    : S extends FormSubmissionArgs | FormSubmissionFindManyArgs
    ?'include' extends U
    ? FormSubmission  & {
    [P in TrueKeys<S['include']>]:
        P extends 'form' ? FormGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'form' ? FormGetPayload<S['select'][P]> :  P extends keyof FormSubmission ? FormSubmission[P] : never
  } 
    : FormSubmission
  : FormSubmission


  type FormSubmissionCountArgs = Merge<
    Omit<FormSubmissionFindManyArgs, 'select' | 'include'> & {
      select?: FormSubmissionCountAggregateInputType | true
    }
  >

  export interface FormSubmissionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FormSubmission that matches the filter.
     * @param {FormSubmissionFindUniqueArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormSubmissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FormSubmissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FormSubmission'> extends True ? CheckSelect<T, Prisma__FormSubmissionClient<FormSubmission>, Prisma__FormSubmissionClient<FormSubmissionGetPayload<T>>> : CheckSelect<T, Prisma__FormSubmissionClient<FormSubmission | null >, Prisma__FormSubmissionClient<FormSubmissionGetPayload<T> | null >>

    /**
     * Find the first FormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormSubmissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FormSubmissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FormSubmission'> extends True ? CheckSelect<T, Prisma__FormSubmissionClient<FormSubmission>, Prisma__FormSubmissionClient<FormSubmissionGetPayload<T>>> : CheckSelect<T, Prisma__FormSubmissionClient<FormSubmission | null >, Prisma__FormSubmissionClient<FormSubmissionGetPayload<T> | null >>

    /**
     * Find zero or more FormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany()
     * 
     * // Get first 10 FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormSubmissionFindManyArgs>(
      args?: SelectSubset<T, FormSubmissionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FormSubmission>>, PrismaPromise<Array<FormSubmissionGetPayload<T>>>>

    /**
     * Create a FormSubmission.
     * @param {FormSubmissionCreateArgs} args - Arguments to create a FormSubmission.
     * @example
     * // Create one FormSubmission
     * const FormSubmission = await prisma.formSubmission.create({
     *   data: {
     *     // ... data to create a FormSubmission
     *   }
     * })
     * 
    **/
    create<T extends FormSubmissionCreateArgs>(
      args: SelectSubset<T, FormSubmissionCreateArgs>
    ): CheckSelect<T, Prisma__FormSubmissionClient<FormSubmission>, Prisma__FormSubmissionClient<FormSubmissionGetPayload<T>>>

    /**
     * Create many FormSubmissions.
     *     @param {FormSubmissionCreateManyArgs} args - Arguments to create many FormSubmissions.
     *     @example
     *     // Create many FormSubmissions
     *     const formSubmission = await prisma.formSubmission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormSubmissionCreateManyArgs>(
      args?: SelectSubset<T, FormSubmissionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FormSubmission.
     * @param {FormSubmissionDeleteArgs} args - Arguments to delete one FormSubmission.
     * @example
     * // Delete one FormSubmission
     * const FormSubmission = await prisma.formSubmission.delete({
     *   where: {
     *     // ... filter to delete one FormSubmission
     *   }
     * })
     * 
    **/
    delete<T extends FormSubmissionDeleteArgs>(
      args: SelectSubset<T, FormSubmissionDeleteArgs>
    ): CheckSelect<T, Prisma__FormSubmissionClient<FormSubmission>, Prisma__FormSubmissionClient<FormSubmissionGetPayload<T>>>

    /**
     * Update one FormSubmission.
     * @param {FormSubmissionUpdateArgs} args - Arguments to update one FormSubmission.
     * @example
     * // Update one FormSubmission
     * const formSubmission = await prisma.formSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormSubmissionUpdateArgs>(
      args: SelectSubset<T, FormSubmissionUpdateArgs>
    ): CheckSelect<T, Prisma__FormSubmissionClient<FormSubmission>, Prisma__FormSubmissionClient<FormSubmissionGetPayload<T>>>

    /**
     * Delete zero or more FormSubmissions.
     * @param {FormSubmissionDeleteManyArgs} args - Arguments to filter FormSubmissions to delete.
     * @example
     * // Delete a few FormSubmissions
     * const { count } = await prisma.formSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormSubmissionDeleteManyArgs>(
      args?: SelectSubset<T, FormSubmissionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormSubmissionUpdateManyArgs>(
      args: SelectSubset<T, FormSubmissionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FormSubmission.
     * @param {FormSubmissionUpsertArgs} args - Arguments to update or create a FormSubmission.
     * @example
     * // Update or create a FormSubmission
     * const formSubmission = await prisma.formSubmission.upsert({
     *   create: {
     *     // ... data to create a FormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormSubmission we want to update
     *   }
     * })
    **/
    upsert<T extends FormSubmissionUpsertArgs>(
      args: SelectSubset<T, FormSubmissionUpsertArgs>
    ): CheckSelect<T, Prisma__FormSubmissionClient<FormSubmission>, Prisma__FormSubmissionClient<FormSubmissionGetPayload<T>>>

    /**
     * Count the number of FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionCountArgs} args - Arguments to filter FormSubmissions to count.
     * @example
     * // Count the number of FormSubmissions
     * const count = await prisma.formSubmission.count({
     *   where: {
     *     // ... the filter for the FormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends FormSubmissionCountArgs>(
      args?: Subset<T, FormSubmissionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormSubmissionAggregateArgs>(args: Subset<T, FormSubmissionAggregateArgs>): PrismaPromise<GetFormSubmissionAggregateType<T>>

    /**
     * Group by FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: FormSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSubmissionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FormSubmissionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    form<T extends FormArgs = {}>(args?: Subset<T, FormArgs>): CheckSelect<T, Prisma__FormClient<Form | null >, Prisma__FormClient<FormGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FormSubmission findUnique
   */
  export type FormSubmissionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the FormSubmission
     * 
    **/
    select?: FormSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormSubmissionInclude | null
    /**
     * Throw an Error if a FormSubmission can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FormSubmission to fetch.
     * 
    **/
    where: FormSubmissionWhereUniqueInput
  }


  /**
   * FormSubmission findFirst
   */
  export type FormSubmissionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the FormSubmission
     * 
    **/
    select?: FormSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormSubmissionInclude | null
    /**
     * Throw an Error if a FormSubmission can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FormSubmission to fetch.
     * 
    **/
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     * 
    **/
    orderBy?: Enumerable<FormSubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     * 
    **/
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     * 
    **/
    distinct?: Enumerable<FormSubmissionScalarFieldEnum>
  }


  /**
   * FormSubmission findMany
   */
  export type FormSubmissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the FormSubmission
     * 
    **/
    select?: FormSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormSubmissionInclude | null
    /**
     * Filter, which FormSubmissions to fetch.
     * 
    **/
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     * 
    **/
    orderBy?: Enumerable<FormSubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormSubmissions.
     * 
    **/
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FormSubmissionScalarFieldEnum>
  }


  /**
   * FormSubmission create
   */
  export type FormSubmissionCreateArgs = {
    /**
     * Select specific fields to fetch from the FormSubmission
     * 
    **/
    select?: FormSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormSubmissionInclude | null
    /**
     * The data needed to create a FormSubmission.
     * 
    **/
    data: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
  }


  /**
   * FormSubmission createMany
   */
  export type FormSubmissionCreateManyArgs = {
    /**
     * The data used to create many FormSubmissions.
     * 
    **/
    data: Enumerable<FormSubmissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FormSubmission update
   */
  export type FormSubmissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the FormSubmission
     * 
    **/
    select?: FormSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormSubmissionInclude | null
    /**
     * The data needed to update a FormSubmission.
     * 
    **/
    data: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which FormSubmission to update.
     * 
    **/
    where: FormSubmissionWhereUniqueInput
  }


  /**
   * FormSubmission updateMany
   */
  export type FormSubmissionUpdateManyArgs = {
    /**
     * The data used to update FormSubmissions.
     * 
    **/
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     * 
    **/
    where?: FormSubmissionWhereInput
  }


  /**
   * FormSubmission upsert
   */
  export type FormSubmissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the FormSubmission
     * 
    **/
    select?: FormSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormSubmissionInclude | null
    /**
     * The filter to search for the FormSubmission to update in case it exists.
     * 
    **/
    where: FormSubmissionWhereUniqueInput
    /**
     * In case the FormSubmission found by the `where` argument doesn't exist, create a new FormSubmission with this data.
     * 
    **/
    create: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
    /**
     * In case the FormSubmission was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
  }


  /**
   * FormSubmission delete
   */
  export type FormSubmissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the FormSubmission
     * 
    **/
    select?: FormSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormSubmissionInclude | null
    /**
     * Filter which FormSubmission to delete.
     * 
    **/
    where: FormSubmissionWhereUniqueInput
  }


  /**
   * FormSubmission deleteMany
   */
  export type FormSubmissionDeleteManyArgs = {
    /**
     * Filter which FormSubmissions to delete
     * 
    **/
    where?: FormSubmissionWhereInput
  }


  /**
   * FormSubmission without action
   */
  export type FormSubmissionArgs = {
    /**
     * Select specific fields to fetch from the FormSubmission
     * 
    **/
    select?: FormSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormSubmissionInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Session ? Session[P] : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    title: 'title',
    clickup_uid: 'clickup_uid',
    slack_uid: 'slack_uid',
    zoho_uid: 'zoho_uid',
    bio: 'bio',
    group_id: 'group_id',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    slack_channel: 'slack_channel',
    account_id: 'account_id',
    due_date: 'due_date',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    industry: 'industry',
    phone: 'phone',
    street: 'street',
    city: 'city',
    state: 'state',
    code: 'code',
    country: 'country'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    title: 'title',
    email: 'email',
    phone: 'phone',
    portal_uid: 'portal_uid',
    projectId: 'projectId'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    url: 'url'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const PortalUserScalarFieldEnum: {
    password: 'password',
    contact_id: 'contact_id',
    portal_id: 'portal_id'
  };

  export type PortalUserScalarFieldEnum = (typeof PortalUserScalarFieldEnum)[keyof typeof PortalUserScalarFieldEnum]


  export const PortalInvitationScalarFieldEnum: {
    token: 'token',
    expiration_date: 'expiration_date',
    contact_id: 'contact_id'
  };

  export type PortalInvitationScalarFieldEnum = (typeof PortalInvitationScalarFieldEnum)[keyof typeof PortalInvitationScalarFieldEnum]


  export const PortalScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id'
  };

  export type PortalScalarFieldEnum = (typeof PortalScalarFieldEnum)[keyof typeof PortalScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    name: 'name',
    website_id: 'website_id'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const FormSubmissionScalarFieldEnum: {
    id: 'id',
    data: 'data',
    from_id: 'from_id',
    submittedDate: 'submittedDate'
  };

  export type FormSubmissionScalarFieldEnum = (typeof FormSubmissionScalarFieldEnum)[keyof typeof FormSubmissionScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: 'JsonNull'
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    clickup_uid?: StringNullableFilter | string | null
    slack_uid?: StringNullableFilter | string | null
    zoho_uid?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    website?: WebsiteListRelationFilter
    projects?: ProjectListRelationFilter
    accounts?: AccountListRelationFilter
    group?: XOR<GroupRelationFilter, GroupWhereInput> | null
    group_id?: IntNullableFilter | number | null
    role?: EnumUserRoleFilter | UserRole
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    clickup_uid?: SortOrder
    slack_uid?: SortOrder
    zoho_uid?: SortOrder
    bio?: SortOrder
    website?: WebsiteOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    group?: GroupOrderByWithRelationInput
    group_id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    clickup_uid?: SortOrder
    slack_uid?: SortOrder
    zoho_uid?: SortOrder
    bio?: SortOrder
    group_id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringNullableWithAggregatesFilter | string | null
    title?: StringNullableWithAggregatesFilter | string | null
    clickup_uid?: StringNullableWithAggregatesFilter | string | null
    slack_uid?: StringNullableWithAggregatesFilter | string | null
    zoho_uid?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    group_id?: IntNullableWithAggregatesFilter | number | null
    role?: EnumUserRoleWithAggregatesFilter | UserRole
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GroupWhereInput = {
    AND?: Enumerable<GroupWhereInput>
    OR?: Enumerable<GroupWhereInput>
    NOT?: Enumerable<GroupWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    users?: UserListRelationFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    users?: UserOrderByRelationAggregateInput
    createdAt?: SortOrder
  }

  export type GroupWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    type?: StringFilter | string
    description?: StringNullableFilter | string | null
    slack_channel?: StringNullableFilter | string | null
    contacts?: ContactListRelationFilter
    users?: UserListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput> | null
    account_id?: IntNullableFilter | number | null
    due_date?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    slack_channel?: SortOrder
    contacts?: ContactOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
    account_id?: SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    slack_channel?: SortOrder
    account_id?: SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    slack_channel?: StringNullableWithAggregatesFilter | string | null
    account_id?: IntNullableWithAggregatesFilter | number | null
    due_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    industry?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    street?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    code?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
    users?: UserListRelationFilter
    contacts?: ContactListRelationFilter
    website?: WebsiteListRelationFilter
    portal?: XOR<PortalRelationFilter, PortalWhereInput> | null
    projects?: ProjectListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    code?: SortOrder
    country?: SortOrder
    users?: UserOrderByRelationAggregateInput
    contacts?: ContactOrderByRelationAggregateInput
    website?: WebsiteOrderByRelationAggregateInput
    portal?: PortalOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    code?: SortOrder
    country?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    industry?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    street?: StringNullableWithAggregatesFilter | string | null
    city?: StringNullableWithAggregatesFilter | string | null
    state?: StringNullableWithAggregatesFilter | string | null
    code?: StringNullableWithAggregatesFilter | string | null
    country?: StringNullableWithAggregatesFilter | string | null
  }

  export type ContactWhereInput = {
    AND?: Enumerable<ContactWhereInput>
    OR?: Enumerable<ContactWhereInput>
    NOT?: Enumerable<ContactWhereInput>
    id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    title?: StringFilter | string
    email?: StringFilter | string
    phone?: StringNullableFilter | string | null
    portal_uid?: IntNullableFilter | number | null
    forms?: FormListRelationFilter
    account?: AccountListRelationFilter
    portal_token?: XOR<PortalInvitationRelationFilter, PortalInvitationWhereInput> | null
    portal_user?: XOR<PortalUserRelationFilter, PortalUserWhereInput> | null
    Project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
    projectId?: IntNullableFilter | number | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    portal_uid?: SortOrder
    forms?: FormOrderByRelationAggregateInput
    account?: AccountOrderByRelationAggregateInput
    portal_token?: PortalInvitationOrderByWithRelationInput
    portal_user?: PortalUserOrderByWithRelationInput
    Project?: ProjectOrderByWithRelationInput
    projectId?: SortOrder
  }

  export type ContactWhereUniqueInput = {
    id?: number
    email?: string
    portal_uid?: number
  }

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    portal_uid?: SortOrder
    projectId?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContactScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContactScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContactScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phone?: StringNullableWithAggregatesFilter | string | null
    portal_uid?: IntNullableWithAggregatesFilter | number | null
    projectId?: IntNullableWithAggregatesFilter | number | null
  }

  export type WebsiteWhereInput = {
    AND?: Enumerable<WebsiteWhereInput>
    OR?: Enumerable<WebsiteWhereInput>
    NOT?: Enumerable<WebsiteWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    url?: StringFilter | string
    forms?: FormListRelationFilter
    users?: UserListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    url?: SortOrder
    forms?: FormOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
  }

  export type WebsiteWhereUniqueInput = {
    id?: number
    url?: string
  }

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    url?: SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _avg?: WebsiteAvgOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
    _sum?: WebsiteSumOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WebsiteScalarWhereWithAggregatesInput>
    OR?: Enumerable<WebsiteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WebsiteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    account_id?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
  }

  export type PortalUserWhereInput = {
    AND?: Enumerable<PortalUserWhereInput>
    OR?: Enumerable<PortalUserWhereInput>
    NOT?: Enumerable<PortalUserWhereInput>
    password?: StringFilter | string
    contact_id?: IntFilter | number
    portal_id?: IntFilter | number
    contact?: XOR<ContactRelationFilter, ContactWhereInput>
    portal?: XOR<PortalRelationFilter, PortalWhereInput>
  }

  export type PortalUserOrderByWithRelationInput = {
    password?: SortOrder
    contact_id?: SortOrder
    portal_id?: SortOrder
    contact?: ContactOrderByWithRelationInput
    portal?: PortalOrderByWithRelationInput
  }

  export type PortalUserWhereUniqueInput = {
    contact_id?: number
    portal_id?: number
  }

  export type PortalUserOrderByWithAggregationInput = {
    password?: SortOrder
    contact_id?: SortOrder
    portal_id?: SortOrder
    _count?: PortalUserCountOrderByAggregateInput
    _avg?: PortalUserAvgOrderByAggregateInput
    _max?: PortalUserMaxOrderByAggregateInput
    _min?: PortalUserMinOrderByAggregateInput
    _sum?: PortalUserSumOrderByAggregateInput
  }

  export type PortalUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PortalUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<PortalUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PortalUserScalarWhereWithAggregatesInput>
    password?: StringWithAggregatesFilter | string
    contact_id?: IntWithAggregatesFilter | number
    portal_id?: IntWithAggregatesFilter | number
  }

  export type PortalInvitationWhereInput = {
    AND?: Enumerable<PortalInvitationWhereInput>
    OR?: Enumerable<PortalInvitationWhereInput>
    NOT?: Enumerable<PortalInvitationWhereInput>
    token?: StringFilter | string
    expiration_date?: DateTimeFilter | Date | string
    contact_id?: IntFilter | number
    conatct?: XOR<ContactRelationFilter, ContactWhereInput>
  }

  export type PortalInvitationOrderByWithRelationInput = {
    token?: SortOrder
    expiration_date?: SortOrder
    contact_id?: SortOrder
    conatct?: ContactOrderByWithRelationInput
  }

  export type PortalInvitationWhereUniqueInput = {
    contact_id?: number
  }

  export type PortalInvitationOrderByWithAggregationInput = {
    token?: SortOrder
    expiration_date?: SortOrder
    contact_id?: SortOrder
    _count?: PortalInvitationCountOrderByAggregateInput
    _avg?: PortalInvitationAvgOrderByAggregateInput
    _max?: PortalInvitationMaxOrderByAggregateInput
    _min?: PortalInvitationMinOrderByAggregateInput
    _sum?: PortalInvitationSumOrderByAggregateInput
  }

  export type PortalInvitationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PortalInvitationScalarWhereWithAggregatesInput>
    OR?: Enumerable<PortalInvitationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PortalInvitationScalarWhereWithAggregatesInput>
    token?: StringWithAggregatesFilter | string
    expiration_date?: DateTimeWithAggregatesFilter | Date | string
    contact_id?: IntWithAggregatesFilter | number
  }

  export type PortalWhereInput = {
    AND?: Enumerable<PortalWhereInput>
    OR?: Enumerable<PortalWhereInput>
    NOT?: Enumerable<PortalWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    users?: PortalUserListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type PortalOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    users?: PortalUserOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
  }

  export type PortalWhereUniqueInput = {
    id?: number
    account_id?: number
  }

  export type PortalOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    _count?: PortalCountOrderByAggregateInput
    _avg?: PortalAvgOrderByAggregateInput
    _max?: PortalMaxOrderByAggregateInput
    _min?: PortalMinOrderByAggregateInput
    _sum?: PortalSumOrderByAggregateInput
  }

  export type PortalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PortalScalarWhereWithAggregatesInput>
    OR?: Enumerable<PortalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PortalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    account_id?: IntWithAggregatesFilter | number
  }

  export type FormWhereInput = {
    AND?: Enumerable<FormWhereInput>
    OR?: Enumerable<FormWhereInput>
    NOT?: Enumerable<FormWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    website_id?: IntFilter | number
    website?: XOR<WebsiteRelationFilter, WebsiteWhereInput>
    contacts?: ContactListRelationFilter
    form_submissions?: FormSubmissionListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    website_id?: SortOrder
    website?: WebsiteOrderByWithRelationInput
    contacts?: ContactOrderByRelationAggregateInput
    form_submissions?: FormSubmissionOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = {
    id?: number
  }

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    website_id?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _avg?: FormAvgOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
    _sum?: FormSumOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FormScalarWhereWithAggregatesInput>
    OR?: Enumerable<FormScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FormScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    website_id?: IntWithAggregatesFilter | number
  }

  export type FormSubmissionWhereInput = {
    AND?: Enumerable<FormSubmissionWhereInput>
    OR?: Enumerable<FormSubmissionWhereInput>
    NOT?: Enumerable<FormSubmissionWhereInput>
    id?: IntFilter | number
    data?: JsonFilter
    from_id?: IntFilter | number
    submittedDate?: DateTimeFilter | Date | string
    form?: XOR<FormRelationFilter, FormWhereInput>
  }

  export type FormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    from_id?: SortOrder
    submittedDate?: SortOrder
    form?: FormOrderByWithRelationInput
  }

  export type FormSubmissionWhereUniqueInput = {
    id?: number
  }

  export type FormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    from_id?: SortOrder
    submittedDate?: SortOrder
    _count?: FormSubmissionCountOrderByAggregateInput
    _avg?: FormSubmissionAvgOrderByAggregateInput
    _max?: FormSubmissionMaxOrderByAggregateInput
    _min?: FormSubmissionMinOrderByAggregateInput
    _sum?: FormSubmissionSumOrderByAggregateInput
  }

  export type FormSubmissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FormSubmissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<FormSubmissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FormSubmissionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    data?: JsonWithAggregatesFilter
    from_id?: IntWithAggregatesFilter | number
    submittedDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sid?: StringFilter | string
    data?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sid?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sid?: StringWithAggregatesFilter | string
    data?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    website?: WebsiteCreateNestedManyWithoutUsersInput
    projects?: ProjectCreateNestedManyWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    website?: WebsiteUncheckedCreateNestedManyWithoutUsersInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUsersInput
    group_id?: number | null
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: WebsiteUpdateManyWithoutUsersInput
    projects?: ProjectUpdateManyWithoutUsersInput
    accounts?: AccountUpdateManyWithoutUsersInput
    group?: GroupUpdateOneWithoutUsersInput
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: WebsiteUncheckedUpdateManyWithoutUsersInput
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    accounts?: AccountUncheckedUpdateManyWithoutUsersInput
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    group_id?: number | null
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    name: string
    description: string
    users?: UserCreateNestedManyWithoutGroupInput
    createdAt?: Date | string
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
    createdAt?: Date | string
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutGroupInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutGroupInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    contacts?: ContactCreateNestedManyWithoutProjectInput
    users?: UserCreateNestedManyWithoutProjectsInput
    account?: AccountCreateNestedOneWithoutProjectsInput
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutProjectInput
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    account_id?: number | null
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUpdateManyWithoutProjectInput
    users?: UserUpdateManyWithoutProjectsInput
    account?: AccountUpdateOneWithoutProjectsInput
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutProjectInput
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    account_id?: number | null
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserCreateNestedManyWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    website?: WebsiteCreateNestedManyWithoutAccountInput
    portal?: PortalCreateNestedOneWithoutAccountInput
    projects?: ProjectCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserUncheckedCreateNestedManyWithoutAccountsInput
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    website?: WebsiteUncheckedCreateNestedManyWithoutAccountInput
    portal?: PortalUncheckedCreateNestedOneWithoutAccountInput
    projects?: ProjectUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutAccountsInput
    contacts?: ContactUpdateManyWithoutAccountInput
    website?: WebsiteUpdateManyWithoutAccountInput
    portal?: PortalUpdateOneWithoutAccountInput
    projects?: ProjectUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutAccountsInput
    contacts?: ContactUncheckedUpdateManyWithoutAccountInput
    website?: WebsiteUncheckedUpdateManyWithoutAccountInput
    portal?: PortalUncheckedUpdateOneWithoutAccountInput
    projects?: ProjectUncheckedUpdateManyWithoutAccountInput
  }

  export type AccountCreateManyInput = {
    id?: number
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactCreateInput = {
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormCreateNestedManyWithoutContactsInput
    account?: AccountCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationCreateNestedOneWithoutConatctInput
    portal_user?: PortalUserCreateNestedOneWithoutContactInput
    Project?: ProjectCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormUncheckedCreateNestedManyWithoutContactsInput
    account?: AccountUncheckedCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedCreateNestedOneWithoutConatctInput
    portal_user?: PortalUserUncheckedCreateNestedOneWithoutContactInput
    projectId?: number | null
  }

  export type ContactUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUpdateManyWithoutContactsInput
    account?: AccountUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUpdateOneWithoutConatctInput
    portal_user?: PortalUserUpdateOneWithoutContactInput
    Project?: ProjectUpdateOneWithoutContactsInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUncheckedUpdateManyWithoutContactsInput
    account?: AccountUncheckedUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedUpdateOneWithoutConatctInput
    portal_user?: PortalUserUncheckedUpdateOneWithoutContactInput
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContactCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    projectId?: number | null
  }

  export type ContactUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WebsiteCreateInput = {
    url: string
    forms?: FormCreateNestedManyWithoutWebsiteInput
    users?: UserCreateNestedManyWithoutWebsiteInput
    account: AccountCreateNestedOneWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: number
    account_id: number
    url: string
    forms?: FormUncheckedCreateNestedManyWithoutWebsiteInput
    users?: UserUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    forms?: FormUpdateManyWithoutWebsiteInput
    users?: UserUpdateManyWithoutWebsiteInput
    account?: AccountUpdateOneRequiredWithoutWebsiteInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    forms?: FormUncheckedUpdateManyWithoutWebsiteInput
    users?: UserUncheckedUpdateManyWithoutWebsiteInput
  }

  export type WebsiteCreateManyInput = {
    id?: number
    account_id: number
    url: string
  }

  export type WebsiteUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PortalUserCreateInput = {
    password: string
    contact: ContactCreateNestedOneWithoutPortal_userInput
    portal: PortalCreateNestedOneWithoutUsersInput
  }

  export type PortalUserUncheckedCreateInput = {
    password: string
    contact_id: number
    portal_id: number
  }

  export type PortalUserUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    contact?: ContactUpdateOneRequiredWithoutPortal_userInput
    portal?: PortalUpdateOneRequiredWithoutUsersInput
  }

  export type PortalUserUncheckedUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    contact_id?: IntFieldUpdateOperationsInput | number
    portal_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortalUserCreateManyInput = {
    password: string
    contact_id: number
    portal_id: number
  }

  export type PortalUserUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PortalUserUncheckedUpdateManyInput = {
    password?: StringFieldUpdateOperationsInput | string
    contact_id?: IntFieldUpdateOperationsInput | number
    portal_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortalInvitationCreateInput = {
    token: string
    expiration_date: Date | string
    conatct: ContactCreateNestedOneWithoutPortal_tokenInput
  }

  export type PortalInvitationUncheckedCreateInput = {
    token: string
    expiration_date: Date | string
    contact_id: number
  }

  export type PortalInvitationUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    conatct?: ContactUpdateOneRequiredWithoutPortal_tokenInput
  }

  export type PortalInvitationUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    contact_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortalInvitationCreateManyInput = {
    token: string
    expiration_date: Date | string
    contact_id: number
  }

  export type PortalInvitationUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalInvitationUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    contact_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortalCreateInput = {
    users?: PortalUserCreateNestedManyWithoutPortalInput
    account: AccountCreateNestedOneWithoutPortalInput
  }

  export type PortalUncheckedCreateInput = {
    id?: number
    account_id: number
    users?: PortalUserUncheckedCreateNestedManyWithoutPortalInput
  }

  export type PortalUpdateInput = {
    users?: PortalUserUpdateManyWithoutPortalInput
    account?: AccountUpdateOneRequiredWithoutPortalInput
  }

  export type PortalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    users?: PortalUserUncheckedUpdateManyWithoutPortalInput
  }

  export type PortalCreateManyInput = {
    id?: number
    account_id: number
  }

  export type PortalUpdateManyMutationInput = {

  }

  export type PortalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
  }

  export type FormCreateInput = {
    name: string
    website: WebsiteCreateNestedOneWithoutFormsInput
    contacts?: ContactCreateNestedManyWithoutFormsInput
    form_submissions?: FormSubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: number
    name: string
    website_id: number
    contacts?: ContactUncheckedCreateNestedManyWithoutFormsInput
    form_submissions?: FormSubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    website?: WebsiteUpdateOneRequiredWithoutFormsInput
    contacts?: ContactUpdateManyWithoutFormsInput
    form_submissions?: FormSubmissionUpdateManyWithoutFormInput
  }

  export type FormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    website_id?: IntFieldUpdateOperationsInput | number
    contacts?: ContactUncheckedUpdateManyWithoutFormsInput
    form_submissions?: FormSubmissionUncheckedUpdateManyWithoutFormInput
  }

  export type FormCreateManyInput = {
    id?: number
    name: string
    website_id: number
  }

  export type FormUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    website_id?: IntFieldUpdateOperationsInput | number
  }

  export type FormSubmissionCreateInput = {
    data: JsonNullValueInput | InputJsonValue
    submittedDate?: Date | string
    form: FormCreateNestedOneWithoutForm_submissionsInput
  }

  export type FormSubmissionUncheckedCreateInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
    from_id: number
    submittedDate?: Date | string
  }

  export type FormSubmissionUpdateInput = {
    data?: JsonNullValueInput | InputJsonValue
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutForm_submissionsInput
  }

  export type FormSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    from_id?: IntFieldUpdateOperationsInput | number
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateManyInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
    from_id: number
    submittedDate?: Date | string
  }

  export type FormSubmissionUpdateManyMutationInput = {
    data?: JsonNullValueInput | InputJsonValue
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    from_id?: IntFieldUpdateOperationsInput | number
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type WebsiteListRelationFilter = {
    every?: WebsiteWhereInput
    some?: WebsiteWhereInput
    none?: WebsiteWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type EnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type WebsiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    clickup_uid?: SortOrder
    slack_uid?: SortOrder
    zoho_uid?: SortOrder
    bio?: SortOrder
    group_id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    clickup_uid?: SortOrder
    slack_uid?: SortOrder
    zoho_uid?: SortOrder
    bio?: SortOrder
    group_id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    clickup_uid?: SortOrder
    slack_uid?: SortOrder
    zoho_uid?: SortOrder
    bio?: SortOrder
    group_id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type EnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    slack_channel?: SortOrder
    account_id?: SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    slack_channel?: SortOrder
    account_id?: SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    slack_channel?: SortOrder
    account_id?: SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type PortalRelationFilter = {
    is?: PortalWhereInput
    isNot?: PortalWhereInput
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    code?: SortOrder
    country?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    code?: SortOrder
    country?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    phone?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    code?: SortOrder
    country?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormListRelationFilter = {
    every?: FormWhereInput
    some?: FormWhereInput
    none?: FormWhereInput
  }

  export type PortalInvitationRelationFilter = {
    is?: PortalInvitationWhereInput | null
    isNot?: PortalInvitationWhereInput | null
  }

  export type PortalUserRelationFilter = {
    is?: PortalUserWhereInput | null
    isNot?: PortalUserWhereInput | null
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type FormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    portal_uid?: SortOrder
    projectId?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
    portal_uid?: SortOrder
    projectId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    portal_uid?: SortOrder
    projectId?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    portal_uid?: SortOrder
    projectId?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
    portal_uid?: SortOrder
    projectId?: SortOrder
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    url?: SortOrder
  }

  export type WebsiteAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    url?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    url?: SortOrder
  }

  export type WebsiteSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type ContactRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type PortalUserCountOrderByAggregateInput = {
    password?: SortOrder
    contact_id?: SortOrder
    portal_id?: SortOrder
  }

  export type PortalUserAvgOrderByAggregateInput = {
    contact_id?: SortOrder
    portal_id?: SortOrder
  }

  export type PortalUserMaxOrderByAggregateInput = {
    password?: SortOrder
    contact_id?: SortOrder
    portal_id?: SortOrder
  }

  export type PortalUserMinOrderByAggregateInput = {
    password?: SortOrder
    contact_id?: SortOrder
    portal_id?: SortOrder
  }

  export type PortalUserSumOrderByAggregateInput = {
    contact_id?: SortOrder
    portal_id?: SortOrder
  }

  export type PortalInvitationCountOrderByAggregateInput = {
    token?: SortOrder
    expiration_date?: SortOrder
    contact_id?: SortOrder
  }

  export type PortalInvitationAvgOrderByAggregateInput = {
    contact_id?: SortOrder
  }

  export type PortalInvitationMaxOrderByAggregateInput = {
    token?: SortOrder
    expiration_date?: SortOrder
    contact_id?: SortOrder
  }

  export type PortalInvitationMinOrderByAggregateInput = {
    token?: SortOrder
    expiration_date?: SortOrder
    contact_id?: SortOrder
  }

  export type PortalInvitationSumOrderByAggregateInput = {
    contact_id?: SortOrder
  }

  export type PortalUserListRelationFilter = {
    every?: PortalUserWhereInput
    some?: PortalUserWhereInput
    none?: PortalUserWhereInput
  }

  export type PortalUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortalCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type PortalAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type PortalMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type PortalMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type PortalSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type WebsiteRelationFilter = {
    is?: WebsiteWhereInput
    isNot?: WebsiteWhereInput
  }

  export type FormSubmissionListRelationFilter = {
    every?: FormSubmissionWhereInput
    some?: FormSubmissionWhereInput
    none?: FormSubmissionWhereInput
  }

  export type FormSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website_id?: SortOrder
  }

  export type FormAvgOrderByAggregateInput = {
    id?: SortOrder
    website_id?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website_id?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website_id?: SortOrder
  }

  export type FormSumOrderByAggregateInput = {
    id?: SortOrder
    website_id?: SortOrder
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type FormRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type FormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    from_id?: SortOrder
    submittedDate?: SortOrder
  }

  export type FormSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    from_id?: SortOrder
  }

  export type FormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    from_id?: SortOrder
    submittedDate?: SortOrder
  }

  export type FormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    from_id?: SortOrder
    submittedDate?: SortOrder
  }

  export type FormSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    from_id?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebsiteCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutUsersInput>, Enumerable<WebsiteUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<WebsiteWhereUniqueInput>
  }

  export type ProjectCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutUsersInput>, Enumerable<ProjectUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type AccountCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUsersInput>, Enumerable<AccountUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    connect?: GroupWhereUniqueInput
  }

  export type WebsiteUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutUsersInput>, Enumerable<WebsiteUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<WebsiteWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutUsersInput>, Enumerable<ProjectUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUsersInput>, Enumerable<AccountUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WebsiteUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutUsersInput>, Enumerable<WebsiteUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<WebsiteUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<WebsiteWhereUniqueInput>
    disconnect?: Enumerable<WebsiteWhereUniqueInput>
    delete?: Enumerable<WebsiteWhereUniqueInput>
    connect?: Enumerable<WebsiteWhereUniqueInput>
    update?: Enumerable<WebsiteUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<WebsiteUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<WebsiteScalarWhereInput>
  }

  export type ProjectUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutUsersInput>, Enumerable<ProjectUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type AccountUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUsersInput>, Enumerable<AccountUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type GroupUpdateOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    upsert?: GroupUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WebsiteUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutUsersInput>, Enumerable<WebsiteUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<WebsiteUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<WebsiteWhereUniqueInput>
    disconnect?: Enumerable<WebsiteWhereUniqueInput>
    delete?: Enumerable<WebsiteWhereUniqueInput>
    connect?: Enumerable<WebsiteWhereUniqueInput>
    update?: Enumerable<WebsiteUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<WebsiteUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<WebsiteScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutUsersInput>, Enumerable<ProjectUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUsersInput>, Enumerable<AccountUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<UserCreateWithoutGroupInput>, Enumerable<UserUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutGroupInput>
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<UserCreateWithoutGroupInput>, Enumerable<UserUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutGroupInput>
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<UserCreateWithoutGroupInput>, Enumerable<UserUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: UserCreateManyGroupInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<UserCreateWithoutGroupInput>, Enumerable<UserUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: UserCreateManyGroupInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ContactCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ContactCreateWithoutProjectInput>, Enumerable<ContactUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutProjectInput>
    createMany?: ContactCreateManyProjectInputEnvelope
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutProjectsInput>, Enumerable<UserUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutProjectsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type AccountCreateNestedOneWithoutProjectsInput = {
    create?: XOR<AccountCreateWithoutProjectsInput, AccountUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutProjectsInput
    connect?: AccountWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ContactCreateWithoutProjectInput>, Enumerable<ContactUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutProjectInput>
    createMany?: ContactCreateManyProjectInputEnvelope
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutProjectsInput>, Enumerable<UserUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutProjectsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ContactUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<ContactCreateWithoutProjectInput>, Enumerable<ContactUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: ContactCreateManyProjectInputEnvelope
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type UserUpdateManyWithoutProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutProjectsInput>, Enumerable<UserUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutProjectsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutProjectsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutProjectsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutProjectsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type AccountUpdateOneWithoutProjectsInput = {
    create?: XOR<AccountCreateWithoutProjectsInput, AccountUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutProjectsInput
    upsert?: AccountUpsertWithoutProjectsInput
    disconnect?: boolean
    delete?: boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<AccountUpdateWithoutProjectsInput, AccountUncheckedUpdateWithoutProjectsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ContactUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<ContactCreateWithoutProjectInput>, Enumerable<ContactUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: ContactCreateManyProjectInputEnvelope
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutProjectsInput>, Enumerable<UserUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutProjectsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutProjectsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutProjectsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutProjectsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<UserCreateWithoutAccountsInput>, Enumerable<UserUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAccountsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ContactCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<ContactCreateWithoutAccountInput>, Enumerable<ContactUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutAccountInput>
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type WebsiteCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutAccountInput>, Enumerable<WebsiteUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutAccountInput>
    createMany?: WebsiteCreateManyAccountInputEnvelope
    connect?: Enumerable<WebsiteWhereUniqueInput>
  }

  export type PortalCreateNestedOneWithoutAccountInput = {
    create?: XOR<PortalCreateWithoutAccountInput, PortalUncheckedCreateWithoutAccountInput>
    connectOrCreate?: PortalCreateOrConnectWithoutAccountInput
    connect?: PortalWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutAccountInput>, Enumerable<ProjectUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutAccountInput>
    createMany?: ProjectCreateManyAccountInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Enumerable<UserCreateWithoutAccountsInput>, Enumerable<UserUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAccountsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ContactUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<ContactCreateWithoutAccountInput>, Enumerable<ContactUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutAccountInput>
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type WebsiteUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutAccountInput>, Enumerable<WebsiteUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutAccountInput>
    createMany?: WebsiteCreateManyAccountInputEnvelope
    connect?: Enumerable<WebsiteWhereUniqueInput>
  }

  export type PortalUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<PortalCreateWithoutAccountInput, PortalUncheckedCreateWithoutAccountInput>
    connectOrCreate?: PortalCreateOrConnectWithoutAccountInput
    connect?: PortalWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutAccountInput>, Enumerable<ProjectUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutAccountInput>
    createMany?: ProjectCreateManyAccountInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<UserCreateWithoutAccountsInput>, Enumerable<UserUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAccountsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ContactUpdateManyWithoutAccountInput = {
    create?: XOR<Enumerable<ContactCreateWithoutAccountInput>, Enumerable<ContactUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutAccountInput>
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type WebsiteUpdateManyWithoutAccountInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutAccountInput>, Enumerable<WebsiteUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<WebsiteUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: WebsiteCreateManyAccountInputEnvelope
    set?: Enumerable<WebsiteWhereUniqueInput>
    disconnect?: Enumerable<WebsiteWhereUniqueInput>
    delete?: Enumerable<WebsiteWhereUniqueInput>
    connect?: Enumerable<WebsiteWhereUniqueInput>
    update?: Enumerable<WebsiteUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<WebsiteUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<WebsiteScalarWhereInput>
  }

  export type PortalUpdateOneWithoutAccountInput = {
    create?: XOR<PortalCreateWithoutAccountInput, PortalUncheckedCreateWithoutAccountInput>
    connectOrCreate?: PortalCreateOrConnectWithoutAccountInput
    upsert?: PortalUpsertWithoutAccountInput
    disconnect?: boolean
    delete?: boolean
    connect?: PortalWhereUniqueInput
    update?: XOR<PortalUpdateWithoutAccountInput, PortalUncheckedUpdateWithoutAccountInput>
  }

  export type ProjectUpdateManyWithoutAccountInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutAccountInput>, Enumerable<ProjectUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: ProjectCreateManyAccountInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutAccountsInput = {
    create?: XOR<Enumerable<UserCreateWithoutAccountsInput>, Enumerable<UserUncheckedCreateWithoutAccountsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAccountsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAccountsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAccountsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAccountsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ContactUncheckedUpdateManyWithoutAccountInput = {
    create?: XOR<Enumerable<ContactCreateWithoutAccountInput>, Enumerable<ContactUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutAccountInput>
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type WebsiteUncheckedUpdateManyWithoutAccountInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutAccountInput>, Enumerable<WebsiteUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<WebsiteUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: WebsiteCreateManyAccountInputEnvelope
    set?: Enumerable<WebsiteWhereUniqueInput>
    disconnect?: Enumerable<WebsiteWhereUniqueInput>
    delete?: Enumerable<WebsiteWhereUniqueInput>
    connect?: Enumerable<WebsiteWhereUniqueInput>
    update?: Enumerable<WebsiteUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<WebsiteUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<WebsiteScalarWhereInput>
  }

  export type PortalUncheckedUpdateOneWithoutAccountInput = {
    create?: XOR<PortalCreateWithoutAccountInput, PortalUncheckedCreateWithoutAccountInput>
    connectOrCreate?: PortalCreateOrConnectWithoutAccountInput
    upsert?: PortalUpsertWithoutAccountInput
    disconnect?: boolean
    delete?: boolean
    connect?: PortalWhereUniqueInput
    update?: XOR<PortalUpdateWithoutAccountInput, PortalUncheckedUpdateWithoutAccountInput>
  }

  export type ProjectUncheckedUpdateManyWithoutAccountInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutAccountInput>, Enumerable<ProjectUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: ProjectCreateManyAccountInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type FormCreateNestedManyWithoutContactsInput = {
    create?: XOR<Enumerable<FormCreateWithoutContactsInput>, Enumerable<FormUncheckedCreateWithoutContactsInput>>
    connectOrCreate?: Enumerable<FormCreateOrConnectWithoutContactsInput>
    connect?: Enumerable<FormWhereUniqueInput>
  }

  export type AccountCreateNestedManyWithoutContactsInput = {
    create?: XOR<Enumerable<AccountCreateWithoutContactsInput>, Enumerable<AccountUncheckedCreateWithoutContactsInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutContactsInput>
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type PortalInvitationCreateNestedOneWithoutConatctInput = {
    create?: XOR<PortalInvitationCreateWithoutConatctInput, PortalInvitationUncheckedCreateWithoutConatctInput>
    connectOrCreate?: PortalInvitationCreateOrConnectWithoutConatctInput
    connect?: PortalInvitationWhereUniqueInput
  }

  export type PortalUserCreateNestedOneWithoutContactInput = {
    create?: XOR<PortalUserCreateWithoutContactInput, PortalUserUncheckedCreateWithoutContactInput>
    connectOrCreate?: PortalUserCreateOrConnectWithoutContactInput
    connect?: PortalUserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutContactsInput = {
    create?: XOR<ProjectCreateWithoutContactsInput, ProjectUncheckedCreateWithoutContactsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutContactsInput
    connect?: ProjectWhereUniqueInput
  }

  export type FormUncheckedCreateNestedManyWithoutContactsInput = {
    create?: XOR<Enumerable<FormCreateWithoutContactsInput>, Enumerable<FormUncheckedCreateWithoutContactsInput>>
    connectOrCreate?: Enumerable<FormCreateOrConnectWithoutContactsInput>
    connect?: Enumerable<FormWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutContactsInput = {
    create?: XOR<Enumerable<AccountCreateWithoutContactsInput>, Enumerable<AccountUncheckedCreateWithoutContactsInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutContactsInput>
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type PortalInvitationUncheckedCreateNestedOneWithoutConatctInput = {
    create?: XOR<PortalInvitationCreateWithoutConatctInput, PortalInvitationUncheckedCreateWithoutConatctInput>
    connectOrCreate?: PortalInvitationCreateOrConnectWithoutConatctInput
    connect?: PortalInvitationWhereUniqueInput
  }

  export type PortalUserUncheckedCreateNestedOneWithoutContactInput = {
    create?: XOR<PortalUserCreateWithoutContactInput, PortalUserUncheckedCreateWithoutContactInput>
    connectOrCreate?: PortalUserCreateOrConnectWithoutContactInput
    connect?: PortalUserWhereUniqueInput
  }

  export type FormUpdateManyWithoutContactsInput = {
    create?: XOR<Enumerable<FormCreateWithoutContactsInput>, Enumerable<FormUncheckedCreateWithoutContactsInput>>
    connectOrCreate?: Enumerable<FormCreateOrConnectWithoutContactsInput>
    upsert?: Enumerable<FormUpsertWithWhereUniqueWithoutContactsInput>
    set?: Enumerable<FormWhereUniqueInput>
    disconnect?: Enumerable<FormWhereUniqueInput>
    delete?: Enumerable<FormWhereUniqueInput>
    connect?: Enumerable<FormWhereUniqueInput>
    update?: Enumerable<FormUpdateWithWhereUniqueWithoutContactsInput>
    updateMany?: Enumerable<FormUpdateManyWithWhereWithoutContactsInput>
    deleteMany?: Enumerable<FormScalarWhereInput>
  }

  export type AccountUpdateManyWithoutContactsInput = {
    create?: XOR<Enumerable<AccountCreateWithoutContactsInput>, Enumerable<AccountUncheckedCreateWithoutContactsInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutContactsInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutContactsInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutContactsInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutContactsInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type PortalInvitationUpdateOneWithoutConatctInput = {
    create?: XOR<PortalInvitationCreateWithoutConatctInput, PortalInvitationUncheckedCreateWithoutConatctInput>
    connectOrCreate?: PortalInvitationCreateOrConnectWithoutConatctInput
    upsert?: PortalInvitationUpsertWithoutConatctInput
    disconnect?: boolean
    delete?: boolean
    connect?: PortalInvitationWhereUniqueInput
    update?: XOR<PortalInvitationUpdateWithoutConatctInput, PortalInvitationUncheckedUpdateWithoutConatctInput>
  }

  export type PortalUserUpdateOneWithoutContactInput = {
    create?: XOR<PortalUserCreateWithoutContactInput, PortalUserUncheckedCreateWithoutContactInput>
    connectOrCreate?: PortalUserCreateOrConnectWithoutContactInput
    upsert?: PortalUserUpsertWithoutContactInput
    disconnect?: boolean
    delete?: boolean
    connect?: PortalUserWhereUniqueInput
    update?: XOR<PortalUserUpdateWithoutContactInput, PortalUserUncheckedUpdateWithoutContactInput>
  }

  export type ProjectUpdateOneWithoutContactsInput = {
    create?: XOR<ProjectCreateWithoutContactsInput, ProjectUncheckedCreateWithoutContactsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutContactsInput
    upsert?: ProjectUpsertWithoutContactsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutContactsInput, ProjectUncheckedUpdateWithoutContactsInput>
  }

  export type FormUncheckedUpdateManyWithoutContactsInput = {
    create?: XOR<Enumerable<FormCreateWithoutContactsInput>, Enumerable<FormUncheckedCreateWithoutContactsInput>>
    connectOrCreate?: Enumerable<FormCreateOrConnectWithoutContactsInput>
    upsert?: Enumerable<FormUpsertWithWhereUniqueWithoutContactsInput>
    set?: Enumerable<FormWhereUniqueInput>
    disconnect?: Enumerable<FormWhereUniqueInput>
    delete?: Enumerable<FormWhereUniqueInput>
    connect?: Enumerable<FormWhereUniqueInput>
    update?: Enumerable<FormUpdateWithWhereUniqueWithoutContactsInput>
    updateMany?: Enumerable<FormUpdateManyWithWhereWithoutContactsInput>
    deleteMany?: Enumerable<FormScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutContactsInput = {
    create?: XOR<Enumerable<AccountCreateWithoutContactsInput>, Enumerable<AccountUncheckedCreateWithoutContactsInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutContactsInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutContactsInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutContactsInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutContactsInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type PortalInvitationUncheckedUpdateOneWithoutConatctInput = {
    create?: XOR<PortalInvitationCreateWithoutConatctInput, PortalInvitationUncheckedCreateWithoutConatctInput>
    connectOrCreate?: PortalInvitationCreateOrConnectWithoutConatctInput
    upsert?: PortalInvitationUpsertWithoutConatctInput
    disconnect?: boolean
    delete?: boolean
    connect?: PortalInvitationWhereUniqueInput
    update?: XOR<PortalInvitationUpdateWithoutConatctInput, PortalInvitationUncheckedUpdateWithoutConatctInput>
  }

  export type PortalUserUncheckedUpdateOneWithoutContactInput = {
    create?: XOR<PortalUserCreateWithoutContactInput, PortalUserUncheckedCreateWithoutContactInput>
    connectOrCreate?: PortalUserCreateOrConnectWithoutContactInput
    upsert?: PortalUserUpsertWithoutContactInput
    disconnect?: boolean
    delete?: boolean
    connect?: PortalUserWhereUniqueInput
    update?: XOR<PortalUserUpdateWithoutContactInput, PortalUserUncheckedUpdateWithoutContactInput>
  }

  export type FormCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<Enumerable<FormCreateWithoutWebsiteInput>, Enumerable<FormUncheckedCreateWithoutWebsiteInput>>
    connectOrCreate?: Enumerable<FormCreateOrConnectWithoutWebsiteInput>
    createMany?: FormCreateManyWebsiteInputEnvelope
    connect?: Enumerable<FormWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<Enumerable<UserCreateWithoutWebsiteInput>, Enumerable<UserUncheckedCreateWithoutWebsiteInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutWebsiteInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type AccountCreateNestedOneWithoutWebsiteInput = {
    create?: XOR<AccountCreateWithoutWebsiteInput, AccountUncheckedCreateWithoutWebsiteInput>
    connectOrCreate?: AccountCreateOrConnectWithoutWebsiteInput
    connect?: AccountWhereUniqueInput
  }

  export type FormUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<Enumerable<FormCreateWithoutWebsiteInput>, Enumerable<FormUncheckedCreateWithoutWebsiteInput>>
    connectOrCreate?: Enumerable<FormCreateOrConnectWithoutWebsiteInput>
    createMany?: FormCreateManyWebsiteInputEnvelope
    connect?: Enumerable<FormWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<Enumerable<UserCreateWithoutWebsiteInput>, Enumerable<UserUncheckedCreateWithoutWebsiteInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutWebsiteInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type FormUpdateManyWithoutWebsiteInput = {
    create?: XOR<Enumerable<FormCreateWithoutWebsiteInput>, Enumerable<FormUncheckedCreateWithoutWebsiteInput>>
    connectOrCreate?: Enumerable<FormCreateOrConnectWithoutWebsiteInput>
    upsert?: Enumerable<FormUpsertWithWhereUniqueWithoutWebsiteInput>
    createMany?: FormCreateManyWebsiteInputEnvelope
    set?: Enumerable<FormWhereUniqueInput>
    disconnect?: Enumerable<FormWhereUniqueInput>
    delete?: Enumerable<FormWhereUniqueInput>
    connect?: Enumerable<FormWhereUniqueInput>
    update?: Enumerable<FormUpdateWithWhereUniqueWithoutWebsiteInput>
    updateMany?: Enumerable<FormUpdateManyWithWhereWithoutWebsiteInput>
    deleteMany?: Enumerable<FormScalarWhereInput>
  }

  export type UserUpdateManyWithoutWebsiteInput = {
    create?: XOR<Enumerable<UserCreateWithoutWebsiteInput>, Enumerable<UserUncheckedCreateWithoutWebsiteInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutWebsiteInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutWebsiteInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutWebsiteInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutWebsiteInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type AccountUpdateOneRequiredWithoutWebsiteInput = {
    create?: XOR<AccountCreateWithoutWebsiteInput, AccountUncheckedCreateWithoutWebsiteInput>
    connectOrCreate?: AccountCreateOrConnectWithoutWebsiteInput
    upsert?: AccountUpsertWithoutWebsiteInput
    connect?: AccountWhereUniqueInput
    update?: XOR<AccountUpdateWithoutWebsiteInput, AccountUncheckedUpdateWithoutWebsiteInput>
  }

  export type FormUncheckedUpdateManyWithoutWebsiteInput = {
    create?: XOR<Enumerable<FormCreateWithoutWebsiteInput>, Enumerable<FormUncheckedCreateWithoutWebsiteInput>>
    connectOrCreate?: Enumerable<FormCreateOrConnectWithoutWebsiteInput>
    upsert?: Enumerable<FormUpsertWithWhereUniqueWithoutWebsiteInput>
    createMany?: FormCreateManyWebsiteInputEnvelope
    set?: Enumerable<FormWhereUniqueInput>
    disconnect?: Enumerable<FormWhereUniqueInput>
    delete?: Enumerable<FormWhereUniqueInput>
    connect?: Enumerable<FormWhereUniqueInput>
    update?: Enumerable<FormUpdateWithWhereUniqueWithoutWebsiteInput>
    updateMany?: Enumerable<FormUpdateManyWithWhereWithoutWebsiteInput>
    deleteMany?: Enumerable<FormScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutWebsiteInput = {
    create?: XOR<Enumerable<UserCreateWithoutWebsiteInput>, Enumerable<UserUncheckedCreateWithoutWebsiteInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutWebsiteInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutWebsiteInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutWebsiteInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutWebsiteInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ContactCreateNestedOneWithoutPortal_userInput = {
    create?: XOR<ContactCreateWithoutPortal_userInput, ContactUncheckedCreateWithoutPortal_userInput>
    connectOrCreate?: ContactCreateOrConnectWithoutPortal_userInput
    connect?: ContactWhereUniqueInput
  }

  export type PortalCreateNestedOneWithoutUsersInput = {
    create?: XOR<PortalCreateWithoutUsersInput, PortalUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PortalCreateOrConnectWithoutUsersInput
    connect?: PortalWhereUniqueInput
  }

  export type ContactUpdateOneRequiredWithoutPortal_userInput = {
    create?: XOR<ContactCreateWithoutPortal_userInput, ContactUncheckedCreateWithoutPortal_userInput>
    connectOrCreate?: ContactCreateOrConnectWithoutPortal_userInput
    upsert?: ContactUpsertWithoutPortal_userInput
    connect?: ContactWhereUniqueInput
    update?: XOR<ContactUpdateWithoutPortal_userInput, ContactUncheckedUpdateWithoutPortal_userInput>
  }

  export type PortalUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<PortalCreateWithoutUsersInput, PortalUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PortalCreateOrConnectWithoutUsersInput
    upsert?: PortalUpsertWithoutUsersInput
    connect?: PortalWhereUniqueInput
    update?: XOR<PortalUpdateWithoutUsersInput, PortalUncheckedUpdateWithoutUsersInput>
  }

  export type ContactCreateNestedOneWithoutPortal_tokenInput = {
    create?: XOR<ContactCreateWithoutPortal_tokenInput, ContactUncheckedCreateWithoutPortal_tokenInput>
    connectOrCreate?: ContactCreateOrConnectWithoutPortal_tokenInput
    connect?: ContactWhereUniqueInput
  }

  export type ContactUpdateOneRequiredWithoutPortal_tokenInput = {
    create?: XOR<ContactCreateWithoutPortal_tokenInput, ContactUncheckedCreateWithoutPortal_tokenInput>
    connectOrCreate?: ContactCreateOrConnectWithoutPortal_tokenInput
    upsert?: ContactUpsertWithoutPortal_tokenInput
    connect?: ContactWhereUniqueInput
    update?: XOR<ContactUpdateWithoutPortal_tokenInput, ContactUncheckedUpdateWithoutPortal_tokenInput>
  }

  export type PortalUserCreateNestedManyWithoutPortalInput = {
    create?: XOR<Enumerable<PortalUserCreateWithoutPortalInput>, Enumerable<PortalUserUncheckedCreateWithoutPortalInput>>
    connectOrCreate?: Enumerable<PortalUserCreateOrConnectWithoutPortalInput>
    createMany?: PortalUserCreateManyPortalInputEnvelope
    connect?: Enumerable<PortalUserWhereUniqueInput>
  }

  export type AccountCreateNestedOneWithoutPortalInput = {
    create?: XOR<AccountCreateWithoutPortalInput, AccountUncheckedCreateWithoutPortalInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPortalInput
    connect?: AccountWhereUniqueInput
  }

  export type PortalUserUncheckedCreateNestedManyWithoutPortalInput = {
    create?: XOR<Enumerable<PortalUserCreateWithoutPortalInput>, Enumerable<PortalUserUncheckedCreateWithoutPortalInput>>
    connectOrCreate?: Enumerable<PortalUserCreateOrConnectWithoutPortalInput>
    createMany?: PortalUserCreateManyPortalInputEnvelope
    connect?: Enumerable<PortalUserWhereUniqueInput>
  }

  export type PortalUserUpdateManyWithoutPortalInput = {
    create?: XOR<Enumerable<PortalUserCreateWithoutPortalInput>, Enumerable<PortalUserUncheckedCreateWithoutPortalInput>>
    connectOrCreate?: Enumerable<PortalUserCreateOrConnectWithoutPortalInput>
    upsert?: Enumerable<PortalUserUpsertWithWhereUniqueWithoutPortalInput>
    createMany?: PortalUserCreateManyPortalInputEnvelope
    set?: Enumerable<PortalUserWhereUniqueInput>
    disconnect?: Enumerable<PortalUserWhereUniqueInput>
    delete?: Enumerable<PortalUserWhereUniqueInput>
    connect?: Enumerable<PortalUserWhereUniqueInput>
    update?: Enumerable<PortalUserUpdateWithWhereUniqueWithoutPortalInput>
    updateMany?: Enumerable<PortalUserUpdateManyWithWhereWithoutPortalInput>
    deleteMany?: Enumerable<PortalUserScalarWhereInput>
  }

  export type AccountUpdateOneRequiredWithoutPortalInput = {
    create?: XOR<AccountCreateWithoutPortalInput, AccountUncheckedCreateWithoutPortalInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPortalInput
    upsert?: AccountUpsertWithoutPortalInput
    connect?: AccountWhereUniqueInput
    update?: XOR<AccountUpdateWithoutPortalInput, AccountUncheckedUpdateWithoutPortalInput>
  }

  export type PortalUserUncheckedUpdateManyWithoutPortalInput = {
    create?: XOR<Enumerable<PortalUserCreateWithoutPortalInput>, Enumerable<PortalUserUncheckedCreateWithoutPortalInput>>
    connectOrCreate?: Enumerable<PortalUserCreateOrConnectWithoutPortalInput>
    upsert?: Enumerable<PortalUserUpsertWithWhereUniqueWithoutPortalInput>
    createMany?: PortalUserCreateManyPortalInputEnvelope
    set?: Enumerable<PortalUserWhereUniqueInput>
    disconnect?: Enumerable<PortalUserWhereUniqueInput>
    delete?: Enumerable<PortalUserWhereUniqueInput>
    connect?: Enumerable<PortalUserWhereUniqueInput>
    update?: Enumerable<PortalUserUpdateWithWhereUniqueWithoutPortalInput>
    updateMany?: Enumerable<PortalUserUpdateManyWithWhereWithoutPortalInput>
    deleteMany?: Enumerable<PortalUserScalarWhereInput>
  }

  export type WebsiteCreateNestedOneWithoutFormsInput = {
    create?: XOR<WebsiteCreateWithoutFormsInput, WebsiteUncheckedCreateWithoutFormsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutFormsInput
    connect?: WebsiteWhereUniqueInput
  }

  export type ContactCreateNestedManyWithoutFormsInput = {
    create?: XOR<Enumerable<ContactCreateWithoutFormsInput>, Enumerable<ContactUncheckedCreateWithoutFormsInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutFormsInput>
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type FormSubmissionCreateNestedManyWithoutFormInput = {
    create?: XOR<Enumerable<FormSubmissionCreateWithoutFormInput>, Enumerable<FormSubmissionUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormSubmissionCreateOrConnectWithoutFormInput>
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    connect?: Enumerable<FormSubmissionWhereUniqueInput>
  }

  export type ContactUncheckedCreateNestedManyWithoutFormsInput = {
    create?: XOR<Enumerable<ContactCreateWithoutFormsInput>, Enumerable<ContactUncheckedCreateWithoutFormsInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutFormsInput>
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type FormSubmissionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<Enumerable<FormSubmissionCreateWithoutFormInput>, Enumerable<FormSubmissionUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormSubmissionCreateOrConnectWithoutFormInput>
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    connect?: Enumerable<FormSubmissionWhereUniqueInput>
  }

  export type WebsiteUpdateOneRequiredWithoutFormsInput = {
    create?: XOR<WebsiteCreateWithoutFormsInput, WebsiteUncheckedCreateWithoutFormsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutFormsInput
    upsert?: WebsiteUpsertWithoutFormsInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<WebsiteUpdateWithoutFormsInput, WebsiteUncheckedUpdateWithoutFormsInput>
  }

  export type ContactUpdateManyWithoutFormsInput = {
    create?: XOR<Enumerable<ContactCreateWithoutFormsInput>, Enumerable<ContactUncheckedCreateWithoutFormsInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutFormsInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutFormsInput>
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutFormsInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutFormsInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type FormSubmissionUpdateManyWithoutFormInput = {
    create?: XOR<Enumerable<FormSubmissionCreateWithoutFormInput>, Enumerable<FormSubmissionUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormSubmissionCreateOrConnectWithoutFormInput>
    upsert?: Enumerable<FormSubmissionUpsertWithWhereUniqueWithoutFormInput>
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    set?: Enumerable<FormSubmissionWhereUniqueInput>
    disconnect?: Enumerable<FormSubmissionWhereUniqueInput>
    delete?: Enumerable<FormSubmissionWhereUniqueInput>
    connect?: Enumerable<FormSubmissionWhereUniqueInput>
    update?: Enumerable<FormSubmissionUpdateWithWhereUniqueWithoutFormInput>
    updateMany?: Enumerable<FormSubmissionUpdateManyWithWhereWithoutFormInput>
    deleteMany?: Enumerable<FormSubmissionScalarWhereInput>
  }

  export type ContactUncheckedUpdateManyWithoutFormsInput = {
    create?: XOR<Enumerable<ContactCreateWithoutFormsInput>, Enumerable<ContactUncheckedCreateWithoutFormsInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutFormsInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutFormsInput>
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutFormsInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutFormsInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type FormSubmissionUncheckedUpdateManyWithoutFormInput = {
    create?: XOR<Enumerable<FormSubmissionCreateWithoutFormInput>, Enumerable<FormSubmissionUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormSubmissionCreateOrConnectWithoutFormInput>
    upsert?: Enumerable<FormSubmissionUpsertWithWhereUniqueWithoutFormInput>
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    set?: Enumerable<FormSubmissionWhereUniqueInput>
    disconnect?: Enumerable<FormSubmissionWhereUniqueInput>
    delete?: Enumerable<FormSubmissionWhereUniqueInput>
    connect?: Enumerable<FormSubmissionWhereUniqueInput>
    update?: Enumerable<FormSubmissionUpdateWithWhereUniqueWithoutFormInput>
    updateMany?: Enumerable<FormSubmissionUpdateManyWithWhereWithoutFormInput>
    deleteMany?: Enumerable<FormSubmissionScalarWhereInput>
  }

  export type FormCreateNestedOneWithoutForm_submissionsInput = {
    create?: XOR<FormCreateWithoutForm_submissionsInput, FormUncheckedCreateWithoutForm_submissionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutForm_submissionsInput
    connect?: FormWhereUniqueInput
  }

  export type FormUpdateOneRequiredWithoutForm_submissionsInput = {
    create?: XOR<FormCreateWithoutForm_submissionsInput, FormUncheckedCreateWithoutForm_submissionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutForm_submissionsInput
    upsert?: FormUpsertWithoutForm_submissionsInput
    connect?: FormWhereUniqueInput
    update?: XOR<FormUpdateWithoutForm_submissionsInput, FormUncheckedUpdateWithoutForm_submissionsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type WebsiteCreateWithoutUsersInput = {
    url: string
    forms?: FormCreateNestedManyWithoutWebsiteInput
    account: AccountCreateNestedOneWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutUsersInput = {
    id?: number
    account_id: number
    url: string
    forms?: FormUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutUsersInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutUsersInput, WebsiteUncheckedCreateWithoutUsersInput>
  }

  export type ProjectCreateWithoutUsersInput = {
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    contacts?: ContactCreateNestedManyWithoutProjectInput
    account?: AccountCreateNestedOneWithoutProjectsInput
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutProjectInput
    account_id?: number | null
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
  }

  export type AccountCreateWithoutUsersInput = {
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    contacts?: ContactCreateNestedManyWithoutAccountInput
    website?: WebsiteCreateNestedManyWithoutAccountInput
    portal?: PortalCreateNestedOneWithoutAccountInput
    projects?: ProjectCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    website?: WebsiteUncheckedCreateNestedManyWithoutAccountInput
    portal?: PortalUncheckedCreateNestedOneWithoutAccountInput
    projects?: ProjectUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUsersInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
  }

  export type GroupCreateWithoutUsersInput = {
    name: string
    description: string
    createdAt?: Date | string
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type WebsiteUpsertWithWhereUniqueWithoutUsersInput = {
    where: WebsiteWhereUniqueInput
    update: XOR<WebsiteUpdateWithoutUsersInput, WebsiteUncheckedUpdateWithoutUsersInput>
    create: XOR<WebsiteCreateWithoutUsersInput, WebsiteUncheckedCreateWithoutUsersInput>
  }

  export type WebsiteUpdateWithWhereUniqueWithoutUsersInput = {
    where: WebsiteWhereUniqueInput
    data: XOR<WebsiteUpdateWithoutUsersInput, WebsiteUncheckedUpdateWithoutUsersInput>
  }

  export type WebsiteUpdateManyWithWhereWithoutUsersInput = {
    where: WebsiteScalarWhereInput
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type WebsiteScalarWhereInput = {
    AND?: Enumerable<WebsiteScalarWhereInput>
    OR?: Enumerable<WebsiteScalarWhereInput>
    NOT?: Enumerable<WebsiteScalarWhereInput>
    id?: IntFilter | number
    account_id?: IntFilter | number
    url?: StringFilter | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUsersInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectsInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: Enumerable<ProjectScalarWhereInput>
    OR?: Enumerable<ProjectScalarWhereInput>
    NOT?: Enumerable<ProjectScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    type?: StringFilter | string
    description?: StringNullableFilter | string | null
    slack_channel?: StringNullableFilter | string | null
    account_id?: IntNullableFilter | number | null
    due_date?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUsersInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUsersInput, AccountUncheckedUpdateWithoutUsersInput>
    create: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUsersInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUsersInput, AccountUncheckedUpdateWithoutUsersInput>
  }

  export type AccountUpdateManyWithWhereWithoutUsersInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    industry?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    street?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    code?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
  }

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type GroupUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutGroupInput = {
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    website?: WebsiteCreateNestedManyWithoutUsersInput
    projects?: ProjectCreateNestedManyWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUsersInput
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    website?: WebsiteUncheckedCreateNestedManyWithoutUsersInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUsersInput
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserCreateManyGroupInputEnvelope = {
    data: Enumerable<UserCreateManyGroupInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    clickup_uid?: StringNullableFilter | string | null
    slack_uid?: StringNullableFilter | string | null
    zoho_uid?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    group_id?: IntNullableFilter | number | null
    role?: EnumUserRoleFilter | UserRole
    createdAt?: DateTimeFilter | Date | string
  }

  export type ContactCreateWithoutProjectInput = {
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormCreateNestedManyWithoutContactsInput
    account?: AccountCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationCreateNestedOneWithoutConatctInput
    portal_user?: PortalUserCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutProjectInput = {
    id?: number
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormUncheckedCreateNestedManyWithoutContactsInput
    account?: AccountUncheckedCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedCreateNestedOneWithoutConatctInput
    portal_user?: PortalUserUncheckedCreateNestedOneWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutProjectInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutProjectInput, ContactUncheckedCreateWithoutProjectInput>
  }

  export type ContactCreateManyProjectInputEnvelope = {
    data: Enumerable<ContactCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProjectsInput = {
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    website?: WebsiteCreateNestedManyWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    website?: WebsiteUncheckedCreateNestedManyWithoutUsersInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUsersInput
    group_id?: number | null
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type AccountCreateWithoutProjectsInput = {
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserCreateNestedManyWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    website?: WebsiteCreateNestedManyWithoutAccountInput
    portal?: PortalCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserUncheckedCreateNestedManyWithoutAccountsInput
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    website?: WebsiteUncheckedCreateNestedManyWithoutAccountInput
    portal?: PortalUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutProjectsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutProjectsInput, AccountUncheckedCreateWithoutProjectsInput>
  }

  export type ContactUpsertWithWhereUniqueWithoutProjectInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutProjectInput, ContactUncheckedUpdateWithoutProjectInput>
    create: XOR<ContactCreateWithoutProjectInput, ContactUncheckedCreateWithoutProjectInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutProjectInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutProjectInput, ContactUncheckedUpdateWithoutProjectInput>
  }

  export type ContactUpdateManyWithWhereWithoutProjectInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutContactsInput>
  }

  export type ContactScalarWhereInput = {
    AND?: Enumerable<ContactScalarWhereInput>
    OR?: Enumerable<ContactScalarWhereInput>
    NOT?: Enumerable<ContactScalarWhereInput>
    id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    title?: StringFilter | string
    email?: StringFilter | string
    phone?: StringNullableFilter | string | null
    portal_uid?: IntNullableFilter | number | null
    projectId?: IntNullableFilter | number | null
  }

  export type UserUpsertWithWhereUniqueWithoutProjectsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProjectsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateManyWithWhereWithoutProjectsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type AccountUpsertWithoutProjectsInput = {
    update: XOR<AccountUpdateWithoutProjectsInput, AccountUncheckedUpdateWithoutProjectsInput>
    create: XOR<AccountCreateWithoutProjectsInput, AccountUncheckedCreateWithoutProjectsInput>
  }

  export type AccountUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutAccountsInput
    contacts?: ContactUpdateManyWithoutAccountInput
    website?: WebsiteUpdateManyWithoutAccountInput
    portal?: PortalUpdateOneWithoutAccountInput
  }

  export type AccountUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutAccountsInput
    contacts?: ContactUncheckedUpdateManyWithoutAccountInput
    website?: WebsiteUncheckedUpdateManyWithoutAccountInput
    portal?: PortalUncheckedUpdateOneWithoutAccountInput
  }

  export type UserCreateWithoutAccountsInput = {
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    website?: WebsiteCreateNestedManyWithoutUsersInput
    projects?: ProjectCreateNestedManyWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    website?: WebsiteUncheckedCreateNestedManyWithoutUsersInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    group_id?: number | null
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type ContactCreateWithoutAccountInput = {
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationCreateNestedOneWithoutConatctInput
    portal_user?: PortalUserCreateNestedOneWithoutContactInput
    Project?: ProjectCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutAccountInput = {
    id?: number
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormUncheckedCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedCreateNestedOneWithoutConatctInput
    portal_user?: PortalUserUncheckedCreateNestedOneWithoutContactInput
    projectId?: number | null
  }

  export type ContactCreateOrConnectWithoutAccountInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutAccountInput, ContactUncheckedCreateWithoutAccountInput>
  }

  export type WebsiteCreateWithoutAccountInput = {
    url: string
    forms?: FormCreateNestedManyWithoutWebsiteInput
    users?: UserCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutAccountInput = {
    id?: number
    url: string
    forms?: FormUncheckedCreateNestedManyWithoutWebsiteInput
    users?: UserUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutAccountInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutAccountInput, WebsiteUncheckedCreateWithoutAccountInput>
  }

  export type WebsiteCreateManyAccountInputEnvelope = {
    data: Enumerable<WebsiteCreateManyAccountInput>
    skipDuplicates?: boolean
  }

  export type PortalCreateWithoutAccountInput = {
    users?: PortalUserCreateNestedManyWithoutPortalInput
  }

  export type PortalUncheckedCreateWithoutAccountInput = {
    id?: number
    users?: PortalUserUncheckedCreateNestedManyWithoutPortalInput
  }

  export type PortalCreateOrConnectWithoutAccountInput = {
    where: PortalWhereUniqueInput
    create: XOR<PortalCreateWithoutAccountInput, PortalUncheckedCreateWithoutAccountInput>
  }

  export type ProjectCreateWithoutAccountInput = {
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    contacts?: ContactCreateNestedManyWithoutProjectInput
    users?: UserCreateNestedManyWithoutProjectsInput
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutAccountInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutProjectInput
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutAccountInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAccountInput, ProjectUncheckedCreateWithoutAccountInput>
  }

  export type ProjectCreateManyAccountInputEnvelope = {
    data: Enumerable<ProjectCreateManyAccountInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAccountsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAccountsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateManyWithWhereWithoutAccountsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type ContactUpsertWithWhereUniqueWithoutAccountInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutAccountInput, ContactUncheckedUpdateWithoutAccountInput>
    create: XOR<ContactCreateWithoutAccountInput, ContactUncheckedCreateWithoutAccountInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutAccountInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutAccountInput, ContactUncheckedUpdateWithoutAccountInput>
  }

  export type ContactUpdateManyWithWhereWithoutAccountInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutContactsInput>
  }

  export type WebsiteUpsertWithWhereUniqueWithoutAccountInput = {
    where: WebsiteWhereUniqueInput
    update: XOR<WebsiteUpdateWithoutAccountInput, WebsiteUncheckedUpdateWithoutAccountInput>
    create: XOR<WebsiteCreateWithoutAccountInput, WebsiteUncheckedCreateWithoutAccountInput>
  }

  export type WebsiteUpdateWithWhereUniqueWithoutAccountInput = {
    where: WebsiteWhereUniqueInput
    data: XOR<WebsiteUpdateWithoutAccountInput, WebsiteUncheckedUpdateWithoutAccountInput>
  }

  export type WebsiteUpdateManyWithWhereWithoutAccountInput = {
    where: WebsiteScalarWhereInput
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type PortalUpsertWithoutAccountInput = {
    update: XOR<PortalUpdateWithoutAccountInput, PortalUncheckedUpdateWithoutAccountInput>
    create: XOR<PortalCreateWithoutAccountInput, PortalUncheckedCreateWithoutAccountInput>
  }

  export type PortalUpdateWithoutAccountInput = {
    users?: PortalUserUpdateManyWithoutPortalInput
  }

  export type PortalUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    users?: PortalUserUncheckedUpdateManyWithoutPortalInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutAccountInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutAccountInput, ProjectUncheckedUpdateWithoutAccountInput>
    create: XOR<ProjectCreateWithoutAccountInput, ProjectUncheckedCreateWithoutAccountInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutAccountInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutAccountInput, ProjectUncheckedUpdateWithoutAccountInput>
  }

  export type ProjectUpdateManyWithWhereWithoutAccountInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectsInput>
  }

  export type FormCreateWithoutContactsInput = {
    name: string
    website: WebsiteCreateNestedOneWithoutFormsInput
    form_submissions?: FormSubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutContactsInput = {
    id?: number
    name: string
    website_id: number
    form_submissions?: FormSubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutContactsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutContactsInput, FormUncheckedCreateWithoutContactsInput>
  }

  export type AccountCreateWithoutContactsInput = {
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserCreateNestedManyWithoutAccountsInput
    website?: WebsiteCreateNestedManyWithoutAccountInput
    portal?: PortalCreateNestedOneWithoutAccountInput
    projects?: ProjectCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutContactsInput = {
    id?: number
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserUncheckedCreateNestedManyWithoutAccountsInput
    website?: WebsiteUncheckedCreateNestedManyWithoutAccountInput
    portal?: PortalUncheckedCreateNestedOneWithoutAccountInput
    projects?: ProjectUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutContactsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutContactsInput, AccountUncheckedCreateWithoutContactsInput>
  }

  export type PortalInvitationCreateWithoutConatctInput = {
    token: string
    expiration_date: Date | string
  }

  export type PortalInvitationUncheckedCreateWithoutConatctInput = {
    token: string
    expiration_date: Date | string
  }

  export type PortalInvitationCreateOrConnectWithoutConatctInput = {
    where: PortalInvitationWhereUniqueInput
    create: XOR<PortalInvitationCreateWithoutConatctInput, PortalInvitationUncheckedCreateWithoutConatctInput>
  }

  export type PortalUserCreateWithoutContactInput = {
    password: string
    portal: PortalCreateNestedOneWithoutUsersInput
  }

  export type PortalUserUncheckedCreateWithoutContactInput = {
    password: string
    portal_id: number
  }

  export type PortalUserCreateOrConnectWithoutContactInput = {
    where: PortalUserWhereUniqueInput
    create: XOR<PortalUserCreateWithoutContactInput, PortalUserUncheckedCreateWithoutContactInput>
  }

  export type ProjectCreateWithoutContactsInput = {
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    users?: UserCreateNestedManyWithoutProjectsInput
    account?: AccountCreateNestedOneWithoutProjectsInput
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutContactsInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    users?: UserUncheckedCreateNestedManyWithoutProjectsInput
    account_id?: number | null
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutContactsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutContactsInput, ProjectUncheckedCreateWithoutContactsInput>
  }

  export type FormUpsertWithWhereUniqueWithoutContactsInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutContactsInput, FormUncheckedUpdateWithoutContactsInput>
    create: XOR<FormCreateWithoutContactsInput, FormUncheckedCreateWithoutContactsInput>
  }

  export type FormUpdateWithWhereUniqueWithoutContactsInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutContactsInput, FormUncheckedUpdateWithoutContactsInput>
  }

  export type FormUpdateManyWithWhereWithoutContactsInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutFormsInput>
  }

  export type FormScalarWhereInput = {
    AND?: Enumerable<FormScalarWhereInput>
    OR?: Enumerable<FormScalarWhereInput>
    NOT?: Enumerable<FormScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    website_id?: IntFilter | number
  }

  export type AccountUpsertWithWhereUniqueWithoutContactsInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutContactsInput, AccountUncheckedUpdateWithoutContactsInput>
    create: XOR<AccountCreateWithoutContactsInput, AccountUncheckedCreateWithoutContactsInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutContactsInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutContactsInput, AccountUncheckedUpdateWithoutContactsInput>
  }

  export type AccountUpdateManyWithWhereWithoutContactsInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountInput>
  }

  export type PortalInvitationUpsertWithoutConatctInput = {
    update: XOR<PortalInvitationUpdateWithoutConatctInput, PortalInvitationUncheckedUpdateWithoutConatctInput>
    create: XOR<PortalInvitationCreateWithoutConatctInput, PortalInvitationUncheckedCreateWithoutConatctInput>
  }

  export type PortalInvitationUpdateWithoutConatctInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalInvitationUncheckedUpdateWithoutConatctInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalUserUpsertWithoutContactInput = {
    update: XOR<PortalUserUpdateWithoutContactInput, PortalUserUncheckedUpdateWithoutContactInput>
    create: XOR<PortalUserCreateWithoutContactInput, PortalUserUncheckedCreateWithoutContactInput>
  }

  export type PortalUserUpdateWithoutContactInput = {
    password?: StringFieldUpdateOperationsInput | string
    portal?: PortalUpdateOneRequiredWithoutUsersInput
  }

  export type PortalUserUncheckedUpdateWithoutContactInput = {
    password?: StringFieldUpdateOperationsInput | string
    portal_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUpsertWithoutContactsInput = {
    update: XOR<ProjectUpdateWithoutContactsInput, ProjectUncheckedUpdateWithoutContactsInput>
    create: XOR<ProjectCreateWithoutContactsInput, ProjectUncheckedCreateWithoutContactsInput>
  }

  export type ProjectUpdateWithoutContactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutProjectsInput
    account?: AccountUpdateOneWithoutProjectsInput
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateWithoutWebsiteInput = {
    name: string
    contacts?: ContactCreateNestedManyWithoutFormsInput
    form_submissions?: FormSubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutWebsiteInput = {
    id?: number
    name: string
    contacts?: ContactUncheckedCreateNestedManyWithoutFormsInput
    form_submissions?: FormSubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutWebsiteInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutWebsiteInput, FormUncheckedCreateWithoutWebsiteInput>
  }

  export type FormCreateManyWebsiteInputEnvelope = {
    data: Enumerable<FormCreateManyWebsiteInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWebsiteInput = {
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    projects?: ProjectCreateNestedManyWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutWebsiteInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutUsersInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUsersInput
    group_id?: number | null
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutWebsiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebsiteInput, UserUncheckedCreateWithoutWebsiteInput>
  }

  export type AccountCreateWithoutWebsiteInput = {
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserCreateNestedManyWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    portal?: PortalCreateNestedOneWithoutAccountInput
    projects?: ProjectCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutWebsiteInput = {
    id?: number
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserUncheckedCreateNestedManyWithoutAccountsInput
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    portal?: PortalUncheckedCreateNestedOneWithoutAccountInput
    projects?: ProjectUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutWebsiteInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutWebsiteInput, AccountUncheckedCreateWithoutWebsiteInput>
  }

  export type FormUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutWebsiteInput, FormUncheckedUpdateWithoutWebsiteInput>
    create: XOR<FormCreateWithoutWebsiteInput, FormUncheckedCreateWithoutWebsiteInput>
  }

  export type FormUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutWebsiteInput, FormUncheckedUpdateWithoutWebsiteInput>
  }

  export type FormUpdateManyWithWhereWithoutWebsiteInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutFormsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWebsiteInput, UserUncheckedUpdateWithoutWebsiteInput>
    create: XOR<UserCreateWithoutWebsiteInput, UserUncheckedCreateWithoutWebsiteInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWebsiteInput, UserUncheckedUpdateWithoutWebsiteInput>
  }

  export type UserUpdateManyWithWhereWithoutWebsiteInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type AccountUpsertWithoutWebsiteInput = {
    update: XOR<AccountUpdateWithoutWebsiteInput, AccountUncheckedUpdateWithoutWebsiteInput>
    create: XOR<AccountCreateWithoutWebsiteInput, AccountUncheckedCreateWithoutWebsiteInput>
  }

  export type AccountUpdateWithoutWebsiteInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutAccountsInput
    contacts?: ContactUpdateManyWithoutAccountInput
    portal?: PortalUpdateOneWithoutAccountInput
    projects?: ProjectUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutAccountsInput
    contacts?: ContactUncheckedUpdateManyWithoutAccountInput
    portal?: PortalUncheckedUpdateOneWithoutAccountInput
    projects?: ProjectUncheckedUpdateManyWithoutAccountInput
  }

  export type ContactCreateWithoutPortal_userInput = {
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormCreateNestedManyWithoutContactsInput
    account?: AccountCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationCreateNestedOneWithoutConatctInput
    Project?: ProjectCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutPortal_userInput = {
    id?: number
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormUncheckedCreateNestedManyWithoutContactsInput
    account?: AccountUncheckedCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedCreateNestedOneWithoutConatctInput
    projectId?: number | null
  }

  export type ContactCreateOrConnectWithoutPortal_userInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutPortal_userInput, ContactUncheckedCreateWithoutPortal_userInput>
  }

  export type PortalCreateWithoutUsersInput = {
    account: AccountCreateNestedOneWithoutPortalInput
  }

  export type PortalUncheckedCreateWithoutUsersInput = {
    id?: number
    account_id: number
  }

  export type PortalCreateOrConnectWithoutUsersInput = {
    where: PortalWhereUniqueInput
    create: XOR<PortalCreateWithoutUsersInput, PortalUncheckedCreateWithoutUsersInput>
  }

  export type ContactUpsertWithoutPortal_userInput = {
    update: XOR<ContactUpdateWithoutPortal_userInput, ContactUncheckedUpdateWithoutPortal_userInput>
    create: XOR<ContactCreateWithoutPortal_userInput, ContactUncheckedCreateWithoutPortal_userInput>
  }

  export type ContactUpdateWithoutPortal_userInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUpdateManyWithoutContactsInput
    account?: AccountUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUpdateOneWithoutConatctInput
    Project?: ProjectUpdateOneWithoutContactsInput
  }

  export type ContactUncheckedUpdateWithoutPortal_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUncheckedUpdateManyWithoutContactsInput
    account?: AccountUncheckedUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedUpdateOneWithoutConatctInput
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PortalUpsertWithoutUsersInput = {
    update: XOR<PortalUpdateWithoutUsersInput, PortalUncheckedUpdateWithoutUsersInput>
    create: XOR<PortalCreateWithoutUsersInput, PortalUncheckedCreateWithoutUsersInput>
  }

  export type PortalUpdateWithoutUsersInput = {
    account?: AccountUpdateOneRequiredWithoutPortalInput
  }

  export type PortalUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
  }

  export type ContactCreateWithoutPortal_tokenInput = {
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormCreateNestedManyWithoutContactsInput
    account?: AccountCreateNestedManyWithoutContactsInput
    portal_user?: PortalUserCreateNestedOneWithoutContactInput
    Project?: ProjectCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutPortal_tokenInput = {
    id?: number
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    forms?: FormUncheckedCreateNestedManyWithoutContactsInput
    account?: AccountUncheckedCreateNestedManyWithoutContactsInput
    portal_user?: PortalUserUncheckedCreateNestedOneWithoutContactInput
    projectId?: number | null
  }

  export type ContactCreateOrConnectWithoutPortal_tokenInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutPortal_tokenInput, ContactUncheckedCreateWithoutPortal_tokenInput>
  }

  export type ContactUpsertWithoutPortal_tokenInput = {
    update: XOR<ContactUpdateWithoutPortal_tokenInput, ContactUncheckedUpdateWithoutPortal_tokenInput>
    create: XOR<ContactCreateWithoutPortal_tokenInput, ContactUncheckedCreateWithoutPortal_tokenInput>
  }

  export type ContactUpdateWithoutPortal_tokenInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUpdateManyWithoutContactsInput
    account?: AccountUpdateManyWithoutContactsInput
    portal_user?: PortalUserUpdateOneWithoutContactInput
    Project?: ProjectUpdateOneWithoutContactsInput
  }

  export type ContactUncheckedUpdateWithoutPortal_tokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUncheckedUpdateManyWithoutContactsInput
    account?: AccountUncheckedUpdateManyWithoutContactsInput
    portal_user?: PortalUserUncheckedUpdateOneWithoutContactInput
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PortalUserCreateWithoutPortalInput = {
    password: string
    contact: ContactCreateNestedOneWithoutPortal_userInput
  }

  export type PortalUserUncheckedCreateWithoutPortalInput = {
    password: string
    contact_id: number
  }

  export type PortalUserCreateOrConnectWithoutPortalInput = {
    where: PortalUserWhereUniqueInput
    create: XOR<PortalUserCreateWithoutPortalInput, PortalUserUncheckedCreateWithoutPortalInput>
  }

  export type PortalUserCreateManyPortalInputEnvelope = {
    data: Enumerable<PortalUserCreateManyPortalInput>
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutPortalInput = {
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserCreateNestedManyWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    website?: WebsiteCreateNestedManyWithoutAccountInput
    projects?: ProjectCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutPortalInput = {
    id?: number
    name: string
    industry?: string | null
    phone?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    code?: string | null
    country?: string | null
    users?: UserUncheckedCreateNestedManyWithoutAccountsInput
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    website?: WebsiteUncheckedCreateNestedManyWithoutAccountInput
    projects?: ProjectUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutPortalInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPortalInput, AccountUncheckedCreateWithoutPortalInput>
  }

  export type PortalUserUpsertWithWhereUniqueWithoutPortalInput = {
    where: PortalUserWhereUniqueInput
    update: XOR<PortalUserUpdateWithoutPortalInput, PortalUserUncheckedUpdateWithoutPortalInput>
    create: XOR<PortalUserCreateWithoutPortalInput, PortalUserUncheckedCreateWithoutPortalInput>
  }

  export type PortalUserUpdateWithWhereUniqueWithoutPortalInput = {
    where: PortalUserWhereUniqueInput
    data: XOR<PortalUserUpdateWithoutPortalInput, PortalUserUncheckedUpdateWithoutPortalInput>
  }

  export type PortalUserUpdateManyWithWhereWithoutPortalInput = {
    where: PortalUserScalarWhereInput
    data: XOR<PortalUserUpdateManyMutationInput, PortalUserUncheckedUpdateManyWithoutUsersInput>
  }

  export type PortalUserScalarWhereInput = {
    AND?: Enumerable<PortalUserScalarWhereInput>
    OR?: Enumerable<PortalUserScalarWhereInput>
    NOT?: Enumerable<PortalUserScalarWhereInput>
    password?: StringFilter | string
    contact_id?: IntFilter | number
    portal_id?: IntFilter | number
  }

  export type AccountUpsertWithoutPortalInput = {
    update: XOR<AccountUpdateWithoutPortalInput, AccountUncheckedUpdateWithoutPortalInput>
    create: XOR<AccountCreateWithoutPortalInput, AccountUncheckedCreateWithoutPortalInput>
  }

  export type AccountUpdateWithoutPortalInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutAccountsInput
    contacts?: ContactUpdateManyWithoutAccountInput
    website?: WebsiteUpdateManyWithoutAccountInput
    projects?: ProjectUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateWithoutPortalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutAccountsInput
    contacts?: ContactUncheckedUpdateManyWithoutAccountInput
    website?: WebsiteUncheckedUpdateManyWithoutAccountInput
    projects?: ProjectUncheckedUpdateManyWithoutAccountInput
  }

  export type WebsiteCreateWithoutFormsInput = {
    url: string
    users?: UserCreateNestedManyWithoutWebsiteInput
    account: AccountCreateNestedOneWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutFormsInput = {
    id?: number
    account_id: number
    url: string
    users?: UserUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutFormsInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutFormsInput, WebsiteUncheckedCreateWithoutFormsInput>
  }

  export type ContactCreateWithoutFormsInput = {
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    account?: AccountCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationCreateNestedOneWithoutConatctInput
    portal_user?: PortalUserCreateNestedOneWithoutContactInput
    Project?: ProjectCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutFormsInput = {
    id?: number
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
    account?: AccountUncheckedCreateNestedManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedCreateNestedOneWithoutConatctInput
    portal_user?: PortalUserUncheckedCreateNestedOneWithoutContactInput
    projectId?: number | null
  }

  export type ContactCreateOrConnectWithoutFormsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutFormsInput, ContactUncheckedCreateWithoutFormsInput>
  }

  export type FormSubmissionCreateWithoutFormInput = {
    data: JsonNullValueInput | InputJsonValue
    submittedDate?: Date | string
  }

  export type FormSubmissionUncheckedCreateWithoutFormInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
    submittedDate?: Date | string
  }

  export type FormSubmissionCreateOrConnectWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    create: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput>
  }

  export type FormSubmissionCreateManyFormInputEnvelope = {
    data: Enumerable<FormSubmissionCreateManyFormInput>
    skipDuplicates?: boolean
  }

  export type WebsiteUpsertWithoutFormsInput = {
    update: XOR<WebsiteUpdateWithoutFormsInput, WebsiteUncheckedUpdateWithoutFormsInput>
    create: XOR<WebsiteCreateWithoutFormsInput, WebsiteUncheckedCreateWithoutFormsInput>
  }

  export type WebsiteUpdateWithoutFormsInput = {
    url?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutWebsiteInput
    account?: AccountUpdateOneRequiredWithoutWebsiteInput
  }

  export type WebsiteUncheckedUpdateWithoutFormsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutWebsiteInput
  }

  export type ContactUpsertWithWhereUniqueWithoutFormsInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutFormsInput, ContactUncheckedUpdateWithoutFormsInput>
    create: XOR<ContactCreateWithoutFormsInput, ContactUncheckedCreateWithoutFormsInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutFormsInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutFormsInput, ContactUncheckedUpdateWithoutFormsInput>
  }

  export type ContactUpdateManyWithWhereWithoutFormsInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutContactsInput>
  }

  export type FormSubmissionUpsertWithWhereUniqueWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    update: XOR<FormSubmissionUpdateWithoutFormInput, FormSubmissionUncheckedUpdateWithoutFormInput>
    create: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput>
  }

  export type FormSubmissionUpdateWithWhereUniqueWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    data: XOR<FormSubmissionUpdateWithoutFormInput, FormSubmissionUncheckedUpdateWithoutFormInput>
  }

  export type FormSubmissionUpdateManyWithWhereWithoutFormInput = {
    where: FormSubmissionScalarWhereInput
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyWithoutForm_submissionsInput>
  }

  export type FormSubmissionScalarWhereInput = {
    AND?: Enumerable<FormSubmissionScalarWhereInput>
    OR?: Enumerable<FormSubmissionScalarWhereInput>
    NOT?: Enumerable<FormSubmissionScalarWhereInput>
    id?: IntFilter | number
    data?: JsonFilter
    from_id?: IntFilter | number
    submittedDate?: DateTimeFilter | Date | string
  }

  export type FormCreateWithoutForm_submissionsInput = {
    name: string
    website: WebsiteCreateNestedOneWithoutFormsInput
    contacts?: ContactCreateNestedManyWithoutFormsInput
  }

  export type FormUncheckedCreateWithoutForm_submissionsInput = {
    id?: number
    name: string
    website_id: number
    contacts?: ContactUncheckedCreateNestedManyWithoutFormsInput
  }

  export type FormCreateOrConnectWithoutForm_submissionsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutForm_submissionsInput, FormUncheckedCreateWithoutForm_submissionsInput>
  }

  export type FormUpsertWithoutForm_submissionsInput = {
    update: XOR<FormUpdateWithoutForm_submissionsInput, FormUncheckedUpdateWithoutForm_submissionsInput>
    create: XOR<FormCreateWithoutForm_submissionsInput, FormUncheckedCreateWithoutForm_submissionsInput>
  }

  export type FormUpdateWithoutForm_submissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    website?: WebsiteUpdateOneRequiredWithoutFormsInput
    contacts?: ContactUpdateManyWithoutFormsInput
  }

  export type FormUncheckedUpdateWithoutForm_submissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    website_id?: IntFieldUpdateOperationsInput | number
    contacts?: ContactUncheckedUpdateManyWithoutFormsInput
  }

  export type WebsiteUpdateWithoutUsersInput = {
    url?: StringFieldUpdateOperationsInput | string
    forms?: FormUpdateManyWithoutWebsiteInput
    account?: AccountUpdateOneRequiredWithoutWebsiteInput
  }

  export type WebsiteUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    forms?: FormUncheckedUpdateManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedUpdateManyWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUpdateManyWithoutProjectInput
    account?: AccountUpdateOneWithoutProjectsInput
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutProjectInput
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUpdateManyWithoutAccountInput
    website?: WebsiteUpdateManyWithoutAccountInput
    portal?: PortalUpdateOneWithoutAccountInput
    projects?: ProjectUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutAccountInput
    website?: WebsiteUncheckedUpdateManyWithoutAccountInput
    portal?: PortalUncheckedUpdateOneWithoutAccountInput
    projects?: ProjectUncheckedUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyGroupInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name?: string | null
    title?: string | null
    clickup_uid?: string | null
    slack_uid?: string | null
    zoho_uid?: string | null
    bio?: string | null
    role?: UserRole
    createdAt?: Date | string
  }

  export type UserUpdateWithoutGroupInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: WebsiteUpdateManyWithoutUsersInput
    projects?: ProjectUpdateManyWithoutUsersInput
    accounts?: AccountUpdateManyWithoutUsersInput
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: WebsiteUncheckedUpdateManyWithoutUsersInput
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    accounts?: AccountUncheckedUpdateManyWithoutUsersInput
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyProjectInput = {
    id?: number
    first_name: string
    last_name: string
    title?: string
    email: string
    phone?: string | null
    portal_uid?: number | null
  }

  export type ContactUpdateWithoutProjectInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUpdateManyWithoutContactsInput
    account?: AccountUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUpdateOneWithoutConatctInput
    portal_user?: PortalUserUpdateOneWithoutContactInput
  }

  export type ContactUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUncheckedUpdateManyWithoutContactsInput
    account?: AccountUncheckedUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedUpdateOneWithoutConatctInput
    portal_user?: PortalUserUncheckedUpdateOneWithoutContactInput
  }

  export type ContactUncheckedUpdateManyWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpdateWithoutProjectsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: WebsiteUpdateManyWithoutUsersInput
    accounts?: AccountUpdateManyWithoutUsersInput
    group?: GroupUpdateOneWithoutUsersInput
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: WebsiteUncheckedUpdateManyWithoutUsersInput
    accounts?: AccountUncheckedUpdateManyWithoutUsersInput
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteCreateManyAccountInput = {
    id?: number
    url: string
  }

  export type ProjectCreateManyAccountInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    slack_channel?: string | null
    due_date?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: WebsiteUpdateManyWithoutUsersInput
    projects?: ProjectUpdateManyWithoutUsersInput
    group?: GroupUpdateOneWithoutUsersInput
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: WebsiteUncheckedUpdateManyWithoutUsersInput
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutAccountInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUpdateOneWithoutConatctInput
    portal_user?: PortalUserUpdateOneWithoutContactInput
    Project?: ProjectUpdateOneWithoutContactsInput
  }

  export type ContactUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    forms?: FormUncheckedUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedUpdateOneWithoutConatctInput
    portal_user?: PortalUserUncheckedUpdateOneWithoutContactInput
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WebsiteUpdateWithoutAccountInput = {
    url?: StringFieldUpdateOperationsInput | string
    forms?: FormUpdateManyWithoutWebsiteInput
    users?: UserUpdateManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    forms?: FormUncheckedUpdateManyWithoutWebsiteInput
    users?: UserUncheckedUpdateManyWithoutWebsiteInput
  }

  export type ProjectUpdateWithoutAccountInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUpdateManyWithoutProjectInput
    users?: UserUpdateManyWithoutProjectsInput
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slack_channel?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutProjectInput
    users?: UserUncheckedUpdateManyWithoutProjectsInput
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUpdateWithoutContactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    website?: WebsiteUpdateOneRequiredWithoutFormsInput
    form_submissions?: FormSubmissionUpdateManyWithoutFormInput
  }

  export type FormUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    website_id?: IntFieldUpdateOperationsInput | number
    form_submissions?: FormSubmissionUncheckedUpdateManyWithoutFormInput
  }

  export type FormUncheckedUpdateManyWithoutFormsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    website_id?: IntFieldUpdateOperationsInput | number
  }

  export type AccountUpdateWithoutContactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutAccountsInput
    website?: WebsiteUpdateManyWithoutAccountInput
    portal?: PortalUpdateOneWithoutAccountInput
    projects?: ProjectUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutAccountsInput
    website?: WebsiteUncheckedUpdateManyWithoutAccountInput
    portal?: PortalUncheckedUpdateOneWithoutAccountInput
    projects?: ProjectUncheckedUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormCreateManyWebsiteInput = {
    id?: number
    name: string
  }

  export type FormUpdateWithoutWebsiteInput = {
    name?: StringFieldUpdateOperationsInput | string
    contacts?: ContactUpdateManyWithoutFormsInput
    form_submissions?: FormSubmissionUpdateManyWithoutFormInput
  }

  export type FormUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contacts?: ContactUncheckedUpdateManyWithoutFormsInput
    form_submissions?: FormSubmissionUncheckedUpdateManyWithoutFormInput
  }

  export type UserUpdateWithoutWebsiteInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutUsersInput
    accounts?: AccountUpdateManyWithoutUsersInput
    group?: GroupUpdateOneWithoutUsersInput
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    clickup_uid?: NullableStringFieldUpdateOperationsInput | string | null
    slack_uid?: NullableStringFieldUpdateOperationsInput | string | null
    zoho_uid?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutUsersInput
    accounts?: AccountUncheckedUpdateManyWithoutUsersInput
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalUserCreateManyPortalInput = {
    password: string
    contact_id: number
  }

  export type PortalUserUpdateWithoutPortalInput = {
    password?: StringFieldUpdateOperationsInput | string
    contact?: ContactUpdateOneRequiredWithoutPortal_userInput
  }

  export type PortalUserUncheckedUpdateWithoutPortalInput = {
    password?: StringFieldUpdateOperationsInput | string
    contact_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortalUserUncheckedUpdateManyWithoutUsersInput = {
    password?: StringFieldUpdateOperationsInput | string
    contact_id?: IntFieldUpdateOperationsInput | number
  }

  export type FormSubmissionCreateManyFormInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
    submittedDate?: Date | string
  }

  export type ContactUpdateWithoutFormsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    account?: AccountUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUpdateOneWithoutConatctInput
    portal_user?: PortalUserUpdateOneWithoutContactInput
    Project?: ProjectUpdateOneWithoutContactsInput
  }

  export type ContactUncheckedUpdateWithoutFormsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    portal_uid?: NullableIntFieldUpdateOperationsInput | number | null
    account?: AccountUncheckedUpdateManyWithoutContactsInput
    portal_token?: PortalInvitationUncheckedUpdateOneWithoutConatctInput
    portal_user?: PortalUserUncheckedUpdateOneWithoutContactInput
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FormSubmissionUpdateWithoutFormInput = {
    data?: JsonNullValueInput | InputJsonValue
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUncheckedUpdateWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUncheckedUpdateManyWithoutForm_submissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}