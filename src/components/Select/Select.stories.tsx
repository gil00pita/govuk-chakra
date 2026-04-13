import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Dialog,
  HStack,
  IconButton as ChakraIconButton,
  Portal,
  Popover,
  Select as ChakraSelect,
  Spinner,
  Stack,
  createListCollection,
  useSelectContext,
} from '@chakra-ui/react'
import type { ComponentProps, ComponentType, ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  RiForbidLine,
  RiMapPinLine,
  RiReactjsLine,
  RiSvelteLine,
  RiVuejsLine,
} from 'react-icons/ri'

import { Select, type SelectItemData } from './Select'

type SelectStoryArgs = {
  disabled?: boolean
  invalid?: boolean
  width?: 'full' | '30' | '20' | '10' | '5' | '4' | '3' | '2'
}

const meta: Meta<SelectStoryArgs> = {
  title: 'GOV.UK/Components/Select',
  component: Select.Root as unknown as ComponentType<SelectStoryArgs>,
  parameters: {
    layout: 'centered',
  },
  args: {
    width: '30',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sortOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'Last updated', value: 'updated' },
    { label: 'Name', value: 'name' },
    { label: 'Status', value: 'status' },
  ],
})

const nationalityOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'British', value: 'british' },
    { label: 'Irish', value: 'irish' },
    { label: 'French', value: 'french' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Other', value: 'other' },
  ],
})

const countryOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'United Kingdom', value: 'united-kingdom' },
    { label: 'France', value: 'france' },
    { label: 'Germany', value: 'germany' },
    { label: 'Spain', value: 'spain' },
    { label: 'Italy', value: 'italy' },
    { label: 'United States', value: 'united-states' },
    { label: 'Canada', value: 'canada' },
  ],
})

const frameworkOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
})

const optionGroupAnimeItems: SelectItemData[] = [
  { label: 'Naruto', value: 'naruto' },
  { label: 'One Piece', value: 'one-piece' },
  { label: 'Dragon Ball', value: 'dragon-ball' },
]

const optionGroupMovieItems: SelectItemData[] = [
  { label: 'The Shawshank Redemption', value: 'shawshank' },
  { label: 'The Godfather', value: 'godfather' },
  { label: 'The Dark Knight', value: 'dark-knight' },
]

const optionGroupCollection = createListCollection<SelectItemData>({
  items: [...optionGroupAnimeItems, ...optionGroupMovieItems],
})

const planOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'Basic Plan', value: 'basic' },
    { label: 'Pro Plan', value: 'pro' },
    { label: 'Business Plan', value: 'business' },
    { label: 'Enterprise Plan', value: 'enterprise' },
  ],
})

const planDescriptions: Record<string, string> = {
  basic: '9 per month',
  pro: '29 per month',
  business: '99 per month',
  enterprise: 'Custom pricing',
}

const assigneeOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'Ada Lovelace', value: 'ada' },
    { label: 'Grace Hopper', value: 'grace' },
    { label: 'Margaret Hamilton', value: 'margaret' },
  ],
})

const assigneeInitials: Record<string, string> = {
  ada: 'AL',
  grace: 'GH',
  margaret: 'MH',
}

const iconFrameworkOptions = createListCollection<SelectItemData>({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
  ],
})

const iconFrameworkIcons: Record<string, ReactNode> = {
  react: <RiReactjsLine />,
  vue: <RiVuejsLine />,
  svelte: <RiSvelteLine />,
}

function renderItems(collection: { items: SelectItemData[] }) {
  return collection.items.map((item) => <Select.Item key={item.value} item={item} />)
}

function LocalSelectExample(
  props: Partial<ComponentProps<typeof Select.Root>> & {
    collection: { items: SelectItemData[] }
    label: string
    placeholder?: string
    children?: ReactNode
    portal?: boolean
  }
) {
  const {
    collection,
    label,
    placeholder = 'Select an option',
    children,
    portal = true,
    ...rest
  } = props

  const content = (
    <Select.Positioner>
      <Select.Content>{children ?? renderItems(collection)}</Select.Content>
    </Select.Positioner>
  )

  return (
    <Select.Root
      collection={collection as ComponentProps<typeof Select.Root>['collection']}
      {...rest}
    >
      <Select.Label>{label}</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
      </Select.Control>
      {portal ? <Portal>{content}</Portal> : content}
    </Select.Root>
  )
}

