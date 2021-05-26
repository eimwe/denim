# Multipage mobile-first responsive shop

This project is aimed at practicing skills in CSS preprocessors and utilizing package bundlers. Here's the technology stack I used for this project.

## Technology stack

I utilized webpack to bundle HTML templates, LESS styling sheets and JavaScript code.

## Task list

- [x] Install Node.js and set up webpack, npm and required plugins
- [x] Create index.html template
- [x] Add mobile-first styles and JS for index.html using LESS
- [x] Compile and commit output to Main branch
- [x] Add mobile-first styles and JS for inner pages using LESS
- [x] Compile and commit output to Main branch
- [x] Add media queries for desktop and tablet versions
- [x] Compile and commit output to Main branch
- [x] Test in Firefox and Edge
- [x] Compile and commit the final result

## Test environment

- Google Chrome 90.0.4430.93
- Firefox 88.0.1
- Microsoft Edge 90.0.818.51

## Challenges

I completed this project quicker than the previous one. It was challenging enough to keep me awake at 4AM in the morning (happened twice) and give me thrills in the process. There were few things that took awhile to figure out.

### Bundler

Right from the start I decided to use Webpack for this project. But little did I know how intricate setting up Webpack really is. Thanks to several excellent tutorials it got all ready in a few days. As I progress through the project further configurations were made to get things done in a right way.

### Layout

This project consists of three pages and it became obvious that reusable components are must-have to avoid repetitiveness when it comes to stylesheets. This time I decided to be more precise with naming conventions for classes and isolate components to make some of them working at different pages. I referred to BEM once again to accomplish this. I consider this attempt to be more successful. Although, there are more things to learn in that department of course.

At first glance the design would enjoy grids, but I relied on flexbox instead. I wasn't ready to invest time in practicing grid but was able to use it anyway to style footer for basic smartphone version. Grids are great and I definitely should try to use them more in next projects.

To achieve responsiveness, I used relative units for almost everything involved in these pages. The end result is ok but I really need to get the hang of `clamp()` as it looks like a perfect instrument to make responsive fonts across all versions of the pages.

### CSS preprocessor

I figured component-based approach is easier to apply with CSS preprocessors. When it came to choosing the one I selected LESS. I only needed nesting and importing and Sass seemed like an overkill. Besides, for some reson I always had a soft spot for LESS. I really enjoyed working with it! Although, I'm not sure I've used mixins the way they are intended to be used. Also, I got myself in a few nasty specificity battles that forced me to use `!important` for more than one occasion. But it has nothing to do with LESS and it's rather a lesson to me to keep an eye on selector combinations I use in the stylesheets.

### JavaScript

As always, I struggled with JS for quite some time. The range slider on a catalog page is the first thing that comes to my mind when I'm thinking about my JS coding experience in this project. I called on tutorial help to solve this one, but it was fun anyway. Another thing that puzzled me was the gallery slideshow on a product page. I used portion of the code from the previous project but I wasn't ready to come up with solution for thumbnail interaction. Once again, I interpreted ready-made solution that worked for me like a charm in its finalized form. I learned few things along the way (for instance, the `.bind()` method and event listeners removal) and still have too many things to cover which I'm looking forward to.

## Attributions

This project enjoyed help from the following representatives of the web development community and resources:

1. [HTMLAcademy](https://htmlacademy.ru/) team is made the original design layout in Figma. I got it through now discontinued free subscription campaign;
2. [Jimmy Cleveland](https://blog.jimmydc.com/). Excellent [Webpack 5 tutorial](https://youtu.be/TOb1c39m64A) that helped me to set up webpack for this project;
3. [Max from Academind](https://www.youtube.com/c/Academind) helped to figure out how to configure webpack to work with multiple HTMl templates in [this video](https://youtu.be/y_RFOaSDL8I);
4. [MinzCode YouTube channel](https://www.youtube.com/channel/UCknjk_lWCHNT1UFBGCgHTdg) walked me through creation of a range slider in [their video](https://youtu.be/pTlsnFLiK6c). I customized their solution a little bit to meet requirements of this project;
5. [Alex Luschenko YouTube channel](https://www.youtube.com/c/itgid/) and [the video](https://youtu.be/rHKiMAZYMoQ) on how to code floating content for the range slider. I customized this solution to meet requirements of this project;
6. [Sehyun Kim](https://stackoverflow.com/users/5828301/sehyun-kim) for `.bind();` method which was taken from the [following post](https://stackoverflow.com/a/37910612), https://creativecommons.org/licenses/by-sa/3.0/ ;
7. [Crush](https://stackoverflow.com/users/1195273/crush) to enlighten me in a problematic relationship between pseudo elements and self-closing HTML tags which was taken from the [following post](https://stackoverflow.com/a/14586588), https://creativecommons.org/licenses/by-sa/3.0/ ;
8. [Benni](https://codepen.io/8eni) for simple and elegant solution on changing classes on click which was taken from [this codepen](https://codepen.io/8eni/pen/MaGVrq). I customized their solution to meet requirements of this project.

## Conributing

If you get interested in this project, I'd be glad to see your contributions. Pull requests are welcome!

## Usage instructions

1. Clone the repository
2. Run `npm i` to install dependencies
3. Run one of the following commands:

### Production Build

```
npm run build
```

### Development Build

```
npm run build-dev
```

### Development Server

```
npm start
```

## License

[MIT](LICENSE.md)