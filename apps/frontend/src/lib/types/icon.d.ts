export interface IconStyle {
    icon: string;
    size: number;
    location: 'left' | 'right';
    color: string;
    rotation: number;
}
export type PartialIcon = Partial<IconStyle>;