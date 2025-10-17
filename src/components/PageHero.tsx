interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-background mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-background/90 text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
