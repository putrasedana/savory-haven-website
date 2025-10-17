import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        {
          name: "Heirloom Tomato Bruschetta",
          description: "Toasted artisan bread, fresh basil, aged balsamic",
          price: "$12",
          special: false,
        },
        {
          name: "Crispy Calamari",
          description: "Lightly fried, served with spicy marinara and lemon aioli",
          price: "$16",
          special: true,
        },
        {
          name: "Butternut Squash Soup",
          description: "Roasted butternut squash, sage, toasted pumpkin seeds",
          price: "$10",
          special: false,
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Herb-Crusted Salmon",
          description: "Wild-caught salmon, lemon butter sauce, seasonal vegetables",
          price: "$32",
          special: true,
        },
        {
          name: "Braised Short Ribs",
          description: "Slow-cooked beef short ribs, red wine reduction, garlic mash",
          price: "$38",
          special: false,
        },
        {
          name: "Wild Mushroom Risotto",
          description: "Arborio rice, truffle oil, parmesan, seasonal mushrooms",
          price: "$26",
          special: false,
        },
        {
          name: "Grilled Ribeye Steak",
          description: "14oz grass-fed ribeye, herb butter, roasted potatoes",
          price: "$42",
          special: true,
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Chocolate Lava Cake",
          description: "Warm molten chocolate, vanilla bean ice cream, fresh berries",
          price: "$12",
          special: true,
        },
        {
          name: "Crème Brûlée",
          description: "Classic vanilla custard, caramelized sugar, shortbread",
          price: "$10",
          special: false,
        },
        {
          name: "Tiramisu",
          description: "Espresso-soaked ladyfingers, mascarpone, cocoa dust",
          price: "$11",
          special: false,
        },
      ],
    },
    {
      name: "Beverages",
      items: [
        {
          name: "House Red Wine",
          description: "Cabernet Sauvignon, full-bodied, notes of dark berries",
          price: "$12",
          special: false,
        },
        {
          name: "Craft Beer Selection",
          description: "Local IPA, rotating seasonal flavors",
          price: "$8",
          special: false,
        },
        {
          name: "Specialty Coffee",
          description: "Espresso, cappuccino, or latte with house-roasted beans",
          price: "$5",
          special: false,
        },
        {
          name: "Fresh-Pressed Juices",
          description: "Orange, grapefruit, or seasonal fruit blend",
          price: "$6",
          special: false,
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Savor dishes crafted from the finest locally-sourced ingredients,
            prepared with passion and expertise
          </p>
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
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        {item.name}
                        {item.special && (
                          <Badge variant="secondary" className="gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Chef's Special
                          </Badge>
                        )}
                      </h3>
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
