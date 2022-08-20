/// <reference types="jquery" />
import type * as TinyMCE from "tinymce";
import "../../styles/tinymce.scss";
declare class JournalSheetPF2e<TJournalEntry extends JournalEntry = JournalEntry> extends JournalSheet<TJournalEntry> {
    override: any;
    get template(): string;
    override: any;
    activateListeners($html: JQuery): void;
    override: any;
    activateEditor(name: string, options?: Partial<TinyMCE.EditorSettings>, initialContent?: string): void;
}
declare class JournalSheetStyledPF2e extends JournalSheetPF2e {
    /** Use the system-themed styling only if the setting is enabled (on by default) */
    static override: any;
    get defaultOptions(): DocumentSheetOptions;
}
export { JournalSheetPF2e, JournalSheetStyledPF2e };
