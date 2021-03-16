import { mount } from '@vue/test-utils';
import SubmitButton from '@/components/SubmitButton.vue';

interface Props {
  msg: string;
  isAdmin: boolean;
}

const factory = (propsData: Props) => mount(SubmitButton, { ...propsData });

describe('SubmitButton.vue', () => {
  it('displays a non authorized message', () => {
    const msg = 'submit';
    const wrapper = mount(SubmitButton, {
      propsData: {
        msg,
      },
    });

    console.log(wrapper.html());

    expect(wrapper.find('span').text()).toBe('Not authorized');
    expect(wrapper.find('button').text()).toBe('submit');
  });
  it('displays the Admin Privileges', () => {
    const msg = 'submit';
    const isAdmin = true;
    const wrapper = mount(SubmitButton, {
      propsData: {
        msg,
        isAdmin,
      },
    });

    console.log(wrapper.html());

    expect(wrapper.find('span').text()).toBe('Admin Privileges');
    expect(wrapper.find('button').text()).toBe('submit');
  });
});
