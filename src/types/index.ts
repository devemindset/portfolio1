// types/apiTypes.ts

export interface Testimonial {
  id: number;
  image: string;
  name: string;
  field: string;
  text: string;
}

export interface Service {
  id: number;
  service_name: string;
  description: string;
  content: string;
}

export interface Product {
  id: number;
  image: string;
  product_name: string;
  description: string;
  content: string;
}

export interface Project {
  id: number;
  image: string;
  project_name: string;
  description: string;
  content: string;
  external_link: string;
}

export interface About {
  id: number;
  image: string;
  description: string;
}

export interface BackgroundImage {
  id: number;
  background_image: string;
}

export interface Contact {
  id: number;
  address: string;
  phonenumber: string;
  email: string;
}
