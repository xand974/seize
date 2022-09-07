import { RouteType } from "../types/index";

export const redirect = (
  navigation: RouteType["navigation"],
  to: string
): void => navigation.navigate(to);

export const sleep = async (ms: number) =>
  await new Promise((res) => setTimeout(res, ms));
