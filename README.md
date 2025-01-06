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

# Icon List

### Start with letter 'A'

| **Icon Name**              | **Description**                           | **Category**     |
| -------------------------- | ----------------------------------------- | ---------------- |
| AddColumnIcon              | Icon for adding a column                  | Table Management |
| AddColumnLeft              | Icon for adding a column to the left      | Table Management |
| AddressBook                | Icon for an address book                  | Communication    |
| AddressBookOutline         | Outline version of the address book icon  | Communication    |
| Adjustments                | Icon for adjustments/settings             | Settings         |
| AdjustmentsFillVertical    | Filled vertical adjustments icon          | Settings         |
| AdjustmentsOutline         | Outline version of adjustments icon       | Settings         |
| AdjustmentsOutlineVertical | Outline vertical adjustments icon         | Settings         |
| AlignCentre                | Icon for centering alignment              | Text Formatting  |
| AlignJustify               | Icon for justifying text                  | Text Formatting  |
| AlignLeft                  | Icon for left-alignment                   | Text Formatting  |
| AlignRight                 | Icon for right-alignment                  | Text Formatting  |
| AngleDown                  | Icon representing a downward arrow        | Directional      |
| AngleLeft                  | Icon representing a leftward arrow        | Directional      |
| AngleRight                 | Icon representing a rightward arrow       | Directional      |
| AngleUp                    | Icon representing an upward arrow         | Directional      |
| Annotation                 | Icon for adding annotations               | Communication    |
| AnnotationOutline          | Outline version of the annotation icon    | Communication    |
| ApiKey                     | Icon for representing an API key          | Security         |
| Apple                      | Icon for Apple logo                       | Brands           |
| Archive                    | Icon for archiving items                  | File Management  |
| ArchiveArrow               | Icon for archiving with an arrow          | File Management  |
| ArchiveArrowOutline        | Outline version of archive arrow icon     | File Management  |
| ArchiveOutline             | Outline version of the archive icon       | File Management  |
| ArrowCorner                | Icon for corner arrows                    | Directional      |
| ArrowCornerFill            | Filled version of corner arrows           | Directional      |
| ArrowCornerOutline         | Outline version of corner arrows          | Directional      |
| ArrowDown                  | Icon for downward arrow                   | Directional      |
| ArrowDownCover             | Downward arrow with cover                 | Directional      |
| ArrowLeft                  | Icon for leftward arrow                   | Directional      |
| ArrowLeftCover             | Leftward arrow with cover                 | Directional      |
| ArrowRepeat                | Icon for repeating arrows                 | Actions          |
| ArrowRepeatOne             | Icon for repeating one item               | Actions          |
| ArrowRight                 | Icon for rightward arrow                  | Directional      |
| ArrowRightCoverLeft        | Rightward arrow covering left             | Directional      |
| ArrowRightFill             | Filled version of rightward arrow         | Directional      |
| ArrowRightFillOutline      | Outline version of filled rightward arrow | Directional      |
| ArrowShort                 | Short arrow icon                          | Directional      |
| ArrowUp                    | Icon for upward arrow                     | Directional      |
| ArrowUpCover               | Upward arrow with cover                   | Directional      |
| ArrowUpDown                | Icon for up and down arrows               | Directional      |
| Atom                       | Icon for representing an atom             | Science          |
| Award                      | Icon for an award                         | Recognition      |
| AwardOutline               | Outline version of the award icon         | Recognition      |
| Aws                        | Icon for Amazon Web Services              | Brands           |

### Start with letter 'B'

