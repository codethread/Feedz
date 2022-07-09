import { render, screen, fireEvent } from '@testing-library/react-native';
import { Later } from './Later';
import { NavigationContext } from '@react-navigation/native';
import { ContextType } from 'react';

jest.unmock('@react-navigation/native'); // shouldn't be needed

describe('Later', () => {
  test('we can navigate without fuss', () => {
    render(
      <FakeContainer>
        <Later />
      </FakeContainer>
    );

    expect(screen.getByText('count: 0')).toBeTruthy();
    const button = screen.getByText('click me');
    fireEvent.press(button);
    expect(screen.getByText('count: 1')).toBeDefined();

    const b2 = screen.getByText('travel');
    fireEvent.press(b2);
    // can't do this, as we are outside component, you could add another component
    // expect(useNavigation().navigate).toHaveBeenCalledWith('Search');
  });

  test('we can DI test concerns', () => {
    const spy = jest.fn();
    render(
      <FakeContainer overrides={{ navigate: spy }}>
        <Later />
      </FakeContainer>
    );

    const b2 = screen.getByText('travel');
    fireEvent.press(b2);

    // can't do this, as we are outside component, you could add another component
    expect(spy).toHaveBeenCalledWith('Search');
  });
});

// ===================================================================== //
// Would be in another file
// ===================================================================== //

type NavContext = ContextType<typeof NavigationContext>;

type NavOverrides = Partial<NavContext>;

interface IFakeContainer {
  children: React.ReactNode;
  overrides?: NavOverrides;
}

function FakeContainer({ children, overrides }: IFakeContainer) {
  const mockNav: NavContext = {
    canGoBack: jest.fn(),
    getId: jest.fn(),
    getParent: jest.fn(),
    removeListener: jest.fn(),
    reset: jest.fn(),
    setOptions: jest.fn(),
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    isFocused: jest.fn(),
    getState: jest.fn(),
  };

  return (
    <NavigationContext.Provider
      value={{
        ...mockNav,
        ...overrides,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
