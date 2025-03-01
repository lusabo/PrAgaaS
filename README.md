# PrAgaaS
Prompt e Agentes as a Service

## Pré-requisito: IAM

Este projeto simula um ambiente corporativo que já conta com um serviço de gerenciamento de identidade e acesso (IAM), possibilitando a autenticação e autorização de usuários em aplicações web e demais serviços.

Para fins de demonstração, adotamos o Keycloak como solução de IAM. A configuração necessária para executar o Keycloak via Docker encontra-se no arquivo **docker-compose.yml**.

```bash
docker-compose up -d
```

### Acessando a Interface de Administração do Keycloak

- Abra o navegador e acesse: http://localhost:8080
- Utilize as credenciais definidas nas variáveis de ambiente:
    - Usuário: admin
    - Senha: admin

Eu segui o tutorial do [Keycloak](https://www.keycloak.org/getting-started/getting-started-docker) para configurar o Keycloak.

Realm: posufg
Client: pragaas
User: admin
Password: admin