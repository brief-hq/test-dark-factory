# Test Dark Factory

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Benchmark](https://img.shields.io/badge/Part%20of-dcbench-blue)](https://github.com/brief-hq/dcbench)

Minimal Express.js API used as a smoke test target for the [Decision Compliance Benchmark](https://github.com/brief-hq/dcbench).

## Purpose

This repository demonstrates that the benchmark framework generalizes to codebases of any size. It serves as a Config C test target for the external orchestrator configuration described in the paper *"Context-Augmented Code Generation"*.

## Structure

```
├── src/
│   ├── index.js       # Express server entry point
│   └── routes/
│       └── tasks.js   # Task CRUD endpoints
└── package.json
```

## Running

```bash
npm install
npm start
```

Server runs on `http://localhost:3001`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API info |
| GET | `/api/tasks` | List all tasks |
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks/:id` | Get task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

## Related

- **Main benchmark**: [github.com/brief-hq/dcbench](https://github.com/brief-hq/dcbench)
- **Paper**: [Context-Augmented Code Generation](https://briefhq.ai/assets/pdf/Context_Augmented_Code_Generation.pdf)
- **Brief**: [briefhq.ai](https://briefhq.ai)

## License

MIT
