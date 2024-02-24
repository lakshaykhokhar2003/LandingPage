export interface OptionProps {
    options: string[];
}

export interface HighlightRating {
    rating: number;
    caption: string;
}

export interface ProductComponentProps {
    bestChoice?: boolean;
    bestValue?: boolean;
    number: number;
    image: string;
    imageTitle: string;
    heading: string;
    description: string;
    offer?: string;
    highlight?: string;
    highlightRating?: HighlightRating[];
    whyLove?: string[];
    rating: number;
    ratingCaption: string;
}

export interface DealsComponentProps {
    image: string;
    offer: string;
    limited: boolean;
    title: string;
    description: string;
    discountPrice: number;
    originalPrice: number;
}
