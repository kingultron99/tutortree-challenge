# TutorTree Application Challenge
### Thanks for reviewing!

## Task:
Build a simple forum page within a design guidline.

## Criteria:
The page should:
 - Be blank on startup (except for the title and create post button)
 - Provide a modal for creating or replying to posts
 - Allow users to upvote / downvote
 - Stay as close to the design as possible

## previewing localy:
 - clone repo
 - run `pnpm i` to install all the packages
 - run `pnpm run dev` to open a live server

(npm or yarn should work just as well)

A live build of the page can be found at [https://kingultron99.github.io/tutortree-challenge/](https://kingultron99.github.io/tutortree-challenge/)

## Considerations
creating the project, I stuck as closely as posible to the design brief, however I did provide some additions:
 - An `X` button for the modals. While developing and testing, it became cumbersome to constantly reload the page while testing things after a modal had been opened. Thus I opted to incorporate a small, but handy close button on the modal pane to allow users to effectively cancel the action of making or replying to a post
 - Fit the viewport. while the design viewport maintained a size of `1280 × 800` I wanted the page to fill the whole screen rather than a section of the screen. This was added purely on an aesthetic standpoint where I did not want to have any wasted space. Due to this, the design adopted a wider look.
 - ***Animations***. whats a good design without some kind of eye-candy? adding animations to interactions and events (such as a comment or post being added) adds a more interactive feel, as the site is now responding and "reacting" to events. 
   - The modal windows have been designed to fade in with the modal children elements animations staggered, which (in my opinion) is *much* better than the window just popping in out of no-where. 
   - Buttons also have a slight scale effect on hover and press.
 - infinitely nested replies!! or maybe not. While I did want to include this feature, i wasnt able to figure out a way that would allow the page to display the replies correctly, and allow the user to reply to the desired comment, as all the comments are stored as a nested JSON object in a `React.useState()` hook, I would needed to have been able to loop through the array of posts and all of their replies, and their replies, etc, etc. I *did* have a working deep looper that would go through and correctly dump all child elements, but I needed it to return the whole object and where. In hindsight I may have tried to overcomplicate this, but I have an idea of how I might achieve it another time.

## Packages used:
|    package     |                     description                    |
|----------------|----------------------------------------------------| 
|      Vite      |               bundler and dev server               |
|  Framer-Motion |               animations and effects               |
|     React      |               Requirement for project              |
|      SCSS      |                      Styling                       |
| Phosphor-Icons |    used for various icons placed around the page   |
|    gh-pages    |               publish to github pages              |

## Afterthoughts
This challenge was rather interesting!
helped solidify some of the groundworks, and pushed me to do things slightly differently than before (such as moving *most* of the type defenitions for component properties to a central file), while some plans did not entirely work out and were scrapped (like infinitely* nesting comments) it still provided an opportunity to try different approaches and ideas.

<sub>*while technically infinite, the reply object would have hit a point where it would be effectively unusable</sub>
