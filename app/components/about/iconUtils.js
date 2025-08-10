import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiFlag, 
  HiLightBulb, 
  HiBookOpen 
} from 'react-icons/hi'

// Icon mapping utility for About page components
export const iconMapping = {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiFlag,
  HiLightBulb,
  HiBookOpen
}

// Utility function to get icon component by string name
export const getIconComponent = (iconName) => {
  return iconMapping[iconName] || null
}