function chakraSelectItems(collection: { items: SelectItemData[] }) {
  return collection.items.map((item) => (
    <ChakraSelect.Item key={item.value} item={item}>
      {item.label}
      <ChakraSelect.ItemIndicator />
    </ChakraSelect.Item>
  ))
}

export const Default: Story = {
  render: (args) => (
    <LocalSelectExample
      collection={sortOptions}
      defaultValue={['updated']}
      label="Sort by"
      {...args}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `const sortOptions = createListCollection({
  items: [
    { label: 'Last updated', value: 'updated' },
    { label: 'Name', value: 'name' },
    { label: 'Status', value: 'status' },
  ],
})

<Select.Root collection={sortOptions} defaultValue={['updated']}>
  <Select.Label>Sort by</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select an option" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {sortOptions.items.map((item) => (
          <Select.Item key={item.value} item={item} />
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const WithLabel: Story = {
  render: (args) => (
    <Select.Root collection={nationalityOptions} {...args}>
      <Select.Label>Nationality</Select.Label>
      <Select.Hint>
        If you have dual nationality, select the nationality shown on your passport.
      </Select.Hint>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select nationality" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>{renderItems(nationalityOptions)}</Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
}

export const Countries: Story = {
  render: (args) => (
    <LocalSelectExample
      collection={countryOptions}
      defaultValue={['united-kingdom']}
      label="Country"
      placeholder="Select country"
      {...args}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={countryOptions} defaultValue={['united-kingdom']}>
  <Select.Label>Country</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select country" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {countryOptions.items.map((item) => (
          <Select.Item key={item.value} item={item} />
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const Error: Story = {
  render: (args) => (
    <Select.Root collection={countryOptions} invalid {...args}>
      <Select.Label>Country</Select.Label>
      <Select.Error>Select the country you live in</Select.Error>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a country" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>{renderItems(countryOptions)}</Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={countryOptions} invalid>
  <Select.Label>Country</Select.Label>
  <Select.Error>Select the country you live in</Select.Error>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select a country" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {countryOptions.items.map((item) => (
          <Select.Item key={item.value} item={item} />
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <LocalSelectExample
      collection={countryOptions}
      defaultValue={['united-kingdom']}
      label="Country"
      disabled
      {...args}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={countryOptions} defaultValue={['united-kingdom']} disabled>
  <Select.Label>Country</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {countryOptions.items.map((item) => (
          <Select.Item key={item.value} item={item} />
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const Native: Story = {
  render: (args) => (
    <Select.Root collection={countryOptions} defaultValue={['united-kingdom']} native {...args}>
      <Select.Label>Country</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a country" />
        </Select.Trigger>
      </Select.Control>
    </Select.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={countryOptions} defaultValue={['united-kingdom']} native>
  <Select.Label>Country</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select a country" />
    </Select.Trigger>
  </Select.Control>
</Select.Root>`,
      },
    },
  },
}

