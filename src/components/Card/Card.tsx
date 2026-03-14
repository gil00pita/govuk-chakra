import {
  Card as ChakraCard,
  Image,
  LinkOverlay,
  SimpleGrid,
  type HeadingProps,
  type SimpleGridProps,
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'

type HeadingTag = Extract<HeadingProps['as'], 'h2' | 'h3' | 'h4'>

export interface CardHeaderProps extends ChakraCard.HeaderProps {
  headingType?: HeadingTag
  href?: string
  openInNewTab?: boolean
  linkCard?: boolean
}

export interface CardRootProps extends ChakraCard.RootProps {
  imageSrc?: string
  imageAlt?: string
  href?: string
  headingType?: HeadingTag
  openInNewTab?: boolean
  linkCard?: boolean
  /** Accessible label for the card, used when there is no visible header */
  'aria-label'?: string
  /** ID of the element that labels this card (typically the header) */
  'aria-labelledby'?: string
  /** ID of the element that describes this card (typically the body) */
  'aria-describedby'?: string
}

export interface CardProps extends Omit<CardRootProps, 'title'> {
  title: string
  href?: string
  description?: string
  meta?: string
  openInNewTab?: boolean
  linkCard?: boolean
}

export const Card = {
  Root: forwardRef<HTMLDivElement, CardRootProps>(function CardRoot(
    {
      imageSrc,
      imageAlt,
      openInNewTab = false,
      linkCard = true,
      href,
      headingType = 'h3' as HeadingTag,
      ...props
    },
    ref
  ) {
    const hasLink = Boolean(href)

    return (
      <ChakraCard.Root
        ref={ref}
        role="region"
        bg="bg"
        border="1px solid"
        borderColor="border"
        overflow="hidden"
        cursor={hasLink && linkCard ? 'pointer' : 'default'}
        asChild={hasLink && linkCard ? true : undefined}
        {...props}
      >
        {hasLink && linkCard ? (
          <LinkOverlay
            href={href}
            target={openInNewTab ? '_blank' : undefined}
            rel={openInNewTab ? 'noopener noreferrer' : undefined}
            aria-label={
              openInNewTab ? `${props['aria-label'] ?? ''} (opens in new tab)`.trim() : undefined
            }
            color="link"
            css={{
              '& .card-body': { color: 'fg' },
            }}
            _hover={{
              color: 'common.white',
              textDecoration: 'none',
              bg: 'primary',
              '& .card-body': { color: 'common.white' },
            }}
            _focus={{
              bg: 'primary.700',
              outline: '3px solid',
              outlineColor: 'yellow.500',
              outlineOffset: 0,
              color: 'black',
              '& .card-header': {
                outline: '3px solid',
                outlineColor: 'yellow.500',
                outlineOffset: 0,
                bgColor: 'yellow.500',
                color: 'black',
                textDecoration: 'underline',
                textDecorationThickness: 'max(3px, 0.1875rem)',
              },
              '& .card-body': { color: 'common.white' },
            }}
            _visited={{ color: 'link.visited' }}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? ''}
                width="100%"
                objectFit="cover"
                borderBottom="1px solid"
                borderColor="border"
              />
            ) : null}
            {props.children}
          </LinkOverlay>
        ) : (
          <>
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? ''}
                width="100%"
                objectFit="cover"
                borderBottom="1px solid"
                borderColor="border"
              />
            ) : null}
            {props.children}
          </>
        )}
      </ChakraCard.Root>
    )
  }),
  Header: forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
    { headingType = 'h2', ...props },
    ref
  ) {
    return (
      <ChakraCard.Header ref={ref} {...props}>
        <Heading
          as={headingType}
          size={24}
          lineHeight="1.35"
          className="card-header"
          alignItems={'flex-start'}
        >
          {props.children}
        </Heading>
      </ChakraCard.Header>
    )
  }),
  Body: forwardRef<HTMLDivElement, ChakraCard.BodyProps>(function CardBody(props, ref) {
    return (
      <ChakraCard.Body ref={ref} {...props}>
        <Text className="card-body" fontSize={'md'}>
          {props.children}
        </Text>
      </ChakraCard.Body>
    )
  }),
  Footer: forwardRef<HTMLDivElement, ChakraCard.FooterProps>(function CardFooter(props, ref) {
    return <ChakraCard.Footer ref={ref} role="contentinfo" {...props} />
  }),
}

export const CardRoot = Card.Root
export const CardHeader = Card.Header
export const CardBody = Card.Body
export const CardFooter = Card.Footer

export interface CardGroupProps extends Omit<SimpleGridProps, 'children'> {
  cards: CardProps[]
}

export function CardGroup({
  cards,
  columns = { base: 1, md: 2 },
  gap = 4,
  ...props
}: CardGroupProps) {
  return (
    <SimpleGrid columns={columns} gap={gap} {...props}>
      {cards.map((card, index) => (
        <Card.Root key={card.href ?? `${card.title}-${index}`}>
          <Card.Header href={card.href} openInNewTab={card.openInNewTab} linkCard={card.linkCard}>
            {card.title}
          </Card.Header>
          <Card.Body>{card.description}</Card.Body>
          <Card.Footer>{card.meta}</Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  )
}
