import { RouteType } from "../types/index";

export const redirect = (
  navigation: RouteType["navigation"],
  to: string
): void => navigation.navigate(to);
