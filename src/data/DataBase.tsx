export type Page = 'home' | 'about' | 'contact'

export interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export interface NavItemsHeaderProps {
  id: Page;
  label: string;
}