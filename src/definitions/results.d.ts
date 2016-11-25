declare module $REST.Results {
    /**
     * Key/Value Pair
     */
    interface KeyValuePair {
        /** The collection of key-value pairs. */
        results: Array<Settings.KeyValuePair>
    }

    /**
     * String Collection
     */
    interface String {
        /** The collection of strings. */
        results: Array<string>
    }
}