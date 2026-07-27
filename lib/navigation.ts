export type NavItem = {
  title: string;
  href?: string;
  status?: "stable" | "beta" | "deprecated" | "new";
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
  },
  {
    title: "Foundations",
    children: [
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Radius", href: "/foundations/radius" },
      { title: "Shadows", href: "/foundations/shadows" },
      { title: "Icons", href: "/foundations/icons" },
    ],
  },
  {
    title: "Components",
    children: [
      { title: "Button", href: "/components/button", status: "stable" },
      { title: "Badge", href: "/components/badge", status: "stable" },
      { title: "Card", href: "/components/card", status: "stable" },
      { title: "Input", href: "/components/input", status: "stable" },
      { title: "Textarea", href: "/components/textarea", status: "stable" },
      { title: "Checkbox", href: "/components/checkbox", status: "stable" },
      { title: "Radio", href: "/components/radio", status: "stable" },
      { title: "Select", href: "/components/select", status: "stable" },
      { title: "Dropdown", href: "/components/dropdown", status: "stable" },
      { title: "Modal", href: "/components/modal", status: "stable" },
      { title: "Toast", href: "/components/toast", status: "stable" },
      { title: "Spinner", href: "/components/spinner", status: "stable" },
      { title: "Alert", href: "/components/alert", status: "stable" },
      { title: "Empty State", href: "/components/empty-state", status: "stable" },
    ],
  },
  {
    title: "Accessibility",
    href: "/accessibility",
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];
