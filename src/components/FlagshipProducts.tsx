import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { FLAGSHIP_PRODUCTS, PRODUCTS_SECTION } from "@/data/site";

export function FlagshipProducts() {
  const products = FLAGSHIP_PRODUCTS.filter((product) => product.featured);
  if (products.length === 0) return null;

  return (
    <section id="products" className="scroll-mt-20 border-b border-border/60 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={PRODUCTS_SECTION.eyebrow}
          title={PRODUCTS_SECTION.title}
          lede={PRODUCTS_SECTION.lede}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal
              key={product.id}
              delay={index * 80}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <ProductCard product={product} wide={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
