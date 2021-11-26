# [Live](https://www.daoudmerchant.com)

## Portfolio Website

For this first attempt at my personal site, I both wanted to practise design (we all know my other projects aren't going to win any design awards) and a CSS framework (choosing Tailwind as I thought it would be more of a challenge since my natural tendency is to think of classes semantically). It started with sketching out these opening frames in opposing corners, then heading to the IDE to try to get that effect. I then chose knock-out graphics to set myself a technical challenge without having an arbitrary 'toy' taking focus away from the projects.

## Thoughts after completion

Well, this turned out to be _much_ more complicated than I intended!

### Successes

- [x] Animated frame effects
- [x] 'Focus' animations on both mobile (scroll) and desktop (hover)
- [x] Infinitely scalable by adding or removing projects to the `PROJECTS` object
- [x] Fully responsive

### Complications

#### `mix-blend-mode`

The big CSS property I use for this project is '`mix-blend-mode`', but the problem I was having was that it applies to **all children** of the element to which it's applied. I saw people online saying that `isolation: isolate` or even adding a new `z-index` would create a new stacking context, but I just was not getting consistent results across browsers. The only way I felt I could know for certain that, for example, my profile picture would be unaffected by `mix-blend` but the border around it would be was to create entirely different sibling trees to only apply `mix-blend` to the child I want. As a result, what looks like a nice and simple `grid`-based layout became a real work-out of `position: absolute`, `position: relative` and `float`! This was really less than ideal, but I'd never done a responsive project using these properties so extensively, so I learned a lot.

#### Tailwind

I really don't think Tailwind was the right choice for this project, for many reasons:

- Avoidance of `em`-based measurements

Having little design experience, I didn't really plan where the white-space was going to go on larger screen-sizes considering that a frame in the top-right offset with one in the bottom-left excluded the possibility of margins (personally I don't like that look anyway unless necessitated by adverts). As such, from about 1k I guess I'm thinking in viewport units, but I didn't want to actually use them for the inflexibility and complete lack of control that would mean. Instead, I measured everything in `em`s, being able to change both the relativity of sizes to the container and the screen width by setting the `.App` font size at various breakpoints. This wasn't the ideal solution, but the ideal solution would have been to come up with a design which can scale all the way up to 8k, and I'm not good enough yet! I learned a ton about considerations for screen sizes, and know much better how to approach a future version of the site. Unfortunately, Tailwind measures in `rem`s by default, so I had to completely rewrite the config file!

- Limited options

Not knowing enough about Tailwind before, I knew it would be more flexible than Bootstrap but didn't understand its limitations in terms of excluded properties. Again, trying to find a silver lining, I got tons of experience editing the config file (just check out `tailwind.config.js`!). The fact that I ended up naming these measurements semantically (`projectpanel`, `projectbox` etc.) speaks volumes about how I think about styling(!)

#### [`tailwind-styled-components`](https://www.npmjs.com/package/tailwind-styled-components)

I love `styled-components` and I really didn't want return statements doubling in length to accommodate a long list of class names, or being preceded by lengthy variable declaration blocks for conditional classes, and the library `tailwind-styled-components` seemed to offer a hybrid solution with `props`-passing and the ability to add styles to a `styled-components` element. Sounds great! In practicality I found it pretty inflexible (I don't think you can reference CSS blocks as easily and it doesn't pass props to the DOM), but I think the worst thing about it is that I believe it to be the culprit for **slowing my production code** quite considerably (I can't compress those images any further!) Next time I will _not_ be using this solution, and may refactor the entire site to get rid of it in future.

Overall, I learned a lot about design, positioning, Tailwind and image compression. I look forward to coming back to this in the future!
