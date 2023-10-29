export interface SeoSocialShareData {
  title?: string;
  author?: string;
  description?: string;
  image?: string;
  imageAuxData?: ImageAuxData;
  keywords?: string;
  section?: string;
  type?: string;
  url?: string;
  published?: string;
  modified?: string;
}

export interface ImageAuxData {
  width?: number;
  height?: number;
  secureUrl?: string;
  mimeType?: string;
  alt?: string;
}
