import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import dayjs from "dayjs";

export default function RecipeCardHeader({name, addDate, author}) {
    const dd = new Date(1634234436 * 1000)
    return (
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor: "red"}} aria-label={"recipes"}>
                    R
                </Avatar>
            }
            action={
                <IconButton aria-label={"settings"}>
                    <MoreVertIcon/>
                </IconButton>
            }
            title={name}
            // TODO add credits to author
            subheader={dayjs(addDate * 1000).format("MMMM D, YYYY")}
        />
    )
}