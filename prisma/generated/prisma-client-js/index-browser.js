Object.defineProperty(exports, '__esModule', { value: true })

const { Decimal } = require('./runtime/index-browser')

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.24.1
 * Query Engine version: 18095475d5ee64536e2f93995e48ad800737a9e4
 */
Prisma.prismaVersion = {
  client: '2.24.1',
  engine: '18095475d5ee64536e2f93995e48ad800737a9e4',
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) {
  return x
}

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  providerType: 'providerType',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refreshToken: 'refreshToken',
  accessToken: 'accessToken',
  accessTokenExpires: 'accessTokenExpires',
  idToken: 'idToken',
  sessionState: 'sessionState',
  oauthTokenSecret: 'oauthTokenSecret',
  oauthToken: 'oauthToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  scope: 'scope',
  token_type: 'token_type',
})

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires',
})

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  username: 'username',
  password: 'password',
})

exports.Prisma.VerificationTokenScalarFieldEnum = makeEnum({
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})

exports.Prisma.VerificationRequestScalarFieldEnum = makeEnum({
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})

exports.Prisma.LinkScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  url: 'url',
  shortUrl: 'shortUrl',
  userId: 'userId',
})

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  content: 'content',
  published: 'published',
  authorId: 'authorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  viewCount: 'viewCount',
  postId: 'postId',
  tagId: 'tagId',
})

exports.Prisma.ProfileScalarFieldEnum = makeEnum({
  id: 'id',
  bio: 'bio',
  userId: 'userId',
})

exports.Prisma.TagScalarFieldEnum = makeEnum({
  id: 'id',
  tag: 'tag',
})

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  comment: 'comment',
  writtenById: 'writtenById',
  postId: 'postId',
  userId: 'userId',
})

exports.Prisma.InviteScalarFieldEnum = makeEnum({
  id: 'id',
  dateSent: 'dateSent',
  email: 'email',
  accountId: 'accountId',
  isValid: 'isValid',
})

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  active: 'active',
  name: 'name',
  description: 'description',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})

exports.Prisma.PriceScalarFieldEnum = makeEnum({
  id: 'id',
  productId: 'productId',
  active: 'active',
  currency: 'currency',
  unitAmount: 'unitAmount',
  interval_count: 'interval_count',
  trial_period_days: 'trial_period_days',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})

exports.Prisma.SubscriptionScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  priceId: 'priceId',
  start_date: 'start_date',
  ended_at: 'ended_at',
  trial_end: 'trial_end',
  trial_start: 'trial_start',
  cancel_at: 'cancel_at',
  cancel_at_period_end: 'cancel_at_period_end',
  canceled_at: 'canceled_at',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc',
})

exports.Prisma.ModelName = makeEnum({
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  VerificationRequest: 'VerificationRequest',
  Link: 'Link',
  Post: 'Post',
  Profile: 'Profile',
  Tag: 'Tag',
  Comment: 'Comment',
  Invite: 'Invite',
  Customer: 'Customer',
  Product: 'Product',
  Price: 'Price',
  Subscription: 'Subscription',
})

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
