import * as z from "zod"
import { UserRole } from "../../../../packages/types/prisma"
import { CompleteWebsite, relatedWebsiteModel, CompleteProject, relatedProjectModel, CompleteAccount, relatedAccountModel, CompleteGroup, relatedGroupModel } from "./index"

export const userModel = z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  first_name: z.string(),
  last_name: z.string().nullish(),
  title: z.string().nullish(),
  clickup_uid: z.string().nullish(),
  slack_uid: z.string().nullish(),
  zoho_uid: z.string().nullish(),
  bio: z.string().nullish(),
  group_id: z.number().int().nullish(),
  role: z.nativeEnum(UserRole),
  createdAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof userModel> {
  website: CompleteWebsite[]
  projects: CompleteProject[]
  accounts: CompleteAccount[]
  group?: CompleteGroup | null
}

/**
 * relatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => userModel.extend({
  website: relatedWebsiteModel.array(),
  projects: relatedProjectModel.array(),
  accounts: relatedAccountModel.array(),
  group: relatedGroupModel.nullish(),
}))
