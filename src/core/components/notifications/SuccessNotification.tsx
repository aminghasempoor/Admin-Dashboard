"use client"
import {toast} from "@/hooks/use-toast";
import {Check} from "lucide-react";

const SuccessNotification = (pushToastList, notificationType, status) => {
    console.log(status)
    const toastId =
        toast(
            {
                description: (
                    <div className="flex items-center justify-center">
                        <Check/>
                        <div className="flex flex-col">
                            <h1 className="text-green-600"> {/* Use your class for success color */}
                                {status}
                            </h1>
                            <h6>
                                hello
                            </h6>
                        </div>
                    </div>
                )
            }
        );
    pushToastList(notificationType, toastId);
};

export default SuccessNotification;