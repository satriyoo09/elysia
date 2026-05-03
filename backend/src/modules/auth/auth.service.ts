import { db } from "../../db";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";
import { hashPassword, veryfyPassword } from "../../utils/hash";

export const RegisterUsers = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
    const exixting = await db
        .select()
        .from(users)
        .where(eq(users.email, data.email));

    if (exixting.length > 0) {
        throw new Error("Email sudah terdaftar");
    } 
    const hashed = await hashPassword(data.password)
    const [newUser] = await db 
        .insert(users)
        .values({
            name: data.name,
            email: data.email,
            password: hashed,
            role: "USER"
        })
        .returning({
            id: users.id,
            name: users.name,
            email: users.email,
            role: users.role
        })
    return newUser
}
export const LoginUsers = async (data: {
    email: string
    password: string
}) => {
    const [User] = await db
        .select()
        .from(users)
        .where(eq(users.email, data.email))
        .limit(1)

    if (!User) {
        throw new Error("Email tidak ditemukan")
    }
    const isValid = await veryfyPassword(data.password, User.password)

    if (!isValid) {
        throw new Error("Password salah")
    }
    return {
        id: User.id,
        name: User.name,
        email: User.email,
        role: User.role
    }
}