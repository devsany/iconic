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

### Start with letter 'G'

| **Icon Name**   | **Description**                                 | **Category** |
| --------------- | ----------------------------------------------- | ------------ |
| GiftBox         | Icon representing a gift box                    | Objects      |
| GiftBoxOutline  | Outline version of a gift box icon              | Objects      |
| Github          | Icon for the GitHub platform                    | Brands       |
| Gitlab          | Icon for the GitLab platform                    | Brands       |
| Globe           | Icon representing a globe                       | Navigation   |
| GlobeOutline    | Outline version of a globe icon                 | Navigation   |
| Google          | Icon for the Google platform                    | Brands       |
| GoToNext        | Icon indicating navigation to the next item     | Navigation   |
| GoToPrev        | Icon indicating navigation to the previous item | Navigation   |
| Grid            | Icon representing a grid                        | Layout       |
| GridOutline     | Outline version of a grid icon                  | Layout       |
| GridPlus        | Icon representing a grid with a plus sign       | Layout       |
| GridPlusOutline | Outline version of grid with a plus sign        | Layout       |

### Start with letter 'H'

| **Icon Name**     | **Description**                                 | **Category**        |
| ----------------- | ----------------------------------------------- | ------------------- |
| Image             | Icon representing an image                      | Media               |
| ImageOutline      | Outline version of an image icon                | Media               |
| Inbox             | Icon representing an inbox                      | Communication       |
| InboxFull         | Icon for a full inbox                           | Communication       |
| InboxFullOutline  | Outline version of a full inbox icon            | Communication       |
| InboxOutline      | Outline version of an inbox icon                | Communication       |
| Indent            | Icon representing an indentation                | Text Editing        |
| IndentOutline     | Outline version of an indentation icon          | Text Editing        |
| Infocircle        | Icon for an informational circle                | General Information |
| InfocircleOutline | Outline version of an informational circle icon | General Information |
| InsertRow         | Icon for inserting a row                        | Table Management    |
| InsertRowDown     | Icon for inserting a row downward               | Table Management    |
| InsertTable       | Icon representing a table                       | Table Management    |
| InsertTablePlus   | Icon for adding a new table                     | Table Management    |
| Instagram         | Icon for the Instagram platform                 | Social Media        |

### Start with letter 'K'

| **Icon Name**   | **Description**                    | **Category**  |
| --------------- | ---------------------------------- | ------------- |
| Keyboard        | Icon representing a keyboard       | Input Devices |
| KeyboardOutline | Outline version of a keyboard icon | Input Devices |

### Start with letter 'L'

| **Icon Name**    | **Description**                             | **Category**        |
| ---------------- | ------------------------------------------- | ------------------- |
| Label            | Icon representing a label                   | UI Elements         |
| LabelOutline     | Outline version of a label icon             | UI Elements         |
| Landmark         | Icon representing a landmark                | Navigation/Places   |
| LandmarkOutline  | Outline version of a landmark icon          | Navigation/Places   |
| Language         | Icon representing language                  | General             |
| Laravel          | Icon for the Laravel framework              | Brands              |
| LayersOutline    | Outline version of layers icon              | Layout              |
| LetterBold       | Icon for bold text                          | Text Formatting     |
| LetterItalic     | Icon for italic text                        | Text Formatting     |
| LetterUnderline  | Icon for underlined text                    | Text Formatting     |
| LifeSaver        | Icon representing a lifesaver               | Safety              |
| LifeSaverOutline | Outline version of a lifesaver icon         | Safety              |
| LightBulb        | Icon representing a light bulb              | Ideas/Concepts      |
| LightBulbOutline | Outline version of a light bulb icon        | Ideas/Concepts      |
| Link             | Icon representing a link                    | Connectivity        |
| LinkBreak        | Icon for a broken link                      | Connectivity        |
| LinkedIn         | Icon for the LinkedIn platform              | Social Media        |
| List             | Icon representing a list                    | Layout/Organization |
| ListMusic        | Icon for a music playlist                   | Media               |
| ListMusicOutline | Outline version of a music playlist icon    | Media               |
| Lock             | Icon representing a locked state            | Security            |
| LockOpen         | Icon for an unlocked state                  | Security            |
| LockOpenOutline  | Outline version of an unlocked icon         | Security            |
| LockOutline      | Outline version of a lock icon              | Security            |
| LockTime         | Icon representing a lock with a timer       | Security            |
| LockTimeOutline  | Outline version of a lock with a timer icon | Security            |

