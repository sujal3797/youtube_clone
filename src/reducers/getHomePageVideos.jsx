import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from '../utils/parseData.jsx';

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    'youtube/App/homePageVideos',
    async (isNext, { getState, rejectWithValue }) => {
      try {
        const {
          youtubeApp: { nextPageTokenFromState }
        } = getState();
  
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video${
            isNext ? `&pageToken=${nextPageTokenFromState}` : ""
          }`
        );

        const items = response.data.items;
        console.log(items);
        
        const parsedData = await parseData(response.data.items);

      } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);