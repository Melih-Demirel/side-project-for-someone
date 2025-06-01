// page.tsx (server component)

import HomeContent from "./components/HomeContent";

export const metadata = {
  title: 'Gids voor het mentale welzijn van jongeren',
  description: 'Gids voor het mentale welzijn van jongeren',
};

export default function Page() {
  return <HomeContent />;
}
