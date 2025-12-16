# 📊 Dados da Auditoria - Referência Completa

## 📅 Informações Gerais

- **Data da Auditoria:** 16 de dezembro de 2025
- **Escopo:** 5 bairros
- **Arquivos Auditados:** 16 arquivos CSV
- **Versão do Relatório:** 3.0 Final

---

## 🎯 Estatísticas Globais

### Volume Total
| Métrica | Planurbi | Kalana | Diferença |
|---------|----------|--------|-----------|
| Total de registros | 4.233 | 3.855 | +378 |
| Registros com match | 3.468 | 3.468 | 0 |
| Registros sem match | 765 | 387 | +378 |
| Taxa de cobertura | 81,9% | 89,9% | -8,0 pp |

### Taxa de Qualidade
| Métrica | Valor | Status |
|---------|-------|--------|
| Taxa de Consistência Geral | **97,2%** | ✅ Excelente |
| Taxa com Atualizações T→P | 10,7% | ✅ Normal |
| Taxa de Inconsistência Real | 2,5% | ⚠️ Atenção |
| Taxa de Conflito de Bairro | 0,3% | ✅ Mínima |

### Cobertura de Imagens
| Métrica | Quantidade | Percentual |
|---------|------------|------------|
| Com imagem | 3.260 | 77,0% |
| Sem imagem | 973 | 23,0% |

---

## 🏘️ Dados Detalhados por Bairro

### 🥇 1º - ARQUIPÉLAGO DO SOL: 99,0%

#### Totais
- **Planurbi:** 438 registros
- **Kalana:** 482 registros
- **Matches:** 388 (80,5%)
- **Só Planurbi:** 50 (11,4%)
- **Só Kalana:** 94 (19,5%)

#### Tipos de Divergência
| Tipo | Quantidade | Percentual | Status |
|------|------------|------------|--------|
| OK (tipos iguais) | 320 | 82,5% | ✅ |
| Atualizações T→P | 64 | 16,5% | ✅ |
| Regressões P→T | 2 | 0,5% | 🔴 |
| Outros | 2 | 0,5% | ⚠️ |

#### Imagens
- **Com imagem:** 435 (99,3%) ⭐
- **Sem imagem:** 3 (0,7%)

#### Avaliação
🥇 **EXCELENTE** - Melhor bairro em todos os quesitos

---

### 🥈 2º - PRAIA BONITA: 97,1%

#### Totais
- **Planurbi:** 251 registros
- **Kalana:** 262 registros
- **Matches:** 242 (92,4%)
- **Só Planurbi:** 9 (3,6%)
- **Só Kalana:** 20 (7,6%)

#### Tipos de Divergência
| Tipo | Quantidade | Percentual | Status |
|------|------------|------------|--------|
| OK (tipos iguais) | 224 | 92,6% | ✅ |
| Atualizações T→P | 11 | 4,5% | ✅ |
| Regressões P→T | 3 | 1,2% | 🔴 |
| Conflito bairro | 3 | 1,2% | 🟠 |
| Outros | 1 | 0,4% | ⚠️ |

#### Imagens
- **Com imagem:** 107 (42,6%) 🔴 **CRÍTICO**
- **Sem imagem:** 144 (57,4%)

#### Correção Aplicada
- **BARRABALI_CONDOMINIO:** 132 registros corrigidos
- **Mudança:** RECANTO → PRAIA BONITA
- **Impacto:** De 0% para 100% de consistência neste arquivo

#### Avaliação
🥈 **MUITO BOM** - Mas precisa urgente de 144 imagens

---

### 🥈 2º - BARRA MAR: 97,1%

#### Totais
- **Planurbi:** 2.431 registros
- **Kalana:** 2.087 registros
- **Matches:** 2.026 (97,1%)
- **Só Planurbi:** 405 (16,7%)
- **Só Kalana:** 61 (2,9%)

#### Tipos de Divergência
| Tipo | Quantidade | Percentual | Status |
|------|------------|------------|--------|
| OK (tipos iguais) | 1.754 | 86,6% | ✅ |
| Atualizações T→P | 214 | 10,6% | ✅ |
| Regressões P→T | 52 | 2,6% | 🔴 **MAIOR** |
| Conflito bairro | 1 | 0,0% | 🟠 |
| Outros | 5 | 0,2% | ⚠️ |

#### Imagens
- **Com imagem:** 1.799 (74,0%)
- **Sem imagem:** 632 (26,0%)

#### Correção Aplicada
- **BARRAMAR_SETOR_C:** 17 registros normalizados
- **Mudança:** "BARRAMAR" → "BARRA MAR"

