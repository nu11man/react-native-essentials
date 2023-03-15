import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import type { RenderOptions } from '@testing-library/react-native';
import type { PreloadedState } from '@reduxjs/toolkit';

import { AppStoreType, RootStateType, setupStore } from '@redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootStateType>;
  store?: AppStoreType;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
