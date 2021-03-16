import { mount } from '@vue/test-utils';
import NumberRenderer from '@/components/NumberRenderer.vue';

interface Props {
  even: boolean;
}

const factory = (propsData: Props) => mount(NumberRenderer, { propsData: { ...propsData } });

describe('NumberRenderer', () => {
  it('renders even numbers', () => {
    const wrapper = factory({ even: true });
    expect(wrapper.text()).toBe('2, 4, 6, 8');
  });
  it('renders odd numbers', () => {
    const wrapper = factory({ even: false });
    expect(wrapper.text()).toBe('1, 3, 5, 7, 9');
  });
});
