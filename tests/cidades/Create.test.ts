import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {



  it('Criar Registro', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Piracicaba' });
    
    
    
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  }); 

  it('Tentar criar um registro com o nome muito curto', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Pa' });

    

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  }); 
});