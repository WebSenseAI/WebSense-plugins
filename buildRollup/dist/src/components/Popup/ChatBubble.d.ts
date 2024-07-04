import { LitElement } from "lit";
interface ChatBubbleItem {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}
export declare class ChatBubble extends LitElement {
    static styles: import("lit").CSSResult;
    firstmessage: string;
    items: ChatBubbleItem[];
    isBotTyping: boolean;
    scrollChat(): void;
    splitString(input: string): string[];
    processMessage(m: string, delay: number): Promise<unknown>;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
export {};
