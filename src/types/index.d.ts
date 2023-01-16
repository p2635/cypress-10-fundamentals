/**
 * This file is to solve the error 'Property does not exist on type Window in TypeScript'
 * Reference URL: https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window
 */
export { };

declare global {
    interface Window {
        start, solved: string[];
    }
}