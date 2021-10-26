/// <reference types="cypress" />

describe('testing', () =>{

    // beforeEach(()=>{
    //     cy.viewport('macbook-16')
    // })


    it('testcase 1', () =>{
        cy.viewport("samsung-s10")
        cy.visit('https://github.com/')
    })

    it('testcase 2',() =>{
        cy.contains('Where the world')
    })

    it('testcase 3',() =>{
        cy.get('[data-feature=home_page_globe]')
    })

    it('testcase 4', () =>{
        cy.get('[data-feature=home_page_global]').should('not.exist')
    })

    it.only('testcase 5', ()=>{
        cy.visit('https://github.com/')

        cy.contains('Sign up').click()
        cy.contains('Sign in').should('exist')
    })

    it('testcase 6', () =>{
        cy.visit('https://github.com/')
        cy.contains('Sign up').click()
        cy.contains('Sign in').click()
        cy.url().should('include','/login')
    })

    it('testcase 7',() =>{
        cy.visit('https://github.com/')
        cy.contains('Sign up').click()
        cy.contains('Sign in').click()
        cy.get('[id=login_field]').type('pransaraswatal')
        cy.get('[id=password]').type('pranjalsaraswat')
        cy.contains('Sign in').click()

    })

}
)
