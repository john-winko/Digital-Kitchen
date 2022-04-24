import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {List} from "@mui/material";
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
        // console.log(`adding meal ${mealType} on ${mealDate}`, recipe)
        const params = {
            "user_recipe": recipe.id,
            "meal_type": mealType,
            "meal_date": dayjs(mealDate).format('YYYY-MM-DD')
        }
        backend.post('/api/v1/meal/', params)
            .then((res) => {
                console.log("res add meal", res)
                setIsDirty(true)
            })
    }

    const deleteMeal = (mealID) => {
        backend.delete(`/api/v1/meal/${mealID}/`).then((res) => {
            console.log("deleted", res)
            setIsDirty(true)
        })
    }

    useEffect(() => {
        if (isDirty) {
            backend.get('/api/v1/meal/')
                .then((res) => {
                    console.log("meal response", res.data)
                    setMeals(res.data)
                })
        }
        setIsDirty(false)

    }, [isDirty])

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                <div style={{marginInline: "auto"}}>
                    <h3 style={{textAlign: "center"}}>Meal Date {selDate.toLocaleDateString()}</h3>
                    <Calendar onChange={setSelDate} value={selDate}/>
                </div>
                <div style={{marginInline: "auto"}}>
                    <h3 style={{textAlign: "center"}}>Meal List</h3>
                    <List style={{
                        maxHeight: "70vh",
                        overflow: "auto",
                        backgroundColor: "#dddddd",
                        borderRadius: "2rem",
                        paddingRight: "2rem"
                    }}>
                        {myRecipes.map((recipe) => <MealListItem key={recipe.id} recipe={recipe} selDate={selDate}
                                                                 addMeal={addMeal}/>)}
                    </List>
                </div>
            </div>
            <hr style={{marginBlock: "2rem"}}/>
            <div>
                <h2 style={{textAlign: "center"}}>Meal Plan</h2>
                <List dense>
                    {meals.map((meal) => <MealPlanItem key={meal.id} mealPlan={meal} deleteMeal={deleteMeal}/>)}
                </List>

            </div>
        </div>
    )
}