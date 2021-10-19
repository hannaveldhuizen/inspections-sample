/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { PendoSDK, NavigationLibraryType } from 'rn-pendo-sdk';
import App from './App';
import { name as appName } from './app.json';

function initPendo() {
  const initParams = {
    visitorId: 'John Smith',
    accountId: 'Acme inc.',
    visitorData: {
      age: 25,
      country: 'USA',
    },
    accountData: {
      Tier: 1,
      Size: 'Enterprise',
    },
  };

  const navigationOptions = {
    library: NavigationLibraryType.ReactNavigation,
    navigation: null,
  };
  const pendoKey =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiI2NjYxNDY5ODhlMTJmYTY2NTRjZTI1NjQzZDcxOTYxODMzYzFlNjJhMDYxYzcyYjIyYjQ2Nzk4ZGZjYjAzNWEzNDQwMTZhOTMyYTlkYmNmY2UxOTE1YzMwM2Q2MGUyY2JlYzc2ZGIyNjA2YzliZTYzZmZhODdlMTcwMjViZTcwNjRiYjA0NmVkMTgwODNhYmRkMDcxN2VlZWIzYTkxYTMwOWM5OGMxYWQ3ODZiM2RmMmQzYjAwOTQ3YTZlNGM1NWY0ZTNlMmYyZGRhNDQ3YWRiOTk0ZDg5OWI4M2ViZTc3MC5iYjZhYjMyYThiNWY5YWE2MWE4OTIyMTc2OTNhYzE0Yi40NGVkODgwNjdjZDgwYjVmMWRkZjk3ZTNmNDBlNGQ2ZDYwOWU4MDMzYmE4MzRmYjdhYzM2MDJkNjdjYjA2OWEzIn0.eyIq5XKE3IZrPyBAKO_kgbbYs2YTMyzMn2c8KqftkpFImLSphb9pmnla_tcLDC7dq_KXIIylCR3DjF3n1iRLHKtXYYQv98THpUnHBW47HtX52AMrfGoopOcBb8YHVDecxASgPkHxsQDDBacgAXmkas9T5UqLWAPCiuQg466Rx5k';
  PendoSDK.initSdk(pendoKey, initParams, navigationOptions);
}

initPendo();

AppRegistry.registerComponent(appName, () => App);
