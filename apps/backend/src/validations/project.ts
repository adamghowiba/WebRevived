import * as z from "zod"
import { CompleteContact, relatedContactModel, CompleteUser, relatedUserModel, CompleteAccount, relatedAccountModel } from "./index"

export const projectModel = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  slack_channel: z.string().nullish(),
  account_id: z.number().int().nullish(),
  due_date: z.date().nullish(),
  createdAt: z.date(),
})

export interface CompleteProject extends z.infer<typeof projectModel> {
  contacts: CompleteContact[]
  users: CompleteUser[]
  account?: CompleteAccount | null
}

/**
 * relatedProjectModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProjectModel: z.ZodSchema<CompleteProject> = z.lazy(() => projectModel.extend({
  contacts: relatedContactModel.array(),
  users: relatedUserModel.array(),
  account: relatedAccountModel.nullish(),
}))
