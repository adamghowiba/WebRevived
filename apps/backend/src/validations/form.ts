import * as z from "zod"
import { CompleteWebsite, relatedWebsiteModel, CompleteContact, relatedContactModel, CompleteFormSubmission, relatedFormSubmissionModel } from "./index"

export const formModel = z.object({
  id: z.number().int(),
  name: z.string(),
  website_id: z.number().int(),
})

export interface CompleteForm extends z.infer<typeof formModel> {
  website: CompleteWebsite
  contacts: CompleteContact[]
  form_submissions: CompleteFormSubmission[]
}

/**
 * relatedFormModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedFormModel: z.ZodSchema<CompleteForm> = z.lazy(() => formModel.extend({
  website: relatedWebsiteModel,
  contacts: relatedContactModel.array(),
  form_submissions: relatedFormSubmissionModel.array(),
}))
