import { mount } from '@vue/test-utils';
import SubmitButton from '@/components/SubmitButton.vue';

interface Props {
  msg: string;
  isAdmin?: boolean;
}

const factory = (propsData: Props) => mount(SubmitButton, { propsData: { ...propsData } });

describe('SubmitButton.vue', () => {
  describe('does not have admin privileges', () => {
    it('renders a message', () => {
      const wrapper = factory({ msg: 'submit' });
      expect(wrapper.find('span').text()).toBe('Not authorized');
      expect(wrapper.find('button').text()).toBe('submit');
    });
  });
  describe('has admin privileges', () => {
    it('renders a message', () => {
      const wrapper = factory({ msg: 'submit', isAdmin: true });
      expect(wrapper.find('span').text()).toBe('Admin Privileges');
      expect(wrapper.find('button').text()).toBe('submit');
    });
  });
});
