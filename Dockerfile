# Gunakan image Node.js versi 18 Alpine yang sangat ringan
FROM node:18-alpine

# Tentukan direktori kerja di dalam kontainer
WORKDIR /app

# Salin file server.js dan index.html ke dalam direktori kerja kontainer
COPY server.js .
COPY index.html .

# Ekspos port 3000 agar bisa diakses dari luar kontainer
EXPOSE 3000

# Perintah untuk menjalankan aplikasi saat kontainer dimulai
CMD ["node", "server.js"]
