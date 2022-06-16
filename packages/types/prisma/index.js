
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'


const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "..\\..\\packages\\types",
    "..\\packages\\types",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname
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

const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Code\\Personal Production\\WebRevived\\packages\\types",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "..\\..\\apps\\backend\\.env"
  },
  "relativePath": "..\\..\\apps\\backend\\prisma",
  "clientVersion": "3.14.0",
  "engineVersion": "2b0c12756921c891fec4f68d9444e18c7d5d4a6a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql"
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})
const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "..\\..\\packages\\types\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "..\\..\\packages\\types\\schema.prisma")