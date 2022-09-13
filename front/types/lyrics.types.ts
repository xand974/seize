export interface LineModel {
  key: number;
  text: string;
}

export interface LyricsModel {
  id?: string;
  text: LineModel[];
  categories?: string[];
  bpm?: string;
  genre?: string;
  likes?: string[];
  comments?: string[];
  shares?: string[];
  views?: string[];
  bars?: number;
  status: "draft" | "completed";
  rank?: number;
  createdAt: Date | string;
}
