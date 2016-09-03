<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %> <%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
    Placeholder Page Title
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageDescription" runat="server">
    Placeholder Page Description
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <!-- Main Table -->
    <table class="ms-core-tableNoSpace ms-webpartPage-root" width="100%">
        <tr>
            <td><input type="button" value="Test All" onclick="testAll();" /></td>
        </tr>
        <tr>
            <td><input type="button" value="Test Content Type" onclick="testContentType();" /></td>
            <td><input type="button" value="Test File" onclick="testFile();" /></td>
            <td><input type="button" value="Test List" onclick="testList();" /></td>
        </tr>
    </table>

    <!-- Log -->
    <div style="width:100%" id="log"></div>

    <!-- Scripts -->
    <script type="text/javascript" src="sprest.js"></script>
    <script type="text/javascript" src="test.js"></script>
</asp:Content>
