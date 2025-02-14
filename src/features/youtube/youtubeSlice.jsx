import { createSlice } from '@reduxjs/toolkit';
import { getHomePageVideos } from '../../reducers/getHomePageVideos.jsx';

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
};

const youtubeSlice = createSlice({
    name: 'youtubeApp',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
          if (action.payload && action.payload.items) {
            state.videos = action.payload.items;
            state.nextPageToken = action.payload.nextPageToken;
          } else {
            console.error("Invalid payload structure:", action.payload);
          }
        });
    }
})

export default youtubeSlice.reducer;