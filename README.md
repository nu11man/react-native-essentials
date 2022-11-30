# React Native Essentials

### What is this?
This repository contains a compilation of essential packages, components, configurations and utilities that you can use when starting a new React Native project with Typescript support.

This reposiotory creates a minimal working application that shows you how to use almost all the installed and configured packages.

---

### Currently supported dependencies and configurations
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
- [x] Get Locale device preferences [React Native Localize](react-native-localize)
- [x] Internationalization support with [i18next](https://www.i18next.com/) [React i18next](https://react.i18next.com/)

---
### How can I use this repo?
To take the most out of this project you need to create a React Native project with Typescript support:

```shell
   npx react-native init AwesomeProject --template react-native-template-typescript
```

Then you can downdload the `creator.sh` (or copy the content) and store it in the root folder of your new React Native project (where `package.json` is located). You can do that by executing this line:

```bash
   curl https://github.com/nu11man/react-native-essentials/blob/main/creator.sh --output creator.sh
```

Remember to add execution permissions:

```bash
   chmod u+x creator.sh
```

Then execute it:

```
   ./creator.sh
```

This shell is going to clone this repository, install all the libraries and set up the configurations automatically. When it finishes, it will remove any temporary file from your filesystem including this repository itself.

Now you can run the application with:

```
npx react-native run-ios
```

---

### Addional steps for specific libraries

After the shell finishes, there are some manual configurations that needs to be applied for a few packages to work properly. These additional steps are listed bellow:

- **React Native Config**: In other to get the React Native Config package to work in Android we need to add a plugin to our app, as [mentioned by the lib docs](https://github.com/luggit/react-native-config#extra-step-for-android). In the second line of `android/app/build.gradle` write this:

   ```
      apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
   ```

- **React Navigation**: After the React Navigation main dependencies are installed, the [documentation suggest a change](https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project) in the `MainActivity.java` file which is located in `android/app/src/main/java/<your package name>/MainActivity.java`.

   Add the following code to the body of MainActivity class:

   ```java
      import android.os.Bundle;
      .
      .
      .
      .
      @Override
      protected void onCreate(Bundle savedInstanceState) {
         super.onCreate(null);
      }
   ```
   This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.

---

#### Pending packages to be added
- [ ] Add Font Awesome for icon management
- [ ] Add authentication flow
- [ ] Add button tap navigation
- [ ] Add RTK Query
- [ ] Add custom input
- [ ] Add custom label
- [ ] Add custom button
- [ ] Add react-hook-form
- [ ] Add Notifee support

#### Pending documentation
- [ ] Document how to configure Android Flavors
- [ ] Document how to configure iOS Schemes
- [ ] Document how to generate APK/AAB packages
- [ ] Document how to test React Native applications with React Native Testing Library
- [ ] Document how to implement CI/CD with Github Actions

#### How to contribute
Pending section...
