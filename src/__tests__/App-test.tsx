import 'react-native';
import React from 'react';
import { screen } from '@testing-library/react-native';
import AppNavigator from '@app/navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { renderWithProviders } from '@utils/reduxTestUtils';
import 'src/config/localization/i18n';

describe('Sign in screen', () => {
  it('renders correctly', async () => {
    renderWithProviders(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    screen.getAllByText('Sign In');
  });
});
