describe('formaxui-components: FormaxuiComponentsSrcLibWindow component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formaxuicomponentssrclibwindow--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FormaxuiComponentsSrcLibWindow!');
    });
});
