import { Field, Textarea } from "@chakra-ui/react"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Textarea> = {
	title: "GOV.UK/Textarea",
	component: Textarea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		disabled: {
			control: "boolean",
		},
		resize: {
			control: "select",
			options: ["none", "both", "horizontal", "vertical"],
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		placeholder: "Enter your message here...",
	},
}

export const WithLabel: Story = {
	render: () => (
		<Field.Root>
			<Field.Label>Can you provide more detail?</Field.Label>
			<Textarea placeholder='Enter as much or as little inFieldation as you like' rows={5} />
			<Field.HelperText>
				Do not include personal or financial inFieldation like your National Insurance number or
				credit card details.
			</Field.HelperText>
		</Field.Root>
	),
}

export const Error: Story = {
	render: () => (
		<Field.Root invalid>
			<Field.Label>Describe the problem</Field.Label>
			<Textarea placeholder='Describe what went wrong' rows={4} />
			<Field.ErrorText>Enter a description of the problem</Field.ErrorText>
		</Field.Root>
	),
}

export const CharacterCount: Story = {
	render: () => (
		<Field.Root>
			<Field.Label>Job title</Field.Label>
			<Textarea placeholder='Enter your job title' rows={3} />
			<Field.HelperText>
				You have 100 characters remaining
			</Field.HelperText>
		</Field.Root>
	),
}

export const Disabled: Story = {
	args: {
		disabled: true,
		value: "This textarea is disabled and cannot be edited",
		rows: 3,
	},
}