### Start with letter 'M'

| **Icon Name**         | **Description**                                 | **Category**      |
| --------------------- | ----------------------------------------------- | ----------------- |
| Mailbox               | Icon representing a mailbox                     | Communication     |
| MailboxOutline        | Outline version of a mailbox icon               | Communication     |
| MapPin                | Icon representing a location pin                | Navigation/Places |
| MapPinAlt             | Alternative version of a location pin icon      | Navigation/Places |
| MapPinAltOutline      | Outline version of the alternative location pin | Navigation/Places |
| MapPinOutline         | Outline version of a location pin icon          | Navigation/Places |
| Mastercard            | Icon for the Mastercard payment platform        | Brands            |
| Mergecells            | Icon representing merged table cells            | Table Management  |
| MergecellsSplit       | Icon for splitting merged table cells           | Table Management  |
| Message               | Icon representing a message                     | Communication     |
| MessageDots           | Icon for a message with typing dots             | Communication     |
| MessageDotsOutline    | Outline version of a message with typing dots   | Communication     |
| MessageOutline        | Outline version of a message icon               | Communication     |
| Messages              | Icon representing multiple messages             | Communication     |
| MessagesOutline       | Outline version of the multiple messages icon   | Communication     |
| Microphone            | Icon representing a microphone                  | Audio             |
| MicrophoneMute        | Icon for a muted microphone                     | Audio             |
| MicrophoneMuteOutline | Outline version of a muted microphone icon      | Audio             |
| MicrophoneOutline     | Outline version of a microphone icon            | Audio             |
| Minimize              | Icon for minimizing a window or section         | UI Elements       |
| Minus                 | Icon representing a minus or subtraction sign   | UI Elements       |
| MobilePhone           | Icon representing a mobile phone                | Devices           |
| MobilePhoneOutline    | Outline version of a mobile phone icon          | Devices           |
| MongoDB               | Icon for the MongoDB database platform          | Brands            |
| Moon                  | Icon representing the moon                      | Nature            |
| MoonOutline           | Outline version of the moon icon                | Nature            |

### Start with letter 'N'

| **Icon Name**    | **Description**                         | **Category**       |
| ---------------- | --------------------------------------- | ------------------ |
| Newspaper        | Icon representing a newspaper           | Media/News         |
| NewspaperOutline | Outline version of a newspaper icon     | Media/News         |
| Npm              | Icon for the Node Package Manager (npm) | Brands/Development |

### Start with letter 'O'

| **Icon Name**       | **Description**                               | **Category**    |
| ------------------- | --------------------------------------------- | --------------- |
| ObjectColumn        | Icon representing a column layout for objects | Layout/Design   |
| ObjectColumnOutline | Outline version of the column layout icon     | Layout/Design   |
| OpenDoor            | Icon representing an open door                | Objects         |
| OpenDoorOutline     | Outline version of the open door icon         | Objects         |
| OrderedList         | Icon for an ordered (numbered) list           | Text Formatting |
| Outdent             | Icon representing outdented text              | Text Formatting |
| OutdentOutline      | Outline version of the outdented text icon    | Text Formatting |

### Start with letter 'P'

| **Icon Name**      | **Description**                              | **Category**     |
| ------------------ | -------------------------------------------- | ---------------- |
| Palette            | Icon representing an artist's palette        | Art/Design       |
| PaletteOutline     | Outline version of an artist's palette icon  | Art/Design       |
| PaperClip          | Icon for a paperclip                         | Tools/Objects    |
| PaperPlane         | Icon for a paper plane                       | Communication    |
| PaperPlaneOultine  | Outline version of a paper plane icon        | Communication    |
| Paragraph          | Icon for a paragraph block                   | Text Formatting  |
| ParagraphOutline   | Outline version of a paragraph block icon    | Text Formatting  |
| Pause              | Icon representing a pause button             | Media Controls   |
| PauseOutline       | Outline version of the pause button icon     | Media Controls   |
| Pen                | Icon for a pen                               | Writing/Tools    |
| PenNib             | Icon for a pen nib                           | Writing/Tools    |
| PenOutline         | Outline version of the pen icon              | Writing/Tools    |
| Phone              | Icon representing a phone                    | Communication    |
| PhoneHang          | Icon for a hanging-up phone                  | Communication    |
| PhoneHangOutline   | Outline version of the hanging-up phone icon | Communication    |
| PhoneOutline       | Outline version of the phone icon            | Communication    |
| Play               | Icon representing a play button              | Media Controls   |
| PlayOutline        | Outline version of the play button icon      | Media Controls   |
| Plus               | Icon for adding or increasing                | General/Actions  |
| Printer            | Icon representing a printer                  | Tools/Objects    |
| PrinterOutline     | Outline version of the printer icon          | Tools/Objects    |
| ProfileCard        | Icon for a profile card                      | Identity/Profile |
| ProfileCardOutline | Outline version of the profile card icon     | Identity/Profile |

