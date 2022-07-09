import { render, screen, fireEvent } from '@testing-library/react-native';
import { Later } from './Later';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native');

describe('Later tests using mocks', () => {
  test('Later component can navigate', () => {
    render(<Later />);

    expect(screen.getByText('count: 0')).toBeTruthy();
    const button = screen.getByText('click me');
    fireEvent.press(button);
    expect(screen.getByText('count: 1')).toBeDefined();

    const b2 = screen.getByText('travel');
    fireEvent.press(b2);
    expect(useNavigation().navigate).toHaveBeenCalledWith('Search');
    expect(useNavigation().navigate).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": Array [
          Array [
            "Search",
          ],
        ],
        "results": Array [
          Object {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `);
  });

  test('our mocks are reset between calls', () => {
    render(<Later />);

    const b2 = screen.getByText('travel');
    fireEvent.press(b2);
    expect(screen.getByText('Later')).toBeTruthy();
    expect(useNavigation().navigate).toHaveBeenCalledWith('Search');
    expect(useNavigation().navigate).toHaveBeenCalledTimes(1);
  });
});
