import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

type Props = {
  images: string[];
  alt: string;
};

const GRID_SIZE = 5;

export function VehicleGallery({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasMultiple = images.length > 1;

  const gridThumbs = images.slice(1, 1 + GRID_SIZE);
  const remaining = images.length - 1 - GRID_SIZE;

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  // Keyboard nav + scroll lock while the lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, prev, next]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 lg:items-start">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border bg-panel group">
          <img
            src={images[index]}
            alt={alt}
            width={1600}
            height={1000}
            className="w-full h-full object-cover cursor-zoom-in transition-opacity"
            onClick={() => setLightboxOpen(true)}
          />

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="Bild vergrössern"
            className="absolute top-3 right-3 size-9 rounded-full bg-background/70 backdrop-blur-sm ring-1 ring-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Expand className="size-4" />
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Vorheriges Bild"
                className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/70 backdrop-blur-sm ring-1 ring-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Nächstes Bild"
                className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/70 backdrop-blur-sm ring-1 ring-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronRight className="size-5" />
              </button>
              <span className="absolute bottom-3 right-3 text-xs font-medium bg-background/70 backdrop-blur-sm px-2.5 py-1 rounded-full ring-1 ring-border">
                {index + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {hasMultiple && (
          <>
            {/* Mobile: horizontal scroll strip */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-1">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`shrink-0 w-20 aspect-square overflow-hidden rounded-md ring-1 transition-all ${
                    i === index ? "ring-accent ring-2" : "ring-border hover:ring-accent/40"
                  }`}
                >
                  <img src={src} alt="" width={160} height={160} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            {/* Desktop: thumbnail grid to the right of the main image */}
            <div className="hidden lg:grid grid-cols-2 gap-2">
              {gridThumbs.map((src, i) => {
                const realIndex = i + 1;
                const isLastCell = i === gridThumbs.length - 1;
                return (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => (isLastCell && remaining > 0 ? setLightboxOpen(true) : setIndex(realIndex))}
                    className={`relative aspect-[4/3] overflow-hidden rounded-md ring-1 transition-all ${i === 0 ? "col-span-2" : ""} ${
                      realIndex === index ? "ring-accent ring-2" : "ring-border hover:ring-accent/40"
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    {isLastCell && remaining > 0 && (
                      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center text-sm font-medium">
                        +{remaining} Bilder
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Schliessen"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 size-10 rounded-full bg-panel ring-1 ring-border flex items-center justify-center hover:bg-panel/70"
          >
            <X className="size-5" />
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Vorheriges Bild"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 size-11 rounded-full bg-panel ring-1 ring-border flex items-center justify-center hover:bg-panel/70"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Nächstes Bild"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 size-11 rounded-full bg-panel ring-1 ring-border flex items-center justify-center hover:bg-panel/70"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          )}

          <img
            src={images[index]}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {hasMultiple && (
            <span className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-panel px-3 py-1.5 rounded-full ring-1 ring-border">
              {index + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
