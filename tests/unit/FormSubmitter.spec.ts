import { mount } from '@vue/test-utils';
import FormSubmitter from '@/components/FormSubmitter.vue';

describe('FormSubmitter.vue', () => {
  it('doesnt render message without submitting', () => {
    const wrapper = mount(FormSubmitter);

    expect(wrapper.find('.message').exists()).toBe(false);
  });
  it('renders the message upon submition', async () => {
    const wrapper = mount(FormSubmitter);
    const button = wrapper.find('button');

    await wrapper.find('[type="text"]').setValue('Arturo');
    await button.trigger('click');

    expect(wrapper.find('.message').text()).toBe('Thank you for your submission, Arturo.');
  });
});
