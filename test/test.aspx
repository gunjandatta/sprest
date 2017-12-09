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
    <!-- Checkboxes -->
    <input type="checkbox" value="All" onclick="cbAll_Click(this);" />Select All<br/>
    <input type="checkbox" name="test" value="alm" />Test ALM<br/>
    <input type="checkbox" name="test" value="file" />Test File<br/>
    <input type="checkbox" name="test" value="list" />Test List Synchronous<br/>
    <input type="checkbox" name="test" value="security" />Test Security<br/>
    <input type="checkbox" name="test" value="listAsync" />Test List Asynchronous<br/>
    <br/><input type="button" value="Run" onclick="runTests();" />

    <!-- Log -->
    <div style="width:100%" id="log"></div>

    <!-- Scripts -->
    <script type="text/javascript" src="./gd-sprest.js"></script>
    <script type="text/javascript" src="./test_basic.js"></script>
    <script type="text/javascript" src="./test_cfg.js"></script>
</asp:Content>
