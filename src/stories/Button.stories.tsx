import { fn } from '@storybook/test';
import { Button } from '../components/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Inputs/Button',
  component: Button,

  // 產生說明總覽文件
  tags: ['autodocs'],

  parameters: {
    layout: 'centered', // 讓元件在畫面中置中
  },

  // Story 物件的預設值
  args: {
    children: '按鈕',
    onClick: fn(), // 觸發 Storybook 控制面板的 Action
  },

  // 定義哪些 props 可以在 Storybook 控制面板中調整
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    themeColor: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'contained',
    themeColor: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    startIcon: '📧',
    variant: 'contained',
    themeColor: 'primary',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    variant: 'contained',
    themeColor: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
};
