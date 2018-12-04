import { Selector } from 'testcafe';

fixture `otopaholic`
    .page `http://localhost:3000/`;

test('Admin login and see order list', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('.sc-fBuWsC.EzeRs').find('[name="username"].form-control'), 'admin')
        .pressKey('tab')
        .typeText(Selector('div').withText('Password').nth(10).find('[name="password"].form-control'), 'admin')
        .click(Selector('button').withText('Login'))
        .click(Selector('a').withText('ADMIN'))
        .click(Selector('a').withText('ADMIN'))
        .doubleClick(Selector('a').withText('ADMIN'))
        .click(Selector('button').withText('PRODUCTS'))
        .click(Selector('td').withText('Bor Sang Umbrella'))
        .click(Selector('button').withText('Update'));
});

test('Admin login and edit product', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('.sc-fBuWsC.EzeRs').find('[name="username"].form-control'), 'admin')
        .pressKey('tab')
        .typeText(Selector('div').withText('Password').nth(10).find('[name="password"].form-control'), 'admin')
        .click(Selector('button').withText('Login'))
        .click(Selector('a').withText('ADMIN'))
        .click(Selector('a').withText('ADMIN'))
        .doubleClick(Selector('a').withText('ADMIN'))
        .click(Selector('a').withText('ADMIN'))
        .click(Selector('a').withText('ADMIN'))
        .doubleClick(Selector('a').withText('ADMIN'))
        .click(Selector('button').withText('ORDERS'))
        .click(Selector('.sc-iELTvK.eejaJb').find('td').withText('Mon'))
        .click(Selector('[name="status"]'))
        .click(Selector('button').withText('Update Order'));
});