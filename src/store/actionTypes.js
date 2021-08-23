import { createAction } from "@reduxjs/toolkit";

export const preFetch = createAction("preFetch");
export const apiRequest = createAction("api/request");
export const successReq = createAction("api/success");
export const failedReq = createAction("api/failed");
