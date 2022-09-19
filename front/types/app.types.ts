import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  EditorScreen: undefined;
  HomeScreen: undefined;

  SingScreen: {
    screen?: string;
  };
  WriteScreen: {
    screen?: string;
  };

  //* SING SECTION
  SingStepOneScreen: undefined;
  SingStepTwoScreen: undefined;
  SingStepThreeScreen: undefined;

  //* Write Section
  WriteStepOneScreen: undefined;
  WriteStepTwoScreen: undefined;

  //* Login Section
  RegisterScreen: undefined;
  LoginScreen: undefined;
  LyricsScreen: undefined;

  RenderingScreen: undefined;
  ShareScreen: undefined;
  ProfileScreen: undefined;
  CtaScreen: undefined;
  RecordScreen: undefined;
  FeedScreen: undefined;
  LoadingScreen: undefined;
};

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
