type ImageProps = {
  url: string
  imgix_url: string
}

type SocialBox = {
  imagem_1: ImageProps
  imagem_2: ImageProps
  imagem_3: ImageProps
}

type SocialMetadata = {
  social_box_1: SocialBox
  social_box_2: SocialBox
  social_box_3: SocialBox
  social_box_4: SocialBox
}

export type SocialProps = {
  object: {
    title: string
    metadata: SocialMetadata
  }
}
