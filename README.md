# react-iconic

`react-iconic` is a simple and customizable React icon library that provides a collection of high-quality, scalable SVG icons. It is lightweight, easy to use, and offers flexibility for customization in React applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Icons List](#icons-list)
- [API](#api)
- [Customization](#customization)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)
- [Working](#working)

## Features

- **Lightweight**: Optimized SVG icons with a minimal file size, improving page load speed.
- **Customizable**: Easily adjust icon size, color, and style using props.
- **React Friendly**: Fully compatible with React, supports props for seamless integration.
- **Scalable**: SVG icons that maintain high quality at any resolution, responsive to screen size.

## Installation

To install the `react-iconic` package, use npm or yarn:

```bash
# Using npm
npm install react-iconic

# Using yarn
yarn add react-iconic
```

## Usage

Once installed, you can import and use any of the available icons in your React project.

```bash
import React from 'react';
import { Cart } from 'react-iconic';

function App() {
  return (
    <div>
      <h1>Welcome to React Iconic</h1>
      <Cart size={24} />
    </div>
  );
}

export default App;
```

### Importing Icons

You can import icons individually or all together:

```bash
// Import individual icons
import { Cart, Todo, ShoppingCart } from 'react-iconic';

// OR import all icons at once
import * as Icons from 'react-iconic';
```

## API

The `react-iconic` library provides a set of icons that can be customized via props.

| Prop        | Type   | Description                                    | Default Value |
| ----------- | ------ | ---------------------------------------------- | ------------- |
| `Size`      | number | Sets the width of the icon.                    | 24            |
| `fill`      | string | Sets the color of the icon (CSS valid colors). | black         |
| `className` | string | Adds custom CSS classes to the icon.           | undefined     |
| `style`     | object | Inline styles for the icon.                    | undefined     |

### Icon Props

Each icon supports the following props:

- `width` (string | number): Sets the width of the icon. Default is 24.
- `height` (string | number): Sets the height of the icon. Default is 24.
- `fill` (string): Sets the color of the icon (can use any valid CSS color). Default is black.
- `className` (string): Adds custom CSS classes to the icon for further customization.
- `style` (object): Inline style object for additional styling.

### Example of Usage:

```bash
<Cart size={24} fill="#FF6347" />
<Todo size={24} fill="blue" className="custom-icon" />
<ShoppingCart size={24} fill="green" style={{ borderRadius: '50%' }} />
```

## Customization

You can customize the icons in several ways:

1.  `Size and color`: Use the width, height, and fill props to change the size and color of the icons.
2.  `Styling`: Use the className and style props to add custom CSS or inline styles.
3.  `CSS Styling`: Add custom CSS styles for more control over the appearance of icons.

```bash
/* Example of customizing icons through CSS */
.custom-icon {
  transition: transform 0.3s ease;
}

.custom-icon:hover {
  transform: scale(1.2);
}
```

### Example

Here's a full example using `react-iconic`:

```bash
import React from 'react';
import { Cart, Todo, ShoppingCart } from 'react-iconic';

function App() {
  return (
    <div>
      <h1>React Iconic Library</h1>
      <div>
        <Cart size={24} fill="#FF6347" />
        <Todo size={24} fill="blue" />
        <ShoppingCart size={24} fill="green" />
      </div>
    </div>
  );
}

export default App;
```

### Contributing

We welcome contributions from the community! To contribute to `react-iconic`, follow these steps:

1.  Fork this repository. [github-link](https://github.com/devsany/iconic.git)
    Create a new branch for your feature or bug fix.
2.  Write tests for your changes (if applicable).
3.  Make your changes.
4.  Submit a pull request.
    For bug fixes, please ensure that your changes do not break the existing functionality.

## License

`react-iconic` is licensed under the MIT License. See the `LICENSE` file for more details.

## Working

If not working. Restart you application again.

<div align="center">
  <h6>Thank you Everyone, Work in progress💙</h6>
</div>