#### Atenção Especial
- Maior volume de dados: 2.026 matches (58,4% do total)
- Concentra **52 das 80 regressões P→T** (65%)
- **Arquivos críticos:**
  - SETOR_F: 26 regressões
  - SETOR_D: 15 regressões
  - SETOR_A: 7 regressões

#### Avaliação
🥈 **MUITO BOM** - Mas concentra 65% das regressões

---

### 🥉 4º - ALTAVISTTA: 96,7%

#### Totais
- **Planurbi:** 921 registros
- **Kalana:** 686 registros
- **Matches:** 630 (91,8%)
- **Só Planurbi:** 291 (31,6%)
- **Só Kalana:** 56 (8,2%)

#### Tipos de Divergência
| Tipo | Quantidade | Percentual | Status |
|------|------------|------------|--------|
| OK (tipos iguais) | 549 | 87,1% | ✅ |
| Atualizações T→P | 60 | 9,5% | ✅ |
| Regressões P→T | 21 | 3,3% | 🔴 |

#### Imagens
- **Com imagem:** 735 (79,8%)
- **Sem imagem:** 186 (20,2%)

#### Atenção Especial
- Segunda maior concentração de regressões: **21 casos** (26% do total)
- 291 registros só no Planurbi requerem investigação

#### Avaliação
🥉 **BOM** - Alta taxa de "só Planurbi" (31,6%)

---

### 🥉 5º - RECANTO: 96,2%

#### Totais
- **Planurbi:** 192 registros
- **Kalana:** 338 registros
- **Matches:** 182 (53,8%)
- **Só Planurbi:** 10 (5,2%)
- **Só Kalana:** 156 (46,2%)

#### Tipos de Divergência
| Tipo | Quantidade | Percentual | Status |
|------|------------|------------|--------|
| OK (tipos iguais) | 153 | 84,1% | ✅ |
| Atualizações T→P | 22 | 12,1% | ✅ |
| Regressões P→T | 2 | 1,1% | 🔴 |
| Conflito bairro | 5 | 2,7% | 🟠 |

#### Imagens
- **Com imagem:** 184 (95,8%)
- **Sem imagem:** 8 (4,2%)

#### Atenção Especial
- 156 registros só na Kalana (46,2%) - **maior % de todos os bairros**
- Menor taxa de match: 53,8%

#### Avaliação
🥉 **BOM** - Mas baixa taxa de match (53,8%)

---

## 📊 Distribuição de Divergências

### Análise Completa (459 divergências)

| Tipo | De (Kalana) | Para (Planurbi) | Quantidade | % | Interpretação |
|------|-------------|-----------------|------------|---|---------------|
| **Atualização** | T | P | **371** | **80,8%** | ✅ NORMAL - Construção |
| **Regressão** | P | T | **80** | **17,4%** | 🔴 CRÍTICO - Investigar |
| Especial | P | R | 4 | 0,9% | ⚠️ Casos especiais |
| Especial | T | R | 3 | 0,7% | ⚠️ Casos especiais |
| Especial | R | P | 1 | 0,2% | ⚠️ Caso especial |

### Distribuição de Tipos - Kalana (matches)

| Tipo | Quantidade | Percentual |
|------|------------|------------|
| P (Predial) | 2.537 | 73,2% |
| T (Territorial) | 931 | 26,8% |

### Distribuição de Tipos - Planurbi (matches)

| Tipo | Quantidade | Percentual |
|------|------------|------------|
| P (Predial) | 2.828 | 81,5% |
| T (Territorial) | 633 | 18,3% |
| R (Ruínas) | 7 | 0,2% |

---

## 🔴 Casos Críticos - Regressões P→T

### Top 5 Arquivos com Mais Regressões

| Posição | Arquivo | Bairro | Regressões |
|---------|---------|--------|------------|
| 1º | BARRAMAR_SETOR_F_LOTEAMENTO | BARRA MAR | 26 |
| 2º | ALTAVISTA | ALTAVISTTA | 21 |
| 3º | BARRAMAR_SETOR_D_LOTEAMENTO | BARRA MAR | 15 |
| 4º | BARRAMAR_SETOR_A_LOTEAMENTO | BARRA MAR | 7 |
| 5º | PRAIA_BONITA | PRAIA BONITA | 3 |

### Distribuição por Bairro

| Bairro | Regressões | % do Total |
|--------|------------|------------|
| Barra Mar | 52 | 65,0% |
| Altavistta | 21 | 26,3% |
| Praia Bonita | 3 | 3,8% |
| Arquipélago do Sol | 2 | 2,5% |
| Recanto | 2 | 2,5% |
| **TOTAL** | **80** | **100%** |

---

## 🎯 Comparativo Geral

### Ranking Completo

