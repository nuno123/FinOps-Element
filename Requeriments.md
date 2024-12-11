# Documentação de Requisitos para Sistema Web de FinOps: Controle de Custos e Orçamentos para Cloud Providers

## Visão Geral

O sistema tem como objetivo fornecer controle financeiro para custos e orçamentos de provedores de nuvem (AWS, Azure, GCP), permitindo que os usuários monitorem, analisem e otimizem gastos de maneira eficiente. O sistema deve ser desenvolvido em Next.js, priorizando uma interface intuitiva e responsiva.

---

## Objetivos do Sistema

1. Monitorar e exibir os custos em tempo real para diferentes provedores de nuvem.
2. Fornecer análises detalhadas por serviços, regiões, contas e produtos.
3. Implementar uma funcionalidade de previsão de gastos baseando-se em tendências de uso.
4. Facilitar a identificação de custos não categorizados ou não etiquetados.
5. Gerar relatórios personalizados para suporte à tomada de decisão.

---

## Requisitos Funcionais

### 1. Autenticação e Controle de Acesso

- **Usuários**:
  - Admin: Permissão total para gerenciar o sistema.
  - Analista FinOps: Permissão para visualizar e gerar relatórios.
- **Requisitos**:
  - Implementar autenticação via Google (OAuth 2.0).
  - Gerenciar níveis de acesso.

### 2. Dashboards

- Exibir as seguintes informações de forma visual:
  - **Gastos do mês atual**.
  - **Gastos previstos**.
  - **Gastos do mês anterior**.
  - **Gastos anuais acumulados**.
- Gráficos e tabelas para:
  - **Top 5 contas** com maiores gastos.
  - **Top 5 regiões**.
  - **Top 5 produtos/serviços mais utilizados**.
  - **Distribuição de custos etiquetados vs. não etiquetados**.

### 3. Previsão de Custos

- Basear-se em dados históricos para projetar os custos futuros.
- Utilizar técnicas de Machine Learning para estimar:
  - Gasto mensal.
  - Desvios ou anomalias nos custos.

### 4. Etiquetagem e Organização de Custos

- Permitir classificação de custos por etiquetas.
- Identificar custos não categorizados.
- Recomendar etiquetas baseando-se em padrões de uso.

### 5. Geração de Relatórios

- Opção para exportar relatórios em CSV e PDF.
- Dados detalhados para:
  - Regiões.
  - Serviços/produtos.
  - Período.

### 6. Multi-Cloud Support

- Integrar com APIs dos principais provedores:
  - AWS: Cost Explorer API.
  - Azure: Consumption API.
  - GCP: Cloud Billing API.

---

## Requisitos Não Funcionais

### 1. Desempenho

- O sistema deve carregar dashboards em menos de 2 segundos.

### 2. Escalabilidade

- Deve suportar até 10.000 registros diários.

### 3. Interface

- Design responsivo compatível com dispositivos desktop e mobile.
- Implementar modo dark e light.

### 4. Segurança

- Usar HTTPS para todas as comunicações.
- Proteger dados sensíveis com criptografia.

### 5. Documentação

- Fornecer documentação para APIs.
- Criar guias para os usuários finais.

---

## Pilha Tecnológica

### Frontend

- Next.js
- Tailwind CSS (para estilização)
- ShadCN para componentes prontos

### Backend

- Node.js
- API REST com Express
- Banco de dados: Supabase

### Infraestrutura

- Hospedagem: Netlify
- Integrações com APIs de provedores de nuvem

---

## Entregáveis

1. Protótipo do sistema.
2. Backend funcional integrado aos provedores de nuvem.
3. Frontend responsivo e intuitivo.
4. Relatórios personalizáveis.
5. Documentação completa.


---

##

