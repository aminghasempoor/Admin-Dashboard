"use client"
import {z} from "zod"
export const signInSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email format" }),
    password : z.string().min(1,{message : "Password is required"})
});
export const signUpSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email format" }),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'], // This will attach the error to the confirmPassword field
    message: "Passwords do not match",
});