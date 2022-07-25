import * as z from "zod"
import { CompleteUser, relatedUserModel, CompleteContact, relatedContactModel, CompleteWebsite, relatedWebsiteModel, CompletePortal, relatedPortalModel, CompleteProject, relatedProjectModel } from "./index"

export const accountModel = z.object({
  id: z.number().int(),
  name: z.string(),
  industry: z.string().nullish(),
  phone: z.string().nullish(),
  street: z.string().nullish(),
  city: z.string().nullish(),
  state: z.string().nullish(),
  code: z.string().nullish(),
  country: z.string().nullish(),
})

export interface CompleteAccount extends z.infer<typeof accountModel> {
  users: CompleteUser[]
  contacts: CompleteContact[]
  websites: CompleteWebsite[]
  portal?: CompletePortal | null
  projects: CompleteProject[]
}

/**
 * relatedAccountModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedAccountModel: z.ZodSchema<CompleteAccount> = z.lazy(() => accountModel.extend({
  users: relatedUserModel.array(),
  contacts: relatedContactModel.array(),
  websites: relatedWebsiteModel.array(),
  portal: relatedPortalModel.nullish(),
  projects: relatedProjectModel.array(),
}))