export const OptionGroup: Story = {
  render: () => (
    <Select.Root collection={optionGroupCollection}>
      <Select.Label>Choose a title</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select an option" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Anime</Select.ItemGroupLabel>
              {optionGroupAnimeItems.map((item) => (
                <Select.Item key={item.value} item={item} />
              ))}
            </Select.ItemGroup>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Movies</Select.ItemGroupLabel>
              {optionGroupMovieItems.map((item) => (
                <Select.Item key={item.value} item={item} />
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={optionGroupCollection}>
  <Select.Label>Choose a title</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select an option" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        <Select.ItemGroup>
          <Select.ItemGroupLabel>Anime</Select.ItemGroupLabel>
          {optionGroupAnimeItems.map((item) => (
            <Select.Item key={item.value} item={item} />
          ))}
        </Select.ItemGroup>
        <Select.ItemGroup>
          <Select.ItemGroupLabel>Movies</Select.ItemGroupLabel>
          {optionGroupMovieItems.map((item) => (
            <Select.Item key={item.value} item={item} />
          ))}
        </Select.ItemGroup>
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])

    return (
      <LocalSelectExample
        collection={frameworkOptions}
        label="Framework"
        placeholder="Select framework"
        value={value}
        onValueChange={(details) => setValue(details.value)}
      />
    )
  },
  parameters: {
    docs: {
      source: {
        code: `function ControlledSelect() {
  const [value, setValue] = useState<string[]>([])

  return (
    <Select.Root
      collection={frameworkOptions}
      value={value}
      onValueChange={(details) => setValue(details.value)}
    >
      <Select.Label>Framework</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworkOptions.items.map((item) => (
              <Select.Item key={item.value} item={item} />
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}`,
      },
    },
  },
}

export const AsyncLoading: Story = {
  render: () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState<SelectItemData[]>([])

    useEffect(() => {
      const timeout = window.setTimeout(() => {
        setItems(countryOptions.items)
        setLoading(false)
      }, 800)

      return () => window.clearTimeout(timeout)
    }, [])

    const collection = useMemo(() => createListCollection<SelectItemData>({ items }), [items])

    return (
      <Stack gap={3} width="20em">
        <Select.Root collection={collection}>
          <Select.Label>Country</Select.Label>
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger disabled={loading}>
              <Select.ValueText placeholder={loading ? 'Loading options...' : 'Select country'} />
            </Select.Trigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {collection.items.map((item) => (
                  <Select.Item key={item.value} item={item} />
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        {loading ? (
          <HStack color="fg.muted">
            <Spinner size="xs" />
            <Box as="span">Loading items</Box>
          </HStack>
        ) : null}
      </Stack>
    )
  },
  parameters: {
    visual: {
      disable: true,
    },
    docs: {
      source: {
        code: `function AsyncSelect() {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState<SelectItemData[]>([])

  useEffect(() => {
    async function loadOptions() {
      const response = await fetch('/api/countries')
      const data = await response.json()
      setItems(data)
      setLoading(false)
    }

    loadOptions()
  }, [])

  const collection = useMemo(() => createListCollection({ items }), [items])

  return (
    <Select.Root collection={collection}>
      <Select.Label>Country</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select country" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item key={item.value} item={item} />
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}`,
      },
    },
  },
}

export const HookForm: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])

    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <Stack gap={4} align="stretch" width="20em">
          <LocalSelectExample
            collection={frameworkOptions}
            label="Framework"
            placeholder="Select framework"
            value={value}
            onValueChange={(details) => setValue(details.value)}
          />
          <Button type="submit" alignSelf="start">
            Submit
          </Button>
        </Stack>
      </form>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `import { Controller, useForm } from 'react-hook-form'

function SelectWithHookForm() {
  const { control, handleSubmit } = useForm<{ framework: string[] }>({
    defaultValues: { framework: [] },
  })

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Controller
        control={control}
        name="framework"
        render={({ field }) => (
          <Select.Root
            name={field.name}
            collection={frameworkOptions}
            value={field.value}
            onValueChange={({ value }) => field.onChange(value)}
          >
            <Select.Label>Framework</Select.Label>
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {frameworkOptions.items.map((item) => (
                    <Select.Item key={item.value} item={item} />
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        )}
      />
    </form>
  )
}`,
      },
    },
  },
}

