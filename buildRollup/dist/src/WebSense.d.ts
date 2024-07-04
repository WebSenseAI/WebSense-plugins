import { LitElement } from 'lit';
import './component.js';
export declare class WebSense extends LitElement {
    static styles: import("lit").CSSResult;
    id: string;
    botInfo: {
        description: string;
        id: string;
        key: string;
        message: string;
        name: string;
        website: string;
    };
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
