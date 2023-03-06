import { expect, test } from "@playwright/test";

const webURL = "https://insuranceclaims-apim.azure-api.net/ProfileAPI/api/Profiles"

// test.beforeEach(async ({ request }) => {});

test.describe('API Testing', () => {
    
    // Create
    test ("Registration", async ({ request, baseURL }) => {

        const _response = await request.post((webURL) + '/registration', {
            data: {
                "firstName": "Janrey",
                "lastName": "Colimbino",
                "middleName": "Malunda",
                "email": "janrey.colimbino@accenture.com"
            }
        });
        expect(_response.status()).toBe(200);
        expect(_response.ok()).toBeTruthy();
    });

    // Get
    test ("Get Profiles", async ({ request, baseURL }) => {

        const _response = await request.get(webURL);
        console.log(await _response.json());

        expect(_response.status()).toBe(200);
    });

    // Update
    test ("Amendment", async ({ request, baseURL }) => {

        const _response = await request.put(webURL + '/amendment', {
            data: {
                "id": "1",
                "firstName": "EditedJanrey",
                "lastName": "EditedColimbino",
                "middleName": "EditedMalunda",
                "email": "Editedjanrey.colimbino@accenture.com"
            }
        });
        expect(_response.status()).toBe(200);
        expect(_response.ok()).toBeTruthy();
    });

    // Deactivation(update)
    test ("Deactivation", async ({ request, baseURL }) => {

        const _response = await request.put(webURL + '/deactivation/1', {
            data: {
                "id": 1,
                "isActive": false
            }
        });
        expect(_response.status()).toBe(200);
        expect(_response.ok()).toBeTruthy();
    });
});