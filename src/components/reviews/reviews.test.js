import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('more than 0', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('[data-id="product-item"]').length).toBeGreaterThan(0)
  })
});
