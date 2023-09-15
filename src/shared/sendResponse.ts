import { Response } from "express";

interface IMeta {
  page: number;
  limit: number;
  total: number;
}

interface ISendResponse<T> {
  status_code: number;
  success: boolean;
  message?: string | null;
  meta?: IMeta | null;
  data?: T | null;
}

const sendResponse = <T>(res: Response, data: ISendResponse<T>): void => {
  const response: ISendResponse<T> = {
    status_code: data.status_code,
    success: data.success,
    message: data?.message || null,
    meta: data?.meta || null,
    data: data?.data || null,
  };

  res.status(data.status_code).json(response);
};

export default sendResponse;
