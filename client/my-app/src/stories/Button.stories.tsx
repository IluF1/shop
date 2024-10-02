import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@/components/Ui/Button";

const meta = {
    title: "Example/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        children: "button",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "button",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "button",
    },
};