| **Icon Name**        | **Description**                          | **Category**       |
| -------------------- | ---------------------------------------- | ------------------ |
| Backward             | Icon for backward navigation             | Media Control      |
| BackwardOutline      | Outline version of backward navigation   | Media Control      |
| BadgeCheck           | Icon for badge with a checkmark          | Validation         |
| BadgeCheckOutline    | Outline version of badge with checkmark  | Validation         |
| Ban                  | Icon for banning or restricting          | Actions            |
| Barcode              | Icon for a barcode                       | Commerce           |
| Bars                 | Icon representing horizontal bars        | Interface Elements |
| BarsFrom             | Icon for bars originating from a point   | Interface Elements |
| Battery              | Icon representing a battery              | Hardware           |
| BatteryOutline       | Outline version of battery icon          | Hardware           |
| Bed                  | Icon for a bed                           | Accommodation      |
| BedOutline           | Outline version of the bed icon          | Accommodation      |
| Bell                 | Icon for a notification bell             | Alerts             |
| BellActive           | Icon for an active notification bell     | Alerts             |
| BellActiveAlt        | Alternate version of active bell icon    | Alerts             |
| BellActiveAltOutline | Outline version of alternate active bell | Alerts             |
| BellActiveOutline    | Outline version of active bell icon      | Alerts             |
| BellOutline          | Outline version of bell icon             | Alerts             |
| BellRing             | Icon for a ringing bell                  | Alerts             |
| BellRingOutline      | Outline version of ringing bell icon     | Alerts             |
| Bitcoin              | Icon for Bitcoin logo                    | Brands             |
| BlenderPhone         | Icon for a phone and blender             | Technology         |
| BlenderPhoneOutline  | Outline version of blender and phone     | Technology         |
| Book                 | Icon for a book                          | Education          |
| BookOpen             | Icon for an open book                    | Education          |
| BookOpenOutline      | Outline version of open book icon        | Education          |
| BookOutline          | Outline version of book icon             | Education          |
| BoothCurtain         | Icon for a booth curtain                 | Interiors          |
| BoothCurtainOutline  | Outline version of booth curtain icon    | Interiors          |
| Brain                | Icon for a brain                         | Science            |
| BrainOutline         | Outline version of brain icon            | Science            |
| BriefcaseOutline     | Outline version of briefcase icon        | Business           |
| Bug                  | Icon for a bug                           | Debugging          |
| BugOutline           | Outline version of bug icon              | Debugging          |
| Building             | Icon for a building                      | Architecture       |
| BuildingOutline      | Outline version of building icon         | Architecture       |
| Bullhorn             | Icon for a bullhorn                      | Communication      |
| BullhornOutline      | Outline version of bullhorn icon         | Communication      |

### Start with letter 'C'

