import * as z from "zod"
import { CompleteForm, relatedFormModel, CompleteUser, relatedUserModel, CompleteAccount, relatedAccountModel } from "./index"

export const websiteModel = z.object({
  id: z.number().int(),
  account_id: z.number().int(),
  url: z.string(),
})

export interface CompleteWebsite extends z.infer<typeof websiteModel> {
  forms: CompleteForm[]
  users: CompleteUser[]
  account: CompleteAccount
}

/**
 * relatedWebsiteModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedWebsiteModel: z.ZodSchema<CompleteWebsite> = z.lazy(() => websiteModel.extend({
  forms: relatedFormModel.array(),
  users: relatedUserModel.array(),
  account: relatedAccountModel,
}))
