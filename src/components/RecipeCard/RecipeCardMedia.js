import CardMedia from "@mui/material/CardMedia";
import * as React from "react";

export default function RecipeCardMedia({image_url, altText}) {
    // TODO add the thumbnail over the video with a play button, then load video after click
    // const VideoMedia = () => {
    //     return <CardMedia
    //         component="video"
    //         height="250"
    //         controls
    //         src={videoUrl}
    //     />
    // }
    const ImageMedia = () => {
        return <CardMedia
            component="img"
            height="250"
            // TODO add responsive height to images
            image={image_url}
            alt={altText}
        />
    }
    return  <ImageMedia/>
        // return videoUrl ? <VideoMedia/> : <ImageMedia/>

}