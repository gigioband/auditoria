# ❓ Perguntas Frequentes (FAQ) - Auditoria KALANA vs PLANURBI

## 📊 Sobre a Auditoria

### O que é esta auditoria?
É uma análise comparativa entre duas bases de dados cadastrais (KALANA e PLANURBI) para identificar inconsistências e garantir a qualidade dos dados imobiliários de 5 bairros.

### Quais bairros foram auditados?
- Arquipélago do Sol
- Praia Bonita
- Barra Mar
- Altavistta
- Recanto

### Quantos registros foram analisados?
- **Total:** 4.233 registros no Planurbi e 3.855 na Kalana
- **Com match (ambas bases):** 3.468 registros
- **Apenas Planurbi:** 765 registros
- **Apenas Kalana:** 387 registros

---

## 📈 Sobre os Resultados

### Qual é a taxa de consistência geral?
**97,2%** - Considerada EXCELENTE! Isso significa que apenas 2,8% dos registros têm inconsistências que requerem atenção.

### Por que 97,2% e não outro número?
A taxa leva em conta:
- ✅ Registros com tipos iguais (86,5%)
- ✅ Atualizações T→P consideradas normais (10,7%)
- 🔴 Apenas regressões P→T e conflitos como problemas (2,8%)

### Qual é o melhor bairro?
🥇 **Arquipélago do Sol** com 99,0% de consistência, sendo o único bairro acima de 98%.

### Qual é o pior bairro?
🥉 **Recanto** com 96,2%, mas ainda assim um resultado BOM. A diferença para o melhor é de apenas 2,8 pontos percentuais.

---

## 🔍 Sobre os Tipos de Imóveis

### O que significa P, T e R?
- **P (Predial):** Edificação construída
- **T (Territorial):** Terreno vazio
- **R (Ruínas):** Edificação em ruínas

### O que é uma "Atualização T→P"?
É quando um imóvel era **Terreno (T)** na base Kalana e passou a ser **Edificação (P)** na base Planurbi. Isso é **NORMAL** e indica que o terreno foi construído.

### O que é uma "Regressão P→T"?
É quando um imóvel era **Edificação (P)** na base Kalana e aparece como **Terreno (T)** na base Planurbi. Isso é **CRÍTICO** porque edificações não "viram" terrenos naturalmente - indica erro de dados.

### Por que T→P é normal mas P→T é crítico?
- **T→P:** Terrenos podem ser construídos (evolução natural) ✅
- **P→T:** Edificações não podem "desaparecer" e virar terrenos 🔴
- Logicamente, uma construção não regride a terreno (exceto casos raros de demolição)

---

## 🚨 Sobre os Problemas

### Quantas regressões P→T foram encontradas?
**80 casos** em 3.468 registros (2,3%)

### Onde estão concentradas as regressões?
- **Barra Mar:** 52 casos (65%)
- **Altavistta:** 21 casos (26%)
- **Outros bairros:** 7 casos (9%)

### O que causa essas regressões?
Hipóteses principais:
1. Erro no processo de migração/ETL entre sistemas
2. Reclassificação incorreta durante importação
3. Bug no processo de carga de dados
4. (Improvável) Demolições reais não documentadas

### O que deve ser feito com as regressões?
1. **Investigação urgente** dos 80 casos
2. **Verificação de imagens** dos imóveis
3. **Correção manual** caso a caso
4. **Documentação** das causas encontradas

---

## 📸 Sobre as Imagens

### Qual é a cobertura geral de imagens?
**77%** (3.260 de 4.233 imóveis têm imagem)

### Qual bairro tem melhor cobertura de imagens?
🥇 **Arquipélago do Sol** com 99,3% (435 de 438)

### Qual bairro tem pior cobertura?
🔴 **Praia Bonita** com apenas 42,6% (107 de 251) - **CRÍTICO**

### Por que a cobertura de imagens é importante?
As imagens permitem:
- Validar visualmente o tipo de imóvel
- Identificar erros de classificação
- Documentar o estado atual do imóvel
- Facilitar processos de fiscalização

### Quantas imagens precisam ser coletadas?
- **Praia Bonita:** 144 imagens (URGENTE)
- **Barra Mar:** 632 imagens
- **Altavistta:** 186 imagens
- **Outros:** 62 imagens
- **Total:** 1.024 imagens

---

## 🔄 Sobre Registros Sem Match

### O que são registros sem match?
São registros que existem em apenas uma das bases (Kalana ou Planurbi), mas não em ambas.

### Quantos registros sem match existem?
- **Apenas Planurbi:** 765 (18,1%)
- **Apenas Kalana:** 387 (10,0%)
- **Total:** 1.152 registros

### Por que existem registros sem match?
Possíveis causas:
- Cadastros novos não replicados
- Dados antigos não migrados
- Exclusões não sincronizadas
- Divergências nos processos de importação

### O que fazer com registros sem match?
1. Investigar a origem de cada conjunto
2. Determinar qual base é a "fonte da verdade"
3. Sincronizar as bases
4. Documentar o processo

---

## 🗺️ Sobre Conflitos de Bairro

### O que são conflitos de bairro?
São imóveis cadastrados em bairros diferentes nas duas bases (ex: BARRA MAR na Kalana, mas RECANTO no Planurbi).

### Quantos conflitos existem?
Apenas **9 registros** (0,3% dos matches) - número muito baixo!

