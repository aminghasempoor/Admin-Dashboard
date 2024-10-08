"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import SvgRegister from "@/core/svgs/SvgRegister";
import useRequest from "@/lib/app/hooks/useRequest";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {signInSchema} from "@/lib/formSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import StyledForm from "@/core/components/StyledForm";
import Link from "next/link";
import {GET_USER_TOKEN} from "@/core/utils/routes";
import useUser from "@/lib/app/hooks/useUser";

const SignInComponent = () => {
    const {setToken} = useUser();
    const requestServer = useRequest({notification: {success : true, show : true}})
    const defaultValues = {
        email: "",
        password: "",
    };
    const form = useForm<z.infer<typeof signInSchema>>({
        defaultValues,
        resolver: zodResolver(signInSchema),
        mode: "onBlur",
    });

    async function HandleSubmitClick(values: z.infer<typeof signInSchema>) {
        console.log(values);
        requestServer(GET_USER_TOKEN, "post",{
            data: {
                email: values.email,
                password: values.password,
            },
            success: {
                notification: {show: false}
            }
        }).then((response)=>{
            setToken(response.data.token)
            console.log(response)
        }).catch()
    }
    return (
        <Form {...form} >
            <StyledForm onSubmit={form.handleSubmit(HandleSubmitClick)}>
                <Card className="w-full shadow-none rounded-lg p-5 dark:opacity-80">
                    <CardHeader className="flex items-center justify-center p-4 gap-y-2">
                        <SvgRegister height={100} width={200}/>
                        <CardTitle className="text-2xl font-bold text-center text-primary">Sign In</CardTitle>
                        <CardDescription className="text-center text-gray-600 mt-2">
                            Sign in to get full access to the dashboard
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
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center mt-3 gap-y-3">
                        <p className="text-sm text-gray-600">
                            Do not you have an account ?{" "}
                            <Link href={"/signup"} className="text-primary font-medium hover:underline">
                                Sign Up
                            </Link>
                        </p>
                        <Button
                            type="submit"
                            className="w-full py-2 hover:bg-primary text-white font-semibold rounded-md transition-transform transform hover:scale-105 focus:ring focus:outline-none"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? "Submitting..." : "Sign In"}
                        </Button>
                    </CardFooter>
                </Card>
            </StyledForm>
        </Form>

    )
}
export default SignInComponent