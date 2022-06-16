
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.14.0
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.14.0",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
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
});

exports.Prisma.GroupScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt'
});

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  type: 'type',
  description: 'description',
  slack_channel: 'slack_channel',
  account_id: 'account_id',
  due_date: 'due_date',
  createdAt: 'createdAt'
});

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  industry: 'industry',
  phone: 'phone',
  street: 'street',
  city: 'city',
  state: 'state',
  code: 'code',
  country: 'country'
});

exports.Prisma.ContactScalarFieldEnum = makeEnum({
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  title: 'title',
  email: 'email',
  phone: 'phone',
  portal_uid: 'portal_uid',
  projectId: 'projectId'
});

exports.Prisma.WebsiteScalarFieldEnum = makeEnum({
  id: 'id',
  account_id: 'account_id',
  url: 'url'
});

exports.Prisma.PortalUserScalarFieldEnum = makeEnum({
  password: 'password',
  contact_id: 'contact_id',
  portal_id: 'portal_id'
});

exports.Prisma.PortalInvitationScalarFieldEnum = makeEnum({
  token: 'token',
  expiration_date: 'expiration_date',
  contact_id: 'contact_id'
});

exports.Prisma.PortalScalarFieldEnum = makeEnum({
  id: 'id',
  account_id: 'account_id'
});

exports.Prisma.FormScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  website_id: 'website_id'
});

exports.Prisma.FormSubmissionScalarFieldEnum = makeEnum({
  id: 'id',
  data: 'data',
  from_id: 'from_id',
  submittedDate: 'submittedDate'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  sid: 'sid',
  data: 'data',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});
exports.UserRole = makeEnum({
  GUEST: 'GUEST',
  DESIGNER: 'DESIGNER',
  DEVELOPER: 'DEVELOPER',
  ADMIN: 'ADMIN'
});

exports.Prisma.ModelName = makeEnum({
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
});

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
