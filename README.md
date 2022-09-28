# React Native Essentials

### What is this?
This repository contains a compilation of essential components, configurations and utilities that you can use when starting a new React Native project.


### How can I use this repo?
The idea is that you create a React Native project:

```shell
   npx react-native init AwesomeProject --template react-native-template-typescript
```

Then you can downdload the `creator.sh` (or copy the content) and store it in the root folder of your new React Native project (where `package.json` is located).

Remember to add execution permissions:

```bash
   chmod u+x creator.sh
```

Then execute it:

```
   ./creator.sh
```

This shell is going to clone this repository, install all the libraries and set up the configurations listed bellow. Finally it will remove any temporary file from your filesystem including this repository.

Now you can run the application with:

```
npx react-native run-ios
```

#### Addional steps for specific libraries
- **React Native Config**: In other to get the React Native Config package to work in Android we need to add a plugin to our app, as [mentioned by the lib docs](https://github.com/luggit/react-native-config#extra-step-for-android). In the second line of `android/app/build.gradle` write this:

   ```
      apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
   ```

### Add development dependencies and configurations
- [x] Eslint
- [x] Prettier
- [x] Typescript
- [x] [Module resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
- [x] [Reactotron (for network, redux and apisauce debugging)](https://github.com/infinitered/reactotron)

### Currently supported and configured production-ready packages
- [x] Animations with the awesome [React Native Reanimated v2.x](https://docs.swmansion.com/react-native-reanimated/)
- [x] State management with [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [x] Image management with [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)
- [x] Network management with [Apisauce](https://github.com/infinitered/apisauce)
- [x] Config variables managed with [React Native Config](https://github.com/luggit/react-native-config)
- [x] Device information managed by [React Native Device Info](https://github.com/react-native-device-info/react-native-device-info)
- [x] Redux state persistance handled by [Redux Persist](https://github.com/rt2zz/redux-persist)
- [x] Data storage managed by high performance package [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)

### Pending packages to be added
- [ ] Add custom input
- [ ] Add custom label
- [ ] Add custom button
- [ ] Add react-hook-form
- [ ] Add react-i18next
- [ ] Add Notifee support
- [ ] Add RTK Query
- [ ] Add authentication flow
- [ ] Add button tap navigation

### Pending documentation
- [ ] Document how to configure Android Flavors
- [ ] Document how to configure iOS Schemes
- [ ] Document how to generate APK/AAB packages
- [ ] Document how to test React Native applications with React Native Testing Library
- [ ] Document how to implement CI/CD with Github Actions

### How to contribute
Pending section...
