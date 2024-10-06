"use client"
import axios from "axios";
import useUser from "@/lib/app/hooks/useUser";
import {errorRequest, errorResponse, errorSetting} from "@/core/utils/errorHandler";
import Notifications from "@/core/components/notifications";
import useToast from "@/lib/app/hooks/useToast";
import {successRequest} from "@/core/utils/successHandler";

const defaultOptions = {
    auth: false,
    data: {},
    requestOptions: {
        headers: {}
    },
    notification: true,
    pending: true,
    success: {
        notification: {
            show: true,
        },
    },
    failed: {
        notification: {
            show: true,
        },
    },
}
const useRequest = (initOptions) => {
    const {token, clearToken} = useUser()
    const {pushToastList, dismissToastList} = useToast();
    let _options = {...defaultOptions, ...initOptions}

    function requestServer(url = '', method = 'get', options) {
        _options = {..._options, ...options}
        if (_options.auth) _options = {
            ..._options, requestOptions: {
                ..._options.requestOptions,
                headers: {..._options.requestOptions.headers, authorization: `Bearer ${token}`}
            }
        }
        return new Promise((resolve, reject) => {
            if (_options.notification && _options.failed.notification.show && _options.pending) {
                dismissToastList(["pending", "warning", "error", "success"]);
                Notifications(pushToastList, "pending", "", "");
            }

            axios({
                url: url, method: method, data: _options.data, ..._options.requestOptions
            })
                .then(response => {
                    successRequest(pushToastList, dismissToastList, response, _options)
                    resolve(response)
                })
                .catch(error => {
                    if (error.response) {
                        errorResponse(pushToastList, dismissToastList, error.response, clearToken, _options.notification && _options.failed.notification.show)
                    } else if (error.request) {
                        errorRequest(dismissToastList, _options.notification && _options.failed.notification.show)
                    } else {
                        errorSetting(dismissToastList, _options.notification && _options.failed.notification.show)
                    }
                    reject(error)
                })
        });
    }

    return requestServer
}

export default useRequest