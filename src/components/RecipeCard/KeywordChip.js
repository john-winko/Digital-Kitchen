import {Chip} from "@mui/material";
import * as React from "react";

export default function KeywordChip({recipeJSON, keyword}) {
    let instances = (recipeJSON.match(new RegExp(keyword.keyword, 'ig')) || []).length
    let color = "#2f6e70"
    if (keyword.acceptability >= 0) {
        color = "#45b405"
    }
    if (keyword.acceptability <= 0) {
        color = "#b9b200"
    }
    if (keyword.acceptability < -5) {
        color = "#c01a1a"
    }

    if (instances > 0) {
        return (
            <Chip label={`${keyword.keyword} x${instances}`} color={"primary"}
                  style={{backgroundColor: color, marginInline: ".5rem"}}/>
        )
    }

    return null

}