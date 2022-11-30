#!/bin/bash

DELAY=0.3
PROJECT_ROOT=$(pwd)
GIT_REPO_NAME="react-native-essentials"

# Remove deprecated dependencies
yarn remove eslint @react-native-community/eslint-config

# Install dev dependencies
yarn add --dev eslint eslint-plugin-react-native
yarn add --dev --exact prettier
yarn add --dev eslint-config-prettier
yarn add --dev babel-plugin-module-resolver
yarn add --dev eslint-plugin-import eslint-import-resolver-babel-module
yarn add --dev reactotron-redux reactotron-react-native reactotron-apisauce

# Install direct dependencies
yarn add react-native-reanimated
yarn add @reduxjs/toolkit redux react-redux
yarn add react-native-fast-image
yarn add apisauce
yarn add react-native-config
yarn add react-native-device-info
yarn add redux-persist
yarn add react-native-mmkv
yarn add react-native-localize
yarn add i18next react-i18next

clear

# Create filesystem
echo "Creating first level directories..."
mainDirectories=("src" "__tests__" "__mocks__")
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
cp -r /Users/juliocesarecheverri/Developer/pocs/react-native-essentials/* react-native-essentials/

# Install custom Nunito Fonts
# ToDo: Make this an optional procedure
mkdir -p assets/fonts
cp $GIT_REPO_NAME/src/assets/fonts/* assets/fonts
npx react-native-asset

sleep $DELAY
echo ""
echo "Populate application files"
cp -r $GIT_REPO_NAME/src/app/* src/app
cp $GIT_REPO_NAME/src/config/* src/config
cp $GIT_REPO_NAME/src/constants/* src/constants
cp $GIT_REPO_NAME/src/interfaces/* src/interfaces
cp -r $GIT_REPO_NAME/src/redux/* src/redux
cp $GIT_REPO_NAME/src/services/* src/services
cp $GIT_REPO_NAME/src/utils/* src/utils


sleep $DELAY
echo ""
echo "Populate project configuration files"
cp -r $GIT_REPO_NAME/src/projectConfig/. ./

# Clean filesystem
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