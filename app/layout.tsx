import NavBar from '../components/NavBar';
import { ReactNode } from 'react';
import { orbitron, exo2 } from './fonts';
import "./globals.css";

export const metadata = {
	title: {
		default: "Indie Gamer",
		template : '%s | Indie Gamer',
	},
	description : "Only the best indie games, reviewed for you."
  }

interface LayoutProps {
	  children: ReactNode;
}
export default function RootLayout({ children } : LayoutProps) {
  return (
	<html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
		<body className='bg-stone-900 text-white px-4 py-2 flex flex-col min-h-screen'>
			<header>
				<NavBar/>
			</header>
			<main className='py-3 grow'>
				{children}
			</main>
			<footer className='text-center text-xs border-t py-3'>
				Game data and images courtesy of <a className="text-orange-300 hover:underline" href='https://rawg.io/' target='_blank'>RAWG</a>	
			</footer>
		</body>
	</html>
  );
}