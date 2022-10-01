import React from "react";
import Toast from "./Toast";
import { ToastProp } from "../../types/index";

export default class ToastService {
  public static Instance: ToastService = new ToastService();

  public log({ status, message }: ToastProp) {
    return <Toast status={status} message={message} />;
  }
}
