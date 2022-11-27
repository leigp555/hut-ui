import { mount } from '@vue/test-utils'
import Test from '@/views/Test.vue'

test('Test.vue', async () => {
  const wrapper = mount(Test)
  expect(wrapper.html()).toContain('Test')
})
