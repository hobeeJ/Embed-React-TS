// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-inferrable-types */

// Scope Base of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
// Refer https://aka.ms/PowerBIPermissions for complete list of Power BI scopes

// URL used for initiating authorization request
export const authorityUrl: string = "https://login.microsoftonline.com/";

// End point URL for Power BI API
export const powerBiApiUrl: string = "https://api.powerbi.com/";

// Scope for securing access token
export const scopeBase: string[] = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

// Client Id (Application Id) of the AAD app.
export const clientId: string = "65e505be-bbfd-4a78-adcd-2520481b70c9";

// Id of the workspace where the report is hosted
export const workspaceId: string = "cc11d650-af93-44e5-abc8-f6df1558e258";

// Id of the report to be embedded
export const reportId: string = "34d538e7-6366-4528-afb1-59f1d680a6cd";

// Directory (tenant) ID of the AAD app
export const tenantId: string = "e2ad879e-1caa-46ae-b8cd-4c7c2d0292fa";