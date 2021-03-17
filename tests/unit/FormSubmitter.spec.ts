import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import FormSubmitter from '@/components/FormSubmitter.vue';

let url = '';
let data = '';

const mockHttp = {
  get: (_url: string, _data: string) =>
    // eslint-disable-next-line arrow-parens
    new Promise<void>(resolve => {
      url = _url;
      data = _data;
      resolve();
    }),
};

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
  it('reveals a notification when submitted', async () => {
    const wrapper = mount(FormSubmitter, {
      data() {
        return {
          asyncTest: true,
        };
      },
      mocks: {
        axios: mockHttp,
      },
    });

    await wrapper.find('[type="text"]').setValue('Arturo');
    await wrapper.find('form').trigger('submit');

    await flushPromises();

    expect(wrapper.find('.message').text()).toBe('Thank you for your submission, Arturo.');
  });
});
