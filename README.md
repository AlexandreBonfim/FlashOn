# FlashOn

React Native, Firebase, Mobx, Google Vision API mobile application to identify touristic places in pictures taken using the phone.

## Getting Started

First, install dependencies by running
```
npm install
```
install react cli by running
```
npm install - g react-native-cli
```
Get an API key for Google Cloud Vision [here](https://console.cloud.google.com/apis/credentials), then replace it here in app.js line 136
```
fetch('https://vision.googleapis.com/v1/images:annotate?key=[API key here]', {
```
Get an API key for Google Maps [here](https://developers.google.com/maps/documentation/ios-sdk/get-api-key), then replace it here in android/app/src/main/AndroidManifest.xml line 27
```
<application>
   <meta-data
      android:name="com.google.android.geo.API_KEY"
      android:value="INSERT GOOGLE MAPS API KEY HERE!!!!!!!"/>
</application>
```

To Start Usb debugging mode on your device. Everything [here](https://www.verizonwireless.com/support/knowledge-base-203783/)
Check if your device is connected by running 
```
adb devices
```
Create a file called "local.properties" inside android folder and save the path on it(Windows Users)
```
sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
```
Launch react
```
react-native run-android
```

### Prerequisites

Youd need 
* clone the repo
* npm or yarn
* Android SDK (Easiest to download everything with [Android Studio](https://developer.android.com/studio/index.html)) 
* Add to the Windows PATH (C:\Users\USERNAME\AppData\Local\Android\Sdk)
* Your own Google Cloud Vision Api key. Get one [here](https://console.cloud.google.com/apis/credentials)
* Your own Google Maps Api key. Get one [here](https://developers.google.com/maps/documentation/ios-sdk/get-api-key)
* Install Java JDK and JRE with the same versions
* Go to Control Panel > Region > Format >English(United States)

## Building an apk

You'd want to generate a signing key and build the apk like [here](https://facebook.github.io/react-native/docs/signed-apk-android.html)

## Built With

* [create-react-native-app](https://github.com/react-community/create-react-native-app) - Create a React Native app on any OS with no build config.
* [Google Cloud Vision API](https://cloud.google.com/vision/) - Allows developers to easily integrate vision detection features within applications, including image labeling, face and landmark detection, optical character recognition (OCR), and tagging of explicit content.
* [Google Maps API](https://developers.google.com/maps/documentation/ios-sdk/get-api-key) - With the Maps SDK for iOS, you can add maps based on Google maps data to your application. The SDK automatically handles access to the Google Maps servers, map display, and response to user gestures such as clicks and drags. You can also add markers, polylines, ground overlays and info windows to your map. These objects provide additional information for map locations, and allow user interaction with the map.
* [Firebase](https://firebase.google.com/products/) - Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the essentials so you can monetize your business and focus on your users.

* [react-native-image-picker@latest --save](https://github.com/lwansbrough/react-native-camera) - A React Native module that allows you to use native UI to select a photo/video from the device library or directly from the camera.
* [mobx --save](https://mobx.js.org/) - MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP). The philosophy behind MobX is very simple: Anything that can be derived from the application state, should be derived. Automatically.

## Authors

* **Alexandre Bonfim** - *Initial work* - [GitHub](https://github.com/AlexandreBonfim) / [LinkedIn](https://www.linkedin.com/in/alexandre-bonfim/)

* **Pedro Santos**     - *Initial work* - [GitHub](https://github.com/pedropaulo15) / [LinkedIn](https://www.linkedin.com/in/pedropmsantos/)


## Contributing

I'm open to reasonable pull requests to just play around with the application for fun


## License

This project is licensed under the MIT License 
