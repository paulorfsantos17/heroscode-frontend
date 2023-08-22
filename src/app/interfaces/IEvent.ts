interface IPrice {
  amount: string
  sector: string
}

export interface Event {
  _id: string
  title: string
  date: Date
  description: string
  categories: string[]
  banner: string
  flyers: string[]
  city: string
  participants: string[]
  price: IPrice[]
  createdAt: string
  formattedAddress: string
  location: { latitude: string; longitude: string }
}