### Start with letter 'Q'

| **Icon Name**         | **Description**                           | **Category**       |
| --------------------- | ----------------------------------------- | ------------------ |
| Qrcode                | Icon representing a QR code               | Technology/Tools   |
| QuestionCircle        | Icon for a question circle                | Communication/Help |
| QuestionCircleOutline | Outline version of a question circle icon | Communication/Help |
| Quote                 | Icon for a quote or quotation             | Text Formatting    |
| QuoteOutline          | Outline version of the quote icon         | Text Formatting    |

### Start with letter 'R'

| **Icon Name**        | **Description**                                | **Category**           |
| -------------------- | ---------------------------------------------- | ---------------------- |
| React                | Icon representing React                        | Technology/Framework   |
| Receipt              | Icon for a receipt                             | Documents/Tools        |
| ReceiptOutline       | Outline version of a receipt icon              | Documents/Tools        |
| RectangleList        | Icon representing a list in a rectangular form | UI/Layouts             |
| RectangleListOutline | Outline version of a rectangular list icon     | UI/Layouts             |
| Reddit               | Icon representing Reddit                       | Social Media           |
| Redo                 | Icon for redo action                           | Editing/Actions        |
| Refresh              | Icon for refreshing                            | Media Controls/Actions |
| Reply                | Icon for replying to a message                 | Communication          |
| ReplyAll             | Icon for replying to all recipients            | Communication          |
| ReplyAllOutline      | Outline version of the reply all icon          | Communication          |
| ReplyOutline         | Outline version of the reply icon              | Communication          |
| RestoreWindow        | Icon for restoring a window                    | UI/Windows             |
| Rocket               | Icon for a rocket                              | Technology/Startup     |
| RocketOutline        | Outline version of the rocket icon             | Technology/Startup     |
| Ruler                | Icon for a ruler                               | Tools/Measurement      |

### Start with letter 'S'

