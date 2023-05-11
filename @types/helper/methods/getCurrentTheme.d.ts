/**
 * Gets the current theme information for a classic page.
 * @category Helper
 */
export const getCurrentTheme: IgetCurrentTheme;
export interface IgetCurrentTheme {
    (): PromiseLike<{ [key: string]: string }>;
}
