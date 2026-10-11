import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { AuditCard } from "@/components/AuditCard";
import { AUDITS_GROUP, FLAGSHIP_PRODUCTS, ONE_TIME_AUDITS, PRODUCTS_SECTION } from "@/data/site";

export function FlagshipProducts() {
  const products = FLAGSHIP_PRODUCTS.filter((product) => product.featured);
  if (products.length === 0 && ONE_TIME_AUDITS.length === 0) return null;

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

        {ONE_TIME_AUDITS.length > 0 && (
          <div id="audits" className="mt-20 scroll-mt-20 sm:scroll-mt-24">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                {AUDITS_GROUP.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {AUDITS_GROUP.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {AUDITS_GROUP.lede}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {ONE_TIME_AUDITS.map((audit, index) => (
                <Reveal key={audit.id} delay={index * 80}>
                  <AuditCard audit={audit} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
