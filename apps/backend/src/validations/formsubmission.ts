import * as z from "zod"
import { CompleteForm, relatedFormModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const formSubmissionModel = z.object({
  id: z.number().int(),
  data: jsonSchema,
  from_id: z.number().int(),
  submittedDate: z.date(),
})

export interface CompleteFormSubmission extends z.infer<typeof formSubmissionModel> {
  form: CompleteForm
}

/**
 * relatedFormSubmissionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedFormSubmissionModel: z.ZodSchema<CompleteFormSubmission> = z.lazy(() => formSubmissionModel.extend({
  form: relatedFormModel,
}))
