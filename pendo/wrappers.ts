import type { ComponentType } from 'react';

import { PendoSDK, NavigationLibraryType, withPendoRN } from 'rn-pendo-sdk';

const PENDO_KEY =
'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiI2NjYxNDY5ODhlMTJmYTY2NTRjZTI1NjQzZDcxOTYxODMzYzFlNjJhMDYxYzcyYjIyYjQ2Nzk4ZGZjYjAzNWEzNDQwMTZhOTMyYTlkYmNmY2UxOTE1YzMwM2Q2MGUyY2JlYzc2ZGIyNjA2YzliZTYzZmZhODdlMTcwMjViZTcwNjRiYjA0NmVkMTgwODNhYmRkMDcxN2VlZWIzYTkxYTMwOWM5OGMxYWQ3ODZiM2RmMmQzYjAwOTQ3YTZlNGM1NWY0ZTNlMmYyZGRhNDQ3YWRiOTk0ZDg5OWI4M2ViZTc3MC5iYjZhYjMyYThiNWY5YWE2MWE4OTIyMTc2OTNhYzE0Yi40NGVkODgwNjdjZDgwYjVmMWRkZjk3ZTNmNDBlNGQ2ZDYwOWU4MDMzYmE4MzRmYjdhYzM2MDJkNjdjYjA2OWEzIn0.eyIq5XKE3IZrPyBAKO_kgbbYs2YTMyzMn2c8KqftkpFImLSphb9pmnla_tcLDC7dq_KXIIylCR3DjF3n1iRLHKtXYYQv98THpUnHBW47HtX52AMrfGoopOcBb8YHVDecxASgPkHxsQDDBacgAXmkas9T5UqLWAPCiuQg466Rx5k';
const ENABLED = true;

let initialized = false;

interface PendoParams {
  visitorId: string | null;
  visitorData?: object;
  accountId: string | null;
  accountData?: object;
}

export interface WithPendoProps {
  onReady: () => void;
  onStateChange: (state: unknown) => void;
}

function init() {
  if (!initialized && ENABLED) {
    const navigationOptions = {
      library: NavigationLibraryType.ReactNavigation,
      navigation: null,
    };
    PendoSDK.setup(PENDO_KEY, navigationOptions);
    initialized = true;
  }
}

export function withPendo(WrappedComponent: ComponentType<any>) {
  if (ENABLED) {
    init();

    return withPendoRN(WrappedComponent) as typeof WrappedComponent;
  }

  return WrappedComponent;
}

export function startSession(params: PendoParams): void {
  if (ENABLED) {
    init();

    PendoSDK.startSession(
      params.visitorId,
      params.accountId,
      params.visitorData,
      params.accountData,
    );
  }
}