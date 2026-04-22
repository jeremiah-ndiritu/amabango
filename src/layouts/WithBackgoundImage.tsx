import { type ComponentPropsWithoutRef } from "react";

interface WithBackgroundImageProps extends ComponentPropsWithoutRef<"main"> {
  image: string;
  // We redefine className to make it clear it styles the overlay
  className?: string;
}

const WithBackgroundImage = ({
  image,
  className = "bg-white/70",
  children,
  ...props
}: WithBackgroundImageProps) => {
  return (
    <main
      {...props}
      // Merging any layout classes passed via props.className into the wrapper
      className={`relative min-h-screen text-text font-sans px-4 py-10`}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay Layer - Styled via the 'className' prop */}
      <div className={`absolute inset-0 ${className}`} />

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default WithBackgroundImage;
