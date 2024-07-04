import { LitElement } from "lit";
export declare class ChatHeader extends LitElement {
    static styles: import("lit").CSSResult;
    header: string;
    description: string;
    constructor();
    handleClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
