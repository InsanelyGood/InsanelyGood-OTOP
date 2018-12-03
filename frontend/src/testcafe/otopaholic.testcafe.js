import { Selector } from 'testcafe';

fixture `otopaholic`
    .page `http://localhost:3000/`;

test('See product without login', async t => {
    await t
        .click(Selector('a').withText('PRODUCTS'))
        .click(Selector('a').withText('PRODUCTS'))
        .click(Selector('a').withText('ALL'))
        .click(Selector('.sc-bwzfXH.cimHiX').find('.sc-htpNat.hyGNzL[alt="error"]'));
});

test('Login', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('.sc-fMiknA.iXLPxl').find('[name="username"].form-control'), 'jack')
        .pressKey('tab')
        .typeText(Selector('div').withText('Password').nth(10).find('[name="password"].form-control'), '1234')
        .click(Selector('.loginBtn.sc-dVhcbM.ctAaVg'));
});

test('Admin login and see order list', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('.sc-fMiknA.iXLPxl').find('[name="username"].form-control'), 'admin')
        .pressKey('tab')
        .typeText(Selector('div').withText('Password').nth(10).find('[name="password"].form-control'), 'admin')
        .pressKey('enter')
        .click(Selector('a').withText('ADMIN'))
        .click(Selector('a').withText('ADMIN'))
        .click(Selector('button').withText('ORDERS'));
});

test('Admin login and edit product', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('.sc-fMiknA.iXLPxl').find('[name="username"].form-control'), 'admin')
        .pressKey('tab')
        .typeText(Selector('div').withText('Password').nth(10).find('[name="password"].form-control'), 'admin')
        .pressKey('tab')
        .pressKey('enter')
        .click(Selector('a').withText('ADMIN'))
        .click(Selector('a').withText('ADMIN'))
        .doubleClick(Selector('a').withText('ADMIN'))
        .click(Selector('button').withText('PRODUCTS'))
        .click(Selector('td').withText('Black sesame oil'))
        .pressKey('backspace')
        .typeText(Selector('div').withText('Price').nth(10).find('.form-control'), '55')
        .click(Selector('button').withText('Update'));
});

test('Login and can add items to cart', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('.sc-fMiknA.iXLPxl').find('[name="username"].form-control'), 'jack')
        .pressKey('tab')
        .typeText(Selector('div').withText('Password').nth(10).find('[name="password"].form-control'), '1234')
        .click(Selector('.loginBtn.sc-dVhcbM.ctAaVg'))
        .click(Selector('a').withText('PRODUCTS'))
        .click(Selector('a').withText('PRODUCTS'))
        .click(Selector('a').withText('PRODUCTS'))
        .click(Selector('a').withText('PRODUCTS'))
        .doubleClick(Selector('a').withText('PRODUCTS'))
        .click(Selector('a').withText('ALL'))
        .click(Selector('.sc-bwzfXH.cimHiX').find('.sc-htpNat.hyGNzL[alt="error"]'))
        .click(Selector('button').withText('Add to Cart'));
});

test('User checkout flow', async t => {
    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('.sc-fMiknA.iXLPxl').find('[name="username"].form-control'), 'jack')
        .pressKey('tab')
        .typeText(Selector('div').withText('Password').nth(10).find('[name="password"].form-control'), '1234')
        .click(Selector('.loginBtn.sc-dVhcbM.ctAaVg'))
        .click(Selector('a').withText('PRODUCTS'))
        .click(Selector('a').withText('PRODUCTS'))
        .doubleClick(Selector('a').withText('PRODUCTS'))
        .click(Selector('a').withText('ALL'))
        .click(Selector('.sc-bwzfXH.cimHiX').find('.sc-htpNat.hyGNzL[alt="error"]'))
        .click(Selector('button').withText('Add to Cart'))
        .click(Selector('span').withText('Checkout'))
        .click(Selector('.float-right.btn.btn-secondary.btn-sm').find('.hydrated'))
        .typeText(Selector('[name="address"].textaddress.form-control'), 's')
        .click(Selector('button').withText('Confirm'))
        .click(Selector('a').withText('Your Cart'));
});