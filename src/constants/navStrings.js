const navConstants = {
  HOME: "/",
  CATEGORIES: "/categories",
  CATEGORY: "/category",
  get CATEGORY_NAME() {
    return `/${this.CATEGORY}/:category`;
  },
  SOURCES: "/sources",
  get NAVLINKS() {
    return [
      { label: "Home", path: this.HOME },
      { label: "Categories", path: this.CATEGORIES },
      { label: "Business", path: `/category/business` },
      { label: "Science", path: `/category/science` },
      { label: "Sports", path: `/category/sports` },
      { label: "Technology", path: `/category/technology` },
      { label: "Sources", path: this.SOURCES },
      //   { label: "Resources", path: this.RESOURCES },
    ];
  },
};

export default navConstants;
