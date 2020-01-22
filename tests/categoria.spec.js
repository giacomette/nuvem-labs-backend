const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiUuid = require('chai-uuid');
const app = require('../app');

chai.use(chaiHttp);
chai.use(chaiUuid);

const { expect } = chai;

describe('Testes do fluxo de categoria', () => {

  let categoriaId;

  context('Criacao de Categoria', () => {

    it('Não deve criar um categoria sem nome especificado', async () => {

      const body = {
        nome: null
      };

      const response = await chai
                              .request(app)
                              .post('/v1/categoria')
                              .send(body);
      
      expect(response).to.have.status(422);
      expect(response.body).to.be.an('object');
      expect(response.body.message).to.be.an('string');
      expect(response.body.message).to.be.equal("nome invalido");
    });

    it('Deve criar um categoria', async () => {

      const body = {
        nome: 'Categoria Piccin'
      };

      const response = await chai
                              .request(app)
                              .post('/v1/categoria')
                              .send(body);
      
      categoriaId = response.body.id;

      expect(response.body).to.be.an('object');
      expect(response.body.nome).to.be.equal(body.nome);
      expect(response.body.id).to.be.uuid('v4');
    });
  })

  context('Atualizacao de Categoria', () => {


  })

  context('Exclusao de Categoria', () => {
    it('Deve excluir uma categoria', async () => {
 
      const response = await chai
                              .request(app)
                              .delete(`/v1/categoria/${categoriaId}`)
                              .send();
        
      expect(response).to.have.status(200); 
    });
  })
});