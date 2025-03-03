# Use uma imagem base leve com Python
FROM python:3.10-slim

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o arquivo de dependências para o container
COPY requirements.txt .

# Instala as dependências listadas
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código da aplicação para o container
COPY . .

# Expõe a porta em que o FastAPI estará rodando
EXPOSE 8000

# Comando para iniciar o servidor Uvicorn
CMD ["fastapi", "run", "main.py"]