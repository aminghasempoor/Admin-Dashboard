"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";
import SvgLogin from "@/core/svgs/SvgLogin";
import useRequest from "@/lib/app/hooks/useRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {signUpSchema} from "@/lib/formSchema";
import {z} from "zod";
import StyledForm from "@/core/components/StyledForm";
import Link from "next/link";

const SignUpComponent = () => {
    const requestServer = useRequest({notification: {success: true, show: true}});

    const defaultValues = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    const form = useForm<z.infer<typeof signUpSchema>>({
        defaultValues,
        resolver: zodResolver(signUpSchema),
        mode: "onBlur",
    });

    async function HandleSubmitClick(values: z.infer<typeof signUpSchema>) {
        console.log(values);
        // requestServer("/api/fake-sign-up", "post", {
        //     data : {
        //         email: "amin@gmail.com",
        //         password: "123456",
        //         confirmPassword: "123456",
        //     }
        // })
    }

    return (
        <Form {...form} >
            <StyledForm  onSubmit={form.handleSubmit(HandleSubmitClick)}>
                <Card className="w-full shadow-none rounded-lg p-5 dark:opacity-80">
                    <CardHeader className="flex items-center justify-center p-4 gap-y-2">
                        <SvgLogin height={100} width={200}/>
                        <CardTitle className="text-2xl font-bold text-center text-primary">Sign Up</CardTitle>
                        <CardDescription className="text-center text-gray-600 mt-2">
                            Sign up to get full access to the dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 mt-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        placeholder="Enter your email"
                                        {...field}
                                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                    />
                                    {form.formState.errors.email &&
                                        <FormMessage>{form.formState.errors.email.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="Create a password"
                                        {...field}
                                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                    />
                                    {form.formState.errors.password &&
                                        <FormMessage>{form.formState.errors.password.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="Confirm your password"
                                        {...field}
                                        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                    />
                                    {form.formState.errors.confirmPassword && (
                                        <FormMessage>{form.formState.errors.confirmPassword.message}</FormMessage>
                                    )}
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center mt-3 gap-y-3">
                        <p className="text-sm text-gray-600">
                            Already have an account ?{" "}
                            <Link href={"/signin"} className="text-primary font-medium hover:underline">
                                Sign In
                            </Link>
                        </p>
                        <Button
                            type="submit"
                            className="w-full py-2 hover:bg-primary text-white font-semibold rounded-md transition-transform transform hover:scale-105 focus:ring focus:outline-none"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? "Submitting..." : "Sign Up"}
                        </Button>
                    </CardFooter>
                </Card>
            </StyledForm>
        </Form>
    );
};

export default SignUpComponent;
