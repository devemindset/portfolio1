// lib/api.ts

const API_BASE = process.env.NEXT_PUBLIC_API_URL; 

export async function fetchAbout() {
  const res = await fetch(`${API_BASE}/data_control/about/`);
  return res.json();
}

export async function fetchContact() {
  const res = await fetch(`${API_BASE}/data_control/contact/`);
  return res.json();
}

export async function fetchBackgroundImage() {
  const res = await fetch(`${API_BASE}/data_control/background-image/`);
  return res.json();
}

export async function fetchTestimonials() {
  const res = await fetch(`${API_BASE}/data_control/testimonials/`);
  return res.json();
}

export async function fetchServices() {
  const res = await fetch(`${API_BASE}/data_control/services/`);
  return res.json();
}

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/data_control/products/`);
  return res.json();
}
