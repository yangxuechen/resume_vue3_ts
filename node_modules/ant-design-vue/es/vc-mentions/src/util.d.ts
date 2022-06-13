/**
 * Cut input selection into 2 part and return text before selection start
 */
export function getBeforeSelectionText(input: any): any;
/**
 * Find the last match prefix index
 */
export function getLastMeasureIndex(text: any, prefix?: string): any;
/**
 * Paint targetText into current text:
 *  text: little@litest
 *  targetText: light
 *  => little @light test
 */
export function replaceWithMeasure(text: any, measureConfig: any): {
    text: string;
    selectionLocation: number;
};
export function setInputSelection(input: any, location: any): void;
export function validateSearch(text?: string, props?: {}): boolean;
export function filterOption(input?: string, { value }?: {
    value?: string;
}): boolean;
