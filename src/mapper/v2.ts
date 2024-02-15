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
    },
    column: {
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
        }
    },
    contentType: {
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
        }
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
            requestType: RequestType.Get,
            returnType: "items"
        },
        list: {
            requestType: RequestType.Get,
            returnType: "list"
        },
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
        update: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        versions: {
            requestType: RequestType.Get
        }
    },
    items: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        }
    },
    list: {
        update: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        }
    },
    listItem: {
        activities: {
            requestType: RequestType.Get,
            returnType: "activities"
        },
        analytics: {
            requestType: RequestType.Get
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
            requestType: RequestType.Get,
            returnType: "versions"
        },
    },
    listItemVersion: {
        fields: {
            requestType: RequestType.Get,
        }
    },
    lists: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        analytics: {
            requestType: RequestType.Get,
            returnType: "analytics"
        },
        columns: {
            requestType: RequestType.Get,
            returnType: "columns"
        },
        contentTypes: {
            requestType: RequestType.Get,
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
            requestType: RequestType.Get,
            returnType: "items"
        }
    },
    permission: {
        update: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        }
    },
    permissions: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        }
    },
    sites: {
        add: {
            args: ["values"],
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },
        analytics: {
            requestType: RequestType.Get,
            returnType: "analytics"
        },
        columns: {
            requestType: RequestType.Get,
            returnType: "columns"
        },
        contentTypes: {
            requestType: RequestType.Get,
            returnType: "contentTypes"
        },
        drive: {
            requestType: RequestType.Get,
            returnType: "drive"
        },
        drives: {
            requestType: RequestType.Get,
            returnType: "drives"
        },
        items: {
            requestType: RequestType.Get,
            returnType: "items"
        },
        lists: {
            requestType: RequestType.Get,
            returnType: "lists"
        },
        permissions: {
            requestType: RequestType.Get,
            returnType: "permissions"
        },
        sites: {
            requestType: RequestType.Get,
            returnType: "sites"
        }
    }
}