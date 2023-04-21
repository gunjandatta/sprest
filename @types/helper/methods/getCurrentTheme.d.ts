/**
 * Gets the current theme information for a classic page.
 * @category Helper
 */
export const getCurrentTheme: PromiseLike<{ [key: string]: string }>;
export interface IgetCurrentTheme {
    (): PromiseLike<{ [key: string]: string }>;
}
