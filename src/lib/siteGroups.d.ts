declare module $REST.Types {
    /**
     * Site Groups
     */
    interface ISiteGroups extends IBase {
        /**
         * Properties
         */

        /** The site group collection. */
        results: Array<IGroup>;

        /**
         * Methods
         */

        /**
         * Adds a site to the site collection.
         * @param groupInfo - The group creation information.
         */
        add(groupInfo:Settings.GroupCreationInformation): IGroup;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): ISiteGroups;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): ISiteGroups;

        /**
         * Returns a group from the collection based on the member ID of the group.
         * @param id - The site group id.
         */
        getById(id): IGroup;

        /**
         * Returns a cross-site group from the collection based on the name of the group.
         * @param name - The name of the group. The group name is specified in its LoginName property.
         */
        getByName(name): IGroup;

        /**
         * Removes the group with the specified member ID from the collection.
         * @param id - The ID of the group to remove.
         */
        removeById(id): any;

        /**
         * Removes the cross-site group with the specified name from the collection.
         * @param name - The name of the group to remove. The group name is specified in its LoginName property.
         */
        removeByLoginName(name): any;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): ISiteGroups;
    }
}
