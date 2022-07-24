
import * as z from "zod"

export const sessionModel = z.object({
  id: z.string(),
  sid: z.string(),
  data: z.string(),
  expiresAt: z.date(),
  createdAt: z.date(),
})
