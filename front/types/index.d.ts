declare module "@react-navigation/native" {
  export function useNavigation<
    T = NavigationProp<ReactNavigation.RootParamList>
  >(): T;
  export function navigate<RouteName extends keyof ParamList>(
    ...args: RouteName extends unknown
      ? undefined extends ParamList[RouteName]
        ?
            | [screen: RouteName]
            | [screen: RouteName, params: ParamList[RouteName]]
        : [screen: RouteName, params: ParamList[RouteName]]
      : never
  ): void;
}
