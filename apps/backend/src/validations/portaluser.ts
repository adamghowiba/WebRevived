import * as z from "zod"
import { CompleteContact, relatedContactModel, CompletePortal, relatedPortalModel } from "./index"

export const portalUserModel = z.object({
  password: z.string(),
  contact_id: z.number().int(),
  portal_id: z.number().int(),
})

export interface CompletePortalUser extends z.infer<typeof portalUserModel> {
  contact: CompleteContact
  portal: CompletePortal
}

/**
 * relatedPortalUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedPortalUserModel: z.ZodSchema<CompletePortalUser> = z.lazy(() => portalUserModel.extend({
  contact: relatedContactModel,
  portal: relatedPortalModel,
}))
