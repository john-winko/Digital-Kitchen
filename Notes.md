# Complete
- 

# QA / UI polish
- Keywords
- Wireframe
- Cleanup login page
- Refactor Layout to use bootstrap <Container>
- Meal Browsing
- Add meals to personal catalog
- Add tags to recipes based on keyword prefs
- /whoami to grab user info after login
- Save id and name for list of favorites, sync with user profile w/ backend calls
- Create calendaring for recipes
- Remove up/down votes
- Create My Recipes list of what has been saved to favorites

# In progress
- Start working api calls from backend (send cached json for first result, api calls if there are parameters)
- Add 2nd Api

# Backlog
- Create logo for navbar
- Recent favorites not updating to actual latest added (update view queryset)
- Implement Search in Sidebar
- Make data models/serializers for the JSON recipes from Tasty API
- Add ingredients/steps to RecipeCard
- Grab/parse meal types and replace int with strings in todo's
- Rearrange format of meal planning so meal list takes up long view of page
- Create single recipe card route/page
- use overflow auto for recipes to make pagination easier
- Add pagination to recipe list
- refresh token is making 3 calls
- Move favoriting to top right
- recipe list, option at top to hide current favorites
- Split recipe card show image left, chips right (limit to 10/15?), move keyword chips to top

# Stretch
- Save tag preferences as well
- Implement signup
- Implement footer
- Make search areas smaller (in sidebar)
- Security, retrieve keys from backend (don't store in React->.env instead use django to pull .env and serve to react app in useContext)
- Try to wrap a context inside the Routes (how to?)
- Back to top button after scrolling
- Is there a more elegant way of doing logic on component load without using state variables loading/dirty (to prevent multiple callbacks)