| **Icon Name**            | **Description**                                      | **Category**    |
| ------------------------ | ---------------------------------------------------- | --------------- |
| Calendar                 | Icon for a calendar                                  | Time            |
| CalendarFilled           | Icon for a filled calendar                           | Time            |
| CalendarFilledOutline    | Outline version of filled calendar                   | Time            |
| CalendarPlus             | Icon for adding to a calendar                        | Time            |
| CalendarPlusOutline      | Outline version of adding to a calendar              | Time            |
| CalendarWe               | Icon for calendar with a week view                   | Time            |
| CalendarWeOutline        | Outline version of calendar with a week view         | Time            |
| CalenderOutline          | Icon for outline calendar                            | Time            |
| Camera                   | Icon for a camera                                    | Media           |
| CameraOutline            | Outline version of camera icon                       | Media           |
| Caption                  | Icon for captions                                    | Media           |
| CaptionOutline           | Outline version of caption icon                      | Media           |
| CaretDown                | Icon for a downward caret                            | Navigation      |
| CaretDownOutline         | Outline version of downward caret                    | Navigation      |
| CaretLeft                | Icon for a leftward caret                            | Navigation      |
| CaretLeftOutline         | Outline version of leftward caret                    | Navigation      |
| CaretRight               | Icon for a rightward caret                           | Navigation      |
| CaretRightOutline        | Outline version of rightward caret                   | Navigation      |
| CaretSort                | Icon for sorting caret                               | Navigation      |
| CaretSortOutline         | Outline version of sorting caret                     | Navigation      |
| CaretUp                  | Icon for an upward caret                             | Navigation      |
| CaretUpOutline           | Outline version of upward caret                      | Navigation      |
| Cart                     | Icon for a shopping cart                             | Commerce        |
| CartOutline              | Outline version of shopping cart                     | Commerce        |
| CartPlus                 | Icon for adding to the cart                          | Commerce        |
| CartPlusAlt              | Alternate version of adding to the cart              | Commerce        |
| CartPlusAltOutline       | Outline version of alternate cart addition           | Commerce        |
| CartPlusOutline          | Outline version of adding to the cart                | Commerce        |
| Cash                     | Icon for cash                                        | Finance         |
| CashOutline              | Outline version of cash icon                         | Finance         |
| CashRegistration         | Icon for cash register                               | Finance         |
| CellAttributes           | Icon for cell attributes                             | Data            |
| Chart                    | Icon for a generic chart                             | Data            |
| ChartLineDown            | Icon for a chart with a downward line                | Data            |
| ChartLineUp              | Icon for a chart with an upward line                 | Data            |
| ChartMixed               | Icon for a mixed chart                               | Data            |
| ChartPie                 | Icon for a pie chart                                 | Data            |
| ChartPieOutline          | Outline version of pie chart                         | Data            |
| Check                    | Icon for a checkmark                                 | Validation      |
| CheckCircle              | Icon for a checkmark in a circle                     | Validation      |
| CheckCircleOutline       | Outline version of check circle                      | Validation      |
| CheckPlus                | Icon for a check plus                                | Validation      |
| CheckPlusOutline         | Outline version of check plus                        | Validation      |
| ChevronDown              | Icon for a downward chevron                          | Navigation      |
| ChevronLeft              | Icon for a leftward chevron                          | Navigation      |
| ChevronOneDown           | Icon for a single downward chevron                   | Navigation      |
| ChevronOneLeft           | Icon for a single leftward chevron                   | Navigation      |
| ChevronOneRight          | Icon for a single rightward chevron                  | Navigation      |
| ChevronOneUp             | Icon for a single upward chevron                     | Navigation      |
| ChevronOneUpDown         | Icon for a single up-down chevron                    | Navigation      |
| ChevronRight             | Icon for a rightward chevron                         | Navigation      |
| ChevronUp                | Icon for an upward chevron                           | Navigation      |
| CircleMinus              | Icon for a minus inside a circle                     | Actions         |
| CircleMinusOutline       | Outline version of minus circle                      | Actions         |
| CirclePause              | Icon for a pause inside a circle                     | Media           |
| CirclePauseSolid         | Icon for a solid pause inside a circle               | Media           |
| CirclePlus               | Icon for a plus inside a circle                      | Actions         |
| Clapperboard             | Icon for a clapperboard                              | Media           |
| ClapperboardSolid        | Icon for a solid clapperboard                        | Media           |
| ClipboardCheckOutline    | Outline version of clipboard with check              | Productivity    |
| ClipboardList            | Icon for clipboard with a list                       | Productivity    |
| ClipboardListOutline     | Outline version of clipboard with list               | Productivity    |
| ClipboardOutline         | Icon for clipboard outline                           | Productivity    |
| Clock                    | Icon for a clock                                     | Time            |
| ClockOutline             | Outline version of clock icon                        | Time            |
| Close                    | Icon for a close action                              | Actions         |
| CloseCircle              | Icon for a close inside a circle                     | Actions         |
| CloseCircleOutline       | Outline version of close circle                      | Actions         |
| CloudArrowUp             | Icon for cloud with an upward arrow                  | Cloud           |
| CloudArrowUpOutline      | Outline version of cloud with an upward arrow        | Cloud           |
| Code                     | Icon for code                                        | Development     |
| CodeBranch               | Icon for a code branch                               | Development     |
| CodeBranchOutline        | Outline version of code branch                       | Development     |
| CodeFork                 | Icon for code fork                                   | Development     |
| CodeForkOutline          | Outline version of code fork                         | Development     |
| CodeMerge                | Icon for code merge                                  | Development     |
| CodeMergeOutline         | Outline version of code merge                        | Development     |
| CodePullRequest          | Icon for a code pull request                         | Development     |
| CodePullRequestOutline   | Outline version of code pull request                 | Development     |
| Cog                      | Icon for a cog                                       | Settings        |
| CogOutline               | Outline version of cog icon                          | Settings        |
| Column                   | Icon for a column                                    | Layout          |
| ColumnOutline            | Outline version of column icon                       | Layout          |
| Command                  | Icon for command                                     | Actions         |
| Compress                 | Icon for compress                                    | File Management |
| ComputerSystem           | Icon for a computer system                           | Technology      |
| ComputerSystemOutline    | Outline version of computer system icon              | Technology      |
| CreditCard               | Icon for a credit card                               | Finance         |
| CreditCardPlus           | Icon for a credit card with a plus                   | Finance         |
| CreditCardPlusOutline    | Outline version of credit card with a plus           | Finance         |
| CreditCardPlusAlt        | Alternate version of credit card with a plus         | Finance         |
| CreditCardPlusAltOutline | Outline version of alternate credit card with a plus | Finance         |
| Css                      | Icon for CSS                                         | Development     |

