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

# In progress
- Save id and name for list of favorites, sync with user profile w/ backend calls

# Backlog
- Create logo and use in navbar
- Add Search bar to TopNav for recipes
- Implement footer
- Implement signup
- Add ingredients/steps to RecipeCard
- Create single recipe card route/page
- Create calendaring for recipes

# Stretch
- Save tag preferences as well
- Security, retrieve keys from backend (don't store in React->.env instead use django to pull .env and serve to react app in useContext)
- Try to wrap a context inside the Routes (how to?)
- Back to top button after scrolling
- Is there a more elegant way of doing logic on component load without using state variables loading/dirty (to prevent multiple callbacks)
