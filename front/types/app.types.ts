import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  EditorScreen: undefined;
  HomeScreen: undefined;
  StepOneScreen: undefined;
  StepTwoScreen: undefined;
  StepThreeScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  LyricsScreen: undefined;
  RenderingScreen: undefined;
  ShareScreen: undefined;
  ProfileScreen: undefined;
  CtaScreen: undefined;
  SingScreen: undefined;
  WriteScreen: undefined;
  RecordScreen: undefined;
  FeedScreen: undefined;
  LoadingScreen: undefined;
};

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
