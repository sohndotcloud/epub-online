export interface ThemePack {
    name: string;
    background: string;
    background2: string;
    font: string;
    font2: string;
    font3: string;
    font4: string;
}

export const bubbleTheme: ThemePack = {
    name: "Bubble Theme",
    background: "bg-neutral-100",
    background2: "bg-blue-100",
    font: "text-blue-50",
    font2: "text-blue-300",
    font3: "text-blue-700",
    font4: "text-blue-950"
}

export const goldTheme: ThemePack = {
    name: "Gold Theme",
    background: "bg-neutral-900",
    background2: "bg-amber-50",
    font: "text-amber-50",
    font2: "text-amber-300",
    font3: "text-amber-700",
    font4: "text-amber-900"
}