/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Role Assignments
    /*********************************************************************************************************************************/
    Library.roleAssignments = {};
    Library.roleAssignments[RequestType.Get] = ["getByPrincipalId"];
    Library.roleAssignments[RequestType.Post] = ["addRoleAssignment", "removeRoleAssignment"];
}
