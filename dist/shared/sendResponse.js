"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    const response = {
        status_code: data.status_code,
        success: data.success,
        message: (data === null || data === void 0 ? void 0 : data.message) || null,
        meta: (data === null || data === void 0 ? void 0 : data.meta) || null,
        data: (data === null || data === void 0 ? void 0 : data.data) || null,
    };
    res.status(data.status_code).json(response);
};
exports.default = sendResponse;
