declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
    > & { title?: string }>;

    const src: string;
    export default src;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.wav';

declare module '*.txt' {
    const content: string;
    export default content;
}