import { t } from "elysia";

export const registerSchema = t.Object({
    name : t.String({ minLength: 2, maxLength: 20, error: "nama karakter minimal 2 dan maksimal 20" }),
    email : t.String({ format: "email", error: "email tidak valid" }),
    password : t.String({ minLength: 8, error: "password minimal 8 karakter" })
})
export const LoginSchema = t.Object({
    email : t.String({ format: "email", error: "email tidak valid" }),
    password : t.String({ minLength: 8, error: "password minimal 8 karakter" })
})