import { test, expect, type Page } from '@playwright/test';

const webURL = 'https://www.nationalaircargo.com'

test.beforeEach(async ({ page }) => {
    // navigation
    await page.goto(webURL);

    // API Response Assertions
    const response = await page.request.get(webURL);
    await expect(response).toBeOK();
});

test.describe('NAC Testing', () => {
    test('Header', async ({ page }) => {
        // navigation with assertion
        await page.locator('#menu-item-272').click();
        await expect(page).toHaveTitle(/.*About us/);
        await expect(page).toHaveURL(webURL + '/about/');

        await page.locator('#menu-item-630').click();
        // await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();

        // navigations
        await page.locator('#menu-item-645').getByRole('link', { name: 'End-to-End Freight Solutions' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-641').getByRole('link', { name: 'Air Freight Solutions' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-648').getByRole('link', { name: 'Multimodal Solutions' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-644').getByRole('link', { name: 'Defense Logistics' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-647').getByRole('link', { name: 'Humanitarian Aid' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-646').getByRole('link', { name: 'General Warehousing' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-649').getByRole('link', { name: 'Ocean Freight' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-640').getByRole('link', { name: '3PL & Supply Chain' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-642').getByRole('link', { name: 'Cargo Charters' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-650').getByRole('link', { name: 'Project Logistics' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-643').getByRole('link', { name: 'Customs Brokerage' }).click();
        await page.locator('#menu-item-630').getByRole('link', { name: 'Solutions' }).click();
        await page.locator('#menu-item-651').getByRole('link', { name: 'Value-Added Solutions' }).click();
        await page.locator('#menu-item-631').getByRole('link', { name: 'Industries' }).click();
        await page.locator('#menu-item-638').getByRole('link', { name: 'Government & Defense' }).click();
        await page.locator('#menu-item-631').getByRole('link', { name: 'Industries' }).click();
        await page.locator('#menu-item-637').getByRole('link', { name: 'Aerospace' }).click();
        await page.locator('#menu-item-631').getByRole('link', { name: 'Industries' }).click();
        await page.locator('#menu-item-634').getByRole('link', { name: 'eCommerce & Retailers' }).click();
        await page.locator('#menu-item-631').getByRole('link', { name: 'Industries' }).click();
        await page.locator('#menu-item-635').getByRole('link', { name: 'Fast Moving Consumer Goods (FMCG)' }).click();
        await page.locator('#menu-item-631').getByRole('link', { name: 'Industries' }).click();
        await page.locator('#menu-item-636').getByRole('link', { name: 'Automotive' }).click();
        await page.locator('#menu-item-631').getByRole('link', { name: 'Industries' }).click();
        await page.locator('#menu-item-633').getByRole('link', { name: 'Pharmaceuticals' }).click();
        await page.locator('#menu-item-631').getByRole('link', { name: 'Industries' }).click();
        await page.locator('#menu-item-632').getByRole('link', { name: 'Events & Trade Shows' }).click();
    });

    test('FAQ & Conditions', async ({ page }) => {
        // navigations
        await page.locator('#menu-item-434').getByRole('link', { name: 'FAQ & Conditions' }).click();
        await page.getByRole('button', { name: 'General Questions' }).click();
        await page.getByRole('button', { name: 'Accounting Questions' }).click();
        await page.getByRole('button', { name: 'Payment Terms Questions' }).click();
        await page.getByRole('button', { name: 'Invoice/Receipt Questions' }).click();
        await page.getByRole('button', { name: 'Government Shipment Questions' }).click();
        await page.getByRole('button', { name: 'Military Customer Questions' }).click();
        await page.getByRole('button', { name: 'Delivery Questions' }).click();
        await page.getByRole('button', { name: 'Requirements Questions' }).click();
        await page.getByRole('button', { name: 'Terms & Conditions' }).click();
        await page.getByRole('button', { name: 'U.S. Terms Of Service' }).click();
        await page.getByRole('button', { name: 'International Terms Of Service' }).click();
        await page.getByRole('button', { name: 'ADSp 2017 terms and conditions' }).click();
        await page.getByRole('button', { name: 'Privacy Policy' }).click();
        
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'General Privacy Policy' }).click();
        const page1 = await page1Promise;
        const page2Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Cookies Notice' }).click();
        const page2 = await page2Promise;
        const page3Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'California Privacy Notice' }).click();
        const page3 = await page3Promise;
    });

    test('Contact Us', async ({ page }) => {

        const form = await page.getByRole('form')
        
        // navigation
        await page.locator('#menu-item-271').getByRole('link', { name: 'Contact Us' }).click();

        // forms
        form.locator('select[name="location-name"]').selectOption('Philippines');
        form.getByPlaceholder('+1 --- ---- ---- ----').click();
        form.getByPlaceholder('+1 --- ---- ---- ----').fill('6390909090909');
        form.locator('input[name="origin-name"]').click();
        form.locator('input[name="origin-name"]').fill('jc');
        form.locator('input[name="destination-name"]').click();
        form.locator('input[name="destination-name"]').fill('cj');
        form.locator('select[name="length-name"]').selectOption('Feet');
        form.locator('select[name="length-name"]').click();
        form.locator('input[name="width-name"]').click();
        form.locator('input[name="width-name"]').fill('5');
        form.locator('input[name="height-name"]').click();
        form.locator('input[name="height-name"]').fill('5');
        form.locator('input[name="depth-name"]').click();
        form.locator('input[name="depth-name"]').fill('5');
        form.locator('select[name="weight-name"]').selectOption('Kilograms');
        form.locator('input[name="total-weight"]').click();
        form.locator('input[name="total-weight"]').fill('100');

        // textboxes
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill('Janrey');
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Colimbino');
        await page.getByRole('textbox', { name: 'Email' }).click();
        await page.getByRole('textbox', { name: 'Email' }).fill('name@gmail.com');
        await page.getByRole('textbox', { name: 'Company Name' }).click();
        await page.getByRole('textbox', { name: 'Company Name' }).fill('Company Name');
        await page.getByRole('textbox', { name: 'Commodity' }).click();
        await page.getByRole('textbox', { name: 'Commodity' }).fill('Commodity');
        await page.getByRole('textbox', { name: 'Additional details or notes' }).fill('Thank you. Have a nice day.');

        // checkbox
        await page.getByRole('checkbox').check();

        // asserstions
        const checkboxes = page.getByRole('checkbox');
        await expect(checkboxes).toBeChecked();

        const forms = page.getByRole('form');
        await expect(forms).toBeEditable();
    });
});