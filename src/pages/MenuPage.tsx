import { Star, Leaf, Flame, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menuHero from "@/assets/menu-hero.jpg";
import bruschetta from "@/assets/menu/bruschetta.jpg";
import calamari from "@/assets/menu/calamari.jpg";
import squashSoup from "@/assets/menu/squash-soup.jpg";
import salmon from "@/assets/menu/salmon.jpg";
import shortRibs from "@/assets/menu/short-ribs.jpg";
import risotto from "@/assets/menu/risotto.jpg";
import ribeye from "@/assets/menu/ribeye.jpg";
import lavaCake from "@/assets/menu/lava-cake.jpg";

const MenuPage = () => {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        {
          name: "Heirloom Tomato Bruschetta",
          description:
            "Toasted artisan bread topped with fresh heirloom tomatoes, basil, and aged balsamic glaze",
          price: "$12",
          image: bruschetta,
          dietary: ["vegetarian"],
          special: false,
        },
        {
          name: "Crispy Calamari",
          description:
            "Lightly fried squid rings served with spicy marinara and house-made lemon aioli",
          price: "$16",
          image: calamari,
          dietary: ["spicy"],
          special: true,
        },
        {
          name: "Butternut Squash Soup",
          description:
            "Roasted butternut squash, sage, cream, topped with toasted pumpkin seeds",
          price: "$10",
          image: squashSoup,
          dietary: ["vegetarian", "gluten-free"],
          special: false,
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Herb-Crusted Salmon",
          description:
            "Wild-caught Atlantic salmon with fresh herb crust, lemon butter sauce, seasonal roasted vegetables",
          price: "$32",
          image: salmon,
          dietary: ["gluten-free"],
          special: true,
        },
        {
          name: "Braised Short Ribs",
          description:
            "Slow-cooked beef short ribs in red wine reduction, served with creamy garlic mashed potatoes",
          price: "$38",
          image: shortRibs,
          dietary: [],
          special: false,
        },
        {
          name: "Wild Mushroom Risotto",
          description:
            "Creamy Arborio rice with seasonal wild mushrooms, truffle oil, and aged parmesan",
          price: "$26",
          image: risotto,
          dietary: ["vegetarian", "gluten-free"],
          special: false,
        },
        {
          name: "Grilled Ribeye Steak",
          description:
            "14oz grass-fed ribeye with herb compound butter, roasted fingerling potatoes",
          price: "$42",
          image: ribeye,
          dietary: ["gluten-free"],
          special: true,
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Chocolate Lava Cake",
          description:
            "Warm molten chocolate cake with vanilla bean ice cream and fresh seasonal berries",
          price: "$12",
          image: lavaCake,
          dietary: ["vegetarian"],
          special: true,
        },
        {
          name: "Crème Brûlée",
          description:
            "Classic vanilla bean custard with caramelized sugar crust, served with shortbread cookies",
          price: "$10",
          image: lavaCake,
          dietary: ["vegetarian"],
          special: false,
        },
        {
          name: "Tiramisu",
          description:
            "Espresso-soaked ladyfingers layered with mascarpone cream, dusted with cocoa",
          price: "$11",
          image: lavaCake,
          dietary: ["vegetarian"],
          special: false,
        },
      ],
    },
    {
      name: "Beverages",
      items: [
        {
          name: "House Red Wine",
          description:
            "Cabernet Sauvignon, full-bodied with notes of dark berries and oak",
          price: "$12",
          image: menuHero,
          dietary: [],
          special: false,
        },
        {
          name: "Craft Beer Selection",
          description:
            "Rotating selection of local IPA and seasonal craft beers",
          price: "$8",
          image: menuHero,
          dietary: [],
          special: false,
        },
        {
          name: "Specialty Coffee",
          description:
            "Espresso, cappuccino, or latte made with house-roasted beans",
          price: "$5",
          image: menuHero,
          dietary: [],
          special: false,
        },
        {
          name: "Fresh-Pressed Juices",
          description:
            "Orange, grapefruit, or seasonal fruit blend pressed daily",
          price: "$6",
          image: menuHero,
          dietary: ["vegetarian", "gluten-free"],
          special: false,
        },
      ],
    },
  ];

  const getDietaryIcon = (type: string) => {
    switch (type) {
      case "vegetarian":
        return <Leaf className="w-4 h-4 text-green-600" />;
      case "spicy":
        return <Flame className="w-4 h-4 text-red-600" />;
      case "gluten-free":
        return <span className="text-xs font-semibold text-blue-600">GF</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHero
        title="Our Menu"
        subtitle="Savor dishes crafted from the finest locally-sourced ingredients"
        backgroundImage={menuHero}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="/menu.pdf" download>
                <Download className="w-5 h-5" />
                Download PDF Menu
              </a>
            </Button>
          </div>

          <Tabs defaultValue="Starters" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-12 h-auto">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="text-sm md:text-base py-3"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden animate-fade-in"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg flex items-center gap-2 flex-wrap">
                            {item.name}
                            {item.special && (
                              <Badge variant="secondary" className="gap-1">
                                <Star className="w-3 h-3 fill-current" />
                                Chef's Special
                              </Badge>
                            )}
                          </h3>
                          <span className="text-primary font-bold text-lg ml-2">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {item.description}
                        </p>
                        {item.dietary.length > 0 && (
                          <div className="flex gap-2 flex-wrap">
                            {item.dietary.map((diet, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-1 px-2 py-1 bg-muted rounded"
                              >
                                {getDietaryIcon(diet)}
                                <span className="text-xs capitalize">
                                  {diet}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Dietary Info Legend */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">
                Dietary Information
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span>Vegetarian</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-blue-600 border border-blue-600 rounded px-2 py-1">
                    GF
                  </span>
                  <span>Gluten-Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-600" />
                  <span>Spicy</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Please inform your server of any allergies or dietary
                restrictions. We're happy to accommodate special requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
