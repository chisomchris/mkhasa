import axios from "axios";
import { env } from "./env";
import z from "zod";

export const TokenSchema = z.object({
  access_token: z.string(),
  access_token_expires: z.number().positive(),
  refresh_token: z.string(),
});

export const TokenRequestParamsSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  access_token: z.string().min(12).optional(),
  provider: z.enum(["google", "credentials"]),
});

export type Token = z.infer<typeof TokenSchema>;

export type TokenRequestParams = z.infer<typeof TokenRequestParamsSchema>;

export async function requestToken({
  id,
  email,
  provider,
  access_token,
}: TokenRequestParams) {
  try {
    const response = await axios.post(`${env.API_BASE_URL}/token`, {
      id,
      email,
      provider,
      access_token,
    });

    if (response.status !== 200) {
      return null;
    }
    const token = TokenSchema.parse(response.data);
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
}
