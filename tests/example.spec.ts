import { test, expect, Page } from '@playwright/test';
import { TestEnvironment } from "./TestEnvironmentSample"

// UIDs and other variables common throughout all tests.
/**
 * the UID for the GM user
 */
let gm_uid: string;

/**
 * Element selectors
 */
const SAMPLE_ELEMENT = '#logo';

/**
 * Expected Values
 */
const EXPECTED_VALUE = TestEnvironment.EXPECTED_VALUE;

/**
 * All tests should be enclosed in a test.describe named after the module.
 */
test.describe('sample-module', () => {

    // Tests should be formatted such that the hierarchy of tests reads as follows:
    // <module-name> should [NOT] <action description> when <condition> [and <other condition>].
    test('should do the thing', async ({ page }) => {
        // at the moment you will always need to log on before executing every test.
        await logOnAsUser(PLAYER_INDEX.GAMEMASTER, page);

        // do something
        await doSomething(page);

        // It's best practice to have at least one expect statement per test, to verify that the state of the app is as expected.
        await expect(page.locator(SAMPLE_ELEMENT)).toHaveAttribute('src', EXPECTED_VALUE);
    });

    // Include any functions common to multiple "should" sections below all of them. Likewise if there are any functions common to all
    // tests within another test.describe, include them at the end of that test.describe() block.

    /**
     * Log on to Foundry as a specific user.
     * 
     * @param userIndex The index of the player to log in as.
     * @param page The test's page fixture.
     */
    async function logOnAsUser(userIndex: PLAYER_INDEX, page: Page) {
        // Go to the locally-deployed foundry instance
        await Promise.all([
            page.goto('http://localhost:30000'),
            page.waitForLoadState('load')
        ]);

        // In theory these first two should be unnecessary, but are added as a precaution.
        if (page.url() === 'http://localhost:30000/license') {
            await page.locator('#eula-agree').setChecked(true);
            await Promise.all([
                page.locator('#sign').click(),
                page.waitForLoadState('load')
            ]);
        }

        // In theory these first two should be unnecessary, but are added as a precaution.
        if (page.url() === 'http://localhost:30000/auth') {
            await page.locator('#key').fill('atropos');
            await Promise.all([
                page.locator('input[name="adminKey"]').press('Enter'),
                page.waitForLoadState('load')
            ]);
        }

        if (page.url() === 'http://localhost:30000/setup') {
            await page.locator('#setup-configuration > nav > a[data-tab="systems"]').click();
            const pf2eInstalled = await page.$('#system-list > li[data-package-id="pf2e"]');
            if (!pf2eInstalled) {
                await Promise.all([
                    page.locator('#config-tabs > div.tab.active > footer > button.install-package').click(),
                    page.waitForSelector('#install-package > section.window-content > div > div.form-group, input[name="filter"]')
                ]);
                await page.locator('#install-package > section.window-content > div > div.form-group, input[name="filter"]').fill('pathfinder second edition'),
                    await Promise.all([
                        page.keyboard.press('Enter'),
                        page.waitForSelector('button[data-manifest="https://github.com/foundryvtt/pf2e/releases/download/latest/system.json"]')
                    ]);
                await Promise.all([
                    page.locator('button[data-manifest="https://github.com/foundryvtt/pf2e/releases/download/latest/system.json"]').click(),
                    page.waitForSelector('#system-list > li[data-package-id="pf2e"]', { timeout: 120000 })
                ]);
            }
            await Promise.all([
                page.locator('#setup-configuration > nav > a[data-tab="worlds"]').click(),
                page.waitForSelector('#world-list > li[data-package-id="testWorld"] > div.package-controls > button[data-action="launchWorld"]')
            ]);
            await Promise.all([
                page.locator('#world-list > li[data-package-id="testWorld"] > div.package-controls > button[data-action="launchWorld"]').click(),
                page.waitForLoadState('load')
            ]);
        }

        // Select the user to log in as
        await page.locator('select[name="userid"]').focus();
        await page.locator('select[name="userid"]').selectOption({ index: userIndex });

        // get and then set the GM and player ids.
        // Note: The indices for the selectors are 1-based, whereas the index in the selectOption call above is 0-based.
        gm_uid = await page.locator('select[name="userid"] > option:nth-child(2)').getAttribute('value');

        // Join the game
        await Promise.all([
            page.locator('button:has-text("Join Game Session")').click({ force: true }),
            // TODO discord-integration#37: Find a way to make eslint happy about this type
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            page.waitForFunction(() => (window as any).game?.ready as boolean)
        ]);

    }

    /**
     * Function that does something
     * 
     * @param page The test's page fixture.
     */
    async function doSomething(page: Page) {
        await new Promise<void>((resolve) => {
            console.log(page);
            console.log(gm_uid);
            resolve();
        });
    }
});

/**
 * Indicates what index each user will be in at the login screen's user selection field. Add more users as needed for your tests.
 */
enum PLAYER_INDEX {
    GAMEMASTER = 1,
}