| Pos | Bairro | Consist. | Matches | Regressões | Imagens | Nota |
|-----|--------|----------|---------|------------|---------|------|
| 🥇 | Arquipélago do Sol | 99,0% | 388 | 2 (0,5%) | 99,3% | 10/10 |
| 🥈 | Praia Bonita | 97,1% | 242 | 3 (1,2%) | 42,6% | 7/10 |
| 🥈 | Barra Mar | 97,1% | 2.026 | 52 (2,6%) | 74,0% | 8/10 |
| 🥉 | Altavistta | 96,7% | 630 | 21 (3,3%) | 79,8% | 8/10 |
| 🥉 | Recanto | 96,2% | 182 | 2 (1,1%) | 95,8% | 8/10 |

### Análise Comparativa

#### Melhor Bairro: Arquipélago do Sol
- ✅ Maior taxa de consistência (99,0%)
- ✅ Menor taxa de regressões (0,5%)
- ✅ Melhor cobertura de imagens (99,3%)
- ✅ Boa taxa de match (80,5%)

#### Pior Bairro: Recanto
- ⚠️ Menor taxa de consistência (96,2%)
- ⚠️ Pior taxa de match (53,8%)
- ✅ Ótima cobertura de imagens (95,8%)
- ✅ Poucas regressões (2)

#### Bairro com Mais Problemas: Barra Mar
- 🔴 Concentra 52 das 80 regressões (65%)
- ⚠️ 632 imóveis sem imagem
- ✅ Alta taxa de match (97,1%)
- ✅ Boa consistência geral (97,1%)

#### Bairro Mais Crítico para Imagens: Praia Bonita
- 🔴 Apenas 42,6% de cobertura
- 🔴 144 imóveis sem imagem
- ⚠️ Pior índice de todos os bairros

---

## 📈 Evolução da Auditoria

### Timeline de Melhorias

| Fase | Taxa | Observação |
|------|------|------------|
| Inicial | 17,9% | Lógica incorreta (contava T→P como erro) |
| Após normalização | 76,9% | Corrigiu tipos e bairros |
| Após BARRABALI | 86,1% | +132 registros OK |
| Após regra de negócio | 96,7% | T→P = atualização (não erro) |
| **FINAL (após BARRAMAR)** | **97,2%** | **+17 registros OK** ✅ |

### Correções Aplicadas

#### 1. Normalização de Tipos
- "Edificação" / "Edificação em construção" → P
- "Terreno" → T
- "Ruínas" → R

#### 2. Correção BARRABALI
- Problema: 132 registros como RECANTO
- Solução: Alterado para PRAIA BONITA
- Impacto: +132 registros OK

#### 3. Normalização BARRAMAR
- Problema: 17 registros com "BARRAMAR"
- Solução: Normalizado para "BARRA MAR"
- Impacto: -17 conflitos de bairro

---

## 🎯 Metas Propostas

### Cronograma de Melhoria

| Métrica | Atual | Meta 1 Mês | Meta 3 Meses | Meta 6 Meses |
|---------|-------|------------|--------------|--------------|
| Consistência Geral | 97,2% | 99,0% | 99,5% | 99,9% |
| Regressões P→T | 80 | 0 | 0 | 0 |
| Conflitos de bairro | 9 | 0 | 0 | 0 |
| Cobertura imagens | 77,0% | 85,0% | 90,0% | 95,0% |
| Registros sem match | 1.152 | <500 | <200 | <100 |

---

## 📋 Regra de Negócio

### Interpretação Correta

#### ✅ T→P (Terreno → Edificação) = NORMAL
- **Quantidade:** 371 casos (80,8%)
- **Interpretação:** Terreno foi construído
- **Ação:** Nenhuma - evolução natural do cadastro
- **Status:** ✅ CORRETO

#### 🔴 P→T (Edificação → Terreno) = CRÍTICO
- **Quantidade:** 80 casos (17,4%)
- **Interpretação:** Logicamente impossível
- **Ação:** Investigação urgente caso a caso
- **Status:** 🔴 ERRO - Requer correção

---

## 📊 KPIs de Monitoramento

| KPI | Fórmula | Meta |
|-----|---------|------|
| Taxa de Consistência | (OK + T→P) / Matches | >99,0% |
| Taxa de Regressão | P→T / Matches | <0,5% |
| Cobertura de Match | Matches / Total | >90,0% |
| Qualidade de Imagem | Com Imagem / Total | >90,0% |
| SLA de Correção | Corrigidas / Total | 100% em 30d |

---

**📊 Dados atualizados em: 16 de dezembro de 2025**  
**🔍 Fonte: Sistema de Auditoria Automatizada v3.0**