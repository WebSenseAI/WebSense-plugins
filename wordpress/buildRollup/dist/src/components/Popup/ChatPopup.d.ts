import { LitElement } from "lit";
export declare class ChatPopup extends LitElement {
    static styles: import("lit").CSSResult;
    chatData: {};
    isPopupOpen: boolean;
    key: string;
    togglePopup(): void;
    sendMessage(questions: string, key: string): Promise<void>;
    connectedCallback(): void;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
