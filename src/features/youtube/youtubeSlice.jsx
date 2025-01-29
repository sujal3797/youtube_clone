import { createSlice } from '@reduxjs/toolkit';

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

    }
})

export default youtubeSlice.reducer;