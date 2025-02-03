/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-global-this */
/* eslint-disable typescript/consistent-type-definitions */

import type { AxiosInstance, AxiosRequestHeaders } from "axios";
import axios from "axios";

declare global {
    interface Window {
        axios: AxiosInstance;
    }
}

window.axios = axios.create({
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    } as unknown as AxiosRequestHeaders
});
