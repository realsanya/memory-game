declare module '*.svg';
declare module '*.png';
declare module '*.woff';
declare module '*.woff2';

type CardId = string;

interface TCard {
    id: CardId;
    src: string;
    isOpened: boolean;
    isSolved: boolean;
}
