import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  EditorScreen: undefined;
  HomeScreen: undefined;

  SingScreen: {
    screen?: "SingStepOneScreen" | "SingStepTwoScreen" | "SingStepThreeScreen";
  };
  WriteScreen: {
    screen?: "WriteStepOneScreen" | "WriteStepTwoScreen";
  };

  //* Login Section
  RegisterScreen: undefined;
  LoginScreen: undefined;

  LyricsScreen: {
    data?: any;
  };
  RenderingScreen: undefined;
  ShareScreen: undefined;
  ProfileScreen: {
    data?: any;
  };
  CtaScreen: undefined;
  RecordScreen: undefined;
  FeedScreen: undefined;
  LoadingScreen: undefined;
  PlayScreen: {
    song?: any;
  };
};

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;

export interface SectionsType {
  title: string;
  contentDisplayed: string;
  isActive: boolean;
}
