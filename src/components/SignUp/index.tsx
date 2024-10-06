"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import SvgLogin from "@/core/svgs/SvgLogin";
import useRequest from "@/lib/app/hooks/useRequest";

const SignUpComponent = () => {
    const requestServer = useRequest({notification: {success : true, show : true}})

    function HandleClick() {
        requestServer("/api/fake-sign-up", "post", {
            name: "amin"
        })
    }

    return (
        <Card className="w-full max-w-md shadow-lg rounded-lg p-5">
            <CardHeader className={"flex items-center justify-center gap-y-2"}>
                <SvgLogin height={100} width={200}/>
                <CardTitle className="text-2xl font-bold text-center text-primary">Sign Up</CardTitle>
                <CardDescription className="text-center text-gray-600 mt-2">
                    Sign up to get full access to the dashboard
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 mt-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary">Email</Label>
                    <Input id="email" type="text" placeholder="Enter your email"
                           className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-primary">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password"
                           className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm_password" className="text-primary">Confirm Password</Label>
                    <Input id="confirm_password" type="password" placeholder="Confirm your password"
                           className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"/>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center mt-6">
                <Button
                    onClick={HandleClick}
                    className="w-full py-2 hover:bg-primary text-white font-semibold rounded-md transition-transform transform hover:scale-105 focus:ring focus:outline-none">
                    Sign Up
                </Button>
            </CardFooter>
        </Card>
    )
}
export default SignUpComponent