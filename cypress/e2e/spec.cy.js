describe('Testing api', () => {
    it('create user', () => {
        cy.visit('http://127.0.0.1:5173/users');
        cy.get('main > div > form > fieldset.form-group.form > input').click();
        cy.wait(1000);
        cy.get('main > div > form > fieldset.form-group.form > input').type('Albert@mail.com');
        cy.wait(1000);
        cy.get('main > div > form > fieldset:nth-child(2) > input').type('albert');
        cy.wait(1000);
        cy.get('.form-group:nth-child(3) > .form-control').click();
        cy.get('.form-group:nth-child(3) > .form-control').type('H0bun311!!');
        cy.wait(1000);
        cy.get('button[type=submit]').click();
        cy.wait(1000);
        cy.url().should('contains', 'http://127.0.0.1:5173/users');
    })
    it('Edit user', () => {
        cy.visit('http://127.0.0.1:5173/users');
        cy.get('button[type=submit]').click();
        cy.get('tr:nth-child(5) > button:nth-child(3)').click();
        cy.get('form:nth-child(1) > .form-group:nth-child(1) > .form-control').click();
        cy.get('form:nth-child(1) > .form-group:nth-child(1) > .form-control').clear();
        cy.wait(1000);
        cy.get('form:nth-child(1) > .form-group:nth-child(1) > .form-control').type('kast@mail.ee');
        cy.wait(1000);
        cy.get('div.modal > div > div > form > fieldset:nth-child(2) > input').click();
        cy.wait(1000);
        cy.get('div.modal > div > div > form > fieldset:nth-child(2) > input').clear();
        cy.wait(1000);
        cy.get('div.modal > div > div > form > fieldset:nth-child(2) > input').type('kast');
        cy.get('div.modal input.password').click();
        cy.wait(1000);
        cy.get('div.modal input.password').clear();
        cy.wait(1000);
        cy.get('div.modal input.password').type('Sisalikkk2!!!');
        cy.wait(1000);
        cy.get('div.modal > div > div > form > button').click();
        cy.url().should('contains', 'http://127.0.0.1:5173/users');
    })
    it('Delete user', () => {
        cy.visit('http://127.0.0.1:5173/users');
        cy.get('main > div > table > tbody > tr:nth-child(2) > button:nth-child(4)').click();
        cy.url().should('contains', 'http://127.0.0.1:5173/users');
    })
})

