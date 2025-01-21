import { ContentType, ContentTypeCreationInformation } from "gd-sprest-def/lib/SP";
import { IcreateContentType, IcreateContentTypeProps } from "../../../@types/helper/methods";
import { Web } from "../../lib";

/**
 * Creates a content type in a web or specified list.
 * @param ctInfo - The content type information.
 * @param parentInfo - The parent content type id and url containing it.
 * @param webUrl - The relative url to create the content type in.
 * @param listName - The list name to add the content type to. If blank, it will add it to the web content types.
 */
export const createContentType: IcreateContentType = (props: IcreateContentTypeProps): PromiseLike<ContentType> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // See if we are targeting a list
        if (props.listName) {
            // Process the request
            Web.processQuery(ListTemplate(props.listName, props.ctInfo, props.parentContentTypeId), props.webUrl).then(() => {
                // Get the content type and resolve the request
                Web(props.webUrl).Lists(props.listName).ContentTypes().query({
                    Filter: "Name eq '" + props.ctInfo.Name + "'"
                }).execute(cts => {
                    // Resolve the request
                    resolve(cts.results[0] as any);
                }, reject);
            }, reject);
        } else {
            // Process the request
            Web.processQuery(WebTemplate(props.ctInfo, props.parentContentTypeId), props.webUrl).then(() => {
                // Get the content type and resolve the request
                Web(props.webUrl).ContentTypes().query({
                    Filter: "Name eq '" + props.ctInfo.Name + "'"
                }).execute(cts => {
                    // Resolve the request
                    resolve(cts.results[0] as any);
                }, reject);
            }, reject);
        }
    });
}

// List Template
const ListTemplate = (listName: string, ctInfo: ContentTypeCreationInformation, parentId: string = "0x01"): string => {
    return `<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library">
        <Actions>
            <ObjectPath Id="1" ObjectPathId="0" />
            <ObjectPath Id="3" ObjectPathId="2" />
            <ObjectPath Id="5" ObjectPathId="4" />
            <ObjectPath Id="7" ObjectPathId="6" />
            <ObjectPath Id="9" ObjectPathId="8" />
            <ObjectPath Id="11" ObjectPathId="10" />
            <ObjectIdentityQuery Id="12" ObjectPathId="10" />
            <ObjectPath Id="14" ObjectPathId="13" />
            <ObjectPath Id="16" ObjectPathId="15" />
            <ObjectIdentityQuery Id="17" ObjectPathId="15" />
            <Query Id="18" ObjectPathId="13">
                <Query SelectAllProperties="true">
                    <Properties />
                </Query>
                <ChildItemQuery SelectAllProperties="true">
                    <Properties />
                </ChildItemQuery>
            </Query>
        </Actions>
        <ObjectPaths>
            <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
            <Property Id="2" ParentId="0" Name="Web" />
            <Property Id="4" ParentId="2" Name="ContentTypes" />
                <Method Id="6" ParentId="4" Name="GetById">
                    <Parameters>
                        <Parameter Type="String">${parentId}</Parameter>
                    </Parameters>
                </Method>
            <Property Id="8" ParentId="2" Name="Lists" />
            <Method Id="10" ParentId="8" Name="GetByTitle">
                <Parameters>
                    <Parameter Type="String">${listName}</Parameter>
                </Parameters>
            </Method>
            <Property Id="13" ParentId="10" Name="ContentTypes" />
            <Method Id="15" ParentId="13" Name="Add">
                <Parameters>
                    <Parameter TypeId="{168f3091-4554-4f14-8866-b20d48e45b54}">
                        <Property Name="Description" Type="${ctInfo.Description ? "String" : "Null"}">${ctInfo.Description || ""}</Property>
                        <Property Name="Group" Type="${ctInfo.Group ? "String" : "Null"}">${ctInfo.Group || ""}</Property>
                        <Property Name="Id" Type="Null" />
                        <Property Name="Name" Type="String">${ctInfo.Name || ""}</Property>
                        <Property Name="ParentContentType" ObjectPathId="6" />
                    </Parameter>
                </Parameters>
            </Method>
        </ObjectPaths>
    </Request>`;
}

// Web Template
const WebTemplate = (ctInfo: ContentTypeCreationInformation, parentId: string = "0x01"): string => {
    return `<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library">
        <Actions>
            <ObjectPath Id="26" ObjectPathId="25" />
            <ObjectIdentityQuery Id="27" ObjectPathId="25" />
            <Query Id="28" ObjectPathId="4">
                <Query SelectAllProperties="true">
                    <Properties />
                </Query>
                <ChildItemQuery SelectAllProperties="true">
                    <Properties />
                </ChildItemQuery>
            </Query>
        </Actions>
        <ObjectPaths>
            <Property Id="4" ParentId="2" Name="ContentTypes" />
            <Method Id="25" ParentId="4" Name="Add">
                <Parameters>
                    <Parameter TypeId="{168f3091-4554-4f14-8866-b20d48e45b54}">
                        <Property Name="Description" Type="${ctInfo.Description ? "String" : "Null"}">${ctInfo.Description || ""}</Property>
                        <Property Name="Group" Type="${ctInfo.Group ? "String" : "Null"}">${ctInfo.Group || ""}</Property>
                        <Property Name="Id" Type="Null" />
                        <Property Name="Name" Type="String">${ctInfo.Name || ""}</Property>
                        <Property Name="ParentContentType" ObjectPathId="6" />
                    </Parameter>
                </Parameters>
            </Method>
            <Property Id="2" ParentId="0" Name="Web" />
            <Method Id="6" ParentId="4" Name="GetById">
                <Parameters>
                    <Parameter Type="String">${parentId}</Parameter>
                </Parameters>
            </Method>
            <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
        </ObjectPaths>
    </Request>`;
}