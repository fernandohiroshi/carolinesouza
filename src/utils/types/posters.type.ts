type ImageProps = {
  url: string
  imgix_url: string
}

type PosterItem = {
  images: ImageProps
}

type PosterMetadata = {
  poster: PosterItem[]
}

export type PosterProps = {
  object: {
    title: string
    metadata: PosterMetadata
  }
}
