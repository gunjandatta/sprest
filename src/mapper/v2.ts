import { RequestType } from "../utils";

/**
 * Mapper for the v2 api.
 */
export const MapperV2 = {
    activity: {
        driveItem: {
            requestType: RequestType.Get,
            returnType: "driveItem"
        },
        listItem: {
            requestType: RequestType.Get,
            returnType: "listItem"
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    column: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        update: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        }
    },
    columns: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    contentType: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        update: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        }
    },
    contentTypes: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    drive: {
        activities: {
            requestType: RequestType.Get
        },
        activitycounts: {
            requestType: RequestType.Get
        },
        apps: {
            requestType: RequestType.Get
        },
        commands: {
            requestType: RequestType.Get
        },
        items: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "items"
        },
        list: {
            requestType: RequestType.Get,
            returnType: "list"
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
        special: {
            requestType: RequestType.Get
        },
        trackedItems: {
            requestType: RequestType.Get
        }
    },
    item: {
        permissions: {
            requestType: RequestType.Get
        },
        children: {
            requestType: RequestType.Get
        },
        subscriptions: {
            requestType: RequestType.Get
        },
        thumbnails: {
            requestType: RequestType.Get
        },
        activities: {
            requestType: RequestType.Get
        },
        analytics: {
            requestType: RequestType.Get
        },
        commands: {
            requestType: RequestType.Get
        },
        featureStatus: {
            requestType: RequestType.Get
        },
        listItem: {
            requestType: RequestType.Get
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
        update: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        versions: {
            requestType: RequestType.Get
        }
    },
    listItems: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    list: {
        activities: {
            requestType: RequestType.Get
        },
        columns: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "columns",
        },
        contentTypes: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "contentTypes"
        },
        drive: {
            requestType: RequestType.Get,
            returnType: "drive"
        },
        items: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "listItems"
        },
        update: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    listItem: {
        activities: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "activities"
        },
        analytics: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "analytics"
        },
        driveItem: {
            requestType: RequestType.Get,
            returnType: "driveItem"
        },
        fields: {
            requestType: RequestType.Get,
            returnType: "fields"
        },
        versions: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "versions"
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    listItemVersion: {
        fields: {
            requestType: RequestType.Get,
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    lists: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        analytics: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "analytics"
        },
        columns: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "columns"
        },
        contentTypes: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "contentTypes"
        },
        drive: {
            requestType: RequestType.Get,
            returnType: "drive"
        },
        getById: {
            argNames: ["id"],
            name: "[[id]]",
            requestType: RequestType.GetReplace,
            returnType: "list"
        },
        getByTitle: {
            argNames: ["title"],
            name: "[[title]]",
            requestType: RequestType.GetReplace,
            returnType: "list"
        },
        items: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "listItems"
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    permission: {
        update: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    permissions: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
    },
    sites: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        analytics: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "analytics"
        },
        columns: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "columns"
        },
        contentTypes: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "contentTypes"
        },
        drive: {
            requestType: RequestType.Get,
            returnType: "drive"
        },
        drives: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "drives"
        },
        items: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "listItems"
        },
        lists: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "lists"
        },
        query: { argNames: ["oData"], requestType: RequestType.OData },
        permissions: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "permissions"
        },
        sites: {
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "sites"
        }
    }
}