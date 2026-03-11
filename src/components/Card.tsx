import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  type HeadingProps,
  type LinkBoxProps,
  type SimpleGridProps,
} from '@chakra-ui/react'

type HeadingTag = Extract<HeadingProps['as'], 'h2' | 'h3' | 'h4'>

export interface GovUKCardProps extends Omit<LinkBoxProps, 'title'> {
  title: string
  href?: string
  description?: string
  meta?: string
  imageSrc?: string
  imageAlt?: string
  headingAs?: HeadingTag
  openInNewTab?: boolean
  linkCard?: boolean
}

export function GovUKCard({
  title,
  href,
  description,
  meta,
  imageSrc,
  imageAlt,
  headingAs = 'h3',
  openInNewTab = false,
  linkCard = true,
  ...props
}: GovUKCardProps) {
  const hasLink = Boolean(href)

  return (
    <LinkBox
      bg="bg"
      border="1px solid"
      borderColor="border"
      borderTopWidth="4px"
      borderTopColor="govuk.blue"
      p={5}
      minH="100%"
      display="flex"
      flexDirection="column"
      gap={3}
      {...props}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ''}
          width="100%"
          objectFit="cover"
          borderBottom="1px solid"
          borderColor="border"
          mb={1}
        />
      ) : null}

      <Heading as={headingAs} size="md" lineHeight="1.35">
        {hasLink && linkCard ? (
          <LinkOverlay
            href={href}
            target={openInNewTab ? '_blank' : undefined}
            rel={openInNewTab ? 'noopener noreferrer' : undefined}
            color="link"
            _hover={{ color: 'link.hover' }}
            _visited={{ color: 'link.visited' }}
          >
            {title}
          </LinkOverlay>
        ) : (
          title
        )}
      </Heading>

      {description ? <Text color="fg">{description}</Text> : null}

      {meta ? (
        <Text fontSize="sm" color="fg.muted" mt="auto">
          {meta}
        </Text>
      ) : null}
    </LinkBox>
  )
}

export interface GovUKCardGroupProps extends Omit<SimpleGridProps, 'children'> {
  cards: GovUKCardProps[]
}

export function GovUKCardGroup({
  cards,
  columns = { base: 1, md: 2 },
  gap = 4,
  ...props
}: GovUKCardGroupProps) {
  return (
    <SimpleGrid columns={columns} gap={gap} {...props}>
      {cards.map((card, index) => (
        <GovUKCard
          key={card.href ?? `${card.title}-${index}`}
          title={card.title}
          href={card.href}
          description={card.description}
          meta={card.meta}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          headingAs={card.headingAs}
          openInNewTab={card.openInNewTab}
          linkCard={card.linkCard}
        />
      ))}
    </SimpleGrid>
  )
}

export interface GovUKCardExampleTwoProps {
  title: string
  description: string
  meta: string
  href: string
}

export function GovUKCardExampleTwo(props: GovUKCardExampleTwoProps) {
  return (
    <Box maxW="420px">
      <GovUKCard
        title={props.title}
        description={props.description}
        meta={props.meta}
        href={props.href}
      />
    </Box>
  )
}
