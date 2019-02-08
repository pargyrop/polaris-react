import {shallow, mount} from 'enzyme';
import {createPolarisContext, polarisContextTypes} from '@shopify/polaris';

function mergeAppProviderOptions(options) {
  const context = createPolarisContext();

  return {
    ...{
      context,
      childContextTypes: polarisContextTypes,
    },
    ...options,
  };
}

export function mountWithAppProvider(node, options) {
  return mount(node, mergeAppProviderOptions(options));
}

export function shallowWithAppProvider(node, options) {
  return shallow(node, mergeAppProviderOptions(options)).dive(options);
}
