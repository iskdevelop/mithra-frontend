type BlockType = 'text' | 'heading' | 'code' | 'image' | 'list';

interface BlockMetadata {
    createdAt: Date;
    lastModified: Date;
    parentId?: string; // Optional, for nested content
}

interface InlineStyle {
    type: 'bold' | 'italic' | 'code';
    startPos: number;
    endPos: number;
    className?: string;  // Optional className for inline style customization
}

interface Block {
    id: string;
    type: BlockType;
    rawContent: string;     // Raw content entered by the user
    inlineStyles: InlineStyle[];  // Stores inline styles like bold, italic, etc.
    metadata: BlockMetadata;
    className?: string;     // ClassName for block-level styling

    parseContent(): void;   // Parses rawContent to detect inline styles, links, etc.
    renderContent(): string; // Renders HTML/Vue component for display
    updateInlineStyle(startPos: number, endPos: number, style: InlineStyle): void; // Updates inline styles dynamically
}
