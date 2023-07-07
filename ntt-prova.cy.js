describe('Testes Automatizados API Trello', () => {
    const apiKey ='4a4e3c821d0b8b9af996884ae3314ba4'
    const apiToken = 'ATTA3064c3f0e133767438b83c9cdc1f4bad1d61cdc71b411090e8e53ee2a8675fe1840B4C97'
    const url = 'https://api.trello.com'
    var idList = '64a46ea28abcfde6462e3de6'
    var nomeDoBoard = 'TESTEAPI'
    var nomeDoCard = 'Avaliação'
    
    it('[POST] Criar Board', () => {
        cy.api({
            method: 'POST',
            url: `${url}/1/boards/?name=${nomeDoBoard}&key=${apiKey}&token=${apiToken}`
            }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('name')

            cy.screenshot('[POST] Criar Board')
        })
    });

    it('[POST] Criar Card', () => {
        cy.api({
            method: 'POST',
            url: `${url}/1/cards?idList=${idList}&key=${apiKey}&token=${apiToken}`,
            body: {
                name: `${nomeDoCard}`
            }
            
         }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
            expect(response.body).to.have.property('name')
            expect(response.body).to.have.property('id')
         })
    });

    it('[DELETE] Exluir Card', () => {
        cy.api({
            method: 'DELETE',
            url: `${url}/1/cards/eHV3ImOd?key=${apiKey}&token=${apiToken}`,
            }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
        })

    });
    it('[DELETE] Excluir Board', () => {
        cy.api({
            method: 'DELETE',
            url: `${url}/1/boards/z2NWyFFR?key=${apiKey}&token=${apiToken}`,
            }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
        })

    });
});