### Onde estão os conflitos?
- **Barra Mar vs Recanto:** 6 casos
- **Outros:** 3 casos

### Como resolver conflitos de bairro?
1. Verificar localização geográfica real (coordenadas)
2. Consultar mapas oficiais de limites
3. Definir bairro correto
4. Atualizar base incorreta

---

## 📅 Sobre o Plano de Ação

### Quais são as prioridades?
1. **🔴 URGENTE (esta semana):** Investigar 80 regressões + coletar 144 imagens
2. **🟠 CURTO (2-3 semanas):** Correção em massa + sincronização
3. **🟡 MÉDIO (1-2 meses):** Completar imagens + documentação
4. **🟢 LONGO (3-6 meses):** Automação + monitoramento

### Quanto tempo levará para chegar a 99%+?
- **Meta 1 mês:** 99,0%
- **Meta 3 meses:** 99,5%
- **Meta 6 meses:** 99,9%

### O que é necessário para atingir as metas?
- Equipe de fiscalização para investigar regressões
- Equipe de campo para coletar imagens
- Desenvolvimento de scripts de correção
- Processo de sincronização entre bases
- Sistema de monitoramento contínuo

---

## 🔧 Aspectos Técnicos

### Como a auditoria foi realizada?
Processo automatizado que:
1. Importou dados de ambas bases
2. Normalizou tipos e nomes de bairros
3. Comparou registros por inscrição
4. Identificou divergências
5. Classificou por tipo de problema
6. Gerou relatórios e estatísticas

### Que correções já foram aplicadas?
1. **Normalização de tipos:** "Edificação" → P, "Terreno" → T
2. **BARRABALI:** 132 registros corrigidos (RECANTO → PRAIA BONITA)
3. **BARRAMAR:** 17 registros normalizados ("BARRAMAR" → "BARRA MAR")

### Como evoluiu a taxa de consistência?
- **Inicial:** 17,9% (lógica incorreta)
- **Após normalização:** 76,9%
- **Após BARRABALI:** 86,1%
- **Após regra de negócio:** 96,7%
- **Final (após BARRAMAR):** 97,2% ✅

---

## 💡 Interpretação dos Dados

### 97,2% é um bom resultado?
**SIM, é EXCELENTE!** 
- Acima de 95% é considerado muito bom
- Acima de 98% é considerado excepcional
- 97,2% indica alta qualidade dos dados

### Os problemas identificados são graves?
**Moderadamente.** 
- ✅ Apenas 2,3% de regressões críticas
- ✅ Problemas concentrados e identificáveis
- ⚠️ Mas requerem atenção e correção

### Qual é a confiabilidade dos dados?
**ALTA.** 
- 86,5% dos registros estão perfeitos
- 10,7% têm atualizações normais
- Apenas 2,8% têm problemas reais

---

## 📊 Comparações e Benchmarks

### Como comparar com auditorias anteriores?
Este relatório usa a **regra de negócio correta**:
- T→P = Atualização (não erro)
- P→T = Regressão (erro)

Relatórios anteriores podem ter contado T→P como erro, resultando em taxas artificialmente baixas.

### Qual bairro melhorou mais?
**Praia Bonita** saiu de 0% (erro de bairro) para 97,1% após correção do BARRABALI.

### Quais arquivos são mais problemáticos?
1. BARRAMAR_SETOR_F: 26 regressões
2. ALTAVISTA: 21 regressões
3. BARRAMAR_SETOR_D: 15 regressões

---

## 🎯 Próximos Passos

### O que fazer agora?
1. ✅ Revisar este relatório
2. ✅ Abrir planilhas de auditoria
3. ⬜ Iniciar investigação dos casos críticos
4. ⬜ Planejar coleta de imagens
5. ⬜ Definir responsáveis por cada ação

### Quem deve ver este relatório?
- Gestores de TI
- Equipe de Cadastro
- Fiscalização
- Qualidade de Dados
- Diretoria (resumo executivo)

### Como acompanhar o progresso?
1. Planilhas Excel com status de investigação
2. Dashboard de monitoramento (a implementar)
3. Reuniões semanais de acompanhamento
4. Relatórios mensais de evolução

---

## 📞 Suporte

### Onde encontrar mais informações?
- **AUDITORIA_KALANA_PLANURBI_FINAL.md** - Relatório completo
- **AUDITORIA_COMPLETA_COLORIDA_FINAL.xlsx** - Dados detalhados
- **REGRESSOES_PT_INVESTIGACAO.xlsx** - Casos críticos

### Como reportar problemas encontrados?
1. Documentar na planilha de investigação
2. Preencher colunas "Status" e "Observações"
3. Comunicar à equipe técnica
4. Solicitar correção quando confirmado

### Contato técnico
- **Sistema:** Auditoria Automatizada v3.0
- **Data:** 16 de dezembro de 2025
- **Equipe:** Sistema de Qualidade de Dados

---

## 📝 Glossário

- **Match:** Registro que existe em ambas as bases
- **Divergência:** Diferença entre dados das duas bases
- **Regressão:** Mudança logicamente impossível
- **Atualização:** Mudança lógica e esperada
- **Cobertura:** Percentual de completude
- **Consistência:** Percentual de dados corretos
- **ETL:** Extract, Transform, Load (processo de dados)

---

**❓ Tem mais perguntas? Consulte o relatório completo ou entre em contato com a equipe técnica.**