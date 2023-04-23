import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedMeals: [],
};

const mealSlicer = createSlice({
  name: "meal",
  initialState,
  reducers: {
    addSavedMeal(state, action) {
      state.savedMeals = [...state.savedMeals, action.payload];
    },
    removeSavedMeal(state, action) {
      const meal_id = action.payload;
      state.savedMeals = state.savedMeals.filter(m => m !== meal_id);
    },
    // setSavedMeals(state, action) {
    //   state.savedMeals = [...state.savedMeals, action.payload];
    // },
  },
  //extraReducer ekle mealActions'da olusturulan createAsyncThunklar icin pending, fulfilled, rejeted caselerini ekle
});

export const { addSavedMeal, removeSavedMeal, setSavedMeals } = mealSlicer.actions;
export default mealSlicer.reducer;
