declare module GD.Types {
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
        add(groupInfo:ComplexTypes.GroupCreationInformation): IGroup;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ISiteGroups;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ISiteGroups;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ISiteGroups;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ISiteGroups;

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
        removeById(id): IBase;

        /**
         * Removes the cross-site group with the specified name from the collection.
         * @param name - The name of the group to remove. The group name is specified in its LoginName property.
         */
        removeByLoginName(name): IBase;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ComplexTypes.ODataQuery): ISiteGroups;
    }
}
