import { NeonButton } from "@/components/ui/neon-button"


const NeonButtonDemo = () => {
    return (
        <div className="p-10 bg-black min-h-screen flex items-center justify-center gap-10 flex-col">
            <div className="flex flex-col gap-4">
                <h2 className="text-white text-2xl font-bold mb-4">Neon Button Variants</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <NeonButton size="lg">Default Neon</NeonButton>
                    <NeonButton variant="solid" size="lg">Solid Neon</NeonButton>
                    <NeonButton variant="outline" size="lg">Outline Neon</NeonButton>
                    <NeonButton neon={false} size="lg">No Neon Effect</NeonButton>
                </div>
            </div>
        </div>
    )
}

export default NeonButtonDemo;
