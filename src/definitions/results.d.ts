declare module $REST.Results {
    /**
     * Key/Value Pair
     */
    interface KeyValuePair {
        /** The collection of key-value pairs. */
        results: Array<KeyValuePair>
    }

    /**
     * String Collection
     */
    interface String {
        /** The collection of strings. */
        results: Array<string>
    }
}