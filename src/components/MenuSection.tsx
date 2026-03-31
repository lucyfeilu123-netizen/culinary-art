import { FadeUp } from "./FadeUp";
import { SectionTag } from "./SectionTag";
import { DishCard } from "./DishCard";

const dishes = [
  {
    name: "Seared Wagyu Tenderloin",
    desc: "Black truffle jus, heirloom root vegetables, bone marrow butter",
    img: "https://picsum.photos/seed/wagyu2026/800/500",
    span: "dish-large",
  },
  {
    name: "Lobster Bisque",
    desc: "Cognac cream, saffron oil, brioche crouton",
    img: "https://picsum.photos/seed/lobsterbisque26/500/900",
    span: "dish-tall",
  },
  {
    name: "Truffle Risotto",
    desc: "Carnaroli rice, aged parmesan, white truffle",
    img: "https://picsum.photos/seed/risotto2026/500/500",
    span: "",
  },
  {
    name: "Pan-Roasted Duck",
    desc: "Cherry reduction, fennel puree, crispy skin",
    img: "https://picsum.photos/seed/duckconfit/500/500",
    span: "",
  },
  {
    name: "Deconstructed Tiramisu",
    desc: "Mascarpone mousse, espresso caviar, cocoa soil",
    img: "https://picsum.photos/seed/tiramisu26/800/500",
    span: "dish-wide",
  },
  {
    name: "Herb-Crusted Lamb",
    desc: "Rosemary gremolata, pomme puree, minted jus",
    img: "https://picsum.photos/seed/herblamb26/500/500",
    span: "",
  },
];

const spanClasses: Record<string, string> = {
  "dish-large": "col-span-2 max-md:col-span-1",
  "dish-tall": "row-span-2 max-md:row-span-1",
  "dish-wide": "col-span-2 max-md:col-span-1",
};

export function MenuSection() {
  return (
    <section
      id="menu"
      className="py-40 max-md:py-24 max-sm:py-[72px]"
      style={{ background: "var(--cream-dark)" }}
    >
      <div className="max-w-[1280px] mx-auto px-16 max-lg:px-10 max-md:px-6 max-sm:px-5">
        <div className="text-center mb-16">
          <FadeUp>
            <div className="flex justify-center">
              <SectionTag>Signature Dishes</SectionTag>
            </div>
          </FadeUp>
          <FadeUp delay={90}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              }}
            >
              A Curated
              <br />
              <em className="italic" style={{ color: "var(--terracotta)" }}>
                Experience
              </em>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1" style={{ gridAutoRows: "340px" }}>
          {dishes.map((dish, i) => (
            <FadeUp
              key={dish.name}
              delay={i * 90}
              className={spanClasses[dish.span] || ""}
            >
              <DishCard {...dish} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
