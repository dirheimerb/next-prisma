/**
 * Client
 **/

import * as runtime from './runtime'
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & { [prisma]: true }
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends PrismaPromise<infer X>
      ? X
      : UnwrapPromise<Tuple[K]>
    : UnwrapPromise<Tuple[K]>
}

/**
 * Model Account
 */

export type Account = {
  id: string
  userId: string
  providerType: string
  provider: string
  providerAccountId: string
  refreshToken: string | null
  accessToken: string | null
  accessTokenExpires: Date | null
  idToken: string | null
  sessionState: string | null
  oauthTokenSecret: string | null
  oauthToken: string | null
  createdAt: Date
  updatedAt: Date
  scope: string | null
  token_type: string | null
}

/**
 * Model Session
 */

export type Session = {
  id: number
  sessionToken: string
  userId: string
  expires: Date
}

/**
 * Model User
 */

export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  createdAt: Date
  updatedAt: Date
  username: string
  password: string
}

/**
 * Model VerificationToken
 */

export type VerificationToken = {
  id: string
  identifier: string
  token: string
  expires: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model VerificationRequest
 */

export type VerificationRequest = {
  id: string
  identifier: string
  token: string
  expires: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Link
 */

export type Link = {
  id: string
  createdAt: Date
  updatedAt: Date
  url: string
  shortUrl: string
  userId: string | null
}

/**
 * Model Post
 */

export type Post = {
  id: string
  title: string
  content: string | null
  published: boolean
  authorId: string | null
  createdAt: Date
  updatedAt: Date
  viewCount: number
  postId: string | null
  tagId: string | null
}

/**
 * Model Profile
 */

export type Profile = {
  id: number
  bio: string
  userId: string
}

/**
 * Model Tag
 */

export type Tag = {
  id: string
  tag: string
}

/**
 * Model Comment
 */

export type Comment = {
  id: string
  createdAt: Date
  comment: string
  writtenById: string
  postId: string
  userId: string | null
}

/**
 * Model Invite
 */

export type Invite = {
  id: string
  dateSent: Date
  email: string
  accountId: string | null
  isValid: boolean
}

/**
 * Model Customer
 */

export type Customer = {
  id: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Product
 */

export type Product = {
  id: string
  active: boolean
  name: string
  description: string | null
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Price
 */

export type Price = {
  id: string
  productId: string
  active: boolean
  currency: string
  unitAmount: number | null
  interval_count: number | null
  trial_period_days: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Subscription
 */

export type Subscription = {
  id: string
  userId: string
  priceId: string
  start_date: Date | null
  ended_at: Date | null
  trial_end: Date | null
  trial_start: Date | null
  cancel_at: Date | null
  cancel_at_period_end: boolean | null
  canceled_at: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
> {
  /**
   * @private
   */
  private fetcher
  /**
   * @private
   */
  private readonly dmmf
  /**
   * @private
   */
  private connectionPromise?
  /**
   * @private
   */
  private disconnectionPromise?
  /**
   * @private
   */
  private readonly engineConfig
  /**
   * @private
   */
  private readonly measurePerformance

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>)
  $on<V extends U | 'beforeExit'>(
    eventType: V,
    callback: (
      event: V extends 'query'
        ? Prisma.QueryEvent
        : V extends 'beforeExit'
        ? () => Promise<void>
        : Prisma.LogEvent,
    ) => void,
  ): void

  /**
   * Connect with the database
   */
  $connect(): Promise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = any>(
    query: string | TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): PrismaPromise<number>

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = any>(
    query: string | TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): PrismaPromise<T>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(
    arg: [...P],
  ): Promise<UnwrapTuple<P>>

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<GlobalReject>

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   */
  get session(): Prisma.SessionDelegate<GlobalReject>

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<GlobalReject>

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more VerificationTokens
   * const verificationTokens = await prisma.verificationToken.findMany()
   * ```
   */
  get verificationToken(): Prisma.VerificationTokenDelegate<GlobalReject>

  /**
   * `prisma.verificationRequest`: Exposes CRUD operations for the **VerificationRequest** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more VerificationRequests
   * const verificationRequests = await prisma.verificationRequest.findMany()
   * ```
   */
  get verificationRequest(): Prisma.VerificationRequestDelegate<GlobalReject>

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Links
   * const links = await prisma.link.findMany()
   * ```
   */
  get link(): Prisma.LinkDelegate<GlobalReject>

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<GlobalReject>

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   */
  get profile(): Prisma.ProfileDelegate<GlobalReject>

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<GlobalReject>

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   */
  get comment(): Prisma.CommentDelegate<GlobalReject>

  /**
   * `prisma.invite`: Exposes CRUD operations for the **Invite** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Invites
   * const invites = await prisma.invite.findMany()
   * ```
   */
  get invite(): Prisma.InviteDelegate<GlobalReject>

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.CustomerDelegate<GlobalReject>

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.ProductDelegate<GlobalReject>

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Prices
   * const prices = await prisma.price.findMany()
   * ```
   */
  get price(): Prisma.PriceDelegate<GlobalReject>

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscription.findMany()
   * ```
   */
  get subscription(): Prisma.SubscriptionDelegate<GlobalReject>
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
   * Prisma Client JS version: 2.24.1
   * Query Engine version: 18095475d5ee64536e2f93995e48ad800737a9e4
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
  export type JsonObject = { [Key in string]?: JsonValue }

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonObject
    | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = { [Key in string]?: JsonValue }

  export interface InputJsonArray extends Array<JsonValue> {}

  export type InputJsonValue =
    | undefined
    | string
    | number
    | boolean
    | null
    | InputJsonObject
    | InputJsonArray
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
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
    PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U

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

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
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
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

  type Exact<A, W = unknown> = W extends unknown
    ? A extends Narrowable
      ? Cast<A, W>
      : Cast<
          { [K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never },
          { [K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K] }
        >
    : never

  type Narrowable = string | number | boolean | bigint

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  export function validator<V>(): <S>(select: Exact<S, V>) => S

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
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
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
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
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T

  class PrismaClientFetcher {
    private readonly prisma
    private readonly debug
    private readonly hooks?
    constructor(
      prisma: PrismaClient<any, any>,
      debug?: boolean,
      hooks?: Hooks | undefined,
    )
    request<T>(
      document: any,
      dataPath?: string[],
      rootField?: string,
      typeName?: string,
      isList?: boolean,
      callsite?: string,
    ): Promise<T>
    sanitizeMessage(message: string): string
    protected unpack(
      document: any,
      data: any,
      path: string[],
      rootField?: string,
      isList?: boolean,
    ): any
  }

  export const ModelName: {
    Account: 'Account'
    Session: 'Session'
    User: 'User'
    VerificationToken: 'VerificationToken'
    VerificationRequest: 'VerificationRequest'
    Link: 'Link'
    Post: 'Post'
    Profile: 'Profile'
    Tag: 'Tag'
    Comment: 'Comment'
    Invite: 'Invite'
    Customer: 'Customer'
    Product: 'Product'
    Price: 'Price'
    Subscription: 'Subscription'
  }

  export type ModelName = typeof ModelName[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation = {
    [P in 'findUnique' | 'findFirst']?: RejectPerModel | RejectOnNotFound
  }
  type IsReject<T> = T extends true
    ? True
    : T extends (err: Error) => Error
    ? True
    : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName,
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
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
    beforeRequest?: (options: {
      query: string
      path: string[]
      rootField?: string
      typeName?: string
      document: any
    }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
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
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
    max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    providerType: string | null
    provider: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    idToken: string | null
    sessionState: string | null
    oauthTokenSecret: string | null
    oauthToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    scope: string | null
    token_type: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    providerType: string | null
    provider: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    idToken: string | null
    sessionState: string | null
    oauthTokenSecret: string | null
    oauthToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    scope: string | null
    token_type: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    providerType: number
    provider: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    accessTokenExpires: number
    idToken: number
    sessionState: number
    oauthTokenSecret: number
    oauthToken: number
    createdAt: number
    updatedAt: number
    scope: number
    token_type: number
    _all: number
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    idToken?: true
    sessionState?: true
    oauthTokenSecret?: true
    oauthToken?: true
    createdAt?: true
    updatedAt?: true
    scope?: true
    token_type?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    idToken?: true
    sessionState?: true
    oauthTokenSecret?: true
    oauthToken?: true
    createdAt?: true
    updatedAt?: true
    scope?: true
    token_type?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    idToken?: true
    sessionState?: true
    oauthTokenSecret?: true
    oauthToken?: true
    createdAt?: true
    updatedAt?: true
    scope?: true
    token_type?: true
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
    orderBy?: Enumerable<AccountOrderByInput>
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
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: AccountMaxAggregateInputType
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
    orderBy?: Enumerable<AccountOrderByInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    providerType: string
    provider: string
    providerAccountId: string
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    idToken: string | null
    sessionState: string | null
    oauthTokenSecret: string | null
    oauthToken: string | null
    createdAt: Date
    updatedAt: Date
    scope: string | null
    token_type: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Promise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AccountGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
          : GetScalarType<T[P], AccountGroupByOutputType[P]>
      }
    >
  >

  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    providerType?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    idToken?: boolean
    sessionState?: boolean
    oauthTokenSecret?: boolean
    oauthToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scope?: boolean
    token_type?: boolean
    invites?: boolean | InviteFindManyArgs
    user?: boolean | UserArgs
  }

  export type AccountInclude = {
    invites?: boolean | InviteFindManyArgs
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S,
  > = S extends true
    ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ? 'include' extends U
      ? Account & {
          [P in TrueKeys<S['include']>]: P extends 'invites'
            ? Array<InviteGetPayload<S['include'][P]>>
            : P extends 'user'
            ? UserGetPayload<S['include'][P]>
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Account
            ? Account[P]
            : P extends 'invites'
            ? Array<InviteGetPayload<S['select'][P]>>
            : P extends 'user'
            ? UserGetPayload<S['select'][P]>
            : never
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
    findUnique<
      T extends AccountFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, AccountFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Account'
    > extends True
      ? CheckSelect<
          T,
          Prisma__AccountClient<Account>,
          Prisma__AccountClient<AccountGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__AccountClient<Account | null>,
          Prisma__AccountClient<AccountGetPayload<T> | null>
        >

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
    findFirst<
      T extends AccountFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, AccountFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Account'
    > extends True
      ? CheckSelect<
          T,
          Prisma__AccountClient<Account>,
          Prisma__AccountClient<AccountGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__AccountClient<Account | null>,
          Prisma__AccountClient<AccountGetPayload<T> | null>
        >

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
      args?: SelectSubset<T, AccountFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Account>>,
      PrismaPromise<Array<AccountGetPayload<T>>>
    >

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
      args: SelectSubset<T, AccountCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__AccountClient<Account>,
      Prisma__AccountClient<AccountGetPayload<T>>
    >

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
      args: SelectSubset<T, AccountDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__AccountClient<Account>,
      Prisma__AccountClient<AccountGetPayload<T>>
    >

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
      args: SelectSubset<T, AccountUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__AccountClient<Account>,
      Prisma__AccountClient<AccountGetPayload<T>>
    >

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
      args?: SelectSubset<T, AccountDeleteManyArgs>,
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
      args: SelectSubset<T, AccountUpdateManyArgs>,
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
      args: SelectSubset<T, AccountUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__AccountClient<Account>,
      Prisma__AccountClient<AccountGetPayload<T>>
    >

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
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>,
    ): PrismaPromise<GetAccountAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAccountGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    invites<T extends InviteFindManyArgs = {}>(
      args?: Subset<T, InviteFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Invite>>,
      PrismaPromise<Array<InviteGetPayload<T>>>
    >

    user<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User | null>,
      Prisma__UserClient<UserGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
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
    orderBy?: Enumerable<AccountOrderByInput>
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
    orderBy?: Enumerable<AccountOrderByInput>
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
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
    max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }

  export type SessionAvgAggregateInputType = {
    id?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
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
    orderBy?: Enumerable<SessionOrderByInput>
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
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SessionAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
     **/
    avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SessionSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
     **/
    sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SessionMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SessionMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: SessionMaxAggregateInputType
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
    orderBy?: Enumerable<SessionOrderByInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Promise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SessionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
          : GetScalarType<T[P], SessionGroupByOutputType[P]>
      }
    >
  >

  export type SessionSelect = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserArgs
  }

  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S,
  > = S extends true
    ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ? 'include' extends U
      ? Session & {
          [P in TrueKeys<S['include']>]: P extends 'user'
            ? UserGetPayload<S['include'][P]>
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Session
            ? Session[P]
            : P extends 'user'
            ? UserGetPayload<S['select'][P]>
            : never
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
    findUnique<
      T extends SessionFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, SessionFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Session'
    > extends True
      ? CheckSelect<
          T,
          Prisma__SessionClient<Session>,
          Prisma__SessionClient<SessionGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__SessionClient<Session | null>,
          Prisma__SessionClient<SessionGetPayload<T> | null>
        >

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
    findFirst<
      T extends SessionFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, SessionFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Session'
    > extends True
      ? CheckSelect<
          T,
          Prisma__SessionClient<Session>,
          Prisma__SessionClient<SessionGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__SessionClient<Session | null>,
          Prisma__SessionClient<SessionGetPayload<T> | null>
        >

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
      args?: SelectSubset<T, SessionFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Session>>,
      PrismaPromise<Array<SessionGetPayload<T>>>
    >

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
      args: SelectSubset<T, SessionCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__SessionClient<Session>,
      Prisma__SessionClient<SessionGetPayload<T>>
    >

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
      args: SelectSubset<T, SessionDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__SessionClient<Session>,
      Prisma__SessionClient<SessionGetPayload<T>>
    >

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
      args: SelectSubset<T, SessionUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__SessionClient<Session>,
      Prisma__SessionClient<SessionGetPayload<T>>
    >

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
      args?: SelectSubset<T, SessionDeleteManyArgs>,
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
      args: SelectSubset<T, SessionUpdateManyArgs>,
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
      args: SelectSubset<T, SessionUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__SessionClient<Session>,
      Prisma__SessionClient<SessionGetPayload<T>>
    >

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
    aggregate<T extends SessionAggregateArgs>(
      args: Subset<T, SessionAggregateArgs>,
    ): PrismaPromise<GetSessionAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSessionGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    user<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User | null>,
      Prisma__UserClient<UserGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
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
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SessionInclude | null
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
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SessionInclude | null
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
    orderBy?: Enumerable<SessionOrderByInput>
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
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SessionInclude | null
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
    orderBy?: Enumerable<SessionOrderByInput>
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
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     *
     **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
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
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SessionInclude | null
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
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
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
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SessionInclude | null
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
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SessionInclude | null
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
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SessionInclude | null
  }

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    username: number
    password: number
    _all: number
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
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
    orderBy?: Enumerable<UserOrderByInput>
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
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: UserMaxAggregateInputType
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
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    accounts?: boolean | AccountFindManyArgs
    Comment?: boolean | CommentFindManyArgs
    links?: boolean | LinkFindManyArgs
    posts?: boolean | PostFindManyArgs
    profile?: boolean | ProfileArgs
    sessions?: boolean | SessionFindManyArgs
    customer?: boolean | CustomerArgs
  }

  export type UserInclude = {
    accounts?: boolean | AccountFindManyArgs
    Comment?: boolean | CommentFindManyArgs
    links?: boolean | LinkFindManyArgs
    posts?: boolean | PostFindManyArgs
    profile?: boolean | ProfileArgs
    sessions?: boolean | SessionFindManyArgs
    customer?: boolean | CustomerArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S,
  > = S extends true
    ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ? 'include' extends U
      ? User & {
          [P in TrueKeys<S['include']>]: P extends 'accounts'
            ? Array<AccountGetPayload<S['include'][P]>>
            : P extends 'Comment'
            ? Array<CommentGetPayload<S['include'][P]>>
            : P extends 'links'
            ? Array<LinkGetPayload<S['include'][P]>>
            : P extends 'posts'
            ? Array<PostGetPayload<S['include'][P]>>
            : P extends 'profile'
            ? ProfileGetPayload<S['include'][P]> | null
            : P extends 'sessions'
            ? Array<SessionGetPayload<S['include'][P]>>
            : P extends 'customer'
            ? CustomerGetPayload<S['include'][P]> | null
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof User
            ? User[P]
            : P extends 'accounts'
            ? Array<AccountGetPayload<S['select'][P]>>
            : P extends 'Comment'
            ? Array<CommentGetPayload<S['select'][P]>>
            : P extends 'links'
            ? Array<LinkGetPayload<S['select'][P]>>
            : P extends 'posts'
            ? Array<PostGetPayload<S['select'][P]>>
            : P extends 'profile'
            ? ProfileGetPayload<S['select'][P]> | null
            : P extends 'sessions'
            ? Array<SessionGetPayload<S['select'][P]>>
            : P extends 'customer'
            ? CustomerGetPayload<S['select'][P]> | null
            : never
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
    findUnique<
      T extends UserFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, UserFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'User'
    > extends True
      ? CheckSelect<
          T,
          Prisma__UserClient<User>,
          Prisma__UserClient<UserGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__UserClient<User | null>,
          Prisma__UserClient<UserGetPayload<T> | null>
        >

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
    findFirst<
      T extends UserFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, UserFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'User'
    > extends True
      ? CheckSelect<
          T,
          Prisma__UserClient<User>,
          Prisma__UserClient<UserGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__UserClient<User | null>,
          Prisma__UserClient<UserGetPayload<T> | null>
        >

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
      args?: SelectSubset<T, UserFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<User>>,
      PrismaPromise<Array<UserGetPayload<T>>>
    >

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
      args: SelectSubset<T, UserCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User>,
      Prisma__UserClient<UserGetPayload<T>>
    >

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
      args: SelectSubset<T, UserDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User>,
      Prisma__UserClient<UserGetPayload<T>>
    >

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
      args: SelectSubset<T, UserUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User>,
      Prisma__UserClient<UserGetPayload<T>>
    >

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
      args?: SelectSubset<T, UserDeleteManyArgs>,
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
      args: SelectSubset<T, UserUpdateManyArgs>,
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
      args: SelectSubset<T, UserUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User>,
      Prisma__UserClient<UserGetPayload<T>>
    >

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): PrismaPromise<GetUserAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    accounts<T extends AccountFindManyArgs = {}>(
      args?: Subset<T, AccountFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Account>>,
      PrismaPromise<Array<AccountGetPayload<T>>>
    >

    Comment<T extends CommentFindManyArgs = {}>(
      args?: Subset<T, CommentFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Comment>>,
      PrismaPromise<Array<CommentGetPayload<T>>>
    >

    links<T extends LinkFindManyArgs = {}>(
      args?: Subset<T, LinkFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Link>>,
      PrismaPromise<Array<LinkGetPayload<T>>>
    >

    posts<T extends PostFindManyArgs = {}>(
      args?: Subset<T, PostFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Post>>,
      PrismaPromise<Array<PostGetPayload<T>>>
    >

    profile<T extends ProfileArgs = {}>(
      args?: Subset<T, ProfileArgs>,
    ): CheckSelect<
      T,
      Prisma__ProfileClient<Profile | null>,
      Prisma__ProfileClient<ProfileGetPayload<T> | null>
    >

    sessions<T extends SessionFindManyArgs = {}>(
      args?: Subset<T, SessionFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Session>>,
      PrismaPromise<Array<SessionGetPayload<T>>>
    >

    customer<T extends CustomerArgs = {}>(
      args?: Subset<T, CustomerArgs>,
    ): CheckSelect<
      T,
      Prisma__CustomerClient<Customer | null>,
      Prisma__CustomerClient<CustomerGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
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
    orderBy?: Enumerable<UserOrderByInput>
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
    orderBy?: Enumerable<UserOrderByInput>
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
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
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
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
    max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs = {
    /**
     * Filter which VerificationToken to aggregate.
     *
     **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     *
     **/
    orderBy?: Enumerable<VerificationTokenOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VerificationTokens
     **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VerificationTokenMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<
    T extends VerificationTokenAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateVerificationToken]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }

  export type VerificationTokenGroupByArgs = {
    where?: VerificationTokenWhereInput
    orderBy?: Enumerable<VerificationTokenOrderByInput>
    by: Array<VerificationTokenScalarFieldEnum>
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<
    T extends VerificationTokenGroupByArgs,
  > = Promise<
    Array<
      PickArray<VerificationTokenGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof VerificationTokenGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
          : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
      }
    >
  >

  export type VerificationTokenSelect = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationTokenGetPayload<
    S extends boolean | null | undefined | VerificationTokenArgs,
    U = keyof S,
  > = S extends true
    ? VerificationToken
    : S extends undefined
    ? never
    : S extends VerificationTokenArgs | VerificationTokenFindManyArgs
    ? 'include' extends U
      ? VerificationToken
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof VerificationToken
            ? VerificationToken[P]
            : never
        }
      : VerificationToken
    : VerificationToken

  type VerificationTokenCountArgs = Merge<
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }
  >

  export interface VerificationTokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends VerificationTokenFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'VerificationToken'
    > extends True
      ? CheckSelect<
          T,
          Prisma__VerificationTokenClient<VerificationToken>,
          Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__VerificationTokenClient<VerificationToken | null>,
          Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null>
        >

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends VerificationTokenFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'VerificationToken'
    > extends True
      ? CheckSelect<
          T,
          Prisma__VerificationTokenClient<VerificationToken>,
          Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__VerificationTokenClient<VerificationToken | null>,
          Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null>
        >

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     *
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<VerificationToken>>,
      PrismaPromise<Array<VerificationTokenGetPayload<T>>>
    >

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     *
     **/
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__VerificationTokenClient<VerificationToken>,
      Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>
    >

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     *
     **/
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__VerificationTokenClient<VerificationToken>,
      Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>
    >

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__VerificationTokenClient<VerificationToken>,
      Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>
    >

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     **/
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__VerificationTokenClient<VerificationToken>,
      Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>
    >

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
     **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              VerificationTokenCountAggregateOutputType
            >
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(
      args: Subset<T, VerificationTokenAggregateArgs>,
    ): PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetVerificationTokenGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationTokenClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     *
     **/
    select?: VerificationTokenSelect | null
    /**
     * Throw an Error if a VerificationToken can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VerificationToken to fetch.
     *
     **/
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     *
     **/
    select?: VerificationTokenSelect | null
    /**
     * Throw an Error if a VerificationToken can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VerificationToken to fetch.
     *
     **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     *
     **/
    orderBy?: Enumerable<VerificationTokenOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VerificationTokens.
     *
     **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VerificationTokens.
     *
     **/
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     *
     **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationTokens to fetch.
     *
     **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     *
     **/
    orderBy?: Enumerable<VerificationTokenOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VerificationTokens.
     *
     **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     *
     **/
    skip?: number
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     *
     **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to create a VerificationToken.
     *
     **/
    data: XOR<
      VerificationTokenCreateInput,
      VerificationTokenUncheckedCreateInput
    >
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     *
     **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to update a VerificationToken.
     *
     **/
    data: XOR<
      VerificationTokenUpdateInput,
      VerificationTokenUncheckedUpdateInput
    >
    /**
     * Choose, which VerificationToken to update.
     *
     **/
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs = {
    data: XOR<
      VerificationTokenUpdateManyMutationInput,
      VerificationTokenUncheckedUpdateManyInput
    >
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     *
     **/
    select?: VerificationTokenSelect | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     *
     **/
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     *
     **/
    create: XOR<
      VerificationTokenCreateInput,
      VerificationTokenUncheckedCreateInput
    >
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<
      VerificationTokenUpdateInput,
      VerificationTokenUncheckedUpdateInput
    >
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     *
     **/
    select?: VerificationTokenSelect | null
    /**
     * Filter which VerificationToken to delete.
     *
     **/
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs = {
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     *
     **/
    select?: VerificationTokenSelect | null
  }

  /**
   * Model VerificationRequest
   */

  export type AggregateVerificationRequest = {
    _count: VerificationRequestCountAggregateOutputType | null
    count: VerificationRequestCountAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
    max: VerificationRequestMaxAggregateOutputType | null
  }

  export type VerificationRequestMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type VerificationRequestMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationRequestAggregateArgs = {
    /**
     * Filter which VerificationRequest to aggregate.
     *
     **/
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationRequests to fetch.
     *
     **/
    orderBy?: Enumerable<VerificationRequestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationRequests from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationRequests.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VerificationRequests
     **/
    _count?: true | VerificationRequestCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | VerificationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VerificationRequestMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: VerificationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VerificationRequestMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: VerificationRequestMaxAggregateInputType
  }

  export type GetVerificationRequestAggregateType<
    T extends VerificationRequestAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateVerificationRequest]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationRequest[P]>
      : GetScalarType<T[P], AggregateVerificationRequest[P]>
  }

  export type VerificationRequestGroupByArgs = {
    where?: VerificationRequestWhereInput
    orderBy?: Enumerable<VerificationRequestOrderByInput>
    by: Array<VerificationRequestScalarFieldEnum>
    having?: VerificationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationRequestCountAggregateInputType | true
    _min?: VerificationRequestMinAggregateInputType
    _max?: VerificationRequestMaxAggregateInputType
  }

  export type VerificationRequestGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationRequestCountAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
  }

  type GetVerificationRequestGroupByPayload<
    T extends VerificationRequestGroupByArgs,
  > = Promise<
    Array<
      PickArray<VerificationRequestGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof VerificationRequestGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
          : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
      }
    >
  >

  export type VerificationRequestSelect = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationRequestGetPayload<
    S extends boolean | null | undefined | VerificationRequestArgs,
    U = keyof S,
  > = S extends true
    ? VerificationRequest
    : S extends undefined
    ? never
    : S extends VerificationRequestArgs | VerificationRequestFindManyArgs
    ? 'include' extends U
      ? VerificationRequest
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof VerificationRequest
            ? VerificationRequest[P]
            : never
        }
      : VerificationRequest
    : VerificationRequest

  type VerificationRequestCountArgs = Merge<
    Omit<VerificationRequestFindManyArgs, 'select' | 'include'> & {
      select?: VerificationRequestCountAggregateInputType | true
    }
  >

  export interface VerificationRequestDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one VerificationRequest that matches the filter.
     * @param {VerificationRequestFindUniqueArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends VerificationRequestFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, VerificationRequestFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'VerificationRequest'
    > extends True
      ? CheckSelect<
          T,
          Prisma__VerificationRequestClient<VerificationRequest>,
          Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__VerificationRequestClient<VerificationRequest | null>,
          Prisma__VerificationRequestClient<VerificationRequestGetPayload<T> | null>
        >

    /**
     * Find the first VerificationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindFirstArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends VerificationRequestFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, VerificationRequestFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'VerificationRequest'
    > extends True
      ? CheckSelect<
          T,
          Prisma__VerificationRequestClient<VerificationRequest>,
          Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__VerificationRequestClient<VerificationRequest | null>,
          Prisma__VerificationRequestClient<VerificationRequestGetPayload<T> | null>
        >

    /**
     * Find zero or more VerificationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany()
     *
     * // Get first 10 VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const verificationRequestWithIdOnly = await prisma.verificationRequest.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends VerificationRequestFindManyArgs>(
      args?: SelectSubset<T, VerificationRequestFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<VerificationRequest>>,
      PrismaPromise<Array<VerificationRequestGetPayload<T>>>
    >

    /**
     * Create a VerificationRequest.
     * @param {VerificationRequestCreateArgs} args - Arguments to create a VerificationRequest.
     * @example
     * // Create one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.create({
     *   data: {
     *     // ... data to create a VerificationRequest
     *   }
     * })
     *
     **/
    create<T extends VerificationRequestCreateArgs>(
      args: SelectSubset<T, VerificationRequestCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__VerificationRequestClient<VerificationRequest>,
      Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>
    >

    /**
     * Delete a VerificationRequest.
     * @param {VerificationRequestDeleteArgs} args - Arguments to delete one VerificationRequest.
     * @example
     * // Delete one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.delete({
     *   where: {
     *     // ... filter to delete one VerificationRequest
     *   }
     * })
     *
     **/
    delete<T extends VerificationRequestDeleteArgs>(
      args: SelectSubset<T, VerificationRequestDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__VerificationRequestClient<VerificationRequest>,
      Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>
    >

    /**
     * Update one VerificationRequest.
     * @param {VerificationRequestUpdateArgs} args - Arguments to update one VerificationRequest.
     * @example
     * // Update one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends VerificationRequestUpdateArgs>(
      args: SelectSubset<T, VerificationRequestUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__VerificationRequestClient<VerificationRequest>,
      Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>
    >

    /**
     * Delete zero or more VerificationRequests.
     * @param {VerificationRequestDeleteManyArgs} args - Arguments to filter VerificationRequests to delete.
     * @example
     * // Delete a few VerificationRequests
     * const { count } = await prisma.verificationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends VerificationRequestDeleteManyArgs>(
      args?: SelectSubset<T, VerificationRequestDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationRequests
     * const verificationRequest = await prisma.verificationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends VerificationRequestUpdateManyArgs>(
      args: SelectSubset<T, VerificationRequestUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationRequest.
     * @param {VerificationRequestUpsertArgs} args - Arguments to update or create a VerificationRequest.
     * @example
     * // Update or create a VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.upsert({
     *   create: {
     *     // ... data to create a VerificationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationRequest we want to update
     *   }
     * })
     **/
    upsert<T extends VerificationRequestUpsertArgs>(
      args: SelectSubset<T, VerificationRequestUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__VerificationRequestClient<VerificationRequest>,
      Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>
    >

    /**
     * Count the number of VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestCountArgs} args - Arguments to filter VerificationRequests to count.
     * @example
     * // Count the number of VerificationRequests
     * const count = await prisma.verificationRequest.count({
     *   where: {
     *     // ... the filter for the VerificationRequests we want to count
     *   }
     * })
     **/
    count<T extends VerificationRequestCountArgs>(
      args?: Subset<T, VerificationRequestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              VerificationRequestCountAggregateOutputType
            >
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationRequestAggregateArgs>(
      args: Subset<T, VerificationRequestAggregateArgs>,
    ): PrismaPromise<GetVerificationRequestAggregateType<T>>

    /**
     * Group by VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestGroupByArgs} args - Group by arguments.
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
      T extends VerificationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationRequestGroupByArgs['orderBy'] }
        : { orderBy?: VerificationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, VerificationRequestGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetVerificationRequestGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationRequestClient<T>
    implements PrismaPromise<T>
  {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * VerificationRequest findUnique
   */
  export type VerificationRequestFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     *
     **/
    select?: VerificationRequestSelect | null
    /**
     * Throw an Error if a VerificationRequest can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VerificationRequest to fetch.
     *
     **/
    where: VerificationRequestWhereUniqueInput
  }

  /**
   * VerificationRequest findFirst
   */
  export type VerificationRequestFindFirstArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     *
     **/
    select?: VerificationRequestSelect | null
    /**
     * Throw an Error if a VerificationRequest can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VerificationRequest to fetch.
     *
     **/
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationRequests to fetch.
     *
     **/
    orderBy?: Enumerable<VerificationRequestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VerificationRequests.
     *
     **/
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationRequests from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationRequests.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VerificationRequests.
     *
     **/
    distinct?: Enumerable<VerificationRequestScalarFieldEnum>
  }

  /**
   * VerificationRequest findMany
   */
  export type VerificationRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     *
     **/
    select?: VerificationRequestSelect | null
    /**
     * Filter, which VerificationRequests to fetch.
     *
     **/
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationRequests to fetch.
     *
     **/
    orderBy?: Enumerable<VerificationRequestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VerificationRequests.
     *
     **/
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationRequests from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationRequests.
     *
     **/
    skip?: number
    distinct?: Enumerable<VerificationRequestScalarFieldEnum>
  }

  /**
   * VerificationRequest create
   */
  export type VerificationRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     *
     **/
    select?: VerificationRequestSelect | null
    /**
     * The data needed to create a VerificationRequest.
     *
     **/
    data: XOR<
      VerificationRequestCreateInput,
      VerificationRequestUncheckedCreateInput
    >
  }

  /**
   * VerificationRequest update
   */
  export type VerificationRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     *
     **/
    select?: VerificationRequestSelect | null
    /**
     * The data needed to update a VerificationRequest.
     *
     **/
    data: XOR<
      VerificationRequestUpdateInput,
      VerificationRequestUncheckedUpdateInput
    >
    /**
     * Choose, which VerificationRequest to update.
     *
     **/
    where: VerificationRequestWhereUniqueInput
  }

  /**
   * VerificationRequest updateMany
   */
  export type VerificationRequestUpdateManyArgs = {
    data: XOR<
      VerificationRequestUpdateManyMutationInput,
      VerificationRequestUncheckedUpdateManyInput
    >
    where?: VerificationRequestWhereInput
  }

  /**
   * VerificationRequest upsert
   */
  export type VerificationRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     *
     **/
    select?: VerificationRequestSelect | null
    /**
     * The filter to search for the VerificationRequest to update in case it exists.
     *
     **/
    where: VerificationRequestWhereUniqueInput
    /**
     * In case the VerificationRequest found by the `where` argument doesn't exist, create a new VerificationRequest with this data.
     *
     **/
    create: XOR<
      VerificationRequestCreateInput,
      VerificationRequestUncheckedCreateInput
    >
    /**
     * In case the VerificationRequest was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<
      VerificationRequestUpdateInput,
      VerificationRequestUncheckedUpdateInput
    >
  }

  /**
   * VerificationRequest delete
   */
  export type VerificationRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     *
     **/
    select?: VerificationRequestSelect | null
    /**
     * Filter which VerificationRequest to delete.
     *
     **/
    where: VerificationRequestWhereUniqueInput
  }

  /**
   * VerificationRequest deleteMany
   */
  export type VerificationRequestDeleteManyArgs = {
    where?: VerificationRequestWhereInput
  }

  /**
   * VerificationRequest without action
   */
  export type VerificationRequestArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     *
     **/
    select?: VerificationRequestSelect | null
  }

  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
    max: LinkMaxAggregateOutputType | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    shortUrl: string | null
    userId: string | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    shortUrl: string | null
    userId: string | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    url: number
    shortUrl: number
    userId: number
    _all: number
  }

  export type LinkMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    shortUrl?: true
    userId?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    shortUrl?: true
    userId?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    shortUrl?: true
    userId?: true
    _all?: true
  }

  export type LinkAggregateArgs = {
    /**
     * Filter which Link to aggregate.
     *
     **/
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Links to fetch.
     *
     **/
    orderBy?: Enumerable<LinkOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Links from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Links.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Links
     **/
    _count?: true | LinkCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LinkMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LinkMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
    [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }

  export type LinkGroupByArgs = {
    where?: LinkWhereInput
    orderBy?: Enumerable<LinkOrderByInput>
    by: Array<LinkScalarFieldEnum>
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    url: string
    shortUrl: string
    userId: string | null
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Promise<
    Array<
      PickArray<LinkGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LinkGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
          : GetScalarType<T[P], LinkGroupByOutputType[P]>
      }
    >
  >

  export type LinkSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    shortUrl?: boolean
    userId?: boolean
    User?: boolean | UserArgs
  }

  export type LinkInclude = {
    User?: boolean | UserArgs
  }

  export type LinkGetPayload<
    S extends boolean | null | undefined | LinkArgs,
    U = keyof S,
  > = S extends true
    ? Link
    : S extends undefined
    ? never
    : S extends LinkArgs | LinkFindManyArgs
    ? 'include' extends U
      ? Link & {
          [P in TrueKeys<S['include']>]: P extends 'User'
            ? UserGetPayload<S['include'][P]> | null
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Link
            ? Link[P]
            : P extends 'User'
            ? UserGetPayload<S['select'][P]> | null
            : never
        }
      : Link
    : Link

  type LinkCountArgs = Merge<
    Omit<LinkFindManyArgs, 'select' | 'include'> & {
      select?: LinkCountAggregateInputType | true
    }
  >

  export interface LinkDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends LinkFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, LinkFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Link'
    > extends True
      ? CheckSelect<
          T,
          Prisma__LinkClient<Link>,
          Prisma__LinkClient<LinkGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__LinkClient<Link | null>,
          Prisma__LinkClient<LinkGetPayload<T> | null>
        >

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends LinkFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, LinkFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Link'
    > extends True
      ? CheckSelect<
          T,
          Prisma__LinkClient<Link>,
          Prisma__LinkClient<LinkGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__LinkClient<Link | null>,
          Prisma__LinkClient<LinkGetPayload<T> | null>
        >

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     *
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends LinkFindManyArgs>(
      args?: SelectSubset<T, LinkFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Link>>,
      PrismaPromise<Array<LinkGetPayload<T>>>
    >

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     *
     **/
    create<T extends LinkCreateArgs>(
      args: SelectSubset<T, LinkCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__LinkClient<Link>,
      Prisma__LinkClient<LinkGetPayload<T>>
    >

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     *
     **/
    delete<T extends LinkDeleteArgs>(
      args: SelectSubset<T, LinkDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__LinkClient<Link>,
      Prisma__LinkClient<LinkGetPayload<T>>
    >

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends LinkUpdateArgs>(
      args: SelectSubset<T, LinkUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__LinkClient<Link>,
      Prisma__LinkClient<LinkGetPayload<T>>
    >

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends LinkDeleteManyArgs>(
      args?: SelectSubset<T, LinkDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends LinkUpdateManyArgs>(
      args: SelectSubset<T, LinkUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     **/
    upsert<T extends LinkUpsertArgs>(
      args: SelectSubset<T, LinkUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__LinkClient<Link>,
      Prisma__LinkClient<LinkGetPayload<T>>
    >

    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
     **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkAggregateArgs>(
      args: Subset<T, LinkAggregateArgs>,
    ): PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
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
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLinkGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LinkClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    User<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User | null>,
      Prisma__UserClient<UserGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Link
     *
     **/
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: LinkInclude | null
    /**
     * Throw an Error if a Link can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Link to fetch.
     *
     **/
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Link
     *
     **/
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: LinkInclude | null
    /**
     * Throw an Error if a Link can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Link to fetch.
     *
     **/
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Links to fetch.
     *
     **/
    orderBy?: Enumerable<LinkOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Links.
     *
     **/
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Links from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Links.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Links.
     *
     **/
    distinct?: Enumerable<LinkScalarFieldEnum>
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs = {
    /**
     * Select specific fields to fetch from the Link
     *
     **/
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: LinkInclude | null
    /**
     * Filter, which Links to fetch.
     *
     **/
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Links to fetch.
     *
     **/
    orderBy?: Enumerable<LinkOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Links.
     *
     **/
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Links from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Links.
     *
     **/
    skip?: number
    distinct?: Enumerable<LinkScalarFieldEnum>
  }

  /**
   * Link create
   */
  export type LinkCreateArgs = {
    /**
     * Select specific fields to fetch from the Link
     *
     **/
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: LinkInclude | null
    /**
     * The data needed to create a Link.
     *
     **/
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs = {
    /**
     * Select specific fields to fetch from the Link
     *
     **/
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: LinkInclude | null
    /**
     * The data needed to update a Link.
     *
     **/
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     *
     **/
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs = {
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    where?: LinkWhereInput
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs = {
    /**
     * Select specific fields to fetch from the Link
     *
     **/
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: LinkInclude | null
    /**
     * The filter to search for the Link to update in case it exists.
     *
     **/
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     *
     **/
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs = {
    /**
     * Select specific fields to fetch from the Link
     *
     **/
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: LinkInclude | null
    /**
     * Filter which Link to delete.
     *
     **/
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs = {
    where?: LinkWhereInput
  }

  /**
   * Link without action
   */
  export type LinkArgs = {
    /**
     * Select specific fields to fetch from the Link
     *
     **/
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: LinkInclude | null
  }

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
    max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type PostSumAggregateOutputType = {
    viewCount: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    viewCount: number | null
    postId: string | null
    tagId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    viewCount: number | null
    postId: string | null
    tagId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    published: number
    authorId: number
    createdAt: number
    updatedAt: number
    viewCount: number
    postId: number
    tagId: number
    _all: number
  }

  export type PostAvgAggregateInputType = {
    viewCount?: true
  }

  export type PostSumAggregateInputType = {
    viewCount?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    viewCount?: true
    postId?: true
    tagId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    viewCount?: true
    postId?: true
    tagId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    viewCount?: true
    postId?: true
    tagId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     *
     **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     *
     **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    _count?: true | PostCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PostAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
     **/
    avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PostSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
     **/
    sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }

  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: string | null
    published: boolean
    authorId: string | null
    createdAt: Date
    updatedAt: Date
    viewCount: number
    postId: string | null
    tagId: string | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PostGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostGroupByOutputType[P]>
          : GetScalarType<T[P], PostGroupByOutputType[P]>
      }
    >
  >

  export type PostSelect = {
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    viewCount?: boolean
    postId?: boolean
    tagId?: boolean
    author?: boolean | UserArgs
    Tag?: boolean | TagArgs
    Comment?: boolean | CommentFindManyArgs
  }

  export type PostInclude = {
    author?: boolean | UserArgs
    Tag?: boolean | TagArgs
    Comment?: boolean | CommentFindManyArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S,
  > = S extends true
    ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ? 'include' extends U
      ? Post & {
          [P in TrueKeys<S['include']>]: P extends 'author'
            ? UserGetPayload<S['include'][P]> | null
            : P extends 'Tag'
            ? TagGetPayload<S['include'][P]> | null
            : P extends 'Comment'
            ? Array<CommentGetPayload<S['include'][P]>>
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Post
            ? Post[P]
            : P extends 'author'
            ? UserGetPayload<S['select'][P]> | null
            : P extends 'Tag'
            ? TagGetPayload<S['select'][P]> | null
            : P extends 'Comment'
            ? Array<CommentGetPayload<S['select'][P]>>
            : never
        }
      : Post
    : Post

  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends PostFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, PostFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Post'
    > extends True
      ? CheckSelect<
          T,
          Prisma__PostClient<Post>,
          Prisma__PostClient<PostGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__PostClient<Post | null>,
          Prisma__PostClient<PostGetPayload<T> | null>
        >

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends PostFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, PostFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Post'
    > extends True
      ? CheckSelect<
          T,
          Prisma__PostClient<Post>,
          Prisma__PostClient<PostGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__PostClient<Post | null>,
          Prisma__PostClient<PostGetPayload<T> | null>
        >

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Post>>,
      PrismaPromise<Array<PostGetPayload<T>>>
    >

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__PostClient<Post>,
      Prisma__PostClient<PostGetPayload<T>>
    >

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__PostClient<Post>,
      Prisma__PostClient<PostGetPayload<T>>
    >

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__PostClient<Post>,
      Prisma__PostClient<PostGetPayload<T>>
    >

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__PostClient<Post>,
      Prisma__PostClient<PostGetPayload<T>>
    >

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>,
    ): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    author<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User | null>,
      Prisma__UserClient<UserGetPayload<T> | null>
    >

    Tag<T extends TagArgs = {}>(
      args?: Subset<T, TagArgs>,
    ): CheckSelect<
      T,
      Prisma__TagClient<Tag | null>,
      Prisma__TagClient<TagGetPayload<T> | null>
    >

    Comment<T extends CommentFindManyArgs = {}>(
      args?: Subset<T, CommentFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Comment>>,
      PrismaPromise<Array<CommentGetPayload<T>>>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     *
     **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     *
     **/
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     *
     **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     *
     **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     *
     **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     *
     **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     *
     **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     *
     **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     *
     **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     *
     **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     *
     **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     *
     **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     *
     **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     *
     **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     *
     **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     *
     **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     *
     **/
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    where?: PostWhereInput
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     *
     **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     *
     **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     *
     **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     *
     **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     *
     **/
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }

  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     *
     **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PostInclude | null
  }

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
    max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    userId: number
    _all: number
  }

  export type ProfileAvgAggregateInputType = {
    id?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     *
     **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     *
     **/
    orderBy?: Enumerable<ProfileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Profiles
     **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
     **/
    avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProfileSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
     **/
    sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProfileMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProfileMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }

  export type ProfileGroupByArgs = {
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByInput>
    by: Array<ProfileScalarFieldEnum>
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    bio: string
    userId: string
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Promise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProfileGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
          : GetScalarType<T[P], ProfileGroupByOutputType[P]>
      }
    >
  >

  export type ProfileSelect = {
    id?: boolean
    bio?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }

  export type ProfileInclude = {
    user?: boolean | UserArgs
  }

  export type ProfileGetPayload<
    S extends boolean | null | undefined | ProfileArgs,
    U = keyof S,
  > = S extends true
    ? Profile
    : S extends undefined
    ? never
    : S extends ProfileArgs | ProfileFindManyArgs
    ? 'include' extends U
      ? Profile & {
          [P in TrueKeys<S['include']>]: P extends 'user'
            ? UserGetPayload<S['include'][P]>
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Profile
            ? Profile[P]
            : P extends 'user'
            ? UserGetPayload<S['select'][P]>
            : never
        }
      : Profile
    : Profile

  type ProfileCountArgs = Merge<
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

  export interface ProfileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends ProfileFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, ProfileFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Profile'
    > extends True
      ? CheckSelect<
          T,
          Prisma__ProfileClient<Profile>,
          Prisma__ProfileClient<ProfileGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__ProfileClient<Profile | null>,
          Prisma__ProfileClient<ProfileGetPayload<T> | null>
        >

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends ProfileFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, ProfileFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Profile'
    > extends True
      ? CheckSelect<
          T,
          Prisma__ProfileClient<Profile>,
          Prisma__ProfileClient<ProfileGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__ProfileClient<Profile | null>,
          Prisma__ProfileClient<ProfileGetPayload<T> | null>
        >

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Profile>>,
      PrismaPromise<Array<ProfileGetPayload<T>>>
    >

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     *
     **/
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__ProfileClient<Profile>,
      Prisma__ProfileClient<ProfileGetPayload<T>>
    >

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     *
     **/
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__ProfileClient<Profile>,
      Prisma__ProfileClient<ProfileGetPayload<T>>
    >

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__ProfileClient<Profile>,
      Prisma__ProfileClient<ProfileGetPayload<T>>
    >

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     **/
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__ProfileClient<Profile>,
      Prisma__ProfileClient<ProfileGetPayload<T>>
    >

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
     **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(
      args: Subset<T, ProfileAggregateArgs>,
    ): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProfileGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    user<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User | null>,
      Prisma__UserClient<UserGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Profile
     *
     **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProfileInclude | null
    /**
     * Throw an Error if a Profile can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Profile to fetch.
     *
     **/
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Profile
     *
     **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProfileInclude | null
    /**
     * Throw an Error if a Profile can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Profile to fetch.
     *
     **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     *
     **/
    orderBy?: Enumerable<ProfileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     *
     **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     *
     **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     *
     **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     *
     **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     *
     **/
    orderBy?: Enumerable<ProfileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Profiles.
     *
     **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     *
     **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     *
     **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     *
     **/
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     *
     **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     *
     **/
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     *
     **/
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    where?: ProfileWhereInput
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     *
     **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     *
     **/
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     *
     **/
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     *
     **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     *
     **/
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    where?: ProfileWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     *
     **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProfileInclude | null
  }

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
    max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    tag: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    tag: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    tag: number
    _all: number
  }

  export type TagMinAggregateInputType = {
    id?: true
    tag?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    tag?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    tag?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
     *
     **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     *
     **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tags
     **/
    _count?: true | TagCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }

  export type TagGroupByArgs = {
    where?: TagWhereInput
    orderBy?: Enumerable<TagOrderByInput>
    by: Array<TagScalarFieldEnum>
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    tag: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Promise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>
      }
    >
  >

  export type TagSelect = {
    id?: boolean
    tag?: boolean
    posts?: boolean | PostFindManyArgs
  }

  export type TagInclude = {
    posts?: boolean | PostFindManyArgs
  }

  export type TagGetPayload<
    S extends boolean | null | undefined | TagArgs,
    U = keyof S,
  > = S extends true
    ? Tag
    : S extends undefined
    ? never
    : S extends TagArgs | TagFindManyArgs
    ? 'include' extends U
      ? Tag & {
          [P in TrueKeys<S['include']>]: P extends 'posts'
            ? Array<PostGetPayload<S['include'][P]>>
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Tag
            ? Tag[P]
            : P extends 'posts'
            ? Array<PostGetPayload<S['select'][P]>>
            : never
        }
      : Tag
    : Tag

  type TagCountArgs = Merge<
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface TagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends TagFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, TagFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Tag'
    > extends True
      ? CheckSelect<
          T,
          Prisma__TagClient<Tag>,
          Prisma__TagClient<TagGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__TagClient<Tag | null>,
          Prisma__TagClient<TagGetPayload<T> | null>
        >

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends TagFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, TagFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Tag'
    > extends True
      ? CheckSelect<
          T,
          Prisma__TagClient<Tag>,
          Prisma__TagClient<TagGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__TagClient<Tag | null>,
          Prisma__TagClient<TagGetPayload<T> | null>
        >

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Tag>>,
      PrismaPromise<Array<TagGetPayload<T>>>
    >

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__TagClient<Tag>,
      Prisma__TagClient<TagGetPayload<T>>
    >

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__TagClient<Tag>,
      Prisma__TagClient<TagGetPayload<T>>
    >

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__TagClient<Tag>,
      Prisma__TagClient<TagGetPayload<T>>
    >

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__TagClient<Tag>,
      Prisma__TagClient<TagGetPayload<T>>
    >

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>,
    ): PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTagGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    posts<T extends PostFindManyArgs = {}>(
      args?: Subset<T, PostFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Post>>,
      PrismaPromise<Array<PostGetPayload<T>>>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tag
     *
     **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     *
     **/
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tag
     *
     **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     *
     **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     *
     **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     *
     **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     *
     **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
     *
     **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
     *
     **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     *
     **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tags.
     *
     **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     *
     **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }

  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     *
     **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
     *
     **/
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     *
     **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
     *
     **/
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     *
     **/
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
     *
     **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
     *
     **/
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     *
     **/
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
     *
     **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
     *
     **/
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    where?: TagWhereInput
  }

  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
     *
     **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: TagInclude | null
  }

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
    max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    comment: string | null
    writtenById: string | null
    postId: string | null
    userId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    comment: string | null
    writtenById: string | null
    postId: string | null
    userId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    createdAt: number
    comment: number
    writtenById: number
    postId: number
    userId: number
    _all: number
  }

  export type CommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    comment?: true
    writtenById?: true
    postId?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    comment?: true
    writtenById?: true
    postId?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    comment?: true
    writtenById?: true
    postId?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     *
     **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     *
     **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }

  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    createdAt: Date
    comment: string
    writtenById: string
    postId: string
    userId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Promise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CommentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
          : GetScalarType<T[P], CommentGroupByOutputType[P]>
      }
    >
  >

  export type CommentSelect = {
    id?: boolean
    createdAt?: boolean
    comment?: boolean
    writtenById?: boolean
    postId?: boolean
    userId?: boolean
    Post?: boolean | PostArgs
    User?: boolean | UserArgs
  }

  export type CommentInclude = {
    Post?: boolean | PostArgs
    User?: boolean | UserArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S,
  > = S extends true
    ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | CommentFindManyArgs
    ? 'include' extends U
      ? Comment & {
          [P in TrueKeys<S['include']>]: P extends 'Post'
            ? PostGetPayload<S['include'][P]>
            : P extends 'User'
            ? UserGetPayload<S['include'][P]> | null
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Comment
            ? Comment[P]
            : P extends 'Post'
            ? PostGetPayload<S['select'][P]>
            : P extends 'User'
            ? UserGetPayload<S['select'][P]> | null
            : never
        }
      : Comment
    : Comment

  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends CommentFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, CommentFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Comment'
    > extends True
      ? CheckSelect<
          T,
          Prisma__CommentClient<Comment>,
          Prisma__CommentClient<CommentGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__CommentClient<Comment | null>,
          Prisma__CommentClient<CommentGetPayload<T> | null>
        >

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends CommentFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, CommentFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Comment'
    > extends True
      ? CheckSelect<
          T,
          Prisma__CommentClient<Comment>,
          Prisma__CommentClient<CommentGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__CommentClient<Comment | null>,
          Prisma__CommentClient<CommentGetPayload<T> | null>
        >

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Comment>>,
      PrismaPromise<Array<CommentGetPayload<T>>>
    >

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__CommentClient<Comment>,
      Prisma__CommentClient<CommentGetPayload<T>>
    >

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__CommentClient<Comment>,
      Prisma__CommentClient<CommentGetPayload<T>>
    >

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__CommentClient<Comment>,
      Prisma__CommentClient<CommentGetPayload<T>>
    >

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__CommentClient<Comment>,
      Prisma__CommentClient<CommentGetPayload<T>>
    >

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(
      args: Subset<T, CommentAggregateArgs>,
    ): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCommentGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    Post<T extends PostArgs = {}>(
      args?: Subset<T, PostArgs>,
    ): CheckSelect<
      T,
      Prisma__PostClient<Post | null>,
      Prisma__PostClient<PostGetPayload<T> | null>
    >

    User<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User | null>,
      Prisma__UserClient<UserGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comment
     *
     **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     *
     **/
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comment
     *
     **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     *
     **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     *
     **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     *
     **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     *
     **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     *
     **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     *
     **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     *
     **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     *
     **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     *
     **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     *
     **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     *
     **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     *
     **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     *
     **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     *
     **/
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     *
     **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     *
     **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     *
     **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     *
     **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     *
     **/
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    where?: CommentWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     *
     **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CommentInclude | null
  }

  /**
   * Model Invite
   */

  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
    max: InviteMaxAggregateOutputType | null
  }

  export type InviteMinAggregateOutputType = {
    id: string | null
    dateSent: Date | null
    email: string | null
    accountId: string | null
    isValid: boolean | null
  }

  export type InviteMaxAggregateOutputType = {
    id: string | null
    dateSent: Date | null
    email: string | null
    accountId: string | null
    isValid: boolean | null
  }

  export type InviteCountAggregateOutputType = {
    id: number
    dateSent: number
    email: number
    accountId: number
    isValid: number
    _all: number
  }

  export type InviteMinAggregateInputType = {
    id?: true
    dateSent?: true
    email?: true
    accountId?: true
    isValid?: true
  }

  export type InviteMaxAggregateInputType = {
    id?: true
    dateSent?: true
    email?: true
    accountId?: true
    isValid?: true
  }

  export type InviteCountAggregateInputType = {
    id?: true
    dateSent?: true
    email?: true
    accountId?: true
    isValid?: true
    _all?: true
  }

  export type InviteAggregateArgs = {
    /**
     * Filter which Invite to aggregate.
     *
     **/
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invites to fetch.
     *
     **/
    orderBy?: Enumerable<InviteOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invites from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invites.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Invites
     **/
    _count?: true | InviteCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | InviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InviteMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: InviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InviteMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: InviteMaxAggregateInputType
  }

  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
    [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }

  export type InviteGroupByArgs = {
    where?: InviteWhereInput
    orderBy?: Enumerable<InviteOrderByInput>
    by: Array<InviteScalarFieldEnum>
    having?: InviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }

  export type InviteGroupByOutputType = {
    id: string
    dateSent: Date
    email: string
    accountId: string | null
    isValid: boolean
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Promise<
    Array<
      PickArray<InviteGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InviteGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
          : GetScalarType<T[P], InviteGroupByOutputType[P]>
      }
    >
  >

  export type InviteSelect = {
    id?: boolean
    dateSent?: boolean
    email?: boolean
    accountId?: boolean
    isValid?: boolean
    account?: boolean | AccountArgs
  }

  export type InviteInclude = {
    account?: boolean | AccountArgs
  }

  export type InviteGetPayload<
    S extends boolean | null | undefined | InviteArgs,
    U = keyof S,
  > = S extends true
    ? Invite
    : S extends undefined
    ? never
    : S extends InviteArgs | InviteFindManyArgs
    ? 'include' extends U
      ? Invite & {
          [P in TrueKeys<S['include']>]: P extends 'account'
            ? AccountGetPayload<S['include'][P]> | null
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Invite
            ? Invite[P]
            : P extends 'account'
            ? AccountGetPayload<S['select'][P]> | null
            : never
        }
      : Invite
    : Invite

  type InviteCountArgs = Merge<
    Omit<InviteFindManyArgs, 'select' | 'include'> & {
      select?: InviteCountAggregateInputType | true
    }
  >

  export interface InviteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Invite that matches the filter.
     * @param {InviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends InviteFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, InviteFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Invite'
    > extends True
      ? CheckSelect<
          T,
          Prisma__InviteClient<Invite>,
          Prisma__InviteClient<InviteGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__InviteClient<Invite | null>,
          Prisma__InviteClient<InviteGetPayload<T> | null>
        >

    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends InviteFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, InviteFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Invite'
    > extends True
      ? CheckSelect<
          T,
          Prisma__InviteClient<Invite>,
          Prisma__InviteClient<InviteGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__InviteClient<Invite | null>,
          Prisma__InviteClient<InviteGetPayload<T> | null>
        >

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     *
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inviteWithIdOnly = await prisma.invite.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends InviteFindManyArgs>(
      args?: SelectSubset<T, InviteFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Invite>>,
      PrismaPromise<Array<InviteGetPayload<T>>>
    >

    /**
     * Create a Invite.
     * @param {InviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     *
     **/
    create<T extends InviteCreateArgs>(
      args: SelectSubset<T, InviteCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__InviteClient<Invite>,
      Prisma__InviteClient<InviteGetPayload<T>>
    >

    /**
     * Delete a Invite.
     * @param {InviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     *
     **/
    delete<T extends InviteDeleteArgs>(
      args: SelectSubset<T, InviteDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__InviteClient<Invite>,
      Prisma__InviteClient<InviteGetPayload<T>>
    >

    /**
     * Update one Invite.
     * @param {InviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends InviteUpdateArgs>(
      args: SelectSubset<T, InviteUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__InviteClient<Invite>,
      Prisma__InviteClient<InviteGetPayload<T>>
    >

    /**
     * Delete zero or more Invites.
     * @param {InviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends InviteDeleteManyArgs>(
      args?: SelectSubset<T, InviteDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends InviteUpdateManyArgs>(
      args: SelectSubset<T, InviteUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Invite.
     * @param {InviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
     **/
    upsert<T extends InviteUpsertArgs>(
      args: SelectSubset<T, InviteUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__InviteClient<Invite>,
      Prisma__InviteClient<InviteGetPayload<T>>
    >

    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
     **/
    count<T extends InviteCountArgs>(
      args?: Subset<T, InviteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InviteAggregateArgs>(
      args: Subset<T, InviteAggregateArgs>,
    ): PrismaPromise<GetInviteAggregateType<T>>

    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteGroupByArgs} args - Group by arguments.
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
      T extends InviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteGroupByArgs['orderBy'] }
        : { orderBy?: InviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetInviteGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InviteClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    account<T extends AccountArgs = {}>(
      args?: Subset<T, AccountArgs>,
    ): CheckSelect<
      T,
      Prisma__AccountClient<Account | null>,
      Prisma__AccountClient<AccountGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Invite findUnique
   */
  export type InviteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Invite
     *
     **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: InviteInclude | null
    /**
     * Throw an Error if a Invite can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Invite to fetch.
     *
     **/
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findFirst
   */
  export type InviteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Invite
     *
     **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: InviteInclude | null
    /**
     * Throw an Error if a Invite can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Invite to fetch.
     *
     **/
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invites to fetch.
     *
     **/
    orderBy?: Enumerable<InviteOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invites.
     *
     **/
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invites from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invites.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invites.
     *
     **/
    distinct?: Enumerable<InviteScalarFieldEnum>
  }

  /**
   * Invite findMany
   */
  export type InviteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Invite
     *
     **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: InviteInclude | null
    /**
     * Filter, which Invites to fetch.
     *
     **/
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invites to fetch.
     *
     **/
    orderBy?: Enumerable<InviteOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Invites.
     *
     **/
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invites from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invites.
     *
     **/
    skip?: number
    distinct?: Enumerable<InviteScalarFieldEnum>
  }

  /**
   * Invite create
   */
  export type InviteCreateArgs = {
    /**
     * Select specific fields to fetch from the Invite
     *
     **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: InviteInclude | null
    /**
     * The data needed to create a Invite.
     *
     **/
    data: XOR<InviteCreateInput, InviteUncheckedCreateInput>
  }

  /**
   * Invite update
   */
  export type InviteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Invite
     *
     **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: InviteInclude | null
    /**
     * The data needed to update a Invite.
     *
     **/
    data: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
    /**
     * Choose, which Invite to update.
     *
     **/
    where: InviteWhereUniqueInput
  }

  /**
   * Invite updateMany
   */
  export type InviteUpdateManyArgs = {
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    where?: InviteWhereInput
  }

  /**
   * Invite upsert
   */
  export type InviteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Invite
     *
     **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: InviteInclude | null
    /**
     * The filter to search for the Invite to update in case it exists.
     *
     **/
    where: InviteWhereUniqueInput
    /**
     * In case the Invite found by the `where` argument doesn't exist, create a new Invite with this data.
     *
     **/
    create: XOR<InviteCreateInput, InviteUncheckedCreateInput>
    /**
     * In case the Invite was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
  }

  /**
   * Invite delete
   */
  export type InviteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Invite
     *
     **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: InviteInclude | null
    /**
     * Filter which Invite to delete.
     *
     **/
    where: InviteWhereUniqueInput
  }

  /**
   * Invite deleteMany
   */
  export type InviteDeleteManyArgs = {
    where?: InviteWhereInput
  }

  /**
   * Invite without action
   */
  export type InviteArgs = {
    /**
     * Select specific fields to fetch from the Invite
     *
     **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: InviteInclude | null
  }

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
    max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     *
     **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Customers to fetch.
     *
     **/
    orderBy?: Enumerable<CustomerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Customers from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Customers.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Customers
     **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }

  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByInput>
    by: Array<CustomerScalarFieldEnum>
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Promise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>
      }
    >
  >

  export type CustomerSelect = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }

  export type CustomerInclude = {
    user?: boolean | UserArgs
  }

  export type CustomerGetPayload<
    S extends boolean | null | undefined | CustomerArgs,
    U = keyof S,
  > = S extends true
    ? Customer
    : S extends undefined
    ? never
    : S extends CustomerArgs | CustomerFindManyArgs
    ? 'include' extends U
      ? Customer & {
          [P in TrueKeys<S['include']>]: P extends 'user'
            ? UserGetPayload<S['include'][P]>
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Customer
            ? Customer[P]
            : P extends 'user'
            ? UserGetPayload<S['select'][P]>
            : never
        }
      : Customer
    : Customer

  type CustomerCountArgs = Merge<
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }
  >

  export interface CustomerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends CustomerFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, CustomerFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Customer'
    > extends True
      ? CheckSelect<
          T,
          Prisma__CustomerClient<Customer>,
          Prisma__CustomerClient<CustomerGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__CustomerClient<Customer | null>,
          Prisma__CustomerClient<CustomerGetPayload<T> | null>
        >

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends CustomerFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, CustomerFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Customer'
    > extends True
      ? CheckSelect<
          T,
          Prisma__CustomerClient<Customer>,
          Prisma__CustomerClient<CustomerGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__CustomerClient<Customer | null>,
          Prisma__CustomerClient<CustomerGetPayload<T> | null>
        >

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Customer>>,
      PrismaPromise<Array<CustomerGetPayload<T>>>
    >

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__CustomerClient<Customer>,
      Prisma__CustomerClient<CustomerGetPayload<T>>
    >

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__CustomerClient<Customer>,
      Prisma__CustomerClient<CustomerGetPayload<T>>
    >

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__CustomerClient<Customer>,
      Prisma__CustomerClient<CustomerGetPayload<T>>
    >

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__CustomerClient<Customer>,
      Prisma__CustomerClient<CustomerGetPayload<T>>
    >

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCustomerGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    user<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>,
    ): CheckSelect<
      T,
      Prisma__UserClient<User | null>,
      Prisma__UserClient<UserGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Customer
     *
     **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CustomerInclude | null
    /**
     * Throw an Error if a Customer can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Customer to fetch.
     *
     **/
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Customer
     *
     **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CustomerInclude | null
    /**
     * Throw an Error if a Customer can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Customer to fetch.
     *
     **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Customers to fetch.
     *
     **/
    orderBy?: Enumerable<CustomerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Customers.
     *
     **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Customers from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Customers.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Customers.
     *
     **/
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     *
     **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     *
     **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Customers to fetch.
     *
     **/
    orderBy?: Enumerable<CustomerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Customers.
     *
     **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Customers from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Customers.
     *
     **/
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     *
     **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     *
     **/
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     *
     **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     *
     **/
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     *
     **/
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     *
     **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     *
     **/
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     *
     **/
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     *
     **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     *
     **/
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    where?: CustomerWhereInput
  }

  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     *
     **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: CustomerInclude | null
  }

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
    max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    active: boolean | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    active: boolean | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    active: number
    name: number
    description: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type ProductMinAggregateInputType = {
    id?: true
    active?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    active?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    active?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     *
     **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     *
     **/
    orderBy?: Enumerable<ProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }

  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    active: boolean
    name: string
    description: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Promise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProductGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
          : GetScalarType<T[P], ProductGroupByOutputType[P]>
      }
    >
  >

  export type ProductSelect = {
    id?: boolean
    active?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductGetPayload<
    S extends boolean | null | undefined | ProductArgs,
    U = keyof S,
  > = S extends true
    ? Product
    : S extends undefined
    ? never
    : S extends ProductArgs | ProductFindManyArgs
    ? 'include' extends U
      ? Product
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Product
            ? Product[P]
            : never
        }
      : Product
    : Product

  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends ProductFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, ProductFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Product'
    > extends True
      ? CheckSelect<
          T,
          Prisma__ProductClient<Product>,
          Prisma__ProductClient<ProductGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__ProductClient<Product | null>,
          Prisma__ProductClient<ProductGetPayload<T> | null>
        >

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends ProductFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, ProductFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Product'
    > extends True
      ? CheckSelect<
          T,
          Prisma__ProductClient<Product>,
          Prisma__ProductClient<ProductGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__ProductClient<Product | null>,
          Prisma__ProductClient<ProductGetPayload<T> | null>
        >

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Product>>,
      PrismaPromise<Array<ProductGetPayload<T>>>
    >

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__ProductClient<Product>,
      Prisma__ProductClient<ProductGetPayload<T>>
    >

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__ProductClient<Product>,
      Prisma__ProductClient<ProductGetPayload<T>>
    >

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__ProductClient<Product>,
      Prisma__ProductClient<ProductGetPayload<T>>
    >

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__ProductClient<Product>,
      Prisma__ProductClient<ProductGetPayload<T>>
    >

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProductGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Throw an Error if a Product can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Product to fetch.
     *
     **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Throw an Error if a Product can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Product to fetch.
     *
     **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     *
     **/
    orderBy?: Enumerable<ProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     *
     **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     *
     **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Filter, which Products to fetch.
     *
     **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     *
     **/
    orderBy?: Enumerable<ProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     *
     **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     *
     **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * The data needed to create a Product.
     *
     **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * The data needed to update a Product.
     *
     **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     *
     **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * The filter to search for the Product to update in case it exists.
     *
     **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     *
     **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Filter which Product to delete.
     *
     **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    where?: ProductWhereInput
  }

  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
  }

  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
    max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    unitAmount: number | null
    interval_count: number | null
    trial_period_days: number | null
  }

  export type PriceSumAggregateOutputType = {
    unitAmount: number | null
    interval_count: number | null
    trial_period_days: number | null
  }

  export type PriceMinAggregateOutputType = {
    id: string | null
    productId: string | null
    active: boolean | null
    currency: string | null
    unitAmount: number | null
    interval_count: number | null
    trial_period_days: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    active: boolean | null
    currency: string | null
    unitAmount: number | null
    interval_count: number | null
    trial_period_days: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceCountAggregateOutputType = {
    id: number
    productId: number
    active: number
    currency: number
    unitAmount: number
    interval_count: number
    trial_period_days: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type PriceAvgAggregateInputType = {
    unitAmount?: true
    interval_count?: true
    trial_period_days?: true
  }

  export type PriceSumAggregateInputType = {
    unitAmount?: true
    interval_count?: true
    trial_period_days?: true
  }

  export type PriceMinAggregateInputType = {
    id?: true
    productId?: true
    active?: true
    currency?: true
    unitAmount?: true
    interval_count?: true
    trial_period_days?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceMaxAggregateInputType = {
    id?: true
    productId?: true
    active?: true
    currency?: true
    unitAmount?: true
    interval_count?: true
    trial_period_days?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceCountAggregateInputType = {
    id?: true
    productId?: true
    active?: true
    currency?: true
    unitAmount?: true
    interval_count?: true
    trial_period_days?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceAggregateArgs = {
    /**
     * Filter which Price to aggregate.
     *
     **/
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prices to fetch.
     *
     **/
    orderBy?: Enumerable<PriceOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prices from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prices.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Prices
     **/
    _count?: true | PriceCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PriceAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
     **/
    avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PriceSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
     **/
    sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PriceMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PriceMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
    [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }

  export type PriceGroupByArgs = {
    where?: PriceWhereInput
    orderBy?: Enumerable<PriceOrderByInput>
    by: Array<PriceScalarFieldEnum>
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    id: string
    productId: string
    active: boolean
    currency: string
    unitAmount: number | null
    interval_count: number | null
    trial_period_days: number | null
    createdAt: Date
    updatedAt: Date
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Promise<
    Array<
      PickArray<PriceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PriceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
          : GetScalarType<T[P], PriceGroupByOutputType[P]>
      }
    >
  >

  export type PriceSelect = {
    id?: boolean
    productId?: boolean
    active?: boolean
    currency?: boolean
    unitAmount?: boolean
    interval_count?: boolean
    trial_period_days?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | SubscriptionFindManyArgs
  }

  export type PriceInclude = {
    subscriptions?: boolean | SubscriptionFindManyArgs
  }

  export type PriceGetPayload<
    S extends boolean | null | undefined | PriceArgs,
    U = keyof S,
  > = S extends true
    ? Price
    : S extends undefined
    ? never
    : S extends PriceArgs | PriceFindManyArgs
    ? 'include' extends U
      ? Price & {
          [P in TrueKeys<S['include']>]: P extends 'subscriptions'
            ? Array<SubscriptionGetPayload<S['include'][P]>>
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Price
            ? Price[P]
            : P extends 'subscriptions'
            ? Array<SubscriptionGetPayload<S['select'][P]>>
            : never
        }
      : Price
    : Price

  type PriceCountArgs = Merge<
    Omit<PriceFindManyArgs, 'select' | 'include'> & {
      select?: PriceCountAggregateInputType | true
    }
  >

  export interface PriceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends PriceFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, PriceFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Price'
    > extends True
      ? CheckSelect<
          T,
          Prisma__PriceClient<Price>,
          Prisma__PriceClient<PriceGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__PriceClient<Price | null>,
          Prisma__PriceClient<PriceGetPayload<T> | null>
        >

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends PriceFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, PriceFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Price'
    > extends True
      ? CheckSelect<
          T,
          Prisma__PriceClient<Price>,
          Prisma__PriceClient<PriceGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__PriceClient<Price | null>,
          Prisma__PriceClient<PriceGetPayload<T> | null>
        >

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     *
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const priceWithIdOnly = await prisma.price.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PriceFindManyArgs>(
      args?: SelectSubset<T, PriceFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Price>>,
      PrismaPromise<Array<PriceGetPayload<T>>>
    >

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     *
     **/
    create<T extends PriceCreateArgs>(
      args: SelectSubset<T, PriceCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__PriceClient<Price>,
      Prisma__PriceClient<PriceGetPayload<T>>
    >

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     *
     **/
    delete<T extends PriceDeleteArgs>(
      args: SelectSubset<T, PriceDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__PriceClient<Price>,
      Prisma__PriceClient<PriceGetPayload<T>>
    >

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PriceUpdateArgs>(
      args: SelectSubset<T, PriceUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__PriceClient<Price>,
      Prisma__PriceClient<PriceGetPayload<T>>
    >

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PriceDeleteManyArgs>(
      args?: SelectSubset<T, PriceDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PriceUpdateManyArgs>(
      args: SelectSubset<T, PriceUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     **/
    upsert<T extends PriceUpsertArgs>(
      args: SelectSubset<T, PriceUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__PriceClient<Price>,
      Prisma__PriceClient<PriceGetPayload<T>>
    >

    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
     **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceAggregateArgs>(
      args: Subset<T, PriceAggregateArgs>,
    ): PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
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
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPriceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PriceClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    subscriptions<T extends SubscriptionFindManyArgs = {}>(
      args?: Subset<T, SubscriptionFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Subscription>>,
      PrismaPromise<Array<SubscriptionGetPayload<T>>>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Price
     *
     **/
    select?: PriceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PriceInclude | null
    /**
     * Throw an Error if a Price can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Price to fetch.
     *
     **/
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Price
     *
     **/
    select?: PriceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PriceInclude | null
    /**
     * Throw an Error if a Price can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Price to fetch.
     *
     **/
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prices to fetch.
     *
     **/
    orderBy?: Enumerable<PriceOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Prices.
     *
     **/
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prices from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prices.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Prices.
     *
     **/
    distinct?: Enumerable<PriceScalarFieldEnum>
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Price
     *
     **/
    select?: PriceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PriceInclude | null
    /**
     * Filter, which Prices to fetch.
     *
     **/
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prices to fetch.
     *
     **/
    orderBy?: Enumerable<PriceOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Prices.
     *
     **/
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prices from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prices.
     *
     **/
    skip?: number
    distinct?: Enumerable<PriceScalarFieldEnum>
  }

  /**
   * Price create
   */
  export type PriceCreateArgs = {
    /**
     * Select specific fields to fetch from the Price
     *
     **/
    select?: PriceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PriceInclude | null
    /**
     * The data needed to create a Price.
     *
     **/
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Price
     *
     **/
    select?: PriceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PriceInclude | null
    /**
     * The data needed to update a Price.
     *
     **/
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     *
     **/
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs = {
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    where?: PriceWhereInput
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Price
     *
     **/
    select?: PriceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PriceInclude | null
    /**
     * The filter to search for the Price to update in case it exists.
     *
     **/
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     *
     **/
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Price
     *
     **/
    select?: PriceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PriceInclude | null
    /**
     * Filter which Price to delete.
     *
     **/
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs = {
    where?: PriceWhereInput
  }

  /**
   * Price without action
   */
  export type PriceArgs = {
    /**
     * Select specific fields to fetch from the Price
     *
     **/
    select?: PriceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: PriceInclude | null
  }

  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
    max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    priceId: string | null
    start_date: Date | null
    ended_at: Date | null
    trial_end: Date | null
    trial_start: Date | null
    cancel_at: Date | null
    cancel_at_period_end: boolean | null
    canceled_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    priceId: string | null
    start_date: Date | null
    ended_at: Date | null
    trial_end: Date | null
    trial_start: Date | null
    cancel_at: Date | null
    cancel_at_period_end: boolean | null
    canceled_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    priceId: number
    start_date: number
    ended_at: number
    trial_end: number
    trial_start: number
    cancel_at: number
    cancel_at_period_end: number
    canceled_at: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    priceId?: true
    start_date?: true
    ended_at?: true
    trial_end?: true
    trial_start?: true
    cancel_at?: true
    cancel_at_period_end?: true
    canceled_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    priceId?: true
    start_date?: true
    ended_at?: true
    trial_end?: true
    trial_start?: true
    cancel_at?: true
    cancel_at_period_end?: true
    canceled_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    priceId?: true
    start_date?: true
    ended_at?: true
    trial_end?: true
    trial_start?: true
    cancel_at?: true
    cancel_at_period_end?: true
    canceled_at?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs = {
    /**
     * Filter which Subscription to aggregate.
     *
     **/
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     *
     **/
    orderBy?: Enumerable<SubscriptionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subscriptions
     **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
     **/
    count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
     **/
    min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
     **/
    max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<
    T extends SubscriptionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }

  export type SubscriptionGroupByArgs = {
    where?: SubscriptionWhereInput
    orderBy?: Enumerable<SubscriptionOrderByInput>
    by: Array<SubscriptionScalarFieldEnum>
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    priceId: string
    start_date: Date | null
    ended_at: Date | null
    trial_end: Date | null
    trial_start: Date | null
    cancel_at: Date | null
    cancel_at_period_end: boolean | null
    canceled_at: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> =
    Promise<
      Array<
        PickArray<SubscriptionGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof SubscriptionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >

  export type SubscriptionSelect = {
    id?: boolean
    userId?: boolean
    priceId?: boolean
    start_date?: boolean
    ended_at?: boolean
    trial_end?: boolean
    trial_start?: boolean
    cancel_at?: boolean
    cancel_at_period_end?: boolean
    canceled_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean | PriceArgs
  }

  export type SubscriptionInclude = {
    price?: boolean | PriceArgs
  }

  export type SubscriptionGetPayload<
    S extends boolean | null | undefined | SubscriptionArgs,
    U = keyof S,
  > = S extends true
    ? Subscription
    : S extends undefined
    ? never
    : S extends SubscriptionArgs | SubscriptionFindManyArgs
    ? 'include' extends U
      ? Subscription & {
          [P in TrueKeys<S['include']>]: P extends 'price'
            ? PriceGetPayload<S['include'][P]>
            : never
        }
      : 'select' extends U
      ? {
          [P in TrueKeys<S['select']>]: P extends keyof Subscription
            ? Subscription[P]
            : P extends 'price'
            ? PriceGetPayload<S['select'][P]>
            : never
        }
      : Subscription
    : Subscription

  type SubscriptionCountArgs = Merge<
    Omit<SubscriptionFindManyArgs, 'select' | 'include'> & {
      select?: SubscriptionCountAggregateInputType | true
    }
  >

  export interface SubscriptionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends SubscriptionFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args: SelectSubset<T, SubscriptionFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'Subscription'
    > extends True
      ? CheckSelect<
          T,
          Prisma__SubscriptionClient<Subscription>,
          Prisma__SubscriptionClient<SubscriptionGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__SubscriptionClient<Subscription | null>,
          Prisma__SubscriptionClient<SubscriptionGetPayload<T> | null>
        >

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends SubscriptionFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined,
    >(
      args?: SelectSubset<T, SubscriptionFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'Subscription'
    > extends True
      ? CheckSelect<
          T,
          Prisma__SubscriptionClient<Subscription>,
          Prisma__SubscriptionClient<SubscriptionGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__SubscriptionClient<Subscription | null>,
          Prisma__SubscriptionClient<SubscriptionGetPayload<T> | null>
        >

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     *
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends SubscriptionFindManyArgs>(
      args?: SelectSubset<T, SubscriptionFindManyArgs>,
    ): CheckSelect<
      T,
      PrismaPromise<Array<Subscription>>,
      PrismaPromise<Array<SubscriptionGetPayload<T>>>
    >

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     *
     **/
    create<T extends SubscriptionCreateArgs>(
      args: SelectSubset<T, SubscriptionCreateArgs>,
    ): CheckSelect<
      T,
      Prisma__SubscriptionClient<Subscription>,
      Prisma__SubscriptionClient<SubscriptionGetPayload<T>>
    >

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     *
     **/
    delete<T extends SubscriptionDeleteArgs>(
      args: SelectSubset<T, SubscriptionDeleteArgs>,
    ): CheckSelect<
      T,
      Prisma__SubscriptionClient<Subscription>,
      Prisma__SubscriptionClient<SubscriptionGetPayload<T>>
    >

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends SubscriptionUpdateArgs>(
      args: SelectSubset<T, SubscriptionUpdateArgs>,
    ): CheckSelect<
      T,
      Prisma__SubscriptionClient<Subscription>,
      Prisma__SubscriptionClient<SubscriptionGetPayload<T>>
    >

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends SubscriptionDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends SubscriptionUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     **/
    upsert<T extends SubscriptionUpsertArgs>(
      args: SelectSubset<T, SubscriptionUpsertArgs>,
    ): CheckSelect<
      T,
      Prisma__SubscriptionClient<Subscription>,
      Prisma__SubscriptionClient<SubscriptionGetPayload<T>>
    >

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
     **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(
      args: Subset<T, SubscriptionAggregateArgs>,
    ): PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
          }[OrderFields],
    >(
      args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSubscriptionGroupByPayload<T>
      : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubscriptionClient<T> implements PrismaPromise<T> {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: 'PrismaClientPromise'

    price<T extends PriceArgs = {}>(
      args?: Subset<T, PriceArgs>,
    ): CheckSelect<
      T,
      Prisma__PriceClient<Price | null>,
      Prisma__PriceClient<PriceGetPayload<T> | null>
    >

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     *
     **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SubscriptionInclude | null
    /**
     * Throw an Error if a Subscription can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Subscription to fetch.
     *
     **/
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     *
     **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SubscriptionInclude | null
    /**
     * Throw an Error if a Subscription can't be found
     *
     **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Subscription to fetch.
     *
     **/
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     *
     **/
    orderBy?: Enumerable<SubscriptionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscriptions.
     *
     **/
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscriptions.
     *
     **/
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     *
     **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscriptions to fetch.
     *
     **/
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     *
     **/
    orderBy?: Enumerable<SubscriptionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subscriptions.
     *
     **/
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     *
     **/
    skip?: number
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     *
     **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SubscriptionInclude | null
    /**
     * The data needed to create a Subscription.
     *
     **/
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     *
     **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SubscriptionInclude | null
    /**
     * The data needed to update a Subscription.
     *
     **/
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     *
     **/
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs = {
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyInput
    >
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     *
     **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SubscriptionInclude | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     *
     **/
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     *
     **/
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     *
     **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SubscriptionInclude | null
    /**
     * Filter which Subscription to delete.
     *
     **/
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs = {
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     *
     **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: SubscriptionInclude | null
  }

  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    providerType: 'providerType'
    provider: 'provider'
    providerAccountId: 'providerAccountId'
    refreshToken: 'refreshToken'
    accessToken: 'accessToken'
    accessTokenExpires: 'accessTokenExpires'
    idToken: 'idToken'
    sessionState: 'sessionState'
    oauthTokenSecret: 'oauthTokenSecret'
    oauthToken: 'oauthToken'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    scope: 'scope'
    token_type: 'token_type'
  }

  export type AccountScalarFieldEnum =
    typeof AccountScalarFieldEnum[keyof typeof AccountScalarFieldEnum]

  export const SessionScalarFieldEnum: {
    id: 'id'
    sessionToken: 'sessionToken'
    userId: 'userId'
    expires: 'expires'
  }

  export type SessionScalarFieldEnum =
    typeof SessionScalarFieldEnum[keyof typeof SessionScalarFieldEnum]

  export const UserScalarFieldEnum: {
    id: 'id'
    name: 'name'
    email: 'email'
    emailVerified: 'emailVerified'
    image: 'image'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    username: 'username'
    password: 'password'
  }

  export type UserScalarFieldEnum =
    typeof UserScalarFieldEnum[keyof typeof UserScalarFieldEnum]

  export const VerificationTokenScalarFieldEnum: {
    id: 'id'
    identifier: 'identifier'
    token: 'token'
    expires: 'expires'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type VerificationTokenScalarFieldEnum =
    typeof VerificationTokenScalarFieldEnum[keyof typeof VerificationTokenScalarFieldEnum]

  export const VerificationRequestScalarFieldEnum: {
    id: 'id'
    identifier: 'identifier'
    token: 'token'
    expires: 'expires'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type VerificationRequestScalarFieldEnum =
    typeof VerificationRequestScalarFieldEnum[keyof typeof VerificationRequestScalarFieldEnum]

  export const LinkScalarFieldEnum: {
    id: 'id'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    url: 'url'
    shortUrl: 'shortUrl'
    userId: 'userId'
  }

  export type LinkScalarFieldEnum =
    typeof LinkScalarFieldEnum[keyof typeof LinkScalarFieldEnum]

  export const PostScalarFieldEnum: {
    id: 'id'
    title: 'title'
    content: 'content'
    published: 'published'
    authorId: 'authorId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    viewCount: 'viewCount'
    postId: 'postId'
    tagId: 'tagId'
  }

  export type PostScalarFieldEnum =
    typeof PostScalarFieldEnum[keyof typeof PostScalarFieldEnum]

  export const ProfileScalarFieldEnum: {
    id: 'id'
    bio: 'bio'
    userId: 'userId'
  }

  export type ProfileScalarFieldEnum =
    typeof ProfileScalarFieldEnum[keyof typeof ProfileScalarFieldEnum]

  export const TagScalarFieldEnum: {
    id: 'id'
    tag: 'tag'
  }

  export type TagScalarFieldEnum =
    typeof TagScalarFieldEnum[keyof typeof TagScalarFieldEnum]

  export const CommentScalarFieldEnum: {
    id: 'id'
    createdAt: 'createdAt'
    comment: 'comment'
    writtenById: 'writtenById'
    postId: 'postId'
    userId: 'userId'
  }

  export type CommentScalarFieldEnum =
    typeof CommentScalarFieldEnum[keyof typeof CommentScalarFieldEnum]

  export const InviteScalarFieldEnum: {
    id: 'id'
    dateSent: 'dateSent'
    email: 'email'
    accountId: 'accountId'
    isValid: 'isValid'
  }

  export type InviteScalarFieldEnum =
    typeof InviteScalarFieldEnum[keyof typeof InviteScalarFieldEnum]

  export const CustomerScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type CustomerScalarFieldEnum =
    typeof CustomerScalarFieldEnum[keyof typeof CustomerScalarFieldEnum]

  export const ProductScalarFieldEnum: {
    id: 'id'
    active: 'active'
    name: 'name'
    description: 'description'
    image: 'image'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type ProductScalarFieldEnum =
    typeof ProductScalarFieldEnum[keyof typeof ProductScalarFieldEnum]

  export const PriceScalarFieldEnum: {
    id: 'id'
    productId: 'productId'
    active: 'active'
    currency: 'currency'
    unitAmount: 'unitAmount'
    interval_count: 'interval_count'
    trial_period_days: 'trial_period_days'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type PriceScalarFieldEnum =
    typeof PriceScalarFieldEnum[keyof typeof PriceScalarFieldEnum]

  export const SubscriptionScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    priceId: 'priceId'
    start_date: 'start_date'
    ended_at: 'ended_at'
    trial_end: 'trial_end'
    trial_start: 'trial_start'
    cancel_at: 'cancel_at'
    cancel_at_period_end: 'cancel_at_period_end'
    canceled_at: 'canceled_at'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type SubscriptionScalarFieldEnum =
    typeof SubscriptionScalarFieldEnum[keyof typeof SubscriptionScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = typeof SortOrder[keyof typeof SortOrder]

  /**
   * Deep Input Types
   */

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    providerType?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refreshToken?: StringNullableFilter | string | null
    accessToken?: StringNullableFilter | string | null
    accessTokenExpires?: DateTimeNullableFilter | Date | string | null
    idToken?: StringNullableFilter | string | null
    sessionState?: StringNullableFilter | string | null
    oauthTokenSecret?: StringNullableFilter | string | null
    oauthToken?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    scope?: StringNullableFilter | string | null
    token_type?: StringNullableFilter | string | null
    invites?: InviteListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    idToken?: SortOrder
    sessionState?: SortOrder
    oauthTokenSecret?: SortOrder
    oauthToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scope?: SortOrder
    token_type?: SortOrder
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    providerType?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refreshToken?: StringNullableWithAggregatesFilter | string | null
    accessToken?: StringNullableWithAggregatesFilter | string | null
    accessTokenExpires?:
      | DateTimeNullableWithAggregatesFilter
      | Date
      | string
      | null
    idToken?: StringNullableWithAggregatesFilter | string | null
    sessionState?: StringNullableWithAggregatesFilter | string | null
    oauthTokenSecret?: StringNullableWithAggregatesFilter | string | null
    oauthToken?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    scope?: StringNullableWithAggregatesFilter | string | null
    token_type?: StringNullableWithAggregatesFilter | string | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: IntFilter | number
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: number
    sessionToken?: string
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    username?: StringFilter | string
    password?: StringFilter | string
    accounts?: AccountListRelationFilter
    Comment?: CommentListRelationFilter
    links?: LinkListRelationFilter
    posts?: PostListRelationFilter
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput> | null
    sessions?: SessionListRelationFilter
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
  }

  export type UserOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type VerificationTokenWhereInput = {
    AND?: Enumerable<VerificationTokenWhereInput>
    OR?: Enumerable<VerificationTokenWhereInput>
    NOT?: Enumerable<VerificationTokenWhereInput>
    id?: StringFilter | string
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VerificationTokenOrderByInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = {
    id?: string
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VerificationRequestWhereInput = {
    AND?: Enumerable<VerificationRequestWhereInput>
    OR?: Enumerable<VerificationRequestWhereInput>
    NOT?: Enumerable<VerificationRequestWhereInput>
    id?: StringFilter | string
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VerificationRequestOrderByInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestWhereUniqueInput = {
    id?: string
  }

  export type VerificationRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationRequestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LinkWhereInput = {
    AND?: Enumerable<LinkWhereInput>
    OR?: Enumerable<LinkWhereInput>
    NOT?: Enumerable<LinkWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    shortUrl?: StringFilter | string
    userId?: StringNullableFilter | string | null
    User?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type LinkOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    userId?: SortOrder
  }

  export type LinkWhereUniqueInput = {
    id?: string
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LinkScalarWhereWithAggregatesInput>
    OR?: Enumerable<LinkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LinkScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    shortUrl?: StringWithAggregatesFilter | string
    userId?: StringNullableWithAggregatesFilter | string | null
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    published?: BoolFilter | boolean
    authorId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    viewCount?: IntFilter | number
    postId?: StringNullableFilter | string | null
    tagId?: StringNullableFilter | string | null
    author?: XOR<UserRelationFilter, UserWhereInput> | null
    Tag?: XOR<TagRelationFilter, TagWhereInput> | null
    Comment?: CommentListRelationFilter
  }

  export type PostOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewCount?: SortOrder
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: string
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    published?: BoolWithAggregatesFilter | boolean
    authorId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    viewCount?: IntWithAggregatesFilter | number
    postId?: StringNullableWithAggregatesFilter | string | null
    tagId?: StringNullableWithAggregatesFilter | string | null
  }

  export type ProfileWhereInput = {
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    id?: IntFilter | number
    bio?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
  }

  export type ProfileWhereUniqueInput = {
    id?: number
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bio?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: StringFilter | string
    tag?: StringFilter | string
    posts?: PostListRelationFilter
  }

  export type TagOrderByInput = {
    id?: SortOrder
    tag?: SortOrder
  }

  export type TagWhereUniqueInput = {
    id?: string
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    tag?: StringWithAggregatesFilter | string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    comment?: StringFilter | string
    writtenById?: StringFilter | string
    postId?: StringFilter | string
    userId?: StringNullableFilter | string | null
    Post?: XOR<PostRelationFilter, PostWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type CommentOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    comment?: SortOrder
    writtenById?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: string
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    comment?: StringWithAggregatesFilter | string
    writtenById?: StringWithAggregatesFilter | string
    postId?: StringWithAggregatesFilter | string
    userId?: StringNullableWithAggregatesFilter | string | null
  }

  export type InviteWhereInput = {
    AND?: Enumerable<InviteWhereInput>
    OR?: Enumerable<InviteWhereInput>
    NOT?: Enumerable<InviteWhereInput>
    id?: StringFilter | string
    dateSent?: DateTimeFilter | Date | string
    email?: StringFilter | string
    accountId?: StringNullableFilter | string | null
    isValid?: BoolFilter | boolean
    account?: XOR<AccountRelationFilter, AccountWhereInput> | null
  }

  export type InviteOrderByInput = {
    id?: SortOrder
    dateSent?: SortOrder
    email?: SortOrder
    accountId?: SortOrder
    isValid?: SortOrder
  }

  export type InviteWhereUniqueInput = {
    id?: string
  }

  export type InviteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InviteScalarWhereWithAggregatesInput>
    OR?: Enumerable<InviteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InviteScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    dateSent?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    accountId?: StringNullableWithAggregatesFilter | string | null
    isValid?: BoolWithAggregatesFilter | boolean
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CustomerOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerWhereUniqueInput = {
    id?: string
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: StringFilter | string
    active?: BoolFilter | boolean
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductOrderByInput = {
    id?: SortOrder
    active?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductWhereUniqueInput = {
    id?: string
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PriceWhereInput = {
    AND?: Enumerable<PriceWhereInput>
    OR?: Enumerable<PriceWhereInput>
    NOT?: Enumerable<PriceWhereInput>
    id?: StringFilter | string
    productId?: StringFilter | string
    active?: BoolFilter | boolean
    currency?: StringFilter | string
    unitAmount?: IntNullableFilter | number | null
    interval_count?: IntNullableFilter | number | null
    trial_period_days?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }

  export type PriceOrderByInput = {
    id?: SortOrder
    productId?: SortOrder
    active?: SortOrder
    currency?: SortOrder
    unitAmount?: SortOrder
    interval_count?: SortOrder
    trial_period_days?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceWhereUniqueInput = {
    id?: string
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PriceScalarWhereWithAggregatesInput>
    OR?: Enumerable<PriceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PriceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    productId?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    currency?: StringWithAggregatesFilter | string
    unitAmount?: IntNullableWithAggregatesFilter | number | null
    interval_count?: IntNullableWithAggregatesFilter | number | null
    trial_period_days?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: Enumerable<SubscriptionWhereInput>
    OR?: Enumerable<SubscriptionWhereInput>
    NOT?: Enumerable<SubscriptionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    priceId?: StringFilter | string
    start_date?: DateTimeNullableFilter | Date | string | null
    ended_at?: DateTimeNullableFilter | Date | string | null
    trial_end?: DateTimeNullableFilter | Date | string | null
    trial_start?: DateTimeNullableFilter | Date | string | null
    cancel_at?: DateTimeNullableFilter | Date | string | null
    cancel_at_period_end?: BoolNullableFilter | boolean | null
    canceled_at?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    price?: XOR<PriceRelationFilter, PriceWhereInput>
  }

  export type SubscriptionOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    priceId?: SortOrder
    start_date?: SortOrder
    ended_at?: SortOrder
    trial_end?: SortOrder
    trial_start?: SortOrder
    cancel_at?: SortOrder
    cancel_at_period_end?: SortOrder
    canceled_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionWhereUniqueInput = {
    id?: string
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    priceId?: StringWithAggregatesFilter | string
    start_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    ended_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    trial_end?: DateTimeNullableWithAggregatesFilter | Date | string | null
    trial_start?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cancel_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cancel_at_period_end?: BoolNullableWithAggregatesFilter | boolean | null
    canceled_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    providerType: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    idToken?: string | null
    sessionState?: string | null
    oauthTokenSecret?: string | null
    oauthToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scope?: string | null
    token_type?: string | null
    invites?: InviteCreateNestedManyWithoutAccountInput
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    providerType: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    idToken?: string | null
    sessionState?: string | null
    oauthTokenSecret?: string | null
    oauthToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scope?: string | null
    token_type?: string | null
    invites?: InviteUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    invites?: InviteUpdateManyWithoutAccountInput
    user?: UserUpdateOneRequiredWithoutAccountsInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    invites?: InviteUncheckedUpdateManyWithoutAccountInput
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    links?: LinkCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserInput
    Comment?: CommentUpdateManyWithoutUserInput
    links?: LinkUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    profile?: ProfileUpdateOneWithoutUserInput
    sessions?: SessionUpdateManyWithoutUserInput
    customer?: CustomerUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    links?: LinkUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    customer?: CustomerUncheckedUpdateOneWithoutUserInput
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    shortUrl: string
    User?: UserCreateNestedOneWithoutLinksInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    shortUrl: string
    userId?: string | null
  }

  export type LinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutLinksInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    id: string
    title: string
    content?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number
    postId?: string | null
    author?: UserCreateNestedOneWithoutPostsInput
    Tag?: TagCreateNestedOneWithoutPostsInput
    Comment?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id: string
    title: string
    content?: string | null
    published?: boolean
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number
    postId?: string | null
    tagId?: string | null
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneWithoutPostsInput
    Tag?: TagUpdateOneWithoutPostsInput
    Comment?: CommentUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    bio: string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    bio: string
    userId: string
  }

  export type ProfileUpdateInput = {
    bio?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProfileInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUpdateManyMutationInput = {
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    tag: string
    posts?: PostCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    tag: string
    posts?: PostUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutTagInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutTagInput
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    createdAt?: Date | string
    comment: string
    writtenById: string
    Post: PostCreateNestedOneWithoutCommentInput
    User?: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    comment: string
    writtenById: string
    postId: string
    userId?: string | null
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
    Post?: PostUpdateOneRequiredWithoutCommentInput
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InviteCreateInput = {
    id?: string
    dateSent?: Date | string
    email: string
    isValid?: boolean
    account?: AccountCreateNestedOneWithoutInvitesInput
  }

  export type InviteUncheckedCreateInput = {
    id?: string
    dateSent?: Date | string
    email: string
    accountId?: string | null
    isValid?: boolean
  }

  export type InviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateSent?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneWithoutInvitesInput
  }

  export type InviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateSent?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateSent?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateSent?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    active?: boolean
    name: string
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    active?: boolean
    name: string
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateInput = {
    id?: string
    productId: string
    active?: boolean
    currency: string
    unitAmount?: number | null
    interval_count?: number | null
    trial_period_days?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPriceInput
  }

  export type PriceUncheckedCreateInput = {
    id?: string
    productId: string
    active?: boolean
    currency: string
    unitAmount?: number | null
    interval_count?: number | null
    trial_period_days?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPriceInput
  }

  export type PriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    unitAmount?: NullableIntFieldUpdateOperationsInput | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    trial_period_days?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPriceInput
  }

  export type PriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    unitAmount?: NullableIntFieldUpdateOperationsInput | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    trial_period_days?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPriceInput
  }

  export type PriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    unitAmount?: NullableIntFieldUpdateOperationsInput | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    trial_period_days?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    unitAmount?: NullableIntFieldUpdateOperationsInput | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    trial_period_days?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id: string
    userId: string
    start_date?: Date | string | null
    ended_at?: Date | string | null
    trial_end?: Date | string | null
    trial_start?: Date | string | null
    cancel_at?: Date | string | null
    cancel_at_period_end?: boolean | null
    canceled_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    price: PriceCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id: string
    userId: string
    priceId: string
    start_date?: Date | string | null
    ended_at?: Date | string | null
    trial_end?: Date | string | null
    trial_start?: Date | string | null
    cancel_at?: Date | string | null
    cancel_at_period_end?: boolean | null
    canceled_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    trial_start?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    canceled_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: PriceUpdateOneRequiredWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    start_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    trial_start?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    canceled_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    trial_start?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    canceled_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    start_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    trial_start?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    canceled_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringNullableFilter | string | null
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

  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
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
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedStringFilter
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
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedStringNullableFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedDateTimeNullableFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedDateTimeFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedIntFilter
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type TagRelationFilter = {
    is?: TagWhereInput | null
    isNot?: TagWhereInput | null
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedBoolFilter
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
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

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedIntNullableFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type PriceRelationFilter = {
    is?: PriceWhereInput
    isNot?: PriceWhereInput
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedBoolNullableFilter
  }

  export type InviteCreateNestedManyWithoutAccountInput = {
    create?: XOR<
      Enumerable<InviteCreateWithoutAccountInput>,
      Enumerable<InviteUncheckedCreateWithoutAccountInput>
    >
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutAccountInput>
    connect?: Enumerable<InviteWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type InviteUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<
      Enumerable<InviteCreateWithoutAccountInput>,
      Enumerable<InviteUncheckedCreateWithoutAccountInput>
    >
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutAccountInput>
    connect?: Enumerable<InviteWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InviteUpdateManyWithoutAccountInput = {
    create?: XOR<
      Enumerable<InviteCreateWithoutAccountInput>,
      Enumerable<InviteUncheckedCreateWithoutAccountInput>
    >
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<InviteUpsertWithWhereUniqueWithoutAccountInput>
    connect?: Enumerable<InviteWhereUniqueInput>
    set?: Enumerable<InviteWhereUniqueInput>
    disconnect?: Enumerable<InviteWhereUniqueInput>
    delete?: Enumerable<InviteWhereUniqueInput>
    update?: Enumerable<InviteUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<InviteUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<InviteScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutAccountsInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >
  }

  export type InviteUncheckedUpdateManyWithoutAccountInput = {
    create?: XOR<
      Enumerable<InviteCreateWithoutAccountInput>,
      Enumerable<InviteUncheckedCreateWithoutAccountInput>
    >
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<InviteUpsertWithWhereUniqueWithoutAccountInput>
    connect?: Enumerable<InviteWhereUniqueInput>
    set?: Enumerable<InviteWhereUniqueInput>
    disconnect?: Enumerable<InviteWhereUniqueInput>
    delete?: Enumerable<InviteWhereUniqueInput>
    update?: Enumerable<InviteUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<InviteUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<InviteScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<AccountCreateWithoutUserInput>,
      Enumerable<AccountUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<CommentCreateWithoutUserInput>,
      Enumerable<CommentUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type LinkCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<LinkCreateWithoutUserInput>,
      Enumerable<LinkUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutUserInput>
    connect?: Enumerable<LinkWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutAuthorInput>,
      Enumerable<PostUncheckedCreateWithoutAuthorInput>
    >
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<SessionCreateWithoutUserInput>,
      Enumerable<SessionUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type CustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<
      CustomerCreateWithoutUserInput,
      CustomerUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<AccountCreateWithoutUserInput>,
      Enumerable<AccountUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<CommentCreateWithoutUserInput>,
      Enumerable<CommentUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type LinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<LinkCreateWithoutUserInput>,
      Enumerable<LinkUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutUserInput>
    connect?: Enumerable<LinkWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutAuthorInput>,
      Enumerable<PostUncheckedCreateWithoutAuthorInput>
    >
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<SessionCreateWithoutUserInput>,
      Enumerable<SessionUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      CustomerCreateWithoutUserInput,
      CustomerUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type AccountUpdateManyWithoutUserInput = {
    create?: XOR<
      Enumerable<AccountCreateWithoutUserInput>,
      Enumerable<AccountUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUserInput = {
    create?: XOR<
      Enumerable<CommentCreateWithoutUserInput>,
      Enumerable<CommentUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type LinkUpdateManyWithoutUserInput = {
    create?: XOR<
      Enumerable<LinkCreateWithoutUserInput>,
      Enumerable<LinkUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LinkUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<LinkWhereUniqueInput>
    set?: Enumerable<LinkWhereUniqueInput>
    disconnect?: Enumerable<LinkWhereUniqueInput>
    delete?: Enumerable<LinkWhereUniqueInput>
    update?: Enumerable<LinkUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LinkUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LinkScalarWhereInput>
  }

  export type PostUpdateManyWithoutAuthorInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutAuthorInput>,
      Enumerable<PostUncheckedCreateWithoutAuthorInput>
    >
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type ProfileUpdateOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    connect?: ProfileWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >
  }

  export type SessionUpdateManyWithoutUserInput = {
    create?: XOR<
      Enumerable<SessionCreateWithoutUserInput>,
      Enumerable<SessionUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type CustomerUpdateOneWithoutUserInput = {
    create?: XOR<
      CustomerCreateWithoutUserInput,
      CustomerUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    connect?: CustomerWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      CustomerUpdateWithoutUserInput,
      CustomerUncheckedUpdateWithoutUserInput
    >
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<
      Enumerable<AccountCreateWithoutUserInput>,
      Enumerable<AccountUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<
      Enumerable<CommentCreateWithoutUserInput>,
      Enumerable<CommentUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type LinkUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<
      Enumerable<LinkCreateWithoutUserInput>,
      Enumerable<LinkUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LinkUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<LinkWhereUniqueInput>
    set?: Enumerable<LinkWhereUniqueInput>
    disconnect?: Enumerable<LinkWhereUniqueInput>
    delete?: Enumerable<LinkWhereUniqueInput>
    update?: Enumerable<LinkUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LinkUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LinkScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutAuthorInput>,
      Enumerable<PostUncheckedCreateWithoutAuthorInput>
    >
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type ProfileUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    connect?: ProfileWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<
      Enumerable<SessionCreateWithoutUserInput>,
      Enumerable<SessionUncheckedCreateWithoutUserInput>
    >
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type CustomerUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<
      CustomerCreateWithoutUserInput,
      CustomerUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    connect?: CustomerWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      CustomerUpdateWithoutUserInput,
      CustomerUncheckedUpdateWithoutUserInput
    >
  }

  export type UserCreateNestedOneWithoutLinksInput = {
    create?: XOR<
      UserCreateWithoutLinksInput,
      UserUncheckedCreateWithoutLinksInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutLinksInput = {
    create?: XOR<
      UserCreateWithoutLinksInput,
      UserUncheckedCreateWithoutLinksInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    upsert?: UserUpsertWithoutLinksInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      UserUpdateWithoutLinksInput,
      UserUncheckedUpdateWithoutLinksInput
    >
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      TagCreateWithoutPostsInput,
      TagUncheckedCreateWithoutPostsInput
    >
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    connect?: TagWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<
      Enumerable<CommentCreateWithoutPostInput>,
      Enumerable<CommentUncheckedCreateWithoutPostInput>
    >
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<
      Enumerable<CommentCreateWithoutPostInput>,
      Enumerable<CommentUncheckedCreateWithoutPostInput>
    >
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPostsInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >
  }

  export type TagUpdateOneWithoutPostsInput = {
    create?: XOR<
      TagCreateWithoutPostsInput,
      TagUncheckedCreateWithoutPostsInput
    >
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    upsert?: TagUpsertWithoutPostsInput
    connect?: TagWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      TagUpdateWithoutPostsInput,
      TagUncheckedUpdateWithoutPostsInput
    >
  }

  export type CommentUpdateManyWithoutPostInput = {
    create?: XOR<
      Enumerable<CommentCreateWithoutPostInput>,
      Enumerable<CommentUncheckedCreateWithoutPostInput>
    >
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutPostInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<
      Enumerable<CommentCreateWithoutPostInput>,
      Enumerable<CommentUncheckedCreateWithoutPostInput>
    >
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutPostInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >
  }

  export type PostCreateNestedManyWithoutTagInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutTagInput>,
      Enumerable<PostUncheckedCreateWithoutTagInput>
    >
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutTagInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutTagInput>,
      Enumerable<PostUncheckedCreateWithoutTagInput>
    >
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutTagInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUpdateManyWithoutTagInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutTagInput>,
      Enumerable<PostUncheckedCreateWithoutTagInput>
    >
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutTagInput>
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutTagInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutTagInput>,
      Enumerable<PostUncheckedCreateWithoutTagInput>
    >
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutTagInput>
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutCommentInput = {
    create?: XOR<
      PostCreateWithoutCommentInput,
      PostUncheckedCreateWithoutCommentInput
    >
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<
      UserCreateWithoutCommentInput,
      UserUncheckedCreateWithoutCommentInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCommentInput = {
    create?: XOR<
      PostCreateWithoutCommentInput,
      PostUncheckedCreateWithoutCommentInput
    >
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput
    upsert?: PostUpsertWithoutCommentInput
    connect?: PostWhereUniqueInput
    update?: XOR<
      PostUpdateWithoutCommentInput,
      PostUncheckedUpdateWithoutCommentInput
    >
  }

  export type UserUpdateOneWithoutCommentInput = {
    create?: XOR<
      UserCreateWithoutCommentInput,
      UserUncheckedCreateWithoutCommentInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      UserUpdateWithoutCommentInput,
      UserUncheckedUpdateWithoutCommentInput
    >
  }

  export type AccountCreateNestedOneWithoutInvitesInput = {
    create?: XOR<
      AccountCreateWithoutInvitesInput,
      AccountUncheckedCreateWithoutInvitesInput
    >
    connectOrCreate?: AccountCreateOrConnectWithoutInvitesInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneWithoutInvitesInput = {
    create?: XOR<
      AccountCreateWithoutInvitesInput,
      AccountUncheckedCreateWithoutInvitesInput
    >
    connectOrCreate?: AccountCreateOrConnectWithoutInvitesInput
    upsert?: AccountUpsertWithoutInvitesInput
    connect?: AccountWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<
      AccountUpdateWithoutInvitesInput,
      AccountUncheckedUpdateWithoutInvitesInput
    >
  }

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<
      UserCreateWithoutCustomerInput,
      UserUncheckedCreateWithoutCustomerInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCustomerInput = {
    create?: XOR<
      UserCreateWithoutCustomerInput,
      UserUncheckedCreateWithoutCustomerInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      UserUpdateWithoutCustomerInput,
      UserUncheckedUpdateWithoutCustomerInput
    >
  }

  export type SubscriptionCreateNestedManyWithoutPriceInput = {
    create?: XOR<
      Enumerable<SubscriptionCreateWithoutPriceInput>,
      Enumerable<SubscriptionUncheckedCreateWithoutPriceInput>
    >
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutPriceInput>
    connect?: Enumerable<SubscriptionWhereUniqueInput>
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPriceInput = {
    create?: XOR<
      Enumerable<SubscriptionCreateWithoutPriceInput>,
      Enumerable<SubscriptionUncheckedCreateWithoutPriceInput>
    >
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutPriceInput>
    connect?: Enumerable<SubscriptionWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUpdateManyWithoutPriceInput = {
    create?: XOR<
      Enumerable<SubscriptionCreateWithoutPriceInput>,
      Enumerable<SubscriptionUncheckedCreateWithoutPriceInput>
    >
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutPriceInput>
    upsert?: Enumerable<SubscriptionUpsertWithWhereUniqueWithoutPriceInput>
    connect?: Enumerable<SubscriptionWhereUniqueInput>
    set?: Enumerable<SubscriptionWhereUniqueInput>
    disconnect?: Enumerable<SubscriptionWhereUniqueInput>
    delete?: Enumerable<SubscriptionWhereUniqueInput>
    update?: Enumerable<SubscriptionUpdateWithWhereUniqueWithoutPriceInput>
    updateMany?: Enumerable<SubscriptionUpdateManyWithWhereWithoutPriceInput>
    deleteMany?: Enumerable<SubscriptionScalarWhereInput>
  }

  export type SubscriptionUncheckedUpdateManyWithoutPriceInput = {
    create?: XOR<
      Enumerable<SubscriptionCreateWithoutPriceInput>,
      Enumerable<SubscriptionUncheckedCreateWithoutPriceInput>
    >
    connectOrCreate?: Enumerable<SubscriptionCreateOrConnectWithoutPriceInput>
    upsert?: Enumerable<SubscriptionUpsertWithWhereUniqueWithoutPriceInput>
    connect?: Enumerable<SubscriptionWhereUniqueInput>
    set?: Enumerable<SubscriptionWhereUniqueInput>
    disconnect?: Enumerable<SubscriptionWhereUniqueInput>
    delete?: Enumerable<SubscriptionWhereUniqueInput>
    update?: Enumerable<SubscriptionUpdateWithWhereUniqueWithoutPriceInput>
    updateMany?: Enumerable<SubscriptionUpdateManyWithWhereWithoutPriceInput>
    deleteMany?: Enumerable<SubscriptionScalarWhereInput>
  }

  export type PriceCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<
      PriceCreateWithoutSubscriptionsInput,
      PriceUncheckedCreateWithoutSubscriptionsInput
    >
    connectOrCreate?: PriceCreateOrConnectWithoutSubscriptionsInput
    connect?: PriceWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PriceUpdateOneRequiredWithoutSubscriptionsInput = {
    create?: XOR<
      PriceCreateWithoutSubscriptionsInput,
      PriceUncheckedCreateWithoutSubscriptionsInput
    >
    connectOrCreate?: PriceCreateOrConnectWithoutSubscriptionsInput
    upsert?: PriceUpsertWithoutSubscriptionsInput
    connect?: PriceWhereUniqueInput
    update?: XOR<
      PriceUpdateWithoutSubscriptionsInput,
      PriceUncheckedUpdateWithoutSubscriptionsInput
    >
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedStringFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedStringNullableFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedDateTimeNullableFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedDateTimeFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedIntFilter
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedBoolFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedIntNullableFilter
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

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     *
     **/
    max?: NestedBoolNullableFilter
  }

  export type InviteCreateWithoutAccountInput = {
    id?: string
    dateSent?: Date | string
    email: string
    isValid?: boolean
  }

  export type InviteUncheckedCreateWithoutAccountInput = {
    id?: string
    dateSent?: Date | string
    email: string
    isValid?: boolean
  }

  export type InviteCreateOrConnectWithoutAccountInput = {
    where: InviteWhereUniqueInput
    create: XOR<
      InviteCreateWithoutAccountInput,
      InviteUncheckedCreateWithoutAccountInput
    >
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    Comment?: CommentCreateNestedManyWithoutUserInput
    links?: LinkCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >
  }

  export type InviteUpsertWithWhereUniqueWithoutAccountInput = {
    where: InviteWhereUniqueInput
    update: XOR<
      InviteUpdateWithoutAccountInput,
      InviteUncheckedUpdateWithoutAccountInput
    >
    create: XOR<
      InviteCreateWithoutAccountInput,
      InviteUncheckedCreateWithoutAccountInput
    >
  }

  export type InviteUpdateWithWhereUniqueWithoutAccountInput = {
    where: InviteWhereUniqueInput
    data: XOR<
      InviteUpdateWithoutAccountInput,
      InviteUncheckedUpdateWithoutAccountInput
    >
  }

  export type InviteUpdateManyWithWhereWithoutAccountInput = {
    where: InviteScalarWhereInput
    data: XOR<
      InviteUpdateManyMutationInput,
      InviteUncheckedUpdateManyWithoutInvitesInput
    >
  }

  export type InviteScalarWhereInput = {
    AND?: Enumerable<InviteScalarWhereInput>
    OR?: Enumerable<InviteScalarWhereInput>
    NOT?: Enumerable<InviteScalarWhereInput>
    id?: StringFilter | string
    dateSent?: DateTimeFilter | Date | string
    email?: StringFilter | string
    accountId?: StringNullableFilter | string | null
    isValid?: BoolFilter | boolean
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUpdateManyWithoutUserInput
    links?: LinkUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    profile?: ProfileUpdateOneWithoutUserInput
    sessions?: SessionUpdateManyWithoutUserInput
    customer?: CustomerUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    links?: LinkUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    customer?: CustomerUncheckedUpdateOneWithoutUserInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    links?: LinkCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserInput
    Comment?: CommentUpdateManyWithoutUserInput
    links?: LinkUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    profile?: ProfileUpdateOneWithoutUserInput
    customer?: CustomerUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    links?: LinkUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    customer?: CustomerUncheckedUpdateOneWithoutUserInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    providerType: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    idToken?: string | null
    sessionState?: string | null
    oauthTokenSecret?: string | null
    oauthToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scope?: string | null
    token_type?: string | null
    invites?: InviteCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    providerType: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    idToken?: string | null
    sessionState?: string | null
    oauthTokenSecret?: string | null
    oauthToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scope?: string | null
    token_type?: string | null
    invites?: InviteUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    comment: string
    writtenById: string
    Post: PostCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    comment: string
    writtenById: string
    postId: string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<
      CommentCreateWithoutUserInput,
      CommentUncheckedCreateWithoutUserInput
    >
  }

  export type LinkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    shortUrl: string
  }

  export type LinkUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    shortUrl: string
  }

  export type LinkCreateOrConnectWithoutUserInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutAuthorInput = {
    id: string
    title: string
    content?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number
    postId?: string | null
    Tag?: TagCreateNestedOneWithoutPostsInput
    Comment?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id: string
    title: string
    content?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number
    postId?: string | null
    tagId?: string | null
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >
  }

  export type ProfileCreateWithoutUserInput = {
    bio: string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio: string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<
      CustomerCreateWithoutUserInput,
      CustomerUncheckedCreateWithoutUserInput
    >
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<
      AccountUpdateManyMutationInput,
      AccountUncheckedUpdateManyWithoutAccountsInput
    >
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    providerType?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refreshToken?: StringNullableFilter | string | null
    accessToken?: StringNullableFilter | string | null
    accessTokenExpires?: DateTimeNullableFilter | Date | string | null
    idToken?: StringNullableFilter | string | null
    sessionState?: StringNullableFilter | string | null
    oauthTokenSecret?: StringNullableFilter | string | null
    oauthToken?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    scope?: StringNullableFilter | string | null
    token_type?: StringNullableFilter | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<
      CommentUpdateWithoutUserInput,
      CommentUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      CommentCreateWithoutUserInput,
      CommentUncheckedCreateWithoutUserInput
    >
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<
      CommentUpdateWithoutUserInput,
      CommentUncheckedUpdateWithoutUserInput
    >
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutCommentInput
    >
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    comment?: StringFilter | string
    writtenById?: StringFilter | string
    postId?: StringFilter | string
    userId?: StringNullableFilter | string | null
  }

  export type LinkUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutUserInput, LinkUncheckedUpdateWithoutUserInput>
    create: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutUserInput, LinkUncheckedUpdateWithoutUserInput>
  }

  export type LinkUpdateManyWithWhereWithoutUserInput = {
    where: LinkScalarWhereInput
    data: XOR<
      LinkUpdateManyMutationInput,
      LinkUncheckedUpdateManyWithoutLinksInput
    >
  }

  export type LinkScalarWhereInput = {
    AND?: Enumerable<LinkScalarWhereInput>
    OR?: Enumerable<LinkScalarWhereInput>
    NOT?: Enumerable<LinkScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    shortUrl?: StringFilter | string
    userId?: StringNullableFilter | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutPostsInput
    >
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    published?: BoolFilter | boolean
    authorId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    viewCount?: IntFilter | number
    postId?: StringNullableFilter | string | null
    tagId?: StringNullableFilter | string | null
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >
  }

  export type ProfileUpdateWithoutUserInput = {
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<
      SessionUpdateManyMutationInput,
      SessionUncheckedUpdateManyWithoutSessionsInput
    >
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: IntFilter | number
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type CustomerUpsertWithoutUserInput = {
    update: XOR<
      CustomerUpdateWithoutUserInput,
      CustomerUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      CustomerCreateWithoutUserInput,
      CustomerUncheckedCreateWithoutUserInput
    >
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutLinksInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinksInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutLinksInput,
      UserUncheckedCreateWithoutLinksInput
    >
  }

  export type UserUpsertWithoutLinksInput = {
    update: XOR<
      UserUpdateWithoutLinksInput,
      UserUncheckedUpdateWithoutLinksInput
    >
    create: XOR<
      UserCreateWithoutLinksInput,
      UserUncheckedCreateWithoutLinksInput
    >
  }

  export type UserUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserInput
    Comment?: CommentUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    profile?: ProfileUpdateOneWithoutUserInput
    sessions?: SessionUpdateManyWithoutUserInput
    customer?: CustomerUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    customer?: CustomerUncheckedUpdateOneWithoutUserInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    links?: LinkCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >
  }

  export type TagCreateWithoutPostsInput = {
    id?: string
    tag: string
  }

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: string
    tag: string
  }

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    comment: string
    writtenById: string
    User?: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    comment: string
    writtenById: string
    userId?: string | null
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<
      CommentCreateWithoutPostInput,
      CommentUncheckedCreateWithoutPostInput
    >
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserInput
    Comment?: CommentUpdateManyWithoutUserInput
    links?: LinkUpdateManyWithoutUserInput
    profile?: ProfileUpdateOneWithoutUserInput
    sessions?: SessionUpdateManyWithoutUserInput
    customer?: CustomerUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    links?: LinkUncheckedUpdateManyWithoutUserInput
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    customer?: CustomerUncheckedUpdateOneWithoutUserInput
  }

  export type TagUpsertWithoutPostsInput = {
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type TagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<
      CommentUpdateWithoutPostInput,
      CommentUncheckedUpdateWithoutPostInput
    >
    create: XOR<
      CommentCreateWithoutPostInput,
      CommentUncheckedCreateWithoutPostInput
    >
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<
      CommentUpdateWithoutPostInput,
      CommentUncheckedUpdateWithoutPostInput
    >
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutCommentInput
    >
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    links?: LinkCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserInput
    Comment?: CommentUpdateManyWithoutUserInput
    links?: LinkUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    sessions?: SessionUpdateManyWithoutUserInput
    customer?: CustomerUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    links?: LinkUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    customer?: CustomerUncheckedUpdateOneWithoutUserInput
  }

  export type PostCreateWithoutTagInput = {
    id: string
    title: string
    content?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number
    postId?: string | null
    author?: UserCreateNestedOneWithoutPostsInput
    Comment?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTagInput = {
    id: string
    title: string
    content?: string | null
    published?: boolean
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number
    postId?: string | null
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTagInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagInput, PostUncheckedCreateWithoutTagInput>
  }

  export type PostUpsertWithWhereUniqueWithoutTagInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutTagInput, PostUncheckedUpdateWithoutTagInput>
    create: XOR<PostCreateWithoutTagInput, PostUncheckedCreateWithoutTagInput>
  }

  export type PostUpdateWithWhereUniqueWithoutTagInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutTagInput, PostUncheckedUpdateWithoutTagInput>
  }

  export type PostUpdateManyWithWhereWithoutTagInput = {
    where: PostScalarWhereInput
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutPostsInput
    >
  }

  export type PostCreateWithoutCommentInput = {
    id: string
    title: string
    content?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number
    postId?: string | null
    author?: UserCreateNestedOneWithoutPostsInput
    Tag?: TagCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentInput = {
    id: string
    title: string
    content?: string | null
    published?: boolean
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number
    postId?: string | null
    tagId?: string | null
  }

  export type PostCreateOrConnectWithoutCommentInput = {
    where: PostWhereUniqueInput
    create: XOR<
      PostCreateWithoutCommentInput,
      PostUncheckedCreateWithoutCommentInput
    >
  }

  export type UserCreateWithoutCommentInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    links?: LinkCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutCommentInput,
      UserUncheckedCreateWithoutCommentInput
    >
  }

  export type PostUpsertWithoutCommentInput = {
    update: XOR<
      PostUpdateWithoutCommentInput,
      PostUncheckedUpdateWithoutCommentInput
    >
    create: XOR<
      PostCreateWithoutCommentInput,
      PostUncheckedCreateWithoutCommentInput
    >
  }

  export type PostUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneWithoutPostsInput
    Tag?: TagUpdateOneWithoutPostsInput
  }

  export type PostUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<
      UserUpdateWithoutCommentInput,
      UserUncheckedUpdateWithoutCommentInput
    >
    create: XOR<
      UserCreateWithoutCommentInput,
      UserUncheckedCreateWithoutCommentInput
    >
  }

  export type UserUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserInput
    links?: LinkUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    profile?: ProfileUpdateOneWithoutUserInput
    sessions?: SessionUpdateManyWithoutUserInput
    customer?: CustomerUpdateOneWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    links?: LinkUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
    customer?: CustomerUncheckedUpdateOneWithoutUserInput
  }

  export type AccountCreateWithoutInvitesInput = {
    id?: string
    providerType: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    idToken?: string | null
    sessionState?: string | null
    oauthTokenSecret?: string | null
    oauthToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scope?: string | null
    token_type?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateWithoutInvitesInput = {
    id?: string
    userId: string
    providerType: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    idToken?: string | null
    sessionState?: string | null
    oauthTokenSecret?: string | null
    oauthToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scope?: string | null
    token_type?: string | null
  }

  export type AccountCreateOrConnectWithoutInvitesInput = {
    where: AccountWhereUniqueInput
    create: XOR<
      AccountCreateWithoutInvitesInput,
      AccountUncheckedCreateWithoutInvitesInput
    >
  }

  export type AccountUpsertWithoutInvitesInput = {
    update: XOR<
      AccountUpdateWithoutInvitesInput,
      AccountUncheckedUpdateWithoutInvitesInput
    >
    create: XOR<
      AccountCreateWithoutInvitesInput,
      AccountUncheckedCreateWithoutInvitesInput
    >
  }

  export type AccountUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsInput
  }

  export type AccountUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutCustomerInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    links?: LinkCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutCustomerInput,
      UserUncheckedCreateWithoutCustomerInput
    >
  }

  export type UserUpsertWithoutCustomerInput = {
    update: XOR<
      UserUpdateWithoutCustomerInput,
      UserUncheckedUpdateWithoutCustomerInput
    >
    create: XOR<
      UserCreateWithoutCustomerInput,
      UserUncheckedCreateWithoutCustomerInput
    >
  }

  export type UserUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutUserInput
    Comment?: CommentUpdateManyWithoutUserInput
    links?: LinkUpdateManyWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
    profile?: ProfileUpdateOneWithoutUserInput
    sessions?: SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    Comment?: CommentUncheckedUpdateManyWithoutUserInput
    links?: LinkUncheckedUpdateManyWithoutUserInput
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
  }

  export type SubscriptionCreateWithoutPriceInput = {
    id: string
    userId: string
    start_date?: Date | string | null
    ended_at?: Date | string | null
    trial_end?: Date | string | null
    trial_start?: Date | string | null
    cancel_at?: Date | string | null
    cancel_at_period_end?: boolean | null
    canceled_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutPriceInput = {
    id: string
    userId: string
    start_date?: Date | string | null
    ended_at?: Date | string | null
    trial_end?: Date | string | null
    trial_start?: Date | string | null
    cancel_at?: Date | string | null
    cancel_at_period_end?: boolean | null
    canceled_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPriceInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<
      SubscriptionCreateWithoutPriceInput,
      SubscriptionUncheckedCreateWithoutPriceInput
    >
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPriceInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<
      SubscriptionUpdateWithoutPriceInput,
      SubscriptionUncheckedUpdateWithoutPriceInput
    >
    create: XOR<
      SubscriptionCreateWithoutPriceInput,
      SubscriptionUncheckedCreateWithoutPriceInput
    >
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPriceInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<
      SubscriptionUpdateWithoutPriceInput,
      SubscriptionUncheckedUpdateWithoutPriceInput
    >
  }

  export type SubscriptionUpdateManyWithWhereWithoutPriceInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyWithoutSubscriptionsInput
    >
  }

  export type SubscriptionScalarWhereInput = {
    AND?: Enumerable<SubscriptionScalarWhereInput>
    OR?: Enumerable<SubscriptionScalarWhereInput>
    NOT?: Enumerable<SubscriptionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    priceId?: StringFilter | string
    start_date?: DateTimeNullableFilter | Date | string | null
    ended_at?: DateTimeNullableFilter | Date | string | null
    trial_end?: DateTimeNullableFilter | Date | string | null
    trial_start?: DateTimeNullableFilter | Date | string | null
    cancel_at?: DateTimeNullableFilter | Date | string | null
    cancel_at_period_end?: BoolNullableFilter | boolean | null
    canceled_at?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PriceCreateWithoutSubscriptionsInput = {
    id?: string
    productId: string
    active?: boolean
    currency: string
    unitAmount?: number | null
    interval_count?: number | null
    trial_period_days?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    productId: string
    active?: boolean
    currency: string
    unitAmount?: number | null
    interval_count?: number | null
    trial_period_days?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceCreateOrConnectWithoutSubscriptionsInput = {
    where: PriceWhereUniqueInput
    create: XOR<
      PriceCreateWithoutSubscriptionsInput,
      PriceUncheckedCreateWithoutSubscriptionsInput
    >
  }

  export type PriceUpsertWithoutSubscriptionsInput = {
    update: XOR<
      PriceUpdateWithoutSubscriptionsInput,
      PriceUncheckedUpdateWithoutSubscriptionsInput
    >
    create: XOR<
      PriceCreateWithoutSubscriptionsInput,
      PriceUncheckedCreateWithoutSubscriptionsInput
    >
  }

  export type PriceUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    unitAmount?: NullableIntFieldUpdateOperationsInput | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    trial_period_days?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    unitAmount?: NullableIntFieldUpdateOperationsInput | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    trial_period_days?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateSent?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InviteUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateSent?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InviteUncheckedUpdateManyWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateSent?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    invites?: InviteUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    invites?: InviteUncheckedUpdateManyWithoutAccountInput
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionState?: NullableStringFieldUpdateOperationsInput | string | null
    oauthTokenSecret?: NullableStringFieldUpdateOperationsInput | string | null
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
    Post?: PostUpdateOneRequiredWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    Tag?: TagUpdateOneWithoutPostsInput
    Comment?: CommentUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    writtenById?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneWithoutPostsInput
    Comment?: CommentUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: IntFieldUpdateOperationsInput | number
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type SubscriptionUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    trial_start?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    canceled_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    trial_start?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    canceled_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trial_end?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    trial_start?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    canceled_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.DMMF.Document
}
