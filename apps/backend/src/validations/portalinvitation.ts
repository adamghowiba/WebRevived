import * as z from "zod"
import { CompleteContact, relatedContactModel } from "./index"

export const portalInvitationModel = z.object({
  token: z.string(),
  expiration_date: z.date(),
  contact_id: z.number().int(),
})

export interface CompletePortalInvitation extends z.infer<typeof portalInvitationModel> {
  conatct: CompleteContact
}

/**
 * relatedPortalInvitationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedPortalInvitationModel: z.ZodSchema<CompletePortalInvitation> = z.lazy(() => portalInvitationModel.extend({
  conatct: relatedContactModel,
}))
