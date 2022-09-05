export type RecordState =
  | "PlayBack"
  | "Validate"
  | "Play"
  | "UploadImage"
  | "SeePreview";
export type RecordFooterType = {
  isRecording: boolean;
  setRecordAction: (action: RecordState) => void;
  type: "record" | "edit";
};

export type ActionType = {
  [key: string]: {
    icon: string;
    tag: RecordState;
    style?: string;
  }[];
};
