const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; 2026 Michael Eze. Built with passion and caffeine.
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground font-mono">
            mseze.dev
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer