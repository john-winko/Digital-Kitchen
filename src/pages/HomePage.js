import {Grid} from "@mui/material";

function HomePage() {
    return (
        <Grid container className={"homePage"} spacing={2} direction={"row"}>
            <Grid item xs={2} />
            <Grid item xs>
                <h1>Welcome to the digital kitchen</h1>
                <img
                        src={"https://images.unsplash.com/photo-1650142700236-f1889e0193b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"}/>

                <p>"Whether it's from your favorite tasty episode or a blog post your family sent you on social
                    media this is your stop to collect, arrange and plan your favorite meals"<br/><br/>
                    This site uses the Tasty and CookBook.io API's to browse, search and parse recipes across the internet
                </p>
            </Grid>
<Grid item xs={2} />


        </Grid>
    )
}

export default HomePage

            // <Grid container direction={"row"}>
            //     <Grid item xs={6}>
            //         <img
            //             src={"https://images.unsplash.com/photo-1650142700236-f1889e0193b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"}/>
            //     </Grid>
            //     <Grid item xs={6}>
            //         <img
            //             src={"https://images.unsplash.com/photo-1650142700236-f1889e0193b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"}/>
            //
            //     </Grid>
            //     <Grid item xs={6}>
            //         <img
            //             src={"https://images.unsplash.com/photo-1650142700236-f1889e0193b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"}/>
            //     </Grid>
            //     <Grid item xs={6}>
            //         <img
            //             src={"https://images.unsplash.com/photo-1650142700236-f1889e0193b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"}/>
            //     </Grid>