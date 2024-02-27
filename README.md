# Rating Component Documentation

A rating component provides insight into the quality of a product or service. It allows users to rate or view the rating of others.

## Overview

### `connect-rating`

#### Usage

```html
<connect-rating></connect-rating>
```

Displays a rating control that allows users to select a rating from 0 to 5. The rating control is accessible and can be used with a keyboard.

#### Props

- `name`: a string that represents the name attribute for input elements.
- `rating`: a number that represents the current rating.
- `readonly`: a boolean, if true, disables user interaction.
- `disabled`: a boolean, if true, disables the rating control.
- `size`: 'Small' | 'Medium' | 'Large' determines the size of the icons.

### `connect-tooltip`

#### Usage

```html
<connect-tooltip></connect-tooltip>
```

Displays a tooltip when the user hovers over the rating component.

#### Props

- `rating`: number (0 to 5) representing the current rating.

### `connect-icon`

Represents a single icon. It is used internally by the `connect-rating` component.

#### Usage

```html
<connect-icon></connect-icon>
```

## Accessibility

`Tab`: Moves focus into and out of the radio group.

`Right Arrow` and `Down Arrow`: moves focus to the next radio button in the group, unchecks the previously focused button, and checks the newly focused button. If focus is on the last button, focus moves to the first button.

`Left Arrow` and `Up Arrow`: move focus to the previous radio button in the group, unchecks the previously focused button, and checks the newly focused button. If focus is on the first button, focus moves to the last button.

## Development

### Requirements

- Node.js
- npm

### Project setup

1. Clone the project
2. Navigate to the project directory
3. Run `npm install` to install dependencies

### Scripts

- `npm run dev`: Start Vite in development mode.

- `npm run build`: Build the project for production.

- `npm run test`: Run tests with the with `web-test-runner` and `OpenWC`.

### Project structure

```
├── node_modules
├── src
│   ├── components
│   │   ├── icon
│   │   │   ├── icon.test.ts
│   │   │   └── index.ts
│   │   ├── rating
│   │   │   ├── index.ts
│   │   │   ├── rating.test.ts
│   │   │   └── styles.ts
│   │   └── tooltip
│   │       ├── index.ts
│   │       ├── tooltip.test.ts
│   │       └── styles.ts
│   ├── main.ts
│   └── vite-env.d.ts
├── index.html
├── package-lock.json
├── package.json
├── web-test-runner.config.mjs
└── tsconfig.json
```
