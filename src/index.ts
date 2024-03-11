import { server } from './server/Server';


server.listen(process.env.PORT || 3335, () => {
  console.log(`Rodando na porta ${process.env.PORT || 3335}🔥`);
});