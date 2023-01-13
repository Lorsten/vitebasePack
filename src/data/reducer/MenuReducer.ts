import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type menuState = {
  activeMenu: Record<string, boolean>;
  zoomModifier: number;
  dragginElement: { name: string | null; active: boolean; shapeName: string | null };
  contextMenuActive: boolean;
};

type payload = {
  menuId: string;
  zoomModifier?: number;
};

const initialState: menuState = {
  activeMenu: {},
  zoomModifier: 0.3,
  dragginElement: { name: null, active: false, shapeName: null },
  contextMenuActive: false,
};

export const menuSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<payload>) => {
      const item: string = action.payload.menuId;
      state.activeMenu = { ...state.activeMenu, [item]: true };
    },
    changeZoom: (state, action: PayloadAction<number>) => {
      if (action.payload) {
        state.zoomModifier = action.payload;
      }
    },
    draggingElement: (state, action: PayloadAction<{ name: string; active: boolean; shapeName: string | null }>) => {
      state.dragginElement = action.payload;
    },
    modifyZoom: (state, action: PayloadAction<number>) => {
      if (state.zoomModifier + action.payload <= 0 || state.zoomModifier + action.payload >= 2) {
        return;
      }
      state.zoomModifier = state.zoomModifier + action.payload;
    },
    toggleContextMenu: (state, action: PayloadAction<boolean>) => {
      state.contextMenuActive = action.payload;
    },
  },
});
export const { toggleMenu, changeZoom, modifyZoom, draggingElement } = menuSlice.actions;

export default menuSlice.reducer;
