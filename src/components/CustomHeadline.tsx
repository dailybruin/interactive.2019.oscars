import * as React from 'react'

/**
 * Headline properties.
 */
interface CustomHeadlineProps {
  /** The headline of the story. */
  text: string
  /** Custom css for the headline component */
  style?: string
}

/** The story's headline. */
export default function CustomHeadline(props: CustomHeadlineProps) {
  return (
    <h1
      className={props.style}
      dangerouslySetInnerHTML={{
        __html: props.text,
      }}
    />
  )
}
