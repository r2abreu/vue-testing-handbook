import { mount } from '@vue/test-utils';
import NumberRenderer from '@/components/NumberRenderer.vue';

describe('NumberRenderer', () => {
  it('renders even numbers', () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: true,
      },
    });
    expect(wrapper.text()).toBe('2, 4, 6, 8');
  });
});
