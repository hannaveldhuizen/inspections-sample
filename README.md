# inspections-sample
Sample of inspections code to solve pendo tagging. I believe the problem lies somewhere with using a custom navigator through `'@react-navigation/native'`. I did notice that using react-native's `SafeAreaView` broke tagging, but we do not use those in our app so that could not have been related to our issue. Once I added a simplified implementation of our `AppNavigator` ([commit](https://github.com/hannaveldhuizen/inspections-sample/commit/2351cea1528908786b831c957c923eb05796644b)), tagging broke for good.

# Setup
## Use locally
```
yarn
cd ios/ && pod install
yarn start
yarn ios
```
## Tagging pages
I used xCode to build this app on my device so I could test tagging the pages in pendo. [How to run on a device](https://reactnative.dev/docs/running-on-device)

# [Tagged Pages](https://app.pendo.io/s/6429108679344128/pages)
