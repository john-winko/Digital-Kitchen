import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {Grid, List} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {MyCollectionContext} from "../context/MyCollection";
import MealListItem from "../components/MealListItem";
import {useAxios} from "../utils/useAxios";
import dayjs from "dayjs";
import MealPlanItem from "../components/MealPlanItem";


export default function MealPlanning() {
    const {myRecipes} = useContext(MyCollectionContext)
    const [selDate, setSelDate] = useState(new Date())
    const [isDirty, setIsDirty] = useState(true)
    const [meals, setMeals] = useState([])
    const backend = useAxios()

    const addMeal = (mealDate, recipe, mealType) => {
        const params = {
            "user_recipe": recipe.id,
            "meal_type": mealType,
            "meal_date": dayjs(mealDate).format('YYYY-MM-DD')
        }
        backend.post('/api/v1/meal/', params)
            .then((res) => {
                setIsDirty(true)
            })
    }

    const deleteMeal = (mealID) => {
        backend.delete(`/api/v1/meal/${mealID}/`).then((res) => {
            setIsDirty(true)
        })
    }

    useEffect(() => {
        if (isDirty) {
            backend.get('/api/v1/meal/')
                .then((res) => {
                    setMeals(res.data)
                })
        }
        setIsDirty(false)

    }, [isDirty])

    return (
        <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <h2>Meal Date {selDate.toLocaleDateString()}</h2>
                        <Calendar onChange={setSelDate} value={selDate}/>
                    </Grid>
                    <Grid item>
                        <h2>Meal Plan</h2>
                        <List dense>
                            {meals.map((meal) =>
                                <MealPlanItem key={meal.id} mealPlan={meal} deleteMeal={deleteMeal}/>)
                            }
                        </List>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
                <h2>Meal List</h2>
                <List>
                    {myRecipes.map((recipe) =>
                        <MealListItem key={recipe.id}
                                      recipe={recipe}
                                      selDate={selDate}
                                      addMeal={addMeal}
                        />)
                    }
                </List>
            </Grid>
        </Grid>
    )
}