import type { ReactNode } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HatchPattern from "./components/pattern/HatchPattern";

// Définir le type des props
interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="relative min-h-screen bg-white flex flex-col">

            {/* Pattern de hachures en arrière-plan - FIXED position, z-0 */}
            {/* <HatchPattern /> */}

            {/* Header toujours en haut - position relative pour être au-dessus des hachures */}
            <Header />

            {/* Contenu principal (flex-grow pour prendre l'espace restant) */}
            <main className="relative flex-grow">
                {children}
            </main>

            {/* Footer toujours en bas */}
            <Footer />
        </div>
    );
}