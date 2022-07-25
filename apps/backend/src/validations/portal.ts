import * as z from "zod"
import { CompletePortalUser, relatedPortalUserModel, CompleteAccount, relatedAccountModel } from "./index"

export const portalModel = z.object({
  id: z.number().int(),
  account_id: z.number().int(),
})

export interface CompletePortal extends z.infer<typeof portalModel> {
  users: CompletePortalUser[]
  account: CompleteAccount
}

/**
 * relatedPortalModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedPortalModel: z.ZodSchema<CompletePortal> = z.lazy(() => portalModel.extend({
  users: relatedPortalUserModel.array(),
  account: relatedAccountModel,
}))
