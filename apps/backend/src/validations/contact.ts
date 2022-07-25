import * as z from "zod"
import { CompleteForm, relatedFormModel, CompleteAccount, relatedAccountModel, CompletePortalInvitation, relatedPortalInvitationModel, CompletePortalUser, relatedPortalUserModel, CompleteProject, relatedProjectModel } from "./index"

export const contactModel = z.object({
  id: z.number().int(),
  first_name: z.string(),
  last_name: z.string(),
  title: z.string(),
  email: z.string(),
  phone: z.string().nullish(),
  portal_uid: z.number().int().nullish(),
  projectId: z.number().int().nullish(),
})

export interface CompleteContact extends z.infer<typeof contactModel> {
  forms: CompleteForm[]
  account: CompleteAccount[]
  portal_token?: CompletePortalInvitation | null
  portal_user?: CompletePortalUser | null
  projects: CompleteProject[]
}

/**
 * relatedContactModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedContactModel: z.ZodSchema<CompleteContact> = z.lazy(() => contactModel.extend({
  forms: relatedFormModel.array(),
  account: relatedAccountModel.array(),
  portal_token: relatedPortalInvitationModel.nullish(),
  portal_user: relatedPortalUserModel.nullish(),
  projects: relatedProjectModel.array(),
}))
