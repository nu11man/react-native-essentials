#!/bin/bash

DELAY=0.3
PROJECT_ROOT=$(pwd)
GIT_REPO_NAME="react-native-essentials"

# Remove deprecated dependencies
yarn remove eslint @react-native-community/eslint-config jest @types/jest

# Install dev dependencies
yarn add --dev eslint@8.54.0 eslint-plugin-react-native@4.1.0
yarn add --dev prettier@3.1.0
yarn add --dev eslint-config-prettier@9.0.0
yarn add --dev babel-plugin-module-resolver@5.0.0
yarn add --dev eslint-plugin-import@2.29.0 eslint-import-resolver-babel-module@5.3.2
yarn add --dev reactotron-redux@3.1.3 reactotron-react-native@5.0.3 reactotron-apisauce@3.0.0
yarn add --dev @testing-library/react-native@12.4.3
yarn add --dev jest@29.7.0 @types/jest@29.5.11 ts-jest@29.1.2 ts-node@10.9.2

# Install direct dependencies
yarn add react-native-reanimated@3.5.4
yarn add @reduxjs/toolkit@1.9.7 redux@4.2.1 react-redux@8.1.3
yarn add react-native-fast-image@8.6.3
yarn add apisauce@3.0.1
yarn add react-native-config@1.5.1
yarn add react-native-device-info@10.11.0
yarn add redux-persist@6.0.0
yarn add react-native-mmkv@2.5.1
yarn add react-native-localize@3.0.3
yarn add i18next@23.7.6 react-i18next@13.5.0 intl-pluralrules@2.0.1
yarn add react-native-gesture-handler@2.14.1
yarn add @react-navigation/native@6.1.9 react-native-screens@3.27.0 react-native-safe-area-context@4.7.4 @react-navigation/native-stack@6.9.17 @react-navigation/bottom-tabs@6.5.11
yarn add @fortawesome/react-native-fontawesome@0.3.0 @fortawesome/fontawesome-svg-core@6.4.2 react-native-svg@14.0.0
yarn add @fortawesome/free-solid-svg-icons@6.4.2
yarn add @fortawesome/free-brands-svg-icons@6.4.2
yarn add @fortawesome/free-regular-svg-icons@6.4.2



clear

# Create filesystem
echo "Creating first level directories..."
mainDirectories=("src" "jest" "__tests__" "__mocks__")
for i in "${mainDirectories[@]}"
do
	echo $i
	mkdir -p $i
  sleep $DELAY
done

echo ""
echo "Creating second level directories..."
cd src
directories=("app" "config" "constants" "interfaces" "lottieAssets" "redux" "services" "utils")
for i in "${directories[@]}"
do
	echo $i
	mkdir $i
  sleep $DELAY
done

echo ""
echo "Creating third level directories..."
cd app
appDirectories=("assets" "components" "hooks" "screens")
for i in "${appDirectories[@]}"
do
	echo $i
	mkdir $i
  sleep $DELAY
done

# Download and copy app files
echo ""
echo "Downloading react native essentials repo..."
cd $PROJECT_ROOT
git clone git@github.com:nu11man/react-native-essentials.git
# mkdir react-native-essentials
# cp -r /Users/juliocesarecheverri/Developer/pocs/react-native-essentials/* react-native-essentials/

sleep $DELAY
echo ""
echo "Populate application files"
cp -r $GIT_REPO_NAME/src/app/* src/app
cp -r $GIT_REPO_NAME/src/config/* src/config
cp $GIT_REPO_NAME/src/constants/* src/constants
cp $GIT_REPO_NAME/src/interfaces/* src/interfaces
cp -r $GIT_REPO_NAME/src/redux/* src/redux
cp $GIT_REPO_NAME/src/services/* src/services
cp $GIT_REPO_NAME/src/utils/* src/utils
cp $GIT_REPO_NAME/src/__tests__/* __tests__

sleep $DELAY
echo ""
echo "Populate project configuration files"
cp -r $GIT_REPO_NAME/src/projectConfig/. ./
cp jestSetup.js jest/

# Install custom Nunito Fonts
# ToDo: Make this an optional procedure
mkdir -p assets/fonts
cp $GIT_REPO_NAME/src/assets/fonts/* assets/fonts
npx react-native-asset

# # Clean filesystem
sleep $DELAY
echo ""
echo "Remove unused files"
unusedFiles=(".prettierrc.js" ".eslintrc.js")
for i in "${unusedFiles[@]}"
do
	rm -r $i
done

sleep $DELAY
echo ""
echo "Remove react-native-essentials folder"
rm -rf $GIT_REPO_NAME

cd ios/ && pod install
