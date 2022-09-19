import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LyricsModel } from "types";

interface WriteState {
  text: LyricsModel[];
  loading: boolean;
}
const initialState: WriteState = {
  text: [],
  loading: false,
};

export const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    SET_TEXT_START: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    SET_TEXT_COMPLETE: (state, action: PayloadAction<LyricsModel[]>) => {
      return {
        ...state,
        loading: false,
        text: [...action.payload],
      };
    },
  },
});

export default writeSlice.reducer;
export const { SET_TEXT_START } = writeSlice.actions;
