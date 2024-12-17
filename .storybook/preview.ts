import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const argTypes = { 
  theme: {
    control: 'select',
    options: ['light', 'dark', 'nextsix', 'iproforma']
  }
}

export const args = {
  theme: 'light'
}