### Start with letter 'D'

| **Icon Name**     | **Description**                  | **Category**     |
| ----------------- | -------------------------------- | ---------------- |
| Database          | Icon for a database              | Data Management  |
| DatabaseOutline   | Outline version of database icon | Data Management  |
| DeleteColumn      | Icon for deleting a column       | Table Management |
| DeleteRow         | Icon for deleting a row          | Table Management |
| DeleteTable       | Icon for deleting a table        | Table Management |
| DesktopPc         | Icon for a desktop PC            | Technology       |
| Discord           | Icon for Discord                 | Social Media     |
| Dna               | Icon for DNA                     | Science          |
| Dollar            | Icon for a dollar symbol         | Finance          |
| DotsHorizontal    | Icon for horizontal dots         | UI Elements      |
| DotVertical       | Icon for vertical dots           | UI Elements      |
| Download          | Icon for downloading             | File Management  |
| DownloadOutline   | Outline version of download icon | File Management  |
| DrawSquare        | Icon for drawing a square        | Design           |
| DrawSquareOutline | Outline version of draw square   | Design           |
| Dribbble          | Icon for Dribbble                | Social Media     |
| Dropbox           | Icon for Dropbox                 | Cloud Storage    |

### Start with letter 'E'

| **Icon Name**       | **Description**                     | **Category**       |
| ------------------- | ----------------------------------- | ------------------ |
| Edit                | Icon for editing                    | Tools              |
| EditOutline         | Outline version of edit icon        | Tools              |
| Envelope            | Icon for a closed envelope          | Communication      |
| EnvelopeOpen        | Icon for an open envelope           | Communication      |
| EnvelopeOpenOutline | Outline version of open envelope    | Communication      |
| EnvelopeOutline     | Outline version of envelope         | Communication      |
| Euro                | Icon for a euro currency symbol     | Finance            |
| Exclamation         | Icon for an exclamation mark        | Alerts/Warnings    |
| ExclamationOutline  | Outline version of exclamation mark | Alerts/Warnings    |
| Expand              | Icon for expanding                  | UI Elements        |
| Eye                 | Icon for a visible eye              | Visibility/Privacy |
| EyeOutline          | Outline version of visible eye      | Visibility/Privacy |
| EyeSlash            | Icon for an invisible eye           | Visibility/Privacy |
| EyeSlashOutline     | Outline version of invisible eye    | Visibility/Privacy |

### Start with letter 'F'

