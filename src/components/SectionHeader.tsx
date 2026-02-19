type SectionHeaderProps = {
  title: string
  label: string 
  subtitle?: string
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, label, subtitle } = props
  
  return (
    <div className="text-center mb-16">
      {label && (
        <span className="inline-block font-mono text-sm text-accent mb-4">{label}</span>
      )}

      {title && (
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      )}

      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeader