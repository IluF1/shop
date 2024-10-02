import type { Meta, StoryObj } from "@storybook/react";

import { NavItem } from "@/components/Ui/NavItem";

const meta = {
    title: "Example/NavItem",
    component: NavItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'nav',
        href: "/story/example-navitem--default"
    },
};
