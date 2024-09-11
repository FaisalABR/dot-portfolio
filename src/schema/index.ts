import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({
      required_error: "Field email must be fill!",
    })
    .email(),
  subject: z
    .string({
      required_error: "Field subject must be fill!",
    })
    .min(3, {
      message: "Subject must be at least 3 characters. ",
    }),
  content: z
    .string({
      required_error: "Field content must be fill!",
    })
    .min(3, {
      message: "Content must be at least 3 characters. ",
    }),
});
