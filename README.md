---

## 🚀 Funcionalidades

1. **Hero Section Impactante**: Apresentação da data histórica com atalhos de navegação.
2. **Sobre o 20 de Novembro**: Contextualização do Quilombo dos Palmares, da figura de Zumbi e do significado do feriado nacional.
3. **Galeria Interativa de Personalidades**:
   - Cards dinâmicos com ícones e resumos biográficos.
   - Filtro por categoria (*Liderança*, *Literatura*, *Ciência & Direito*).
   - Modal interativo (*"Saiba Mais"*) para leitura detalhada.
4. **Linha do Tempo Histórica**: Visualização cronológica dos principais marcos da resistência antirracista (1695 a 2023).
5. **Gerador de Citações e Reflexões**: Alterna dinamicamente pensamentos de intelectuais como Angela Davis, Luiz Gama, Djamila Ribeiro, Lélia Gonzalez e Carolina Maria de Jesus.
6. **Quiz Educativo**:
   - Pergunta a pergunta com feedback imediato e explicações.
   - Pontuação dinâmica e tela final de encerramento.
7. **Design Totalmente Responsivo**: Otimizado para dispositivos móveis, tablets e desktops.

---

## 💻 Como Executar o Projeto

1. Faça o download ou clone os arquivos do repositório para uma pasta em seu computador.
2. Certifique-se de manter os arquivos na mesma pasta:
   - `index.html`
   - `style.css`
   - `script.js`
3. Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.).

> **Nota:** Não é necessário instalar dependências ou usar servidores backend/Node.js; a aplicação roda nativamente no navegador (Vanilla JS, CSS3 e HTML5).

---

## 🎨 Paleta de Cores e Estética

- **Laranja Queimado (Primary):** `#d35400`
- **Dourado (Gold Accent):** `#f39c12`
- **Fundo Escuro (Dark Neutral):** `#121212` e `#1e1e1e`
- **Texto:** `#f1f1f1` e `#a0a0a0`

---

## 📄 Licença e Uso Educational

Este projeto é de caráter livre e pedagógico. Pode ser utilizado em escolas, universidades, oficinas culturais e eventos institucionais para promover a igualdade racial e a valorização da cultura afro-brasileira.
"""

# Create a zip archive containing all files
zip_buffer = io.BytesIO()
with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
    zip_file.writestr("index.html", index_html)
    zip_file.writestr("style.css", style_css)
    zip_file.writestr("script.js", script_js)
    zip_file.writestr("README.md", readme_md)

# Write individual files and zip
with open("index.html", "w", encoding="utf-8") as f:
    f.write(index_html)

with open("style.css", "w", encoding="utf-8") as f:
    f.write(style_css)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(script_js)

with open("README.md", "w", encoding="utf-8") as f:
    f.write(readme_md)

with open("projeto-consciencia-negra.zip", "wb") as f:
    f.write(zip_buffer.getvalue())

print("Arquivos criados com sucesso!")