| **Icon Name**       | **Description**                                    | **Category**              |
| ------------------- | -------------------------------------------------- | ------------------------- |
| SalePercent         | Icon for a sale percent                            | Shopping/Commerce         |
| SalePercentOutline  | Outline version of the sale percent icon           | Shopping/Commerce         |
| ScaleBalance        | Icon representing a scale balance                  | Finance/Tools             |
| ScaleBalanceOutline | Outline version of the scale balance icon          | Finance/Tools             |
| Search              | Icon for a search function                         | Actions/Search            |
| SearchIcon          | Icon representing a magnifying search icon         | Actions/Search            |
| SearchOutline       | Outline version of the search icon                 | Actions/Search            |
| Server              | Icon for a server                                  | Technology/Networking     |
| ServerOutline       | Outline version of the server icon                 | Technology/Networking     |
| ShareAll            | Icon for sharing everything                        | Social/Sharing            |
| ShareAllOutline     | Outline version of the share all icon              | Social/Sharing            |
| ShareNodes          | Icon representing shared nodes                     | Social/Sharing/Networking |
| ShareNodesOutline   | Outline version of the share nodes icon            | Social/Sharing/Networking |
| Shield              | Icon for a shield                                  | Security/Protection       |
| ShieldCheck         | Icon for a shield with a checkmark                 | Security/Protection       |
| ShieldCheckOutline  | Outline version of the shield with checkmark       | Security/Protection       |
| ShieldOutline       | Outline version of the shield icon                 | Security/Protection       |
| ShoppingBagOutline  | Outline version of the shopping bag icon           | Shopping/Commerce         |
| Shuffle             | Icon for shuffle action                            | Media Controls            |
| Sort                | Icon for sorting items                             | UI/Controls               |
| SortHorizontal      | Icon for horizontal sorting                        | UI/Controls               |
| SplitCells          | Icon for splitting cells                           | UI/Tools                  |
| Stackoverflow       | Icon representing StackOverflow                    | Technology/Community      |
| Star                | Icon for a star                                    | Rating                    |
| StarHalf            | Icon for a half star                               | Rating                    |
| StarHalfOutline     | Outline version of the half star icon              | Rating                    |
| StarHalfStar        | Icon for a half star with another half             | Rating                    |
| StarHalfStarOutline | Outline version of the half star with another half | Rating                    |
| StarOutline         | Outline version of the star icon                   | Rating                    |
| Stop                | Icon for stop action                               | Media Controls            |
| StopOutline         | Outline version of the stop icon                   | Media Controls            |
| Store               | Icon representing a store                          | Shopping/Commerce         |
| Subscript           | Icon for subscript text                            | Text Formatting           |
| Sun                 | Icon for the sun                                   | Weather/Nature            |
| SunOutline          | Outline version of the sun icon                    | Weather/Nature            |
| SuperScript         | Icon for superscript text                          | Text Formatting           |
| Swatchbook          | Icon for a swatchbook                              | Design/Colors             |
| SwatchbookOutline   | Outline version of the swatchbook icon             | Design/Colors             |

### Start with letter 'T'

| **Icon Name**      | **Description**                          | **Category**     |
| ------------------ | ---------------------------------------- | ---------------- |
| TableColumn        | Icon for a table column                  | UI/Controls      |
| TableColumnOutline | Outline version of the table column icon | UI/Controls      |
| TableRow           | Icon for a table row                     | UI/Controls      |
| Tshirt             | Icon for a t-shirt                       | Clothing/Fashion |
| TshirtOutline      | Outline version of the t-shirt icon      | Clothing/Fashion |
| **Icon Name**      | **Description**                          | **Category**     |
| ------------------ | ---------------------------------------- | ---------------- |
| Tablet             | Icon for a tablet                        | Devices          |
| TabletOutline      | Outline version of the tablet icon       | Devices          |
| Tag                | Icon for a tag                           | UI/Controls      |
| TagOutline         | Outline version of the tag icon          | UI/Controls      |
| Tailwind           | Icon for the Tailwind logo               | Frameworks       |
| TeddyBear          | Icon for a teddy bear                    | Toys             |
| TeddyBearOutline   | Outline version of the teddy bear icon   | Toys             |
| Terminal           | Icon for a terminal                      | Developer Tools  |
| TerminalOutline    | Outline version of the terminal icon     | Developer Tools  |
| TextSize           | Icon for text size adjustment            | Typography       |
| TextSlash          | Icon for strikethrough text              | Typography       |
| TextUnderline      | Icon for underlined text                 | Typography       |
| ThumbsDown         | Icon for thumbs down                     | Emotions         |
| ThumbsDownOutline  | Outline version of thumbs down icon      | Emotions         |
| ThumbsUp           | Icon for thumbs up                       | Emotions         |
| ThumbsUpOutline    | Outline version of thumbs up icon        | Emotions         |
| ThumbTack          | Icon for a thumbtack                     | Office Supplies  |
| ThumbTackOutline   | Outline version of thumbtack icon        | Office Supplies  |
| Ticket             | Icon for a ticket                        | Entertainment    |
| TicketOutline      | Outline version of the ticket icon       | Entertainment    |
| ToggleHead         | Icon for a toggle head                   | UI/Controls      |
| ToggleHeadAlt      | Alternative toggle head icon             | UI/Controls      |
| ToggleHeadOutline  | Outline version of toggle head icon      | UI/Controls      |
| Tools              | Icon for tools                           | Utilities        |
| Tracking           | Icon for tracking                        | Logistics        |
| TrashBin           | Icon for a trash bin                     | UI/Controls      |
| TrashBinOutline    | Outline version of trash bin icon        | UI/Controls      |
| Truck              | Icon for a truck                         | Vehicles         |
| TruckOutline       | Outline version of the truck icon        | Vehicles         |
| TruckClock         | Icon for a truck with a clock            | Vehicles         |
| TruckClockOutline  | Outline version of truck clock icon      | Vehicles         |
| Twitter            | Icon for Twitter logo                    | Social Media     |

