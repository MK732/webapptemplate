# NextJS Template with Self-Hosted Supabase

A complete NextJS application template with self-hosted Supabase, Docker containers, and authentication ready to go.

## 🚀 Features

- **NextJS 15** with App Router
- **Self-hosted Supabase** with Docker containers
- **Authentication** with Supabase Auth
- **TypeScript** support
- **Tailwind CSS** for styling
- **Docker** for easy deployment
- **Database** with PostgreSQL
- **Real-time** capabilities
- **Storage** for file uploads

## 📋 Prerequisites

- Docker and Docker Compose
- Node.js 18+ 
- Git

## 🛠️ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/MK732/webapptemplate
cd webapp
```

### 2. Start Supabase Services

```bash
cd supabase-project
docker compose up -d
```

This will start:
- Supabase Studio (Dashboard) at `http://localhost:54323`
- API at `http://localhost:54321`
- Database at `localhost:5432`
- Auth at `http://localhost:9999`

### 3. Configure Environment Variables

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Get your anon key from the Supabase Studio dashboard.

### 4. Install Dependencies and Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Your NextJS app will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
webapp/
├── frontend/                 # NextJS application
│   ├── app/                 # App router pages
│   ├── components/          # React components
│   ├── lib/                # Utilities and Supabase config
│   └── ...
├── supabase-project/        # Self-hosted Supabase
│   ├── docker-compose.yml   # Docker services
│   ├── volumes/            # Database and config files
│   └── ...
└── README.md
```

## 🔧 Configuration

### Supabase Services

The self-hosted Supabase includes:

- **PostgreSQL Database** - Main database
- **PostgREST** - REST API for database
- **GoTrue** - Authentication service
- **Realtime** - Real-time subscriptions
- **Storage** - File storage
- **Edge Functions** - Serverless functions
- **Studio** - Web dashboard

### Database Setup

The database is automatically initialized with:

- User authentication tables
- Row Level Security (RLS) policies
- Storage buckets for avatars
- Real-time publications

## 🚀 Development

### Adding New Tables

1. Use the Supabase Studio dashboard at `http://localhost:54323`
2. Go to Table Editor
3. Create your tables with proper RLS policies

### Authentication

The template includes:

- Sign up/Sign in forms
- Password reset
- Email confirmation
- Protected routes
- User session management

### API Routes

Create API routes in `frontend/app/api/`:

```typescript
// Example API route
export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('your_table').select('*');
  return Response.json({ data, error });
}
```

## 🐳 Docker Commands

### Start Services
```bash
cd supabase-project
docker compose up -d
```

### Stop Services
```bash
docker compose down
```

### View Logs
```bash
docker compose logs -f
```

### Reset Database
```bash
./reset.sh
```

## 🔒 Security

- Row Level Security (RLS) enabled by default
- Environment variables for sensitive data
- CORS configured for local development
- Authentication middleware for protected routes

## 📦 Deployment

### Local Development
```bash
# Terminal 1: Start Supabase
cd supabase-project && docker compose up -d

# Terminal 2: Start NextJS
cd frontend && npm run dev
```

### Production
1. Set up a production PostgreSQL database
2. Configure environment variables
3. Deploy NextJS app to your preferred platform
4. Update Supabase URL and keys

## 🛠️ Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 54321, 54323, 3000 are available
2. **Database connection**: Check if Supabase services are running
3. **Authentication**: Verify environment variables are set correctly

### Reset Everything
```bash
cd supabase-project
./reset.sh
```

## 📚 Resources

- [NextJS Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Docker Documentation](https://docs.docker.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---
