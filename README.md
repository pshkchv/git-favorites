# Requirements:

1. Use either GraphQL (preferred) or REST API to query Github for. **Done**
   repositories based on the user's search input.
2. Display the search results as the user types in the search field, possibly
   with debounce functionality to avoid excessive API calls. **Done**
3. Each search result item should have a button to set it as a favorite. If an
   item is already set as a favorite, it should be rendered as a favorite again. **Done by api**
4. Implement a navigation feature to allow users to access the list of favorites.
5. In the favorites list, each item should have a rating evaluation feature, from
   1 to 5 , allowing
   users to rate their favorite repositories. **Didn't found api that provide that functionality**
6. Users should also be able to remove items from the favorites list. **Done**

# How to start

1. In `src/config` add your api key.

   - https://github.com/settings/tokens
   - Tested with classic token with `allow all` properties because first time used git api and won't waste time.
   - If you know what kind of permissions is needed for operations that's provided - configure.

2. Type in console `yarn`
3. Type in console `yarn start`

### PS

In the event that this is not a test task that can be completed within an hour, I apologize for some areas that could have been better and for not achieving all the set goals. My main objective was to avoid spending too much time, so I managed to complete this from scratch in approximately 3 hours. Therefore, there might be some imperfections.

Writing a test task can be challenging when you have a lot of experience, as there are two approaches to consider:

1. Spend 20 hours to integrate a plethora of cool but unnecessary solutions to showcase your skills.
2. Complete the task in a few hours with minor imperfections, considering it's only a test task and shouldn't require multiple workdays.
