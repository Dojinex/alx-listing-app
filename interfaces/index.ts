export interface CardProps {
  title: string
  description: string
  imageUrl?: string
  price: number
  location: string
  rating: number
  amenities?: string[]
  onBookNow?: () => void
  onViewDetails?: () => void
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  onClick?: () => void
}

export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  rating: number
  imageUrls: string[]
  amenities: string[]
  host: {
    name: string
    avatarUrl?: string
    isSuperhost: boolean
  }
  maxGuests: number
  bedrooms: number
  beds: number
  bathrooms: number
}

export interface FilterOptions {
  location?: string
  priceRange?: [number, number]
  checkIn?: Date
  checkOut?: Date
  guests?: number
  amenities?: string[]
}