### Start with letter 'U'

| **Icon Name**      | **Description**                        | **Category**    |
| ------------------ | -------------------------------------- | --------------- |
| Undo               | Icon for undoing an action             | UI/Controls     |
| Upload             | Icon for uploading                     | File Management |
| UploadOutline      | Outline version of upload icon         | File Management |
| User               | Icon for a user                        | User Management |
| UserAdd            | Icon for adding a new user             | User Management |
| UserAddOutline     | Outline version of user add icon       | User Management |
| UserCircle         | Icon for a user profile in a circle    | User Management |
| UserCircleOutline  | Outline version of user circle icon    | User Management |
| UserEdit           | Icon for editing user information      | User Management |
| UserEditOutline    | Outline version of user edit icon      | User Management |
| UserHeadset        | Icon for a user with a headset         | Communication   |
| UserHeadsetOutline | Outline version of user headset icon   | Communication   |
| UserOutline        | Outline version of the user icon       | User Management |
| UserRemove         | Icon for removing a user               | User Management |
| UserRemoveOutline  | Outline version of user remove icon    | User Management |
| UserSetting        | Icon for user settings                 | Settings        |
| UserSettingOutline | Outline version of user setting icon   | Settings        |
| UsersGroup         | Icon for a group of users              | User Management |
| UsersGroupOutline  | Outline version of users group icon    | User Management |
| UsersOutline       | Outline version of multiple users icon | User Management |

### Start with letter 'V'

| **Icon Name**      | **Description**                          | **Category**         |
| ------------------ | ---------------------------------------- | -------------------- |
| VideoCamera        | Icon for a video camera                  | Media/Devices        |
| VideoCameraOutline | Outline version of the video camera icon | Media/Devices        |
| Visa               | Icon for Visa payment method             | Payment Methods      |
| VolumeDownOutline  | Outline version of volume down icon      | Audio Controls       |
| VolumeMute         | Icon for muting audio                    | Audio Controls       |
| VolumeMuteOutline  | Outline version of mute audio icon       | Audio Controls       |
| VolumeUp           | Icon for increasing audio volume         | Audio Controls       |
| VolumeUpOutline    | Outline version of volume up icon        | Audio Controls       |
| VolumnDown         | Icon for decreasing audio volume         | Audio Controls       |
| Vue                | Icon for the Vue.js framework            | Framework/Technology |

### Start with letter 'W'

| **Icon Name**    | **Description**                        | **Category**     |
| ---------------- | -------------------------------------- | ---------------- |
| Wallet           | Icon for a wallet                      | Finance          |
| WalletOutline    | Outline version of the wallet icon     | Finance          |
| WandMagic        | Icon for a magic wand                  | Tools/Magic      |
| WandMagicOutline | Outline version of the magic wand icon | Tools/Magic      |
| Whatsapp         | Icon for WhatsApp                      | Social Media     |
| Window           | Icon for a window                      | UI/Elements      |
| WindowOutline    | Outline version of the window icon     | UI/Elements      |
| WindowRestore    | Icon for restoring a window            | UI/Elements      |
| Windows          | Icon for the Windows operating system  | Operating System |

### Start with letter 'X'

| **Icon Name** | **Description**                  | **Category** |
| ------------- | -------------------------------- | ------------ |
| X             | Icon representing the letter 'X' | Social Media |

### Start with letter 'Y'

| **Icon Name** | **Description**               | **Category** |
| ------------- | ----------------------------- | ------------ |
| Youtube       | Icon for the YouTube platform | Social Media |

### Start with letter 'Z'

| **Icon Name**  | **Description**                      | **Category** |
| -------------- | ------------------------------------ | ------------ |
| ZoomIn         | Icon for zooming in                  | Tools        |
| ZoomInOutline  | Outline version of the zoom-in icon  | Tools        |
| ZoomOut        | Icon for zooming out                 | Tools        |
| ZoomOutOutline | Outline version of the zoom-out icon | Tools        |

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
