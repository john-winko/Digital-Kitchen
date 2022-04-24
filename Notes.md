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
- Start working api calls from backend (send cached json for first result, api calls if there are parameters)
- Add 2nd Api
- Add serializer for Url and Tasty apis
- Refactor parse_url in backend to grab json file instead of api and serialize based on info then send to front end
- Implement Search in Sidebar
- Make data models/serializers for the JSON recipes from Tasty API
- Add ingredients/steps to RecipeCard
- Create single recipe card route/page
- Add pagination to recipe list
- Move favoriting to top right
- Split recipe card show image left, chips right (limit to 10/15?), move keyword chips to top
- Rearrange format of meal planning so meal list takes up long view of page

# In progress
- Add wait icon for api loads on front end
- Grab/parse meal types and replace int with strings in todo's

# Backlog
- Create logo for navbar
- refresh token is making 3 calls
- Add correct number of paginations on recipe listing favorites/browse/search

# Stretch
- Save tag preferences as well
- Fix the underline in search boxes
- recipe list, option at top to hide current favorites
- Custom serialization of different recipe apis into one model on our backend
- Implement signup
- Implement footer
- Add custom coloring for keyword preferences (allow user to set for their profile)
- Make search areas smaller (in sidebar)
- Security, retrieve keys from backend (don't store in React->.env instead use django to pull .env and serve to react app in useContext)
- Try to wrap a context inside the Routes (how to?)
- Back to top button after scrolling
- Is there a more elegant way of doing logic on component load without using state variables loading/dirty (to prevent multiple callbacks)
