export type RecordState =
  | "playBack"
  | "validate"
  | "play"
  | "uploadImage"
  | "seePreview";
export type RecordFooterType = {
  isRecording: boolean;
  setRecordAction: (action: RecordState) => void;
  type: "record" | "edit";
  disabled?: boolean;
};

export type ActionType = {
  [key: string]: {
    icon: string;
    tag: RecordState;
    style?: string;
  }[];
};
