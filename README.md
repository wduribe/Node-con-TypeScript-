### Configurando Node con Typescript ###

1) Creamos el proyecto
    npm init -y
    
2) Instalamos dependencias de desarrollo 
    npm install -D typescript ts-node-dev @types/node @types/express rimraf
    
3) Configurar Typescript
    npx tsc --init
    
4) Configura el tsconfig.json
    {
      "compilerOptions": {
      "allowImportingTsExtensions": true,
      "noEmit": true,
      "target": "ES2020",
      "module": "NodeNext",
      "moduleResolution": "NodeNext",
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true
      }
    }
    
5) Configura el package.json 
    "type": "module",
    "scripts": {
    "dev": "ts-node-dev --respawn --clear src/app.ts",
    "build": "rimraf dist && tsc",
    "start": "node dist/app.js"
  }

6) Ejecutar en desarrollo 
  npm run dev



  
