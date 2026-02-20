import { type LucideIcon } from "lucide-react"

type ContactItemProps = {
  label: string 
  value: string 
  icon: LucideIcon
}

const ContactItem = (props: ContactItemProps) => {
  const { label, value, icon: Icon } = props
  
  return (
    <div className="flex items-center gap-3 justify-center sm:justify-start">
      <div className="p-2 bg-accent rounded-lg shrink-0">
        <Icon size={22} />
      </div>
      <div className="text-left">
        <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-sm sm:text-base break-all">{value}</p>
      </div>
    </div>
  )
}

export default ContactItem