| **Icon Name**         | **Description**                             | **Category**         |
| --------------------- | ------------------------------------------- | -------------------- |
| Facebook              | Icon for Facebook                           | Social Media         |
| FaceExplode           | Icon depicting an exploding face            | Emotions/Expressions |
| FaceExplodeOutline    | Outline version of exploding face           | Emotions/Expressions |
| FaceGrin              | Icon for a grinning face                    | Emotions/Expressions |
| FaceGrinOutline       | Outline version of grinning face            | Emotions/Expressions |
| FaceGrinStar          | Icon for a grinning face with stars         | Emotions/Expressions |
| FaceGrinStarOutline   | Outline version of grinning face with stars | Emotions/Expressions |
| FaceLaugh             | Icon for a laughing face                    | Emotions/Expressions |
| FaceLaughOutline      | Outline version of laughing face            | Emotions/Expressions |
| File                  | Generic file icon                           | Files/Storage        |
| FileChartBar          | File icon with a chart bar                  | Analytics            |
| FileChartBarOutline   | Outline version of file with chart bar      | Analytics            |
| FileCheck             | File with a check mark                      | Files/Storage        |
| FileCheckOutline      | Outline version of file with a check mark   | Files/Storage        |
| FileCirclePlus        | File with a plus in a circle                | Files/Storage        |
| FileCirclePlusOutline | Outline version of file with a circle plus  | Files/Storage        |
| FileClone             | Cloned file icon                            | Files/Storage        |
| FileCloneAlt          | Alternate cloned file icon                  | Files/Storage        |
| FileCloneAltOutline   | Outline version of alternate cloned file    | Files/Storage        |
| FileCloneCurve        | File clone with a curved design             | Files/Storage        |
| FileCloneCurveOutline | Outline version of file clone curve         | Files/Storage        |
| FileCopy              | Icon for copying files                      | Files/Storage        |
| FileCsv               | Icon for CSV file format                    | Files/Storage        |
| FileCsvOutline        | Outline version of CSV file format          | Files/Storage        |
| FileDoc               | Icon for Word document files                | Files/Storage        |
| FileDocOutline        | Outline version of Word document files      | Files/Storage        |
| FileExport            | Icon for exporting files                    | Files/Storage        |
| FileImage             | File with an image icon                     | Files/Storage        |
| FileMusic             | File with a music note                      | Files/Storage        |
| FilePdf               | Icon for PDF files                          | Files/Storage        |
| FilePen               | File with a pen icon                        | Files/Storage        |
| FilePptOutline        | Outline version of PowerPoint files         | Files/Storage        |
| FileSearch            | Icon for file search                        | Files/Storage        |
| FileShield            | File with a shield icon                     | Security             |
| FileVideo             | File with a video icon                      | Files/Storage        |
| FileWord              | Icon for Word files                         | Files/Storage        |
| FileZip               | Icon for ZIP files                          | Files/Storage        |
| Filter                | Generic filter icon                         | Tools                |
| FilterDollar          | Filter with dollar symbol                   | Finance              |
| Fingerprint           | Icon for fingerprint                        | Security             |
| Fire                  | Icon depicting fire                         | Alerts/Warnings      |
| FloppyDisk            | Icon for floppy disk                        | Files/Storage        |
| Folder                | Generic folder icon                         | Files/Storage        |
| FolderArrow           | Folder with an arrow                        | Files/Storage        |
| FolderOpen            | Icon for an open folder                     | Files/Storage        |
| FolderPlus            | Folder with a plus                          | Files/Storage        |
| FontColor             | Icon for font color                         | Text Formatting      |
| FontHighlight         | Icon for font highlight                     | Text Formatting      |
| Forward               | Generic forward icon                        | Navigation           |
| ForwardStep           | Step forward icon                           | Navigation           |

> **Note**: This is a sample of the icons listed. You can expand the table to include all icons from your project with their respective descriptions and categories.

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
