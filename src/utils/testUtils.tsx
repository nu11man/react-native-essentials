const DEFAULT_NAVIGATION_MOCK = {
  navigate: jest.fn(),
  reset: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn()
};

export const withNavigationMock = (
  Component: (props: any) => JSX.Element,
  navigationProps: Record<string, Record<string, unknown>> = {}
) => {
  const { navigation = DEFAULT_NAVIGATION_MOCK, route = {} } = navigationProps;
  return (props: any) => <Component navigation={navigation} route={route} {...props} />;
};
