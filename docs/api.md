# API Documentation

Base URL local:

```text
http://localhost:9000/api
```

## Autenticação

No MVP atual, os endpoints não exigem autenticação.

## Health Check

### Testar conexão

```http
GET /test-connection
```

Resposta `200 OK`:

```json
{
  "message": "Connected with success!"
}
```

## Health Snapshots

Um health snapshot representa uma medição diária dos biomarcadores do usuário.

### Listar snapshots

```http
GET /health-snapshots
```

Resposta `200 OK`:

```json
{
  "data": [
    {
      "id": 1,
      "glucose_level": 115,
      "heart_rate": 78,
      "sleep_hours": 8,
      "water_intake": 2.5,
      "measured_at": "2026-06-28",
      "recommendations": [
        {
          "position": 1,
          "content": "Priorize uma rotina de sono consistente..."
        }
      ]
    }
  ],
  "links": {},
  "meta": {}
}
```

Observação: respostas paginadas mantêm a estrutura padrão do Laravel com `data`, `links` e `meta`.

### Recuperar snapshot por ID

```http
GET /health-snapshots/{id}
```

Resposta `200 OK`:

```json
{
  "id": 1,
  "glucose_level": 115,
  "heart_rate": 78,
  "sleep_hours": 8,
  "water_intake": 2.5,
  "measured_at": "2026-06-28",
  "recommendations": [
    {
      "position": 1,
      "content": "Priorize uma rotina de sono consistente..."
    },
    {
      "position": 2,
      "content": "Mantenha refeições equilibradas..."
    },
    {
      "position": 3,
      "content": "Inclua pausas curtas para hidratação..."
    }
  ]
}
```

### Recuperar último snapshot

Endpoint utilizado pelo dashboard para carregar a medição mais recente.

```http
GET /health-snapshots/latest
```

Resposta `200 OK`:

```json
{
  "id": 1,
  "glucose_level": 115,
  "heart_rate": 78,
  "sleep_hours": 8,
  "water_intake": 2.5,
  "measured_at": "2026-06-28",
  "recommendations": [
    {
      "position": 1,
      "content": "Priorize uma rotina de sono consistente..."
    }
  ]
}
```

### Criar snapshot

```http
POST /health-snapshots
Content-Type: application/json
```

Payload:

```json
{
  "sleep_hours": 8,
  "glucose_level": 115,
  "heart_rate": 78,
  "water_intake": 2.5,
  "measured_at": "2026-06-28"
}
```

Campos:

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `sleep_hours` | number | Sim | Horas de sono. Valor entre `0` e `24`. |
| `glucose_level` | integer | Sim | Nível de glicose em `mg/dL`. |
| `heart_rate` | integer | Sim | Frequência cardíaca em `BPM`. |
| `water_intake` | number | Sim | Consumo de água em litros. |
| `measured_at` | date | Sim | Data da medição no formato `YYYY-MM-DD`. Não pode ser futura. |

Resposta `201 Created` ou `200 OK`:

```json
{
  "id": 1,
  "glucose_level": 115,
  "heart_rate": 78,
  "sleep_hours": 8,
  "water_intake": 2.5,
  "measured_at": "2026-06-28",
  "recommendations": [
    {
      "position": 1,
      "content": "Recomendação gerada pela IA."
    },
    {
      "position": 2,
      "content": "Recomendação gerada pela IA."
    },
    {
      "position": 3,
      "content": "Recomendação gerada pela IA."
    }
  ]
}
```

Ao criar um snapshot, a API gera 3 recomendações de hábitos diários utilizando IA e salva cada recomendação vinculada ao snapshot.

### Remover snapshot

```http
DELETE /health-snapshots/{id}
```

Resposta `204 No Content`.

## Erros de validação

Quando o payload for inválido, a API retorna `422 Unprocessable Entity`.

Exemplo:

```json
{
  "message": "O campo horas de sono é obrigatório.",
  "errors": {
    "sleep_hours": [
      "O campo horas de sono é obrigatório."
    ]
  }
}
```

Validações importantes:

- `measured_at` não pode ser uma data futura.
- não é permitido criar mais de um snapshot para a mesma data.
- campos numéricos precisam respeitar o tipo esperado.
