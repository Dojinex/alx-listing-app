export const API_ENDPOINTS = {
  PROPERTIES: '/api/properties',
  BOOKINGS: '/api/bookings',
  REVIEWS: '/api/reviews',
  USERS: '/api/users',
} as const

export const APP_CONFIG = {
  SITE_NAME: 'ALX Listing App',
  SITE_DESCRIPTION: 'An Airbnb clone for property listings',
  DEFAULT_LOCATION: 'San Francisco, CA',
  CURRENCY: 'USD',
  MAX_GUESTS: 16,
  MAX_PRICE: 10000,
  MIN_PRICE: 20,
} as const

export const UI_TEXT = {
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    SAVE: 'Save',
    CANCEL: 'Cancel',
    SEARCH: 'Search',
    CLEAR_FILTERS: 'Clear Filters',
  },
  LABELS: {
    LOCATION: 'Location',
    CHECK_IN: 'Check-in',
    CHECK_OUT: 'Check-out',
    GUESTS: 'Guests',
    PRICE_RANGE: 'Price Range',
    AMENITIES: 'Amenities',
  },
  PLACEHOLDERS: {
    SEARCH_LOCATION: 'Where are you going?',
    ADD_DATES: 'Add dates',
    ADD_GUESTS: 'Add guests',
  },
  MESSAGES: {
    NO_RESULTS: 'No properties found matching your criteria.',
    LOADING: 'Loading properties...',
    ERROR: 'An error occurred while loading properties.',
  },
} as const

export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Washer',
  'Dryer',
  'Air Conditioning',
  'Heating',
  'TV',
  'Pool',
  'Hot Tub',
  'Free Parking',
  'Breakfast',
  'Gym',
  'Elevator',
  'Fireplace',
  'Beach Access',
] as const

export const SAMPLE_PROPERTIES = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    description: 'A beautiful modern apartment located in the heart of downtown with amazing city views.',
    price: 129,
    location: 'San Francisco, CA',
    rating: 4.8,
    imageUrls: [],
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning'],
    host: {
      name: 'John Doe',
      isSuperhost: true,
    },
    maxGuests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
  },
  {
    id: '2',
    title: 'Cozy Beach House',
    description: 'Enjoy stunning ocean views from this cozy beach house just steps from the sand.',
    price: 245,
    location: 'Malibu, CA',
    rating: 4.9,
    imageUrls: [],
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Beach Access'],
    host: {
      name: 'Jane Smith',
      isSuperhost: true,
    },
    maxGuests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
  },
]