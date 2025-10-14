#!/bin/bash

# Moofar Website Quick Start Script
# Run this script to set up your project structure

echo "🌿 Setting up Moofar Website..."

# Create directories
echo "📁 Creating directory structure..."
mkdir -p client/src/pages
mkdir -p client/src/lib

# Create HomePage.tsx
echo "📄 Creating HomePage.tsx..."
cat > client/src/pages/HomePage.tsx << 'EOF'
# Copy the content from the HomePage.tsx artifact here
EOF

# Create App.tsx
echo "📄 Creating App.tsx..."
cat > client/src/App.tsx << 'EOF'
# Copy the content from the App.tsx artifact here
EOF

# Create index.css
echo "🎨 Creating index.css..."
cat > client/src/index.css << 'EOF'
# Copy the content from the index.css artifact here
EOF

# Create main.tsx
echo "📄 Creating main.tsx..."
cat > client/src/main.tsx << 'EOF'
# Copy the content from the main.tsx artifact here
EOF

# Create queryClient.ts
echo "📄 Creating queryClient.ts..."
cat > client/src/lib/queryClient.ts << 'EOF'
# Copy the content from the queryClient.ts artifact here
EOF

echo "✅ File structure created!"
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Your website will be available at: http://localhost:5000"
echo ""