export const Multiple: Story = {
  render: () => (
    <LocalSelectExample
      collection={frameworkOptions}
      label="Frameworks"
      placeholder="Select frameworks"
      multiple
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={frameworkOptions} multiple>
  <Select.Label>Frameworks</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select frameworks" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {frameworkOptions.items.map((item) => (
          <Select.Item key={item.value} item={item} />
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const Positioning: Story = {
  render: () => (
    <LocalSelectExample
      collection={frameworkOptions}
      label="Framework"
      placeholder="Select framework"
      positioning={{ placement: 'top', flip: false }}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root
  collection={frameworkOptions}
  positioning={{ placement: 'top', flip: false }}
>
  <Select.Label>Framework</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select framework" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {frameworkOptions.items.map((item) => (
          <Select.Item key={item.value} item={item} />
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const ClearTrigger: Story = {
  render: () => (
    <ChakraSelect.Root
      collection={frameworkOptions}
      defaultValue={['react']}
      positioning={{ sameWidth: true }}
    >
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Label>Framework</ChakraSelect.Label>
      <ChakraSelect.Control>
        <ChakraSelect.Trigger>
          <ChakraSelect.ValueText placeholder="Select framework" />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.ClearTrigger asChild>
            <CloseButton size="xs" variant="plain" />
          </ChakraSelect.ClearTrigger>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content>{chakraSelectItems(frameworkOptions)}</ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </ChakraSelect.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ChakraSelect.Root collection={frameworkOptions} defaultValue={['react']}>
  <ChakraSelect.HiddenSelect />
  <ChakraSelect.Label>Framework</ChakraSelect.Label>
  <ChakraSelect.Control>
    <ChakraSelect.Trigger>
      <ChakraSelect.ValueText placeholder="Select framework" />
    </ChakraSelect.Trigger>
    <ChakraSelect.IndicatorGroup>
      <ChakraSelect.ClearTrigger asChild>
        <CloseButton size="xs" variant="plain" />
      </ChakraSelect.ClearTrigger>
      <ChakraSelect.Indicator />
    </ChakraSelect.IndicatorGroup>
  </ChakraSelect.Control>
  <Portal>
    <ChakraSelect.Positioner>
      <ChakraSelect.Content>{chakraSelectItems(frameworkOptions)}</ChakraSelect.Content>
    </ChakraSelect.Positioner>
  </Portal>
</ChakraSelect.Root>`,
      },
    },
  },
}

export const Overflow: Story = {
  render: () => (
    <LocalSelectExample
      collection={createListCollection<SelectItemData>({
        items: [
          { label: 'The Girl Who Leapt Through Time', value: 'girl-who-leapt' },
          { label: "Howl's Moving Castle", value: 'howls-castle' },
          { label: 'Grave of the Fireflies', value: 'grave-fireflies' },
        ],
      })}
      label="Film"
      placeholder="Select film"
      width="10"
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={movieOptions} width="10">
  <Select.Label>Film</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select film" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {movieOptions.items.map((item) => (
          <Select.Item key={item.value} item={item} />
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const ItemDescription: Story = {
  render: () => (
    <Select.Root collection={planOptions} defaultValue={['pro']}>
      <Select.Label>Plan</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select plan" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {planOptions.items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <Box>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Box color="fg.muted" fontSize="14px">
                    {planDescriptions[item.value]}
                  </Box>
                </Box>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={planOptions} defaultValue={['pro']}>
  <Select.Label>Plan</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select plan" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {planOptions.items.map((item) => (
          <Select.Item key={item.value} item={item}>
            <Box>
              <Select.ItemText>{item.label}</Select.ItemText>
              <Box color="fg.muted" fontSize="14px">
                {planDescriptions[item.value]}
              </Box>
            </Box>
            <Select.ItemIndicator />
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const OpenFromPopover: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Select in popover</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Body>
              <LocalSelectExample
                collection={frameworkOptions}
                label="Framework"
                placeholder="Select framework"
                portal={false}
              />
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Popover.Root>
  <Popover.Trigger asChild>
    <Button variant="outline">Select in popover</Button>
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Body>
          <Select.Root collection={frameworkOptions}>
            <Select.Label>Framework</Select.Label>
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {frameworkOptions.items.map((item) => (
                  <Select.Item key={item.value} item={item} />
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>`,
      },
    },
  },
}

export const OpenFromDialog: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open dialog</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body>
              <LocalSelectExample
                collection={frameworkOptions}
                label="Framework"
                placeholder="Select framework"
                portal={false}
              />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button variant="outline">Open dialog</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Body>
          <Select.Root collection={frameworkOptions}>
            <Select.Label>Framework</Select.Label>
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {frameworkOptions.items.map((item) => (
                  <Select.Item key={item.value} item={item} />
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>`,
      },
    },
  },
}

export const AvatarSelect: Story = {
  render: () => (
    <Select.Root collection={assigneeOptions}>
      <Select.Label>Assignee</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select assignee" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {assigneeOptions.items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <HStack>
                  <Avatar.Root size="2xs">
                    <Avatar.Fallback>{assigneeInitials[item.value]}</Avatar.Fallback>
                  </Avatar.Root>
                  <Select.ItemText>{item.label}</Select.ItemText>
                </HStack>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={assigneeOptions}>
  <Select.Label>Assignee</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select assignee" />
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {assigneeOptions.items.map((item) => (
          <Select.Item key={item.value} item={item}>
            <HStack>
              <Avatar.Root size="2xs">
                <Avatar.Fallback>{assigneeInitials[item.value]}</Avatar.Fallback>
              </Avatar.Root>
              <Select.ItemText>{item.label}</Select.ItemText>
            </HStack>
            <Select.ItemIndicator />
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

export const CountrySelect: Story = {
  render: () => (
    <Select.Root collection={countryOptions} defaultValue={['united-kingdom']}>
      <Select.Label>Country</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <HStack gap={2}>
            <RiMapPinLine />
            <Select.ValueText />
          </HStack>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>{renderItems(countryOptions)}</Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Select.Root collection={countryOptions} defaultValue={['united-kingdom']}>
  <Select.Label>Country</Select.Label>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      <HStack gap={2}>
        <RiMapPinLine />
        <Select.ValueText />
      </HStack>
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {countryOptions.items.map((item) => (
          <Select.Item key={item.value} item={item} />
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>`,
      },
    },
  },
}

function ChakraIconButtonTrigger() {
  const select = useSelectContext()
  const selected = select.selectedItems[0] as SelectItemData | undefined

  return (
    <ChakraIconButton
      variant="outline"
      size="sm"
      aria-label="Select framework"
      {...select.getTriggerProps()}
    >
      {selected ? iconFrameworkIcons[selected.value] : <RiForbidLine />}
    </ChakraIconButton>
  )
}

export const IconButton: Story = {
  render: () => (
    <ChakraSelect.Root
      collection={iconFrameworkOptions}
      defaultValue={['react']}
      positioning={{ sameWidth: false }}
    >
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control>
        <ChakraIconButtonTrigger />
      </ChakraSelect.Control>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content minW="32">
            {iconFrameworkOptions.items.map((item) => (
              <ChakraSelect.Item key={item.value} item={item}>
                <HStack>
                  {iconFrameworkIcons[item.value]}
                  <Box as="span">{item.label}</Box>
                </HStack>
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </ChakraSelect.Root>
  ),
  parameters: {
    docs: {
      source: {
        code: `function ChakraIconButtonTrigger() {
  const select = useSelectContext()
  const selected = select.selectedItems[0]

  return (
    <ChakraIconButton variant="outline" size="sm" aria-label="Select framework" {...select.getTriggerProps()}>
      {selected ? iconFrameworkIcons[selected.value] : <RiForbidLine />}
    </ChakraIconButton>
  )
}

<ChakraSelect.Root
  collection={iconFrameworkOptions}
  defaultValue={['react']}
  positioning={{ sameWidth: false }}
>
  <ChakraSelect.HiddenSelect />
  <ChakraSelect.Control>
    <ChakraIconButtonTrigger />
  </ChakraSelect.Control>
  <Portal>
    <ChakraSelect.Positioner>
      <ChakraSelect.Content minW="32">
        {iconFrameworkOptions.items.map((item) => (
          <ChakraSelect.Item key={item.value} item={item}>
            <HStack>
              {iconFrameworkIcons[item.value]}
              <Box as="span">{item.label}</Box>
            </HStack>
            <ChakraSelect.ItemIndicator />
          </ChakraSelect.Item>
        ))}
      </ChakraSelect.Content>
    </ChakraSelect.Positioner>
  </Portal>
</ChakraSelect.Root>`,
      },
    },
  },
}
