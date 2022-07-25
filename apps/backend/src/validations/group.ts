import * as z from "zod"
import { CompleteUser, relatedUserModel } from "./index"

export const groupModel = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
})

export interface CompleteGroup extends z.infer<typeof groupModel> {
  users: CompleteUser[]
}

/**
 * relatedGroupModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedGroupModel: z.ZodSchema<CompleteGroup> = z.lazy(() => groupModel.extend({
  users: relatedUserModel.array(),
}))
