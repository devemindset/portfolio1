// types/apiTypes.ts

export interface TestimonialType {
  id: number;
  image: string;
  name: string;
  field: string;
  text: string;
}

export interface ServiceType {
  id: number;
  service_name: string;
  description: string;
  slug : string;
  content: string;
}
export interface ServiceDetailType {
  id: number;
  service_name: string;
  image: string;
  slug : string;
  description : string;
  content: string;
}

export interface ProductType {
  id: number;
  image: string;
  product_name: string;
  description: string;
  slug : string;
  content: string;
}
export interface ProductDetailType {
  id: number;
  image: string;
  description : string;
  product_name: string;
  slug : string;
  content: string;
}

export interface ProjectType {
  id: number;
  image: string;
  project_name: string;
  description: string;
  content: string;
  external_link: string;
}

export interface AboutType {
  id: number;
  image: string;
  head : string
  description: string;
}

export interface BackgroundImageType {
  id: number;
  background_image: string;
}

export interface ContactType {
  id: number;
  address: string;
  phonenumber: string;
  email: string;
}

export interface SocialNetworkType {
  id: number;
  type: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'tiktok' | 'github' | 'youtube' | 'pinterest' | 'whatsapp' | 'discord' | 'snapchat' | 'reddit' | 'telegram' | 'other';
  url: string;
}

// blog 
export interface BlogCardInfo {
   date :string;
      category: string;
      title :string;
      link : string;
      author : string;
      cover :string;
}