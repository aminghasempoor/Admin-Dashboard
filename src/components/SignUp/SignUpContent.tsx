import {CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import React from "react";
import {FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

const SignUpContent = ({form}) => {
    return (
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
    )
}
export default SignUpContent