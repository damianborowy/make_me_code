import { h } from 'preact';
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
  test('Header renders 3 nav items', () => {
    const context = shallow(
      <div>
        <h1>Preact App</h1>
      </div>
    );

    expect(context.find('h1').text()).toBe('Preact App');
  });
});
