import { Home } from './Home';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper'); // suppress warnings, this would be in a setup file

jest.unmock('@react-navigation/native'); // shouldn't be needed
jest.mock('@hooks', () => ({
  useRSS: () => ({ loading: true, data: null }),
}));

describe('Home', () => {
  test('nav works', () => {
    render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    // drawbacks of this method are huge outputs, and likely slow tests
    // screen.debug();

    expect(screen.queryByText('click me')).toBeFalsy();

    expect(screen.getByLabelText('Later, tab, 2 of 5')).toBeTruthy();

    fireEvent.press(screen.getByLabelText('Later, tab, 2 of 5'));

    expect(screen.queryByText('click me')).toBeTruthy();
  });
});
