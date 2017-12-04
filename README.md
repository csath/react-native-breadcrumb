# react-native-breadcrumb [![npm version](https://badge.fury.io/js/react-native-breadcrumb.svg)](https://badge.fury.io/js/react-native-breadcrumb)
A react-native breadcrumb for both android and ios. You can define any number of crumbs and this will automatically adjust according to the wrapped view's width. If you need you can change the selected crumb by tapping on a crumb(should be activated by passing 'true' to isTouchable prop).

# Demo

![Alt text](/screenshots/1.gif?raw=true "IronDome")

# Installation
```
yarn add react-native-breadcrumb
```
 or 
```
npm install --save react-native-breadcrumb
```

# Usage
```js
import Breadcrumb from 'react-native-breadcrumb';

 <Breadcrumb
          entities={['My Tab 1', 'My Tab 2', 'My Tab 3']}
          isTouchable={true}
          flowDepth={0}
          height={30}
          onCrumbPress={index => {}}
          borderRadius={5}
 />
 ```
 # Prop-types
 
 | Prop name  |Type |
| ------------- | ------------- |
| entities  | list - list of names for crumbs  |
| flowDepth  | int - indicates selected crumb indexing from 0 |
| isTouchable  | boolean - identify if crumbs are touchable  |
| onCrumbPress  | function - this returns the selected crumbs index and is required if isTouchable is 'true'  |
| borderRadius  | int - radius of the container  |
| crumbsContainerStyle  | object -  styles for view  |
| crumbStyle  | object -  styles for view  |
| activeCrumbStyle  | object -  styles for view  |
| crumbTextStyle  | object -  styles for Text  |
| activeCrumbTextStyle  | object -  styles for view  |
| height | int - indicates the height in pixels |

# Example

checkout sample directory and findout a react-native app.
``` 
react-native run-android
```
 or 
```
react-native run-ios
```
