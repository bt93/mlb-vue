export default interface Player {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: {
    code: string
    name: string
    type: string
    abbreviation: string
  }
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  mlbDebutDate: string
  batSide: {
    code: string
    description: string
  }
  pitchHand: {
    code: string
    description: string
  }
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}
