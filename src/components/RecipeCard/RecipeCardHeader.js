import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function RecipeCardHeader({name, isFavorite, toggleFavorite}) {

    return (
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor: "red"}} aria-label={"recipes"}>
                    R
                </Avatar>
            }
            action={
                <div>
                    {isFavorite ? "Saved to collection " : null}
                    <IconButton aria-label={"settings"} onClick={toggleFavorite}>
                        <FavoriteIcon sx={isFavorite ? {color: "red"} : null}/>
                    </IconButton>
                </div>
            }
            title={name}
            // TODO add subheader credits to author or date added
            // subheader={dayjs(addDate * 1000).format("MMMM D, YYYY")}
        />
    )
}