const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do fluxo de usuario', () => {

  context('Criacao de Usuario', () => {

    it('Não deve criar um usuario sem nome especificado', async () => {

      const body = {
        nome: null
      };

      const response = await chai
                              .request(app)
                              .post('/v1/usuario')
                              .send(body);
      
      expect(response).to.have.status(422);
      expect(response.body).to.be.an('object');
      expect(response.body.message).to.be.an('string');
      expect(response.body.message).to.be.equal("nome invalido");
    });

    it('Deve criar um usuario', async () => {

      const body = {
        nome: 'Roberto Giacomette'
      };

      const response = await chai
                              .request(app)
                              .post('/v1/usuario')
                              .send(body);
      
      expect(response.body).to.be.an('object');
      expect(response.body.nome).to.be.equal(body.nome);
      expect(response.body.id).to.be.an('number');
    });
  })

  context('Atualizacao de Usuario', () => {


  })

  context('Exclusao de Usuario', () => {


  })
});