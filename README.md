# NativeScript Locate Address plugin
This plugin helps to open the native mapping app and displaying a map of the address passed in.
Inspired by NativeScript Directions plugin by Eddy Verbruggen
For iOS and Android

## Installation
From the command prompt go to your app's root folder and execute:

```
tns plugin add nativescript-locate-address
```

## Demo app
Want to dive in quickly? Check out [the demo app](demo)! Otherwise, continue reading.

You can run the demo app from the root of the project by typing `npm run demo.ios.device` or `npm run demo.android`.

<img src="https://raw.githubusercontent.com/iguissouma/nativescript-locate-address/master/locate-address-animated.gif" width="320px" height="570px"/>

## API

### `available`
Not all devices have the Google (Android) or Apple (iOS) Maps app installed. Well, most do of course, but on an Android simulator you may be out of luck, so let's check beforehand:

##### JavaScript
```js
// require the plugin
var LocateAddress = require("nativescript-locate-address").LocateAddress;

// instantiate the plugin
var locator = new LocateAddress();

locator.available().then(
  function(avail) {
    console.log(avail ? "Yes" : "No");
  }
);
```

##### TypeScript
```js
// require the plugin
import {LocateAddress} from "nativescript-locate-address";

// instantiate the plugin
let locator = new LocateAddress();

locator.available().then((avail) => {
    console.log(avail ? "Yes" : "No");
});
```

### `locate`
This function opens the native Maps app with a predefined address.

Note that if the address is not recognized you won't be able to get location, don't blame this plugin for that.

##### JavaScript
```js
locator.locate({
    address: "289 Avenue georges clemenceau, Nanterre 92000, France",
}).then(
  function() {
    console.log("Maps app launched.");
  },
  function(error) {
    console.log(error);
  },
);
```

##### TypeScript
```js
locator.locate({
    address: "289 Avenue georges clemenceau, Nanterre 92000, France",
}).then(() => {
    console.log("Maps app launched.");
}, (error) => {
    console.log(error);
});
```

You can use `lat` and `lng` to locate address.

##### JavaScript
```js
locator.locate({
    lat : 48.8858671,
    lng : 2.2188144
}).then(
  function() {
    console.log("Maps app launched.");
  },
  function(error) {
    console.log(error);
  },
);
```

##### TypeScript
```js
locator.locate({
    lat : 48.8858671,
    lng : 2.2188144
}).then(() => {
    console.log("Maps app launched.");
}, (error) => {
    console.log(error);
});
```


## Future work
* Nothing.
