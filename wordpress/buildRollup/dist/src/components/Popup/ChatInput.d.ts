import { LitElement } from "lit";
import { Ref } from 'lit/directives/ref.js';
export declare class ChatInput extends LitElement {
    static styles: import("lit").CSSResult;
    inputChatRef: Ref<HTMLInputElement>;
    handleClick(): void;
    handleKeyPress(event: KeyboardEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
